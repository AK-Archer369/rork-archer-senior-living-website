import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants/theme";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";
import { ChevronDown, ChevronUp } from "lucide-react-native";

const FAQS = [
  {
    question: "What is Adult Foster Care (AFC)?",
    answer: "Adult Foster Care (AFC) provides 24-hour supervision, personal care, and protection in a residential setting. It's ideal for those who need assistance with daily living but want a home-like environment rather than a large institution.",
  },
  {
    question: "How is a 6-bed home different from a large facility?",
    answer: "Our 6-bed homes offer a much higher staff-to-resident ratio, ensuring more personalized attention. Residents build closer relationships with caregivers and housemates, and the environment is quieter and more familiar.",
  },
  {
    question: "What conditions are a good fit?",
    answer: "We support seniors needing assistance with ADLs, medication management, and those seeking companionship. We are also equipped to support memory care needs in a secure environment.",
  },
  {
    question: "How do tours and admissions work?",
    answer: "Simply contact us to schedule a tour. If you feel it's a good fit, we'll conduct an assessment to ensure we can meet your loved one's needs, then proceed with the admission paperwork.",
  },
  {
    question: "What should I bring to a tour?",
    answer: "Bring your questions! It's also helpful to have a general idea of your loved one's current care needs, medical history, and preferences so we can discuss how we can best support them.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <View style={styles.container}>
      <Container maxWidth={800}>
        <Typography variant="h2" align="center" color={COLORS.primaryDark} style={{ marginBottom: SPACING.xl }}>
          Common Questions
        </Typography>

        <View style={styles.list}>
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => setOpenIndex(isOpen ? null : index)}
                style={[styles.item, isOpen && styles.itemOpen]}
              >
                <View style={styles.questionRow}>
                  <Typography variant="h4" color={COLORS.text} style={styles.question}>
                    {item.question}
                  </Typography>
                  {isOpen ? (
                    <ChevronUp size={20} color={COLORS.primary} />
                  ) : (
                    <ChevronDown size={20} color={COLORS.textLight} />
                  )}
                </View>
                {isOpen && (
                  <Typography variant="body" color={COLORS.textLight} style={styles.answer}>
                    {item.answer}
                  </Typography>
                )}
              </TouchableOpacity>
            );
          })}
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
  list: {
    gap: SPACING.m,
  },
  item: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.m,
    padding: SPACING.m,
    backgroundColor: COLORS.background,
  },
  itemOpen: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
  },
  questionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    marginBottom: 0,
    flex: 1,
    marginRight: 16,
    fontSize: 18,
  },
  answer: {
    marginTop: SPACING.m,
    lineHeight: 24,
  },
});
