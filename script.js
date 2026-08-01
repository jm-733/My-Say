const intro = document.getElementById("intro");
const letterBox = document.getElementById("letterBox");
const letter = document.getElementById("letter");
const music = document.getElementById("music");

let started = false;

const message = `Hi Say,

I know you're not really fond of handwritten letters, so here I am, trying to fit into something you're interested in.

We're not a typical couple, yet I can confidently say we're the best. Please know that I appreciate you, and I see you. I notice your quiet ways of caring, the little things you do just to make me laugh, and the motivation you give me, even when it doesn't seem obvious. I see your silent support, and I see everything you do.

Thank you for being the person I can always rely on. Thank you for all the sacrifices you've made just to make my burdens a little lighter. Thank you for the little considerations, like when your head was aching and you really wanted a massage, yet you chose to endure it so I could sleep because I had work later. Thank you for understanding me when I needed it the most. It may not always come in the most normal way, but I appreciate it more than you know.

I'll keep trying my best to understand the words you never say and the lines in your head that you hoped I'd understand.

Let's not waste this love. Let's fight for it.

Palagi.

Yours,

Zam ❤️`;

function typeLetter() {
    let i = 0;

    function type() {
        if (i < message.length) {
            letter.innerHTML =
                message.substring(0, i + 1) +
                '<span class="cursor"></span>';

            i++;
            setTimeout(type, 35);
        } else {
            letter.innerHTML = message;
            fireworks();
        }
    }

    type();
}

function fireworks() {
    for (let i = 0; i < 60; i++) {

        const fw = document.createElement("div");

        fw.className = "firework";
        fw.innerHTML = ["💖", "❤️", "💕", "✨"][Math.floor(Math.random() * 4)];

        fw.style.left = Math.random() * window.innerWidth + "px";
        fw.style.top = Math.random() * window.innerHeight + "px";

        document.body.appendChild(fw);

        setTimeout(() => fw.remove(), 1400);
    }
}

function createPetals() {

    for (let i = 0; i < 35; i++) {

        const petal = document.createElement("div");

        petal.className = "petal";
        petal.innerHTML = "🌸";

        petal.style.left = Math.random() * 100 + "vw";
        petal.style.fontSize = (16 + Math.random() * 16) + "px";
        petal.style.animationDuration = (8 + Math.random() * 8) + "s";
        petal.style.animationDelay = Math.random() * 8 + "s";

        document.body.appendChild(petal);
    }

}

createPetals();

document.addEventListener("click", function(e){

    if(!started){

        started = true;

        intro.style.display = "none";
        letterBox.style.display = "block";

        music.play().catch(() => {});

        typeLetter();
    }

    for(let i=0;i<25;i++){

        const love=document.createElement("div");

        love.className="love";
        love.innerHTML="I LOVE YOU ❤️";

        love.style.left=(e.clientX+(Math.random()-0.5)*250)+"px";
        love.style.top=(e.clientY+(Math.random()-0.5)*250)+"px";
        love.style.fontSize=(18+Math.random()*18)+"px";

        love.style.color=[
            "#ff0066",
            "#ff1493",
            "#ff4d6d",
            "#ff69b4",
            "#ff2e63"
        ][Math.floor(Math.random()*5)];

        document.body.appendChild(love);

        setTimeout(()=>{
            love.remove();
        },2500);

    }

});
