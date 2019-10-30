const languageBtn = document.getElementById("language");
const side = document.getElementById("side");
const btnDog = document.getElementById("btn-dog");
const btnCat = document.getElementById("btn-cat");

languageBtn.onclick = function changeLanguage(event) {
    if (languageBtn.innerHTML === "Change to English") {
        side.innerHTML = "Which side are you on?"; 
        btnDog.innerHTML = "Dogs, for sure!";
        btnCat.innerHTML = "Cats are the best!";
        languageBtn.innerHTML = "日本語でお願いします。";
    }
    else {
        side.innerHTML = "あなたは何派ですか？";
        btnDog.innerHTML = "わんわん";
        btnCat.innerHTML = "にゃんにゃん";
        languageBtn.innerHTML = "Change to English";
    }
}
