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

export default function Notifications() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹ Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Notifications
        </Text>

        <View style={styles.notification}>
          <Text style={styles.icon}>↑</Text>

          <View style={styles.body}>
            <Text style={styles.text}>
              Your post received a new doctor upvote.
            </Text>

            <Text style={styles.time}>
              5 minutes ago
            </Text>
          </View>
        </View>

        <View style={styles.notification}>
          <Text style={styles.icon}>❤️</Text>

          <View style={styles.body}>
            <Text style={styles.text}>
              Someone liked your health information.
            </Text>

            <Text style={styles.time}>
              24 minutes ago
            </Text>
          </View>
        </View>

        <View style={styles.notification}>
          <Text style={styles.icon}>💬</Text>

          <View style={styles.body}>
            <Text style={styles.text}>
              Someone commented on your post.
            </Text>

            <Text style={styles.time}>
              1 hour ago
            </Text>
          </View>
        </View>

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
  },

  back: {
    color: "#087F73",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#17202A",
    marginBottom: 20,
  },

  notification: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 17,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 10,
  },

  icon: {
    fontSize: 22,
    marginRight: 13,
  },

  body: {
    flex: 1,
  },

  text: {
    color: "#17202A",
    fontWeight: "600",
    lineHeight: 20,
  },

  time: {
    color: "#9CA3AF",
    fontSize: 11,
    marginTop: 4,
  },
});