<template>
    <div style="font-family:'Light'; position:absolute; left:-1000px; visibility:hidden;">Owen Hey was here</div>
    <div style="font-family:'Medium'; position:absolute; left:-1000px; visibility:hidden;">Owen Hey was here</div>
    <div style="font-family:'Nunito'; position:absolute; left:-1000px; visibility:hidden;">Owen Hey was here</div>
    <div style="font-family:'Phosphate'; position:absolute; left:-1000px; visibility:hidden;">Owen Hey was here</div>
    <div style="background-image:url('../assets/png/main_background_empty.png'); position:absolute; left:-1000px; visibility:hidden;"></div>
    <div style="background-image:url('../assets/png/station_icon01.png'); position:absolute; left:-1000px; visibility:hidden;"></div>
    <div style="background-image:url('../assets/png/station_icon02.png'); position:absolute; left:-1000px; visibility:hidden;"></div>
    <div style="background-image:url('../assets/png/station_icon03.png'); position:absolute; left:-1000px; visibility:hidden;"></div>
    <div style="background-image:url('../assets/png/station_icon01_complete.png'); position:absolute; left:-1000px; visibility:hidden;"></div>
    <div style="background-image:url('../assets/png/station_icon01_complete.png'); position:absolute; left:-1000px; visibility:hidden;"></div>
    <div style="background-image:url('../assets/png/station_icon01_complete.png'); position:absolute; left:-1000px; visibility:hidden;"></div>

    <div class="stack-parent">
        <div class = "top-item">
            
        </div>
        <div id="intro-text" class = "paragraph item">
            Welcome to AIEEEEE intercompany Tech Support and HR
        </div>
        <input id="input-field" type="text" class="text-button item" placeholder="Employee ID...">
        <div class = "text-button item" @click="onClick">
            Submit
        </div>
        <img src="../assets/images/outage.png" class = "item outage">
        
    </div>
    <img src="../assets/images/main_background.png" class = "background-image">
    <RouterView />
  </template>

<script>
    import { onMounted } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import allText from '../text/text.json'

    export default {
        setup() {
            const store = useStore();
            const router = useRouter();

            let redTeamName = getOneOffText("red_team_id");
            let blueTeamName = getOneOffText("blue_team_id");
            let greenTeamName = getOneOffText("green_team_id");

            onMounted(() => {
                document.getElementById("input-field").value = "";
                document.getElementById("intro-text").innerHTML = getOneOffText("welcome_text");
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

            function onClick() {
                let input = document.getElementById("input-field").value.trim();

                if(input.toLowerCase() === redTeamName.toLowerCase()){
                    store.commit('setRed');
                    router.push('/intro1');
                }
                if(input.toLowerCase() === blueTeamName.toLowerCase()){
                    store.commit('setBlue');
                    router.push('/intro1');
                }
                if(input.toLowerCase() === greenTeamName.toLowerCase()){
                    store.commit('setGreen');
                    router.push('/intro1');
                }
            }

            return {
                onClick
            }
        }
    }

</script>