---
tags: [Referência da API, Cabeçalho de Pedidos, Corpo da Solicitação, Cabeçalho]
---

# Solicitação de API

## Cabeçalho da Solicitação

A API RESTful possui uma estrutura de cabeçalho consistente com base em um conjunto de parâmetros.

<!--
type: tab
titles: Cabeçalho, Exemplo de cabeçalho de solicitação
-->

Para criar o cabeçalho, forneça os seguintes valores:

| Variável            | Tipo      | Comprimento | Descrição/Valores                                                                                                                                                                                                                        |
|---------------------|-----------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Content-Type`      | *string*  | N/A         | Os tipos de conteúdo. Valor Válido (Aplicação/JSON)                                                                                                                                                                    |
| `Client-Request-Id` | *string*  | N/A         | Um ID gerado pelo cliente para rastreamento de solicitação e criação de assinatura, exclusivo por solicitação. Isso também é usado para o controle da idempotência. Um formato UUID de 128 bits é recomendado.         |
| `apikey`           | *string*  | N/A         | Chave da API fornecida ao comércio associando as solicitações ao aplicativo apropriado no Portal do desenvolvedor.                                                                                                     |
| `Timestamp`         | *integer* | N/A         | O registro de data Epoch em milissegundos na solicitação de um sistema do cliente. É utilizado para geração de assinaturas de mensagens e limitação de tempo (5 minutos).                                              |
| `Accept-Language`   | *string*  | N/A         | O cabeçalho Accept-Language contém informações sobre a preferência de idioma do usuário. Este cabeçalho HTTP é útil para sites multilíngues decidirem o melhor idioma para atender o Cliente. exemplo: en-US ou fr-CA. |
| `Auth-Token-Type`   | *string*  | N/A         | Indica o tipo de autorização HMAC ou AccessToken.                                                                                                                                                                      |
| `Authorization`     | *string*  | N/A         | Ele é usado para garantir que a solicitação não seja adulterada durante a transmissão.                                                                                                                                 |
| `Message-Digest`    | *string*  | N/A         | Requeridos apenas de browser ou app do cliente para a API em pedidos de páginas de pagamento hospedadas.                                                                                                               |

<!--
type: tab
-->

```json
"header": {
  "Content-Type": "application/json",
  "Client-Request-Id": "CLIENT_REQUEST_ID",
  "apikey": "API_KEY",
  "Timestamp": "TIMESTAMP",
  "Auth-Token-Type": "AUTH_TOKEN_TYPE" ,
  "Authorization": "ACCESS_TOKEN"
}
```

<!-- type: tab-end -->

---

## Corpo da Solicitação

O corpo da solicitação de transação difere dependendo da transação que está sendo iniciada.

<!--
type: tab
titles: Exemplo de corpo de solicitação
-->

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "paymentSource": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "merchantDetails": {
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}
```

<!-- type: tab-end -->

---

## Veja também

- [Access Token](?path=docs/português/referência-api/accessToken.md)
- [Criptografia ao Nível de Mensagem](?path=docs/português/referência-api/criptografia.md)
- [Gestão de Resposta](?path=docs/português/referência-api/gestão-resposta.md)
- [Glossário API](?path=docs/português/referência-api/glossário-api.md)
- [Webhook](?path=docs/português/referência-api/5-notificações.md)

---
