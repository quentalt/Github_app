// App.tsx
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { supabase } from './supabase'; // Import User type

import AuthStack from './navigation/AuthStack';
import MainTab from './navigation/MainTab';
import { User } from '@supabase/supabase-js';

export default function App() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async () => checkUser()
        );

        checkUser().then(() => console.log('Checked user'));

        return () => {
            authListener?.subscription?.unsubscribe();
        };
    }, []);

    async function checkUser() {
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user);
    }

    return (
        <NavigationContainer>
            {user ? <MainTab /> : <AuthStack />}
        </NavigationContainer>
    );
}
