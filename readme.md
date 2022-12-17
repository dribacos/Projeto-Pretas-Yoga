<h1 align="center">
    <br>
    <p align="center">Projeto Final {reprograma}<p>
</h1>

<h1 align="center">
<img src="https://uploaddeimagens.com.br/images/004/264/325/full/Pretas_Yoga.png?1671239049" alt="mulheres negras fazendo yoga, junto com o titulo Pretas yoGA" width="500">
<p align="center"><p>
</h1>

#  {reprograma} Projeto Pretas Yoga  🧘🏾‍♀️ 🙏🏾 ✨ 


## 💻 *Sobre o Projeto* 

O “Pretas yoga”, projeto de conclusão do  bootcamp de back-end da [{reprograma}](https://reprograma.com.br/), é uma API que tem por objetivo listar estúdios com aulas de Yoga gratuitas ou com valor social para mulheres pretas em SP.

## *Contextualização*
<h1 align="center">
O Yoga não é apenas uma atividade corporal, o Yoga é capaz de alinhar o corpo e a mente, alivia as tensões e proporciona a cura. Além disso, aumenta a capacidade de concentração, combate estresse, ansiedade e possui ferramentas capazes de ajudar o praticante a lidar com traumas, isso foi comprovado cientificamente pelo Instituto Nacional de Saúde dos Estados Unidos (EUA). 
</h1>

Baseado em minhas vivências no yoga como mulher preta, quando comecei a praticar yoga em São Paulo percebi que eu era a única mulher preta nas aulas, tanto nas aulas abertas e gratuitas quanto as pagas. Decidi, então, investir em minha formação em yoga para ocupar espaços como mulher negra e como instrumento de autoconhecimento. Por ser um curso caro e geralmente em bairros nobres da cidade, me vi como única mulher preta na sala. Porque o yoga ainda costuma ser um espaço de pessoas brancas e de elite. Quanto mais eu me aprofundava nos estudos, entendia que o yoga é na verdade de todos e para todos, porém não tem alcançado todos, principalmente corpos pretos. E quando olhamos com atenção para as mulheres pretas e periféricas, percebemos um padrão na falta de autocuidado. Essas mulheres, no geral, trabalham muito, se preocupam com a casa e em pôr a comida na mesa para a família, muitas não conseguem fazer mais do que isso com o pequeno salário que ganham e ficam sem condições de investir nelas mesmas.  E facilitar o acesso dessas mulheres ao yoga pode ajudá-las para o autocuidado, saúde mental e espiritual, além da melhora da saúde física. Com isso, elas podem ter mais consciência de mundo, enxergar a vida além do trabalho, se amar mais e se reconectar com sua ancestralidade, e a partir disso criar uma rede de apoio e cuidado. Porque yoga não é somente sobre flexibilidade e apenas para ricos e brancos, é sobre viver bem, é sobre cuidar de si, olhar para dentro e olhar para o todo.

Assim, o intuito é conscientizar professores de yoga/ estúdios a incluir mais mulheres pretas nas aulas com gratuidade e valor social, mostrando a elas que é possível praticar e viver o Yoga.

## *Documentação da REST API*
Swagger UI disponível [aqui](https://projetopretasyoga.onrender.com/minha-rota-de-documentacao/) 

<h1 align="center">
<img src=https://uploaddeimagens.com.br/images/004/264/429/full/rotas_swagger_0.PNG?1671251661" alt="uma documentação das rotas implementadas na API Preta Yoga" width="500">
<p align="center">Pretas Yoga - API <p>
</h1>


## *Funcionalidades*:

- [x] O schema das alunas possui os campos: id (autogerado), nomeAluna, idade, raça_cor, telefone, e-mail, zonaUrbanaSP, matriculada, estudio.
- [x] O schema dos estúdios possui os campos: id (autogerado), login, senha, nomeEstudio, rua, número, bairro, zonaUrbanaSP, quantidadeVagas.
- [x] A API permite o cadastro das alunas e dos estúdios;
- [x] A API permite a visualização das alunas e estúdios cadastrados;
- [x] A API permite alterações no cadastro dos estúdios;
- [x] A API permite a exclusão de estúdios do banco de dados.
- [x] Criação de usuário e login para os Estúdios com acesso sem restrição;
- [x] Preenchimento de formulário para alunas, somente visualização e seleção dos estúdios.

## *Instalação*

```bash
# Clonar o repositório
$ git clone https://github.com/dribacos/Projeto-Pretas-Yoga

# Entrar na pasta do repositório
$ cd pretasyoga

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start

```
Caso esteja utilizando outro gerenciador de pacotes, apenas altere o npm para seu respectivo instalador.


## *Tecnologias e pacotes utilizados*
- Node.js
- MongoDB
- Git
- Mongo Atlas
- express
- cors
- nodemon
- dotenv-safe
- mongoose
- bcrypt
- jsonwebtoken
- swagger-autogen
- swagger-ui-express
- Postman
- Render


## *Rotas/Endpoints*

| Rotas alunas                             |                                                    |
| ---------------------------------------  | -------------------------------------------------- | 
| GET/pretasyoga/cadastradas               | Lista alunas cadastradas                           |
| GET/pretasyoga/alunasmatriculadas/:id    | Lista aluna por ID                                |
| POST/pretasyoga/cadastrar                | Cria alunas                                   |



| Rotas Estúdios                           |                                                    |
| ---------------------------------------  | -------------------------------------------------- | 
| GET/pretasyoga/listarestudios            | Lista estúdios cadastrados                         |
| POST/pretasyoga/cadastrarestudio         | Cadastrar estúdios                                 |
| POST/pretasyoga/login                    | Login estúdio                                      |
| patch/atualizardadosestudio/:id          | altera dados de vagas                              |
| delete/pretasyoga/deletarestudio/id      | Exclui estúdio cadastrado                         |

## *Implementações futuras* 💡
* Testes
* Integração com APIs externas
* View

## *Contribua para o nosso projeto!*

1. Faça o fork do projeto;
2. Crie uma branch para realizar suas alterações: `git checkout -b feature/nome-da-nova-branch`
3. Commit as alterações feitas e abra um pull request

## *Recursos e rotas*
Esta API está sendo escutada na `porta 3030` e para que todas as rotas possam ser acessadas localmente é necessário usar `http://localhost:3030/` antes dos endpoints de requisição.


## *Conecte-se comigo* 💌
- E-mail: adraneabc_ap@hotmail.com 
- LikedIn: [Adriane Costa](https://www.linkedin.com/in/adriane-costa-977a04b7/)
<h1 align="center">
  <img src="https://uploaddeimagens.com.br/images/004/264/426/full/foto_para_apres_guith.jpeg?16712506884" alt="mulher negra, cabelo black power, jovem, usando óculos redondos e vestindo uma blusa verde">
  <p align="center">Deva Back-End Adriane Costa
<p>
</h1>
               

Desenvolvido com :purple_heart: 
</p>
