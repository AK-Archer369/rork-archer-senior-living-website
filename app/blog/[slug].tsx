import React from "react";
import { View, StyleSheet, useWindowDimensions, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScreenLayout } from "@/components/layout/ScreenLayout";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { getBlogPostBySlug } from "@/constants/blogData";
import { ArrowLeft, Calendar, Clock } from "lucide-react-native";

export default function BlogPostScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <ScreenLayout>
        <Container style={styles.notFound}>
          <Typography variant="h2" color={COLORS.primaryDark} align="center">
            Post Not Found
          </Typography>
          <Button
            title="Back to Blog"
            onPress={() => router.push("/blog" as any)}
            style={{ marginTop: SPACING.xl, alignSelf: "center" }}
          />
        </Container>
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout>
      <View style={styles.hero}>
        <Container>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.push("/blog" as any)}
          >
            <ArrowLeft size={18} color={COLORS.secondary} />
            <Typography variant="body" color={COLORS.secondary} style={{ marginLeft: 8 }}>
              All Articles
            </Typography>
          </TouchableOpacity>

          <Typography
            variant="h1"
            color={COLORS.white}
            style={{ lineHeight: isMobile ? 38 : 52, marginBottom: SPACING.l }}
          >
            {post.title}
          </Typography>

          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Calendar size={16} color={COLORS.secondary} />
              <Typography variant="body" color={COLORS.white} style={{ marginLeft: 8, opacity: 0.85 }}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </Typography>
            </View>
            <View style={styles.metaItem}>
              <Clock size={16} color={COLORS.secondary} />
              <Typography variant="body" color={COLORS.white} style={{ marginLeft: 8, opacity: 0.85 }}>
                {post.readTime}
              </Typography>
            </View>
          </View>
        </Container>
      </View>

      <Container style={styles.articleContainer}>
        <View style={[styles.article, !isMobile && styles.articleDesktop]}>
          {post.content.map((section, i) => {
            if (section.type === "h2") {
              return (
                <Typography
                  key={i}
                  variant="h2"
                  color={COLORS.primaryDark}
                  style={styles.h2}
                >
                  {section.text}
                </Typography>
              );
            }
            if (section.type === "p") {
              return (
                <Typography
                  key={i}
                  variant="body"
                  style={styles.paragraph}
                >
                  {section.text}
                </Typography>
              );
            }
            if (section.type === "ul" && section.items) {
              return (
                <View key={i} style={styles.list}>
                  {section.items.map((item, j) => (
                    <View key={j} style={styles.listItem}>
                      <View style={styles.bullet} />
                      <Typography variant="body" style={styles.listText}>
                        {item}
                      </Typography>
                    </View>
                  ))}
                </View>
              );
            }
            return null;
          })}

          <View style={styles.cta}>
            <View style={styles.ctaAccent} />
            <Typography variant="h2" color={COLORS.primaryDark} style={{ marginBottom: SPACING.m }}>
              Ready to Schedule a Tour?
            </Typography>
            <Typography variant="body" color={COLORS.textLight} style={{ marginBottom: SPACING.l, lineHeight: 26 }}>
              Experience the difference of Archer Senior Living's intimate, family-centered homes in Pinckney
              and Hamburg. Visit Maple Manor and see why families across Livingston County choose us for their
              loved ones.
            </Typography>
            <View style={styles.ctaButtons}>
              <Button
                title="Schedule a Tour"
                onPress={() => router.push("/contact" as any)}
                size="large"
              />
              <Button
                title="View Our Homes"
                onPress={() => router.push("/homes" as any)}
                variant="outline"
                size="large"
                style={{ marginLeft: SPACING.m }}
              />
            </View>
          </View>
        </View>
      </Container>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: COLORS.primaryDark,
    paddingVertical: SPACING.xxl,
    paddingBottom: SPACING.xxl,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.xl,
  },
  metaRow: {
    flexDirection: "row",
    gap: SPACING.xl,
    flexWrap: "wrap",
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  articleContainer: {
    paddingVertical: SPACING.xxl,
  },
  article: {
    maxWidth: "100%",
  },
  articleDesktop: {
    maxWidth: 760,
    alignSelf: "center",
    width: "100%",
  },
  h2: {
    marginTop: SPACING.xxl,
    marginBottom: SPACING.m,
    paddingBottom: SPACING.s,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.secondary,
  },
  paragraph: {
    lineHeight: 30,
    marginBottom: SPACING.m,
    color: COLORS.text,
    opacity: 0.88,
  },
  list: {
    marginVertical: SPACING.m,
    backgroundColor: COLORS.background,
    borderRadius: BORDER_RADIUS.l,
    padding: SPACING.l,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.secondary,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: SPACING.s,
  },
  bullet: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: COLORS.secondary,
    marginTop: 11,
    marginRight: SPACING.m,
    flexShrink: 0,
  },
  listText: {
    flex: 1,
    lineHeight: 26,
    color: COLORS.text,
  },
  cta: {
    marginTop: SPACING.xxl * 2,
    padding: SPACING.xl,
    backgroundColor: COLORS.background,
    borderRadius: BORDER_RADIUS.l,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  ctaAccent: {
    height: 4,
    width: 60,
    backgroundColor: COLORS.secondary,
    borderRadius: 2,
    marginBottom: SPACING.l,
  },
  ctaButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SPACING.m,
  },
  notFound: {
    paddingVertical: SPACING.xxl * 2,
    alignItems: "center",
  },
});
