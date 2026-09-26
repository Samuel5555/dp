import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

export default function DoctorProfile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.top}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.back}>‹ Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/notifications")}
          >
            <Text style={styles.bell}>🔔</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileHeader}>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>DR</Text>
          </View>

          <Text style={styles.name}>
            Dr. Samuel Chukwudi
          </Text>

          <Text style={styles.specialty}>
            Verified Young Doctor
          </Text>

          <View style={styles.verified}>
            <Text style={styles.verifiedText}>
              ✓ Verified Doctor
            </Text>
          </View>

        </View>

        <View style={styles.stats}>

          <View style={styles.stat}>
            <Text style={styles.number}>1,245</Text>
            <Text style={styles.label}>Followers</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.number}>326</Text>
            <Text style={styles.label}>Following</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.number}>4,821</Text>
            <Text style={styles.label}>Profile Views</Text>
          </View>

        </View>

        <Text style={styles.heading}>
          Badges
        </Text>

        <View style={styles.badges}>

          <View style={styles.badge}>
            <Text style={styles.badgeIcon}>✓</Text>
            <Text style={styles.badgeText}>Verified</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeIcon}>🏅</Text>
            <Text style={styles.badgeText}>Top Contributor</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeIcon}>⭐</Text>
            <Text style={styles.badgeText}>100 Upvotes</Text>
          </View>

        </View>

        <View style={styles.postHeader}>
          <Text style={styles.heading}>
            Health Information
          </Text>

          <Text style={styles.count}>
            24 posts
          </Text>
        </View>

        <TouchableOpacity
          style={styles.post}
          onPress={() => router.push("/post")}
        >
          <Text style={styles.category}>
            NEUROLOGY
          </Text>

          <Text style={styles.postTitle}>
            5 Warning Signs of Stroke You Should Never Ignore
          </Text>

          <Text style={styles.postStats}>
            ↑ 37 Doctor Upvotes · ❤️ 1.2K · 💬 86
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
  },

  content: {
    padding: 20,
    paddingBottom: 50,
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  back: {
    color: "#087F73",
    fontSize: 17,
    fontWeight: "600",
  },

  bell: {
    fontSize: 20,
  },

  profileHeader: {
    alignItems: "center",
    marginTop: 25,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#087F73",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "900",
  },

  name: {
    fontSize: 23,
    fontWeight: "900",
    color: "#17202A",
    marginTop: 12,
  },

  specialty: {
    color: "#6B7280",
    marginTop: 4,
  },

  verified: {
    backgroundColor: "#EAF7F5",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 10,
  },

  verifiedText: {
    color: "#087F73",
    fontSize: 12,
    fontWeight: "800",
  },

  stats: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  stat: {
    flex: 1,
    alignItems: "center",
  },

  number: {
    fontSize: 18,
    fontWeight: "900",
    color: "#17202A",
  },

  label: {
    color: "#6B7280",
    fontSize: 10,
    marginTop: 4,
  },

  heading: {
    fontSize: 18,
    fontWeight: "800",
    color: "#17202A",
    marginTop: 25,
    marginBottom: 12,
  },

  badges: {
    flexDirection: "row",
    gap: 8,
  },

  badge: {
    flex: 1,
    minHeight: 85,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  badgeIcon: {
    fontSize: 23,
  },

  badgeText: {
    textAlign: "center",
    color: "#52605F",
    fontSize: 10,
    fontWeight: "700",
    marginTop: 5,
  },

  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  count: {
    color: "#6B7280",
    fontSize: 12,
  },

  post: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  category: {
    color: "#087F73",
    fontSize: 11,
    fontWeight: "900",
    marginBottom: 8,
  },

  postTitle: {
    color: "#17202A",
    fontSize: 17,
    lineHeight: 23,
    fontWeight: "800",
  },

  postStats: {
    color: "#6B7280",
    fontSize: 12,
    marginTop: 12,
  },
});