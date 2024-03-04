import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useResponseState } from "../state/ResponseState";


export default function QuestionFlatList({ questionData, navigation, linkTo }) {

    // state to keep track of selected option
    const [selectedValue, setSelectedValue] = useState(null);

    // state to keep track of user responses
    const responseState = useResponseState();
    const responses = responseState.getResponses();

    // if user is taking the quiz a second time, highlight their previously selected responses based on hookstate
    const prevResponse = responseState.getResponse(questionData.id).map((response) => response.answer).toString();

    const renderItem = ({ item }) => (
        // render each option based on question-source dataset
        <TouchableOpacity
            // if option was selected, highlight
            style={item === selectedValue || item === prevResponse ? styles.selectedOption : styles.option}
            onPress={() => {
                setSelectedValue(item);
                // if option has already been selected, remove previous response
                if (Object.values(responses).indexOf(questionData.id) != 0) {
                    responseState.removeResponse(questionData.id);
                } else null;
                // store new response
                responseState.addResponse(questionData.id, item);
            }}
            activeOpacity={0.4}
        >
            <Text style={styles.optionText}>
                {item}
            </Text>
        </TouchableOpacity >
    );

    return (
        // render question page
        <View style={styles.container}>
            <Text style={styles.question}>
                {questionData.title}
            </Text>

            <FlatList
                data={questionData.options}
                renderItem={renderItem}

                numColumns={2}
                style={{ width: '100%' }}
                columnWrapperStyle={{ justifyContent: 'space-evenly', alignItems: 'space-between' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    question: {
        fontSize: 24,
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 15,
    },
    option: {
        maxWidth: '43%',
        aspectRatio: 1,
        flex: 0.5,
        backgroundColor: '#343434',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3.5%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#343434',
    },
    selectedOption: {
        maxWidth: '43%',
        aspectRatio: 1,
        flex: 0.5,
        backgroundColor: '#343434',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3.5%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
    },
    optionText: {
        fontSize: 24,
        color: '#ffffff',
        textAlign: 'center'
    },
})