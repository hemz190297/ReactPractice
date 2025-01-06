import { View, Text } from 'react-native'
import React from 'react'

type Role = 'admin' | 'editor' | 'viewer' | 'unkown'

const EarlyReturn: React.FC<{ role: Role }> = ({ role }) => {
    const getMessage = (role: Role): string => {
        if (role === 'admin') return "You have a admin access";
        if (role === 'editor') return "You have a admin access";
        if (role === 'viewer') return "You have a admin access";
        return "Role not recognize"
    }

    return (
        <View>
            <Text style={{ color: "#fff", fontWeight: "thin" }}>{getMessage('admin')}</Text>
        </View>
    )
}

export default EarlyReturn;