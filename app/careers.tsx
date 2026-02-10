import React, { useState } from "react";
import { View, StyleSheet, TextInput, useWindowDimensions, Alert, Platform, TouchableOpacity, Linking } from "react-native";
import { ScreenLayout } from "@/components/layout/ScreenLayout";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { Phone, Mail, MapPin, Check, Upload, ChevronDown } from "lucide-react-native";

type LocationOption = "either" | "pinckney" | "hamburg";

export default function CareersScreen() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [passion, setPassion] = useState("");
  const [teamFit, setTeamFit] = useState("");
  const [availability, setAvailability] = useState("");
  const [startDate, setStartDate] = useState("");
  const [preferredLocation, setPreferredLocation] = useState<LocationOption>("either");
  const [resumeFileName, setResumeFileName] = useState("");

  const locationLabels: Record<LocationOption, string> = {
    either: "Either Location",
    pinckney: "Pinckney",
    hamburg: "Hamburg",
  };

  const handleResumeUpload = () => {
    if (Platform.OS === "web") {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".pdf,.doc,.docx";
      input.onchange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        const file = target.files?.[0];
        if (file) {
          setResumeFileName(file.name);
        }
      };
      input.click();
    } else {
      Alert.alert("Upload Resume", "Resume upload functionality would open document picker on native devices.");
    }
  };

  const handleSubmit = async () => {
    if (!name || !phone || !email) {
      if (Platform.OS === "web") {
        window.alert("Please fill in your name, phone number, and email address.");
      } else {
        Alert.alert("Missing Information", "Please fill in your name, phone number, and email address.");
      }
      return;
    }

    setIsSubmitting(true);

    const mailtoBody = [
      "New Career Application",
      "",
      "Full Name: " + name,
      "Phone Number: " + phone,
      "Email Address: " + email,
      "",
      "What makes you passionate about working with seniors?",
      passion,
      "",
      "Why do you believe you'd be a good addition to our close-knit team?",
      teamFit,
      "",
      "Work Availability: " + availability,
      "Start Date: " + startDate,
      "Preferred Location: " + locationLabels[preferredLocation],
      "Resume: " + (resumeFileName || "Not uploaded"),
    ].join("\n");

    const mailtoUrl = "mailto:archerseniornavigation@gmail.com?subject=Career Application - " + name + "&body=" + encodeURIComponent(mailtoBody);

    if (Platform.OS === "web") {
      window.open(mailtoUrl, "_blank");
    } else {
      Linking.openURL(mailtoUrl);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName("");
      setPhone("");
      setEmail("");
      setPassion("");
      setTeamFit("");
      setAvailability("");
      setStartDate("");
      setPreferredLocation("either");
      setResumeFileName("");
    }, 1000);
  };

  const handleSelectLocation = (value: LocationOption) => {
    setPreferredLocation(value);
    setShowLocationDropdown(false);
  };

  if (isSuccess) {
    return (
      <ScreenLayout>
        <Container style={styles.successContainer}>
          <View style={styles.successCard}>
            <View style={styles.successIcon}>
              <Check size={48} color={COLORS.white} />
            </View>
            <Typography variant="h2" align="center" color={COLORS.primaryDark}>
              {"Application Received!"}
            </Typography>
            <Typography variant="body" align="center" style={styles.successText}>
              {"Thank you for your interest in joining the Archer Senior Living team! We have received your application and resume. Our team will review your qualifications and reach out if there is a potential fit for our close-knit community."}
            </Typography>
            <Button
              title="Back to Home"
              onPress={() => setIsSuccess(false)}
              variant="outline"
            />
          </View>
        </Container>
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout>
      <View style={styles.header}>
        <Container>
          <Typography variant="h1" color={COLORS.white} align="center">
            {"Careers"}
          </Typography>
          <Typography variant="h3" color={COLORS.white} align="center" weight="normal" style={styles.headerSubtitle}>
            {"Join Our Caring Team"}
          </Typography>
        </Container>
      </View>

      <Container style={styles.contentContainer}>
        <View style={[styles.grid, isMobile && styles.gridMobile]}>
          <View style={[styles.infoCol, isMobile && styles.infoColMobile]}>
            <Typography variant="h3" color={COLORS.primaryDark} style={styles.infoTitle}>
              {"Why Work With Us?"}
            </Typography>
            <Typography variant="body" style={styles.infoText}>
              {"At Archer Senior Living, we believe in creating a family-like environment not just for our residents, but for our staff as well. Join a team where your work truly makes a difference in people's lives every day."}
            </Typography>

            <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL("tel:248-854-4944")}>
              <View style={styles.iconBox}>
                <Phone size={24} color={COLORS.primary} />
              </View>
              <View>
                <Typography variant="h4" style={styles.contactLabel}>
                  {"Call Us"}
                </Typography>
                <Typography variant="body" color={COLORS.textLight}>
                  {"248-854-4944"}
                </Typography>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL("mailto:archerseniornavigation@gmail.com")}>
              <View style={styles.iconBox}>
                <Mail size={24} color={COLORS.primary} />
              </View>
              <View>
                <Typography variant="h4" style={styles.contactLabel}>
                  {"Email Us"}
                </Typography>
                <Typography variant="body" color={COLORS.textLight}>
                  {"archerseniornavigation@gmail.com"}
                </Typography>
              </View>
            </TouchableOpacity>

            <View style={styles.divider} />

            <Typography variant="h4" color={COLORS.primaryDark} style={styles.locationsTitle}>
              {"Our Locations"}
            </Typography>

            <View style={styles.locationItem}>
              <MapPin size={20} color={COLORS.secondary} style={styles.locationIcon} />
              <View>
                <Typography variant="body" weight="bold">
                  {"Maple Manor of Pinckney"}
                </Typography>
                <Typography variant="caption" color={COLORS.textLight}>
                  {"7119 Pinckney Rd, Pinckney, MI"}
                </Typography>
              </View>
            </View>

            <View style={styles.locationItem}>
              <MapPin size={20} color={COLORS.secondary} style={styles.locationIcon} />
              <View>
                <Typography variant="body" weight="bold">
                  {"Maple Manor of Hamburg"}
                </Typography>
                <Typography variant="caption" color={COLORS.textLight}>
                  {"9090 Chilson Rd, Brighton, MI"}
                </Typography>
              </View>
            </View>
          </View>

          <View style={[styles.formCard, isMobile && styles.formCardMobile]}>
            <Typography variant="h3" style={styles.formTitle}>
              {"Apply Now"}
            </Typography>

            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>
                {"Full Name *"}
              </Typography>
              <TextInput
                style={styles.input}
                placeholder="Jane Doe"
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>
                {"Phone Number *"}
              </Typography>
              <TextInput
                style={styles.input}
                placeholder="(555) 555-5555"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>
                {"Email Address *"}
              </Typography>
              <TextInput
                style={styles.input}
                placeholder="jane@example.com"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>
                {"What makes you passionate about working with seniors?"}
              </Typography>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Share your passion and experience..."
                placeholderTextColor="#999"
                multiline
                numberOfLines={4}
                value={passion}
                onChangeText={setPassion}
              />
            </View>

            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>
                {"Why do you believe you'd be a good addition to our close-knit team?"}
              </Typography>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Tell us about yourself..."
                placeholderTextColor="#999"
                multiline
                numberOfLines={4}
                value={teamFit}
                onChangeText={setTeamFit}
              />
            </View>

            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>
                {"Work Availability"}
              </Typography>
              <TextInput
                style={styles.input}
                placeholder="e.g., Mon-Fri, 8am-4pm"
                placeholderTextColor="#999"
                value={availability}
                onChangeText={setAvailability}
              />
            </View>

            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>
                {"When can you start?"}
              </Typography>
              <TextInput
                style={styles.input}
                placeholder="MM/DD/YYYY"
                placeholderTextColor="#999"
                value={startDate}
                onChangeText={setStartDate}
              />
            </View>

            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>
                {"Preferred Location to Work At"}
              </Typography>
              <TouchableOpacity
                style={styles.dropdownButton}
                onPress={() => setShowLocationDropdown(!showLocationDropdown)}
              >
                <Typography variant="body" color={preferredLocation === "either" ? "#999" : COLORS.text}>
                  {locationLabels[preferredLocation]}
                </Typography>
                <ChevronDown size={20} color={COLORS.textLight} />
              </TouchableOpacity>
              {showLocationDropdown && (
                <View style={styles.dropdownMenu}>
                  <TouchableOpacity style={styles.dropdownItem} onPress={() => handleSelectLocation("either")}>
                    <Typography variant="body">{"Either Location"}</Typography>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.dropdownItem} onPress={() => handleSelectLocation("pinckney")}>
                    <Typography variant="body">{"Pinckney"}</Typography>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.dropdownItem} onPress={() => handleSelectLocation("hamburg")}>
                    <Typography variant="body">{"Hamburg"}</Typography>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>
                {"Upload Resume"}
              </Typography>
              <TouchableOpacity style={styles.uploadButton} onPress={handleResumeUpload}>
                <Upload size={20} color={COLORS.primary} />
                <Typography variant="body" color={COLORS.primary}>
                  {resumeFileName || "Choose File"}
                </Typography>
              </TouchableOpacity>
              {resumeFileName ? (
                <Typography variant="caption" color={COLORS.textLight} style={styles.selectedFile}>
                  {"Selected: " + resumeFileName}
                </Typography>
              ) : null}
            </View>

            <Button
              title="Submit Application"
              onPress={handleSubmit}
              isLoading={isSubmitting}
              size="large"
              style={styles.submitButton}
            />
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
  headerSubtitle: {
    opacity: 0.9,
  },
  contentContainer: {
    paddingBottom: SPACING.xxl,
  },
  successContainer: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: SPACING.xxl,
  },
  successCard: {
    backgroundColor: COLORS.white,
    padding: SPACING.xl,
    borderRadius: BORDER_RADIUS.l,
    alignItems: "center",
    maxWidth: 600,
    alignSelf: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.l,
  },
  successText: {
    marginBottom: SPACING.xl,
    opacity: 0.8,
    lineHeight: 26,
  },
  grid: {
    flexDirection: "row",
    gap: SPACING.xl,
  },
  gridMobile: {
    flexDirection: "column",
  },
  infoCol: {
    flex: 1,
    paddingTop: SPACING.l,
  },
  infoColMobile: {
    paddingTop: 0,
  },
  infoTitle: {
    marginBottom: SPACING.l,
  },
  infoText: {
    marginBottom: SPACING.xl,
    lineHeight: 26,
  },
  formCard: {
    flex: 1.5,
    backgroundColor: COLORS.white,
    padding: SPACING.xl,
    borderRadius: BORDER_RADIUS.l,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  formCardMobile: {
    width: "100%",
    padding: SPACING.l,
  },
  formTitle: {
    marginBottom: SPACING.l,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.m,
    marginBottom: SPACING.l,
  },
  contactLabel: {
    marginBottom: 4,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.l,
  },
  locationsTitle: {
    marginBottom: SPACING.m,
  },
  locationItem: {
    flexDirection: "row",
    gap: SPACING.s,
    marginBottom: SPACING.m,
  },
  locationIcon: {
    marginTop: 4,
  },
  formGroup: {
    marginBottom: SPACING.m,
  },
  label: {
    marginBottom: 6,
    color: COLORS.textLight,
    fontWeight: "600" as const,
  },
  input: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.m,
    paddingHorizontal: SPACING.m,
    paddingVertical: 12,
    fontSize: 16,
    color: COLORS.text,
    fontFamily: Platform.select({ web: "system-ui", default: undefined }),
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.m,
    paddingHorizontal: SPACING.m,
    paddingVertical: 14,
  },
  dropdownMenu: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.m,
    marginTop: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dropdownItem: {
    paddingHorizontal: SPACING.m,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.s,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderStyle: "dashed",
    borderRadius: BORDER_RADIUS.m,
    paddingHorizontal: SPACING.m,
    paddingVertical: 14,
  },
  selectedFile: {
    marginTop: 4,
  },
  submitButton: {
    marginTop: SPACING.m,
  },
});
