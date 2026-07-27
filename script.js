/* ======================================
   PROJECT AURORA
   VERSION 1.0
====================================== */

const intro = document.getElementById("intro");
const welcome = document.getElementById("welcome");
const typewriter = document.getElementById("typewriter");
const beginBtn = document.getElementById("beginBtn");
const music = document.getElementById("music");

/* =====================================
        INTRO
====================================== */

const introProgress=document.getElementById("introProgress");

const introPercent=document.getElementById("introPercent");

const introMessage=document.getElementById("introMessage");

const startJourney=document.getElementById("startJourney");

const assets = [

    "assets/images/Background-photo.png",

    "assets/images/Photo1.jpg",
    "assets/images/Photo2.jpg",
    "assets/images/Photo3.jpg",
    "assets/images/Photo4.jpg",
    "assets/images/Photo5.jpg",
    "assets/images/Photo6.jpg",
    "assets/images/Photo7.jpg",
    "assets/images/Photo8.jpg",
    "assets/images/Photo9.jpg",
    "assets/images/Photo10.jpg",
    "assets/images/Photo11.jpg",
    "assets/images/Photo12.jpg",


    "assets/images/Birthday-photo.png",

    "assets/audio/birthday-message.mp3",

];


const loadingMessages = [

"Preparing your birthday surprise... ❤️",

"Collecting our memories... 📸",

"Wrapping your gifts... 🎁",

"Filling the sky with stars... ✨",

"Adding a little magic... 💖",

"Almost ready..."

];

let loaded = 0;

function assetLoaded(){

    loaded++;

    const percent = Math.round((loaded / assets.length) * 100);

    introProgress.style.width = percent + "%";
    introPercent.innerHTML = percent + "%";

    if(percent < 20){

        introMessage.innerHTML = loadingMessages[0];

    }else if(percent < 40){

        introMessage.innerHTML = loadingMessages[1];

    }else if(percent < 60){

        introMessage.innerHTML = loadingMessages[2];

    }else if(percent < 80){

        introMessage.innerHTML = loadingMessages[3];

    }else if(percent < 100){

        introMessage.innerHTML = loadingMessages[4];

    }else{

        introMessage.innerHTML = loadingMessages[5];

    }

    if(loaded === assets.length){

        introPercent.style.display = "none";
        document.querySelector(".intro-bar").style.display = "none";

        introMessage.innerHTML = `
        <p style="font-size:22px; line-height:1.8;">
        ❤️<br><br>
        Take your time and enjoy your surprise, and don't stop until you reach the end.
        </p>`;

        setTimeout(()=>{

            introMessage.innerHTML = "";

            typeIntro();

        },2500);

    }

}

assets.forEach(asset=>{

    if(asset.endsWith(".mp3")){

        const audio = new Audio();

        audio.addEventListener("canplaythrough", assetLoaded);

        audio.addEventListener("error", assetLoaded);

        audio.src = asset;

    }else{

        const img = new Image();

        img.onload = assetLoaded;
        img.onerror = assetLoaded;

        img.src = asset;

    }

});


const introLines=[

"23 years ago, a little cutie pie was born on this very day.",

"She grew up to become absolutely hot and gorgeous, and somehow managed to steal one fine boy's heart without even trying.",

"This little website is a celebration of you, our story and just a tiny reminder of how special you are to me.",

"So, welcome to a little corner of the internet I made with love, just for you.",

"Happy Birthday, Suzan. ❤️",


];


let line=0;

let introLine = 0;

let introChar = 0;

function typeIntro(){

    if(introLine >= introLines.length){

        setTimeout(()=>{

            startJourney.style.display="inline-block";

            startJourney.classList.add("fadeIn");

        },800);

        return;

    }

    if(introChar === 0){

        introMessage.innerHTML += "<p id='line"+introLine+"'></p>";

    }

    const currentLine = document.getElementById("line"+introLine);

    currentLine.innerHTML += introLines[introLine].charAt(introChar);

    introChar++;

    if(introChar < introLines[introLine].length){

        setTimeout(typeIntro,45);

    }

    else{

        introChar = 0;

        introLine++;

        setTimeout(typeIntro,900);

    }

}


startJourney.addEventListener("click",()=>{

    intro.classList.remove("active");

    welcome.classList.add("active");

    startTyping();

});

const lines = [

"Happy Birthday, my love. ❤️",

"Today is all about celebrating you.",

"I hope this makes you smile as much as you've made me smile.",

"Now... let me tell you our story."

];


/* -------------------------
   Typewriter
-------------------------- */

let lineIndex = 0;
let charIndex = 0;

function startTyping() {

    if (lineIndex >= lines.length) return;

    let current = lines[lineIndex];

    const timer = setInterval(() => {

        typewriter.innerHTML += current.charAt(charIndex);

        charIndex++;

        if (charIndex >= current.length) {

            clearInterval(timer);

            typewriter.innerHTML += "<br><br>";

            charIndex = 0;

            lineIndex++;

            setTimeout(startTyping, 700);

        }

    }, 45);

}


/* =====================================
        PAGE REFERENCES
====================================== */

const chapter1 = document.getElementById("chapter1");

const chapter2 = document.getElementById("chapter2");

const chapter3 = document.getElementById("chapter3");

const chapter4 = document.getElementById("chapter4");

const chapter5 = document.getElementById("chapter5");

const chapter6 = document.getElementById("chapter6");

const chapter7 = document.getElementById("chapter7");


/* =====================================
        PAGE SWITCHER
====================================== */

function goToPage(current,next){

    current.classList.add("fadeOut");

    setTimeout(()=>{

        current.classList.remove("active");

        current.classList.remove("fadeOut");

        next.classList.add("active");

        next.classList.add("fadeIn");

    },800);

}



/* -------------------------
   Music
-------------------------- */

const storyText = document.getElementById("storyText");
const nextChapter = document.getElementById("nextChapter");

const story = [

"Every beautiful story has a beginning, and ours started a few years ago",

"I know you’d be surprised I said ‘few years’… To be honest, I can't even remember how we got each other's number. Maybe it was Facebook... or maybe you saw one very fine boy and decided to find his number somewhere. 😂😉 I guess we'll never know.",

"Whatever the case, I’m grateful it happened.",

"We chatted for a while before life happened. We slowly became status viewers, I'd see yours every now and then, smile, and think to myself, 'What a fine girl'...",

"Then, fast forward to this year.",

"One day, I replied to your status. We talked for a bit, drifted back into our usual routine of being status viewers... until another picture of yours showed up. Before I knew it, I found myself back in your DM.",

"At first, it was nothing more than admiration. I thought you were beautiful, fun to talk to, and yes... incredibly hot too.😉",

"Falling in love wasn't part of the plan but then you happened.",

"It wasn't just your beautiful eyes anymore. It was your energy, your straightforwardness, the effortless way we connected, and how comfortable you made me feel without even realizing it.",

"Little by little, I started looking forward to your messages. I'd catch myself smiling whenever your name appeared on my screen and our conversations became the better part of my day.",

"One day, I stopped seeing you as someone I simply admired. I realized I had fallen in love.",

"From that moment, I knew I didn't want to admire you from a distance anymore. I wanted you to be mine.",

"And somehow... here we are.",

"It’s amazing how ‘BIG BIG THINGS NI MO LIKE’ could become the beginning of something beautiful.",

"And the best part?",

"We’re just getting started.",


];

beginBtn.addEventListener("click",()=>{

    goToPage(welcome, chapter2);

    storyText.innerHTML = "";

    story.forEach(paragraph=>{

        const p = document.createElement("p");

        p.textContent = paragraph;

        storyText.appendChild(p);

    });

    nextChapter.style.display = "inline-block";
    nextChapter.classList.add("fadeIn");

    chapter2.scrollTop = 0;

});

let storyLine = 0;

function typeStory(){

}


/* =====================================
        CHAPTER THREE
====================================== */

// Continue button on Our Story page

nextChapter.addEventListener("click",()=>{

    birthdayAnimation();

    goToPage(chapter2,chapter3);

    setTimeout(()=>{

        randomizeBalloons();

    },850);

});


// Birthday confetti animation

function birthdayAnimation(){

    createConfetti();

}


// Confetti generator

function createConfetti(){

    for(let i=0;i<120;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.animationDuration=(3+Math.random()*4)+"s";

        confetti.style.background=
        `hsl(${Math.random()*360},90%,60%)`;

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },7000);

    }

}


/* ===============================
   GENERATE STARS
=============================== */

const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

    const star=document.createElement("span");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    const size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.animationDelay=Math.random()*5+"s";

    stars.appendChild(star);

}

/* ===============================
   FLOATING HEARTS
=============================== */

setInterval(createHeart,3000);

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.className="floatingHeart";

    heart.style.left=Math.random()*90+"vw";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

}



/* =====================================
        CHAPTER THREE
====================================== */

// Balloon page elements

const balloons = document.querySelectorAll('.balloon');
const loveButton = document.getElementById('loveButton');

function randomizeBalloons(){

    const usedPositions=[];

    balloons.forEach(balloon=>{

        let left;
        let top;
        let valid=false;

        while(!valid){

            left=Math.random()*75+5;

            top=Math.random()*35+22;

            valid=true;

            for(const pos of usedPositions){

                const dx=left-pos.left;
                const dy=top-pos.top;

                const distance=Math.sqrt(dx*dx+dy*dy);

                if(distance<22){

                    valid=false;

                    break;

                }

            }

        }

        usedPositions.push({left,top});

        balloon.style.left=left+"%";

        balloon.style.top=top+"%";

    });

}

// Create popup modal

const balloonModal = document.createElement('div');
balloonModal.className = 'balloon-modal';

balloonModal.innerHTML = `
    <div class="balloon-card">
        <button class="close-balloon">✕</button>
        <div id="balloonContent"></div>
    </div>
`;

document.body.appendChild(balloonModal);

const balloonContent = document.getElementById('balloonContent');
const closeBalloon = document.querySelector('.close-balloon');


// Messages inside balloons

const balloonMessages = [

`<h2>🥹</h2>
<p>I wish I could teleport today... just to steal a birthday kiss, hug you, make you laugh and remind you how beautiful you are.</p>`,

`<h2>🌹</h2>
<p>May your eyes and smile never lose its magic... because it's one of my favorite places to be.</p>`,

`<h2>✨</h2>
<p>I hope this year brings you endless happiness, answered prayers, and countless reasons to smile...preferably because of me.</p>`,

`<h2>❤️</h2>
<p>I hope life spoils you this year.. but not as much as i plan to.</p>`,

`<h2>🎂</h2>
<p>My biggest wish isn't just for today, it's that years from now, we'll look back at this birthday together and smile because it was only the beginning.</p>`

];


// Balloon logic

let poppedCount = 0;

balloons.forEach((balloon,index)=>{

    balloon.addEventListener('click',()=>{

        // Prevent double popping

        if(balloon.classList.contains('popped')) return;

        // Pop animation

        balloon.classList.add('popped');

        balloon.style.transform = 'scale(1.5)';
        balloon.style.opacity = '0';

        setTimeout(()=>{

            balloon.style.display = 'none';

        },400);

        // Show message

        balloonContent.innerHTML = balloonMessages[index];

        balloonModal.classList.add('show');

        // Count popped balloons

        poppedCount++;

        // Reveal continue button when all are popped

        if(poppedCount === balloons.length){

            setTimeout(()=>{

                loveButton.style.display = 'inline-block';

                loveButton.classList.add('fadeIn');

            },600);

        }

    });

});


// Close popup

closeBalloon.addEventListener('click',()=>{

    balloonModal.classList.remove('show');

});

balloonModal.addEventListener('click',(e)=>{

    if(e.target === balloonModal){

        balloonModal.classList.remove('show');

    }

});


// Continue to 10 Reasons page

loveButton.addEventListener('click',()=>{

    goToPage(chapter3,chapter4);

});


/* =====================================
        CHAPTER FOUR
====================================== */

const memoryButton = document.getElementById("memoryButton");

const loveModal = document.getElementById("loveModal");
const loveContent = document.getElementById("loveContent");
const closeLove = document.getElementById("closeLove");

const loveHearts = document.querySelectorAll(".love-heart");
const loveCard = document.querySelector(".loveCard");

let heartsOpened = 0;

const reasons = [

{
    title:"Your Eyes ",
    color:"#ff4d6d",
    message:" I think this was pretty obvious. Those beautiful eyes had me in trouble from the very beginning. Seeing them makes me fall in love all over again"
},

{
    title:"Your Smile 😊",
    color:"#ff66b3",
    message:"I love the way you smile, especially when looking at my lips on video call. Your smile has a way of making even my bad days brighter, unfortunately I don't see it enough."
},

{
    title:"Your Heart ",
    color:"#b266ff",
    message:"You're kind in ways that don't ask for attention, and that's one of the things i admire most about you."
},

{
    title:"Your beauty ",
    color:"#4da6ff",
    message:"You're effortlessly gorgeous. Every picture you send somehow becomes my new favorite..even though I have to beg before I get them."
},

{
    title:"The little things",
    color:"#3ddc84",
    message:"The random messages, reels, challenges, prayers, the little habits that make you uniquely you, they've all found a place in my heart."
},

{
    title:"The peace you bring",
    color:"#66e0ff",
    message:"You make my days brighter without even trying, i forget my worries sometimes just by the thought of you."
},

{
    title:"Your Energy ",
    color:"#ff944d",
    message:"I love the fact that you know what you want and you go for it."
},

{
    title:"Your Tenderness",
    color:"#ffd633",
    message:"You make me feel loved everyday. I won't talk much on this but you're softer than you think and I love that about you."
},

{
    title:"Your Boobs😊",
    color:"#ffffff",
    message:"Do you really expect me to write something here ...."
},

{
    title:"Because you're you",
    color:"#ff1744",
    message:`
    <h2>❤️</h2>

    <p>
    If someone asked me my favorite reason...
    </p>

    <p>
    It wouldn't be one thing.
    </p>

    <p>
    It would simply be...
    </p>

    <h2>You.</h2>

    <br>

    <p><strong>With love,</strong></p>

    <h3>Jimmy ❤️</h3>
    `
}

];


loveHearts.forEach((heart,index)=>{

heart.addEventListener("click",()=>{

const reason = reasons[index];

loveCard.style.border = `4px solid ${reason.color}`;

loveCard.style.boxShadow = `0 0 35px ${reason.color}`;

loveContent.innerHTML = `
<h2>${reason.title}</h2>
<br>
<p>${reason.message}</p>
`;

loveModal.classList.add("show");

if(!heart.classList.contains("opened")){

heart.classList.add("opened");

heart.style.filter=`drop-shadow(0 0 20px ${reason.color})`;

heartsOpened++;

}

if(heartsOpened===10){

memoryButton.style.display="inline-block";

memoryButton.classList.add("fadeIn");

}

});

});

closeLove.onclick=()=>{

loveModal.classList.remove("show");

};

memoryButton.addEventListener("click",()=>{

    goToPage(chapter4,chapter5);

    currentPhoto = 0;

    setTimeout(()=>{

        showPhotos();

        createDots();

        letterButton.style.display="none";

    },850);

});


/* =====================================
        CHAPTER FIVE
====================================== */

const letterButton = document.getElementById("letterButton");

const galleryImage = document.getElementById("galleryImage");

const galleryCard = document.querySelector(".gallery-card");

const galleryCaption = document.getElementById("galleryCaption");

const galleryDots = document.getElementById("galleryDots");

const nextPhoto = document.getElementById("nextPhoto");

const prevPhoto = document.getElementById("prevPhoto");

const swipeHint = document.getElementById("swipeHint");

let hasSwiped = false;


/* Show photos one after another */

const memories=[

{
image:"assets/images/Photo1.jpg",
caption:"This is the first picture you ever sent me. It's now my wallpaper btw ❤️"
},

{
image:"assets/images/Photo2.jpg",
caption:"Where it all started. The day we started dating."
},

{
image:"assets/images/Photo3.jpg",
caption:"Where we are now. The love thing is sweeping her off her feet."
},

{
image:"assets/images/Photo4.jpg",
caption:"Well well well.. what is a birthday without a throwback? ❤️"
},

{
image:"assets/images/Photo5.jpg",
caption:"Bombastic side eye. My baby feeling funky ❤️"
},

{
image:"assets/images/Photo6.jpg",
caption:"Shy shy fine girl... enough with the throwbacks"
},

{
image:"assets/images/Photo7.jpg",
caption:"Dey play.. another throwback. My innocent church girl"
},

{
image:"assets/images/Photo8.jpg",
caption:"Hot girl since the 80's ❤️"
},

{
image:"assets/images/Photo9.jpg",
caption:"Wow, thank God for growth......  BBT NI MO LIKE"
},

{
image:"assets/images/Photo10.jpg",
caption:"Beautiful then. Beautiful now. Beautiful always."
},

{
image:"assets/images/Photo11.jpg",
caption:"Happy Super Birthday."
},

{
image:"assets/images/Photo12.jpg",
caption:"LITTLE MISS CEO. MONEY SURE LOOKS GOOD ON YOU❤️"
}

];

let currentPhoto=0;

function createDots(){

    galleryDots.innerHTML="";

    memories.forEach((_,index)=>{

        const dot=document.createElement("span");

        dot.classList.add("dot");

        if(index===currentPhoto){

            dot.classList.add("active");

        }

        galleryDots.appendChild(dot);

    });

}

function showPhotos(direction="next"){

    galleryCard.style.opacity="0";
    galleryCard.style.transition=".35s";

    galleryCard.style.transform=
        direction==="next"
        ? "translateX(50px)"
        : "translateX(-50px)";

    setTimeout(()=>{

        galleryImage.src=memories[currentPhoto].image;

        galleryCaption.innerHTML=memories[currentPhoto].caption;

        createDots();

        galleryCard.style.opacity="1";

        galleryCard.style.transform="translateX(0)";

    },180);

}


let startX = 0;

galleryCard.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

galleryCard.addEventListener("touchend",(e)=>{

    const endX = e.changedTouches[0].clientX;

    if(!hasSwiped){

        hasSwiped = true;

        swipeHint.style.opacity = "0";

        setTimeout(()=>{

            swipeHint.style.display = "none";

        },400);

    }

    if(startX-endX>50){

        if(currentPhoto<memories.length-1){

            currentPhoto++;

            showPhotos("next");

        }

    }

    if(endX-startX>50){

        if(currentPhoto>0){

            currentPhoto--;

            showPhotos("prev");

        }

    }

    if(currentPhoto===memories.length-1){

        letterButton.style.display="inline-block";

        letterButton.classList.add("fadeIn");

    }

});

letterButton.addEventListener("click",()=>{

    goToPage(chapter5,chapter6);

    envelope.style.display="block";

    envelope.classList.remove("open");

    letterPaper.style.display="none";

    letterPaper.classList.remove("open");

    letterText.innerHTML="";

    promiseButton.style.display="none";

});

nextPhoto.addEventListener("click",()=>{

    if(currentPhoto<memories.length-1){

        currentPhoto++;

        showPhotos("next");

    }

    if(currentPhoto===memories.length-1){

        letterButton.style.display="inline-block";

        letterButton.classList.add("fadeIn");

    }

});

prevPhoto.addEventListener("click",()=>{

    if(currentPhoto>0){

        currentPhoto--;

        showPhotos("prev");

    }

});


/* =====================================
        CHAPTER SIX
====================================== */

const envelope=document.getElementById("envelope");

const letterPaper=document.getElementById("letterPaper");

const letterText=document.getElementById("letterText");

const promiseButton=document.getElementById("promiseButton");



const letterMessage = `

To My Beautiful Girl,

Happy Birthday, my love. ❤️

Today isn't just another date on the calendar. It's the day someone incredibly special was born. A day that, without either of us knowing it, would one day become important to me because it gave the world my girlfriend.

If someone had told me a while ago that a simple reply to a WhatsApp status would lead me here, writing a birthday letter to the girl who now occupies my thoughts every single day, I probably would've laughed and said, "Na lie." Yet here we are, and I honestly wouldn't prefer it any other way.

Knowing you has been very unexpected but beautiful.

You came into my life so naturally that I didn't even notice the moment you became a part of it. One conversation became many. A few laughs became something I looked forward to every day. Before I knew it, seeing your name on my screen had become enough to brighten my mood, and hearing from you became one of my favorite parts of every day.

What I love most isn't just how beautiful you are, although I still think your eyes should come with a warning because they've caused me more trouble than you'll ever know. 😉 It's your heart. Your energy. The way you make me feel comfortable just by being yourself.

You have this beautiful way of making me feel special without even trying.

The truth is, we haven't even met in person yet, and somehow you've already become such an important part of my life. That alone reminds me that real connections aren't measured by distance but by the way two hearts find each other despite it.

I can't wait for the day I finally get to see you. Not through pictures or video calls, but standing right in front of me. I can't wait to hear your laugh without a speaker, to look into those beautiful eyes without a screen between us, and to create memories that we'll one day laugh about for years to come.

I don't know exactly what the future holds, but I do know this:

I want to keep discovering it with you.

I want to celebrate your victories, encourage you through your challenges, make you laugh when life gets overwhelming, and remind you every chance I get just how loved you are.

As you step into this new year of your life, I pray that God surrounds you with peace, joy, favor, good health, and opportunities beyond anything you've imagined. I pray He keeps your smile bright, protects your heart, and grants every righteous desire you carry within it.

Thank you for saying yes to us and for being the beautiful soul that you are.

Happy Birthday once again, my love.

Your Fine Boy ❤️

`;



envelope.addEventListener("click",()=>{

    envelope.classList.add("open");

    setTimeout(()=>{

        envelope.style.display="none";

        letterPaper.style.display="block";

        letterPaper.classList.add("open");

    },800);

    setTimeout(()=>{

        typeLetter();

    },2000);

});


function typeLetter(){

    let i=0;

    letterText.innerHTML="";

    const timer=setInterval(()=>{

        letterText.innerHTML+=letterMessage.charAt(i);

        i++;

        if(i>=letterMessage.length){

            clearInterval(timer);

            promiseButton.style.display="inline-block";

        }

    },35);

}

promiseButton.addEventListener("click",()=>{

    goToPage(chapter6,chapter7);

    resetVoicePage();

    music.pause();

    music.currentTime = 0;

});


/* =====================================
        CHAPTER SEVEN
====================================== */

const birthdayAudio=document.getElementById("birthdayAudio");

const finalMessage=document.getElementById("finalMessage");

const voicePhoto=document.querySelector(".voice-photo");


function resetVoicePage(){

    birthdayAudio.pause();

    birthdayAudio.currentTime = 0;

    playPause.innerHTML = "▶";

    progress.style.width = "0%";

    currentTime.innerHTML = "0:00";

    voicePhoto.classList.remove("playing");

    playPause.classList.remove("playing");

    finalMessage.style.display = "none";

    clearInterval(heartInterval);

}


const playPause=document.getElementById("playPause");

const progress=document.getElementById("progress");

const currentTime=document.getElementById("currentTime");

const duration=document.getElementById("duration");


let heartInterval;

playPause.addEventListener("click",()=>{

    if(birthdayAudio.paused){

        birthdayAudio.play();

        playPause.innerHTML="❚❚";

        playPause.classList.add("playing");

        voicePhoto.classList.add("playing");

        heartInterval=setInterval(createVoiceHeart,700);

    }

    else{

        birthdayAudio.pause();

        playPause.innerHTML="▶";

        playPause.classList.remove("playing");

        voicePhoto.classList.remove("playing");

        clearInterval(heartInterval);

    }

});


birthdayAudio.addEventListener("loadedmetadata",()=>{

    duration.innerHTML=formatTime(birthdayAudio.duration);

});


birthdayAudio.addEventListener("timeupdate",()=>{

    currentTime.innerHTML=formatTime(birthdayAudio.currentTime);

    progress.style.width=(birthdayAudio.currentTime/birthdayAudio.duration)*100+"%";

});


birthdayAudio.addEventListener("ended",()=>{

    playPause.innerHTML="▶";

    playPause.classList.remove("playing");

    voicePhoto.classList.remove("playing");

    clearInterval(heartInterval);

    finalMessage.style.display="block";

});


function formatTime(time){

    const mins=Math.floor(time/60);

    const secs=Math.floor(time%60);

    return mins+":"+(secs<10?"0"+secs:secs);

}

const progressContainer=document.querySelector(".progress-container");

    progressContainer.addEventListener("click",(e)=>{

    const width=progressContainer.clientWidth;

    const click=e.offsetX;

    birthdayAudio.currentTime=(click/width)*birthdayAudio.duration;

});


function createVoiceHeart(){

    const heart=document.createElement("div");

    heart.className="floating-heart";

    heart.innerHTML="❤️";

    const rect=voicePhoto.getBoundingClientRect();

    heart.style.left=(rect.left+rect.width/2)+"px";

    heart.style.top=(rect.top+rect.height/2)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },4000);

}