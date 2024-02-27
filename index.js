/* **O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

 */

var heroi = {
    nome: "Spartacus",
    xp: 8942
};

if (heroi.xp <= 1000) {
    console.log("O herói de nome **{" + heroi.nome + "}** está no Rank: **{Ferro}**")
}

else if (2000 >= heroi.xp && heroi.xp >= 1001) {
    console.log("O herói de nome **{" + heroi.nome + "}** está no Rank: **{Bronze}**")
}

else if (5000 >= heroi.xp && heroi.xp >= 2001) {
    console.log("O herói de nome **{" + heroi.nome + "}** está no Rank: **{Prata}**")
}

else if (5000 >= heroi.xp && heroi.xp >= 4001) {
    console.log("O herói de nome **{" + heroi.nome + "}** está no Rank: **{Ouro}**")
}

else if (8000 >= heroi.xp && heroi.xp >= 7001) {
    console.log("O herói de nome **{" + heroi.nome + "}** está no Rank: **{Platina}**")
}

else if (9000 >= heroi.xp && heroi.xp >= 8001) {
    console.log("O herói de nome **{" + heroi.nome + "}** está no Rank: **{Ascendente}**")
}

else if (10000 >= heroi.xp && heroi.xp >= 9001) {
    console.log("O herói de nome **{" + heroi.nome + "}** está no Rank: **{Imortal}**")
}

else {
    console.log("O herói de nome **{" + heroi.nome + "}** está no Rank: **{Radiante}**")
}
