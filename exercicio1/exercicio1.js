/*Exercício 1*/
console.log("------------------------------")
console.log("Sistema de notas")
console.log("------------------------------")

let nota1 = parseFloat(prompt("Digite a sua primeira nota: "))
let nota2 = parseFloat(prompt("Digite a sua segunda nota: "))
let nota3 = parseFloat(prompt("Digite a sua terceira nota: "))
let nota4 = parseFloat(prompt("Digite a sua quarta nota: "))

media = (nota1 + nota2 + nota3 + nota4)/4
    
 if(media >= 7){
     console.log("Sua situação: APROVADO")
 } else {
      console.log("Sua situação: REPROVADO")
 }
