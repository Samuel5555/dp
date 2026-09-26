import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useAppStore } from "@/hooks/use-app-store";

export default function DoctorReview() {
  const { posts, upvotePost } = useAppStore();

  const pendingPosts = posts.filter(
    (post) => post.doctorUpvotes < 20
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Doctor Review</Text>

        <View style={{ width: 30 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          Health Information Review
        </Text>

        <Text style={styles.subtitle}>
          Help maintain the quality of Doctors Portal by reviewing
          health information submitted by other doctors.
        </Text>

        {pendingPosts.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>✓</Text>

            <Text style={styles.emptyTitle}>
              No posts awaiting review
            </Text>

            <Text style={styles.emptyText}>
              New doctor submissions will appear here.
            </Text>
          </View>
        ) : (
          pendingPosts.map((post) => (
            <View key={post.id} style={styles.card}>
              <View style={styles.category}>
                <Text style={styles.categoryText}>
                  {post.category.toUpperCase()}
                </Text>
              </View>

              <Text style={styles.postTitle}>
                {post.title}
              </Text>

              <Text style={styles.doctor}>
                By {post.doctorName}
              </Text>

              <Text style={styles.postContent}>
                {post.content}
              </Text>

              <View style={styles.progressSection}>
                <View style={styles.progressHeader}>
                  <Text style={styles.progressText}>
                    Doctor validation
                  </Text>

                  <Text style={styles.count}>
                    {post.doctorUpvotes}/20
                  </Text>
                </View>

                <View style={styles.progressBackground}>
                  <View
                    style={[
                      styles.progress,
                      {
                        width: `${Math.min(
                          (post.doctorUpvotes / 20) * 100,
                          100
                        )}%`,
                      },
                    ]}
                  />
                </View>
              </View>

              <TouchableOpacity
                style={styles.upvoteButton}
                onPress={() => upvotePost(post.id)}
              >
                <Text style={styles.upvoteText}>
                  ↑  Upvote Health Information
                </Text>
              </TouchableOpacity>

              {post.doctorUpvotes >= 20 && (
                <View style={styles.published}>
                  <Text style={styles.publishedText}>
                    ✓ Approved for Users
                  </Text>
                </View>
              )}
            </View>
          ))
        )}

        <View style={{ height: 50 }} />
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
    color: "#17202A",
  },

  headerTitle: {
    fontSize: 19,
    fontWeight: "900",
    color: "#17202A",
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 27,
    fontWeight: "900",
    color: "#17202A",
  },

  subtitle: {
    color: "#64748B",
    lineHeight: 21,
    marginTop: 7,
    marginBottom: 22,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
  },

  category: {
    alignSelf: "flex-start",
    backgroundColor: "#E8F7F5",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  categoryText: {
    color: "#087F73",
    fontSize: 10,
    fontWeight: "900",
  },

  postTitle: {
    fontSize: 19,
    fontWeight: "900",
    lineHeight: 25,
    marginTop: 13,
    color: "#17202A",
  },

  doctor: {
    color: "#087F73",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 6,
  },

  postContent: {
    color: "#475569",
    lineHeight: 21,
    marginTop: 13,
  },

  progressSection: {
    marginTop: 18,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
  },

  progressText: {
    color: "#64748B",
    fontWeight: "700",
    fontSize: 12,
  },

  count: {
    color: "#087F73",
    fontWeight: "900",
    fontSize: 12,
  },

  progressBackground: {
    height: 8,
    backgroundColor: "#E2E8F0",
    borderRadius: 10,
    overflow: "hidden",
  },

  progress: {
    height: "100%",
    backgroundColor: "#087F73",
    borderRadius: 10,
  },

  upvoteButton: {
    backgroundColor: "#087F73",
    borderRadius: 13,
    padding: 15,
    alignItems: "center",
    marginTop: 18,
  },

  upvoteText: {
    color: "#fff",
    fontWeight: "900",
  },

  published: {
    backgroundColor: "#ECFDF5",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    marginTop: 10,
  },

  publishedText: {
    color: "#047857",
    fontWeight: "900",
  },

  empty: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    marginTop: 10,
  },

  emptyIcon: {
    fontSize: 40,
    color: "#087F73",
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "900",
    marginTop: 10,
  },

  emptyText: {
    color: "#94A3B8",
    marginTop: 5,
    textAlign: "center",
  },
});