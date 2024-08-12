---
tags: [Referência da API, Gestão de Resposta, Código de Resposta, Código de Status HTTP]
---

# Código de Resposta e Gestão de Mensagens

Os códigos de resposta identificam o status final da transação do gateway, host e/ou servidor (HTTP). Os códigos e mensagens são únicos por status de transação que inclui: aprovações, rejeições e erros.

## Códigos de Status HTTP

O status da transação pode ser determinado pelo código de status HTTP de três dígitos da resposta. Esses códigos de status são agrupados em três classes diferentes e o primeiro dígito pode ser usado para identificar rapidamente a classe de um código de status.

- **2xx: Sucesso** - Indica que a solicitação com sucesso e retornará o objeto ProcessResponseDetails junto com o `errorResponse` e a `responseMessage`. Esta pode ser a resposta do remetente ou uma resposta de erro do processador.
- **4xx: Client Error** - Indica dados incorretos na requisição e retornará o objeto `errorResponse` junto com o código, mensagem e campo.
- **5xx: Erro do Servidor** - Indica que o servidor não conseguiu processar a solicitação e retornará o objeto `errorResponse` junto com o código, a mensagem e o campo.

<!--
type: tab
titles: 2xx, 4xx, 5xx
-->

### Código e Descrição do Status de Sucesso

| Código | Mensagem     | Descrição                                                                                 |
|--------|--------------|-------------------------------------------------------------------------------------------|
| 200    | Sucesso      | Indica que uma solicitação foi bem-sucedida.                                              |
| 201    | Criado       | Indica que uma solicitação foi bem-sucedida e um novo recurso foi criado como resultado.  |
| 204    | Sem conteúdo | Indica que uma solicitação foi bem-sucedida e o Cliente não precisa sair da página atual. |

<!--
type: tab
-->

### Descrição do Código e Resolução do Estado de Erro do Cliente

| Código | Mensagem                          | Descrição                                                                                                        | Resolución                                                                                  |
|--------|-----------------------------------|------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| 400    | Bad Request                       | A solicitação não pôde ser compreendida devido à sintaxe incorreta.                                              | O lojista deve fazer as modificações e repetir a solicitação.                               |
| 401    | Não Autorizado                    | Indica que a solicitação requer informações de autenticação do usuário.                                          | O comerciante pode repetir a solicitação com um campo de cabeçalho de autorização adequado. |
| 403    | Proibido                          | Pedido não autorizado. O comerciante não tem direitos de acesso ao conteúdo.                                     | Obter acesso.                                                                               |
| 404    | Não Foi Encontrado                | Não pode encontrar o recurso solicitado.                                                                         | Consulte o list de API.                                                                     |
| 408    | Expiração do Tempo de Solicitação | Nenhuma resposta à solicitação foi recebida dentro do prazo estabelecido.                                        | Por favor, tente novamente mais tarde.                                                      |
| 415    | Tipo de Mídia Não Permitido       | Não conseguiu processar o tipo de mídia fornecido, conforme indicado pelo cabeçalho da solicitação Content-Type. | O lojista deve corrigir os dados e reenviar.                                                |
| 422    | Conteúdo não processável          | Não foi possível processar as instruções contidas.                                                               |O comerciante deve fazer as modificações e repetir a solicitação.                            |
| 425    | Muito Cedo                        | A solicitação foi enviada muito cedo.                                                                            | O lojista deve aguardar algum tempo e enviar a solicitação.                                 |
| 429    | Muitos Pedidos                    | O comerciante enviou muitas solicitações em um determinado período de tempo.                                     | O lojista deve aguardar algum tempo e enviar a solicitação.                                 |

<!--
type: tab
-->

### Código de Status de Erro do Servidor, Descrição e Resolução

| Código | Mensagem                 | Descrição                                                                   | Resolução                    |
|--------|--------------------------|---------------------------------------------------------------------------- |------------------------------|
| 500    | Erro do Servidor Interno | O encontrou uma condição inesperada que o impediu de atender à solicitação. | Informe o erro.              |
| 502    | Gateway ruim             | O servidor recebeu uma resposta inválida do servidor upstream.              | Tente depois de algum tempo. |
| 503    | Serviço Não Disponível   | O servidor de aplicativos não está pronto para lidar com a solicitação.     | Tente depois de algum tempo. |
| 504    | Tempo Limite do Gateway  | O não teve resposta do aplicativo.                                          | Tente depois de algum tempo. |

<!-- type: tab-end -->

---

## Veja também

- [Access Token](?path=docs/português/referência-api/accessToken.md)
- [Criptografia ao Nível de Mensagem](?path=docs/português/referência-api/criptografia.md)
- [Glossário API](?path=docs/português/referência-api/glossário-api.md)
- [Solicitação de API](?path=docs/português/referência-api/solicitação-api.md)
- [Webhook](?path=docs/português/referência-api/5-notificações.md)

---
