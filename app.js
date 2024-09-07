function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let resultados = ""

    let titulo = "";

    let descricao = "";
    

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if(campoPesquisa == "") {
        section.innerHTML = "<p>Campo de pesquisa vázio.</p"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase()

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        if(dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {

        resultados +=       
            `<div class="item-resultado">
                <h4>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h4>
                <p class="descricao-meta">${dado.descricao}
                   Balerion é, sem dúvida, um dos dragões mais icônicos e poderosos do universo de Game of Thrones e House of the Dragon. Conhecido como o Terror Negro, sua história se entrelaça com a própria fundação do reino dos Targaryen em Westeros.Aegon Targaryen, montado em Balerion, liderou a Conquista de Westeros. Juntamente com suas irmãs-esposas e seus dragões, Vhagar e Meraxes, Aegon unificou os Sete Reinos sob o domínio Targaryen. O tamanho e o poder de Balerion foram cruciais para a vitória, pois sua sombra          aterrorizava os inimigos e suas chamas consumiam castelos inteiros.
                </p>
            </div>`
               ; 
        };


};
     section.innerHTML = resultados;
};