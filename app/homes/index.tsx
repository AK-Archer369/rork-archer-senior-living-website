import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ScreenLayout } from "@/components/layout/ScreenLayout";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { MapPin, ArrowRight, Bed } from "lucide-react-native";

const HOMES = [
  {
    id: "pinckney",
    path: "/pinckney-assisted-living",
    name: "Maple Manor of Pinckney",
    address: "7119 Pinckney Road, Pinckney, MI 48169",
    image: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/6imye9xyizbhddmw1khot", 
    description: "Nestled in a quiet, rural setting, our Pinckney home offers a peaceful retreat with spacious outdoor areas and a cozy, family-centered interior.",
  },
  {
    id: "hamburg",
    path: "/hamburg-assisted-living",
    name: "Maple Manor of Hamburg",
    address: "9090 Chilson Road, Brighton, MI 48116",
    image: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/uho85o3ghgcsliuw5l2qv",
    description: "Maple Manor of Hamburg is a quiet, boutique senior living home with peaceful views overlooking a nearby golf course. The setting is calm, bright, and home like, designed for comfort, dignity, and daily connection.",
  },
];

const COMMUNITY_SPACE_IMAGES = [
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/fodixtt0dsa7rqmc4pv46",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/6vdyyd1urvukjviz6dusb",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/4cpaxx10075c4awsgrepu",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/0vk315y9p43wt3jtezq1l",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/e9ld8uzn6f5f3pc6mlxtz",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/azfnbxn5r6hb23ba1ulq0",
];

const RESIDENT_ROOMS_IMAGES = [
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/kdaj6cx845rixvmorjp89",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ym1stxyi5gdeg3anadkhz",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/eab5n338fi6ikqhoiuwfe",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ac2yflbr36t65jqigzpg7",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/oaapgxekw45uopkmoqfnm",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/n099sz3vrf1eogl4np4ov",
];

const ACTIVITIES_IMAGES = [
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/syso7oqzblvm7qzli0525",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/f10yoldysfy45tb2frx3m",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/9scc2cj1zvi6t0ild3r0y",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/5orbfi6gfco1rkw6r31ja",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/3dh7713p83pkahhftmma6",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/kpmivr5gfqw2ptgcgdxn8",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/5ktrg6fdj6io88iyqh32h",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/m7wu86ni9c9aacm5s430q",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/hwqxlqtx9xczyr6ys8qns",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/mtcqe6g91vhfi7q14qk8i",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/pkp1cvnd906bjh6etibmt",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/70avkixwky767ebatg982",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/dh10xtleumcm0lap68tuv",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/cmedgd1mkxsrspl58iucz",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/u72w9ztv1t4exfqh1rcq9",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/pe1oymojoa41rimjmhdqf",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ey7z884xsf3otm2gvinde",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/yhyw3sqx1inato0ydqy9u",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/8t3wlj6o55rzhtyw01wv6",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/hm7xmepmgm8c2r7x9yo3i",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/uucix882ub62z5w4qch5g",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/44zbnrm48z8lhifu7irl8",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/wle2tpnqe6mg0zs1hf4i3",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/filhsx11q57uos6y0dbxq",
];

const GALLERY_IMAGES = [
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/6imye9xyizbhddmw1khot",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/uho85o3ghgcsliuw5l2qv",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/fodixtt0dsa7rqmc4pv46",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/6vdyyd1urvukjviz6dusb",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/4cpaxx10075c4awsgrepu",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/kdaj6cx845rixvmorjp89",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/syso7oqzblvm7qzli0525",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/f10yoldysfy45tb2frx3m",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/9scc2cj1zvi6t0ild3r0y",
];

export default function HomesIndexScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <ScreenLayout>
      <View style={styles.header}>
        <Container>
          <Typography variant="h1" color={COLORS.white} align="center">
            Our Homes
          </Typography>
          <Typography variant="h3" color={COLORS.white} align="center" weight="normal" style={{ opacity: 0.9 }}>
            Intimate, Family-Style Living in Livingston County
          </Typography>
        </Container>
      </View>

      <Container style={{ paddingBottom: SPACING.xxl }}>
        <View style={styles.intro}>
          <Typography variant="body" align="center" style={{ maxWidth: 800, alignSelf: "center", fontSize: 18 }}>
            We operate two senior living homes with 6 all private rooms each. Both locations provide the same high standard of personalized care, home cooked meals, and engaging activities.
          </Typography>
        </View>

        <View style={styles.list}>
          {HOMES.map((home, index) => (
            <View key={index} style={[styles.card, isMobile && styles.cardMobile]}>
              <View style={[styles.imageWrapper, isMobile && styles.imageWrapperMobile]}>
                <Image
                  source={{ uri: home.image }}
                  style={styles.image}
                  contentFit="cover"
                />
              </View>
              
              <View style={styles.content}>
                <Typography variant="h2" color={COLORS.primaryDark} style={{ marginBottom: SPACING.s }}>
                  {home.name}
                </Typography>
                
                <View style={styles.badgeRow}>
                  <View style={styles.badge}>
                    <Bed size={14} color={COLORS.primary} />
                    <Typography variant="caption" weight="bold" color={COLORS.primary}>
                      6 BEDS
                    </Typography>
                  </View>
                  <View style={styles.badge}>
                    <Typography variant="caption" weight="bold" color={COLORS.primary}>
                      AFC LICENSED
                    </Typography>
                  </View>
                </View>

                <View style={styles.addressRow}>
                  <MapPin size={18} color={COLORS.secondary} />
                  <Typography variant="body" color={COLORS.textLight}>
                    {home.address}
                  </Typography>
                </View>

                <Typography variant="body" style={styles.description}>
                  {home.description}
                </Typography>

                <View style={styles.actions}>
                  <Button
                    title="View Details"
                    onPress={() => router.push(home.path as any)}
                    size="medium"
                  />
                  <Button
                    title="Get Directions"
                    onPress={() => {}} 
                    variant="outline"
                    icon={<ArrowRight size={18} color={COLORS.primary} />}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </Container>

      <View style={styles.heroSection}>
        <HeroCarousel
          images={COMMUNITY_SPACE_IMAGES}
          title="Community Spaces"
          subtitle="Warm, inviting common areas designed for comfort and connection"
        />
      </View>

      <View style={styles.heroSection}>
        <HeroCarousel
          images={RESIDENT_ROOMS_IMAGES}
          title="Resident Rooms"
          subtitle="6 all private rooms that feel like home"
        />
      </View>

      <View style={styles.heroSection}>
        <HeroCarousel
          images={ACTIVITIES_IMAGES}
          title="Activities and Life Enrichment"
          subtitle="Engaging activities, celebrations, and meaningful moments every day"
        />
      </View>

      <View style={styles.heroSection}>
        <HeroCarousel
          images={GALLERY_IMAGES}
          title="Gallery"
          subtitle="A glimpse into daily life at our homes"
        />
      </View>
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
    marginBottom: SPACING.xl,
  },
  list: {
    gap: SPACING.xl,
  },
  card: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.l,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  cardMobile: {
    flexDirection: "column",
  },
  imageWrapper: {
    width: "45%",
    minHeight: 300,
  },
  imageWrapperMobile: {
    width: "100%",
    height: 250,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    padding: SPACING.xl,
    justifyContent: "center",
  },
  badgeRow: {
    flexDirection: "row",
    gap: SPACING.s,
    marginBottom: SPACING.m,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: COLORS.background,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS.s,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.s,
    marginBottom: SPACING.m,
  },
  description: {
    marginBottom: SPACING.l,
    opacity: 0.8,
    lineHeight: 24,
  },
  actions: {
    flexDirection: "row",
    gap: SPACING.m,
    flexWrap: "wrap",
  },
  heroSection: {
    marginBottom: SPACING.xxl,
  },
});
