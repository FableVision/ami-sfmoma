<template>
    <div id="icon" class="eight-icon">
        <img class="eight-image" :src= "(`/src/assets/png/${ icon }.png`)">
        <span id="span1" class="span1">Floor 3</span><br><span id="span2" class="light span2">Other text</span>
    </div>
    <div class = "text-button" @click="back" style="float:right; margin-top: 35px; margin-right: 10px">
        Back
    </div>
    <div class = "bg stack-parent" style="padding-top: 100px; pointer-events: none;">
        <div id="question-text" class ="paragraph item">
            Here goes the text
        </div>
        <div id="attempts-text" class = "paragraph light-blue" style="font-size:20pt; padding-top: 10px;">
            Enter coordinates (0/3) attempts
        </div>
        <input id="input-field" type="text" class="text-button item" style="pointer-events: all;" placeholder="Response...">
        <div class = "text-button item" @click="submit" style="pointer-events: all;">
            Submit
        </div>
    </div>
    <RouterView />
  </template>

<script>

    import { ref, onMounted } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import allText from '../text/text.json'

    export default {
        setup() {
            const store = useStore();
            const router = useRouter();

            let icon = ref(undefined);

            let numGuesses = 0;

            onMounted(() => {
                setProgressText(0);
                setText();
                setImages();
                document.getElementById("input-field").value = "";
                numGuesses = 0;
            });

            function setImages(){
                let image = "";
                if(allText.questions[store.state.question].icon.toLowerCase() === "cylinder"){
                    if(store.state.progress[store.state.question] == 1){
                        // Show green
                        image = "station_icon01_complete"
                    }
                    else{
                        // Show blue
                        image = "station_icon01"
                    }
                }    
                if(allText.questions[store.state.question].icon.toLowerCase() === "gem"){
                    if(store.state.progress[store.state.question] == 1){
                        // Show green
                        image = "station_icon02_complete"
                    }
                    else{
                        // Show blue
                        image = "station_icon02"
                    }
                }
                if(allText.questions[store.state.question].icon.toLowerCase() === "prism"){
                    if(store.state.progress[store.state.question] == 1){
                        // Show green
                        image = "station_icon03_complete"
                    }
                    else{
                        // Show blue
                        image = "station_icon03"
                    }
                }

                icon.value = image;
            }

            function setText(){
                let questionIndex = store.state.question;
                const questionText = document.getElementById("question-text");

                let thisQuestion = allText.questions[questionIndex];
                let text = "";
                if(store.state.teamName.toLowerCase() === "red"){
                    text = thisQuestion.redtext;
                    
                }
                if(store.state.teamName.toLowerCase() === "blue"){
                    text = thisQuestion.bluetext;
                }
                if(store.state.teamName.toLowerCase() === "green"){
                    text = thisQuestion.greentext;
                }
                text = text.replace(/</g, "&lt;");
                text = text.replace(/>/g, "&gt;");
                questionText.innerHTML = text;

                const firstText = document.getElementById("span1");
                const secondText = document.getElementById("span2");

                firstText.innerHTML = thisQuestion.location;
                secondText.innerHTML = thisQuestion.task;
            }

            function back() {
                router.push("/gamescreen");
            }

            function setProgressText(num){
                const attempts = document.getElementById("attempts-text");
                attempts.innerHTML = "Enter coordinates (" + (num) + "/3) attempts";
            }

            function submit(){
                numGuesses++;
                
                const questionIndex = store.state.question;
                let thisQuestion = allText.questions[questionIndex];
                const hasCorrectAnswer = thisQuestion.answer != undefined;
                const input = document.getElementById("input-field").value.trim();

                if(!hasCorrectAnswer || input.toLowerCase() === thisQuestion.answer.trim().toLowerCase()){
                    // Correct response, bring back to home
                    if(store.state.progress[questionIndex] == 0){
                        store.commit("setQuestionState", {questionState: "correct"});
                    }
                    store.commit("setCompleted", {questionIndex: questionIndex});
                    router.push("/gamescreen");
                }
                else{
                    // Incorrect response
                    const attempts = document.getElementById("attempts-text");
                    setProgressText(numGuesses);
                    if(numGuesses == 3){
                        if(store.state.progress[questionIndex] == 0){
                            store.commit("setQuestionState", {questionState: "incorrect"});
                        }
                        store.commit("setCompleted", {questionIndex: questionIndex});
                        router.push("/gamescreen");
                    }
                }
            }

            return {
                back,
                submit,
                icon
            }
        }
    }

</script>