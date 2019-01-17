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
let white = document.querySelector('.white');
let middle = document.querySelector('.middle');
let loading = document.querySelector('.screen-loading');
let cubos = document.querySelectorAll('.cubo');

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

// função de clique para descer enter color e subir color random
menu.onclick = () => {
    middle.classList.toggle('invisible');
    title.classList.toggle('invisible');
    butao.classList.toggle('invisible');
    butao1.classList.toggle('invisible');
    butao2.classList.toggle('invisible');
    menu.classList.toggle('fa-cog-click');
    contain.classList.toggle('contain-toggle');
    white.classList.toggle('white-toggle');
    
}

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








