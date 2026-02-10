import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";
import { Home, Users, Heart, MapPin, ShieldCheck, Award } from "lucide-react-native";

const FEATURES = [
  {
    icon: Home,
    title: "2 Homes • 12 Total Beds",
    description: "Intimate, family style environment",
  },
  {
    icon: Users,
    title: "Personalized Care",
    description: "High staff to resident ratio",
  },
  {
    icon: Heart,
    title: "Family Focused",
    description: "Care built around dignity and connection",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Professional Staffing",
    description: "Round the clock care and supervision",
  },
  {
    icon: MapPin,
    title: "Livingston County",
    description: "Conveniently located in MI",
  },
  {
    icon: Award,
    title: "Licensed Senior Living",
    description: "State licensed and regularly inspected",
  },
];

export function TrustStrip() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={styles.container}>
      <Container>
        <View style={[styles.grid, isMobile && styles.gridMobile]}>
          {FEATURES.map((feature, index) => (
            <View key={index} style={[styles.item, isMobile && styles.itemMobile]}>
              <View style={styles.iconContainer}>
                <feature.icon size={24} color={COLORS.primary} />
              </View>
              <View style={isMobile ? styles.textMobile : undefined}>
                <Typography variant="body" weight="bold" color={COLORS.primaryDark} align={isMobile ? "center" : undefined}>
                  {feature.title}
                </Typography>
                <Typography variant="caption" color={COLORS.textLight} align={isMobile ? "center" : undefined}>
                  {feature.description}
                </Typography>
              </View>
            </View>
          ))}
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.l,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  grid: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: SPACING.l,
    maxWidth: 1200,
    alignSelf: "center",
  },
  gridMobile: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: SPACING.m,
    paddingHorizontal: SPACING.m,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.s,
    minWidth: 180,
  },
  itemMobile: {
    width: "45%",
    minWidth: 140,
    maxWidth: 160,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: SPACING.xs,
    marginBottom: SPACING.m,
    paddingHorizontal: SPACING.xs,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
  textMobile: {
    alignItems: "center",
  },
});
