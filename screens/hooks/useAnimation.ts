import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

interface AnimationOptions {
  toValue: number;
  duration?: number;
  delay?: number;
  useNativeDriver?: boolean;
}

export const useAnimation = (initialValue: number = 0) => {
  const animatedValue = useRef(new Animated.Value(initialValue)).current;
  
  const animate = (options: AnimationOptions) => {
    const { toValue, duration = 300, delay = 0, useNativeDriver = true } = options;
    
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver,
    }).start();
  };
  
  const fadeIn = (duration: number = 500, delay: number = 0) => {
    animate({
      toValue: 1,
      duration,
      delay,
      useNativeDriver: true,
    });
  };
  
  const fadeOut = (duration: number = 500, delay: number = 0) => {
    animate({
      toValue: 0,
      duration,
      delay,
      useNativeDriver: true,
    });
  };
  
  return {
    animatedValue,
    animate,
    fadeIn,
    fadeOut,
  };
}; 