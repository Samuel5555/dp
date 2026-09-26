import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

const questions = [
  {
    question: "Which organ is primarily responsible for filtering blood?",
    options: ["Heart", "Kidney", "Lung", "Liver"],
    answer: 1,
  },
  {
    question: "Which vitamin is primarily produced in the skin following sunlight exposure?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answer: 3,
  },
  {
    question: "Which chamber of the heart pumps oxygenated blood to the body?",
    options: [
      "Right atrium",
      "Right ventricle",
      "Left atrium",
      "Left ventricle",
    ],
    answer: 3,
  },
  {
    question: "Which blood cells are primarily responsible for immunity?",
    options: [
      "Red blood cells",
      "White blood cells",
      "Platelets",
      "Reticulocytes",
    ],
    answer: 1,
  },
  {
    question: "Which hormone lowers blood glucose?",
    options: ["Insulin", "Glucagon", "Cortisol", "Adrenaline"],
    answer: 0,
  },
];

export default function MedicalTestScreen() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const question = questions[current];

  const nextQuestion = () => {
    if (selected === null) return;

    const newScore =
      score + (selected === question.answer ? 1 : 0);

    if (current === questions.length - 1) {
      router.push({
        pathname: "/test-result",
        params: {
          score: newScore.toString(),
          total: questions.length.toString(),
        },
      });
      return;
    }

    setScore(newScore);
    setSelected(null);
    setCurrent(current + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.top}>
          <Text style={styles.title}>
            Medical Assessment
          </Text>

          <Text style={styles.counter}>
            {current + 1}/{questions.length}
          </Text>
        </View>

        <View style={styles.progressBackground}>
          <View
            style={[
              styles.progress,
              {
                width: `${((current + 1) / questions.length) * 100}%`,
              },
            ]}
          />
        </View>

        <View style={styles.questionCard}>

          <Text style={styles.questionNumber}>
            Question {current + 1}
          </Text>

          <Text style={styles.question}>
            {question.question}
          </Text>

          {question.options.map((option, index) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.option,
                selected === index && styles.selectedOption,
              ]}
              onPress={() => setSelected(index)}
            >
              <View
                style={[
                  styles.radio,
                  selected === index && styles.radioSelected,
                ]}
              />

              <Text style={styles.optionText}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}

        </View>

        <TouchableOpacity
          style={[
            styles.button,
            selected === null && styles.disabledButton,
          ]}
          disabled={selected === null}
          onPress={nextQuestion}
        >
          <Text style={styles.buttonText}>
            {current === questions.length - 1
              ? "Submit Assessment"
              : "Next Question"}
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
    padding: 22,
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 25,
    fontWeight: "800",
    color: "#17202A",
  },

  counter: {
    color: "#087F73",
    fontWeight: "800",
  },

  progressBackground: {
    height: 6,
    backgroundColor: "#DDE5E4",
    borderRadius: 5,
    marginTop: 18,
    marginBottom: 25,
  },

  progress: {
    height: 6,
    backgroundColor: "#087F73",
    borderRadius: 5,
  },

  questionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  questionNumber: {
    color: "#087F73",
    fontWeight: "700",
    marginBottom: 12,
  },

  question: {
    fontSize: 19,
    lineHeight: 27,
    fontWeight: "800",
    color: "#17202A",
    marginBottom: 25,
  },

  option: {
    minHeight: 55,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 13,
    marginBottom: 12,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  selectedOption: {
    borderColor: "#087F73",
    backgroundColor: "#F0FAF9",
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#CBD5E1",
    marginRight: 12,
  },

  radioSelected: {
    borderColor: "#087F73",
    backgroundColor: "#087F73",
  },

  optionText: {
    flex: 1,
    color: "#374151",
    fontSize: 14,
  },

  button: {
    height: 55,
    backgroundColor: "#087F73",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  disabledButton: {
    backgroundColor: "#A7C8C4",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});