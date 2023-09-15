// AuthScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { supabase } from '../supabase';
export default function AuthScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        const {error } = await supabase.auth.signUp({ email, password });
        if (error) {
            console.error('Error signing up:', error.message);
        } else {
            console.log('User registered:');
        }
    };

    const handleLogin = async () => {
        const {error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            console.error('Error signing in:', error.message);
        } else {
            console.log('User signed in:');
        }
    };

    return (
        <View>
            <Text>Email:</Text>
            <TextInput value={email} onChangeText={setEmail} />

            <Text>Password:</Text>
            <TextInput
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <Button title="Register" onPress={handleRegister} />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
}
