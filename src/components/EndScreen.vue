<template>
    <div class="stack-parent">
        <div class = "top-item" style="min-height: 150px">
            
            
        </div>
        <div id="robot-text" class = "robot item">
            ROUTER<br>RESET!
        </div>
        <div class = "top-item" style="min-height: 75px">
        </div>
        <div id="intro-text" class = "paragraph item">
            Welcome to AIEEEEE intercompany Tech Support and HR
        </div>
        <!-- <a href="https://www.google.com/" id="link" class="paragraph" style="color:aquamarine; text-decoration:underline;">
            Complete this google form
        </a> -->
        <div class = "text-button item" @click="onClick">
            Replay Game
        </div>
    </div>
    <img src="../assets/images/main_background_empty.png" class = "background-image">
    <RouterView />
  </template>

<script>

    import { onMounted } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    import allText from '../text/text.json'

    export default {
        setup() {
            const store = useStore();
            const router = useRouter();

            onMounted(() => {
                scroll(0,0);

                const text = document.getElementById("intro-text");
                text.innerHTML = getOneOffText("end_text");
            });

            function getOneOffText(id){
                for (let index = 0; index < allText.oneoffs.length; index++) {
                    const element = allText.oneoffs[index];
                    if(element.id === id){
                        let string = element.text;
                        string = string.replace(/</g, "&lt;");
                        string = string.replace(/>/g, "&gt;");
                        return string;
                    }
                }
                return "NO TEXT FOUND";
            }

            function onClick(){
                store.commit("reset");
                router.push("/");
            }

            return{
                onClick
            }
        }
    }

</script>