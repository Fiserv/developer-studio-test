---
tags: [Começando, Terminologia, Conta, Cliente, Cartões, Plano de Segmentos, First Vision, Processamento de Cartões, Pagamentos]
---

# Terminologia

## O que são clientes, contas e cartões?

Para recuperar as informações do titular da conta no sistema FirstVision, será necessário um número de cliente, número de conta ou número de cartão.

Uma conta estabelecida geralmente consiste no seguinte:

<!--
type: tab
titles: Conta, Cliente, Cartões
-->

Também conhecido como segmento base de contas.

1. Ele contém informações como limite de crédito, ciclo de cobrança, status e códigos de bloqueio, controles de preços e detalhes de débito direto.

2. Identificado por um número de conta exclusivo atribuído pelo cliente ou gerado automaticamente pelo sistema.

3. Múltiplas Contas podem ser estabelecidas e associadas para um único Cliente.

4. Normalmente, um extrato é gerado a cada mês para uma conta.

<!--
type: tab
-->

Também é conhecido como registro de nome e endereço.

1. Contém informações demográficas do cliente sobre o cliente (proprietário) e "secundário" (coproprietário, cônjuge), como nome, endereço, endereço de e-mail, números de telefone, data de nascimento, informações de identificação e informações de emprego.

2. Identificado por um número de conta exclusivo atribuído pelo cliente ou gerado automaticamente pelo sistema.

3. Além do cliente principal, até três clientes adicionais também podem ser estabelecidos e associados para uma única conta, a fim de armazenar informações sobre as partes associadas, como procurações e fiadores.

4. Você também pode estabelecer um cliente para um único registro de segmento de base de conta e estabelecer um relacionamento entre eles para armazenar um endereço alternativo.

<!--
type: tab
-->

Também conhecido como embosser.

1. Contém informações sobre o cartão ou plástico, como o nome gravado no cartão, a data de validade, o tipo de material plástico usado para criar o cartão e quaisquer restrições de autorização para o cartão.

2. O número do cartão (também conhecido como PAN) é o número que está impresso no plástico físico e está sujeito a rígidas regras de privacidade. Como resultado, alguns clientes não armazenam esse número e podem recuperar quaisquer dados do cartão FirstVision como um número mascarado.

3. Vários cartões podem existir para uma conta. Por exemplo, pode haver cartões adicionais para outros membros de uma família, mantidos em uma única conta. Esses cartões adicionais podem ser vinculados ao seu próprio cliente, quando essa informação for necessária.

<!-- type: tab-end -->

![image](https://user-images.githubusercontent.com/111396588/223825911-aba5e5da-3fe3-48c6-8e51-0a9085cdd041.png)

Além disso, uma conta terá vários **Segmentos de Plano**:

- Os segmentos do plano não são criados como parte do processo de configuração da nova conta. O sistema os gera automaticamente quando as transações de vendas são lançadas em uma conta.

- Cada plano tem um certo 'tipo'; por exemplo, compras em lojas, adiantamentos em dinheiro ou transferências de saldo. O plano contém informações monetárias e outros detalhes sobre as transações contidas no plano, incluindo taxa de juros, alterações manuais e opções de adiamento, saldos do plano e componentes faturados não pagos.

- Cada segmento de plano atribuído a uma conta é identificado exclusivamente por uma combinação de um número de 5 dígitos e um número de registro.

![image](https://user-images.githubusercontent.com/111396588/223825942-c86f84ef-1565-4664-8230-f731e74c6512.png)

---

## Veja também

- [Começando](?path=docs/português/começando.md)
- [Estrutura](?path=docs/português/começando/estrutura.md)
- [Lista de serviços](?path=docs/português/começando/lista-serviços.md)
- [Postman](?path=docs/português/começando/postman.md)

---
