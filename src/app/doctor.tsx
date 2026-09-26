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

export default function DoctorScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <TouchableOpacity
          style={styles.back}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.plus}>+</Text>
          </View>

          <Text style={styles.title}>
            Doctor Portal
          </Text>

          <Text style={styles.subtitle}>
            Verify your medical credentials and join a
            community of doctors sharing trusted health
            information.
          </Text>
        </View>

        <Text style={styles.heading}>
          Choose your pathway
        </Text>

        {/* YOUNG DOCTOR */}

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/young-doctor")}
        >
          <View style={styles.iconBox}>
            <Text style={styles.icon}>🩺</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Young Doctor
            </Text>

            <Text style={styles.cardText}>
              Verify your medical knowledge through
              a medical assessment.
            </Text>

            <Text style={styles.action}>
              Begin verification →
            </Text>
          </View>
        </TouchableOpacity>

        {/* EXPERT DOCTOR */}

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/expert-doctor")}
        >
          <View style={styles.iconBox}>
            <Text style={styles.icon}>👨‍⚕️</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Expert Doctor
            </Text>

            <Text style={styles.cardText}>
              Schedule a virtual professional interview
              to verify your expertise.
            </Text>

            <Text style={styles.action}>
              Schedule interview →
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.note}>
          <Text style={styles.noteTitle}>
            Why verification?
          </Text>

          <Text style={styles.noteText}>
            Doctors Portal is designed to provide health
            information created and validated by medical
            professionals.
          </Text>
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
    padding: 22,
    paddingBottom: 50,
  },

  back: {
    marginBottom: 25,
  },

  backText: {
    fontSize: 17,
    color: "#087F73",
    fontWeight: "600",
  },

  header: {
    alignItems: "center",
    marginBottom: 35,
  },

  logo: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: "#087F73",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  plus: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "700",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#17202A",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 21,
    textAlign: "center",
  },

  heading: {
    fontSize: 19,
    fontWeight: "800",
    color: "#17202A",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    flexDirection: "row",
  },

  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 15,
    backgroundColor: "#EAF7F5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  icon: {
    fontSize: 26,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#17202A",
    marginBottom: 6,
  },

  cardText: {
    fontSize: 13,
    lineHeight: 19,
    color: "#6B7280",
  },

  action: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "700",
    color: "#087F73",
  },

  note: {
    marginTop: 15,
    padding: 18,
    borderRadius: 16,
    backgroundColor: "#EEF7F6",
  },

  noteTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#087F73",
    marginBottom: 6,
  },

  noteText: {
    fontSize: 12,
    lineHeight: 18,
    color: "#52605F",
  },
});