---
tags: [Principais Casos, Emissão de Cartões Digitais, Cliente, Conta, Cartões, Embosser]
---

# Emissão de Cartões Digitais

## Definição

A seção a seguir destina-se a definir a emissão de um cartão digital na plataforma FirstVision.

Um cartão digital se comportará como uma carteira financiada pelo limite de crédito da conta, e os clientes poderão fazer compras no e-commerce (somente com comércio de marcas compartilhadas) usando a carteira digital em vez de usar um cartão físico. Uma única conta FirstVision pode ter um cartão de crédito físico e um cartão digital separadamente. Durante a abertura das contas, pode ser definido se terão apenas cartão físico ou apenas cartão digital ou ambos.

## Propósito

O objetivo deste caso de uso é emitir um novo cartão digital para um cliente na plataforma FirstVision.

## Casos de Uso

O caso de usuário a seguir determina as ações necessárias para emitir um novo cartão digital.

![image](https://user-images.githubusercontent.com/111396588/208847157-3b0caa4b-f73d-469a-8cb6-7461af6317a3.png)

## Diagrama de Sequência

![image](https://user-images.githubusercontent.com/111396588/208847202-038f4634-9a8b-4de2-8446-028b386e1211.png)

Para emitir um novo cartão digital para um cliente, devemos seguir os seguintes passos:

### 1. Adicionar Cliente

Esta solicitação inclui dados pessoais do cliente, informações demográficas e outras informações sobre a entidade. A resposta a esta solicitação trará o Número do Cliente criado.

**POST** `/customer/l8v2`
      
### 2. Adicionar Conta

Utilizando o Número de Cliente criado no pedido anterior, este pedido irá propagar a informação do limite de crédito da Conta, data do ciclo de pagamento, nome abreviado, e outras informações inerentes à entidade.

**POST** `/account/add-L8V3`
          
### 3. Add da Gravador

Essa solicitação é responsável por adicionar as informações ao cartão digital emitido. Esta solicitação requer o Código do Cliente e o Código da Conta.

**POST** `/cards/embosser/l8vf`
          
### 4. Ativação do Cartão

Após as solicitações do cliente, da conta e do incorporador, as novas configurações do cartão são aplicadas ao cliente, mas não ficam ativas para uso. Essa solicitação ativará o cartão e o deixará pronto para uso.

**PUT** `/cards/activation`
          
---

## Veja também

- [Ambiente API](?path=docs/português/principais-casos/ambiente-api.md)
- [Assinatura HMAC](?path=docs/português/principais-casos/hmac.md)
- [Auditoria e Monitoramento](?path=docs/português/principais-casos/auditoria.md)
- [Carregar Fundos](?path=docs/português/principais-casos/carregar-fundos.md)
- [Controles de Cartão](?path=docs/português/principais-casos/controles-cartão.md)
- [Gestão de Cartões](?path=docs/português/principais-casos/gestão-cartões.md)
- [Gestão de Clientes](?path=docs/português/principais-casos/gestão-clientes.md)
- [Gestão de Contas](?path=docs/português/principais-casos/gestão-contas.md)
- [Integração com o Sistema Falcon](?path=docs/português/principais-casos/integração-falcon.md)
- [Relacionamento Cliente-Conta-Cartão](?path=docs/português/principais-casos/relação.md)

---
