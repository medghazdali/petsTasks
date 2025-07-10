# Pet Adoption App

A beautiful React Native mobile application for pet adoption with a modern UI/UX design.

## Features

- **Pet Browsing**: View a list of available pets with filtering options
- **Pet Details**: Detailed information about each pet including traits and adoption fee
- **Adoption Process**: Simulated adoption process with payment screen
- **Location Services**: Display user's current location with address information
- **Modern UI/UX**: Beautiful, responsive design with smooth animations

## Screenshots

![Home Screen](./Screenshots/Simulator%20Screenshot%20-%20iPhone%2016%20-%202025-07-10%20at%2020.14.53.png)
![Pet Details](./Screenshots/Simulator%20Screenshot%20-%20iPhone%2016%20-%202025-07-10%20at%2020.15.08.png)
![Adoption Form](./Screenshots/Simulator%20Screenshot%20-%20iPhone%2016%20-%202025-07-10%20at%2020.15.20.png)
![Location Screen](./Screenshots/Simulator%20Screenshot%20-%20iPhone%2016%20-%202025-07-10%20at%2020.17.16.png)

*Note: These screenshots showcase the app's modern UI design and key features including pet browsing, detailed pet information, the adoption process, and location services.*


## Demo

Watch the app demo [here](https://www.loom.com/share/f51f61568335406e9e23f483841352e1?sid=f5494919-a0ca-4ec5-ace9-4ff65ce8bfd7).

## Technologies Used

- React Native / Expo
- React Navigation
- Expo Location
- React Native Maps
- Async Storage
- Vector Icons

## Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/petsTasks.git
cd petsTasks
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

4. Run on iOS or Android:
```
npm run ios
# or
npm run android
```

## Project Structure

```
petsTasks/
├── App.tsx               # Main application component
├── assets/               # Images and assets
├── components/           # Reusable UI components
│   ├── Button.tsx        # Custom button component
│   ├── InputField.tsx    # Form input component
│   ├── LoadingIndicator.tsx # Loading spinner component
│   ├── MapFallback.tsx   # Fallback for when maps aren't available
│   └── PetCard.tsx       # Pet card for list view
├── screens/              # Application screens
│   ├── HomeScreen.tsx    # Main pet listing screen
│   ├── PetDetailsScreen.tsx # Pet details view
│   ├── AdoptionScreen.tsx # Adoption form and payment
│   ├── LocationScreen.tsx # User location map view
│   └── SuccessScreen.tsx  # Adoption confirmation
└── utils/               # Utilities and helpers
    ├── api.ts           # Mock API functions
    ├── config.ts        # App configuration and feature flags
    └── theme.ts         # App theme (colors, typography, etc.)
```

## Mock API

This app uses a mock API for demonstration purposes. In a real-world scenario, you would replace the mock API with actual backend calls.

## Written Questions


### How would you implement real-time GPS tracking using any location tracking service in React Native?

For real-time GPS tracking in React Native, I'd use a combination of React Native's Geolocation API with background tracking libraries:

1. Set up permissions in both Android and iOS native files
2. Use `react-native-background-geolocation` for continuous tracking even when app is in background
3. Implement a location service that polls position at configurable intervals
4. Store coordinates in state/context and optionally push to a backend
5. Display real-time updates on a map using React Native Maps
6. Optimize battery usage by adjusting tracking frequency based on app state

### What are the steps to publish a React Native app to both Google Play and Apple App Store?

Publishing to Google Play:
1. Generate a signed release APK/AAB 
2. Create a new application in the Google Play Console
3. Fill in store listing details, screenshots, and promotional graphics
4. Set up content rating and pricing
5. Upload the AAB file to the production track
6. Submit for review  

Publishing to Apple App Store:
1. Enroll in the Apple Developer Program  
2. Generate an app-specific Apple ID in App Store Connect
3. Configure app signing certificates and provisioning profiles
4. Build a release IPA using Xcode or `expo build:ios`
5. Fill in App Store metadata, screenshots, and preview videos
6. Submit for review through App Store Connect  

### What challenges have you faced with integrating third-party SDKs (e.g., login, payments), and how did you solve them?

Common challenges with third-party SDKs:

1. **Conflicting dependencies**: Solved by using resolution in package.json or carefully managing native module versions
2. **Platform-specific issues**: Created platform-specific implementation files (*.ios.js and *.android.js)
3. **Outdated documentation**: Directly examined SDK source code and examples from GitHub issues
4. **Native linking problems**: Migrated to autolinking with React Native 0.60+ and used pod install for iOS
5. **Performance impacts**: Implemented lazy loading for heavy SDKs and monitored performance metrics
6. **Security concerns with payment SDKs**: Used official wrappers (e.g., react-native-stripe-sdk) and followed PCI compliance guidelines

## License

Mohamed Ghazdali
med.ghazdali@gmail.com 