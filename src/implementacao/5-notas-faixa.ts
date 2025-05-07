function contarNotasNaFaixa(arrayNotas: number[]): string {
    let somaDasNotas: number = 0;
    for (let i = 0; i < arrayNotas.length; i ++) {
        somaDasNotas = somaDasNotas + arrayNotas[i];
    }

    let media: number = somaDasNotas / arrayNotas.length;
    const porcentagem = media * (10/100);
    
    let notasAbaixoDamedia: number = media - porcentagem;
    let notasAcimaDaMedia: number = media + porcentagem;
    
    const notasNoIntervalo = arrayNotas.filter((nota) => nota >= notasAbaixoDamedia && nota <= notasAcimaDaMedia);

    const quantidadeDeNotas: number = notasNoIntervalo.length;

    let notasPluralOuSingular: string;
    if(quantidadeDeNotas > 0){

        if (quantidadeDeNotas === 1) {
            notasPluralOuSingular = "nota está";
        } else {
            notasPluralOuSingular = "notas não estão"
        }
    }else{
        notasPluralOuSingular = "nenhuma nota está";
    }

    return `${quantidadeDeNotas} ${notasPluralOuSingular} dentro do intervalo de ${notasAbaixoDamedia} e ${notasAcimaDaMedia}`;
};

console.log(contarNotasNaFaixa([50, 60, 70, 80, 90]));
console.log(contarNotasNaFaixa([5, 1, 7, 12, 0]));
console.log(contarNotasNaFaixa([9, 15, 30, 20, 8]));
console.log(contarNotasNaFaixa([2, 3, 4, 5, 6]));
console.log(contarNotasNaFaixa([
    4.65, 38.27, 14.90, 28.92, 12.54, 3.17, 47.36, 0.85, 20.67, 7.71,
    17.89, 32.70, 45.58, 1.91, 22.11, 5.83, 9.45, 39.64, 41.06, 13.75,
    8.29, 35.17, 16.21, 10.38, 42.31, 24.84, 6.40, 19.23, 11.57, 34.09,
    0.15, 2.67, 29.88, 30.76, 18.93, 21.46, 36.75, 40.13, 44.62, 26.55,
    15.08, 43.97, 46.82, 31.74, 33.40, 37.51, 27.66, 23.30, 25.21, 48.79
  ]
  ));
