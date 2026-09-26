import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function UserLoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Missing information', 'Please enter your email and password.');
      return;
    }

    // Temporary login flow.
    // Real authentication will be connected later.
    router.replace('/user-home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>‹ Back</Text>
        </Pressable>

        <View style={styles.logoContainer}>
          <Text style={styles.logo}>DOCTORS</Text>
          <Text style={styles.logoPortal}>PORTAL</Text>
          <Text style={styles.tagline}>
            Discover health. Discover doctors.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Welcome back</Text>

          <Text style={styles.subtitle}>
            Log in to continue exploring health content from verified doctors.
          </Text>

          <Text style={styles.label}>Email Address</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Pressable
            onPress={() => {
              Alert.alert(
                'Coming soon',
                'Password recovery will be added when we connect the authentication system.'
              );
            }}
          >
            <Text style={styles.forgotPassword}>
              Forgot password?
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.loginButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </Pressable>

          <View style={styles.signupRow}>
            <Text style={styles.signupText}>
              Don't have an account?
            </Text>

            <Pressable
              onPress={() => router.replace('/user')}
            >
              <Text style={styles.signupLink}> Sign up</Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.footer}>
          Doctors Portal — a visual health discovery platform powered by
          verified doctors.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FA',
  },

  scrollContent: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 45,
    paddingBottom: 35,
  },

  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },

  backText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B5D5E',
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 28,
  },

  logo: {
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#0B5D5E',
  },

  logoPortal: {
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#147D80',
  },

  tagline: {
    marginTop: 7,
    fontSize: 13,
    color: '#6B7280',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 22,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },

  title: {
    fontSize: 27,
    fontWeight: '800',
    color: '#172B4D',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: '#6B7280',
    marginBottom: 25,
  },

  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#263238',
    marginBottom: 7,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#D7DEE3',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#172B4D',
    backgroundColor: '#FAFCFD',
    marginBottom: 17,
  },

  forgotPassword: {
    textAlign: 'right',
    fontSize: 13,
    fontWeight: '700',
    color: '#0B5D5E',
    marginTop: -5,
    marginBottom: 22,
  },

  loginButton: {
    height: 54,
    borderRadius: 13,
    backgroundColor: '#0B5D5E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonPressed: {
    opacity: 0.75,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 23,
  },

  signupText: {
    fontSize: 14,
    color: '#6B7280',
  },

  signupLink: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0B5D5E',
  },

  footer: {
    textAlign: 'center',
    fontSize: 11,
    lineHeight: 17,
    color: '#8A949E',
    marginTop: 22,
    paddingHorizontal: 15,
  },
});