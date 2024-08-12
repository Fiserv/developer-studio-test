---
tags: [Referência da API, Resposta de Erro]
---

# Resposta de Erro

Fiserv inclui a `errorResponse` como parte do objeto com erro juntamente com os dados correspondentes em `type`, `code`, `field` y `message`.

<!--
type: tab
titles: Error, Exemplo de JSON, Resposta de Erro
-->

A tabela a seguir identifica os parâmetros de erro do objeto.

| Variável  | Tipo     | Comprimento máximo | Descrição                                               |
|-----------|----------|--------------------|---------------------------------------------------------|
| `type`    | *string* | 256                | O tipo de resposta do HOST, GATEWAY, NETWORK ou APIM.   |
| `code`    | *string* | 256                | Código de resposta de erro de host, gateway ou rede.    |
| `field`   | *string* | 256                | A propriedade ou atributo associado ao erro.            |
| `message` | *string* | 256                | Informações específicas de uma propriedade ou atributo. |

<!--
type: tab
-->

Formato de string JSON para `error`:

```json
{
  "error": {
    "type": "GATEWAY",
    "code": "XXX",
    "field": "sourceType",
    "message": "Missing type ID property."
  }
}
```

<!--
type: tab
-->

Exemplo de uma resposta de carga (400: Bad Request)

```json
{
  "errorResponse": {
    "gatewayResponse": {
      "transactionType": "CANCEL",
      "transactionState": "DECLINED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails": {
        "orderId": "CH-aafaaf45-0cfb-4f4f-8ec0-301e40c14e34",
        "transactionTimestamp": "2021-06-20T23:42:48Z",
        "apiTraceId": "5c059eee2388e191",
        "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
        "transactionId": "b2d883cdf3051598acb295f29a1e1582"
      }
    },
    "error": [
      {
        "type": "GATEWAY",
        "code": "703",
        "message": "Write to downstream failed"
      }
    ]
  }
}
```

<!-- type: tab-end -->

---

## Veja também

- [Criptografia ao Nível de Mensagem](?path=docs/português/referência-api/criptografia.md)
- [Gestão de Resposta](?path=docs/português/referência-api/gestão-resposta.md)
- [Glossário API](?path=docs/português/referência-api/glossário-api.md)
- [Solicitação de API](?path=docs/português/referência-api/solicitação-api.md)
- [Webhook](?path=docs/português/referência-api/5-notificações.md)

---
