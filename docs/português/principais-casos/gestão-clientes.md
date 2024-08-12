---
tags: [Principais Casos, Gestão de Clientes, Cliente, Demografia, Geração, Procurar, Endereço]
---

# Gestão de Clientes

## Atualizar Cliente

API permite a atualização de informações demográficas de um cliente específico. Atualmente é inserido através da API **Customer Add**. O valor exigido por esta API é o número do cliente criado por meio da API **Customer Add**.

**PUT** `/customer`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Consulta de Endereço Atual/Anterior

A API fornece informações sobre informações demográficas do cliente e endereço de correspondência anterior. 

Quando um número de conta ou relacionamento é inserido como entrada no serviço, o serviço retorna as informações do proprietário principal e coproprietário do registro do cliente.

O número de cliente apropriado é encontrado usando os serviços de navegação. Quando o número do cliente é inserido no serviço, os dados desse registro são retornados.

**GET** `/customer/{accountNumber}/current-prior-address`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Consultar Dados Demográficos

Com esta API, o titular do cartão poderá obter todas as informações demográficas já adicionadas através da API **Customer Add** quando um novo cliente é criado. As mesmas informações serão exibidas na mensagem de resposta da API. As informações demográficas do cliente serão apenas exibidas e não podem ser atualizadas ou excluídas.

A API usará os valores do Número do Cliente para obter informações demográficas do cliente.

**POST** `/customer/demographicData-l8v2`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Encontrar Número de Relacionamento

Esta API permite que o titular do cartão agrupe todos os números de relacionamento já criados sob o mesmo Número de Cliente.

O Número de Relacionamento é um número único atribuído a um Cartão Corporativo; Por exemplo, o Walmart com um número de cliente 123 é identificado com um número de relacionamento exclusivo 567 e muitas contas e cartões para funcionários do Walmart são criados sob esse número de relacionamento. Então, usando o Número do Cliente 123 nesta API, é possível obter o Número do Relacionamento 567.

**POST** `/customer/relationshipNumber`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Encontre um Número de Conta

A API permite que o titular do cartão conheça todos os números de conta dos produtos de Crédito, Débito, Pré-pago, Carteira, criados sob o Número do Cliente, previamente criados com a API Cliente/Add.

Essas informações são enviadas na mensagem de resposta da API após sua ativação. O número do cliente será o principal valor usado para pesquisar números de conta.

**POST** `/customer/accountNumber`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Gerar Cliente e Número de Conta

Esta API permite ao banco gerar em massa uma quantidade definida de clientes, cartões, contas e números de relacionamento. Os números solicitados serão reservados pelo sistema, portanto, esses números não serão gerados novamente.

Essa API é muito bem-sucedida quando o banco tem muitas agências e precisa gerar e estampar  plásticos com diferentes números de cartão e datas de vencimento do cartão, mas sem nome. 
Assim, os cartões podem ser distribuídos entre várias agências bancárias para serem usados como um cartão substituto temporário quando o titular do cartão perder o cartão atual.

A API solicita a identificação do banco (organização), a identificação do produto (logotipo), a quantidade de números a gerar para os números de Cliente, Contas, Cartões e Relacionamento.

A resposta da API mostrará o número do cliente, conta, cartão e relacionamento conforme solicitado.

**POST** `/customer/generation`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Novo Cliente

API permite que um banco insira informações demográficas do cliente, como nome, endereço, número de telefone, e-mail, número de identificação, etc. serão adicionados através de esta API.

Cada novo cliente terá um número único chamado Número do Cliente, este Número do Cliente pode ser gerado aleatoriamente pelo sistema ou pode ser inserido como parte dos valores da API.

Este número de cliente é independente do número de identificação pessoal do cliente: Previdência Social, RG, CPN ou Carteira de Habilitação inseridos no campo API: NÚMERO DE IDENTIFICAÇÃO.

**POST** `/customer/l8v2`
                
A descrição de cada campo da API está dentro das especificações definidas no portal.

## Obter Detalhes do Cartão

Esta API permite ao cliente conhecer todos os números de cartão criados sob este número de cliente para produtos de cartão de crédito, cartão de débito, cartão pré-pago ou carteira digital.

Essas informações são enviadas na mensagem de resposta da API após sua ativação. O número do cliente será o principal valor usado para pesquisar números de conta.

**GET** `/customer/v3/cards/details`

A descrição de cada campo da API está dentro das especificações definidas no portal.

---

## Veja também

- [Ambiente API](?path=docs/português/principais-casos/ambiente-api.md)
- [Assinatura HMAC](?path=docs/português/principais-casos/hmac.md)
- [Auditoria e Monitoramento](?path=docs/português/principais-casos/auditoria.md)
- [Carregar Fundos](?path=docs/português/principais-casos/carregar-fundos.md)
- [Controles de Cartão](?path=docs/português/principais-casos/controles-cartão.md)
- [Emissão de Cartões Digitais](?path=docs/português/principais-casos/emissão-cartões.md)
- [Gestão de Cartões](?path=docs/português/principais-casos/gestão-cartões.md)
- [Gestão de Contas](?path=docs/português/principais-casos/gestão-contas.md)
- [Integração com o Sistema Falcon](?path=docs/português/principais-casos/integração-falcon.md)
- [Relacionamento Cliente-Conta-Cartão](?path=docs/português/principais-casos/relação.md)

---

