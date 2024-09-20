import { useLocalSearchParams, Stack } from 'expo-router';
import { View, Text } from 'react-native';
import food_elements from '@assets/data/foods';
import { useState, useEffect } from 'react';


const Food_detailsPage = () => {
    const { id } = useLocalSearchParams();
    const [foodName, setFoodName] = useState('');

    useEffect(() => {
        const food = food_elements.find(item => item.id == id);
        if (food) {
            setFoodName(food.name);
        } else {
            setFoodName('Unknown');
        }
    }, [id]);

    return (
        <View>
            <Stack.Screen options={{ title: 'Details: ' + foodName }}/>
            <Text>Page : { id } </Text>
        </View>
    );
};

export default Food_detailsPage;
