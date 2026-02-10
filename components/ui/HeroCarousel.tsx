import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Pressable, useWindowDimensions, TouchableOpacity, Modal } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Typography } from "@/components/ui/Typography";
import { COLORS, SPACING } from "@/constants/theme";
import { ChevronLeft, ChevronRight, X } from "lucide-react-native";

type HeroCarouselProps = {
  images: string[];
  title: string;
  subtitle?: string;
  autoPlayInterval?: number;
  showLightbox?: boolean;
};

export function HeroCarousel({
  images,
  title,
  subtitle,
  autoPlayInterval = 3000,
  showLightbox = true,
}: HeroCarouselProps) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  
  const heroHeight = isMobile ? 360 : isTablet ? 460 : 520;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  const handleImagePress = () => {
    if (showLightbox) {
      setLightboxImage(images[currentIndex]);
    }
  };

  if (images.length === 0) return null;

  return (
    <>
      <View style={[styles.container, { height: heroHeight, minHeight: heroHeight }]}>
        <TouchableOpacity 
          style={styles.imageContainer} 
          onPress={handleImagePress}
          activeOpacity={0.95}
        >
          <Image
            source={{ uri: images[currentIndex] }}
            style={styles.image}
            contentFit="cover"
            contentPosition="center"
          />
        </TouchableOpacity>

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)"]}
          style={styles.gradient}
        />

        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <Typography variant="h1" color={COLORS.white} style={styles.title}>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body" color={COLORS.white} style={styles.subtitle}>
                {subtitle}
              </Typography>
            )}
          </View>
          
          <View style={styles.counter}>
            <Typography variant="bodySmall" color={COLORS.white}>
              {currentIndex + 1} / {images.length}
            </Typography>
          </View>
        </View>

        {images.length > 1 && (
          <>
            <Pressable style={styles.arrowLeft} onPress={handlePrev}>
              <ChevronLeft size={32} color={COLORS.white} />
            </Pressable>
            <Pressable style={styles.arrowRight} onPress={handleNext}>
              <ChevronRight size={32} color={COLORS.white} />
            </Pressable>
          </>
        )}
      </View>

      <Modal visible={lightboxImage !== null} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setLightboxImage(null)}>
            <X size={32} color={COLORS.white} />
          </TouchableOpacity>
          
          <Pressable style={styles.modalArrowLeft} onPress={handlePrev}>
            <ChevronLeft size={40} color={COLORS.white} />
          </Pressable>

          {lightboxImage && (
            <Image
              source={{ uri: images[currentIndex] }}
              style={styles.modalImage}
              contentFit="contain"
            />
          )}

          <Pressable style={styles.modalArrowRight} onPress={handleNext}>
            <ChevronRight size={40} color={COLORS.white} />
          </Pressable>

          <View style={styles.modalCounter}>
            <Typography variant="body" color={COLORS.white}>
              {currentIndex + 1} / {images.length}
            </Typography>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "60%",
  },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: SPACING.xl,
    paddingBottom: SPACING.xl,
  },
  textContainer: {
    maxWidth: 800,
  },
  title: {
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  subtitle: {
    opacity: 0.9,
    marginTop: SPACING.s,
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  counter: {
    marginTop: SPACING.m,
    opacity: 0.8,
  },
  arrowLeft: {
    position: "absolute",
    left: 16,
    top: "50%",
    transform: [{ translateY: -28 }],
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  arrowRight: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: -28 }],
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.95)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "90%",
    height: "80%",
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
