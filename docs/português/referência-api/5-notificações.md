---
tags: [Referência da API, Webhook, Eventos]
---

# Webhook

Os webhooks são uma forma de os sistemas enviarem notificações em tempo real sobre eventos ocorridos. Eles funcionam permitindo que um Cliente forneça um serviço que pode receber notificações sempre que determinados eventos ocorrerem nos sistemas da Fiserv. Com os webhooks, os aplicativos podem se manter atualizados sobre coisas como alterações de autorização, atualizações de cartão ou conta e alertas de fraude.

Para usar webhooks, o FirstVision pode enviar uma solicitação HTTP POST para um endpoint designado sempre que ocorrer um evento. Isso envia uma notificação para o aplicativo receptor, que pode executar a ação necessária em resposta. Os webhooks fornecem uma maneira rápida e eficiente para diferentes sistemas se comunicarem e se manterem informados sobre eventos importantes.

Para a implementação do Webhook, a Fiserv fornece os padrões e o design da API para os diferentes Endpoints que os Clientes precisam implementar ao seu lado. Esses endpoints são responsáveis pelas notificações ao Usuário Final e quaisquer outras funcionalidades que os Clientes queiram ter internamente.

![image](https://user-images.githubusercontent.com/111396588/209873236-86eb54b6-f214-4f8f-9652-51c03ad8d604.png)

Se o tipo de autenticação for OAuth, o cliente deverá expor uma API para obter o token de autorização.
Se a autenticação não for OAuth, a autenticação poderá ser por meio de chave API ou autorização básica.

## Informação sensível

Todos os payloads podem conter o campocryptedData mas ele será usado dependendo da necessidade do Cliente, se o cliente precisar de Dados Sensíveis em Texto Simples, os payloads do Webhook enviarão este campo com todos os Dados Sensíveis em um formato criptografado e então os Clientes poderão descriptografe-o e obtenha dados simples de texto.

## Webhooks Events

### Authorization

Request example:

```json
{
  "contact": [
    {
      "value": "per*******@m*********.com",
      "contactType": "PRINCIPAL_EMAIL"
    }
  ],
  "metadata": [
    {
      "key": "M_LINE_21",
      "value": "00"
    }
  ],
  "cardNumber": "***************5669",
  "description": "APPROVED",
  "transaction": {
    "id": "01765999999998 2013572895880110A00000000000000000000 /12 00",
    "amount": "00000000010.00",
    "reason": "294",
    "currency": "MXN",
    "feeAmount": "00000000010.00",
    "acceptorName": "TEST MERCHANT",
    "cashbackAmount": "00000000010.00",
    "authorizationDate": "20221202",
    "authorizationTime": "141638",
    "additionInformation": "0120484MEXICO 0"
  }
}
```

### Account Life Cycle

Includes events for: **Payment Due Date Event and Account Cycle Event.**

Request example:

```json
{
  "contact": [
    {
      "value": "per*******@m*********.com",
      "contactType": "PRINCIPAL_EMAIL"
    }
  ],
  "metadata": [
    {
      "key": "M_LINE_21",
      "value": "0"
    }
  ],
  "description": "APPROVED",
  "transaction": {
    "eventDate": "20220127",
    "eventTime": "141638"
  }
}
```

### Account Management

Includes events for: **Available Credit Event, Payment Posted Event, Change of Address, Payment Due Date Change and Credit Limit Change.**

Request example:

```json
{
  "contact": [
    {
      "value": "per*******@m*********.com",
      "contactType": "PRINCIPAL_EMAIL"
    }
  ],
  "metadata": [
    {
      "key": "M_LINE_21",
      "value": "00"
    }
  ],
  "description": "APPROVED",
  "transaction": {
    "eventDate": "20220127",
    "eventTime": "141638"
  }
}
```

### Card Life Cycle

Includes events for: **Card Blocked Message, Activation Message and Card Action/Embossing.**

Request example:

```json
{
  "contact": [
    {
      "value": "per*******@m*********.com",
      "contactType": "PRINCIPAL_EMAIL"
    }
  ],
  "metadata": [
    {
      "key": "M_LINE_21",
      "value": "00"
    }
  ],
  "cardNumber": "***************5669",
  "description": "APPROVED",
  "transaction": {
    "eventDate": "20221202",
    "eventTime": "141638",
    "blockReason": "TEST MERCHANT",
    "isActivated": "Y"
  }
}
```

### Fraud Authorization

Request example:

```json
{
  "contact": [
    {
      "value": "per*******@m*********.com",
      "contactType": "PRINCIPAL_EMAIL"
    }
  ],
  "metadata": [
    {
      "key": "M_LINE_21",
      "value": "00"
    }
  ],
  "cardNumber": "***************5669",
  "description": "APPROVED",
  "transaction": {
    "amount": "00000000010.00",
    "reason": "294",
    "currency": "MXN",
    "eventDate": "20221202",
    "eventTime": "141638",
    "acceptorName": "TEST MERCHANT"
  }
}
```

### Fraud Block

Request example:

```json
{
  "contact": [
    {
      "value": "per*******@m*********.com",
      "contactType": "PRINCIPAL_EMAIL"
    }
  ],
  "metadata": [
    {
      "key": "M_LINE_21",
      "value": "00"
    }
  ],
  "cardNumber": "***************5669",
  "description": "APPROVED",
  "transaction": {
    "reason": "294",
    "eventDate": "20221202",
    "eventTime": "141638",
    "blockReason": "MERCHANT"
  }
}
```

---

## Veja também

- [Access Token](?path=docs/português/referência-api/accessToken.md)
- [Criptografia ao Nível de Mensagem](?path=docs/português/referência-api/criptografia.md)
- [Gestão de Resposta ](?path=docs/português/referência-api/gestão-resposta.md)
- [Glossário API](?path=docs/português/referência-api/glossário-api.md)
- [Solicitação de API](?path=docs/português/referência-api/solicitação-api.md)

---
