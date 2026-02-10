import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";
import { Check } from "lucide-react-native";

const BULLETS = [
  "Medication support",
  "Assistance with daily activities",
  "Home-cooked meals",
  "Engaging routines",
];

export function WelcomeSection() {
  const { width } = useWindowDimensions();
  const isMobile = width < 900;

  return (
    <View style={styles.container}>
      <Container>
        <View style={[styles.content, isMobile && styles.contentMobile]}>
          {!isMobile && (
            <View style={styles.imageWrapper}>
              <Image
                testID="welcome-section-image"
                source={{ uri: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/dkh3p3192di6j9enrgcgg" }}
                style={styles.image}
                contentFit="cover"
              />
            </View>
          )}
          
          <View style={[styles.textContent, isMobile && styles.textContentMobile]}>
            <Typography variant="h2" color={COLORS.primaryDark}>
              Welcome to Archer Senior Living
            </Typography>
            <Typography variant="body" color={COLORS.text} style={styles.paragraph}>
              We emphasize a small-home model that ensures consistent caregivers, personalized routines, and open family communication. Our residents enjoy a safe, comfortable environment where they are truly known and valued.
            </Typography>
            
            <View style={styles.bullets}>
              {BULLETS.map((bullet, index) => (
                <View key={index} style={styles.bulletItem}>
                  <Check size={20} color={COLORS.secondary} />
                  <Typography variant="body" color={COLORS.text}>
                    {bullet}
                  </Typography>
                </View>
              ))}
            </View>
          </View>

          {isMobile && (
            <View style={styles.imageWrapperMobile}>
              <Image
                testID="welcome-section-image-mobile"
                source={{ uri: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/dkh3p3192di6j9enrgcgg" }}
                style={styles.image}
                contentFit="cover"
              />
            </View>
          )}
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.xxl,
    backgroundColor: COLORS.background,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.xl,
  },
  contentMobile: {
    flexDirection: "column",
    gap: SPACING.l,
  },
  imageWrapper: {
    flex: 1,
    height: 400,
    borderRadius: BORDER_RADIUS.l,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  imageWrapperMobile: {
    width: "100%",
    height: 280,
    borderRadius: BORDER_RADIUS.l,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  textContent: {
    flex: 1,
  },
  textContentMobile: {
    width: "100%",
  },
  paragraph: {
    marginBottom: SPACING.l,
    opacity: 0.8,
  },
  bullets: {
    gap: SPACING.s,
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.s,
  },
});
