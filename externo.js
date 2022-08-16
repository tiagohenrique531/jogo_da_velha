
var player = "preto";
var numJog = 0;
var controle = true;

function checkjogo(id){
    
    var opt = verificarSrc(id);
    var pc = document.getElementById('sn').checked;

    if(opt == "transp.png" && controle) {
        document.getElementById(id).src = "img/" + player +".png";
        numJog++;
        
        if (player == "preto"){
            player = "vermelho";

        } else {
            player = "preto";
        }
    
    }
    

    if (wincheck() && controle){

        document.getElementById("result").innerHTML =
        "<div align='center'>VITÓRIA DO PLAYER: " + player + "</div>";
        controle = false;
    }

    if (numJog >= 9 && controle){
        document.getElementById("result").innerHTML =
        "<div align='center'>Fim de Jogo!! Deu Velha!!</div>";
        controle = false;
    } 
    if(pc && player == "vermelho"){
        checkjogo(JogoDoPc());
    }
}

function verificarSrc(id) {
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

function wincheck(){

    qd1 = verificarSrc("qd1");
    qd2 = verificarSrc("qd2");
    qd3 = verificarSrc("qd3");
    qd4 = verificarSrc("qd4");
    qd5 = verificarSrc("qd5");
    qd6 = verificarSrc("qd6");
    qd7 = verificarSrc("qd7");
    qd8 = verificarSrc("qd8");
    qd9 = verificarSrc("qd9");

    if(qd1 == qd2 && qd2 == qd3 && qd2 != "transp.png") {
        return true;
    } else if (qd4 == qd5 && qd5 == qd6 && qd4 != "transp.png") {
        return true;
    }else if (qd7 == qd8 && qd8 == qd9 && qd8 != "transp.png") {
        return true;
    }else if (qd1 == qd4 && qd4 == qd7 && qd4 != "transp.png") {
        return true;
    }else if (qd2 == qd5 && qd5 == qd8 && qd5 != "transp.png") {
        return true;
    }else if (qd3 == qd6 && qd6 == qd9 && qd6 != "transp.png") {
        return true; 
    }else if (qd1 == qd5 && qd5 == qd9 && qd5 != "transp.png") {
        return true;
    }else if (qd3 == qd5 && qd5 == qd7 && qd5 != "transp.png") {
        return true;  
    } else {
        return false;
    }
}

function JogoDoPc(){
   if(verificarSrc('qd5')=="transp.png"){
        return 'qd5';
   }
   return 'qd' + Math.floor((Math.random() * 9) + 1);
}

