import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ExpertRegistration() {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [license, setLicense] = useState("");
  const [experience, setExperience] = useState("");
  const [institution, setInstitution] = useState("");

  const continueRegistration = () => {
    if (!name || !specialty || !license || !experience || !institution) {
      alert("Please complete all fields.");
      return;
    }

    router.push("/schedule-interview");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>Doctors Portal</Text>

        <Text style={styles.title}>Professional Registration</Text>

        <Text style={styles.subtitle}>
          Enter your professional information for expert doctor verification.
        </Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Dr. John Doe"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Medical Specialty</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Cardiology"
          value={specialty}
          onChangeText={setSpecialty}
        />

        <Text style={styles.label}>Medical Registration Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Registration number"
          value={license}
          onChangeText={setLicense}
        />

        <Text style={styles.label}>Years of Experience</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 10"
          keyboardType="numeric"
          value={experience}
          onChangeText={setExperience}
        />

        <Text style={styles.label}>Hospital / Institution</Text>
        <TextInput
          style={styles.input}
          placeholder="Hospital or institution"
          value={institution}
          onChangeText={setInstitution}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={continueRegistration}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
  },
  content: {
    padding: 24,
    paddingBottom: 50,
  },
  logo: {
    color: "#087F73",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#17202A",
  },
  subtitle: {
    color: "#64748B",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 8,
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 7,
    color: "#334155",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    fontSize: 15,
  },
  button: {
    backgroundColor: "#087F73",
    padding: 17,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },
});