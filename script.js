function unlock(){

    const password = document.getElementById("passwordInput").value;

    if(password === "jamsen28"){

        window.location.href = "letter.html";

    }else{

        document.getElementById("error").innerHTML =
        "💔 That's not our secret.";

    }

}
