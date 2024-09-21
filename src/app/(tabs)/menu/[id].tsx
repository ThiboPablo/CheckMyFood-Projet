import { useLocalSearchParams, Stack } from 'expo-router';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import food_elements from '@assets/data/foods';
import defaultFoodImage from "@/components/LesItems";
import Colors from '@/src/constants/Colors';
import { useState } from 'react';

const typesOfInfo = ['Macro', 'Micro', 'Environ.'];

const Food_detailsPage = () => {
    const { id } = useLocalSearchParams();

    const [selectedInfoType, setSelectedInfoType] = useState('Macro')
    
    const food = food_elements.find(item => item.id.toString() === id);
    if (!food) {
        return <Text>Product not found</Text>
    };

    {/*const getInfoStyle = (infoType) => {
        switch(infoType) {
            case 'Environ.':
                return styles.infoTextViewEnviron;
            default:
                return styles.infoTextViewMaicro;
        }
    };*/}

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: food.name }}/>
            <Image source={{ uri: food.image || defaultFoodImage }}
            style={styles.image}
            />
            <Text style={styles.co2}>Avg. CO2: {food.co2}kg/kg.</Text>
            <Text style={styles.littleTitle}>Everything you gotta know about {food.name}...</Text>
            <View style={styles.theParametersWholeView}>
                {typesOfInfo.map((infoType) => (
                    <Pressable
                    style={[styles.infoTextView, {backgroundColor: selectedInfoType === infoType ? 'green' : 'lightgreen'},]}
                    key={infoType}
                    onPress={() => {setSelectedInfoType(infoType);}}
                    >
                    <Text style={[styles.infoText, {color: selectedInfoType === infoType ? 'white' : 'black'},]}>{infoType}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image: {
        width: '50%',
        aspectRatio: 1,
        marginTop: 20,
    },
    co2: {
        fontSize: 30,
        fontWeight: '600',
        color: '#060644',
        marginTop: 20,
    },
    littleTitle: {
        fontSize: 18,
        fontWeight: '300',
        color: 'black',
        fontStyle: 'italic',
        textAlign: 'center',
        width: '70%',
        marginVertical: 5,
    },
    theParametersWholeView: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Changed from 'space-around'
        alignItems: 'center',
        width: '100%',
        padding: 0,
    },
    infoTextView: {
        width: '32%',
        backgroundColor: '#D0FFBC',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 2.5,
        borderRadius: 10,
    },
    infoText: {
        fontSize: 20,
        fontWeight: 'normal',
    },
});


export default Food_detailsPage;
