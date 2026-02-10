import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { ScreenLayout } from "@/components/layout/ScreenLayout";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { Heart, Users, Shield, Clock, GraduationCap, Award, UserCheck } from "lucide-react-native";
import { useRouter } from "expo-router";

const VALUES = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "We treat every resident with the kindness, respect, and dignity they deserve, just like our own family.",
  },
  {
    icon: Users,
    title: "Small Home Model",
    description: "Our homes with 6 all private rooms ensure a low caregiver to resident ratio, fostering deeper relationships and personalized care.",
  },
  {
    icon: Shield,
    title: "Safety and Security",
    description: "24/7 staffing and secure environments provide peace of mind for residents and their families.",
  },
  {
    icon: Clock,
    title: "Consistent Care",
    description: "Low staff turnover means familiar faces and consistent routines that help residents thrive.",
  },
];

export default function AboutScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <ScreenLayout>
      {/* Hero */}
      <View style={styles.hero}>
        <Container>
          <View style={[styles.heroContent, isMobile && styles.heroContentMobile]}>
            <View style={styles.heroText}>
              <Typography variant="h1" color={COLORS.primaryDark}>
                About Archer Senior Living
              </Typography>
              <Typography variant="body" color={COLORS.textLight} style={{ maxWidth: 700, marginBottom: SPACING.m }}>
                Archer Senior Living was founded on the belief that senior care should be personal, not institutional. We operate two senior living homes in Livingston County, Michigan: Maple Manor of Pinckney and Maple Manor of Hamburg.
              </Typography>
              <Typography variant="body" color={COLORS.textLight} style={{ maxWidth: 700 }}>
                By keeping our homes small, limited to just 6 residents each, we are able to provide a level of attention and companionship that large facilities simply cannot match. Our residents are not just room numbers. They are part of our family.
              </Typography>
            </View>
          </View>
        </Container>
      </View>

      {/* Main Content */}
      <Container style={{ paddingBottom: SPACING.xxl }}>
        {/* Why I Built This Section */}
        <View style={[styles.section, isMobile && styles.sectionMobile]}>
          <View style={[styles.imageWrapper, isMobile && styles.imageWrapperMobile]}>
            <Image
              source={{ uri: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/mkmdh4967pfn9nqv2cpck" }}
              style={styles.image}
              contentFit="cover"
            />
          </View>
          <View style={[styles.textContent, isMobile && styles.textContentMobile]}>
            <Typography variant="h3" color={COLORS.primaryDark}>
              Why I Built This
            </Typography>
            <Typography variant="body" style={styles.paragraph}>
              I have spent years working across the senior care community in multiple roles, which has given me a clear view of what families need and what many care settings struggle to deliver. A large portion of my career has been in private duty care, providing one on one support that helps seniors remain at home. And for most people, aging at home is the goal.
            </Typography>
            <Typography variant="body" style={styles.paragraph}>
              But private duty care can become financially unrealistic quickly. It can also become isolating. Many seniors need more individualized attention than most traditional settings can consistently provide, yet staying home alone with rotating caregivers is not always the safest or most sustainable path.
            </Typography>
            <Typography variant="body" style={styles.paragraph}>
              There had to be a better solution.
            </Typography>
            <Typography variant="body" style={styles.paragraph}>
              So we built one.
            </Typography>
          </View>
        </View>

        {/* What Makes Our Home Different Section */}
        <View style={[styles.section, isMobile && styles.sectionMobile]}>
          <View style={[styles.imageWrapper, isMobile && styles.imageWrapperMobile]}>
            <Image
              source={{ uri: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/pkutahg47fovai3zqzefs" }}
              style={styles.image}
              contentFit="cover"
            />
          </View>
          <View style={[styles.textContent, isMobile && styles.textContentMobile]}>
            <Typography variant="h3" color={COLORS.primaryDark}>
              What Makes Our Home Different
            </Typography>
            <Typography variant="body" style={styles.paragraph}>
              We created a boutique, home based environment designed to feel like private duty care without the private duty cost. By maintaining a high staffing ratio, residents receive more individualized attention while sharing the cost of care in a way that is more realistic for families.
            </Typography>
            <Typography variant="body" style={styles.paragraph}>
              Our staff is consistent, and the atmosphere is truly a home. That matters. We have found residents are calmer and more engaged when they can see daily life happening around them, hear conversation, smell meals being prepared, and participate in simple activities of daily living. It is not clinical. It is familiar. And that familiarity supports dignity, comfort, and connection.
            </Typography>
          </View>
        </View>

        {/* Respite Care Section */}
        <View style={[styles.section, isMobile && styles.sectionMobile]}>
          <View style={[styles.imageWrapper, isMobile && styles.imageWrapperMobile]}>
            <Image
              source={{ uri: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/cbcdu8zofvykikcn592b1" }}
              style={styles.image}
              contentFit="cover"
            />
          </View>
          <View style={[styles.textContent, isMobile && styles.textContentMobile]}>
            <Typography variant="h3" color={COLORS.primaryDark}>
              Respite Care When You Need It Most
            </Typography>
            <Typography variant="body" style={styles.paragraph}>
              We are also committed to providing respite care whenever we have availability.
            </Typography>
            <Typography variant="body" style={styles.paragraph}>
              Over the years, I have sat in too many care conferences where permanent decisions were made because of temporary situations. A fall and a broken bone. A planned surgery. A caregiver who is exhausted and needs a break. In those moments, families often feel forced to make rushed choices that do not match their long term plan.
            </Typography>
            <Typography variant="body" style={styles.paragraph}>
              Sometimes the right answer is a safe place to recover for a month or 2, stabilize, and then return home.
            </Typography>
            <Typography variant="body" style={styles.paragraph}>
              If that is your situation, we are here, and we are happy to help.
            </Typography>
          </View>
        </View>

        {/* Experience and Credentials */}
        <View style={styles.credentialsSection}>
          <Typography variant="h2" color={COLORS.primaryDark} style={{ marginBottom: SPACING.l }}>
            Experience and Credentials
          </Typography>
          
          <View style={[styles.credentialsGrid, isMobile && styles.credentialsGridMobile]}>
            <View style={styles.credentialCard}>
              <View style={styles.credentialIconBox}>
                <GraduationCap size={28} color={COLORS.primary} />
              </View>
              <Typography variant="h4" style={{ marginBottom: SPACING.s }}>Education</Typography>
              <Typography variant="body" style={styles.credentialText}>
                Bachelor of Arts, Western Michigan University
              </Typography>
              <Typography variant="body" style={styles.credentialText}>
                Master of Public Health, Hospital Administration concentration, University of Michigan
              </Typography>
            </View>

            <View style={styles.credentialCard}>
              <View style={styles.credentialIconBox}>
                <Award size={28} color={COLORS.primary} />
              </View>
              <Typography variant="h4" style={{ marginBottom: SPACING.s }}>Certifications and Training</Typography>
              <Typography variant="body" style={styles.credentialText}>
                Certified Dementia Practitioner
              </Typography>
              <Typography variant="body" style={styles.credentialText}>
                Trained in Teepa Snow Positive Approach to Care methods
              </Typography>
            </View>

            <View style={styles.credentialCard}>
              <View style={styles.credentialIconBox}>
                <UserCheck size={28} color={COLORS.primary} />
              </View>
              <Typography variant="h4" style={{ marginBottom: SPACING.s }}>Community Leadership</Typography>
              <Typography variant="body" style={styles.credentialText}>
                Member at Large, Livingston County Consortium on Aging
              </Typography>
              <Typography variant="body" style={styles.credentialText}>
                End Alzheimer Ann Arbor Walk Coordinator, 2018 to present
              </Typography>
            </View>
          </View>
        </View>

        {/* Values Grid */}
        <View style={{ marginTop: SPACING.xxl }}>
          <Typography variant="h2" align="center" color={COLORS.primaryDark} style={{ marginBottom: SPACING.xl }}>
            Our Core Values
          </Typography>
          
          <View style={[styles.grid, isMobile && styles.gridMobile]}>
            {VALUES.map((item, index) => (
              <View key={index} style={[styles.card, isMobile && styles.cardMobile]}>
                <View style={styles.iconBox}>
                  <item.icon size={28} color={COLORS.primary} />
                </View>
                <Typography variant="h4" style={{ marginBottom: 8 }}>
                  {item.title}
                </Typography>
                <Typography variant="bodySmall" color={COLORS.textLight}>
                  {item.description}
                </Typography>
              </View>
            ))}
          </View>
        </View>

        {/* Founder/Team Note (Optional/Placeholder) */}
        <View style={styles.noteSection}>
          <Typography variant="h3" align="center" color={COLORS.white} style={{ marginBottom: SPACING.m }}>
            &quot;The owners are a delight!&quot;
          </Typography>
          <Typography variant="body" align="center" color={COLORS.white} style={{ opacity: 0.9 }}>
            — Jacob Stall, Local Guide
          </Typography>
          <View style={{ marginTop: SPACING.l }}>
            <Button
              title="Meet Our Team"
              onPress={() => router.push("/contact" as any)} // Or a team section if we had one
              variant="outline"
              style={{ borderColor: COLORS.white }}
              textStyle={{ color: COLORS.white }}
            />
          </View>
        </View>
      </Container>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hero: {
    paddingVertical: SPACING.xxl,
    backgroundColor: COLORS.background,
  },
  heroContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  heroContentMobile: {
    flexDirection: "column",
    textAlign: "center",
  },
  heroText: {
    flex: 1,
  },
  section: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: SPACING.xl,
    marginTop: SPACING.xl,
  },
  sectionMobile: {
    flexDirection: "column",
  },
  imageWrapper: {
    width: "40%",
    height: 320,
    borderRadius: BORDER_RADIUS.l,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  textContent: {
    width: "60%",
    flex: 1,
  },
  imageWrapperMobile: {
    width: "100%",
  },
  textContentMobile: {
    width: "100%",
  },
  paragraph: {
    marginBottom: SPACING.m,
    lineHeight: 26,
    opacity: 0.8,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SPACING.m,
    justifyContent: "space-between",
  },
  gridMobile: {
    flexDirection: "column",
  },
  card: {
    width: "48%", // 2 columns
    backgroundColor: COLORS.white,
    padding: SPACING.l,
    borderRadius: BORDER_RADIUS.m,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardMobile: {
    width: "100%",
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.m,
  },
  noteSection: {
    marginTop: SPACING.xxl,
    backgroundColor: COLORS.primary,
    padding: SPACING.xl,
    borderRadius: BORDER_RADIUS.l,
    alignItems: "center",
  },
  credentialsSection: {
    marginTop: SPACING.xxl,
    paddingTop: SPACING.xl,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  credentialsGrid: {
    flexDirection: "row",
    gap: SPACING.l,
  },
  credentialsGridMobile: {
    flexDirection: "column",
  },
  credentialCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SPACING.l,
    borderRadius: BORDER_RADIUS.m,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  credentialIconBox: {
    width: 56,
    height: 56,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.m,
  },
  credentialText: {
    marginBottom: SPACING.s,
    lineHeight: 24,
    opacity: 0.8,
  },
});
