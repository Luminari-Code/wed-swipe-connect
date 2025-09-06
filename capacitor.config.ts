import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.4d803f1c12f04b2e86b9e76e6e0646a7',
  appName: 'wed-swipe-connect',
  webDir: 'dist',
  server: {
    url: 'https://4d803f1c-12f0-4b2e-86b9-e76e6e0646a7.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;