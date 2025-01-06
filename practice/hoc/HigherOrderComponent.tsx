import { View, Text } from 'react-native'
import React from 'react'

interface withLoadingProps {
    isLoading: boolean;
}

function HigherOrderComponent<T extends object>(WrappedComponent: React.ComponentType<T>) {
    return (props: T & withLoadingProps) => {
        const { isLoading, ...restProps } = props;
        
        if (isLoading) {
            return (
                <View>
                    <Text style={{ color: "#fff", fontWeight: "thin" }}>HigherOrderComponent</Text>
                </View>
            )
        }
        return <WrappedComponent{...(restProps as T)} />;
    };
}
export default HigherOrderComponent;