import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";
import { Activity, Pill, Utensils, Brain, ShieldAlert, HeartHandshake } from "lucide-react-native";

const SERVICES = [
  {
    icon: Activity,
    title: "Assistance with ADLs",
    description: "Support with bathing, dressing, grooming, and mobility.",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Careful monitoring and administration of medications.",
  },
  {
    icon: Utensils,
    title: "Meals & Snacks",
    description: "Nutritious, home-cooked meals tailored to dietary needs.",
  },
  {
    icon: Brain,
    title: "Memory Support",
    description: "A safe, structured environment for cognitive support.",
  },
  {
    icon: ShieldAlert,
    title: "Fall-Safety",
    description: "Mobility support and fall prevention measures.",
  },
  {
    icon: HeartHandshake,
    title: "Family Communication",
    description: "Regular updates and open lines of communication.",
  },
];

export function ServicesGrid() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.header}>
          <Typography variant="h2" align="center" color={COLORS.primaryDark}>
            Care & Support
          </Typography>
          <Typography variant="body" align="center" color={COLORS.textLight} style={styles.subtitle}>
            Comprehensive care services designed to support independence and dignity.
          </Typography>
        </View>

        <View style={styles.grid}>
          {SERVICES.map((service, index) => (
            <View 
              key={index} 
              style={[
                styles.card, 
                { width: isMobile ? "100%" : "31%" } // Approx 3 columns with gap
              ]}
            >
              <View style={styles.iconWrapper}>
                <service.icon size={32} color={COLORS.primary} />
              </View>
              <Typography variant="h4" style={styles.cardTitle}>
                {service.title}
              </Typography>
              <Typography variant="bodySmall" color={COLORS.textLight} style={styles.cardDesc}>
                {service.description}
              </Typography>
            </View>
          ))}
        </View>

        <Typography variant="caption" align="center" color={COLORS.textLighter} style={{ marginTop: SPACING.l }}>
          Services vary by resident needs and care plan.
        </Typography>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.xxl,
    backgroundColor: COLORS.white,
  },
  header: {
    marginBottom: SPACING.xl,
    alignItems: "center",
  },
  subtitle: {
    maxWidth: 600,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // changed from center to space-between
    gap: SPACING.m,
  },
  card: {
    backgroundColor: COLORS.background,
    padding: SPACING.l,
    borderRadius: BORDER_RADIUS.m,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "flex-start",
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.m,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    marginBottom: SPACING.s,
    color: COLORS.text,
  },
  cardDesc: {
    lineHeight: 20,
  },
});
