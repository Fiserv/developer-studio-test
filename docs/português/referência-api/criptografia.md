# Criptografia ao Nível de Mensagem

Informações sensíveis serão criptografadas usando JSON Web Encryption (JWE). A criptografia JSON Web representa o conteúdo criptografado usando estruturas de dados baseadas em JavaScript Object Notation (JSON). Para especificações completas, consulte a [especificação JWE](https://datatracker.ietf.org/doc/html/draft-ietf-jose-json-web-encryption-40).

Para confirmar se as APIs que pretende utilizar suportam a criptografia JWE, entre em contato com nossa equipe de serviços ao cliente.

## Geração de Chave Pública

Os emissores gerarão um Par de Chaves Públicas/Privadas RSA usando qualquer ferramenta de Criptografia e SSL/TLS compatível com OpenSSL.

### Exemplos de Comandos usando o OpenSSL:

1. Gerar uma chave privada RSA, de tamanho 2048, e salvá-la em um arquivo chamado key.pem:
   ```
   openssl genrsa -out key.pem 2048
   ```

2. Extrair a chave pública e salvá-la em um arquivo chamado public.pem:
   ```
   openssl rsa -in key.pem -outform PEM -pubout -out public.pem
   ```

O arquivo `public.pem` gerado a partir dos comandos acima será compartilhado com a equipe de implementações da API Fiserv.

## ID de Chave de Criptografia

A Fiserv receberá a chave pública compartilhada pelo emissor e enviará um KID (ID de Chave) em retorno. O KID é um identificador alfanumérico da chave pública.

O emissor utilizará o KID compartilhado pela Fiserv para identificar a chave privada correspondente.

![image](https://github.com/user-attachments/assets/69ba85c2-c203-4040-b4c9-14cbeb8d0c5a)

### Estrutura Exemplo JWE Incluindo o KID:

![image](https://github.com/user-attachments/assets/6d371ec9-e3fc-4c54-8e99-2f15c51f7c60)

## Processo de Rotação de Chaves

O emissor compartilhará uma nova chave pública com a Fiserv, que enviará o KID correspondente.

Durante uma janela de manutenção programada, a Fiserv marcará o novo KID como ativo. O emissor receberá o novo KID e recuperará a chave privada correspondente para descriptografia. O principal objetivo de usar um KID é otimizar o processo de rotação de chaves.

### Código de Descriptografia de Exemplo

Durante o projeto de implementação, a Fiserv compartilhará com o emissor o código de exemplo de descriptografia.

---

## Veja também

- [Access Token](?path=docs/português/referência-api/accessToken.md)
- [Gestão de Resposta ](?path=docs/português/referência-api/gestão-resposta.md)
- [Glossário API](?path=docs/português/referência-api/glossário-api.md)
- [Solicitação de API](?path=docs/português/referência-api/solicitação-api.md)
- [Webhook](?path=docs/português/referência-api/5-notificações.md)

---
