---
tags: [Principais Casos, Carregar Fundos de uma Conta Fonte, Conta, Saldo, Ponto a Ponto]
---

# Carregar Fundos de uma Conta Fonte

## Definição

Através das API'S atualmente criadas e localizadas no portal, é possível carregar dinheiro de uma conta de Débito para uma de Crédito ou Pré-Paga, mover dinheiro de uma conta de Crédito para uma conta de Débito  ou Pré-paga ou movimentar as cobranças de dinheiro de uma conta Pré-paga para outra conta Pré-paga.

Essas APIs são projetadas para permitir que clientes em potencial, clientes e desenvolvedores testem online e diretamente em um ambiente de teste ao vivo, caso você ainda não tenha configurado seu ambiente de teste.

Cada API permitirá carregar dinheiro de diferentes produtos de origem para diferentes produtos de destino. Com o uso de diferentes opções ou parâmetros, essas APIs controlam, creditam e debitam dinheiro da fonte e do recebedor de dinheiro para cada Conta, permitindo atualizações on-line ou off-line da utilização do crédito disponível pelo cartão, dependendo do parâmetro definido no API antes de ser acionada.

## Propósito

A criação de contas de Crédito, Débito e Pré-pago é um requisito que deve ser concluído antes de executar qualquer uma das APIs usadas para carregar dinheiro. Que deve ser criado utilizando as APIs de Criação de Cliente **(Customer Add)**, Criação de Conta **(Account Add) ** e Criação de Cartão **(Embosser Add)**. 

Porém, dependendo dos valores utilizados nas APIS, também é possível carregar dinheiro utilizando valores financeiros diretos, recebidos à vista em uma agência bancária.

## Casos de Uso

![image](https://user-images.githubusercontent.com/111396588/224208640-605f6900-ab7a-40e3-9062-d40563b0ed8f.png)

A utilização desta API permite carregar dinheiro a produtos de Débito, Crédito, Cartão Pré-Pago e Carteira, utilizando os parâmetros definidos no Portal. Essa API recebe como fonte o dinheiro recebido de uma agência ou agência bancária e aplicará esses recursos. Esses fundos podem ser em moeda nacional ou estrangeira. Como parte de suas funções, esta API permite indicar através de seus parâmetros se o dinheiro depositado na Conta pode ser utilizado imediatamente ou não.

Através dos parâmetros indicados é possível identificar a conta, cartão do produto do qual será retirado o dinheiro (débito) e definir a conta e cartão para o qual será efetuado o pagamento, sendo também necessário que, como parte dos parâmetros da API, adicionar a localização geográfica (latitude e longitude) da fonte (remetente) que está carregando dinheiro. O número do cartão do qual o dinheiro é recebido (beneficiário) também é exigido como parte dos parâmetros exigidos pela API. A descrição de cada campo da API está dentro das especificações definidas no portal.

**PUT** `/account/v2/balance`
      
A descrição de cada campo da API está dentro das especificações definidas no portal.

## Diagrama de sequência

![image](https://user-images.githubusercontent.com/111396588/224208900-25a90498-2011-4a85-96b0-9b5a8accab98.png)

---

## Veja também

- [Ambiente API](?path=docs/português/principais-casos/ambiente-api.md)
- [Assinatura HMAC](?path=docs/português/principais-casos/hmac.md)
- [Auditoria e Monitoramento](?path=docs/português/principais-casos/auditoria.md)
- [Controles de Cartão](?path=docs/português/principais-casos/controles-cartão.md)
- [Emissão de Cartões Digitais](?path=docs/português/principais-casos/emissão-cartões.md)
- [Gestão de Cartões](?path=docs/português/principais-casos/gestão-cartões.md)
- [Gestão de Clientes](?path=docs/português/principais-casos/gestão-clientes.md)
- [Gestão de Contas](?path=docs/português/principais-casos/gestão-contas.md)
- [Integração com o Sistema Falcon](?path=docs/português/principais-casos/integração-falcon.md)
- [Relacionamento Cliente-Conta-Cartão](?path=docs/português/principais-casos/relação.md)

---
