function gerarRelatorioVendas(): string {
    let idProduto: number[] = [101, 102, 103, 104, 105, 106, 107 , 108 , 109, 110];
    let valorProduto: number[] = [20.00, 18.90, 25.00, 7.75, 39.90, 15.00, 22.30, 31.50, 9.99, 44.80];
    let quantidadeVendida: number[] = [10, 5, 3, 8, 20, 1, 12, 7, 9, 4];

    let vendedor: string = "Sabrina";
    let salarioVendedor: number = 400.00;

    let totalVendas: number = 0;
    let maisVendidoQtd: number = 0;
    let maisVendidoCodigo: number = idProduto[0];

    let relatorio: string = "Relatório de Vendas:\n";

    for (let i = 0; i < idProduto.length; i++) {
        let totalProduto = valorProduto[i] * quantidadeVendida[i];
        totalVendas += totalProduto;

        relatorio += `Código: ${idProduto[i]}, Quantidade: ${quantidadeVendida[i]}, Valor unitário: R$${valorProduto[i].toFixed(2)}, Total vendido: R$${totalProduto.toFixed(2)}\n`;

        if (quantidadeVendida[i] > maisVendidoQtd) {
            maisVendidoQtd = quantidadeVendida[i];
            maisVendidoCodigo = idProduto[i];
        }
    }

    let comissao = totalVendas * 0.05;
    let salarioFinal = salarioVendedor + comissao;

    relatorio += `\nTotal das vendas: R$${totalVendas.toFixed(2)}\n`;
    relatorio += `Comissão: R$${comissao.toFixed(2)}\n`;
    relatorio += `Salário final: R$${salarioFinal.toFixed(2)}\n`;
    relatorio += `Objeto mais vendido: ${maisVendidoCodigo}\n`;

    return relatorio;
}

console.log(gerarRelatorioVendas())