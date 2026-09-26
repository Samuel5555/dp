import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function UserProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>

        <TouchableOpacity>
          <Text style={styles.settings}>⚙</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>U</Text>
        </View>

        <Text style={styles.name}>Health Explorer</Text>

        <Text style={styles.email}>user@doctorsportal247.com</Text>
      </View>

      <View style={styles.stats}>
        <View>
          <Text style={styles.statNumber}>24</Text>
          <Text style={styles.statLabel}>Saved</Text>
        </View>

        <View>
          <Text style={styles.statNumber}>18</Text>
          <Text style={styles.statLabel}>Liked</Text>
        </View>

        <View>
          <Text style={styles.statNumber}>7</Text>
          <Text style={styles.statLabel}>Comments</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionIcon}>♡</Text>
        <Text style={styles.optionText}>Liked Posts</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionIcon}>▣</Text>
        <Text style={styles.optionText}>Saved Health Information</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => router.push("/categories")}
      >
        <Text style={styles.optionIcon}>◉</Text>
        <Text style={styles.optionText}>Health Interests</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
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
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "900",
  },
  settings: {
    fontSize: 22,
  },
  profile: {
    alignItems: "center",
    paddingVertical: 30,
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: "#087F73",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
  },
  name: {
    fontSize: 21,
    fontWeight: "900",
    marginTop: 12,
  },
  email: {
    color: "#94A3B8",
    marginTop: 4,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 20,
    marginBottom: 15,
  },
  statNumber: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "900",
    color: "#087F73",
  },
  statLabel: {
    color: "#94A3B8",
    fontSize: 11,
    marginTop: 3,
  },
  option: {
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: 17,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  optionIcon: {
    fontSize: 20,
    color: "#087F73",
    width: 35,
  },
  optionText: {
    flex: 1,
    fontWeight: "700",
    color: "#334155",
  },
  arrow: {
    fontSize: 25,
    color: "#94A3B8",
  },
  logout: {
    margin: 20,
    marginTop: 15,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#FCA5A5",
    alignItems: "center",
  },
  logoutText: {
    color: "#DC2626",
    fontWeight: "800",
  },
});