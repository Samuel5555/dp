import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const categories = [
  "All",
  "Cardiology",
  "Neurology",
  "Kidney",
  "Nutrition",
  "Mental Health",
  "Paediatrics",
];

const posts = [
  {
    id: "1",
    category: "NEUROLOGY",
    title: "5 Warning Signs of Stroke You Should Never Ignore",
    doctor: "Dr. Samuel Chukwudi",
    specialty: "Neurology",
    upvotes: 37,
    likes: 1200,
  },
  {
    id: "2",
    category: "KIDNEY",
    title: "Early Signs That Your Kidneys May Need Attention",
    doctor: "Dr. Michael Okafor",
    specialty: "Nephrology",
    upvotes: 52,
    likes: 840,
  },
  {
    id: "3",
    category: "NUTRITION",
    title: "Simple Foods That Can Support a Healthy Heart",
    doctor: "Dr. Ada Nwosu",
    specialty: "Nutrition",
    upvotes: 41,
    likes: 920,
  },
];

export default function UserHome() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.smallText}>WELCOME TO</Text>
          <Text style={styles.logo}>Doctors Portal</Text>
        </View>

        <TouchableOpacity
          style={styles.notification}
          onPress={() => router.push("/notifications")}
        >
          <Text style={styles.notificationText}>♧</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.greeting}>
          <Text style={styles.title}>Discover better health.</Text>
          <Text style={styles.subtitle}>
            Health information created and validated by doctors.
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.category,
                index === 0 && styles.activeCategory,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  index === 0 && styles.activeCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>For You</Text>
          <Text style={styles.sectionLink}>Explore</Text>
        </View>

        {posts.map((post) => (
          <TouchableOpacity
            key={post.id}
            style={styles.postCard}
            onPress={() => router.push("/post")}
          >
            <View style={styles.cardTop}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryBadgeText}>
                  {post.category}
                </Text>
              </View>

              <Text style={styles.verified}>✓ Verified</Text>
            </View>

            <Text style={styles.postTitle}>{post.title}</Text>

            <View style={styles.doctorRow}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {post.doctor
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.doctorName}>{post.doctor}</Text>
                <Text style={styles.specialty}>{post.specialty}</Text>
              </View>
            </View>

            <View style={styles.cardBottom}>
              <Text style={styles.stat}>✓ {post.upvotes} doctors</Text>
              <Text style={styles.stat}>♡ {post.likes}</Text>
              <Text style={styles.stat}>↗ Share</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navActive}>⌂</Text>
          <Text style={styles.navActiveText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/categories")}
        >
          <Text style={styles.navIcon}>◉</Text>
          <Text style={styles.navText}>Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/notifications")}
        >
          <Text style={styles.navIcon}>♧</Text>
          <Text style={styles.navText}>Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/user-profile")}
        >
          <Text style={styles.navIcon}>○</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  smallText: {
    color: "#94A3B8",
    fontSize: 10,
    fontWeight: "800",
  },
  logo: {
    color: "#087F73",
    fontSize: 21,
    fontWeight: "900",
    marginTop: 2,
  },
  notification: {
    width: 42,
    height: 42,
    borderRadius: 22,
    backgroundColor: "#E8F7F5",
    alignItems: "center",
    justifyContent: "center",
  },
  notificationText: {
    fontSize: 22,
    color: "#087F73",
  },
  greeting: {
    padding: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 29,
    fontWeight: "900",
    color: "#17202A",
  },
  subtitle: {
    color: "#64748B",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 6,
  },
  categories: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 8,
  },
  category: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  activeCategory: {
    backgroundColor: "#087F73",
  },
  categoryText: {
    color: "#64748B",
    fontWeight: "700",
    fontSize: 13,
  },
  activeCategoryText: {
    color: "#fff",
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#17202A",
  },
  sectionLink: {
    color: "#087F73",
    fontWeight: "800",
  },
  postCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 18,
    borderRadius: 20,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryBadge: {
    backgroundColor: "#E8F7F5",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 15,
  },
  categoryBadgeText: {
    color: "#087F73",
    fontSize: 10,
    fontWeight: "900",
  },
  verified: {
    color: "#087F73",
    fontSize: 11,
    fontWeight: "800",
  },
  postTitle: {
    fontSize: 19,
    lineHeight: 25,
    fontWeight: "900",
    color: "#17202A",
    marginTop: 14,
  },
  doctorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 17,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 22,
    backgroundColor: "#087F73",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 12,
  },
  doctorName: {
    color: "#17202A",
    fontWeight: "800",
    fontSize: 13,
  },
  specialty: {
    color: "#94A3B8",
    fontSize: 11,
    marginTop: 2,
  },
  cardBottom: {
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
    marginTop: 15,
    paddingTop: 13,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stat: {
    color: "#64748B",
    fontSize: 11,
    fontWeight: "700",
  },
  bottomNav: {
    height: 72,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    fontSize: 21,
    color: "#94A3B8",
  },
  navActive: {
    fontSize: 21,
    color: "#087F73",
  },
  navText: {
    fontSize: 10,
    color: "#94A3B8",
    marginTop: 3,
  },
  navActiveText: {
    fontSize: 10,
    color: "#087F73",
    fontWeight: "800",
    marginTop: 3,
  },
});