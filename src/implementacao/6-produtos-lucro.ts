function calcularLucros(produtos: {nome: string, custo: number, precoDevenda: number}[]): string{

    let lucroMenorQue10: number = 0;
    let lucroEntre10E30: number = 0;
    let lucroMaiorQue30: number = 0;

    for(let produto in produtos){
        let lucro: number = produtos[produto].precoDevenda - produtos[produto].custo;
        let porcentagemDeLucro: number = (lucro / produtos[produto].custo) * 100;

        if (porcentagemDeLucro < 10) {
            lucroMenorQue10++
        }else if(porcentagemDeLucro >= 10 && porcentagemDeLucro <= 30){
            lucroEntre10E30++
        }else{
            lucroMaiorQue30++
        }
    }
    return `
        Quantidade de produtos que têm menos de 10% de lucro: ${lucroMenorQue10}
        Quantidade de produtos que têm entre 10% e 30% de lucro: ${lucroEntre10E30}
        Quantiadde de produtos que têm mais de 30% de lucro: ${lucroEntre10E30}
    `

}


// console.log(calcularLucros([
//     {nome:"Anel", custo:20, precoDevenda:21},
//     {nome:"Sapato", custo: 200, precoDevenda:400},
//     {nome:"Sapato", custo: 200, precoDevenda:240},
//     {nome:"Sapato", custo: 200, precoDevenda:250},
//     {nome:"Sapato", custo:200, precoDevenda:260},
//     {nome:"Sorvete", custo:3, precoDevenda:16},
//     {nome:"Bola", custo:50, precoDevenda:80}
// ]));

