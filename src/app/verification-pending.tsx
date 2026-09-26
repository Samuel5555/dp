import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";

export default function VerificationPending() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.icon}>
          <Text style={styles.iconText}>✓</Text>
        </View>

        <Text style={styles.title}>
          Verification Submitted
        </Text>

        <Text style={styles.subtitle}>
          Your doctor verification information has been
          submitted successfully.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Verification status
          </Text>

          <View style={styles.status}>
            <View style={styles.dot} />

            <Text style={styles.statusText}>
              Under Review
            </Text>
          </View>

          <Text style={styles.cardText}>
            Your account will become a verified doctor
            account after the verification process is
            completed.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/doctor-dashboard")}
        >
          <Text style={styles.buttonText}>
            Preview Doctor Portal
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
  },

  content: {
    flex: 1,
    padding: 22,
    justifyContent: "center",
  },

  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#EAF7F5",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 25,
  },

  iconText: {
    fontSize: 40,
    fontWeight: "800",
    color: "#087F73",
  },

  title: {
    textAlign: "center",
    fontSize: 27,
    fontWeight: "800",
    color: "#17202A",
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    lineHeight: 21,
    marginTop: 10,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#17202A",
  },

  status: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#E09F3E",
    marginRight: 8,
  },

  statusText: {
    color: "#8A641F",
    fontWeight: "700",
  },

  cardText: {
    color: "#6B7280",
    lineHeight: 19,
    fontSize: 13,
    marginTop: 12,
  },

  button: {
    height: 55,
    backgroundColor: "#087F73",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
});