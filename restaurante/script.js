
let dinheiro = 0;
let pedidos = 0;
let ingredientes = [];
let paciencia = 100;

let pedidoCorreto = ["🍞", "🍖", "🧀", "🥬", "🍞"];

function adicionar(ingrediente) {

    ingredientes.push(ingrediente);

    document.getElementById("lanche").innerHTML =
        ingredientes.join(" ");

    document.getElementById("mensagem").innerHTML = "";
}

function limpar() {

    ingredientes = [];

    document.getElementById("lanche").innerHTML = "🍞";
}

function entregar() {

    if (JSON.stringify(ingredientes) === JSON.stringify(pedidoCorreto)) {

        dinheiro += 20;
        pedidos++;

        document.getElementById("dinheiro").innerHTML = dinheiro;
        document.getElementById("pedidos").innerHTML = pedidos;

        document.getElementById("mensagem").innerHTML =
            "🎉 Pedido correto! Você ganhou R$ 20!";

        limpar();

        paciencia = 100;
        atualizarPaciencia();

    } else {

        document.getElementById("mensagem").innerHTML =
            "❌ Pedido errado! Confira os ingredientes.";

    }
}

function atualizarPaciencia() {

    document.getElementById("barra").style.width = paciencia + "%";

    document.getElementById("tempo").innerHTML =
        "Paciência: " + paciencia + "%";

    if (paciencia <= 30) {
        document.getElementById("barra").style.background = "red";
    } else {
        document.getElementById("barra").style.background = "#46b85c";
    }
}

setInterval(function() {

    paciencia -= 2;

    if (paciencia <= 0) {
        paciencia = 0;
        document.getElementById("mensagem").innerHTML =
            "😡 O cliente foi embora!";
    }

    atualizarPaciencia();

}, 1600);
