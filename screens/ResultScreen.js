import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button } from '@rneui/themed';

// note: not currently using, would need if I decide to include the answers block
// import { useResponseState } from "../state/ResponseState";

import generate from '../data/colour';

export default function Results({ navigation }) {

    // note: not currently using, would need if I decide to include the answers block
    // const responseState = useResponseState();
    // const responses = responseState.getResponses();

    // generate random colour
    const colour = generate();

    return (
        <View
            style={styles.container}
        >
            <ScrollView style={styles.scroll}>
                <View style={styles.wrapper}>
                    <Text h4
                        style={styles.title}
                    >You in Colour</Text>
                    <View
                        style={styles.circle}
                        backgroundColor={colour}
                    >
                    </View>
                    <Text style={[styles.colour, { color: colour }]}>{colour}</Text>

                    {/* Haven't decided if I want to display responses but I think it looks nicer without so I commented out, but might bring back when I put on my portfolio */}

                    {/* <View style={styles.answercont}>
                        <Text style={[styles.answers, { width: '100%', marginBottom: 10, fontSize: 20, color: '#ddd' }]}>
                            Your answers:
                        </Text>
                        <View>
                            {responses.map((response) => {
                                return (
                                    <View key={response.id}>
                                        <Text style={styles.answers}>{response.answer}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View> */}

                    <Button
                        title={'Retake'}
                        onPress={() => {
                            navigation.navigate('Home');
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#272727',
    },
    scroll: {
        width: '100%',
        height: '100%',
    },
    wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        width: '100%',
    },
    circle: {
        width: 300,
        height: 300,
        borderRadius: 150,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#131313'
    },
    colour: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    // answercont: {
    //     marginVertical: 20,
    //     width: '90%',
    //     backgroundColor: '#343434',
    //     padding: 20,
    //     borderRadius: 10,
    //     display: 'flex',
    //     alignItems: 'center',
    //     borderWidth: 1,
    //     borderColor: '#131313',
    // },

})