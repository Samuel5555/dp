import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const categories = [
  ["❤️", "Cardiology", "Heart & circulation"],
  ["🧠", "Neurology", "Brain & nervous system"],
  ["🫘", "Nephrology", "Kidney health"],
  ["🥗", "Nutrition", "Food & wellness"],
  ["👶", "Paediatrics", "Child health"],
  ["🦴", "Orthopaedics", "Bones & joints"],
  ["🫁", "Respiratory", "Lungs & breathing"],
  ["🩺", "General Health", "Everyday health"],
];

export default function Categories() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Health Categories</Text>

        <View style={{ width: 30 }} />
      </View>

      <ScrollView contentContainerStyle={styles.grid}>
        {categories.map(([icon, name, description]) => (
          <TouchableOpacity
            key={name}
            style={styles.card}
            onPress={() => router.push("/user-home")}
          >
            <Text style={styles.icon}>{icon}</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
  },
  header: {
    backgroundColor: "#fff",
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  back: {
    fontSize: 36,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "900",
  },
  grid: {
    padding: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
    marginBottom: 15,
    minHeight: 150,
  },
  icon: {
    fontSize: 35,
    marginBottom: 12,
  },
  name: {
    fontSize: 17,
    fontWeight: "900",
    color: "#17202A",
  },
  description: {
    color: "#94A3B8",
    fontSize: 12,
    marginTop: 5,
    lineHeight: 17,
  },
});

 