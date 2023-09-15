// navigation/AuthStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from "../screens/Authscreen";

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Auth" component={AuthScreen} />
        </Stack.Navigator>
    );
}