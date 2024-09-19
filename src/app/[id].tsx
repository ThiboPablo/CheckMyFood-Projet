import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

const Food_detailsPage = () => {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>Page : { id } </Text>
        </View>
    );
};

export default Food_detailsPage;
