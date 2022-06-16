e = localStorage.getItem("player1_name");
i = localStorage.getItem("player2_name");
score_player1 = 0;
score_player2 = 0;
document.getElementById("player1_name").innerHTML = e + ": ";
document.getElementById("player2_name").innerHTML = i + ": ";
document.getElementById("player1_scort").innerHTML = score_player1;
document.getElementById("player2_scort").innerHTML = score_player2;

function back() {
    window.location = "activity_1.html";
    }
    function getScore()
    {
        score = localStorage.getItem("score");	
        document.getElementById("update").innerHTML = "<h1>Puntaje: " + score +"</h1>";
    }
    function send() {
        number1 = document.getElementById("number1").value;
        number2 = document.getElementById("number2").value;
        actual_answear = parseInt(number1) * parseInt(number2);
        question_number = "<h4>" + number1 + " X" + number2 + "</h4>";
        input_box = "<br>Answear : <input type = 'text' id = 'input_check_box'>"
        check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
        row = question_number + input_box + check_button;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
        document.getElementById("output").innerHTML = row;
    }
    
function check()
{
	get_answer = document.getElementById("input_check_box").value;
	answer = get_answer.toLowerCase();
	console.log("answer in numbers - " + answer);
	if(answer == actual_answear)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = update_player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = update_player2_score;
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Turno para responder - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}