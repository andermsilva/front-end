
function cadastro() {

    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var telefone = document.getElementById('telefone').value
    var empresa = document.getElementById('empresa').value
    var data = document.getElementById('data').value

    if (!verificarData(data)) {
        var msg = document.getElementById('msg');
        return msg.innerHTML = '<p class="msg-erro">Data Inválida  * </p>'
            + '<button class="bt-enviar" onclick="cadastro()">Enviar</button>'
    }
}


function maskDate(campo, valor) {
    var data = '';
    data += valor;
    if (data.length == 2) {
        data += '/';
        campo.value = data;
    }
    if (data.length == 5) {
        data += '/';
        campo.value = data;
    }
}

function validaData(data) {
    //------- verifica se o ano é bisexto------ e se á maior que a data atual
    var arrayData = data.split('/')
    var dia = parseInt(arrayData[0])
    var mes = parseInt(arrayData[1])
    var ano = parseInt(arrayData[2])

    if (mes == 4 || mes == 6 || mes == 9 || mes == 11 && dia > 30) {

        return false;
    }
    else {
        if (mes == 2) {
            if (dia > 28 && ano % 4 != 0) {

                return false;
            }
            if (dia > 29 && ano % 4 == 0) {

                return false;
            }
        }
    }

    return true;
}

function verificarData(data) {
    //------- Se data á maior que a data atual

    if (!validaData(data)) {
        return false;
    }

    var hoje = new Date()
    var dia = hoje.getDay();
    var mes = 1 + hoje.getMonth();
    var ano = hoje.getFullYear()
    var dataHj = dia + '/' + mes + '/' + ano;
    dataHj.toString()
    var dataOcorrencia = new Date(data)

    if (dataOcorrencia > hoje) {
        return false;
    }
    return true;
}

