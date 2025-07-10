import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, shadows } from '../utils/theme';
import { ImageCarouselProps } from '../types';

interface CarouselImage {
  id: string;
  uri: string;
}

const { width } = Dimensions.get('window');

const ImageCarousel: React.FC<ImageCarouselProps & {
  autoPlay?: boolean;
  autoPlayInterval?: number;
}> = ({ 
  images, 
  height = width * 0.8, 
  showControls = true,
  showPagination = true,
  autoPlay = false,
  autoPlayInterval = 3000,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList<CarouselImage> | null>(null);
  
  // Format images for the carousel if they're not already formatted
  const formattedImages: CarouselImage[] = Array.isArray(images) 
    ? images.map((img, index) => {
        if (typeof img === 'string') {
          return { id: String(index + 1), uri: img };
        }
        return { id: String(index + 1), uri: img };
      })
    : [];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setActiveIndex(currentIndex);
  };
  
  const scrollToImage = (index: number): void => {
    if (flatListRef.current && index >= 0 && index < formattedImages.length) {
      flatListRef.current.scrollToOffset({
        offset: index * width,
        animated: true,
      });
      setActiveIndex(index);
    }
  };

  const handlePrevious = (): void => {
    const newIndex = activeIndex === 0 ? formattedImages.length - 1 : activeIndex - 1;
    scrollToImage(newIndex);
  };

  const handleNext = (): void => {
    const newIndex = activeIndex === formattedImages.length - 1 ? 0 : activeIndex + 1;
    scrollToImage(newIndex);
  };

  // Auto play effect
  React.useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (autoPlay && formattedImages.length > 1) {
      interval = setInterval(() => {
        const newIndex = activeIndex === formattedImages.length - 1 ? 0 : activeIndex + 1;
        scrollToImage(newIndex);
      }, autoPlayInterval);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex, autoPlay, autoPlayInterval, formattedImages.length]);

  const renderCarouselItem = ({ item }: { item: CarouselImage }): React.ReactElement => (
    <View style={[styles.carouselItemContainer, { height }]}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={formattedImages}
        renderItem={renderCarouselItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        decelerationRate="fast"
      />
      
      {showPagination && formattedImages.length > 1 && (
        <View style={styles.paginationContainer}>
          {formattedImages.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.paginationDot,
                index === activeIndex && styles.paginationDotActive,
              ]}
              onPress={() => scrollToImage(index)}
            />
          ))}
        </View>
      )}
      
      {showControls && formattedImages.length > 1 && (
        <>
          <TouchableOpacity
            style={[styles.controlButton, styles.leftButton]}
            onPress={handlePrevious}
          >
            <MaterialIcons name="chevron-left" size={30} color={colors.card} />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.controlButton, styles.rightButton]}
            onPress={handleNext}
          >
            <MaterialIcons name="chevron-right" size={30} color={colors.card} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  carouselItemContainer: {
    width: width,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: colors.card,
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  controlButton: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -25 }],
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.medium,
  },
  leftButton: {
    left: 10,
  },
  rightButton: {
    right: 10,
  },
});

export default ImageCarousel; 