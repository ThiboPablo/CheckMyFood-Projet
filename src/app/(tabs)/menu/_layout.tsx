import { Stack } from 'expo-router';

export default function StackDuMenu() {
    return (
    <Stack>
        <Stack.Screen name="index" options={{ title: 'Menu' }}/>
    </Stack>
    );
}