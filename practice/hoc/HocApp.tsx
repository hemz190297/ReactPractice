import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import WrappedComponent from "./WrappedComponent";


const HocApp = () => {
    const [data, setData] = useState('')
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setData("you are the best!")
            setIsloading(true)
        }, 3000);
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <WrappedComponent isLoading={isLoading} data={data} />
        </View>
    )
}
export default HocApp;

