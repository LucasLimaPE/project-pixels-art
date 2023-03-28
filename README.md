<h1 align="center">Project Pixels Art</h1>

## :memo: Descrição
Este projeto foi criado com o propósito de testar e exercitar as habilidades desenvolvidas no Módulo de Fundamentos do curso de Desenvolimento Web Full Stack na Trybe.

O projeto consiste em implementar uma págine web que contem uma paleta de cores funcional que pode ser utilizada para criar desenhos em pixels, utilizando JavaScript, HTML e CSS.

## :books: Requisitos 
1. Adicionar à página o título "Paleta de Cores".
  - O título deverá ficar dentro de uma tag `h1` com o `id` `title`.

2. Adicionar à página uma paleta contendo quatro cores distintas.
  - A paleta de cores deve ser um elemento com o `id` `color-palette`, cada cor individual na paleta deverá possuir a `classe` `color`.
  - A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa e não pode ser branca.
  - Cada elemento da paleta deverá ter uma borda preta, sólida e com 1 pixel de largura.
  - As cores deverão ser posicionadas lado a lado e estar abaixo do título "Paleta de Cores".
  - A paleta de cores não deve conter cores repitidas.

3. A cor preta deve ser a primeira cor na paleta de cores.

4. Adicionar à página um quadro de pixels, com 25 pixels.
  - O quadro de "pixels" deve ter 5 elementos de largura e 5 de comprimento.
  - O quadro de "pixels" deve possuir o `id` `pixel-board`, e cada elemento dentro dele deve possuir a `classe` `pixel`.
  - A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca.
  - O quadro de "pixels" deve estar abaixo da paleta de cores.

5. Cada elemento do quadro de pixels deve possuir 40 pixels de largura, 40 pixels de altura e ser delimitado por uma borda preta de 1 pixel.

6. Ao iniciar a página a cor preta deve estar selecionada para pintar os pixels.
  - O elemento da cor preta deve possuir, inicialmente, a `classe` `selected`.

7. Clicar em uma das cores da paleta faz com que ela seja selecionada para preencher o pixel no quadro.

8. Clicar em um pixel dentro do quadro após selecionar uma cor na paleta deve o colorir com a cor selecionada.

9. Criar um botão que, ao ser clicado, limpa o quadro de pixels preenchendo a cor de todos os seus pixels com branco.

### Requisitos bônus

10. Fazer com que o quadro de pixels possa ter seu tamanho definido pela pessoa usuária.
  - Criar um botão que permita definir um quadro de pixels com o tamanho entre 5 e 50.
  - Ao clicar no botão, deve ser gerado um quadro de N pixels de largura e N pixels de altura, onde N é o número inserido no input.
  - Utilizando as atributos do input, deve-se fazer com que o input só aceite números maiores que zero.
  - O botão deve conter o texto "VQV".
  - O botão deve estar posicionado ao lado do input.
  - Se nenhum valor for colocado no input ao clicar no botão, mostre uma alert com o texto:"Board inválido!".
  - O novo quadro de pixels deve ter todos os pixels preenchidos com a cor branca.

11. Limite o tamanho mínimo e máximo do board que deve ser entre 5 e 50.
  - Caso seja inserido um valor menor que 5, deve-se considerar o valor 5 como padrão.
  - caso seja inserido um valor maior que 50, deve-se considerar 50 como padrão.

12. Fazer com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.
  - A cor preta ainda precisa estar presente e deve ser a primeira na sua paleta de cores.

## :wrench: Tecnologias utilizadas
* JavaScript;
* HTML5;
* CSS3.

## :computer: Arquivos modificados/criados
* script.js
* index.html
* style.css

## :rocket: Rodando o projeto localmente
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)

1. Clone esse repositório para sua máquina com o seguinte comando no terminal:

```bash
 git clone git@github.com:LucasLimaPE/project-lessons-learned.git
```

2. Via interface gráfica, vá até a pasta 'project-pixels-art' criada. Entre nela.

3. Dê um duplo clique no arquivo index.html

## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/dev-lucas-lima-pe/">
        <img src="https://avatars.githubusercontent.com/u/94488633?s=400&u=c0fc6e9a64565b85fc249c1b7a302c7b674ff785&v=4" width="100px;" alt="Foto de Lucas Lima no GitHub"/><br>
        <sub>
          <b>LucasLimaPE</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto

Foram desenvolvidos 100% dos requisitos do projeto.