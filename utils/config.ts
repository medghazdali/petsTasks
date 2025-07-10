import { FeatureConfig } from '../types';

interface ApiConfig {
  baseUrl: string;
  timeout: number;
}

interface AppConfig {
  version: string;
  name: string;
}

interface Config {
  features: FeatureConfig;
  api: ApiConfig;
  app: AppConfig;
}

// Feature flags and environment configuration
export const config: Config = {
  features: {
    // Set to false if maps are not available in the current environment
    enableMaps: false,
  },
  api: {
    // Base URL for API calls (mock in this case)
    baseUrl: 'https://api.example.com',
    // Timeout for API calls in milliseconds
    timeout: 10000,
  },
  app: {
    // App version
    version: '1.0.0',
    // App name
    name: 'Pet Adoption',
  },
};

// Helper function to check if a feature is enabled
export const isFeatureEnabled = (featureName: keyof FeatureConfig): boolean => {
  return config.features[featureName] === true;
};

// Helper function to toggle a feature flag (useful for testing)
export const toggleFeature = (featureName: keyof FeatureConfig): boolean => {
  if (featureName in config.features) {
    config.features[featureName] = !config.features[featureName];
    return config.features[featureName];
  }
  return false;
};

export default config; 