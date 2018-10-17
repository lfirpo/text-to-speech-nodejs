<h1 align="center" style="border-bottom: none;">🔊 Demonstração de Texto para Fala </h1>
<h3 align="center">Aplicativo exemplo em Node.js que apresenta alguns dos recursos do serviço IBM Watson Text to Speech. </h3>
<p align="center">
  <a href="http://travis-ci.org/watson-developer-cloud/text-to-speech-nodejs">
    <img alt="Travis" src="https://travis-ci.org/watson-developer-cloud/text-to-speech-nodejs.svg?branch=master">
  </a>
  <a href="#badge">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
</p>
</p>

Text to Speech é projetado para streaming, baixa latência, síntese de áudio do texto. É o inverso do reconhecimento automático de fala.

Você pode ver um [demo][demo_url] deste aplicativo.

## Pré-requisitos

1. Inscreva-se em uma [conta do IBM Cloud](https://console.bluemix.net/registration/).
1. Faça Download do [IBM Cloud CLI](https://console.bluemix.net/docs/cli/index.html#overview).
1. Crie uma instância do serviço Speech to Text e obtenha suas credenciais:
    - Vá para a página [Text to Speech](https://console.bluemix.net/catalog/services/text-to-speech) do Catálogo do Cloud da IBM.
    - Faça login na sua conta do IBM Cloud.
    - Clique em **Criar**.
    - Clique **Mostrar Credenciais** para ver as credenciais do serviço.
    - Copie o valor da `apikey`, ou copie o `username` (Nome do Usuário) e `password` (Senha) se a sua instância de serviço não fornecer uma `apikey`.
    - Copie o valor da `url` da API.

## Configurando o aplicativo

1. Faça uma clonagem deste repositório, tal como, na linha de comando de exemplo do Linux abaixo: 

    ```
    mkdir ~/Apps
    cd ~/Apps
    git clone https://github.com/giovanebarcelos/text-to-speech-nodejs
    cd ~/Apps/text-to-speech-nodejs 
    ```

2. Na pasta do aplicativo, copie o arquivo *.env.example* e crie um arquivo chamado *.env*

    ```
    cp .env.example .env
    ```

3. Abra o arquivo *.env* e adicione as credenciais de serviço obtidas na etapa anterior.

    Exemplo *.env* do arquivo que configura o `apikey` e a ` url` para uma instância do serviço Text to Speech hospedada na região sul dos EUA:

    ```
    TEXT_TO_SPEECH_IAM_APIKEY=X4rbi8vwZmKpXfowaS3GAsA7vdy17Qh7km5D6EzKLHL2
    TEXT_TO_SPEECH_URL=https://stream.watsonplatform.net/text-to-speech/api
    ```
    - Se sua instância de serviço usa credenciais `username` (Nome de usuário) e` password` (Senha), preencha as variáveis `TEXT_TO_SPEECH_USERNAME` e `TEXT_TO_SPEECH_PASSWORD` no arquivo * .env *. Certifique-se também que a URL anotada anteriormente esta correta.

    Example *.env* file that configures the `username`, `password`, and `url` for a Text to Speech service instance hosted in the US South region:
    
    Exemplo de arquivo *.env* que configura o `username`,` password` e `url` para uma instância do serviço Text to Speech hospedada na região do sul dos EUA
    
    ```
    TEXT_TO_SPEECH_USERNAME=522be-7b41-ab44-dec3-g1eab2ha73c6
    TEXT_TO_SPEECH_PASSWORD=A4Z5BdGENrwu8
    TEXT_TO_SPEECH_URL=https://stream.watsonplatform.net/text-to-speech/api
    ```

## Rodando Localmente

1. Instale as dependências

    ```
    npm install
    ```

1. Execute a aplicação

    ```
    npm start
    ```

1. Visualize a aplicação em um navegador no endereço `localhost:3000`

## Vamos implantar esta aplicação no IBM Cloud como um aplicativo Cloud Foundry

1. Faça o login no IBM Cloud com o [IBM Cloud CLI](https://console.bluemix.net/docs/cli/index.html#overview), escolhendo a localização da API registrada anteriormente. No caso do Sul dos Estados Unidos deve utilizar a opção 4 (us-south), que corresponde aos exemplos apresentados até aqui.

    ```
    ibmcloud login
    ```

1. Defina uma organização e um espaço no Cloud Foundry

    ```
    ibmcloud target --cf
    ```
1. Edite o arquivo *manifest.yml* . Altere os seguintes campos: 
   - **name** para algo único. Por exemplo, `- name: my-app-name` 
   - **memory** para `256M` se estiver utilizando a versão gratuita 
   - **my-stt-service** para o nome do serviço `Text to Speech` que foi criado no Bluemix
   
1. Faça o deploy da aplicação

    ```
    ibmcloud app push
    ```

1. Visualize o aplicativo on-line na URL do aplicativo, por exemplo: https://my-app-name.mybluemix.net

## Estrutura de diretórios

```none
.
├── app.js                      // rotas do express
├── config                      // configuração do express
│   ├── error-handler.js
│   ├── express.js
│   └── security.js
├── manifest.yml
├── package.json
├── public                      // recursos estáticos
├── server.js                   // ponto de entrada
├── test                        // testes
└── views                       // componentes do react
```

## Licença

   Este código de amostra está licenciado no Apache 2.0.

## Contribuição

  Veja [CONTRIBUTING](./CONTRIBUTING.md).

## Open Source @ IBM
   
   Encontre mais projetos de código aberto na [Página do IBM Github](http://ibm.github.io/)

[service_url]: https://www.ibm.com/watson/services/text-to-speech/
[docs]: https://www.ibm.com/watson/developercloud/text-to-speech/api/v1/curl.html?curl
[sign_up]: https://console.bluemix.net/registration/?target=/catalog/services/text-to-speech/
[demo_url]: https://text-to-speech-demo.ng.bluemix.net
