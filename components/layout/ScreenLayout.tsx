import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { COLORS } from "@/constants/theme";
import { StatusBar } from "expo-status-bar";

interface ScreenLayoutProps {
  children: React.ReactNode;
  useScrollView?: boolean;
}

export function ScreenLayout({ children, useScrollView = true }: ScreenLayoutProps) {
  const Content = (
    <View style={styles.mainContent}>
      {children}
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={COLORS.primaryDark} />
      <Header />
      {useScrollView ? (
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
          {Content}
          <Footer />
        </ScrollView>
      ) : (
        <View style={styles.scrollContainer}>
          {Content}
          <Footer />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  mainContent: {
    flex: 1,
  },
});
