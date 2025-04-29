function senhaValida(senha, usuario){
    if (senha.length < 8 ||
        senha.includes(" ") ||
        senha.includes(usuario))
    {
        return false;
    }
    else {
        return true;
    }
}