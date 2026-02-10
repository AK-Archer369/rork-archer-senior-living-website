import React from "react";
import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants/theme";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";

export function Footer() {
  const router = useRouter();

  const navigateTo = (path: string) => {
    // @ts-ignore
    router.push(path);
  };

  return (
    <View style={styles.footer}>
      <Container>
        <View style={styles.content}>
          <View style={styles.brandColumn}>
            <View style={{ marginBottom: 8 }}>
              <Typography variant="h3" color={COLORS.white} style={{ marginBottom: 0 }}>
                ARCHER
              </Typography>
              <Typography variant="caption" color={COLORS.white} style={{ letterSpacing: 2, opacity: 0.7 }}>
                SENIOR LIVING
              </Typography>
            </View>
            <View style={styles.taglineContainer}>
              <Typography variant="bodySmall" color={COLORS.white} style={{ opacity: 0.8, lineHeight: 22 }}>
                Small Homes. Real Care. Peace of Mind.
              </Typography>
            </View>
          </View>

          <View style={styles.column}>
            <Typography variant="h4" color={COLORS.white}>
              Quick Links
            </Typography>
            <TouchableOpacity onPress={() => navigateTo("/")}>
              <Typography variant="bodySmall" color={COLORS.white} style={styles.link}>
                Home
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("/about")}>
              <Typography variant="bodySmall" color={COLORS.white} style={styles.link}>
                About Us
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("/homes")}>
              <Typography variant="bodySmall" color={COLORS.white} style={styles.link}>
                Our Homes
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("/contact")}>
              <Typography variant="bodySmall" color={COLORS.white} style={styles.link}>
                Contact
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("/careers")}>
              <Typography variant="bodySmall" color={COLORS.white} style={styles.link}>
                Careers
              </Typography>
            </TouchableOpacity>
          </View>

          <View style={styles.column}>
            <Typography variant="h4" color={COLORS.white}>
              Locations
            </Typography>
            <TouchableOpacity onPress={() => navigateTo("/homes")}>
              <Typography variant="bodySmall" color={COLORS.white} style={styles.link}>
                Maple Manor of Pinckney
              </Typography>
            </TouchableOpacity>
            <Typography variant="caption" color={COLORS.white} style={{ opacity: 0.6, marginBottom: 8 }}>
              7119 Pinckney Rd, Pinckney, MI
            </Typography>
            
            <TouchableOpacity onPress={() => navigateTo("/homes")} style={{ marginTop: 8 }}>
              <Typography variant="bodySmall" color={COLORS.white} style={styles.link}>
                Maple Manor of Hamburg
              </Typography>
            </TouchableOpacity>
            <Typography variant="caption" color={COLORS.white} style={{ opacity: 0.6 }}>
              9090 Chilson Rd, Brighton, MI
            </Typography>
          </View>

          <View style={styles.column}>
            <Typography variant="h4" color={COLORS.white}>
              Contact
            </Typography>
            <TouchableOpacity onPress={() => Linking.openURL('tel:248-854-4944')}>
              <Typography variant="bodySmall" color={COLORS.white} style={styles.link}>
                Call Us Today
              </Typography>
              <Typography variant="caption" color={COLORS.white} style={{ opacity: 0.6, marginBottom: 8 }}>
                248-854-4944
              </Typography>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('mailto:archerseniornavigation@gmail.com')}>
              <Typography variant="caption" color={COLORS.white} style={{ opacity: 0.6 }}>
                archerseniornavigation@gmail.com
              </Typography>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.copyright}>
          <Typography variant="caption" color={COLORS.white} align="center" style={{ opacity: 0.5 }}>
            © {new Date().getFullYear()} Archer Senior Living. All rights reserved.
          </Typography>
          <Typography variant="caption" color={COLORS.white} align="center" style={{ opacity: 0.5, marginTop: 4 }}>
            This website provides general information and is not medical advice. For specific care needs, please contact us.
          </Typography>
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#222",
    paddingTop: 64,
    paddingBottom: 32,
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  column: {
    minWidth: 180,
    marginBottom: 32,
    flex: 1,
  },
  brandColumn: {
    minWidth: 220,
    marginBottom: 32,
    marginRight: 60,
    maxWidth: 300,
  },
  taglineContainer: {
    marginTop: 20,
    paddingTop: 16,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.15)",
  },
  link: {
    marginBottom: 8,
    opacity: 0.8,
  },
  copyright: {
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.1)",
    paddingTop: 24,
  },
});
