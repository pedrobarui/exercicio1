/** Exercício 2 */
console.log("------------------------------")
console.log("Sistema de número de eleitores")
console.log("------------------------------")

    let numEleitores = parseInt(prompt("Digite a quantidade de eleitores: "))
    let numVotosBrancos = parseInt(prompt("Digite o número de votos brancos: "))
    let numVotosNulos = parseInt(prompt("Digite o número de votos nulos: "))
    let numVotosValidos = parseInt(prompt("Digite o número de votos válidos: "))
    
    let percBrancos = (numVotosBrancos / numEleitores) * 100
    let percNulos = (numVotosNulos / numEleitores) * 100
    let percValidos = (numVotosValidos / numEleitores) * 100

    console.log(`
Porcentagem de votos brancos: ${percBrancos}%
Porcentagem de votos nulos: ${percNulos}%
Porcentagem de votos válidos: ${percValidos}%`)
