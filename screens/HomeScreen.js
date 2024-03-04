import { StyleSheet, View } from 'react-native';
import { useResponseState } from "../state/ResponseState";

import { Text, Button, Input } from '@rneui/themed';

export default function HomeScreen({ navigation }) {

    useResponseState();
    return (
        <View style={styles.container}>
            <Text h1 >Colour</Text>
            <Text h2 >Picker</Text>

            <Text style={styles.caption}>Find out your colour scheme.</Text>
            {/* input isn't actually stored - just for show :) */}
            <Input
                placeholder='Your Name'
                placeholderTextColor={'#4D4D4D'}
                cursorColor={'#fff'}
            />

            <Button
                title={'Get Started'}
                onPress={() => navigation.navigate('Question')}
                buttonStyle={{
                    backgroundColor: '#272727'
                }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#000000'
    },
    caption: {
        marginTop: 35,
        marginBottom: 10,
        color: '#ffffff'
    },
})