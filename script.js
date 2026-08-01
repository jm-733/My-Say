const PASSWORD = "ourforever"; // Change this to your own password

document.body.innerHTML = `
<div id="lockScreen">
    <div class="lock-card">
        <div class="heart">❤️</div>
        <h1>For Say</h1>
        <p>This letter is waiting just for you.</p>

        <input
            type="password"
            id="passwordInput"
            placeholder="Enter our secret..."
        >

        <button id="unlockBtn">
            Unlock My Heart ❤️
        </button>

        <p id="errorMessage"></p>
    </div>
</div>
`;

const style = document.createElement("style");
style.innerHTML = `
body{
    margin:0;
    font-family:Georgia,serif;
    background:linear-gradient(135deg,#ff9dbb,#ffd6e8,#fff4f8);
    overflow:hidden;
}

#lockScreen{
    position:fixed;
    inset:0;
    display:flex;
    justify-content:center;
    align-items:center;
}

.lock-card{
    width:360px;
    max-width:90%;
    background:rgba(255,255,255,.88);
    backdrop-filter:blur(10px);
    border-radius:25px;
    padding:40px;
    text-align:center;
    box-shadow:0 20px 45px rgba(0,0,0,.15);
    animation:fadeIn .8s;
}

.heart{
    font-size:70px;
    animation:beat 1.2s infinite;
}

h1{
    color:#d63384;
    margin-top:10px;
}

p{
    color:#555;
}

input{
    width:100%;
    padding:14px;
    margin-top:25px;
    border:none;
    border-radius:12px;
    background:#ffe8ef;
    font-size:16px;
    outline:none;
}

button{
    width:100%;
    margin-top:18px;
    padding:15px;
    border:none;
    border-radius:50px;
    background:#ff4d88;
    color:white;
    font-size:18px;
    cursor:pointer;
    transition:.3s;
}

button:hover{
    transform:scale(1.05);
    box-shadow:0 0 20px #ff7aa8;
}

#errorMessage{
    color:#d80032;
    margin-top:15px;
    min-height:22px;
}

@keyframes beat{
    0%,100%{transform:scale(1);}
    50%{transform:scale(1.15);}
}

@keyframes fadeIn{
    from{
        opacity:0;
        transform:translateY(25px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}
`;

document.head.appendChild(style);

document.getElementById("unlockBtn").onclick = () => {

    const password = document.getElementById("passwordInput").value;

    if(password === PASSWORD){

        location.reload();

    }else{

        document.getElementById("errorMessage").innerHTML =
        "💔 That's not our secret.";

    }

};
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
