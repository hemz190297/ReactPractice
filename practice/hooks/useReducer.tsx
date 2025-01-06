import React, { useState } from 'react';
import { useRef } from 'react';
import { Button, Text, View } from 'react-native';


const UseReducer = () => {

    const counterRef = useRef(0);
    const [render, setRender] = useState(false);

    const increment = () => {
        counterRef.current += 1;
        setRender((prev) => !prev)
    }
    const decrement = () => {
        counterRef.current -= 1;
        setRender((prev) => !prev)
    }
    console.log("okoko::::", counterRef);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "#fff" }}>{counterRef.current}</Text>
            <Button title='increment' onPress={() => { increment() }} />
            <Button title='decrement' onPress={() => { decrement() }} />
        </View>
    )
}
export default UseReducer;