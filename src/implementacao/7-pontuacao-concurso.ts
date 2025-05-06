interface candidato {
    nome: string;
    nota: number;
}

function listarAprovados(aprovados: candidato[]): candidato[]{
    let resultado: candidato[] = [];

    for (let i = 0; i < aprovados.length; i++) {
        if (aprovados[i].nota > 70) {
            resultado.push(aprovados[i]);
        }
    }

    return resultado;
}

const participantes: candidato[] = [
    { nome: "Ticiana", nota: 75 },
    { nome: "Carlos", nota: 68 },
    { nome: "Ana", nota: 82 },
    { nome: "João", nota: 59 },
    { nome: "Marina", nota: 91 },
    { nome: "Lucas", nota: 73 },
    { nome: "Fernanda", nota: 88 },
    { nome: "Bruno", nota: 64 },
    { nome: "Patrícia", nota: 78 },
    { nome: "Rafael", nota: 69 },
    { nome: "Camila", nota: 85 },
    { nome: "Leonardo", nota: 71 },
    { nome: "Juliana", nota: 66 },
    { nome: "Renato", nota: 92 },
    { nome: "Bianca", nota: 55 },
    { nome: "Sérgio", nota: 70 },
    { nome: "Tatiane", nota: 80 },
    { nome: "Ricardo", nota: 60 },
    { nome: "Paula", nota: 77 },
    { nome: "Fábio", nota: 83 },
    { nome: "Daniela", nota: 58 },
    { nome: "Eduardo", nota: 79 },
    { nome: "Isabela", nota: 74 },
    { nome: "Gustavo", nota: 62 },
    { nome: "Helena", nota: 90 },
];

console.log (listarAprovados(participantes));