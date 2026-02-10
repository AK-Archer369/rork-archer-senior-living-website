import React from "react";
import { View, StyleSheet, Platform, useWindowDimensions, Linking } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { COLORS, SPACING } from "@/constants/theme";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import { Phone, MapPin, Calendar } from "lucide-react-native";

export function HeroSection() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  if (isMobile) {
    return (
      <View style={styles.mobileContainer}>
        <View style={styles.mobileContent}>
          <Container>
            <Typography 
              variant="h1" 
              color={COLORS.primaryDark} 
              style={styles.mobileTitle}
              align="center"
            >
              Small Homes.{"\n"}Real Care.{"\n"}Peace of Mind.
            </Typography>
            
            <Typography 
              variant="body" 
              color={COLORS.text} 
              style={styles.mobileSubtitle}
              align="center"
            >
              Archer Senior Living operates two senior living homes with 6 all private rooms each in Livingston County, Michigan, providing attentive, family style support in a comfortable residential setting.
            </Typography>

            <View style={styles.mobileButtonGroup}>
              <Button
                title="Schedule a Tour"
                onPress={() => router.push("/contact" as any)}
                size="large"
                icon={<Calendar size={20} color={COLORS.white} />}
                style={{ width: "100%" }}
              />
              <Button
                title="Call Now"
                onPress={() => Linking.openURL('tel:248-854-4944')}
                variant="outline"
                size="large"
                icon={<Phone size={20} color={COLORS.primary} />}
                style={{ width: "100%" }}
              />
              <Button
                title="View Our Homes"
                onPress={() => router.push("/homes" as any)}
                variant="ghost"
                size="large"
                icon={<MapPin size={20} color={COLORS.primary} />}
                style={{ width: "100%" }}
              />
            </View>
          </Container>
        </View>

        <View style={styles.mobileImageWrapper}>
          <Image
            source={{ uri: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/9lzwa0dqsg571hc3221n4" }}
            style={styles.mobileImage}
            contentFit="cover"
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/9lzwa0dqsg571hc3221n4" }}
          style={styles.image}
          contentFit="cover"
        />
        <View style={styles.overlay} />
      </View>

      <Container style={styles.contentContainer}>
        <View style={styles.content}>
          <Typography 
            variant="h1" 
            color={COLORS.white} 
            style={styles.title}
          >
            Small Homes.{"\n"}Real Care.{"\n"}Peace of Mind.
          </Typography>
          
          <Typography 
            variant="h4" 
            color={COLORS.white} 
            style={styles.subtitle}
            weight="normal"
          >
            Archer Senior Living operates two senior living homes with 6 all private rooms each in Livingston County, Michigan, providing attentive, family style support in a comfortable residential setting.
          </Typography>

          <View style={styles.buttonGroup}>
            <Button
              title="Schedule a Tour"
              onPress={() => router.push("/contact" as any)}
              size="large"
              icon={<Calendar size={20} color={COLORS.white} />}
            />
            <Button
              title="Call Now"
              onPress={() => Linking.openURL('tel:248-854-4944')}
              variant="outline"
              size="large"
              icon={<Phone size={20} color={COLORS.white} />}
              style={{ borderColor: COLORS.white }}
              textStyle={{ color: COLORS.white }}
            />
            <Button
              title="View Our Homes"
              onPress={() => router.push("/homes" as any)}
              variant="ghost"
              size="large"
              icon={<MapPin size={20} color={COLORS.white} />}
              textStyle={{ color: COLORS.white }}
            />
          </View>
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Platform.select({ web: 700, default: 600 }),
    position: "relative",
    justifyContent: "center",
  },
  imageContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  contentContainer: {
    height: "100%",
    justifyContent: "center",
  },
  content: {
    maxWidth: 800,
  },
  title: {
    marginBottom: SPACING.m,
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    marginBottom: SPACING.xl,
    opacity: 0.9,
    lineHeight: 30,
    maxWidth: 700,
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: SPACING.m,
    flexWrap: "wrap",
  },
  mobileContainer: {
    backgroundColor: COLORS.background,
  },
  mobileContent: {
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.m,
  },
  mobileTitle: {
    fontSize: 32,
    lineHeight: 40,
    marginBottom: SPACING.m,
  },
  mobileSubtitle: {
    marginBottom: SPACING.l,
    opacity: 0.8,
    lineHeight: 24,
  },
  mobileButtonGroup: {
    gap: SPACING.s,
    marginTop: SPACING.m,
  },
  mobileImageWrapper: {
    width: "100%",
    height: 300,
    borderRadius: 0,
    overflow: "hidden",
  },
  mobileImage: {
    width: "100%",
    height: "100%",
  },
});
