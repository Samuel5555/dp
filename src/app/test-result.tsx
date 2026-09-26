import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function TestResultScreen() {
  const params = useLocalSearchParams();

  const score = Number(params.score || 0);
  const total = Number(params.total || 5);
  const percentage = Math.round((score / total) * 100);

  const passed = percentage >= 70;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View
          style={[
            styles.circle,
            {
              backgroundColor: passed
                ? "#EAF7F5"
                : "#FFF2F2",
            },
          ]}
        >
          <Text style={styles.circleText}>
            {passed ? "✓" : "!"}
          </Text>
        </View>

        <Text style={styles.title}>
          {passed
            ? "Assessment Passed"
            : "Assessment Not Passed"}
        </Text>

        <Text style={styles.subtitle}>
          Your assessment has been completed.
        </Text>

        <View style={styles.scoreCard}>
          <Text style={styles.scoreLabel}>
            Your score
          </Text>

          <Text style={styles.score}>
            {percentage}%
          </Text>

          <Text style={styles.scoreDetail}>
            {score} out of {total} questions correct
          </Text>
        </View>

        {passed ? (
          <>
            <Text style={styles.info}>
              Your assessment has been submitted for
              verification. Your doctor account can now
              proceed to the verification stage.
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                router.push("/verification-pending")
              }
            >
              <Text style={styles.buttonText}>
                Continue
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.info}>
              You did not meet the current assessment
              threshold. You can review your knowledge
              and try again.
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => router.replace("/medical-test")}
            >
              <Text style={styles.buttonText}>
                Try Again
              </Text>
            </TouchableOpacity>
          </>
        )}

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
    alignItems: "center",
  },

  circle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },

  circleText: {
    fontSize: 42,
    fontWeight: "800",
    color: "#087F73",
  },

  title: {
    fontSize: 27,
    fontWeight: "800",
    color: "#17202A",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 8,
    color: "#6B7280",
  },

  scoreCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  scoreLabel: {
    color: "#6B7280",
  },

  score: {
    fontSize: 50,
    fontWeight: "900",
    color: "#087F73",
    marginVertical: 5,
  },

  scoreDetail: {
    color: "#6B7280",
  },

  info: {
    textAlign: "center",
    color: "#52605F",
    lineHeight: 20,
    marginTop: 20,
  },

  button: {
    width: "100%",
    height: 55,
    backgroundColor: "#087F73",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
});