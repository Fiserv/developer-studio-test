---
tags: [Começando, Postman, Tutorial]
---

# Tutorial de Teste do Postman

Esta seção tem como objetivo demonstrar a configuração inicial que deve ser aplicada à coleção Postman, antes de fazer requisições às APIs Fiserv disponíveis.

Caso você não tenha utilizado a ferramenta Postman como cliente HTTP para testar requisições, acesse o link oficial da ferramenta para maiores informações: 
 [Postman Official](https://www.postman.com/)

A Coleção do Carteiro será compartilhada temporariamente com cada cliente de acordo com suas necessidades.

## Importar coleção

### 1. Abra o Postman e clique no botão importar para abrir a coleção fornecida

![image](https://user-images.githubusercontent.com/111396588/223823808-2d79de52-0b42-4500-b6ee-31bf49c818ad.png)

### 2. Após importar a coleção, você verá que a seguir contém as requisições divididas por pastas de acordo com cada entidade e também as requisições iniciais, por exemplo, "Get Access Token"

![image](https://user-images.githubusercontent.com/111396588/223823863-c76ef596-2ab8-473a-b801-9cd0980edea7.png)

## Criar o Ambiente

### 3. Nesta etapa iremos configurar o ambiente necessário para executar as requisições no Postman dinamicamente, pois as requisições já estão configuradas com variáveis de ambiente que iremos configurar a seguir. Clique no botão de ambientes e siga os próximos passos

![image](https://user-images.githubusercontent.com/111396588/223825081-8f5e489e-04b0-4450-9e2e-a2a0adffa375.png)

### 4. Clique novamente no botão na seção Ambiente para criar um ambiente para executar solicitações

![image](https://user-images.githubusercontent.com/111396588/223825110-985fce44-fbfd-4713-83f9-ddd85954b08a.png)

### 5. Clique no ambiente e depois defina o nome deste ambiente

![image](https://user-images.githubusercontent.com/111396588/223825130-b65824be-7525-4df5-80e5-bc9934e4dcd6.png)

## Configurar a ambiente

### 6. Agora você precisará criar as variáveis como no exemplo abaixo com as credenciais enviadas, nesta etapa você pode definir quais variáveis serão utilizadas durante o uso da coleção, como endpoint, porta e outras

![image](https://user-images.githubusercontent.com/111396588/223825150-eae49a0b-c45c-46d5-a365-982e08e69922.png)

### 7.  No canto superior direito, selecione o ambiente criado para aplicar as configurações das variáveis de ambiente criadas na etapa anterior

![image](https://user-images.githubusercontent.com/111396588/223825174-82bca4fb-bcd5-4b6e-b2ba-f93651088a00.png)

### 8. Se você seguiu as etapas corretamente até agora, seu ambiente está pronto para enviar solicitações de API. Clique em Obter token de acesso à API para começar a testar a API

![image](https://user-images.githubusercontent.com/111396588/223825212-38ced20b-4446-4b54-b3d5-2b1b1f291ec4.png)

## Execute a primeira solicitação

### 9. Clique no botão Enviar

![image](https://user-images.githubusercontent.com/111396588/223825243-f72d7a6c-89bf-4281-b055-6ff96b718ba6.png)

### 10. Você notará que tem um "access_token" que é definido automaticamente na variável de ambiente "token" e tem uma data de expiração. Quando o token expirar, você precisará repetir a etapa anterior

![image](https://user-images.githubusercontent.com/111396588/223825263-3f1a2342-9731-417d-9de5-a7ba28628b1d.png)

Agora você está pronto para começar a testar nossa API!

---

## Veja também

- [Começando](?path=docs/português/começando.md)
- [Estrutura](?path=docs/português/começando/estrutura.md)
- [Lista de serviços](?path=docs/português/começando/lista-serviços.md)
- [Terminologia](?path=docs/português/começando/terminologia.md)

---
