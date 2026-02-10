import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { useRouter } from "expo-router";
import { ScreenLayout } from "@/components/layout/ScreenLayout";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { Activity, Pill, Utensils, Brain, ShieldAlert, HeartHandshake, Truck, Music } from "lucide-react-native";

const SERVICES_FULL = [
  {
    icon: Activity,
    title: "Activities of Daily Living (ADLs)",
    description: "Our caregivers provide respectful, dignified assistance with bathing, dressing, grooming, toileting, and mobility. We encourage independence where possible while ensuring safety and hygiene.",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "We handle all aspects of medication administration including ordering refills, secure storage, and documentation, ensuring residents take the right dosage at the right time.",
  },
  {
    icon: Utensils,
    title: "Nutritious Meals & Snacks",
    description: "We prepare three home cooked meals a day plus snacks. We accommodate special dietary needs such as diabetic, low sodium, and puree diets, and turn mealtime into a social event.",
  },
  {
    icon: Brain,
    title: "Memory Support",
    description: "Our staff is trained to support residents with mild to moderate memory impairment. We use redirection techniques, consistent routines, and a secure environment to reduce anxiety.",
  },
  {
    icon: ShieldAlert,
    title: "Fall Prevention & Safety",
    description: "Our homes are designed to be barrier free. We provide mobility assistance, transfer help using gait belts or lifts if needed, and 24 hour supervision to prevent falls.",
  },
  {
    icon: HeartHandshake,
    title: "Companionship",
    description: "Beyond physical care, we provide emotional support. Our small setting means staff have time to sit, talk, and engage with residents, combating loneliness and isolation.",
  },
  {
    icon: Truck,
    title: "Care Coordination",
    description: "We coordinate with visiting physicians, nurses, podiatrists, and physical therapists. We also handle communication with pharmacies and schedule transportation for appointments.",
  },
  {
    icon: Music,
    title: "Activities & Life Enrichment",
    description: "From birthday celebrations and holiday parties to puzzles, music, and gentle exercise, we keep residents engaged. We also welcome family visits at any time.",
  },
];

export default function ServicesScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <ScreenLayout>
      <View style={styles.header}>
        <Container>
          <Typography variant="h1" color={COLORS.white} align="center">
            Care & Services
          </Typography>
          <Typography variant="h3" color={COLORS.white} align="center" weight="normal" style={{ opacity: 0.9 }}>
            Comprehensive Support Tailored to Each Resident
          </Typography>
        </Container>
      </View>

      <Container style={{ paddingBottom: SPACING.xxl }}>
        <Typography variant="body" align="center" style={styles.intro}>
          At Archer Senior Living, care plans are customized. We assess each resident&apos;s needs prior to admission and update the plan regularly. Our all-inclusive pricing typically covers these core services.
        </Typography>

        <View style={[styles.grid, isMobile && styles.gridMobile]}>
          {SERVICES_FULL.map((service, index) => (
            <View key={index} style={[styles.card, isMobile && styles.cardMobile]}>
              <View style={styles.iconHeader}>
                <View style={styles.iconBox}>
                  <service.icon size={28} color={COLORS.white} />
                </View>
                <Typography variant="h4" color={COLORS.primaryDark} style={{ flex: 1, marginBottom: 0 }}>
                  {service.title}
                </Typography>
              </View>
              <Typography variant="body" color={COLORS.textLight} style={{ lineHeight: 24 }}>
                {service.description}
              </Typography>
              {(service.title === "Companionship" || service.title === "Activities & Life Enrichment") && (
                <Button
                  title="See More"
                  variant="outline"
                  size="small"
                  onPress={() => router.push('/gallery?album=activities' as any)}
                  style={{ marginTop: SPACING.m, alignSelf: 'flex-start' }}
                />
              )}
            </View>
          ))}
        </View>

        <View style={styles.disclaimer}>
          <Typography variant="bodySmall" align="center" color={COLORS.textLighter}>
            * Specific services and level of care are determined by a pre admission assessment. Third party services such as hospice and specialized therapy can be arranged but may incur separate costs.
          </Typography>
        </View>
      </Container>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primaryDark,
    paddingVertical: SPACING.xxl,
    marginBottom: SPACING.xl,
  },
  intro: {
    maxWidth: 800,
    alignSelf: "center",
    marginBottom: SPACING.xl,
    fontSize: 18,
    lineHeight: 28,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SPACING.l,
  },
  gridMobile: {
    flexDirection: "column",
  },
  card: {
    width: "48%", // 2 cols
    backgroundColor: COLORS.white,
    padding: SPACING.l,
    borderRadius: BORDER_RADIUS.m,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardMobile: {
    width: "100%",
  },
  iconHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.m,
    marginBottom: SPACING.m,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  disclaimer: {
    marginTop: SPACING.xl,
    paddingTop: SPACING.l,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
});
