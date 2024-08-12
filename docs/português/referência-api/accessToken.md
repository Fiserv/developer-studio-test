
# Access Token

Para utilizar as nossas APIs expostas nos módulos de Contas, Cartões, Clientes e Transações, é necessário a utilização de um Access Token.

De maneira prática, o Access Token é uma sequência de caracteres que atua como uma chave digital, permitindo que uma determinada aplicação acesse os recursos e dados específicos das nossas APIs com segurança. Ele garante que apenas clientes autenticados e autorizados possam interagir com os serviços disponibilizados.

![1](https://github.com/user-attachments/assets/5e0e7d2a-7a2c-4410-b17b-1f3b924eeff8)

A presente página documentará como solicitar um token de acesso usando as credenciais do cliente seguindo uma política com padrão OAuth (Open Autorization), que permite ao usuário acessar os recursos sem compartilhar suas credenciais.

## Requisição

### Endpoint

**Method:** Post

**URL:** `https://{{endpoint}}/token`

### Autenticação

O tipo de autorização para esta chamada é **“Autenticação básica”**. Ela usa a API key como username e o client secret como password.

![2](https://github.com/user-attachments/assets/022ffb9d-872e-434f-a851-2e94ecb13078)

Ao configurar este tipo de autorização no Postman, ele irá gerar automaticamente a Header de Autorização codificando o username e password em Base64, acrescentando inclusive o “Basic ” (com o espaço à direita).

![3](https://github.com/user-attachments/assets/5a3d5ed5-0218-4360-88cc-be857919d720)

**Obs:** As credenciais (Api key -username- e client secret -password-) devem ser requisitadas pelo cliente ao PM para que este solicite ao time de API.

### Headers

**Content-Type:** application/x-www-form-urlencoded

**apikey:** A mesma Apikey usada como username citada na seção de autorização.

**Authorization:** Gerado automaticamente pelo Postman com o "tipo de autorização" anterior.

![4](https://github.com/user-attachments/assets/ec573822-5aeb-44e1-9788-db0a6cba4b85)

### Exemplo de Requisição

```bash
curl --location 'https://{{endpoint}}/{{product}}/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'apikey: rfDarhUD3omwZf1hwQphgegrd0Yodx9y' \
--header 'Authorization: Basic c3FIOG9vSGV4VHoAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ' \
--data-urlencode 'grant_type=client_credentials'
```

***Observação:** Todos os valores na solicitação de amostra são fictícios com intenção puramente instrucional.*

## Resposta

![5](https://github.com/user-attachments/assets/97977392-3fb1-4234-985f-6ed7b13b4dd4)

**`token_type`** está configurado para o tipo de autorização Bearer Token. Além disso, o token de acesso necessário para quaisquer solicitações enviadas às APIs expostas nos módulos de Cartões, Clientes, Contas, e Transações estará no campo **`access_token`** da resposta.

Sendo assim, caso esteja usando o Postman, é necessário configurar o Bearer Token na aba de autorização das requisições.

![6](https://github.com/user-attachments/assets/dcfb9bb5-ca47-48fa-b08a-fa5137662425)

Caso contrário, basta adicionar manualmente a cada solicitação uma Header de Authorization com o conteúdo "Bearer [ACCESS_TOKEN]", no qual o [ACCESS_TOKEN] corresponderá ao que foi gerado na resposta da variável **access_token**:

```bash
--header 'Authorization: Bearer [ACCESS_TOKEN]' 
```

Além disso, o campo **`expires_in`** apresentará a duração do token de acesso – o tempo é expressado em segundos.

![7](https://github.com/user-attachments/assets/ce1f895e-4aa8-493c-8e0d-1636803e8888)

Atualmente o valor do campo **`expires_in`** é de 900 segundos. Porém recomendamos a utilização do valor contido na variável diretamente (**`expires_in`**) retornada no response body, como na imagem acima. Dessa maneira se houver alteração no tempo de expiração do token, a aplicação cliente não demandará manutenção.


```pseudocode
IF (current_dateTime() > InicialDateTime() + expires_in) {
    statements
}
END IF
```

### Exemplo de Resposta
```json
{   
    "token_type": "BearerToken",
    "issued_at": "1420260525643",
    "client_id": "5jUAdGv9pBouF0wOH5keAVI35GBtx3dT",
    "access_token": "XkhU2DFnMGIVL2hvsRHLM00hRWav",
    "expires_in": "1799", //--in seconds
    "status": "approved"
}
```

***Observação:** Todos os valores na solicitação de amostra são fictícios com intenção puramente instrucional.*

---

## Veja também

- [Criptografia ao Nível de Mensagem](?path=docs/português/referência-api/criptografia.md)
- [Gestão de Resposta ](?path=docs/português/referência-api/gestão-resposta.md)
- [Glossário API](?path=docs/português/referência-api/glossário-api.md)
- [Solicitação de API](?path=docs/português/referência-api/solicitação-api.md)
- [Webhook](?path=docs/português/referência-api/5-notificações.md)

---

