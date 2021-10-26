var valores = [8, 1, 7, 4, 2, 9]

//primeira maneira
for(var pos= 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//segunda maneira
for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}