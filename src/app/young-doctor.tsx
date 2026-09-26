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

export default function YoungDoctorScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>

        <View style={styles.iconCircle}>
          <Text style={styles.icon}>🩺</Text>
        </View>

        <Text style={styles.title}>
          Young Doctor Verification
        </Text>

        <Text style={styles.subtitle}>
          Demonstrate your medical knowledge and become
          a verified doctor on Doctors Portal.
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            How verification works
          </Text>

          <View style={styles.step}>
            <View style={styles.number}>
              <Text style={styles.numberText}>1</Text>
            </View>

            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>
                Create your doctor profile
              </Text>

              <Text style={styles.stepText}>
                Provide your professional and medical
                information.
              </Text>
            </View>
          </View>

          <View style={styles.step}>
            <View style={styles.number}>
              <Text style={styles.numberText}>2</Text>
            </View>

            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>
                Take the medical assessment
              </Text>

              <Text style={styles.stepText}>
                Answer questions designed to assess your
                medical knowledge.
              </Text>
            </View>
          </View>

          <View style={styles.step}>
            <View style={styles.number}>
              <Text style={styles.numberText}>3</Text>
            </View>

            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>
                Verification
              </Text>

              <Text style={styles.stepText}>
                Successful candidates receive their
                verified doctor status.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.requirementCard}>
          <Text style={styles.requirementTitle}>
            You will need
          </Text>

          <Text style={styles.requirement}>
            ✓ Your full name
          </Text>

          <Text style={styles.requirement}>
            ✓ Medical school information
          </Text>

          <Text style={styles.requirement}>
            ✓ Medical qualification
          </Text>

          <Text style={styles.requirement}>
            ✓ Professional information
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/young-doctor-test")}
        >
          <Text style={styles.buttonText}>
            Continue to Registration
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
    padding: 22,
    paddingBottom: 50,
  },

  backButton: {
    marginBottom: 25,
  },

  backText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#087F73",
  },

  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#EAF7F5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  icon: {
    fontSize: 32,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#17202A",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: "#6B7280",
    marginBottom: 28,
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#17202A",
    marginBottom: 20,
  },

  step: {
    flexDirection: "row",
    marginBottom: 20,
  },

  number: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#087F73",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  numberText: {
    color: "#FFFFFF",
    fontWeight: "800",
  },

  stepContent: {
    flex: 1,
  },

  stepTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#17202A",
    marginBottom: 4,
  },

  stepText: {
    fontSize: 12,
    lineHeight: 18,
    color: "#6B7280",
  },

  requirementCard: {
    backgroundColor: "#EEF7F6",
    borderRadius: 18,
    padding: 20,
    marginTop: 15,
    marginBottom: 20,
  },

  requirementTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#087F73",
    marginBottom: 12,
  },

  requirement: {
    fontSize: 13,
    color: "#52605F",
    marginBottom: 8,
  },

  button: {
    height: 55,
    borderRadius: 14,
    backgroundColor: "#087F73",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});