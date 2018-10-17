import React from 'react';
import PropTypes from 'prop-types';
import { Header, Jumbotron } from 'watson-react-components';

// eslint-disable-next-line
const DESCRIPTION = 'O serviço Text to Speech entende texto e linguagem natural para gerar saída de áudio sintetizada completa com cadência e entonação apropriadas. Está disponível em 13 vozes em 7 idiomas. As vozes selecionadas agora oferecem os recursos Expressive Synthesis e Voice Transformation.';
const GDPR_INFO = 'Este sistema é apenas para fins de demonstração e não se destina a processar dados pessoais. Nenhum dado pessoal deve ser inserido neste sistema, pois pode não ter os controles necessários para atender aos requisitos do Regulamento Geral de Proteção de Dados (UE) 2016/679.';

function Layout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <title>
          Demonstração de Texto para Fala
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Demonstração de Texto para Fala" />
        <meta name="og:description" content={DESCRIPTION} />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Header
          mainBreadcrumbs="Texto para Fala"
          mainBreadcrumbsUrl="https://www.ibm.com/watson/services/text-to-speech/"
          subBreadcrumbs="Demonstração de Texto para Fala"
          subBreadcrumbsUrl="https://text-to-speech-demo.mybluemix.net"
        />
        <Jumbotron
          serviceName="Texto para Fala"
          repository="https://github.com/watson-developer-cloud/text-to-speech-nodejs"
          documentation="https://console.bluemix.net/docs/services/text-to-speech/getting-started.html"
          apiReference="http://www.ibm.com/watson/developercloud/text-to-speech/api/v1/"
          startInBluemix="https://console.bluemix.net/registration/?target=%2Fcatalog%2Fservices%2Fnatural-language-understanding%3FhideTours%3Dtrue%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmca1%3D000000OF%26cm_mmca2%3D10000409"
          version="GA"
          serviceIcon="/images/service-icon.svg"
          description={DESCRIPTION}
        />
        <div className="_container _container_large gdpr-info">
          {GDPR_INFO}
        </div>
        <div id="root">
          {children}
        </div>
        <script type="text/javascript" src="js/bundle.js" />
        <script type="text/javascript" src="https://cdn.rawgit.com/watson-developer-cloud/watson-developer-cloud.github.io/master/analytics.js" />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
};

export default Layout;
