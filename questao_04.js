// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 


// 180759.98

const dados = [
    {"rep": "SP", "valor": 67836.43},
    {"rep": "RJ", "valor": 36678.66},
    {"rep": "MG", "valor": 29229.88},
    {"rep": "ES", "valor": 27165.48},
    {"rep": "outros", "valor": 19849.53},
]

console.log()

function percentual(array){
    somaTotal = array.reduce((acumulado, objeto) => acumulado + objeto.valor, 0);

    const valor = array.map(cidade => {
        const porcentagem = (cidade.valor / somaTotal) * 100

        return   {
            cidade: cidade.rep,
            porcentagem: porcentagem.toFixed(0)
        }
    })

    return valor.forEach(element => {
        console.log(`${element.cidade}: ${element.porcentagem}%`)
    });
}

percentual(dados)