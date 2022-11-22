jogadorumnome = localStorage.getItem("jogadorumnome");
jogadordoisnome = localStorage.getItem("jogadordoisnome");
document.getElementById("jogadorumNome").innerHTML = jogadorumnome + ":";
document.getElementById("jogadordoisNome").innerHTML= jogadordoisnome + ":";
jogadorumponto = 0;
jogadordoisponto = 0;
document.getElementById("jogadorumScore").innerHTML = jogadorumponto;
document.getElementById("jogadordoisScore").innerHTML = jogadordoisponto;
document.getElementById("jogadorquestoes").innerHTML = "turno de pengunta - " + jogadorumnome;
document.getElementById("jogadorrespostas").innerHTML= "turno de resposta - " + jogadordoisnome;
function send(){
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    charAt1 = word.charAt(1);

    lengthdivide2=Math.floor(word.length/2);
    charAt2 = word.charAt(lengthdivide2);

    lengthminus1=word.length - 1;
    charAt3 = word.charAt(lengthminus1);
    
    removecharat1 = word.replace(charAt1,"_");
    removecharat2 = removecharat1.replace(charAt2,"_");
    removecharat3 = removecharat2.replace(charAt3,"_");

    wordquestoes = "<h4 id='wordDisplay'>p. "+removecharat3+"</h4>";
    input_box = "<br>Resposta : <input type='text' id='inputcheckbox'>";
    checkbutton = "<br><br><button class='btn btn-info' onclick='check()'>checar</button>";
    row = wordquestoes + input_box + checkbutton;
    document.getElementById("output").innerHTML= row;
    document.getElementById("word").value = "";

}
turnoquestao="jogadorum";
turnoresposta="jogadordois";

function check(){
    getAnswer = document.getElementById("inputcheckbox").value;
    answer=getAnswer.toLowerCase();
    if(answer == word){
        if(turnoresposta == "jogadorum"){
            jogadorumponto = jogadorumponto +1;
            document.getElementById("jogadorumScore").innerHTML = jogadorumponto;
        }
        else{
            jogadordoisponto = jogadordoisponto + 1;
            document.getElementById("jogadordoisScore").innerHTML = jogadordoisponto;
        }
    }
    if(turnoquestao = "jogadorum"){
        turnoquestao = "jogadordois";
        document.getElementById("jogadorquestoes").innerHTML= "Turno de pergunta: "+jogadordoisnome;
    }
    else{
        turnoquestao = "jogadorum";
        document.getElementById("jogadorquestoes").innerHTML= "Turno de pergunta: "+jogadorumnome;
    }
    if(turnoresposta = "jogadorum"){
        turnoresposta = "jogadordois";
        document.getElementById("jogadorrespostas").innerHTML= "Turno de resposta: "+jogadordoisnome;
    }
    else{
        turnoresposta = "jogadorum";
        document.getElementById("jogadorrespostas").innerHTML= "Turno de resposta: "+jogadorumnome;
    }
    document.getElementById("output").innerHTML="";

}