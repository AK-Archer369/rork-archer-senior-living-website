import React, { useState } from "react";
import { View, StyleSheet, TextInput, useWindowDimensions, Alert, Platform, TouchableOpacity, Linking } from "react-native";
import { ScreenLayout } from "@/components/layout/ScreenLayout";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { Phone, Mail, MapPin, Check } from "lucide-react-native";
import { Picker } from "@react-native-picker/picker";

export default function ContactScreen() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [relationship, setRelationship] = useState("");
  const [timeframe, setTimeframe] = useState("immediately");
  const [needs, setNeeds] = useState("");
  const [preferredHome, setPreferredHome] = useState("either");

  const handleSubmit = async () => {
    if (!name || !phone) {
      if (Platform.OS === 'web') {
        window.alert("Please fill in at least your name and phone number.");
      } else {
        Alert.alert("Missing Information", "Please fill in at least your name and phone number.");
      }
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setRelationship("");
      setNeeds("");
    }, 1500);
  };

  if (isSuccess) {
    return (
      <ScreenLayout>
        <Container style={{ flex: 1, justifyContent: "center", paddingVertical: SPACING.xxl }}>
          <View style={styles.successCard}>
            <View style={styles.successIcon}>
              <Check size={48} color={COLORS.white} />
            </View>
            <Typography variant="h2" align="center" color={COLORS.primaryDark}>
              Message Sent!
            </Typography>
            <Typography variant="body" align="center" style={{ marginBottom: SPACING.xl, opacity: 0.8, lineHeight: 26 }}>
              Thank you for reaching out to Archer Senior Living. We understand how important this decision is, and a member of our team will contact you shortly to answer your questions or schedule your tour.
            </Typography>
            <Button
              title="Back to Home"
              onPress={() => setIsSuccess(false)} // Or navigate home
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
            Contact Us
          </Typography>
          <Typography variant="h3" color={COLORS.white} align="center" weight="normal" style={{ opacity: 0.9 }}>
            Schedule a Tour or Get More Information
          </Typography>
        </Container>
      </View>

      <Container style={styles.contentContainer}>
        <View style={[styles.grid, isMobile && styles.gridMobile]}>
          {/* Contact Info Side */}
          <View style={[styles.infoCol, isMobile && styles.infoColMobile]}>
            <Typography variant="h3" color={COLORS.primaryDark} style={{ marginBottom: SPACING.l }}>
              Get in Touch
            </Typography>
            <Typography variant="body" style={{ marginBottom: SPACING.xl }}>
              We&apos;re here to help you navigate this important decision. Call us directly or fill out the form to request a tour.
            </Typography>

            <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL('tel:248-854-4944')}>
              <View style={styles.iconBox}>
                <Phone size={24} color={COLORS.primary} />
              </View>
              <View>
                <Typography variant="h4" style={{ marginBottom: 4 }}>Call Us</Typography>
                <Typography variant="body" color={COLORS.textLight}>248-854-4944</Typography>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL('mailto:archerseniornavigation@gmail.com')}>
              <View style={styles.iconBox}>
                <Mail size={24} color={COLORS.primary} />
              </View>
              <View>
                <Typography variant="h4" style={{ marginBottom: 4 }}>Email Us</Typography>
                <Typography variant="body" color={COLORS.textLight}>archerseniornavigation@gmail.com</Typography>
              </View>
            </TouchableOpacity>

            <View style={styles.divider} />

            <Typography variant="h4" color={COLORS.primaryDark} style={{ marginBottom: SPACING.m }}>
              Our Locations
            </Typography>

            <View style={styles.locationItem}>
              <MapPin size={20} color={COLORS.secondary} style={{ marginTop: 4 }} />
              <View>
                <Typography variant="body" weight="bold">Maple Manor of Pinckney</Typography>
                <Typography variant="caption" color={COLORS.textLight}>7119 Pinckney Rd, Pinckney, MI</Typography>
              </View>
            </View>

            <View style={styles.locationItem}>
              <MapPin size={20} color={COLORS.secondary} style={{ marginTop: 4 }} />
              <View>
                <Typography variant="body" weight="bold">Maple Manor of Hamburg</Typography>
                <Typography variant="caption" color={COLORS.textLight}>9090 Chilson Rd, Brighton, MI</Typography>
              </View>
            </View>
          </View>

          {/* Form Side */}
          <View style={[styles.formCard, isMobile && styles.formCardMobile]}>
            <Typography variant="h3" style={{ marginBottom: SPACING.l }}>
              Send a Message
            </Typography>

            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>Full Name *</Typography>
              <TextInput
                style={styles.input}
                placeholder="Jane Doe"
                placeholderTextColor="#CCC"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>Phone Number *</Typography>
              <TextInput
                style={styles.input}
                placeholder="(555) 555-5555"
                placeholderTextColor="#CCC"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>Email Address</Typography>
              <TextInput
                style={styles.input}
                placeholder="jane@example.com"
                placeholderTextColor="#CCC"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>Relationship to Resident</Typography>
              <TextInput
                style={styles.input}
                placeholder="Daughter, Son, Self, etc."
                placeholderTextColor="#CCC"
                value={relationship}
                onChangeText={setRelationship}
              />
            </View>

            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>Timeframe Needed</Typography>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={timeframe}
                  onValueChange={(itemValue) => setTimeframe(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Immediately" value="immediately" />
                  <Picker.Item label="1-2 Weeks" value="1-2_weeks" />
                  <Picker.Item label="30 Days" value="30_days" />
                  <Picker.Item label="60+ Days" value="60_plus_days" />
                  <Picker.Item label="Just researching" value="researching" />
                </Picker>
              </View>
            </View>
            
            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>Preferred Home</Typography>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={preferredHome}
                  onValueChange={(itemValue) => setPreferredHome(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Either Location" value="either" />
                  <Picker.Item label="Pinckney" value="pinckney" />
                  <Picker.Item label="Hamburg" value="hamburg" />
                </Picker>
              </View>
            </View>

            <View style={styles.formGroup}>
              <Typography variant="caption" style={styles.label}>How can we help?</Typography>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Please describe care needs or any specific questions..."
                placeholderTextColor="#CCC"
                multiline
                numberOfLines={4}
                value={needs}
                onChangeText={setNeeds}
              />
            </View>

            <Button
              title="Send Inquiry"
              onPress={handleSubmit}
              isLoading={isSubmitting}
              size="large"
              style={{ marginTop: SPACING.m }}
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
  contentContainer: {
    paddingBottom: SPACING.xxl,
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
    order: 2, // Flex order not fully supported in RN without special handling, better to just swap in JSX if needed, but here simple stack is fine
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
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.m,
    marginBottom: SPACING.l,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.l,
  },
  locationItem: {
    flexDirection: "row",
    gap: SPACING.s,
    marginBottom: SPACING.m,
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.m,
    backgroundColor: COLORS.background,
    overflow: 'hidden',
  },
  picker: {
    height: Platform.OS === 'ios' ? undefined : 50,
    width: '100%',
    backgroundColor: 'transparent',
    borderWidth: 0, // Remove default border if any
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
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.l,
  },
});
