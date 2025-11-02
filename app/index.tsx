import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Bluja = () => {
  const [onboardingCompleted, setOnboardingCompleted] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    async function checkOnboarding() {
      await AsyncStorage.clear(); // To test the onboarding, will be a comment on prod
      const completed = await AsyncStorage.getItem("onboarding_completed");
      setOnboardingCompleted(completed === "true");
    }
    checkOnboarding();
  }, []);

  if (onboardingCompleted === null) {
    return null; // Loading
  }

  if (!onboardingCompleted) {
    return <Redirect href="/onboarding" />;
  }

  return <Redirect href="/home" />;
};

export default Bluja;
