import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { ScreenLayout } from "@/components/layout/ScreenLayout";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { Star, Quote } from "lucide-react-native";
import { useRouter } from "expo-router";

const REVIEWS_FULL = [
  {
    name: "Flenord Baker",
    text: "Maple Manor is a wonderful home for loved ones in need of placement. The environment and personal attention provided by the staff is top notch. They treat the residents as if they were family. The home is always clean and odor free. Meals are home cooked and nutritious. I would highly recommend Maple Manor to anyone looking for a place for their loved one.",
    rating: 5,
  },
  {
    name: "Cindy McKouen",
    text: "I highly recommend Maple Manor for good quality care for your loved one. My husband received excellent care, beyond my expectations. It is a clean, well managed home, with home cooked meals. The staff is kind, loving and very attentive to the residents needs.",
    rating: 5,
  },
  {
    name: "Kevin",
    text: "Todd and Lori and the rest of the staff are amazing! My Dad had Alzheimers and was in their care for the last several months of his life. It was a huge relief to know he was safe and well cared for. The home is clean and comfortable. Can't say enough good things.",
    rating: 5,
  },
  {
    name: "Todd Truesdell",
    text: "Todd and Lori and the staff are great. They were so welcoming of my Dad and really took a liking to him. Their focus and care for him were second to none!! Highly highly recommend!!!",
    rating: 5,
  },
  {
    name: "Chris Grabowski",
    text: "Maple Manor and their staff are truly amazing and care about each of their residents. The home is very clean and the residents are well taken care of.",
    rating: 5,
  },
  {
    name: "Jacob Stall",
    role: "Local Guide",
    text: "The owners are a delight! Very professional and caring.",
    rating: 5,
  },
];

export default function ReviewsScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <ScreenLayout>
      <View style={styles.header}>
        <Container>
          <Typography variant="h1" color={COLORS.white} align="center">
            Family Reviews
          </Typography>
          <Typography variant="h3" color={COLORS.white} align="center" weight="normal" style={{ opacity: 0.9 }}>
            Hear from families who have trusted us with their loved ones.
          </Typography>
        </Container>
      </View>

      <Container style={{ paddingBottom: SPACING.xxl }}>
        <View style={styles.masonry}>
          {REVIEWS_FULL.map((review, index) => (
            <View key={index} style={[styles.card, isMobile && styles.cardMobile]}>
              <View style={styles.stars}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill={COLORS.secondary} color={COLORS.secondary} />
                ))}
              </View>
              
              <Quote size={24} color={COLORS.primary} style={{ opacity: 0.2, marginBottom: 8 }} />
              
              <Typography variant="body" style={styles.text}>
                {review.text}
              </Typography>

              <View style={styles.divider} />

              <View style={styles.author}>
                <View style={styles.avatar}>
                  <Typography variant="h4" color={COLORS.white} style={{ marginBottom: 0 }}>
                    {review.name.charAt(0)}
                  </Typography>
                </View>
                <View>
                  <Typography variant="body" weight="bold">
                    {review.name}
                  </Typography>
                  {review.role && (
                    <Typography variant="caption" color={COLORS.textLight}>
                      {review.role}
                    </Typography>
                  )}
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.cta}>
          <Typography variant="h3" align="center" color={COLORS.primaryDark} style={{ marginBottom: SPACING.m }}>
            Experience the difference yourself.
          </Typography>
          <Button
            title="Schedule a Tour"
            onPress={() => router.push("/contact" as any)}
            size="large"
          />
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
  masonry: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SPACING.l,
    justifyContent: "center",
  },
  card: {
    width: 350,
    backgroundColor: COLORS.white,
    padding: SPACING.xl,
    borderRadius: BORDER_RADIUS.l,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardMobile: {
    width: "100%",
  },
  stars: {
    flexDirection: "row",
    gap: 2,
    marginBottom: SPACING.m,
  },
  text: {
    fontStyle: "italic",
    lineHeight: 26,
    opacity: 0.8,
    marginBottom: SPACING.l,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginBottom: SPACING.m,
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.m,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  cta: {
    marginTop: SPACING.xxl,
    alignItems: "center",
    backgroundColor: COLORS.background,
    padding: SPACING.xl,
    borderRadius: BORDER_RADIUS.l,
  },
});
