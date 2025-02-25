import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Food_category } from '@/types';
import { Link } from 'expo-router';

type PageDinfoPropriétés = {
    food_category: Food_category;
  }

const PageDinfo = ({ food_category }: PageDinfoPropriétés) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.text}>{food_category.introduction}</Text>
        <Text style={styles.title}>General Facts</Text>
        <Text style={styles.text}>{food_category.general_facts}</Text>
      </View>
    );
  };

export default PageDinfo;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
        fontWeight: 'thin',
    },
  });