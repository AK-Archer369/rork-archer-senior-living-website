import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import { MapPin, ArrowRight } from "lucide-react-native";

const HOMES = [
  {
    id: "pinckney",
    name: "Maple Manor of Pinckney",
    address: "7119 Pinckney Rd, Pinckney, MI",
    image: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/6imye9xyizbhddmw1khot",
    description: "A cozy 6-bed home nestled in a quiet setting, offering compassionate care and a welcoming atmosphere.",
  },
  {
    id: "hamburg",
    name: "Maple Manor of Hamburg",
    address: "9090 Chilson Rd, Brighton, MI",
    image: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/uho85o3ghgcsliuw5l2qv",
    description: "Located in Brighton, this home provides attentive support and a vibrant community life for residents.",
  },
];

export function HomesSection() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={styles.container}>
      <Container>
        <Typography variant="h2" align="center" color={COLORS.primaryDark} style={{ marginBottom: SPACING.xl }}>
          Our Homes
        </Typography>

        <View style={[styles.grid, isMobile && styles.gridMobile]}>
          {HOMES.map((home, index) => (
            <View key={index} style={[styles.card, isMobile && styles.cardMobile]}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: home.image }}
                  style={styles.image}
                  contentFit="cover"
                />
                <View style={styles.badge}>
                  <Typography variant="caption" color={COLORS.white} weight="bold">
                    6 Beds
                  </Typography>
                </View>
              </View>
              
              <View style={styles.content}>
                <Typography variant="h4" style={styles.title}>
                  {home.name}
                </Typography>
                <View style={styles.addressRow}>
                  <MapPin size={16} color={COLORS.secondary} />
                  <Typography variant="caption" color={COLORS.textLight}>
                    {home.address}
                  </Typography>
                </View>
                
                <Typography variant="bodySmall" color={COLORS.text} style={styles.description}>
                  {home.description}
                </Typography>

                <View style={styles.actions}>
                  <Button
                    title="View Home"
                    onPress={() => router.push("/homes" as any)}
                    variant="outline"
                    size="small"
                    style={{ flex: 1 }}
                  />
                  <Button
                    title="Directions"
                    onPress={() => {}} // Linking.openURL maps
                    variant="ghost"
                    size="small"
                    icon={<ArrowRight size={16} color={COLORS.primary} />}
                  />
                </View>
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
    paddingVertical: SPACING.xxl,
    backgroundColor: COLORS.background,
  },
  grid: {
    flexDirection: "row",
    gap: SPACING.l,
    justifyContent: "center",
  },
  gridMobile: {
    flexDirection: "column",
  },
  card: {
    flex: 1,
    maxWidth: 500,
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.l,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardMobile: {
    width: "100%",
    maxWidth: "100%",
  },
  imageContainer: {
    height: 240,
    width: "100%",
    position: "relative",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  badge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.s,
  },
  content: {
    padding: SPACING.l,
  },
  title: {
    marginBottom: SPACING.xs,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: SPACING.m,
  },
  description: {
    marginBottom: SPACING.l,
    opacity: 0.8,
  },
  actions: {
    flexDirection: "row",
    gap: SPACING.s,
    alignItems: "center",
  },

});
