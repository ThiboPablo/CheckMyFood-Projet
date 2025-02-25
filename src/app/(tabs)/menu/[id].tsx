import { useLocalSearchParams, Stack } from 'expo-router';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import food_elements from '@assets/data/foods';
import food_categories from '@assets/data/categories';
import defaultFoodImage from "@/components/LesItems";
import Colors from '@/src/constants/Colors';
import { useState } from 'react';
import PageDinfo from '@/src/components/LesInfos';

const typesOfInfo = ['Macro', 'Micro', 'Environ.'];

const Food_detailsPage = () => {
    const { id } = useLocalSearchParams();

    const [selectedInfoType, setSelectedInfoType] = useState('Macro')
    
    const food = food_elements.find(item => item.id.toString() === id);
    if (!food) {
        return <Text>Product not found</Text>
    };

    const theCategory = food_categories.find(item => item.name.toString() === food.category);
    const noCategory = !theCategory;

    {/*const getInfoStyle = (infoType) => {
        switch(infoType) {
            case 'Environ.':
                return styles.infoTextViewEnviron;
            default:
                return styles.infoTextViewMaicro;
        }
    };*/}

    return (
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <Stack.Screen options={{ title: food.name }}/>
            <Image source={{ uri: food.image || defaultFoodImage }}
            style={styles.image}
            />
            <Text style={styles.co2}>Avg. CO2: {food.co2}kg/kg.</Text>
            <Text style={styles.littleTitle}>Everything you gotta know about {food.name}...</Text>
            {!noCategory ? (
                <PageDinfo food_category={theCategory} />
            ) : (
                <Text style={styles.littleTitle}>No category available</Text>
            )}
            <View style={styles.theParametersWholeView}>
                {typesOfInfo.map((infoType) => (
                    <Pressable
                    style={[styles.infoTextView, {backgroundColor: selectedInfoType === infoType ? '#060644' : 'lightblue'},]}
                    key={infoType}
                    onPress={() => {setSelectedInfoType(infoType);}}
                    >
                    <Text style={[styles.infoText, {color: selectedInfoType === infoType ? 'white' : 'black'},]}>{infoType}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#f5f5f5',
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
    bigTitle: {
        fontSize: 25,
        fontWeight: '600',

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
        backgroundColor: '#060644',
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
