import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";

const IMAGES = [
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/5orbfi6gfco1rkw6r31ja",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/3dh7713p83pkahhftmma6",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/kpmivr5gfqw2ptgcgdxn8",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/56s9ijkdwezk0kpmlycce",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/h5dc4sw7lhhix067u2ssa",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/2o85av0l2k6icj0utgw19",
];

export function GalleryTeaser() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.header}>
          <Typography variant="h2" color={COLORS.primaryDark} align="center">
            Life at Archer Senior Living
          </Typography>
        </View>

        <View style={styles.grid}>
          {IMAGES.map((src, index) => (
            <View 
              key={index} 
              style={[
                styles.imageWrapper, 
                { width: isMobile ? "48%" : isTablet ? "48%" : "32%" }
              ]}
            >
              <Image
                source={{ uri: src }}
                style={styles.image}
                contentFit="cover"
              />
            </View>
          ))}
        </View>

        <View style={styles.cta}>
          <Button
            title="View Full Gallery"
            // @ts-ignore
            onPress={() => router.push("/gallery")}
            variant="outline"
          />
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
  header: {
    marginBottom: SPACING.l,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SPACING.s,
    justifyContent: "center",
  },
  imageWrapper: {
    aspectRatio: 4 / 3,
    borderRadius: BORDER_RADIUS.m,
    overflow: "hidden",
    minHeight: 200,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  cta: {
    marginTop: SPACING.xl,
    alignItems: "center",
  },
});
