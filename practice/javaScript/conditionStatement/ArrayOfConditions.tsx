import { View, Text } from 'react-native'
import React from 'react'

type Role = 'admin' | 'viewer' | 'editor' | 'unknown'

interface condition {
    condition: boolean,
    result: string
}

const ArrayOfConditions: React.FC<{ role: Role }> = ({ role }) => {
    const conditions: condition[] = [
        { condition: role === 'admin', result: "you r admin" },
        { condition: role === 'viewer', result: "you r viewer" },
        { condition: role === 'editor', result: "you r editor" },
    ];
    const matchConditions = conditions.find(({ condition }) => condition);

    return (
        <View>
            <Text style={{ color: "#fff", fontWeight: "thin" }}>{matchConditions ? matchConditions.result : "Role not recognize"}</Text>
        </View>
    )
}


export default ArrayOfConditions