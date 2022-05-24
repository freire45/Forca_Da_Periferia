var girias = ["TRUTA", "MANO", "MINA", "PARÇA", "BALADA", "VÉI", "BUGADO", "BO","COTA", "MANDRAKE"];

var btnHistoria = document.querySelector("#botaoHistoria");
var btnAdPalavra = document.querySelector(".botaoAdicionar");
var btnInicioGame =  document.querySelector("#btnIniciar");

var scBotoes = document.querySelector(".botoes");
var scHistoria = document.querySelector(".historiaGame");

var tituloPrincipalIn = document.querySelector("#tituloPrincipal");

var imgPrincipal = document.querySelector("#imgHistoria");

var btnSalvar = document.createElement("button"); 
btnSalvar.id = "btnSal";
btnSalvar.setAttribute("type", "button");
btnSalvar.innerHTML = "Salvar e começar";

var btnCancelar = document.createElement("button");
btnCancelar.id = "btnCan";
btnCancelar.setAttribute("type", "button");
btnCancelar.innerHTML = "Cancelar";

var scPrincipal = document.querySelector(".secaoPrincipal");
var txtAre= document.createElement("textarea");
var tPrincipal = document.createElement("h1");   
var pAviso = document.createElement("p"); 
var imgAviso = document.createElement("img");
     
    
tPrincipal.innerHTML = "Adicione Uma Palavra";
tPrincipal.id = "tiPrinc";
txtAre.setAttribute("cols","40");
txtAre.setAttribute("rows","10");
txtAre.setAttribute("placeholder","Digite uma palavra - Com No Máximo 8 Letras");
imgAviso.setAttribute("src","img/info.png");
imgAviso.id = "imgInfo";
txtAre.id = "areaTexto";
pAviso.innerHTML = "Max. 8 Letras";
pAviso.id = "msgAviso";


var resposta = false;


btnHistoria.addEventListener("click", function(){
    var secaoHistoria = document.querySelector(".historiaGame");
    var paragrafo = document.createElement("p");
    
    if(resposta == false) {
        btnHistoria.innerHTML = "-";
        paragrafo.classList.add("paragrafoHistoria");  
        paragrafo.id = "paragHist";
        secaoHistoria.appendChild(paragrafo);        
        paragrafo.innerHTML = "Ei! A terra foi invadida por ALIENÍGENAS, eles sequestraram o dono do BAILE FUNK, parece que eles são" + 
        " frágeis em relação a gírias, descubra a palavra secreta na forca e salve o REI DA BALADA para a festa continuar!";
        resposta = true;
    } else{
        document.getElementById("paragHist").remove();
        btnHistoria.innerHTML = "+";
        resposta = false;
    }
});



btnAdPalavra.addEventListener("click", function(){
    document.getElementById("tituloPrincipal").remove();
    document.getElementById("imgHistoria").remove();
    document.getElementById("btnIniciar").remove();
    document.getElementById("btnAdicionar").remove();
    document.getElementById("botaoHistoria").remove();

    scPrincipal.appendChild(tPrincipal);
    scPrincipal.appendChild(txtAre);
    scPrincipal.appendChild(imgAviso);
    scPrincipal.appendChild(pAviso);
    scPrincipal.appendChild(btnSalvar);
    scPrincipal.appendChild(btnCancelar);
});

btnCancelar.addEventListener("click", function(){
    document.getElementById("tiPrinc").remove();
    document.getElementById("btnSal").remove();
    document.getElementById("btnCan").remove();
    document.getElementById("areaTexto").remove();
    document.getElementById("imgInfo").remove();
    document.getElementById("msgAviso").remove();

    tituloPrincipalIn.innerHTML = "Forca Da Periferia";
    imgPrincipal.setAttribute("src","img/historiaCidade.gif");

    btnHistoria.id = "botaoHistoria";
    btnHistoria.classList.add("botaoHistoria");
    
    btnInicioGame.id = "btnIniciar";
    btnInicioGame.classList.add("botaoIniciar");

    btnAdPalavra.id = "btnAdicionar";
    btnAdPalavra.classList.add("botaoAdicionar");

    scPrincipal.appendChild(tituloPrincipalIn);
    scPrincipal.appendChild(imgPrincipal);

    scBotoes.appendChild(btnInicioGame);
    scBotoes.appendChild(btnAdPalavra);

    scHistoria.appendChild(btnHistoria);
    
});

btnSalvar.addEventListener("click", function(){
     var texto = document.getElementById("areaTexto").value;

     if(texto.length < 8){
        girias.push(texto.toUpperCase());
        txtAre.value = "Palavra Adicionada!";
        
     } else{
        txtAre.value = "ERRO: Palavra Muito Grande!";
     }
});

btnInicioGame.addEventListener("click", function(){
    alert("Clicado");

});

