import React, { useState, useCallback } from "react";
import { View, StyleSheet, useWindowDimensions, Linking, Pressable, Platform } from "react-native";
import { Image } from "expo-image";
import { useRouter, Stack } from "expo-router";
import Head from "expo-router/head";
import { ScreenLayout } from "@/components/layout/ScreenLayout";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { MapPin, Check, Phone, Calendar, ChevronDown, ChevronUp, HelpCircle } from "lucide-react-native";

const HOME_DATA = {
  name: "Maple Manor of Hamburg",
  address: "9090 Chilson Road, Brighton, MI 48116",
  heroImage: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/9vcz63ncttus7mfxjw26e",
  features: [
    "Barrier free layout",
    "Bright, open common areas",
    "Beautifully landscaped grounds",
    "6 all private rooms",
    "24 hour supervision",
    "Medication management",
    "Nutritious home cooked meals",
    "Housekeeping and laundry included",
    "Cable TV and Wi Fi included",
  ],
  communitySpaceImages: [
    "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/3t00o21r4pj72nk1wkoze",
    "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/a356vo78f8mzxqlna2522",
    "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/y258r4pt201udwfpo5ous",
    "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/3kt0sbe4jje3x21ym396o",
    "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/yz0g9cbl5ec5bwekgzzex",
    "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ki92fy0zcpb9telchlucb",
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
    "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/uhud1w3d05uupl3pypp33",
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
    "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/filhsx11q57uos6y0dbxq",
  ],
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
    "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/uhud1w3d05uupl3pypp33",
  ],
  mapCoords: { lat: 42.488889, lng: -83.848333 },
};

const FAQ_ITEMS = [
  {
    question: "What types of care does Maple Manor of Hamburg provide?",
    answer: "Maple Manor of Hamburg provides assisted living care in a small, boutique home setting. Our services include 24 hour supervision, medication management, assistance with activities of daily living, nutritious home cooked meals, housekeeping, and laundry. We also provide respite care when availability allows.",
  },
  {
    question: "How many residents live at the Hamburg location?",
    answer: "Our Hamburg home has a maximum of 6 residents. This intentionally small size allows us to maintain a high staff to resident ratio and provide truly personalized, individualized care.",
  },
  {
    question: "Does the Hamburg home have private rooms?",
    answer: "Yes. All 6 rooms at Maple Manor of Hamburg are private rooms. Each resident enjoys their own personal space in a comfortable, home like environment.",
  },
  {
    question: "What makes Maple Manor of Hamburg different from larger assisted living facilities?",
    answer: "Unlike large facilities with dozens or hundreds of residents, our home is limited to just 6 people. This means our caregivers know each resident personally, can respond quickly to individual needs, and provide the kind of consistent, compassionate attention that larger settings often cannot. The setting overlooks a nearby golf course and is designed to feel calm, bright, and familiar.",
  },
  {
    question: "How do I arrange a visit or tour of the Hamburg home?",
    answer: "We welcome and encourage in person visits. You can schedule a tour by calling us at 248-854-4944 or by filling out the contact form on our website. Tours can be arranged at a time that works best for your family.",
  },
];

function FaqItem({ item }: { item: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <Pressable onPress={toggle} style={styles.faqItem}>
      <View style={styles.faqHeader}>
        <Typography variant="h4" color={COLORS.primaryDark} style={styles.faqQuestion}>
          {item.question}
        </Typography>
        {isOpen ? (
          <ChevronUp size={22} color={COLORS.primary} />
        ) : (
          <ChevronDown size={22} color={COLORS.primary} />
        )}
      </View>
      {isOpen && (
        <Typography variant="body" style={styles.faqAnswer}>
          {item.answer}
        </Typography>
      )}
    </Pressable>
  );
}

export default function HamburgAssistedLivingPage() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const heroHeight = isMobile ? 360 : 520;

  return (
    <ScreenLayout>
      <Head>
        <title>Assisted Living in Hamburg MI | Maple Manor of Hamburg | Archer Senior Living</title>
        <meta
          name="description"
          content="Maple Manor of Hamburg provides personalized assisted living in Hamburg, Michigan with private rooms and high staff-to-resident care. Schedule a tour today."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/hamburg-assisted-living" />
      </Head>
      <Stack.Screen options={{ title: "Assisted Living in Hamburg MI | Maple Manor of Hamburg" }} />

      <View style={[styles.hero, { height: heroHeight, minHeight: heroHeight }]}>
        <Image
          source={{ uri: HOME_DATA.heroImage }}
          style={styles.heroImage}
          contentFit="cover"
        />
        <View style={styles.overlay}>
          <Container>
            <Typography variant="h1" color={COLORS.white} style={styles.heroTitle}>
              Assisted Living in Hamburg, Michigan
            </Typography>
            <View style={styles.addressTag}>
              <MapPin size={20} color={COLORS.white} />
              <Typography variant="h4" color={COLORS.white} style={{ marginBottom: 0 }}>
                {HOME_DATA.address}
              </Typography>
            </View>
          </Container>
        </View>
      </View>

      <Container style={{ paddingVertical: SPACING.xxl }}>
        <View style={[styles.layout, isMobile && styles.layoutMobile]}>
          <View style={styles.mainCol}>
            <View style={styles.section}>
              <Typography variant="h2" color={COLORS.primaryDark}>About Maple Manor of Hamburg</Typography>
              <Typography variant="body" style={styles.text}>
                Maple Manor of Hamburg is a quiet, boutique senior living home with peaceful views overlooking a nearby golf course. The setting is calm, bright, and home like, designed for comfort, dignity, and daily connection.
              </Typography>
              <Typography variant="body" style={styles.text}>
                Located at 9090 Chilson Road, Brighton, MI 48116, Maple Manor of Hamburg is part of Archer Senior Living, a locally owned and operated senior living provider in Livingston County, Michigan. We are committed to delivering personalized, dignified care in a true home environment.
              </Typography>
            </View>

            <View style={styles.section}>
              <Typography variant="h2" color={COLORS.primaryDark}>Why Families Choose Our Hamburg Home</Typography>
              <Typography variant="body" style={styles.text}>
                Families choose Maple Manor of Hamburg because we offer the quality of private duty care at a fraction of the cost. With only 6 residents, our staff knows each person individually and can respond to their needs quickly and compassionately. The peaceful setting overlooking a golf course provides a serene backdrop for daily life.
              </Typography>
              <View style={styles.featuresGrid}>
                {HOME_DATA.features.map((feature: string, index: number) => (
                  <View key={index} style={styles.featureItem}>
                    <Check size={20} color={COLORS.secondary} />
                    <Typography variant="body">{feature}</Typography>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Typography variant="h2" color={COLORS.primaryDark}>Signs It May Be Time for Assisted Living</Typography>
              <Typography variant="body" style={styles.text}>
                Many families in Hamburg, Brighton, and the surrounding Livingston County area face the difficult question of when a loved one needs more support than can be provided at home. Some common signs include difficulty managing medications, frequent falls or safety concerns, increasing isolation, or a caregiver who is feeling overwhelmed and exhausted.
              </Typography>
              <Typography variant="body" style={styles.text}>
                Choosing assisted living does not mean giving up independence. It means gaining a safe, supportive environment where your loved one can thrive. At Maple Manor of Hamburg, we also offer respite care for families who need temporary support during recovery from surgery, a hospitalization, or simply a break for the primary caregiver.
              </Typography>
            </View>
          </View>

          <View style={[styles.sidebar, isMobile && styles.sidebarMobile]}>
            <View style={styles.sidebarCard}>
              <Typography variant="h2" color={COLORS.primaryDark}>Schedule a Tour</Typography>
              <Typography variant="bodySmall" style={{ marginBottom: SPACING.l }}>
                We invite you to visit Maple Manor of Hamburg in person. See the home, meet our caregivers, and discover why families trust us with the care of their loved ones.
              </Typography>

              <Button
                title="Schedule a Tour"
                onPress={() => router.push("/contact" as any)}
                style={{ marginBottom: SPACING.m, width: "100%" }}
                icon={<Calendar size={18} color={COLORS.white} />}
              />

              <Button
                title="Call 248-854-4944"
                onPress={() => Linking.openURL("tel:248-854-4944")}
                variant="outline"
                style={{ width: "100%" }}
                icon={<Phone size={18} color={COLORS.primary} />}
              />
            </View>

            <View style={styles.addressCard}>
              <MapPin size={24} color={COLORS.primary} />
              <Typography variant="h4" color={COLORS.primaryDark} style={{ marginTop: SPACING.s, marginBottom: SPACING.xs }}>
                Our Address
              </Typography>
              <Typography variant="body" color={COLORS.text}>
                9090 Chilson Road{"\n"}Brighton, Michigan 48116
              </Typography>
            </View>

            <View style={styles.mapCard}>
              {Platform.OS === "web" ? (
                <iframe
                  src={`https://www.google.com/maps?q=${HOME_DATA.mapCoords.lat},${HOME_DATA.mapCoords.lng}&z=15&output=embed`}
                  style={{ width: "100%", height: "100%", border: 0, borderRadius: 12 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <Pressable
                  style={styles.mapFallback}
                  onPress={() => Linking.openURL(`https://www.google.com/maps?q=${HOME_DATA.mapCoords.lat},${HOME_DATA.mapCoords.lng}`)}
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
        images={HOME_DATA.communitySpaceImages}
        title="Community Spaces"
        subtitle="Our common areas are designed for comfort and connection, providing a warm environment where residents can relax and socialize."
      />

      <HeroCarousel
        images={HOME_DATA.roomsShowcaseImages}
        title="Resident Rooms"
        subtitle="Each of our 6 all private rooms is comfortably furnished and designed to feel like home."
      />

      <HeroCarousel
        images={HOME_DATA.activitiesImages}
        title="Activities and Life Enrichment"
        subtitle="From birthday celebrations and holiday parties to puzzles, music, and gentle exercise, we keep residents engaged and connected."
      />

      <HeroCarousel
        images={HOME_DATA.gallery}
        title="Gallery"
        subtitle="Explore our welcoming home through our photo gallery."
      />

      <View style={styles.faqSection}>
        <Container>
          <View style={styles.faqHeaderRow}>
            <HelpCircle size={28} color={COLORS.primary} />
            <Typography variant="h2" color={COLORS.primaryDark} style={{ marginBottom: 0, marginLeft: SPACING.s }}>
              Frequently Asked Questions
            </Typography>
          </View>
          <Typography variant="body" style={styles.faqSubtitle}>
            Common questions about assisted living at Maple Manor of Hamburg
          </Typography>
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem key={index} item={item} />
          ))}
        </Container>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 520,
    minHeight: 520,
    position: "relative" as const,
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
    marginBottom: SPACING.m,
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
  addressCard: {
    backgroundColor: COLORS.background,
    padding: SPACING.l,
    borderRadius: BORDER_RADIUS.m,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
  },
  mapCard: {
    height: 250,
    backgroundColor: "#EEE",
    borderRadius: BORDER_RADIUS.m,
    overflow: "hidden",
  },
  mapFallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background,
  },
  faqSection: {
    paddingVertical: SPACING.xxl,
    backgroundColor: COLORS.background,
  },
  faqHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.s,
  },
  faqSubtitle: {
    opacity: 0.7,
    marginBottom: SPACING.xl,
  },
  faqItem: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.m,
    padding: SPACING.l,
    marginBottom: SPACING.m,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: SPACING.m,
  },
  faqQuestion: {
    flex: 1,
    marginBottom: 0,
  },
  faqAnswer: {
    marginTop: SPACING.m,
    lineHeight: 26,
    opacity: 0.8,
  },
});
