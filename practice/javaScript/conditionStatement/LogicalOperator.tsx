import React from "react";
import { Text, View } from "react-native";

type Role = "admin" | "editor" | "viewer" | "unknown";

const LogicalOperator: React.FC<{ role: Role }> = ({ role }) => {
    const message =
        role === "admin"
            ? "You have admin access."
            : role === "editor"
                ? "You can edit content."
                : role === "viewer"
                    ? "You can view content."
                    : "Role not recognized.";

    return (
        <View>
            <Text style={{ color: "#fff", fontWeight: "thin" }}>{message}</Text>
        </View>
    );
};

export default LogicalOperator;
