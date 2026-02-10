import React from "react";
import { Text, TextStyle, StyleSheet, Platform } from "react-native";
import { COLORS, FONTS } from "@/constants/theme";

interface TypographyProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "bodySmall" | "caption";
  color?: string;
  style?: TextStyle;
  align?: "left" | "center" | "right";
  weight?: "normal" | "medium" | "bold";
  numberOfLines?: number;
}

export function Typography({
  children,
  variant = "body",
  color = COLORS.text,
  style,
  align = "left",
  weight,
  numberOfLines,
}: TypographyProps) {
  const getStyle = (): TextStyle => {
    switch (variant) {
      case "h1":
        return styles.h1;
      case "h2":
        return styles.h2;
      case "h3":
        return styles.h3;
      case "h4":
        return styles.h4;
      case "bodySmall":
        return styles.bodySmall;
      case "caption":
        return styles.caption;
      default:
        return styles.body;
    }
  };

  const fontWeight = weight ? { fontWeight: weight } : {};

  return (
    <Text 
      style={[getStyle(), { color, textAlign: align }, fontWeight, style]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: FONTS.heading,
    fontSize: Platform.select({ web: 48, default: 32 }),
    fontWeight: "bold",
    lineHeight: Platform.select({ web: 56, default: 40 }),
    marginBottom: 16,
  },
  h2: {
    fontFamily: FONTS.heading,
    fontSize: Platform.select({ web: 36, default: 28 }),
    fontWeight: "bold",
    lineHeight: Platform.select({ web: 44, default: 34 }),
    marginBottom: 12,
  },
  h3: {
    fontFamily: FONTS.heading,
    fontSize: Platform.select({ web: 24, default: 22 }),
    fontWeight: "bold",
    lineHeight: 32,
    marginBottom: 8,
  },
  h4: {
    fontFamily: FONTS.heading,
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 28,
    marginBottom: 8,
  },
  body: {
    fontFamily: FONTS.body,
    fontSize: 16,
    lineHeight: 24,
  },
  bodySmall: {
    fontFamily: FONTS.body,
    fontSize: 14,
    lineHeight: 20,
  },
  caption: {
    fontFamily: FONTS.body,
    fontSize: 12,
    lineHeight: 16,
  },
});
