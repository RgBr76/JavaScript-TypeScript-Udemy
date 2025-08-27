// function pergunta(){
//     let res = prompt('Você quer namorar cmg??')

//     if(res.toLowerCase() =='sim'){
//         alert('Então beleza <3')
//     }
//     else{
//         alert('Beleza então sua pir....')
//     }
// }

function textoDigitado(){
    const texto = document.getElementById('texto').value
    const espaco = document.getElementById('espaco')
    const saida = document.getElementById('saida')
    console.log('Funciona CARAMBA')

    saida.innerHTML = 'Aqui você digitou: '+ texto
    espaco.value = texto

}
