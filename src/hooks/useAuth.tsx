import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

const USER_KEY = 'doctors_portal_user';

export type User = {
  fullName: string;
  email: string;
  phone: string;
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const savedUser = await SecureStore.getItemAsync(USER_KEY);

      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.log('Could not load user:', error);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (
    fullName: string,
    email: string,
    phone: string
  ) => {
    const newUser = {
      fullName,
      email,
      phone,
    };

    await SecureStore.setItemAsync(
      USER_KEY,
      JSON.stringify(newUser)
    );

    setUser(newUser);
  };

  const login = async (
    email: string,
    password: string
  ) => {
    // Temporary local authentication.
    // Real backend authentication will replace this later.
    if (!email || !password) {
      return false;
    }

    const savedUser = await SecureStore.getItemAsync(USER_KEY);

    if (!savedUser) {
      return false;
    }

    const existingUser = JSON.parse(savedUser);

    if (existingUser.email.toLowerCase() !== email.toLowerCase()) {
      return false;
    }

    setUser(existingUser);

    return true;
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync(USER_KEY);
    setUser(null);
  };

  return {
    user,
    loading,
    signUp,
    login,
    logout,
  };
}