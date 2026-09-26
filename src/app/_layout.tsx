import { Stack } from "expo-router";
import { AppStoreProvider } from "@/hooks/use-app-store";

export default function RootLayout() {
  return (
    <AppStoreProvider>
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
    </AppStoreProvider>
  );
}