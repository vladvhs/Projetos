function numAleatInt(){
    return Math.round(Math.random() * 2)
}
let computador = numAleatInt()

let pessoa = prompt('Pedra, Papel ou Tesoura:').toLowerCase()



if(computador == 0 && pessoa == 'papel'){
    alert('pessoa ganha!')
}else if (computador == 0 && pessoa == 'tesoura'){
    alert('computador ganha')
}else if (computador == 1 && pessoa == 'pedra'){
    alert('computador ganhou')
}else if(computador == 1 && pessoa == 'tesoura' ){
    alert('pessoa ganha')
}else if(computador == 2 && pessoa == 'pedra'){
    alert('pessoa ganha')
}else if(computador == 2 && pessoa == 'papel'){
    alert('computador ganha')
}else{
    alert('empate')
}
// 0 = Pedra
// 1 = Papel
// 2 = Tesoura