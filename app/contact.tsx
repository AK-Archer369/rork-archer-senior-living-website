import React, { useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import Head from "expo-router/head";
import { ScreenLayout } from "@/components/layout/ScreenLayout";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react-native";

const CARE_NEEDS_OPTIONS = [
  "Mobility Assistance",
  "Memory Care",
  "Medication Management",
  "Personal Care",
  "Other",
];

const TIMELINE_OPTIONS = [
  "Immediately",
  "Within 30 days",
  "1-3 months",
  "Just exploring options",
];

const LOCATION_OPTIONS = [
  "Maple Manor Pinckney",
  "Maple Manor Hamburg",
  "No preference",
];

const BEST_TIME_OPTIONS = [
  "Morning (9am-12pm)",
  "Afternoon (12pm-5pm)",
  "Evening (5pm-8pm)",
  "Anytime",
];

export default function ContactScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    relationship: "",
    residentName: "",
    residentAge: "",
    careNeeds: [] as string[],
    preferredLocation: "",
    timeline: "",
    phone: "",
    bestTimeToCall: "",
    email: "",
    additionalNotes: "",
  });

  const updateField = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleCareNeed = (need: string) => {
    const current = formData.careNeeds;
    if (current.includes(need)) {
      updateField("careNeeds", current.filter((n) => n !== need));
    } else {
      updateField("careNeeds", [...current, need]);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_SUPABASE_URL}/rest/v1/contact_submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "",
          "Authorization": `Bearer ${process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({
          name: formData.name,
          relationship: formData.relationship,
          resident_name: formData.residentName,
          resident_age: formData.residentAge ? parseInt(formData.residentAge) : null,
          care_needs: formData.careNeeds,
          preferred_location: formData.preferredLocation,
          timeline: formData.timeline,
          phone: formData.phone,
          best_time_to_call: formData.bestTimeToCall,
          email: formData.email,
          additional_notes: formData.additionalNotes,
        }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.relationship;
      case 2:
        return formData.residentName && formData.residentAge;
      case 3:
        return formData.careNeeds.length > 0;
      case 4:
        return formData.preferredLocation && formData.timeline;
      case 5:
        return formData.phone && formData.bestTimeToCall;
      default:
        return true;
    }
  };

  if (submitted) {
    return (
      <ScreenLayout>
        <Head>
          <title>Thank You | Archer Senior Living</title>
        </Head>
        <Stack.Screen options={{ title: "Thank You" }} />

        <Container style={styles.thankYouContainer}>
          <View style={styles.thankYouContent}>
            <CheckCircle2 size={80} color={COLORS.primary} />
            <Typography variant="h1" color={COLORS.primaryDark} align="center" style={{ marginTop: SPACING.xl }}>
              Thank You for Reaching Out
            </Typography>
            <Typography variant="body" align="center" style={{ marginTop: SPACING.m, lineHeight: 28, maxWidth: 600 }}>
              We have received your information and truly appreciate you considering Archer Senior Living for your
              loved one's care. A member of our family will contact you soon to discuss your needs and schedule a
              personal tour of our Maple Manor homes.
            </Typography>
            <Typography variant="body" align="center" style={{ marginTop: SPACING.l, lineHeight: 28, maxWidth: 600 }}>
              If you have any immediate questions or would like to speak with us right away, please call us at{" "}
              <Typography variant="body" color={COLORS.primary} weight="bold">
                (248) 854-4944
              </Typography>
            </Typography>
            <Typography variant="h3" color={COLORS.primaryDark} align="center" style={{ marginTop: SPACING.xxl }}>
              We look forward to meeting you and your family.
            </Typography>
            <Button
              title="Return to Home"
              onPress={() => router.push("/" as any)}
              variant="outline"
              style={{ marginTop: SPACING.xl }}
            />
          </View>
        </Container>
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout>
      <Head>
        <title>Contact Us | Schedule a Tour | Archer Senior Living | Livingston County MI</title>
        <meta
          name="description"
          content="Contact Archer Senior Living to schedule a tour of our Pinckney or Hamburg adult foster care homes. Family-centered care in Livingston County Michigan."
        />
      </Head>
      <Stack.Screen options={{ title: "Contact Us" }} />

      <View style={styles.header}>
        <Container>
          <Typography variant="h1" color={COLORS.white} align="center">
            Schedule a Tour
          </Typography>
          <Typography variant="h3" color={COLORS.white} align="center" weight="normal" style={{ opacity: 0.9 }}>
            Let's find the perfect home for your loved one
          </Typography>
        </Container>
      </View>

      <Container style={{ paddingVertical: SPACING.xxl }}>
        <View style={[styles.layout, isMobile && styles.layoutMobile]}>
          <View style={[styles.formSection, isMobile && styles.formSectionMobile]}>
            <View style={styles.progressBar}>
              {[1, 2, 3, 4, 5].map((s) => (
                <View
                  key={s}
                  style={[
                    styles.progressStep,
                    s <= step && styles.progressStepActive,
                  ]}
                />
              ))}
            </View>

            <Typography variant="caption" color={COLORS.textLight} style={{ marginBottom: SPACING.s }}>
              Step {step} of 5
            </Typography>

            <ScrollView showsVerticalScrollIndicator={false}>
              {step === 1 && (
                <View>
                  <Typography variant="h2" color={COLORS.primaryDark} style={{ marginBottom: SPACING.l }}>
                    Tell Us About You
                  </Typography>

                  <View style={styles.inputGroup}>
                    <Typography variant="body" weight="bold" style={{ marginBottom: SPACING.s }}>
                      Your Name *
                    </Typography>
                    <TextInput
                      style={styles.input}
                      value={formData.name}
                      onChangeText={(text) => updateField("name", text)}
                      placeholder="Enter your full name"
                      placeholderTextColor={COLORS.textLighter}
                    />
                  </View>

                  <View style={styles.inputGroup}>
                    <Typography variant="body" weight="bold" style={{ marginBottom: SPACING.s }}>
                      Your Relationship to Resident *
                    </Typography>
                    <TextInput
                      style={styles.input}
                      value={formData.relationship}
                      onChangeText={(text) => updateField("relationship", text)}
                      placeholder="e.g., Daughter, Son, Spouse"
                      placeholderTextColor={COLORS.textLighter}
                    />
                  </View>
                </View>
              )}

              {step === 2 && (
                <View>
                  <Typography variant="h2" color={COLORS.primaryDark} style={{ marginBottom: SPACING.l }}>
                    About Your Loved One
                  </Typography>

                  <View style={styles.inputGroup}>
                    <Typography variant="body" weight="bold" style={{ marginBottom: SPACING.s }}>
                      Resident Name *
                    </Typography>
                    <TextInput
                      style={styles.input}
                      value={formData.residentName}
                      onChangeText={(text) => updateField("residentName", text)}
                      placeholder="Enter resident's name"
                      placeholderTextColor={COLORS.textLighter}
                    />
                  </View>

                  <View style={styles.inputGroup}>
                    <Typography variant="body" weight="bold" style={{ marginBottom: SPACING.s }}>
                      Resident Age *
                    </Typography>
                    <TextInput
                      style={styles.input}
                      value={formData.residentAge}
                      onChangeText={(text) => updateField("residentAge", text.replace(/[^0-9]/g, ""))}
                      placeholder="Enter age"
                      keyboardType="number-pad"
                      placeholderTextColor={COLORS.textLighter}
                    />
                  </View>
                </View>
              )}

              {step === 3 && (
                <View>
                  <Typography variant="h2" color={COLORS.primaryDark} style={{ marginBottom: SPACING.l }}>
                    Primary Care Needs
                  </Typography>
                  <Typography variant="body" color={COLORS.textLight} style={{ marginBottom: SPACING.l }}>
                    Select all that apply *
                  </Typography>

                  {CARE_NEEDS_OPTIONS.map((need) => (
                    <TouchableOpacity
                      key={need}
                      style={[
                        styles.checkboxOption,
                        formData.careNeeds.includes(need) && styles.checkboxOptionSelected,
                      ]}
                      onPress={() => toggleCareNeed(need)}
                    >
                      <View
                        style={[
                          styles.checkbox,
                          formData.careNeeds.includes(need) && styles.checkboxSelected,
                        ]}
                      >
                        {formData.careNeeds.includes(need) && (
                          <CheckCircle2 size={18} color={COLORS.white} />
                        )}
                      </View>
                      <Typography variant="body">{need}</Typography>
                    </TouchableOpacity>
                  ))}
                </View>
              )}

              {step === 4 && (
                <View>
                  <Typography variant="h2" color={COLORS.primaryDark} style={{ marginBottom: SPACING.l }}>
                    Preferences
                  </Typography>

                  <View style={styles.inputGroup}>
                    <Typography variant="body" weight="bold" style={{ marginBottom: SPACING.s }}>
                      Preferred Location *
                    </Typography>
                    {LOCATION_OPTIONS.map((loc) => (
                      <TouchableOpacity
                        key={loc}
                        style={[
                          styles.radioOption,
                          formData.preferredLocation === loc && styles.radioOptionSelected,
                        ]}
                        onPress={() => updateField("preferredLocation", loc)}
                      >
                        <View
                          style={[
                            styles.radio,
                            formData.preferredLocation === loc && styles.radioSelected,
                          ]}
                        />
                        <Typography variant="body">{loc}</Typography>
                      </TouchableOpacity>
                    ))}
                  </View>

                  <View style={styles.inputGroup}>
                    <Typography variant="body" weight="bold" style={{ marginBottom: SPACING.s }}>
                      Placement Timeline *
                    </Typography>
                    {TIMELINE_OPTIONS.map((time) => (
                      <TouchableOpacity
                        key={time}
                        style={[
                          styles.radioOption,
                          formData.timeline === time && styles.radioOptionSelected,
                        ]}
                        onPress={() => updateField("timeline", time)}
                      >
                        <View
                          style={[
                            styles.radio,
                            formData.timeline === time && styles.radioSelected,
                          ]}
                        />
                        <Typography variant="body">{time}</Typography>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}

              {step === 5 && (
                <View>
                  <Typography variant="h2" color={COLORS.primaryDark} style={{ marginBottom: SPACING.l }}>
                    Contact Information
                  </Typography>

                  <View style={styles.inputGroup}>
                    <Typography variant="body" weight="bold" style={{ marginBottom: SPACING.s }}>
                      Phone Number *
                    </Typography>
                    <TextInput
                      style={styles.input}
                      value={formData.phone}
                      onChangeText={(text) => updateField("phone", text)}
                      placeholder="(248) 555-1234"
                      keyboardType="phone-pad"
                      placeholderTextColor={COLORS.textLighter}
                    />
                  </View>

                  <View style={styles.inputGroup}>
                    <Typography variant="body" weight="bold" style={{ marginBottom: SPACING.s }}>
                      Best Time to Call *
                    </Typography>
                    {BEST_TIME_OPTIONS.map((time) => (
                      <TouchableOpacity
                        key={time}
                        style={[
                          styles.radioOption,
                          formData.bestTimeToCall === time && styles.radioOptionSelected,
                        ]}
                        onPress={() => updateField("bestTimeToCall", time)}
                      >
                        <View
                          style={[
                            styles.radio,
                            formData.bestTimeToCall === time && styles.radioSelected,
                          ]}
                        />
                        <Typography variant="body">{time}</Typography>
                      </TouchableOpacity>
                    ))}
                  </View>

                  <View style={styles.inputGroup}>
                    <Typography variant="body" weight="bold" style={{ marginBottom: SPACING.s }}>
                      Email Address (Optional)
                    </Typography>
                    <TextInput
                      style={styles.input}
                      value={formData.email}
                      onChangeText={(text) => updateField("email", text)}
                      placeholder="your@email.com"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      placeholderTextColor={COLORS.textLighter}
                    />
                  </View>

                  <View style={styles.inputGroup}>
                    <Typography variant="body" weight="bold" style={{ marginBottom: SPACING.s }}>
                      Additional Notes (Optional)
                    </Typography>
                    <TextInput
                      style={[styles.input, styles.textarea]}
                      value={formData.additionalNotes}
                      onChangeText={(text) => updateField("additionalNotes", text)}
                      placeholder="Any additional information you'd like us to know..."
                      multiline
                      numberOfLines={4}
                      placeholderTextColor={COLORS.textLighter}
                    />
                  </View>
                </View>
              )}

              <View style={styles.buttonRow}>
                {step > 1 && (
                  <Button
                    title="Back"
                    onPress={() => setStep(step - 1)}
                    variant="outline"
                    style={{ flex: 1, marginRight: SPACING.m }}
                  />
                )}
                {step < 5 ? (
                  <Button
                    title="Next"
                    onPress={() => setStep(step + 1)}
                    disabled={!canProceed()}
                    style={{ flex: 1 }}
                  />
                ) : (
                  <Button
                    title={isSubmitting ? "Submitting..." : "Submit"}
                    onPress={handleSubmit}
                    disabled={!canProceed() || isSubmitting}
                    style={{ flex: 1 }}
                  />
                )}
              </View>
            </ScrollView>
          </View>

          <View style={[styles.infoSection, isMobile && styles.infoSectionMobile]}>
            <View style={styles.contactCard}>
              <Typography variant="h3" color={COLORS.primaryDark} style={{ marginBottom: SPACING.l }}>
                Contact Information
              </Typography>

              <View style={styles.contactItem}>
                <Phone size={20} color={COLORS.primary} />
                <View style={{ marginLeft: SPACING.m }}>
                  <Typography variant="caption" color={COLORS.textLight}>
                    Call Us
                  </Typography>
                  <Typography variant="body" weight="bold">
                    (248) 854-4944
                  </Typography>
                </View>
              </View>

              <View style={styles.contactItem}>
                <Mail size={20} color={COLORS.primary} />
                <View style={{ marginLeft: SPACING.m }}>
                  <Typography variant="caption" color={COLORS.textLight}>
                    Email
                  </Typography>
                  <Typography variant="body" weight="bold">
                    info@archerseniorliving.com
                  </Typography>
                </View>
              </View>

              <View style={styles.contactItem}>
                <MapPin size={20} color={COLORS.primary} />
                <View style={{ marginLeft: SPACING.m }}>
                  <Typography variant="caption" color={COLORS.textLight}>
                    Maple Manor Pinckney
                  </Typography>
                  <Typography variant="body">
                    7119 Pinckney Road{"\n"}Pinckney, MI 48169
                  </Typography>
                </View>
              </View>

              <View style={styles.contactItem}>
                <MapPin size={20} color={COLORS.primary} />
                <View style={{ marginLeft: SPACING.m }}>
                  <Typography variant="caption" color={COLORS.textLight}>
                    Maple Manor Hamburg
                  </Typography>
                  <Typography variant="body">
                    9090 Chilson Road{"\n"}Brighton, MI 48116
                  </Typography>
                </View>
              </View>
            </View>
          </View>
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
  layout: {
    flexDirection: "row",
    gap: SPACING.xxl,
  },
  layoutMobile: {
    flexDirection: "column",
  },
  formSection: {
    flex: 2,
    backgroundColor: COLORS.white,
    padding: SPACING.xl,
    borderRadius: BORDER_RADIUS.l,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  formSectionMobile: {
    width: "100%",
  },
  infoSection: {
    flex: 1,
  },
  infoSectionMobile: {
    width: "100%",
    marginTop: SPACING.xl,
  },
  progressBar: {
    flexDirection: "row",
    marginBottom: SPACING.l,
    gap: SPACING.s,
  },
  progressStep: {
    flex: 1,
    height: 4,
    backgroundColor: COLORS.border,
    borderRadius: 2,
  },
  progressStepActive: {
    backgroundColor: COLORS.primary,
  },
  inputGroup: {
    marginBottom: SPACING.l,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.m,
    padding: SPACING.m,
    fontSize: 16,
    color: COLORS.text,
    backgroundColor: COLORS.white,
  },
  textarea: {
    height: 120,
    textAlignVertical: "top",
  },
  checkboxOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.m,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.m,
    marginBottom: SPACING.s,
  },
  checkboxOptionSelected: {
    borderColor: COLORS.primary,
    backgroundColor: `${COLORS.primary}10`,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.s,
    marginRight: SPACING.m,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.m,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.m,
    marginBottom: SPACING.s,
  },
  radioOptionSelected: {
    borderColor: COLORS.primary,
    backgroundColor: `${COLORS.primary}10`,
  },
  radio: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: COLORS.border,
    borderRadius: 10,
    marginRight: SPACING.m,
  },
  radioSelected: {
    borderColor: COLORS.primary,
    borderWidth: 6,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: SPACING.xl,
  },
  contactCard: {
    backgroundColor: COLORS.white,
    padding: SPACING.xl,
    borderRadius: BORDER_RADIUS.l,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: SPACING.l,
  },
  thankYouContainer: {
    minHeight: 600,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: SPACING.xxl * 2,
  },
  thankYouContent: {
    maxWidth: 700,
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: SPACING.xxl,
    borderRadius: BORDER_RADIUS.l,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});
