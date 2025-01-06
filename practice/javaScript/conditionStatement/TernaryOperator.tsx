import { View, Text } from 'react-native'
import React from 'react'

type Role = 'admin' | 'editor' | 'viewer' | 'unkown'

const TernaryOperator: React.FC<{ role: Role }> = ({ role }) => {
    return (
        <View>
            <Text style={{ color: "#fff", fontWeight: "thin" }}>
                {role === 'admin'
                    ? 'you have a admin access' :
                    role === 'editor'
                        ? 'you can edit document' :
                        role === 'viewer'
                            ? 'you can view documents only' :
                            'Role is not recognize'}
            </Text>
        </View>
    )
};
export default TernaryOperator;