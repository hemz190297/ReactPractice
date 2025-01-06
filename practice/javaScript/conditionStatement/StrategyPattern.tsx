import React from "react";
import { Text, View } from "react-native";

type Role = "admin" | "editor" | "viewer";

const strategyPattern: React.FC<{ role: Role }> = ({ role }) => {
  const strategies: Record<Role, () => string> = {
    admin: () => "You have admin access.",
    editor: () => "You can edit content.",
    viewer: () => "You can view content.",
  };

  const getMessage = strategies[role] || (() => "Role not recognized.");
  return (
    <View>
      <Text>{getMessage()}</Text>
    </View>
  );
};

export default strategyPattern;
