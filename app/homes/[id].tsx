import React from "react";
import { View, StyleSheet, useWindowDimensions, Linking, Pressable, Platform } from "react-native";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import { ScreenLayout } from "@/components/layout/ScreenLayout";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { MapPin, Check, Phone, Calendar } from "lucide-react-native";

type HomeData = {
  name: string;
  address: string;
  description: string;
  features: string[];
  heroImage: string;
  gallery: string[];
  communitySpaceImages: string[];
  roomsShowcaseImages: string[];
  activitiesImages: string[];
  mapEmbedUrl: string;
  mapCoords: { lat: number; lng: number };
};

const HOMES_DATA: Record<string, HomeData> = {
  pinckney: {
    name: "Maple Manor of Pinckney",
    address: "7119 Pinckney Road, Pinckney, MI 48169",
    description: "Our Pinckney home is a charming residence featuring 6 spacious all private rooms, a large deck for outdoor enjoyment, and a warm, inviting living area. Residents enjoy the peaceful rural surroundings while being close to community amenities.",
    features: [
      "Wheelchair accessible",
      "Spacious outdoor deck",
      "6 all private rooms",
      "Secure environment",
      "Cable TV and Wi Fi included",
      "Housekeeping and laundry included"
    ],
    heroImage: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/p4gc4sor0k751rybtvupf",
    gallery: [
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/4cpaxx10075c4awsgrepu",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/0vk315y9p43wt3jtezq1l",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/531b8ru5eut8yznqmexes",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/3nripr57yd17lm4fz8s87",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/fbag2objjy8l4zx1ksng8",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/t9a5n36xbkloopy8ycbbb",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/wlr8fuyd23l000vbvu5ji",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/kdaj6cx845rixvmorjp89",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ym1stxyi5gdeg3anadkhz",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/eab5n338fi6ikqhoiuwfe",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/kjjxrx3c9mwxnwaiaylbv",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/otx1aod1fzv78yfzavvn5",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/lbomenv6wyg3q3yknszs6",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/2j6o3nms27y2wyy74osdt"
    ],
    communitySpaceImages: [
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/4cpaxx10075c4awsgrepu",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/0vk315y9p43wt3jtezq1l",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/531b8ru5eut8yznqmexes",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/3nripr57yd17lm4fz8s87",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/fbag2objjy8l4zx1ksng8",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/t9a5n36xbkloopy8ycbbb",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/wlr8fuyd23l000vbvu5ji"
    ],
    roomsShowcaseImages: [
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/kdaj6cx845rixvmorjp89",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ym1stxyi5gdeg3anadkhz",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/eab5n338fi6ikqhoiuwfe",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/kjjxrx3c9mwxnwaiaylbv",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/otx1aod1fzv78yfzavvn5",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/lbomenv6wyg3q3yknszs6",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/2j6o3nms27y2wyy74osdt"
    ],
    activitiesImages: [
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/syso7oqzblvm7qzli0525",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/f10yoldysfy45tb2frx3m",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/9scc2cj1zvi6t0ild3r0y",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/5orbfi6gfco1rkw6r31ja",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/3dh7713p83pkahhftmma6",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/kpmivr5gfqw2ptgcgdxn8",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/56s9ijkdwezk0kpmlycce",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/h5dc4sw7lhhix067u2ssa",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/2o85av0l2k6icj0utgw19",
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
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/filhsx11q57uos6y0dbxq"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.123456789!2d-83.9469!3d42.4564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s7119%20Pinckney%20Road%2C%20Pinckney%2C%20Michigan%2048169!5e0!3m2!1sen!2sus!4v1234567890",
    mapCoords: { lat: 42.456778, lng: -83.944722 },
  },
  hamburg: {
    name: "Maple Manor of Hamburg",
    address: "9090 Chilson Road, Brighton, MI 48116",
    description: "Maple Manor of Hamburg is a quiet, boutique senior living home with peaceful views overlooking a nearby golf course. The setting is calm, bright, and home like, designed for comfort, dignity, and daily connection.",
    features: [
      "Barrier free layout",
      "Bright, open common areas",
      "Beautifully landscaped grounds",
      "24 hour supervision",
      "Medication management",
      "Nutritious home-cooked meals"
    ],
    heroImage: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/9vcz63ncttus7mfxjw26e",
    gallery: [
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/fodixtt0dsa7rqmc4pv46",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/6vdyyd1urvukjviz6dusb",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/e9ld8uzn6f5f3pc6mlxtz",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/azfnbxn5r6hb23ba1ulq0",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/p82bh91jwz4vporchwagv",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/grwxwtzd8axabspb862aq",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/m4mu6kqn1xr2c5gvkhu6y",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/89yqqdvmg493n7ayzhmph",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ac2yflbr36t65jqigzpg7",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/oaapgxekw45uopkmoqfnm",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/n099sz3vrf1eogl4np4ov",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/2ok7b3v12nnqgm8r3wzqq",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/db6syjy42frxsxtup3keq",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/qpd3zvxoi6wpz978iyewr",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/mqp6uiif4cbdanpi1m596",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/uz0b8o1jh2e2s8i54hcrf",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/z6osfsebvzj19sa0qbxy7",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ssgftm45uktcw249ef48q",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ji074sza1qtruw0m0ckes",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/0yqp4nycr1j0szc9iv37c",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/iqxc6jo4wfivhqeu71nyd",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ibxrlkirm6rallayvfewr",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/uhud1w3d05uupl3pypp33"
    ],
    communitySpaceImages: [
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/3t00o21r4pj72nk1wkoze",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/a356vo78f8mzxqlna2522",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/y258r4pt201udwfpo5ous",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/3kt0sbe4jje3x21ym396o",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/yz0g9cbl5ec5bwekgzzex",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ki92fy0zcpb9telchlucb"
    ],
    roomsShowcaseImages: [
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ac2yflbr36t65jqigzpg7",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/oaapgxekw45uopkmoqfnm",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/n099sz3vrf1eogl4np4ov",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/2ok7b3v12nnqgm8r3wzqq",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/db6syjy42frxsxtup3keq",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/qpd3zvxoi6wpz978iyewr",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/mqp6uiif4cbdanpi1m596",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/uz0b8o1jh2e2s8i54hcrf",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/z6osfsebvzj19sa0qbxy7",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ssgftm45uktcw249ef48q",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ji074sza1qtruw0m0ckes",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/0yqp4nycr1j0szc9iv37c",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/iqxc6jo4wfivhqeu71nyd",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ibxrlkirm6rallayvfewr",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/uhud1w3d05uupl3pypp33"
    ],
    activitiesImages: [
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/syso7oqzblvm7qzli0525",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/f10yoldysfy45tb2frx3m",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/9scc2cj1zvi6t0ild3r0y",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/5orbfi6gfco1rkw6r31ja",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/3dh7713p83pkahhftmma6",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/kpmivr5gfqw2ptgcgdxn8",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/56s9ijkdwezk0kpmlycce",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/h5dc4sw7lhhix067u2ssa",
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/2o85av0l2k6icj0utgw19",
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
      "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/filhsx11q57uos6y0dbxq"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.123456789!2d-83.8469!3d42.4864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s9090%20Chilson%20Road%2C%20Brighton%2C%20Michigan%2048116!5e0!3m2!1sen!2sus!4v1234567890",
    mapCoords: { lat: 42.488889, lng: -83.848333 },
  }
};

export default function HomeDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const heroHeight = isMobile ? 360 : 520;

  const idParam = Array.isArray(id) ? id[0] : id;
  const homeData = idParam ? HOMES_DATA[idParam] : undefined;


  console.log("[HomeDetailScreen] idParam=", idParam);

  if (!homeData) {
    return (
      <ScreenLayout>
        <Container style={{ paddingVertical: 100, alignItems: "center" }}>
          <Typography variant="h2">Home Not Found</Typography>
          <Button title="Back to Homes" onPress={() => router.push("/homes" as any)} style={{ marginTop: 20 }} />
        </Container>
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout>
      <Stack.Screen options={{ title: homeData.name }} />
      
      <View style={[styles.hero, { height: heroHeight, minHeight: heroHeight }]}>
        <Image
          source={{ uri: homeData.heroImage }}
          style={styles.heroImage}
          contentFit="cover"
        />
        <View style={styles.overlay}>
          <Container>
            <Typography variant="h1" color={COLORS.white} style={styles.heroTitle}>
              {homeData.name}
            </Typography>
            <View style={styles.addressTag}>
              <MapPin size={20} color={COLORS.white} />
              <Typography variant="h4" color={COLORS.white} style={{ marginBottom: 0 }}>
                {homeData.address}
              </Typography>
            </View>
          </Container>
        </View>
      </View>

      <Container style={{ paddingVertical: SPACING.xxl }}>
        <View style={[styles.layout, isMobile && styles.layoutMobile]}>
          
          <View style={styles.mainCol}>
            <View style={styles.section}>
              <Typography variant="h2" color={COLORS.primaryDark}>Overview</Typography>
              <Typography variant="body" style={styles.text}>{homeData.description}</Typography>
            </View>

            <View style={styles.section}>
              <Typography variant="h2" color={COLORS.primaryDark}>Amenities & Features</Typography>
              <View style={styles.featuresGrid}>
                {homeData.features.map((feature: string, index: number) => (
                  <View key={index} style={styles.featureItem}>
                    <Check size={20} color={COLORS.secondary} />
                    <Typography variant="body">{feature}</Typography>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <View style={[styles.sidebar, isMobile && styles.sidebarMobile]}>
            <View style={styles.sidebarCard}>
              <Typography variant="h3" color={COLORS.primaryDark}>Interested?</Typography>
              <Typography variant="bodySmall" style={{ marginBottom: SPACING.l }}>
                Schedule a tour to see {homeData.name} in person.
              </Typography>
              
              <Button
                title="Schedule a Tour"
                onPress={() => router.push("/contact" as any)}
                style={{ marginBottom: SPACING.m, width: "100%" }}
                icon={<Calendar size={18} color={COLORS.white} />}
              />
              
              <Button
                title="Call Now"
                onPress={() => Linking.openURL('tel:248-854-4944')}
                variant="outline"
                style={{ width: "100%" }}
                icon={<Phone size={18} color={COLORS.primary} />}
              />
            </View>

            <View style={styles.mapCard}>
              {Platform.OS === 'web' ? (
                <iframe
                  src={`https://www.google.com/maps?q=${homeData.mapCoords.lat},${homeData.mapCoords.lng}&z=15&output=embed`}
                  style={{ width: '100%', height: '100%', border: 0, borderRadius: 12 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <Pressable
                  style={styles.mapFallback}
                  onPress={() => Linking.openURL(`https://www.google.com/maps?q=${homeData.mapCoords.lat},${homeData.mapCoords.lng}`)}
                >
                  <MapPin size={32} color={COLORS.primary} />
                  <Typography variant="body" align="center" color={COLORS.primary} style={{ marginTop: 8 }}>
                    View on Google Maps
                  </Typography>
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </Container>

      <HeroCarousel
        images={homeData.communitySpaceImages}
        title="Community Spaces"
        subtitle="Our common areas are designed for comfort and connection, providing a warm environment where residents can relax and socialize."
      />

      <HeroCarousel
        images={homeData.roomsShowcaseImages}
        title="Resident Rooms"
        subtitle="Each of our 6 all private rooms is comfortably furnished and designed to feel like home."
      />

      <HeroCarousel
        images={homeData.activitiesImages}
        title="Activities and Life Enrichment"
        subtitle="From birthday celebrations and holiday parties to puzzles, music, and gentle exercise, we keep residents engaged and connected."
      />

      <HeroCarousel
        images={homeData.gallery}
        title="Gallery"
        subtitle="Explore our welcoming home through our photo gallery."
      />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 520,
    minHeight: 520,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
    paddingBottom: SPACING.xl,
  },
  heroTitle: {
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  addressTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.s,
    marginTop: SPACING.s,
  },
  layout: {
    flexDirection: "row",
    gap: SPACING.xl,
  },
  layoutMobile: {
    flexDirection: "column",
  },
  mainCol: {
    flex: 1,
  },
  sidebar: {
    width: 350,
    gap: SPACING.l,
  },
  sidebarMobile: {
    width: "100%",
  },
  section: {
    marginBottom: SPACING.xxl,
  },
  text: {
    lineHeight: 26,
    opacity: 0.8,
  },
  featuresGrid: {
    marginTop: SPACING.m,
    gap: SPACING.m,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.s,
  },
  sidebarCard: {
    backgroundColor: COLORS.white,
    padding: SPACING.l,
    borderRadius: BORDER_RADIUS.m,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  mapCard: {
    height: 250,
    backgroundColor: "#EEE",
    borderRadius: BORDER_RADIUS.m,
    overflow: 'hidden',
  },
  mapFallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background,
  },
});
