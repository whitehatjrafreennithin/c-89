player1_name = localStorage.getItem("player_1_name-input");
player2_name = localStorage.getItem("player_2_name-input");


player1_score = 0;
player2_score = 0;


document.getElementById("Player1_name").innerHTML = player1_name + ":";
document.getElementById("Player2_name").innerHTML = player2_name + ":";

document.getElementById("Player1_score").innerHTML = player1_score;
document.getElementById("Player2_score").innerHTML = player2_score;


document.getElementById("Player_question").innerHTML = "Question Turn -" + player1_name;
document.getElementById("Player_answer").innerHTML = "Answer Turn -" + player2_name;





function send() {
    getword = document.getElementById("word").value;
    getword = getword.toLowerCase()
    console.log(getword);


    charAt1 = getword.charAt(1)
    console.log(charAt1);

    lenght_divide_2 = Math.floor(getword.length / 2);
    // 7/2 = 3.5 = 3 
    charAt2 = getword.charAt(lenght_divide_2);
    console.log(charAt2);

    charAt3 = getword.charAt(getword.length - 1)
    console.log(charAt1);

    remove_charAt1 = getword.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row = question_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";


}
question_turn = "player1_name";
answer_turn = "player2_name";

function check() {
    

    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log(answer);
    if (answer == getword) {

        if (answer_turn == "player1_name") {
            player1_score = player1_score + 1;
            document.getElementById("Player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("Player2_score").innerHTML = player2_score;
        }


    }



    if (question_turn == "player2_name") {
        question_turn = "player1_name"
        document.getElementById("Player_question").innerHTML = "Question Turn - " + player1_name;
    } else {
        question_turn = "player2_name"
        document.getElementById("Player_question").innerHTML = "Question Turn - " + player2_name;
    }


    if (answer_turn == "player1_name") {
        answer_turn = "player2_name"
        document.getElementById("Player_answer").innerHTML = "Answer Turn - " + player2_name;
    } else {
        answer_turn = "player1_name"
        document.getElementById("Player_answer").innerHTML = "Answer Turn - " + player1_name;
    }



document.getElementById("output").innerHTML = "";

}