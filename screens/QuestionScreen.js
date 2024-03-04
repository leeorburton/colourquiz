import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import { Text, Button } from '@rneui/themed';

import QuestionFlatList from '../components/QuestionFlatList';
import { getQuestionById } from '../data/question-source';
import { useResponseState } from "../state/ResponseState";

export default function QuestionScreen({ navigation }) {

    // Set state to determine current page
    const [curr, setCurr] = useState(1);

    // get question based on curr state variable
    const currQ = getQuestionById(curr);

    // hookstate to keep track of user responses 
    const responseState = useResponseState();

    return (
        <View style={styles.container}>
            <Text h4 style={styles.pageTitle}>Question 0{curr}</Text>
            <View style={styles.questionContainer}>
                <QuestionFlatList
                    questionData={currQ}
                    navigation={navigation}
                />
            </View>

            <View style={styles.navBtns}>
                {/* show only if previous question exists. Defined in question source dataset */}
                {currQ.prev !== null &&
                    <Button
                        title={'Back'}
                        onPress={() => {
                            // change state to reflect current page
                            let changing = curr - 1;
                            setCurr(changing);
                        }}
                    />
                }

                {/* Show only if there is a next question */}
                {currQ.next !== null &&
                    <Button
                        title={'Next'}
                        // disable until user selects response
                        disabled={responseState.getResponse(curr).length === 0}
                        onPress={() => {
                            let changing = curr + 1;
                            setCurr(changing);
                        }}
                    />
                }

                {/* if there is no next question, show submit and navigate to response page */}
                {currQ.next === null &&
                    <Button
                        title={'Submit'}
                        disabled={responseState.getResponse(curr).length === 0}
                        onPress={() => navigation.navigate('Result')}
                    />
                }
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#272727',
        display: 'flex',
        alignItems: 'center',
    },
    pageTitle: {
        position: 'absolute',
        fontSize: 75,
        left: 0,
        top: 0,
    },
    questionContainer: {
        marginTop: '40%',
        width: '100%',
    },
    navBtns: {
        marginVertical: 15,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

})