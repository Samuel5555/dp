import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const slots = [
  "Monday • 10:00 AM",
  "Monday • 2:00 PM",
  "Tuesday • 10:00 AM",
  "Wednesday • 3:00 PM",
  "Thursday • 11:00 AM",
];

export default function ScheduleInterview() {
  const [selected, setSelected] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Doctors Portal</Text>

      <Text style={styles.title}>Schedule Interview</Text>

      <Text style={styles.subtitle}>
        Select a convenient time for your professional verification interview.
      </Text>

      {slots.map((slot) => (
        <TouchableOpacity
          key={slot}
          style={[
            styles.slot,
            selected === slot && styles.selectedSlot,
          ]}
          onPress={() => setSelected(slot)}
        >
          <Text
            style={[
              styles.slotText,
              selected === slot && styles.selectedText,
            ]}
          >
            {slot}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[
          styles.button,
          !selected && styles.disabledButton,
        ]}
        disabled={!selected}
        onPress={() => router.push("/interview-confirmation")}
      >
        <Text style={styles.buttonText}>Confirm Interview</Text>
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
    fontSize: 30,
    fontWeight: "800",
    color: "#17202A",
  },
  subtitle: {
    color: "#64748B",
    lineHeight: 23,
    marginTop: 8,
    marginBottom: 25,
  },
  slot: {
    backgroundColor: "#fff",
    padding: 17,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  selectedSlot: {
    borderColor: "#087F73",
    backgroundColor: "#E8F7F5",
  },
  slotText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#334155",
  },
  selectedText: {
    color: "#087F73",
  },
  button: {
    backgroundColor: "#087F73",
    padding: 17,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 20,
  },
  disabledButton: {
    opacity: 0.4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },
});