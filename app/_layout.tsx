import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Platform } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

// Suppress ResizeObserver loop errors in web (harmless browser warning)
if (Platform.OS === 'web' && typeof window !== 'undefined') {
  const originalError = console.error;
  const originalWarn = console.warn;
  
  const isResizeObserverError = (msg: unknown) => 
    typeof msg === 'string' && msg.includes('ResizeObserver');

  console.error = (...args) => {
    if (isResizeObserverError(args[0])) return;
    originalError.call(console, ...args);
  };
  
  console.warn = (...args) => {
    if (isResizeObserverError(args[0])) return;
    originalWarn.call(console, ...args);
  };

  window.addEventListener('error', (e) => {
    if (e.message?.includes('ResizeObserver')) {
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  });
  
  window.addEventListener('unhandledrejection', (e) => {
    if (e.reason?.message?.includes('ResizeObserver')) {
      e.preventDefault();
    }
  });
}

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="about" />
          <Stack.Screen name="homes" />
          <Stack.Screen name="services" />
          <Stack.Screen name="reviews" />
          <Stack.Screen name="gallery" />
          <Stack.Screen name="careers" />
          <Stack.Screen name="contact" />
          <Stack.Screen name="pinckney-assisted-living" />
          <Stack.Screen name="hamburg-assisted-living" />
        </Stack>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
