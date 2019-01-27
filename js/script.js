let bloco = document.querySelector('.bloco-color');
let input1 = document.querySelector('.input-one');
let input2 = document.querySelector('.bloco-color input');
let menu = document.querySelector('.fa-cog');
let butao = document.querySelector('.button');
let butao1 = document.querySelector('.button-one');
let butao2 = document.querySelector('.button-two');
let check = document.querySelector('.fa-check');
let erro = document.querySelector('.fa-times');
let body = document.querySelector('body');
let title = document.querySelector('.title');
let copy = document.querySelector('.copy');
let icon = document.querySelector('.copy i');
let contain = document.querySelector(".contain");
let middle = document.querySelector('.middle');
let loading = document.querySelector('.screen-loading');
let cubos = document.querySelectorAll('.cubo');

let body2 = document.querySelector('.body-two');
let contain2 = document.querySelector('.contain-two');
let colorHex = document.querySelectorAll('.colorHex');
let refresh = document.querySelector('.refresh');
let divisions = document.querySelectorAll('.division');

// gera uma cor aleatória em hexadecimal
function gera_cor1(){
    let hexadecimais = '0123456789ABCDEF';
    let cor1 = '#';
  
    // Pega um número aleatório no array acima
    for (let i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        cor1 += hexadecimais[Math.floor(Math.random() * 16)];
    }
    cubos[0].style.background = cor1;
    console.log(cor1);
    return cor1;
}
function gera_cor2(){
    let hexadecimais = '0123456789ABCDEF';
    let cor2 = '#';
  
    for (let i = 0; i < 6; i++ ) {
        cor2 += hexadecimais[Math.floor(Math.random() * 16)];
    }
    cubos[1].style.background = cor2;
    console.log(cor2);
    return cor2;
}
function gera_cor3(){
    let hexadecimais = '0123456789ABCDEF';
    let cor3 = '#';
    
    for (let i = 0; i < 6; i++ ) {
        cor3 += hexadecimais[Math.floor(Math.random() * 16)];
    }
    cubos[2].style.background = cor3;
    console.log(cor3);
    return cor3;
}
function gera_cor4(){
    let hexadecimais = '0123456789ABCDEF';
    let cor4 = '#';
  
    for (let i = 0; i < 6; i++ ) {
        cor4 += hexadecimais[Math.floor(Math.random() * 16)];
    }
    cubos[3].style.background = cor4;
    console.log(cor4);
    return cor4;
}

gera_cor1();
gera_cor2();
gera_cor3();
gera_cor4();

// Sai da tela de loading
function exitLoading(){
    loading.classList.add('screen-loading-toggle');
}

setInterval(exitLoading, 3250);

// deixa o input pronto para digitação
input1.focus();

let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');
let div3 = document.querySelector('.div3');
let div4 = document.querySelector('.div4');

// função de clique para descer enter color e subir color random
menu.onclick = () => {
    menu.classList.toggle('fa-cog-click');
    contain.classList.toggle('contain-toggle');
    contain2.classList.toggle('contain-two-toggle');
    body2.classList.toggle('body-two-toggle');
    div1.classList.toggle('div-toggle');
    div2.classList.toggle('div-toggle');
    div3.classList.toggle('div-toggle');
    div4.classList.toggle('div-toggle');
    
}

function verifyHashtag() {
    console.log(input1.value.charAt(0))
    if (input1.value.charAt(0).includes('#')) {
       return true;
    } else {
      this.value = "#"
    }
} 
  
input1.addEventListener('keypress', verifyHashtag);

// função que verifica o campo do input, se os requisitos forem aprovados ele aplica a cor digitada
function apply () {
    if(input1.value.trim() != "" && input1.value.indexOf('#') == 0 && input1.value.length >= 4){
        let bg = input1.value;
        butao1.style.transform = 'translateX(-100%)';
        butao2.style.transform = 'translateX(0)';
        check.style.transform = 'translateY(-50%)';
        butao1.style.opacity = '0';
        butao2.style.opacity = '1';
        check.style.opacity = '1';
        body.style.background = bg;
        input1.style.border = `1px solid ${bg}`;
        butao.style.boxShadow = `0 0 5px black`;
        bloco.style.background = bg;
        butao.style.background = bg;
        butao1.style.background = bg;
        butao2.style.background = bg;
        title.style.background = bg;
        erro.style.transform = 'translateY(-200%)';
        erro.style.opacity = '0';
        girar();
        function clear(){
            butao2.style.transform = 'translateX(100%)';
            butao1.style.transform = 'translateX(0)';
            check.style.transform = 'translateY(200%)';
            butao1.style.opacity = '1';
            butao2.style.opacity = '0';
            check.style.opacity = '0';
        }
        setTimeout(clear, 2500);
        }
        else{
            butao.style.boxShadow = `0 0 20px 3px red`;
            erro.style.transform = 'translateY(-50%)';
            erro.style.opacity = '1';
        }
}

butao.onclick = () => {
    apply();
}

onkeyup = function(evento){
    if(evento.key == "Enter"){
        apply();
    }
}

// função para copiar o valor do input
copy.onclick = () => {
    icon.style.transform = 'rotate(35deg) scale(1.2)' ;
    input2.select();
    document.execCommand('copy');
    input2.setSelectionRange(0, 0);
    function limpar(){
        icon.style.transform = 'rotate(0deg) scale(1)';
    }
    setTimeout(limpar, 1000);
}

// função para copiar o valor do input
input2.onclick = () => {
    icon.style.transform = 'rotate(35deg) scale(1.2)';
    input2.select();
    document.execCommand('copy');
    input2.setSelectionRange(0, 0);
    function limpar(){
        icon.style.transform = 'rotate(0deg) scale(1)';
    }
    setTimeout(limpar, 1000);
}

let square = document.querySelectorAll('.bg-bubbles li');


function colorGenerator(){
    // Cubo animate color one
    let opacity0 = Math.floor(Math.random() * 99);
    let squareHex0 = '0123456789ABCDEF';
    let squareColor0 = '#';
  
    for (let i = 0; i < 6; i++ ) {
        squareColor0 += squareHex0[Math.floor(Math.random() * 16)];
    }

    square[0].style.opacity = `0.${opacity0}`;
    square[0].style.backgroundColor = squareColor0;

    // Cubo animate color two
    let opacity1 = Math.floor(Math.random() * 99);
    let squareHex1 = '0123456789ABCDEF';
    let squareColor1 = '#';
  
    for (let i = 0; i < 6; i++ ) {
        squareColor1 += squareHex1[Math.floor(Math.random() * 16)];
    }

    square[1].style.opacity = `0.${opacity1}`;
    square[1].style.backgroundColor = squareColor1;

    // Cubo animate color tree
    let opacity2 = Math.floor(Math.random() * 99);
    let squareHex2 = '0123456789ABCDEF';
    let squareColor2 = '#';
  
    for (let i = 0; i < 6; i++ ) {
        squareColor2 += squareHex2[Math.floor(Math.random() * 16)];
    }

    square[2].style.opacity = `0.${opacity2}`;
    square[2].style.backgroundColor = squareColor2;

    // Cubo animate color four
    let opacity3 = Math.floor(Math.random() * 99);
    let squareHex3 = '0123456789ABCDEF';
    let squareColor3 = '#';
  
    for (let i = 0; i < 6; i++ ) {
        squareColor3 += squareHex3[Math.floor(Math.random() * 16)];
    }

    square[3].style.opacity = `0.${opacity3}`;
    square[3].style.backgroundColor = squareColor3;

    // Cubo animate color five
    let opacity4 = Math.floor(Math.random() * 99);
    let squareHex4 = '0123456789ABCDEF';
    let squareColor4 = '#';
  
    for (let i = 0; i < 6; i++ ) {
        squareColor4 += squareHex4[Math.floor(Math.random() * 16)];
    }

    square[4].style.opacity = `0.${opacity4}`;
    square[4].style.backgroundColor = squareColor4;

    // Cubo animate color six
    let opacity5 = Math.floor(Math.random() * 99);
    let squareHex5 = '0123456789ABCDEF';
    let squareColor5 = '#';
  
    for (let i = 0; i < 6; i++ ) {
        squareColor5 += squareHex5[Math.floor(Math.random() * 16)];
    }

    square[5].style.opacity = `0.${opacity5}`;
    square[5].style.backgroundColor = squareColor5;

    // Cubo animate color seven
    let opacity6 = Math.floor(Math.random() * 99);
    let squareHex6 = '0123456789ABCDEF';
    let squareColor6 = '#';
  
    for (let i = 0; i < 6; i++ ) {
        squareColor6 += squareHex6[Math.floor(Math.random() * 16)];
    }

    square[6].style.opacity = `0.${opacity6}`;
    square[6].style.backgroundColor = squareColor6;

    // Cubo animate color eight
    let opacity7 = Math.floor(Math.random() * 99);
    let squareHex7 = '0123456789ABCDEF';
    let squareColor7 = '#';
  
    for (let i = 0; i < 6; i++ ) {
        squareColor7 += squareHex7[Math.floor(Math.random() * 16)];
    }

    square[7].style.opacity = `0.${opacity7}`;
    square[7].style.backgroundColor = squareColor7;

    // Cubo animate color nine
    let opacity8 = Math.floor(Math.random() * 99);
    let squareHex8 = '0123456789ABCDEF';
    let squareColor8 = '#';
  
    for (let i = 0; i < 6; i++ ) {
        squareColor8 += squareHex8[Math.floor(Math.random() * 16)];
    }

    square[8].style.opacity = `0.${opacity8}`;
    square[8].style.backgroundColor = squareColor8;

    // Cubo animate color ten
    let opacity9 = Math.floor(Math.random() * 99);
    let squareHex9 = '0123456789ABCDEF';
    let squareColor9 = '#';
  
    for (let i = 0; i < 6; i++ ) {
        squareColor9 += squareHex9[Math.floor(Math.random() * 16)];
    }

    square[9].style.opacity = `0.${opacity9}`;
    square[9].style.backgroundColor = squareColor9;

    return squareColor0, squareColor1, squareColor2, squareColor3, squareColor4, squareColor5, squareColor6, squareColor7, squareColor8, squareColor9;
}

colorGenerator();

// let time = setTimeout(colorGenerator, 500);


let degs = 90;

function randomColor(){
    // Primeira cor
    let hexadecimais1 = '0123456789ABCDEF';
    let color1 = '#';
  
    // Pega um número aleatório no array acima
    for (let i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        color1 += hexadecimais1[Math.floor(Math.random() * 16)];
    }
    divisions[0].style.background = color1;
    colorHex[0].value = color1;
    
    // Segunda cor
    let hexadecimais2 = '0123456789ABCDEF';
    let color2 = '#';
    
    for (let i = 0; i < 6; i++ ) {
        color2 += hexadecimais2[Math.floor(Math.random() * 16)];
    }
    divisions[1].style.background = color2;
    colorHex[1].value = color2

    // Terceira cor
    let hexadecimais3 = '0123456789ABCDEF';
    let color3 = '#';
  
    for (let i = 0; i < 6; i++ ) {
        color3 += hexadecimais3[Math.floor(Math.random() * 16)];
    }

    divisions[2].style.background = color3;
    colorHex[2].value = color3;

    // Quarta cor
    let hexadecimais4 = '0123456789ABCDEF';
    let color4 = '#';
  
    for (let i = 0; i < 6; i++ ) {
        color4 += hexadecimais4[Math.floor(Math.random() * 16)];
    }

    divisions[3].style.background = color4;
    colorHex[3].value = color4;
    return color1, color2, color3, color4;
}

randomColor();

refresh.onclick = () => {
    degs += 360;
    refresh.style.transform = `rotate(${degs}deg)`; 
    randomColor();
    colorGenerator();
}

colorHex[0].onclick = () => {
    colorHex[0].select();
    document.execCommand('copy');
    // colorHex[0].setSelectionRange(0, 0);
   
    // setTimeout(limpar, 1000);
}
colorHex[1].onclick = () => {
    colorHex[1].select();
    document.execCommand('copy');
    colorHex[1].setSelectionRange(0, 0);
   
    // setTimeout(limpar, 1000);
}
colorHex[2].onclick = () => {
    colorHex[2].select();
    document.execCommand('copy');
    colorHex[2].setSelectionRange(0, 0);
   
    // setTimeout(limpar, 1000);
}
colorHex[3].onclick = () => {
    colorHex[3].select();
    document.execCommand('copy');
    colorHex[3].setSelectionRange(0, 0);
   
    // setTimeout(limpar, 1000);
}


// função que converte código hexadecimal para RGB
function hexToRgb(hex) {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// função que converte RGB para código hexadecimal
function rgbToHex(rgb){
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}

function girar(){
    let value = input1.value;
    let result = "RGB("+hexToRgb(value).r+", "+hexToRgb(value).g+", "+hexToRgb(value).b+")";
    input2.value = result;
    
};

