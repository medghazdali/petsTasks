declare module 'react-native-maps' {
  import * as React from 'react';
  import { ViewProps } from 'react-native';

  export interface MapViewProps extends ViewProps {
    provider?: 'google' | undefined;
    initialRegion?: {
      latitude: number;
      longitude: number;
      latitudeDelta: number;
      longitudeDelta: number;
    };
    region?: {
      latitude: number;
      longitude: number;
      latitudeDelta: number;
      longitudeDelta: number;
    };
    onRegionChange?: (region: {
      latitude: number;
      longitude: number;
      latitudeDelta: number;
      longitudeDelta: number;
    }) => void;
    showsUserLocation?: boolean;
    followsUserLocation?: boolean;
    showsMyLocationButton?: boolean;
    zoomEnabled?: boolean;
    rotateEnabled?: boolean;
    scrollEnabled?: boolean;
    pitchEnabled?: boolean;
    toolbarEnabled?: boolean;
    loadingEnabled?: boolean;
    loadingIndicatorColor?: string;
    loadingBackgroundColor?: string;
  }

  export interface MarkerProps extends ViewProps {
    coordinate: {
      latitude: number;
      longitude: number;
    };
    title?: string;
    description?: string;
    pinColor?: string;
    onPress?: () => void;
    onCalloutPress?: () => void;
    tracksViewChanges?: boolean;
  }

  export class Marker extends React.Component<MarkerProps> {}
  export class MapView extends React.Component<MapViewProps> {
    static Marker: typeof Marker;
  }

  export default MapView;
} 