//Get elements variables
let getPass1Wrapper = document.getElementById("pass1");
let getPass2Wrapper = document.getElementById("pass2");
let getPass3Wrapper = document.getElementById("pass3");
let getPass4Wrapper = document.getElementById("pass4");
let allPass = [getPass1Wrapper, getPass2Wrapper, getPass3Wrapper, getPass4Wrapper]


//random char variables
let characteres = "1 2 3 4 5 6 7 8 9 ! @ # $ % & * ( ) + - = a b c d e f g h i j k l m n o p q r s t u v w x y z";
let passLength = 15;
let randomString = [];
let charArr = characteres.split(" ");

function generate(){
    allPass.forEach(randomPassw);
}

function randomPassw(item){

    randomString = [];
    for (i = 0; i < passLength; i++){
        let randomNumber = Math.floor(Math.random() * 44)
        let randomChar = charArr[randomNumber];
        randomString.push(randomChar);
    }

    let fullPass = randomString.join('');
    item.textContent = fullPass;
    
}
