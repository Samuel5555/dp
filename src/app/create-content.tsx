import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { useAppStore } from "@/hooks/use-app-store";
export default function CreateContent() {
  const [category, setCategory] = useState("General Medicine");
  const { addPost } = useAppStore();
  const categories = [
    "General Medicine",
    "Cardiology",
    "Neurology",
    "Nephrology",
    "Paediatrics",
    "Surgery",
    "Public Health",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹ Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Create Health Information
        </Text>

        <Text style={styles.subtitle}>
          Share useful health information with the Doctors
          Portal community.
        </Text>

        <Text style={styles.label}>
          Title
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your health information title"
          placeholderTextColor="#9CA3AF"
        />

        <Text style={styles.label}>
          Category
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
          {categories.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.category,
                category === item && styles.selectedCategory,
              ]}
              onPress={() => setCategory(item)}
            >
              <Text
                style={[
                  styles.categoryText,
                  category === item && styles.selectedCategoryText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.aiCard}>
          <Text style={styles.aiTitle}>
            ✨ AI Category Assistant
          </Text>

          <Text style={styles.aiText}>
            After you enter your content, AI will suggest
            the most relevant health categories and tags.
          </Text>
        </View>

        <Text style={styles.label}>
          Health information
        </Text>

        <TextInput
          style={styles.textArea}
          placeholder="Write your health information here..."
          placeholderTextColor="#9CA3AF"
          multiline
          textAlignVertical="top"
        />

        <TouchableOpacity style={styles.imageButton}>
          <Text style={styles.imageText}>
            ＋ Add Health Card Image
          </Text>
        </TouchableOpacity>

        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>
            Doctor validation
          </Text>

          <Text style={styles.noticeText}>
            New health information will first be available
            for doctor review. It becomes available in the
            general user feed after reaching the required
            doctor upvote threshold.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.submit}
          onPress={() => router.push("/post")}
        >
          <Text style={styles.submitText}>
            Submit for Doctor Review
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
  },

  content: {
    padding: 20,
    paddingBottom: 50,
  },

  back: {
    color: "#087F73",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 25,
  },

  title: {
    fontSize: 27,
    fontWeight: "900",
    color: "#17202A",
  },

  subtitle: {
    color: "#6B7280",
    lineHeight: 20,
    marginTop: 7,
    marginBottom: 25,
  },

  label: {
    fontSize: 14,
    fontWeight: "800",
    color: "#374151",
    marginBottom: 8,
    marginTop: 8,
  },

  input: {
    height: 55,
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 15,
    fontSize: 14,
  },

  categories: {
    marginBottom: 10,
  },

  category: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 9,
    marginRight: 8,
  },

  selectedCategory: {
    backgroundColor: "#087F73",
    borderColor: "#087F73",
  },

  categoryText: {
    color: "#6B7280",
    fontSize: 12,
    fontWeight: "600",
  },

  selectedCategoryText: {
    color: "#FFFFFF",
  },

  aiCard: {
    backgroundColor: "#EEF7F6",
    padding: 16,
    borderRadius: 16,
    marginTop: 10,
  },

  aiTitle: {
    color: "#087F73",
    fontWeight: "800",
    marginBottom: 5,
  },

  aiText: {
    color: "#52605F",
    fontSize: 12,
    lineHeight: 18,
  },

  textArea: {
    height: 190,
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 15,
    fontSize: 14,
  },

  imageButton: {
    height: 55,
    borderRadius: 13,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#087F73",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },

  imageText: {
    color: "#087F73",
    fontWeight: "700",
  },

  notice: {
    backgroundColor: "#FFF9EA",
    borderRadius: 15,
    padding: 16,
    marginTop: 15,
  },

  noticeTitle: {
    color: "#8A641F",
    fontWeight: "800",
    marginBottom: 5,
  },

  noticeText: {
    color: "#806C43",
    fontSize: 12,
    lineHeight: 18,
  },

  submit: {
    height: 55,
    backgroundColor: "#087F73",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  submitText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
});