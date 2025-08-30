import SignOutButton from "@/components/SignOutButton";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreens = () => {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-100">
        <Ionicons name="person-outline" size={24} color="#1DA1F2" />

        <Text className="text-xl font-bold text-gray-900">ProfileScreens</Text>
        <SignOutButton />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreens;
