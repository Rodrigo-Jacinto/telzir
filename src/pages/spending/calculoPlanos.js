function calculoPlanoNormal(minutos, origem, destino) {
    // No plano normal não tem segredo, só multiplicar os minutos vezes a tarifa de origem e destino selecionados pelo usuário
    return minutos * valorOrigemDestino(origem, destino)

}

function calculoPlanoFaleMais(minutos, plano, origem, destino) {

    if (minutos <= plano) {
        return 0.0;
    }
    else {

        //Pego os minutos excedentes ao plano 
        let minutosExcedentes = minutos - plano;

        //Pego a tarifa cobrada de origem e destino selecionadas pelo usuário
        let tarifaOrigemDestino = valorOrigemDestino(origem, destino);

        // Descubro quanto é 10% dessa tarifa
        let valorPorcentagem = (tarifaOrigemDestino * 10) / 100;

        //faço a soma da tarifa normal mais o valor de 10% dessa tarifa
        let tarifaExcedente = tarifaOrigemDestino + valorPorcentagem;

        //multiplico os minutos excedentes vezes a tarifa com os 10% acrescentados 
        return minutosExcedentes * tarifaExcedente;
    }
}

function valorOrigemDestino (origem, destino) {

    //Como origem e destino desses DDD's tem o mesmo valor de tarifa, coloquei eles em uma condição só
    if ((origem === 11 && destino === 16) || (origem === 18 && destino === 11)) {
        return 1.90;
    }
    else if (origem === 16 && destino === 11) {
        return 2.90;
    }

    else if (origem === 11 && destino === 17) {
        return 1.70;
    }

    else if (origem === 17 && destino === 11) {
        return 2.70;
    }

    else if (origem === 11 && destino === 18) {
        return 0.90;
    }
}

export {calculoPlanoNormal, calculoPlanoFaleMais};