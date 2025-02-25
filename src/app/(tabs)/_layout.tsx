import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size: number;
}) {
  return <FontAwesome style={{ marginBottom: -3 }} {...props} />;
}

const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#060644',
    background: 'rgb(242, 242, 242)',
    card: 'white',
    text: '#444406',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};


export default function TabLayout() {
  const colorScheme = useColorScheme();


  return (
    <ThemeProvider value={CustomLightTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: CustomLightTheme.colors.primary,
          tabBarInactiveTintColor: CustomLightTheme.colors.text,
          tabBarStyle: { backgroundColor: CustomLightTheme.colors.card },
          headerStyle: { backgroundColor: CustomLightTheme.colors.card },
          headerTintColor: CustomLightTheme.colors.text,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: useClientOnlyValue(false, true),
        }}>
        <Tabs.Screen name="index" options={{ href: null }}/>
        <Tabs.Screen
          name="two"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} size={28}/>,
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            title: 'Menu',
            headerShown: false,
            tabBarIcon: ({ color }) => <TabBarIcon name="cutlery" color={color} size={20} />,
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
