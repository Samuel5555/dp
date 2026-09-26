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

export default function DoctorDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>
              Good evening, Doctor
            </Text>

            <Text style={styles.headerTitle}>
              Doctors Portal
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/notifications")}
            style={styles.notification}
          >
            <Text>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* STATS */}

        <View style={styles.stats}>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>1.2K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>326</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>4.8K</Text>
            <Text style={styles.statLabel}>Profile Views</Text>
          </View>

        </View>

        {/* CREATE */}

        <TouchableOpacity
          style={styles.createButton}
          onPress={() => router.push("/create-content")}
        >
          <Text style={styles.createIcon}>＋</Text>

          <View>
            <Text style={styles.createTitle}>
              Create Health Information
            </Text>

            <Text style={styles.createText}>
              Share trusted medical knowledge
            </Text>
          </View>
        </TouchableOpacity>

        {/* SECTION */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Doctor Feed
          </Text>

          <Text style={styles.filter}>
            Latest
          </Text>
        </View>

        {/* POST 1 */}

        <TouchableOpacity
          style={styles.post}
          onPress={() => router.push("/post")}
        >
          <View style={styles.category}>
            <Text style={styles.categoryText}>
              NEUROLOGY
            </Text>
          </View>

          <Text style={styles.postTitle}>
            5 Warning Signs of Stroke You Should Never Ignore
          </Text>

          <Text style={styles.postText}>
            Recognising the early signs of stroke can help
            people seek emergency medical attention quickly.
          </Text>

          <View style={styles.postStats}>
            <Text>↑ 37 Doctor Upvotes</Text>
            <Text>❤️ 1.2K</Text>
            <Text>💬 86</Text>
          </View>
        </TouchableOpacity>

        {/* POST 2 */}

        <TouchableOpacity
          style={styles.post}
          onPress={() => router.push("/post")}
        >
          <View style={styles.category}>
            <Text style={styles.categoryText}>
              NEPHROLOGY
            </Text>
          </View>

          <Text style={styles.postTitle}>
            Understanding Your Kidney Health
          </Text>

          <Text style={styles.postText}>
            Simple habits that can support kidney health
            and when medical evaluation may be needed.
          </Text>

          <View style={styles.postStats}>
            <Text>↑ 24 Doctor Upvotes</Text>
            <Text>❤️ 734</Text>
            <Text>💬 42</Text>
          </View>
        </TouchableOpacity>

        {/* PROFILE */}

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => router.push("/doctor-profile")}
        >
          <Text style={styles.profileButtonText}>
            View My Profile
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

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  greeting: {
    color: "#6B7280",
    fontSize: 13,
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: "900",
    color: "#17202A",
    marginTop: 3,
  },

  notification: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  stats: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 15,
  },

  stat: {
    flex: 1,
    alignItems: "center",
  },

  statNumber: {
    fontSize: 20,
    fontWeight: "900",
    color: "#087F73",
  },

  statLabel: {
    color: "#6B7280",
    fontSize: 11,
    marginTop: 3,
  },

  createButton: {
    backgroundColor: "#087F73",
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  createIcon: {
    color: "#FFFFFF",
    fontSize: 30,
    marginRight: 14,
  },

  createTitle: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 15,
  },

  createText: {
    color: "#D8F3F0",
    fontSize: 12,
    marginTop: 3,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#17202A",
  },

  filter: {
    color: "#087F73",
    fontWeight: "700",
  },

  post: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  category: {
    alignSelf: "flex-start",
    backgroundColor: "#EAF7F5",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 7,
    marginBottom: 10,
  },

  categoryText: {
    color: "#087F73",
    fontSize: 10,
    fontWeight: "900",
  },

  postTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#17202A",
    lineHeight: 23,
  },

  postText: {
    color: "#6B7280",
    fontSize: 13,
    lineHeight: 19,
    marginTop: 7,
  },

  postStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },

  profileButton: {
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#087F73",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  profileButtonText: {
    color: "#087F73",
    fontWeight: "800",
  },
});