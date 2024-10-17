// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;


function reverse(palavra) {
    if(typeof palavra === "string") {
        let element = ""
    
        for (let index = palavra.length - 1; index >= 0; index--) {
            element += palavra[index];
        }
        console.log(element)
    } else {
        console.log("Insira uma string")
    }
}

reverse(456789)