import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Post() {
  const [liked, setLiked] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([
    {
      name: "Dr. Michael",
      text: "This is very useful information.",
    },
    {
      name: "Sarah",
      text: "Thank you for explaining this so clearly.",
    },
  ]);

  const doctorUpvotes = upvoted ? 38 : 37;
  const likes = liked ? 1201 : 1200;

  const addComment = () => {
    if (!comment.trim()) return;

    setComments([
      ...comments,
      {
        name: "You",
        text: comment.trim(),
      },
    ]);

    setComment("");
  };

  const sharePost = async () => {
    try {
      await Share.share({
        message:
          "5 Warning Signs of Stroke You Should Never Ignore — Doctors Portal",
      });
    } catch {
      Alert.alert("Share", "Unable to share this post.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Health Information</Text>

        <TouchableOpacity onPress={sharePost}>
          <Text style={styles.shareIcon}>↗</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.category}>
        <Text style={styles.categoryText}>NEUROLOGY</Text>
      </View>

      <Text style={styles.title}>
        5 Warning Signs of Stroke You Should Never Ignore
      </Text>

      <View style={styles.doctorRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>SC</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.doctorName}>Dr. Samuel Chukwudi ✓</Text>
          <Text style={styles.doctorSpecialty}>
            Verified Young Doctor • Neurology
          </Text>
        </View>
      </View>

      <View style={styles.healthCard}>
        <Text style={styles.healthCardTitle}>Know the warning signs</Text>

        <Text style={styles.number}>1</Text>
        <Text style={styles.point}>
          Sudden weakness or numbness, especially on one side of the body.
        </Text>

        <Text style={styles.number}>2</Text>
        <Text style={styles.point}>
          Sudden difficulty speaking or understanding speech.
        </Text>

        <Text style={styles.number}>3</Text>
        <Text style={styles.point}>
          Sudden vision problems in one or both eyes.
        </Text>

        <Text style={styles.number}>4</Text>
        <Text style={styles.point}>
          Sudden dizziness, loss of balance or coordination.
        </Text>

        <Text style={styles.number}>5</Text>
        <Text style={styles.point}>
          Sudden severe headache with no known cause.
        </Text>
      </View>

      <Text style={styles.body}>
        Stroke symptoms can appear suddenly. Recognising warning signs early
        and seeking emergency medical care can be critical.
      </Text>

      <View style={styles.verificationBox}>
        <Text style={styles.verificationTitle}>
          ✓ Doctor Validation
        </Text>

        <Text style={styles.verificationText}>
          {doctorUpvotes} doctors have upvoted this health information.
        </Text>

        <View style={styles.progressBackground}>
          <View
            style={[
              styles.progress,
              {
                width: `${Math.min((doctorUpvotes / 20) * 100, 100)}%`,
              },
            ]}
          />
        </View>

        <Text style={styles.threshold}>
          Minimum required: 20 doctor upvotes
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.action, liked && styles.activeAction]}
          onPress={() => setLiked(!liked)}
        >
          <Text style={styles.actionText}>
            {liked ? "♥" : "♡"} {likes}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={sharePost}>
          <Text style={styles.actionText}>↗ Share</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.action, upvoted && styles.activeAction]}
          onPress={() => setUpvoted(!upvoted)}
        >
          <Text style={styles.actionText}>
            {upvoted ? "✓ Upvoted" : "↑ Upvote"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.commentsSection}>
        <Text style={styles.commentsTitle}>
          Comments ({comments.length})
        </Text>

        {comments.map((item, index) => (
          <View key={index} style={styles.comment}>
            <Text style={styles.commentName}>{item.name}</Text>
            <Text style={styles.commentText}>{item.text}</Text>
          </View>
        ))}

        <View style={styles.commentInputRow}>
          <TextInput
            style={styles.commentInput}
            placeholder="Write a comment..."
            value={comment}
            onChangeText={setComment}
          />

          <TouchableOpacity
            style={styles.commentButton}
            onPress={addComment}
          >
            <Text style={styles.commentButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => router.push("/doctor-profile")}
      >
        <Text style={styles.profileButtonText}>
          View Doctor Profile
        </Text>
      </TouchableOpacity>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: "#fff",
  },
  back: {
    fontSize: 36,
    color: "#17202A",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#17202A",
  },
  shareIcon: {
    fontSize: 25,
    color: "#087F73",
  },
  category: {
    margin: 20,
    marginBottom: 10,
    alignSelf: "flex-start",
    backgroundColor: "#E8F7F5",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
  },
  categoryText: {
    color: "#087F73",
    fontSize: 12,
    fontWeight: "800",
  },
  title: {
    fontSize: 28,
    lineHeight: 35,
    fontWeight: "900",
    color: "#17202A",
    paddingHorizontal: 20,
  },
  doctorRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#087F73",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "800",
  },
  doctorName: {
    fontWeight: "800",
    color: "#17202A",
  },
  doctorSpecialty: {
    color: "#64748B",
    fontSize: 12,
    marginTop: 3,
  },
  healthCard: {
    backgroundColor: "#087F73",
    marginHorizontal: 20,
    borderRadius: 22,
    padding: 22,
  },
  healthCardTitle: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "900",
    marginBottom: 15,
  },
  number: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 10,
  },
  point: {
    color: "#E8FFFC",
    fontSize: 14,
    lineHeight: 21,
  },
  body: {
    fontSize: 15,
    color: "#475569",
    lineHeight: 24,
    padding: 20,
  },
  verificationBox: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 18,
  },
  verificationTitle: {
    fontSize: 17,
    fontWeight: "900",
    color: "#087F73",
  },
  verificationText: {
    color: "#475569",
    marginTop: 7,
  },
  progressBackground: {
    height: 8,
    backgroundColor: "#E2E8F0",
    borderRadius: 10,
    marginTop: 14,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "#087F73",
  },
  threshold: {
    color: "#94A3B8",
    fontSize: 12,
    marginTop: 7,
  },
  actions: {
    flexDirection: "row",
    padding: 20,
    gap: 8,
  },
  action: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 13,
    borderRadius: 12,
    alignItems: "center",
  },
  activeAction: {
    backgroundColor: "#E8F7F5",
  },
  actionText: {
    color: "#334155",
    fontWeight: "700",
    fontSize: 12,
  },
  commentsSection: {
    paddingHorizontal: 20,
  },
  commentsTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 15,
  },
  comment: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 14,
    marginBottom: 10,
  },
  commentName: {
    fontWeight: "800",
    color: "#17202A",
  },
  commentText: {
    color: "#64748B",
    marginTop: 5,
  },
  commentInputRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  commentInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  commentButton: {
    backgroundColor: "#087F73",
    paddingHorizontal: 17,
    justifyContent: "center",
    borderRadius: 12,
    marginLeft: 8,
  },
  commentButtonText: {
    color: "#fff",
    fontWeight: "800",
  },
  profileButton: {
    margin: 20,
    backgroundColor: "#17202A",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  profileButtonText: {
    color: "#fff",
    fontWeight: "800",
  },
});