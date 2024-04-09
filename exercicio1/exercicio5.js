/**Exercicio 5 */
console.log("------------------------------")
console.log("Cálculo Custo Carro")
console.log("------------------------------")

let CustoFabrica = parseFloat(prompt("Digite o custo de Fábrica do carro: "))
let PorcentDistribuidor = (parseFloat(prompt("Digite a porcentagem do Distribuidor"))/100) * CustoFabrica
let Impostos = (parseFloat(prompt("Digite a porcentagem dos impostos: "))/100) * CustoFabrica
let CustoFinal = CustoFabrica + PorcentDistribuidor + Impostos

console.log('Custo Final: R$ ${CustoFinal.toFixed(2)}')

