import React from "react";
import { View, StyleSheet, useWindowDimensions, Linking } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SPACING } from "@/constants/theme";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import { Phone, Calendar } from "lucide-react-native";

export function CtaBand() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={styles.container}>
      <Container>
        <View style={[styles.content, isMobile && styles.contentMobile]}>
          <View style={styles.textContainer}>
            <Typography variant="h2" color={COLORS.white} style={{ marginBottom: 8 }}>
              Need placement soon? We can help.
            </Typography>
            <Typography variant="body" color={COLORS.white} style={{ opacity: 0.9 }}>
              Contact us today to discuss availability and schedule a personal tour.
            </Typography>
          </View>
          
          <View style={[styles.actions, isMobile && styles.actionsMobile]}>
            <Button
              title="Schedule a Tour"
              onPress={() => router.push("/contact" as any)}
              size="large"
              style={{ backgroundColor: COLORS.white }}
              textStyle={{ color: COLORS.primaryDark }}
              icon={<Calendar size={20} color={COLORS.primaryDark} />}
            />
            <Button
              title="Call Now"
              onPress={() => Linking.openURL('tel:248-854-4944')}
              variant="outline"
              size="large"
              style={{ borderColor: COLORS.white }}
              textStyle={{ color: COLORS.white }}
              icon={<Phone size={20} color={COLORS.white} />}
            />
          </View>
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.xxl,
    backgroundColor: COLORS.primary,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: SPACING.l,
  },
  contentMobile: {
    flexDirection: "column",
    textAlign: "center",
  },
  textContainer: {
    flex: 1,
  },
  actions: {
    flexDirection: "row",
    gap: SPACING.m,
  },
  actionsMobile: {
    flexDirection: "column",
    width: "100%",
  },
});
