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

function verificarUsuarios(dados){
    let idUsuario = dados.idUsuario;
    let senha = dados.senha;

    if(listaUsuarios.length!=0){
        for (let i = 0; i < listaUsuários.length; i++) {
            if(idUsuario != null && listaUsuarios[i].idUsuario != 0 && listaUsuarios[i].idUsuario == idUsuario){
                if(senha != null && listaUsuários[i].senha == senha){
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
}

module.exports = {
    getUsuarios,
    cadastrarUsuario,
    apagarDados
}