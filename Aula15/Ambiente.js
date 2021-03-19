let num = [5, 8, 2, 9, 3]
num.push(1)
//num.push(4)
//num[4] = 6
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor ${num[0]}`)
let pos = num.indexOf(10)
if (pos == -1){
    console.log('O valor não foi encontrado')
}else {(`O valor 8 esta na posição ${pos}`)
console.log(`O valor esta na posição ${pos}`)
}

