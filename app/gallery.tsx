import React, { useState } from "react";
import { View, StyleSheet, useWindowDimensions, Modal, TouchableOpacity, Pressable } from "react-native";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { ScreenLayout } from "@/components/layout/ScreenLayout";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { X, ChevronLeft, ChevronRight } from "lucide-react-native";

const PINCKNEY_IMAGES = [
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
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/2j6o3nms27y2wyy74osdt",
];

const HAMBURG_IMAGES = [
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
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/2rzvcbpjdni5f5z5sqobi",
  "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/j8d8s9zmq8e8yukmuv8zv",
];

const ACTIVITIES_IMAGES = [
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
];

type AlbumKey = 'pinckney' | 'hamburg' | 'activities';

const ALBUMS: Record<AlbumKey, { title: string; description: string; images: string[]; heroImage: string }> = {
  pinckney: {
    title: "Maple Manor of Pinckney",
    description: "Explore our Pinckney location - community spaces and resident rooms",
    images: PINCKNEY_IMAGES,
    heroImage: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/4cpaxx10075c4awsgrepu",
  },
  hamburg: {
    title: "Maple Manor of Hamburg",
    description: "Explore our Hamburg location - community spaces and resident rooms",
    images: HAMBURG_IMAGES,
    heroImage: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/fodixtt0dsa7rqmc4pv46",
  },
  activities: {
    title: "Activities and Life Enrichment",
    description: "Holiday celebrations, group activities, and daily life enrichment at Archer Senior Living",
    images: ACTIVITIES_IMAGES,
    heroImage: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/syso7oqzblvm7qzli0525",
  },
};

export default function GalleryScreen() {
  const { width } = useWindowDimensions();
  const params = useLocalSearchParams();
  const isMobile = width < 600;
  const isTablet = width >= 600 && width < 1024;
  const heroHeight = isMobile ? 360 : isTablet ? 460 : 520;
  
  const initialAlbum = (params.album as AlbumKey) || null;
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumKey | null>(initialAlbum);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrevImage = () => {
    if (lightboxIndex !== null && selectedAlbum) {
      const images = ALBUMS[selectedAlbum].images;
      setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (lightboxIndex !== null && selectedAlbum) {
      const images = ALBUMS[selectedAlbum].images;
      setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  const renderAlbumSelection = () => (
    <View style={styles.albumGrid}>
      {(Object.keys(ALBUMS) as AlbumKey[]).map((key) => (
        <TouchableOpacity
          key={key}
          style={[styles.albumCard, { width: isMobile ? "100%" : "31%" }]}
          onPress={() => setSelectedAlbum(key)}
        >
          <Image
            source={{ uri: ALBUMS[key].heroImage }}
            style={styles.albumCover}
            contentFit="cover"
          />
          <View style={styles.albumInfo}>
            <Typography variant="h4" color={COLORS.primaryDark}>
              {ALBUMS[key].title}
            </Typography>
            <Typography variant="caption" color={COLORS.textLight}>
              {ALBUMS[key].images.length} photos
            </Typography>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderAlbumContent = () => {
    if (!selectedAlbum) return null;
    const album = ALBUMS[selectedAlbum];

    return (
      <View>
        <View style={[styles.albumHero, { height: heroHeight, minHeight: heroHeight }]}>
          <Image
            source={{ uri: album.heroImage }}
            style={styles.albumHeroImage}
            contentFit="cover"
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.7)"]}
            style={styles.heroGradient}
          />
          <View style={styles.albumHeroOverlay}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => setSelectedAlbum(null)}
            >
              <ChevronLeft size={20} color={COLORS.white} />
              <Typography variant="body" color={COLORS.white}>Back to Albums</Typography>
            </TouchableOpacity>
            <Typography variant="h1" color={COLORS.white} style={styles.albumHeroTitle}>
              {album.title}
            </Typography>
            <Typography variant="body" color={COLORS.white} style={styles.albumHeroDescription}>
              {album.description}
            </Typography>
          </View>
        </View>

        <Container style={{ paddingTop: SPACING.xl }}>
          <View style={styles.photoGrid}>
            {album.images.map((image, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.photoWrapper, { width: isMobile ? "48%" : "32%" }]}
                onPress={() => setLightboxIndex(index)}
              >
                <Image
                  source={{ uri: image }}
                  style={styles.photo}
                  contentFit="cover"
                />
              </TouchableOpacity>
            ))}
          </View>
        </Container>
      </View>
    );
  };

  return (
    <ScreenLayout>
      {!selectedAlbum && (
        <View style={[styles.header, { height: heroHeight, minHeight: heroHeight }]}>
          <Image
            source={{ uri: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/syso7oqzblvm7qzli0525" }}
            style={styles.headerImage}
            contentFit="cover"
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.7)"]}
            style={styles.heroGradient}
          />
          <View style={styles.headerOverlay}>
            <Container>
              <Typography variant="h1" color={COLORS.white} align="center" style={styles.heroTitle}>
                Gallery
              </Typography>
              <Typography variant="h4" color={COLORS.white} align="center" weight="normal" style={styles.headerSubtitle}>
                A Glimpse Into Life at Our Homes
              </Typography>
            </Container>
          </View>
        </View>
      )}

      {selectedAlbum ? (
        renderAlbumContent()
      ) : (
        <Container style={{ paddingBottom: SPACING.xxl }}>
          {renderAlbumSelection()}
        </Container>
      )}

      <Modal visible={lightboxIndex !== null} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={() => setLightboxIndex(null)}
          >
            <X size={32} color={COLORS.white} />
          </TouchableOpacity>
          
          <Pressable style={styles.modalArrowLeft} onPress={handlePrevImage}>
            <ChevronLeft size={40} color={COLORS.white} />
          </Pressable>

          {lightboxIndex !== null && selectedAlbum && (
            <Image
              source={{ uri: ALBUMS[selectedAlbum].images[lightboxIndex] }}
              style={styles.modalImage}
              contentFit="contain"
            />
          )}

          <Pressable style={styles.modalArrowRight} onPress={handleNextImage}>
            <ChevronRight size={40} color={COLORS.white} />
          </Pressable>

          {lightboxIndex !== null && selectedAlbum && (
            <View style={styles.modalCounter}>
              <Typography variant="body" color={COLORS.white}>
                {lightboxIndex + 1} / {ALBUMS[selectedAlbum].images.length}
              </Typography>
            </View>
          )}
        </View>
      </Modal>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 520,
    minHeight: 520,
    position: "relative",
    marginBottom: SPACING.xl,
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  heroGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "60%",
  },
  headerOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom: SPACING.xxl,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  heroTitle: {
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  headerSubtitle: {
    opacity: 0.9,
    marginTop: SPACING.s,
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  albumHero: {
    height: 520,
    minHeight: 520,
    position: "relative",
  },
  albumHeroImage: {
    width: "100%",
    height: "100%",
  },
  albumHeroOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: SPACING.xl,
    paddingBottom: SPACING.xl,
  },
  albumHeroTitle: {
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  albumHeroDescription: {
    opacity: 0.9,
    marginTop: SPACING.s,
    maxWidth: 600,
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  albumGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SPACING.l,
    justifyContent: "center",
    alignItems: "flex-start",
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
    paddingHorizontal: SPACING.m,
  },
  albumCard: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.l,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    minHeight: 320,
  },
  albumCover: {
    width: "100%",
    height: 240,
  },
  albumInfo: {
    padding: SPACING.m,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.l,
    gap: 4,
  },
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SPACING.m,
    justifyContent: "center",
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
  },
  photoWrapper: {
    aspectRatio: 4 / 3,
    borderRadius: BORDER_RADIUS.m,
    overflow: "hidden",
    minHeight: 200,
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.95)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "90%",
    height: "85%",
  },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 30,
    padding: 10,
    zIndex: 10,
  },
  modalArrowLeft: {
    position: "absolute",
    left: 20,
    padding: 10,
    zIndex: 10,
  },
  modalArrowRight: {
    position: "absolute",
    right: 20,
    padding: 10,
    zIndex: 10,
  },
  modalCounter: {
    position: "absolute",
    bottom: 50,
  },
});
