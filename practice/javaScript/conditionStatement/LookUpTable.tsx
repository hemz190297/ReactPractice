import { View, Text } from 'react-native'
import React from 'react'

type Role = 'admin' | 'editor' | 'viewer' | 'unknown'

const roleMessage: Record<Role, string> = {
    admin: "you can admin access",
    editor: "you can edit document",
    viewer: "you can only review document",
    unknown: "Role not recognize"
}

const LookUpTable: React.FC<{ role: Role }> = ({ role }) => {
    return (
        <View>
            <Text>{roleMessage[role]}</Text>
        </View>
    )
}

export default LookUpTable