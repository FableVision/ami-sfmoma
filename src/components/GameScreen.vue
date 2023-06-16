<template>
    <div class = "bg">
        <div class = "top-bar">
            <div id="timer" class = "timer">
                15:00
            </div>
            <div class = "earth-text">
                <span class = "white">Data transfer every</span><br><span class = "light-blue">15 Earth minutes</span>
            </div>
        </div>
        <div id="pop-up" class = "pop-up">
            <div id="pop-up-title" style="margin-top: 20px; margin-right: 10px; margin-left: 10px; font-size: 30pt; line-height: 30pt;" class = "title">
                Router Reset Successful
            </div>
            <div id="pop-up-text" style="margin-top: 20px; margin-right: 10px; margin-left: 10px; line-height: 26pt;" class = "paragraph">
                A bunch more text goes here about the next thing to do
            </div>
            <div class = "text-button okay-button" @click="closePopup">
                Okay
            </div>
        </div>
        <div>
            <p class = "game-heading">
                <span class="white">In case of insufficient data find another team or return to </span><span class="light-blue">the void</span><span class="white"> for information exchange.</span>
            </p>
        </div>
        <div id="page1" class = "eight-image-parent">
            <div class="eight-element" @click="clickOption(0)">
                <img id="0" class="eight-image" :src= "(`/src/assets/png/${ icon0 }.png`)">
                <span class="span1">Floor 1</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(1)">
                <img id="1" class="eight-image" :src= "(`/src/assets/png/${ icon1 }.png`)">
                <span class="span1">Floor 2</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(2)">
                <img id="2" class="eight-image" :src= "(`/src/assets/png/${ icon2 }.png`)">
                <span class="span1">Floor 3</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(3)">
                <img id="3" class="eight-image" :src= "(`/src/assets/png/${ icon3 }.png`)">
                <span class="span1">Floor 1</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(4)">
                <img id="4" class="eight-image" :src= "(`/src/assets/png/${ icon4 }.png`)">
                <span class="span1">Floor 2</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(5)">
                <img id="5" class="eight-image" :src= "(`/src/assets/png/${ icon5 }.png`)">
                <span class="span1">Floor 3</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(6)">
                <img id="6" class="eight-image" :src= "(`/src/assets/png/${ icon6 }.png`)">
                <span class="span1">Floor 1</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(7)">
                <img id="7" class="eight-image" :src= "(`/src/assets/png/${ icon7 }.png`)">
                <span class="span1">Floor 2</span><br><span class="light span2">Other text</span>
            </div>
        </div>
        <div id="page2" class = "eight-image-parent">
            <div class="eight-element" @click="clickOption(8)">
                <img id="8" class="eight-image" :src= "(`/src/assets/png/${ icon8 }.png`)">
                <span class="span1">Floor 1</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(9)">
                <img id="9" class="eight-image" :src= "(`/src/assets/png/${ icon9 }.png`)">
                <span class="span1">Floor 2</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(10)">
                <img id="10" class="eight-image" :src= "(`/src/assets/png/${ icon10 }.png`)">
                <span class="span1">Floor 3</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(11)">
                <img id="11" class="eight-image" :src= "(`/src/assets/png/${ icon11 }.png`)">
                <span class="span1">Floor 1</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(12)">
                <img id="12" class="eight-image" :src= "(`/src/assets/png/${ icon12 }.png`)">
                <span class="span1">Floor 2</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(13)">
                <img id="13" class="eight-image" :src= "(`/src/assets/png/${ icon13 }.png`)">
                <span class="span1">Floor 3</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(14)">
                <img id="14" class="eight-image" :src= "(`/src/assets/png/${ icon14 }.png`)">
                <span class="span1">Floor 1</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(15)">
                <img id="15" class="eight-image" :src= "(`/src/assets/png/${ icon15 }.png`)">
                <span class="span1">Floor 2</span><br><span class="light span2">Other text</span>
            </div>
        </div>
        <div id="page3" class = "eight-image-parent">
            <div class="eight-element" @click="clickOption(16)">
                <img id="16" class="eight-image" :src= "(`/src/assets/png/${ icon16 }.png`)">
                <span class="span1">Floor 1</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(17)">
                <img id="17" class="eight-image" :src= "(`/src/assets/png/${ icon17 }.png`)">
                <span class="span1">Floor 2</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(18)">
                <img id="18" class="eight-image" :src= "(`/src/assets/png/${ icon18 }.png`)">
                <span class="span1">Floor 3</span><br><span class="light span2">Other text</span>
            </div>
            <div class="eight-element" @click="clickOption(19)">
                <img id="19" class="eight-image" :src= "(`/src/assets/png/${ icon19 }.png`)">
                <span class="span1">Floor 1</span><br><span class="light span2">Other text</span>
            </div>
        </div>
        <div id="buttons" style="display: flex; justify-content: center; margin-top: 10px;">
            <div id="left-button" class = "directional-button" @click="useArrow(-1)">
                <!-- <img class="arrow-img" src= "../assets/images/arrow_left.png"> -->
                <img class="arrow-img" src= "../assets/images/arrow_left.png">
            </div>
            <div id="right-button" class = "directional-button" @click="useArrow(1)">
                <!-- <img class="arrow-img" src= "../assets/images/arrow_right.png"> -->
                <img class="arrow-img" src= "../assets/images/arrow_right.png">
            </div>
        </div>
        <div style="margin-top: 20px;">
            <div id="progress-text" class="paragraph" style="float:left;">Router Reset: (0/8)</div>
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

        let clockTimer;
        let icon0 = ref(undefined);
        let icon1 = ref(undefined);
        let icon2 = ref(undefined);
        let icon3 = ref(undefined);
        let icon4 = ref(undefined);
        let icon5 = ref(undefined);
        let icon6 = ref(undefined);
        let icon7 = ref(undefined);
        let icon8 = ref(undefined);
        let icon9 = ref(undefined);
        let icon10 = ref(undefined);
        let icon11 = ref(undefined);
        let icon12 = ref(undefined);
        let icon13 = ref(undefined);
        let icon14 = ref(undefined);
        let icon15 = ref(undefined);
        let icon16 = ref(undefined);
        let icon17 = ref(undefined);
        let icon18 = ref(undefined);
        let icon19 = ref(undefined);

        let page = 0;

        onMounted(() => {
            setIcons();
            setText();
            scroll(0,0);
            setClock();
            handlePopup();
            goToPage(store.state.currentQuestionPage);
            clockTimer = window.setInterval(() => {
                setClock();
            },1000);
        });

        function setIcons(){
            let icons = [icon0, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19];
            
            for (let index = 0; index < 20; index++) {
                let image = "";
                if(allText.questions[index].icon.toLowerCase() === "cylinder"){
                    if(store.state.progress[index] == 1){
                        // Show green
                        image = "station_icon01_complete"
                    }
                    else{
                        // Show blue
                        image = "station_icon01"
                    }
                }    
                if(allText.questions[index].icon.toLowerCase() === "gem"){
                    if(store.state.progress[index] == 1){
                        // Show green
                        image = "station_icon02_complete"
                    }
                    else{
                        // Show blue
                        image = "station_icon02"
                    }
                }
                if(allText.questions[index].icon.toLowerCase() === "prism"){
                    if(store.state.progress[index] == 1){
                        // Show green
                        image = "station_icon03_complete"
                    }
                    else{
                        // Show blue
                        image = "station_icon03"
                    }
                }
                
                icons[index].value = image;
            }
        }

        function goToPage(currentPage){
            const page1 = document.getElementById("page1");
            const page2 = document.getElementById("page2");
            const page3 = document.getElementById("page3");

            const leftButton = document.getElementById("left-button");
            const rightButton = document.getElementById("right-button");

            if(currentPage == 0){
                page1.style.display = "block";
                page2.style.display = "none";
                page3.style.display = "none";
                leftButton.style.opacity = 0;
                rightButton.style.opacity = 100;
            }
            else if(currentPage == 1){
                page1.style.display = "none";
                page2.style.display = "block";
                page3.style.display = "none";
                leftButton.style.opacity = 100;
                rightButton.style.opacity = 100;
            }
            else if(currentPage == 2){
                page1.style.display = "none";
                page2.style.display = "none";
                page3.style.display = "block";
                leftButton.style.opacity = 100;
                rightButton.style.opacity = 0;
            }

            store.commit("setQuestionPage", {questionState: currentPage});
            page = currentPage;
        }

        function setText(){
            const firstTexts = document.getElementsByClassName("span1");
            for (let index = 0; index < firstTexts.length; index++) {
                const element = firstTexts[index];
                element.innerHTML = allText.questions[index].location;
            }

            const secondTexts = document.getElementsByClassName("span2 light");
            for (let index = 0; index < firstTexts.length; index++) {
                const element = secondTexts[index];
                element.innerHTML = allText.questions[index].task;
            }

            const progressText = document.getElementById("progress-text");
            progressText.innerHTML = "Routers Reset: (" + getTotalCompleted().toString() + "/8)";
        }

        function getTotalCompleted(){
            let count = 0;
            for (let index = 0; index < 20; index++) {
                if(store.state.progress[index] == 1){
                    count = count + 1;
                }
            }
            return count;
        }

        function setClock(optionIndex){
            const timerText = document.getElementById("timer");
            if(timerText == null){
                stopTimer();
                return;
            }

            let time = new Date();

            let minutes = (59 - time.getMinutes()) % 15;
            let seconds = (59 - time.getSeconds());
            
            timerText.innerHTML = minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
        }

        function clickOption(optionIndex){
            if(clockTimer != null){
                window.clearInterval(clockTimer);
                store.commit("setQuestion", {questionIndex: optionIndex});
                router.push("/questionscreen");
            }
        }

        function stopTimer(){
            if(clockTimer != null){
                window.clearInterval(clockTimer);
            }
        }

        function handlePopup(){
            const status = store.state.questionStatus;
            if(status === "none"){
                closePopup();
            }
            else if(status === "correct"){
                const popupTitle = document.getElementById("pop-up-title");
                const popupText = document.getElementById("pop-up-text");
                const questionIndex = store.state.question;
                let thisQuestion = allText.questions[questionIndex];

                popupTitle.innerHTML = thisQuestion.task + " SUCCESSFUL";
                let text = thisQuestion.correctresponse;
                text = text.replace(/</g, "&lt;");
                text = text.replace(/>/g, "&gt;");
                popupText.innerHTML = text;
                
            }
            else if(status === "incorrect"){
                const popupTitle = document.getElementById("pop-up-title");
                const popupText = document.getElementById("pop-up-text");
                const questionIndex = store.state.question;
                let thisQuestion = allText.questions[questionIndex];

                popupTitle.innerHTML = thisQuestion.task + " UNSUCCESSFUL";
                let text = thisQuestion.incorrectresponse;
                text = text.replace(/</g, "&lt;");
                text = text.replace(/>/g, "&gt;");
                popupText.innerHTML = text;
            }
            store.commit("setQuestionState", {questionState: "none"});
        }

        function closePopup(){
            document.getElementById("pop-up").style.display = "none";
            checkWin();
        }

        function useArrow(direction){
            page += direction;
            if(page < 0) page = 0;
            if(page > 2) page = 2;

            goToPage(page);
        }

        function checkWin(){
            if(getTotalCompleted() >= 8){
                router.push("/endscreen");
            }
        }

        return {
            icon0,
            icon1,
            icon2,
            icon3,
            icon4,
            icon5,
            icon6,
            icon7,
            icon8,
            icon9,
            icon10,
            icon11,
            icon12,
            icon13,
            icon14,
            icon15,
            icon16,
            icon17,
            icon18,
            icon19,
            closePopup,
            setClock,
            clickOption,
            useArrow,
            goToPage
        }
    }
}

</script>