/**Exercicio 3 */
console.log("------------------------------")
console.log("Reajuste salarial")
console.log("------------------------------")
    
let salMensal = parseFloat(prompt("Digite o valor do seu salário mensal: "))
let percReajuste = parseFloat(prompt("Digite o percentual do reajuste: "))
    
let NovoSal = salMensal + (salMensal * (percReajuste/100))
    
console.log('Novo salário: ${NovoSal}')
