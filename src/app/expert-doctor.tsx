import { router } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function ExpertDoctor() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Doctors Portal</Text>

      <Text style={styles.title}>Expert Doctor</Text>

      <Text style={styles.subtitle}>
        Expert doctors are verified through a professional virtual interview.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>How verification works</Text>

        <Text style={styles.step}>1. Complete your professional profile</Text>
        <Text style={styles.step}>2. Submit your medical credentials</Text>
        <Text style={styles.step}>3. Choose an interview date</Text>
        <Text style={styles.step}>4. Attend your virtual interview</Text>
        <Text style={styles.step}>5. Receive your verification status</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/expert-registration")}
      >
        <Text style={styles.buttonText}>Start Registration</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>Go Back</Text>
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
  },
  logo: {
    color: "#087F73",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#17202A",
  },
  subtitle: {
    fontSize: 16,
    color: "#64748B",
    lineHeight: 24,
    marginTop: 10,
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
    marginBottom: 25,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 15,
  },
  step: {
    fontSize: 15,
    color: "#475569",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#087F73",
    padding: 17,
    borderRadius: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
  back: {
    textAlign: "center",
    marginTop: 20,
    color: "#087F73",
    fontWeight: "700",
  },
});