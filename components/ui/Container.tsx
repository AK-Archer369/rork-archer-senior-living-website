import React from "react";
import { View, StyleSheet, ViewStyle, Platform } from "react-native";
import { SPACING } from "@/constants/theme";

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  maxWidth?: number;
}

export function Container({ children, style, maxWidth = 1200 }: ContainerProps) {
  return (
    <View style={[styles.container, { maxWidth }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: Platform.select({ web: SPACING.xl, default: SPACING.m }),
  },
});
