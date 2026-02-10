import React from "react";
import { View, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import { Star } from "lucide-react-native";
import { useRouter } from "expo-router";

const REVIEWS = [
  {
    name: "Flenord Baker",
    text: "Maple Manor is a wonderful home for loved ones in need of placement. The environment and personal attention provided...",
  },
  {
    name: "Cindy McKouen",
    text: "I highly recommend Maple Manor for good quality care for your loved one. My husband received excellent care, beyond my...",
  },
  {
    name: "Kevin",
    text: "Todd and Lori and the rest of the staff are amazing! My Dad had Alzheimers and was in their care for the last several...",
  },
  {
    name: "Todd Truesdell",
    text: "Todd and Lori and the staff are great. They were so welcoming of my Dad and really took a liking to him. There focus and care for him were second to none!! Highly highly recommend!!!",
  },
  {
    name: "Chris Grabowski",
    text: "Maple Manor and their staff are truly amazing and care about each of their residents....",
  },
  {
    name: "Jacob Stall",
    role: "Local Guide",
    text: "The owners are a delight!",
  },
];

export function ReviewsSection() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={styles.container}>
      <Container>
        <Typography variant="h2" align="center" color={COLORS.primaryDark} style={{ marginBottom: SPACING.xl }}>
          Families Recommend Maple Manor
        </Typography>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.scrollContent}
          decelerationRate="fast"
          snapToInterval={isMobile ? width - 48 : 400} // Approximate card width + gap
        >
          {REVIEWS.map((review, index) => (
            <View 
              key={index} 
              style={[
                styles.card, 
                { width: isMobile ? width - 64 : 350 }
              ]}
            >
              <View style={styles.stars}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill={COLORS.secondary} color={COLORS.secondary} />
                ))}
              </View>
              <Typography variant="body" style={styles.text} numberOfLines={4}>
                &quot;{review.text}&quot;
              </Typography>
              <View style={styles.footer}>
                <View style={styles.avatar}>
                  <Typography variant="h4" color={COLORS.white} style={{marginBottom: 0}}>
                    {review.name.charAt(0)}
                  </Typography>
                </View>
                <View>
                  <Typography variant="bodySmall" weight="bold">
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
        </ScrollView>

        <View style={styles.ctaContainer}>
          <Button
            title="Schedule a Tour"
            onPress={() => router.push("/contact" as any)}
            size="medium"
          />
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.xxl,
    backgroundColor: COLORS.white,
  },
  scrollContent: {
    paddingHorizontal: SPACING.s, // Add some padding for shadow
    gap: SPACING.l,
    paddingBottom: SPACING.l, // For shadow
  },
  card: {
    backgroundColor: COLORS.background,
    padding: SPACING.l,
    borderRadius: BORDER_RADIUS.l,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  stars: {
    flexDirection: "row",
    gap: 2,
    marginBottom: SPACING.m,
  },
  text: {
    fontStyle: "italic",
    marginBottom: SPACING.l,
    opacity: 0.8,
    minHeight: 100,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.m,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaContainer: {
    alignItems: "center",
    marginTop: SPACING.l,
  },
});
