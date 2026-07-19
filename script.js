function toggleTheme() {
    // Pegar a tag html
    const html = document.documentElement;
    // Adicionar ou remover a classe light
    html.classList.toggle('light');
    // Podemos simplificar usando o toggle, que adiciona a classe se não existir e remove se existir

    // Podemos simplificar usando o toggle, que adiciona a classe se não existir e remove se existir
    // if(html.classList.contains('light')) {
    //    html.classList.remove('light');
    // } else {
    //    html.classList.add('light');
    // } 


    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem do perfil
    if(html.classList.contains('light')) {
    // se tiver a classe light, adicionar a imagem light
        img.setAttribute('src', './assets/cachorrinho.png');
    } else {
        img.setAttribute('src', './assets/regis-e-mostarda.jpg');
    }
}
