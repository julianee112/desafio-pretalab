/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

function ContagemDeMedalhas() {
    let medalhas = {}; 

    while (true) {
        let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");

        if (pais.toLowerCase() === "sair") {
            break;
        }

        let ouro = parseInt(prompt(`Digite a quantidade de medalhas de ouro para ${pais}:`));
        let prata = parseInt(prompt(`Digite a quantidade de medalhas de prata para  ${pais}:`));
        let bronze = parseInt(prompt(`Digite a quantidade de medalhas de bronze para ${pais}:`));

        if (!isNaN(ouro) && !isNaN(prata) && !isNaN(bronze)) {
            let totalMedalhas = ouro + prata + bronze;

            // Se o país já estiver no objeto, soma as medalhas
            if (medalhas[pais]) {
                medalhas[pais] += totalMedalhas;
            } else {
                medalhas[pais] = totalMedalhas;
            }
        } else {
            alert("Por favor, insira valores numéricos válidos para as medalhas.");
        }
    }

    // Exibindo o ranking 
    if (Object.keys(medalhas).length > 0) {
        console.log("#Ranking de Medalhas:");
        for (let pais in medalhas) {
            console.log(`#${pais}: ${medalhas[pais]} medalhas`);
        }
    } else {
        alert("Nenhum país inserido.");
    }
}

ContagemDeMedalhas();
