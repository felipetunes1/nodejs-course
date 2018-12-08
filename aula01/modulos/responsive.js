function resp (valor) {
    return valor * (valor <= 1 ? valor : resp(valor - 1));
}

module.exports = resp;