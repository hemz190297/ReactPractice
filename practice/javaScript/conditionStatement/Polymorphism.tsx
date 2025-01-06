import React from "react";
import { Text, View } from "react-native";

type Role = "admin" | "editor" | "viewer";

const Plymorphism: React.FC<{ role: Role }> = ({ role }) => {
    const roleHandlers: Record<Role, () => string> = {
        admin: () => "You have admin access.",
        editor: () => "You can edit content.",
        viewer: () => "You can view content.",
    };

    return (
        <View>
            <Text style={{ color: "#fff", fontWeight: "thin" }}>{roleHandlers['viewer']()}</Text>
        </View>
    );
};

export default Plymorphism;
