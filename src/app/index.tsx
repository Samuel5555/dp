import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* LOGO */}

        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoPlus}>+</Text>
          </View>

          <Text style={styles.logoText}>
            Doctors<Text style={styles.logoPortal}>Portal</Text>
          </Text>

          <Text style={styles.tagline}>
            Trusted health information. Powered by doctors. 
          </Text>
        </View>


        {/* WELCOME */}

        <View style={styles.welcome}>
          <Text style={styles.title}>
            Welcome to Doctors Portal
          </Text>

          <Text style={styles.subtitle}>
            Discover trusted health information from
            verified doctors.
          </Text>
        </View>


        {/* CHOOSE ACCOUNT */}

        <Text style={styles.sectionTitle}>
          Continue as
        </Text>


        {/* DOCTOR BUTTON */}

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.accountCard}
          onPress={() => router.push("/doctor")}
        >

          <View style={styles.iconCircle}>
            <Text style={styles.icon}>
              👨‍⚕️
            </Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Doctor
            </Text>

            <Text style={styles.cardDescription}>
              Share medical knowledge and create
              trusted health information.
            </Text>

            <Text style={styles.continueText}>
              Continue as Doctor →
            </Text>
          </View>

        </TouchableOpacity>


        {/* USER BUTTON */}

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.accountCard}
          onPress={() => router.push("/user")}
        >

          <View style={styles.iconCircle}>
            <Text style={styles.icon}>
              👤
            </Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              User
            </Text>

            <Text style={styles.cardDescription}>
              Discover health information created by
              verified doctors.
            </Text>

            <Text style={styles.continueText}>
              Continue as User →
            </Text>
          </View>

        </TouchableOpacity>


        {/* FOOTER */}

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>
            Doctors Portal 247
          </Text>

          <Text style={styles.footerText}>
            Health information. Connected by doctors.
          </Text>
        </View>

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
    paddingTop: 45,
    paddingBottom: 50,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },

  logoCircle: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: "#087F73",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  logoPlus: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "700",
  },

  logoText: {
    fontSize: 29,
    fontWeight: "800",
    color: "#17202A",
  },

  logoPortal: {
    color: "#087F73",
  },

  tagline: {
    marginTop: 7,
    fontSize: 13,
    color: "#6B7280",
    textAlign: "center",
  },

  welcome: {
    marginBottom: 28,
  },

  title: {
    fontSize: 27,
    fontWeight: "800",
    color: "#17202A",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: "#6B7280",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#17202A",
    marginBottom: 14,
  },

  accountCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 20,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: "#EAF7F5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  icon: {
    fontSize: 30,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#17202A",
    marginBottom: 5,
  },

  cardDescription: {
    fontSize: 13,
    lineHeight: 19,
    color: "#6B7280",
  },

  continueText: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "700",
    color: "#087F73",
  },

  footer: {
    alignItems: "center",
    marginTop: 35,
  },

  footerTitle: {
    fontWeight: "700",
    color: "#17202A",
  },

  footerText: {
    marginTop: 5,
    fontSize: 12,
    color: "#9CA3AF",
  },

});