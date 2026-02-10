import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
  Modal,
  ScrollView,
  Linking,
} from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Menu, X, Phone } from "lucide-react-native";
import { COLORS, SPACING } from "@/constants/theme";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Homes", path: "/homes" },
  { label: "Services", path: "/services" },
  { label: "Reviews", path: "/reviews" },
  { label: "Gallery", path: "/gallery" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const isMobile = width < 768;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (path: string) => {
    setIsMenuOpen(false);
    // @ts-ignore
    router.push(path);
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Utility Bar */}
      <View style={[styles.topBar, { paddingTop: insets.top }]}>
        <Container>
          <View style={styles.topBarContent}>
            <View style={{ flex: 1 }} />
            <View style={styles.topLinks}>
              <TouchableOpacity onPress={() => navigateTo("/careers")}>
                <Typography variant="caption" color={COLORS.white} style={styles.topLink}>
                  Careers
                </Typography>
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity onPress={() => navigateTo("/contact")}>
                <Typography variant="caption" color={COLORS.white} style={styles.topLink}>
                  Contact
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </View>

      {/* Main Header */}
      <View style={styles.header}>
        <Container>
          <View style={styles.headerContent}>
            {/* Logo */}
            <TouchableOpacity onPress={() => navigateTo("/")}>
              <View>
                <Typography variant="h4" color={COLORS.primary} weight="bold" style={{ marginBottom: 0 }}>
                  ARCHER
                </Typography>
                <Typography variant="caption" color={COLORS.textLight} style={{ letterSpacing: 2 }}>
                  SENIOR LIVING
                </Typography>
              </View>
            </TouchableOpacity>

            {/* Desktop Nav */}
            {!isMobile && (
              <View style={styles.desktopNav}>
                {NAV_ITEMS.map((item) => (
                  <TouchableOpacity
                    key={item.path}
                    onPress={() => navigateTo(item.path)}
                    style={[
                      styles.navItem,
                      isActive(item.path) && styles.navItemActive,
                    ]}
                  >
                    <Typography
                      variant="bodySmall"
                      color={isActive(item.path) ? COLORS.primary : COLORS.text}
                      weight={isActive(item.path) ? "bold" : "medium"}
                    >
                      {item.label}
                    </Typography>
                  </TouchableOpacity>
                ))}
                <Button
                  title="Schedule a Tour"
                  onPress={() => navigateTo("/contact")}
                  size="small"
                  style={{ marginLeft: 16 }}
                />
              </View>
            )}

            {/* Mobile Menu Toggle */}
            {isMobile && (
              <TouchableOpacity onPress={() => setIsMenuOpen(true)}>
                <Menu color={COLORS.primary} size={28} />
              </TouchableOpacity>
            )}
          </View>
        </Container>
      </View>

      {/* Mobile Menu Modal */}
      <Modal visible={isMenuOpen} animationType="slide" transparent={true}>
        <View style={styles.mobileMenuContainer}>
          <View style={[styles.mobileMenuHeader, { paddingTop: insets.top + 10 }]}>
            <Typography variant="h4" color={COLORS.primary}>
              Menu
            </Typography>
            <TouchableOpacity onPress={() => setIsMenuOpen(false)}>
              <X color={COLORS.text} size={28} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.mobileMenuContent}>
            {NAV_ITEMS.map((item) => (
              <TouchableOpacity
                key={item.path}
                onPress={() => navigateTo(item.path)}
                style={styles.mobileMenuItem}
              >
                <Typography
                  variant="h4"
                  color={isActive(item.path) ? COLORS.primary : COLORS.text}
                >
                  {item.label}
                </Typography>
              </TouchableOpacity>
            ))}
            <View style={styles.mobileMenuButtons}>
              <Button
                title="Schedule a Tour"
                onPress={() => navigateTo("/contact")}
                style={{ marginBottom: 16, width: "100%" }}
              />
              <Button
                title="Call Now"
                onPress={() => Linking.openURL('tel:248-854-4944')}
                variant="outline"
                icon={<Phone size={18} color={COLORS.primary} />}
                style={{ width: "100%" }}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: COLORS.primaryDark,
    paddingBottom: 8,
    paddingTop: Platform.select({ web: 8, default: 0 }),
  },
  topBarContent: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  topLinks: {
    flexDirection: "row",
    alignItems: "center",
  },
  topLink: {
    opacity: 0.9,
  },
  divider: {
    width: 1,
    height: 12,
    backgroundColor: "rgba(255,255,255,0.4)",
    marginHorizontal: 12,
  },
  header: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingVertical: 16,
    zIndex: 10,
    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  desktopNav: {
    flexDirection: "row",
    alignItems: "center",
  },
  navItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  navItemActive: {
    // borderBottomWidth: 2,
    // borderBottomColor: COLORS.primary,
  },
  mobileMenuContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mobileMenuHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SPACING.m,
    paddingBottom: SPACING.m,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  mobileMenuContent: {
    padding: SPACING.m,
  },
  mobileMenuItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  mobileMenuButtons: {
    marginTop: 32,
    paddingBottom: 40,
  },
});
