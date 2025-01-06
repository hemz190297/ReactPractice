import { View, Text } from 'react-native'
import React from 'react'


type Role = "admin" | "editor" | "viewer" | "unknown";

const SwitchCase: React.FC<{ role: Role }> = ({ role }) => {
    const getMessage = (role: Role): string => {
        switch (role) {
            case 'admin':
                return "You Have a admin access!";
            case 'editor':
                return "You can edit access!";
            case 'viewer':
                return "You can only view documents!";
            default:
                return "You don't have a access!"
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "#fff", fontWeight: "thin" }}>{getMessage(role)}</Text>
        </View>
    )
}

export default SwitchCase;