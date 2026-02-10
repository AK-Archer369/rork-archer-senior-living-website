import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  Platform,
  Pressable,
} from "react-native";
import { COLORS, BORDER_RADIUS } from "@/constants/theme";
import { Typography } from "./Typography";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

export function Button({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  isLoading = false,
  disabled = false,
  style,
  textStyle,
  icon,
}: ButtonProps) {
  const getVariantStyle = (): ViewStyle => {
    switch (variant) {
      case "secondary":
        return styles.secondary;
      case "outline":
        return styles.outline;
      case "ghost":
        return styles.ghost;
      default:
        return styles.primary;
    }
  };

  const getSizeStyle = (): ViewStyle => {
    switch (size) {
      case "small":
        return styles.small;
      case "large":
        return styles.large;
      default:
        return styles.medium;
    }
  };

  const getTextColor = () => {
    if (disabled) return COLORS.textLighter;
    switch (variant) {
      case "primary":
        return COLORS.white;
      case "secondary":
        return COLORS.white; // Or maybe text color depending on contrast
      case "outline":
        return COLORS.primary;
      case "ghost":
        return COLORS.primary;
      default:
        return COLORS.white;
    }
  };

  const ButtonComponent = Platform.OS === "web" ? Pressable : TouchableOpacity;

  return (
    <ButtonComponent
      onPress={onPress}
      disabled={disabled || isLoading}
      style={[
        styles.base,
        getVariantStyle(),
        getSizeStyle(),
        disabled && styles.disabled,
        style,
        // @ts-ignore - web hover support would go here with Pressable state
      ]}
      // @ts-ignore
      hoverStyle={
        Platform.OS === "web" && !disabled && variant === "primary"
          ? { opacity: 0.9 }
          : undefined
      }
    >
      {isLoading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <>
          {icon}
          <Typography
            variant={size === "large" ? "h4" : "body"}
            weight="bold"
            color={getTextColor()}
            style={{
              marginBottom: 0,
              marginLeft: icon ? 8 : 0,
              ...textStyle,
            }}
          >
            {title}
          </Typography>
        </>
      )}
    </ButtonComponent>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: BORDER_RADIUS.full,
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  ghost: {
    backgroundColor: "transparent",
  },
  small: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  disabled: {
    backgroundColor: COLORS.border,
    borderColor: COLORS.border,
    opacity: 0.7,
  },
});
