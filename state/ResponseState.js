import { hookstate, useHookstate } from "@hookstate/core";

// create an empty array
const initialState = hookstate([]);

export function useResponseState() {

    // assign state
    const state = useHookstate(initialState);

    return {

        // add a response based on question id (1, 2 or 3)
        addResponse(whichQuestion, newAnswer) {
            return state.set((answers) => [...answers, { id: whichQuestion, answer: newAnswer }]);
        },

        // remove response - used in case user changes their answer
        removeResponse(id) {
            return state.set((answers) => answers.filter((item) => item.id !== id));
        },

        // return all responses
        getResponses() {
            return state.get();
        },

        // return one response based on id
        getResponse(id) {
            let values = state.get();
            let value = values.filter(value =>
                value.id === id
            );
            return value;
        },

    };
}