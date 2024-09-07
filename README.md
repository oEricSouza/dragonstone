### Este projeto foi feito com base no que foi apresentado na Imersão Dev Alura com Google Gemini ###

Descrição:
Esta aplicação web, desenvolvida em HTML, CSS e JavaScript, oferece uma experiência interativa para os fãs de Game of Thrones e House of The Dragon que desejam explorar o universo dos dragões. Ao inserir o nome de um dragão no campo de pesquisa, o usuário é apresentado a uma breve sinopse e informações relevantes sobre a criatura, incluindo imagens.

Funcionalidades Principais:
  1.Pesquisa: Permite ao usuário buscar por dragões específicos através de um campo de pesquisa.
  2.Resultados Dinâmicos: A seção de resultados é atualizada em tempo real, exibindo informações relevantes para a pesquisa realizada.
  3.Design Responsivo: A aplicação se adapta a diferentes tamanhos de tela, proporcionando uma experiência consistente em dispositivos móveis e desktops.
Tecnologias Utilizadas:
  1.HTML: Estrutura básica da página web, definindo os elementos como cabeçalho, corpo, seções e formulários.
  2.CSS: Estiliza a página, definindo cores, fontes, layout e responsividade.
  3.JavaScript: Adiciona interatividade à página, permitindo a pesquisa e a atualização dinâmica dos resultados.
Como Funciona:
  1.Interface do Usuário: O usuário interage com a aplicação através de um campo de pesquisa e um botão.
  2.Evento de Clique: Ao clicar no botão "Pesquisar", a função pesquisar() é acionada.
  3.Busca: A função pesquisar() captura o termo de pesquisa, converte-o para minúsculas e busca por correspondências nos dados dos dragões.
  4.Resultados: Se houver correspondências, a função gera HTML dinâmico para cada resultado, incluindo o título, descrição e uma imagem do dragão.
  5.Atualização da Página: O HTML gerado é inserido na seção de resultados, substituindo o conteúdo anterior.
Estrutura de Arquivos:
  1.index.html: Arquivo principal da aplicação, contendo a estrutura HTML da página.
  2.styles.css: Arquivo CSS responsável por estilizar a página.
  3.dados.js: Arquivo JavaScript contendo os dados dos dragões (título, descrição e imagem).
  4.app.js: Arquivo JavaScript contendo a lógica da aplicação, incluindo a função de pesquisa.
