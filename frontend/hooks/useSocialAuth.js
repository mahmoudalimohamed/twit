import { useSSO } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export const useSocialAuth = () => {
  const [loadingProvider, setLoadingProvider] = useState(null); // 'google' | 'facebook' | null
  const { startSSOFlow } = useSSO();
  const router = useRouter();

  const handleSocialAuth = async (strategy) => {
    setLoadingProvider(strategy);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/(tabs)");
      }
    } catch (err) {
      console.log("Error in social auth", err);
      const provider = strategy === "oauth_google" ? "Google" : "Facebook";
      Alert.alert(
        "Error",
        `Failed to sign in with ${provider}. Please try again.`
      );
    } finally {
      setLoadingProvider(null);
    }
  };

  return {
    loadingProvider,
    handleSocialAuth,
    isGoogleLoading: loadingProvider === "oauth_google",
    isFacebookLoading: loadingProvider === "oauth_facebook",
  };
};
