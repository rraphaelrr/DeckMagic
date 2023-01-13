import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <View>
            <Text>{count}</Text>
            <Button
                title="Increment"
                onPress={() => dispatch({ type: 'INCREMENT' })}
            />
            <Button
                title="Decrement"
                onPress={() => dispatch({ type: 'DECREMENT' })}
            />
        </View>
    );
}
