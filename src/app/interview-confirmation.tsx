import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function InterviewConfirmation() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Text style={styles.check}>✓</Text>
      </View>

      <Text style={styles.title}>Interview Scheduled</Text>

      <Text style={styles.subtitle}>
        Your expert doctor verification interview has been scheduled.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Interview</Text>
        <Text style={styles.value}>Professional Verification Interview</Text>

        <Text style={styles.label}>Format</Text>
        <Text style={styles.value}>Virtual Interview</Text>

        <Text style={styles.label}>Status</Text>
        <Text style={styles.status}>Scheduled</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/verification-pending")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: "#087F73",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  check: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "800",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#17202A",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "#64748B",
    lineHeight: 23,
    marginTop: 10,
    marginBottom: 25,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
  },
  label: {
    color: "#94A3B8",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 8,
  },
  value: {
    fontSize: 15,
    color: "#334155",
    fontWeight: "700",
    marginTop: 4,
  },
  status: {
    color: "#087F73",
    fontWeight: "800",
    marginTop: 4,
  },
  button: {
    width: "100%",
    backgroundColor: "#087F73",
    padding: 17,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },
});