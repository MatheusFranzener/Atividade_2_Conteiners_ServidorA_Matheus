let listaUsuarios = [];

async function getUsuarios(){
    return listaUsuarios;
}

async function cadastrarUsuario(dados){
    listaUsuarios.push(dados);
}

async function apagarDados(){
    listaUsuarios = [];
}

module.exports = {
    getUsuarios,
    cadastrarUsuario,
    apagarDados
}