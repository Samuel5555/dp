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

export default function UserScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!fullName || !email || !phone || !password || !confirmPassword) {
      Alert.alert('Missing information', 'Please fill in all the fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Password error', 'The passwords do not match.');
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        'Password too short',
        'Your password should contain at least 6 characters.'
      );
      return;
    }

    // For now, we simply move the user to the home screen.
    // Real account creation/database authentication will be added later.
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
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>DOCTORS</Text>
          <Text style={styles.logoPortal}>PORTAL</Text>
          <Text style={styles.tagline}>
            Discover health. Discover doctors.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subtitle}>
            Join Doctors Portal and discover trusted health content from
            verified doctors.
          </Text>

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#999"
            value={fullName}
            onChangeText={setFullName}
          />

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

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Create a password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            placeholderTextColor="#999"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <Pressable
            style={({ pressed }) => [
              styles.signUpButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleSignUp}
          >
            <Text style={styles.signUpText}>Create Account</Text>
          </Pressable>

          <View style={styles.loginRow}>
            <Text style={styles.loginText}>Already have an account?</Text>

           <Pressable
                onPress={() => router.replace('/user-login')}
            >
            <Text style={styles.loginLink}> Log in</Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.footer}>
          By creating an account, you agree to use Doctors Portal responsibly.
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
    paddingTop: 55,
    paddingBottom: 35,
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
    fontSize: 26,
    fontWeight: '800',
    color: '#172B4D',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: '#6B7280',
    marginBottom: 22,
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

  signUpButton: {
    height: 54,
    borderRadius: 13,
    backgroundColor: '#0B5D5E',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },

  buttonPressed: {
    opacity: 0.75,
  },

  signUpText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  loginText: {
    fontSize: 14,
    color: '#6B7280',
  },

  loginLink: {
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