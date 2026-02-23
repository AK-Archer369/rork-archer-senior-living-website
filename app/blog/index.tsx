import React from "react";
import { View, StyleSheet, useWindowDimensions, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ScreenLayout } from "@/components/layout/ScreenLayout";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { BLOG_POSTS } from "@/constants/blogData";
import { ArrowRight, Calendar } from "lucide-react-native";

export default function BlogIndexScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <ScreenLayout>
      <View style={styles.hero}>
        <Container>
          <Typography variant="h1" color={COLORS.white} align="center">
            Senior Care Insights
          </Typography>
          <Typography
            variant="h3"
            color={COLORS.secondary}
            align="center"
            weight="normal"
            style={{ marginTop: SPACING.s }}
          >
            Guidance from our family-centered care team in Livingston County
          </Typography>
        </Container>
      </View>

      <Container style={styles.content}>
        {BLOG_POSTS.map((post) => (
          <TouchableOpacity
            key={post.slug}
            style={styles.card}
            onPress={() => router.push(`/blog/${post.slug}` as any)}
            activeOpacity={0.85}
          >
            <View style={styles.cardInner}>
              <View style={styles.metaRow}>
                <Calendar size={14} color={COLORS.secondary} />
                <Typography variant="caption" color={COLORS.textLight} style={{ marginLeft: 6 }}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Typography>
                <Typography variant="caption" color={COLORS.textLighter} style={{ marginLeft: SPACING.m }}>
                  {post.readTime}
                </Typography>
              </View>

              <Typography
                variant="h3"
                color={COLORS.primaryDark}
                style={{ marginBottom: SPACING.s, lineHeight: 30 }}
              >
                {post.title}
              </Typography>

              <Typography
                variant="body"
                color={COLORS.textLight}
                style={{ lineHeight: 26, marginBottom: SPACING.m }}
              >
                {post.excerpt}
              </Typography>

              <View style={styles.readMore}>
                <Typography variant="body" color={COLORS.primary} weight="bold">
                  Read Article
                </Typography>
                <ArrowRight size={16} color={COLORS.primary} style={{ marginLeft: 6 }} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </Container>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: COLORS.primaryDark,
    paddingVertical: SPACING.xxl,
  },
  content: {
    paddingVertical: SPACING.xxl,
    gap: SPACING.l,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.l,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    overflow: "hidden",
  },
  cardInner: {
    padding: SPACING.xl,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.m,
  },
  readMore: {
    flexDirection: "row",
    alignItems: "center",
  },
});
