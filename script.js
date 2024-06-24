var lados = ['direita', 'baixodireita', 'baixo', 'baixoesquerda', 'esquerda', 'cimaesquerda', 'cima', 'cimadireita'];
var restexto = document.getElementById('restexto');
var longnum;
function dividirnumeros(longnum) {
    longnum = longnum.toString().split("").map(Number);
    return longnum; 
}
function solve(){
    longnum = document.getElementById('numerosinput').value.trim();
    restexto.innerText = '';
    document.getElementById("imagens").innerHTML = '';
    if (longnum !== "") {
        var numeros = dividirnumeros(longnum);
        for (var i=0;i<numeros.length;i++) {
            var img = document.createElement("img");
            var src = document.getElementById("imagens");
            if(numeros[i] == 0){
                img.src = 'setas/circulo.png';
            }
            else{
                img.src = (`setas/${lados[numeros[i] - 1]}.png`);
            }
            src.appendChild(img);
            //restexto.innerText += `${lados[numeros[i] - 1]}\xa0`;
        }
    } else {
        restexto.innerText = 'Por favor, insira um numero valido.';
    }
}