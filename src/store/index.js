import { createStore } from "vuex";

const store = createStore({
    state:{
        teamName: "red", // default red team
        question: 0,
        currentQuestionPage: 0,
        progress: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        questionStatus: "none"
    },
    getters:{},
    mutations:{
        reset(state) {
            state.teamName = "red",
            state.question = 0;
            state.progress = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            state.questionStatus = "none";
        },
        setRed (state) {
            state.teamName = "red"
        },
        setBlue (state) {
            state.teamName = "blue"
        },
        setGreen (state) {
            state.teamName = "green"
        },
        setQuestion(state, {questionIndex}){
            state.question = questionIndex;
            console.log("Question index: " + questionIndex);
        },
        setCompleted(state, {questionIndex}){
            state.progress[questionIndex] = 1;
        },
        setQuestionState(state, {questionState}){
            state.questionStatus = questionState;
        },
        setQuestionPage(state, {questionState}){
            state.currentQuestionPage = questionState;
        }
    },
    actions:{}
});

export default store;