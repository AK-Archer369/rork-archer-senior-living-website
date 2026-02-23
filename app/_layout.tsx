import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFrameworkReady } from "@/hooks/useFrameworkReady";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  useFrameworkReady();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="about" />
          <Stack.Screen name="homes/index" />
          <Stack.Screen name="homes/[id]" />
          <Stack.Screen name="services" />
          <Stack.Screen name="reviews" />
          <Stack.Screen name="gallery" />
          <Stack.Screen name="careers" />
          <Stack.Screen name="contact" />
          <Stack.Screen name="pinckney-assisted-living" />
          <Stack.Screen name="hamburg-assisted-living" />
          <Stack.Screen name="blog/index" />
          <Stack.Screen name="blog/[slug]" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
