import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { router } from "expo-router";

export default function YoungDoctorTestScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [medicalSchool, setMedicalSchool] = useState("");
  const [qualification, setQualification] = useState("");
  const [graduationYear, setGraduationYear] = useState("");

  const continueToTest = () => {
    if (
      !fullName ||
      !email ||
      !medicalSchool ||
      !qualification ||
      !graduationYear
    ) {
      Alert.alert(
        "Incomplete information",
        "Please complete all the fields before continuing."
      );
      return;
    }

    router.push("/medical-test");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Doctor Registration
        </Text>

        <Text style={styles.subtitle}>
          Tell us a little about yourself before taking
          the Doctors Portal medical assessment.
        </Text>

        {/* PROGRESS */}

        <View style={styles.progressContainer}>
          <View style={styles.progressActive} />
          <View style={styles.progressInactive} />
          <View style={styles.progressInactive} />
        </View>

        <Text style={styles.progressText}>
          Step 1 of 3 — Professional Information
        </Text>

        {/* FORM */}

        <View style={styles.form}>

          <Text style={styles.label}>
            Full name
          </Text>

          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter your full name"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />

          <Text style={styles.label}>
            Email address
          </Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <Text style={styles.label}>
            Medical school
          </Text>

          <TextInput
            value={medicalSchool}
            onChangeText={setMedicalSchool}
            placeholder="Name of medical school"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />

          <Text style={styles.label}>
            Medical qualification
          </Text>

          <TextInput
            value={qualification}
            onChangeText={setQualification}
            placeholder="e.g. MBBS"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />

          <Text style={styles.label}>
            Year of graduation
          </Text>

          <TextInput
            value={graduationYear}
            onChangeText={setGraduationYear}
            placeholder="e.g. 2026"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            style={styles.input}
          />

        </View>

        {/* INFORMATION */}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            About the medical assessment
          </Text>

          <Text style={styles.infoText}>
            The assessment is designed to verify medical
            knowledge before a doctor can publish health
            information on Doctors Portal.
          </Text>

          <Text style={styles.infoText}>
            Your assessment result will be associated
            with your doctor verification record.
          </Text>
        </View>

        {/* BUTTON */}

        <TouchableOpacity
          style={styles.button}
          onPress={continueToTest}
        >
          <Text style={styles.buttonText}>
            Continue to Medical Test
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

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#17202A",
    marginBottom: 9,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: "#6B7280",
    marginBottom: 25,
  },

  progressContainer: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 8,
  },

  progressActive: {
    flex: 1,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#087F73",
  },

  progressInactive: {
    flex: 1,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#DDE5E4",
  },

  progressText: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 25,
  },

  form: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  label: {
    fontSize: 13,
    fontWeight: "700",
    color: "#374151",
    marginBottom: 7,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 14,
    color: "#17202A",
    marginBottom: 17,
    backgroundColor: "#FAFAFA",
  },

  infoCard: {
    marginTop: 16,
    padding: 18,
    borderRadius: 16,
    backgroundColor: "#EEF7F6",
  },

  infoTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#087F73",
    marginBottom: 8,
  },

  infoText: {
    fontSize: 12,
    lineHeight: 18,
    color: "#52605F",
    marginBottom: 7,
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
    fontSize: 16,
    fontWeight: "700",
  },
});