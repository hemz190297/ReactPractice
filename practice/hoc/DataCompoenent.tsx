import React from "react";
import { Text, View } from "react-native";

interface DataComponentProps {
    data: string;
}

const DataComponent: React.FC<DataComponentProps> = ({ data }) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#fff", fontWeight: "thin" }}>Data: {data}</Text>
    </View>
)
export default DataComponent;