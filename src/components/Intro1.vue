
<template>
    <div class = "bg">
        <p id="instructions" class = "text">
            Introduction text
        </p>
        <RouterLink to="/intro2" id="intro2">
            <div id="continue" class = "text-button horizontal-center">
                Next
            </div>
        </RouterLink>
    </div>
    <RouterView />
    
  </template>

<script>

    import { onMounted } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
    import { useStore } from 'vuex';
    import allText from '../text/text.json'

    export default {
        setup() {
            const store = useStore();

            onMounted(() => {
                scroll(0,0);

                let teamName = store.state.teamName;
                const introText = document.getElementById("instructions");
                const continueText = document.getElementById("continue");

                if(teamName == "red"){
                    introText.innerHTML = getOneOffText("intro_text_red_1");
                }
                if(teamName == "blue"){
                    introText.innerHTML = getOneOffText("intro_text_blue_1");
                }
                if(teamName == "green"){
                    introText.innerHTML = getOneOffText("intro_text_green_1");
                }

                continueText.innerHTML = getOneOffText("continue_text_1");
            });

            function getOneOffText(id){
                for (let index = 0; index < allText.oneoffs.length; index++) {
                    const element = allText.oneoffs[index];
                    if(element.id === id){
                        return element.text;
                    }
                }
                return "NO TEXT FOUND";
            }
        }
    }

</script>