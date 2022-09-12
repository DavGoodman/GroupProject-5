let botChoice = "";
let randomNum;
let msg = "";

updateView()
function updateView() {
    document.querySelector('.container').innerHTML = /*HTML*/`
                <div class="txt">${msg + " boten valgte " + botChoice}</div>
                <div class="choices">
                    <span onclick="playT('stein')" class="stein"><img src="https://i.pinimg.com/originals/f7/bb/86/f7bb86bbbe9353179a5bd66084e2220a.jpg" alt=""></span>
                    <span onclick="playT('saks')" class="saks"><img src="https://media.istockphoto.com/vectors/scissors-icon-vector-id518699616?k=20&m=518699616&s=612x612&w=0&h=cJ4C0bCfLSBZ7wC8DfDGsetNnoGAaIGl4hOor27OLJk=" alt=""></span>
                    <span onclick="playT('papir')" class="papir"><img src="https://media.istockphoto.com/vectors/cartoon-blank-piece-of-paper-vector-id1190524331?k=20&m=1190524331&s=170667a&w=0&h=1lGBZ4V1sywxiqWQ3M-PqjdEkvjVwMnJF9GB_f1iGcQ=" alt=""></span>
                </div>
    `
}

function playT(pChoice){
    botPlay()
    if (botChoice == pChoice){msg = "tie"}
    else if ((pChoice == "stein" && botChoice == "saks") || (pChoice == "saks" && botChoice == "papir") || (pChoice == "papir" && botChoice == "stein")) {msg = "spiller want"}
    else if (( botChoice == "stein" && pChoice == "saks") || (botChoice == "saks" && pChoice == "papir") || (botChoice == "papir" && pChoice == "stein")) {msg = "LOOOSER!!!!"}
    updateView()
}


function botPlay() {
    randomNum = generateRandomIntInRange(0, 2)
    if (randomNum == 0) {botChoice = "stein"}
    if (randomNum == 1) {botChoice = "saks"}
    if (randomNum == 2) {botChoice = "papir"}
}


function generateRandomIntInRange(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}
