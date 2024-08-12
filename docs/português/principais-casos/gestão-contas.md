---
tags: [Principais Casos, Gestão de Contas, Conta, Saldo, Débito, Limite de Crédito, Bloquear, Desbloquear, Departamento de Crédito, Transferências P2P, Demografia, Geração, Procurar, Endereço]
---

# Gestão de Contas

## Adicionar Conta

Esta API permite adicionar todas as informações da Conta para qualquer produto de cartões de crédito, cartões de débito, cartões pré-pagos e carteiras digitais. Informações como limites de crédito, ciclos de cobrança, nome abreviado do cliente, códigos de bloqueio de conta, número do cliente, tecnologia do cartão, etc. podem ser adicionados como parte dos campos desta API.

O número da conta é um número único e diferente do número do cartão, o número da conta é um número criado pelo sistema aleatoriamente.

Essa API precisa do número do cliente como um valor obrigatório antes que a API possa ser ativada. Este número de cliente é fornecido quando a API é ativada **Customer Add** para adicionar informações demográficas.

**POST** `/account/add-L8V3`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Atualização da Tabela de Controle de Definição de Preços

API permite atribuir uma nova Tabela de Controle de Processamento (PCT) a uma Conta existente para um intervalo de datas.

Atualmente, quando uma nova conta é criada usando a API **Account Add**, o número PCT deve ser adicionado. Esta tabela PCT contém o parâmetro de processamento usado pela conta para processar juros, taxas, impostos, etc.

Usando esta API é possível alterar manualmente a Tabela PCT atual para outra Tabela PCT com parâmetros diferentes.

**PUT** `/account/pctId`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Atualização de Conta/Critérios de Autenticação

Esta API permite ao usuário criar e atualizar um relacionamento entre as transações de autorização do cartão e uma tabela de critérios de autorização.

Tabela de Critérios de Autorização é a funcionalidade atual para definir uma tabela de critérios de aprovação de autorização com base na MCC ou atividade comercial, horário, dia da semana, código do país, código postal, para que o valor da autorização possa ser validado para aprovar ou rejeitar a autorização. . As informações nesta tabela devem ser adicionadas antes de usar esta API.

**PUT** `/account/auth-criteria`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Atualização de Excedentes do Cartão Pré-Pago

Esta API permite que você atualize o valor acima do limite permitido para um número de conta de cartão pré-pago específico. Esse valor acima do limite é um valor fixo usado pelo sistema de autorização para validar o valor da autorização caso fique abaixo desse valor quando a conta não tiver mais crédito disponível.

**PUT** `/account/ppd-over-limit`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Atualização de Produto Promocional de Transferência de Conta

Use esta API atualizar um tipo de cartão de produto atual para outro; por exemplo, atualizar de Visa Classic para Visa Gold ou de MasterCard Classic para MasterCard Black.

Quando a API é ativada, as informações da conta, do cartão e os saldos são transferidos para uma nova conta e cartão. As informações do cliente serão as mesmas. Os extratos serão removidos da conta antiga, mas o ciclo de transações até o momento será transferido para a nova conta.

A mesma API pode ser usada para fazer o downgrade do produto, ou seja, transferir de Visa Gold para Visa Classic ou de MasterCard Black para MasterCard Classic.

**PUT** `/account/transfer-promotional-product`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Atualização do Número de Relacionamento da Conta

Esta API permite vincular uma nova subconta criada por meio da API **Account Add** com uma conta de relacionamento previamente criada.

O Número de Relacionamento é um número único atribuído a um Cartão Corporativo; Por exemplo, o Walmart com um número de cliente 123 é identificado com um número de relacionamento exclusivo 567 e muitas contas e cartões para funcionários do Walmart são criados sob esse número de relacionamento. Então, usando o número de relacionamento 567, é possível vincular uma nova subconta adicional.

**PUT** `/account/relationship/account`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Atualização do Status da Carteira Digital da Conta

API permite ao usuário alterar o estado atual da carteira digital para ativo, inativo ou suspenso.

Carteira Digital é um recurso atual que permite que uma conta de cartão pré-pago tenha mais de um pacote de código de moeda chamado "Carteira Digital" para carregar dinheiro. Uma conta de cartão pré-pago pode ter uma carteira para carregar USD, moeda local e outros códigos de moeda.

Essa API pode ser usada para alterar o status de cada uma das carteiras.

**PUT** `/account/walletStatus`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Atualização Temporária de Limite de Crédito

Use esta API para aumentar o limite de crédito da conta por um número específico de dias. Esta API é muito útil quando o titular do cartão não tem mais limite de crédito disponível e solicita um aumento do limite de crédito para um determinado número de dias, portanto, quando o limite de tempo é concluído, o limite de crédito original é redefinido como limite de crédito atual.

Essa API utiliza o número da conta como parâmetro de busca, e valores como limite de crédito da conta, novo limite de crédito e data de vencimento do aumento devem ser configurados antes que a API seja ativada.

**PUT** `/cards/temporary-credit-limit`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Atualizando Limites de Carga de Cartão Pré-pago

API permite que um usuário atualize os limites máximos e mínimos atuais do valor permitido para contas de cartão pré-pago.

Ao criar uma conta de cartão pré-pago usando a API **Account Add**. São estabelecidos os valores máximos e mínimos que um cartão pré-pago pode ter. No entanto, esses limites podem mudar com o tempo, portanto, a API ajudará o cliente a configurar os novos parâmetros.

**PUT** `/account/ppd-load-limits`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Atualizar Número do Cliente

API permite que um usuário altere o número do cliente já vinculado a informações específicas da conta.

Atualmente, quando uma informação de conta é criada no ambiente de teste por meio da API **Account Add**, é necessário adicionar o número do cliente criado por meio de sua API **Customer Add**. Este link é necessário para vincular um cliente a uma conta criada.

Por meio da API é possível remover este link e fazer um link diferente entre o número da conta e um número de cliente diferente que já foi criado no ambiente de teste.

Essa API usa o número da conta como parâmetro de pesquisa e um número de cliente existente a ser usado para estabelecer um novo link.

**PUT** `/account/v2/customer`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Atualize os Campos Definidos Pelo Usuário da Conta

Esta API permite atualizar os valores de mais de 50 campos definidos pelo usuário nas informações de nível de conta. Esses campos de usuário são campos discricionários que o usuário pode usar para adicionar informações de conta adicionais.

Valores como datas, quantidades, códigos, etc. ele pode ser configurado na API antes de acioná-lo.

**PUT** `/account/user`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Bloquear e Desbloquear Contas

Esta API pode ser usado pelo titular do cartão para bloquear/desbloquear a conta, não o cartão. Atualmente, como parte da funcionalidade do First Vision, o titular do cartão deve ter informações do cliente, informações da conta e informações do cartão já criadas por meio das APIs: **Customer Add**, **Account Add** y **Card Add**.

O uso dessa API bloqueia a conta por qualquer motivo, com mais de 25 tipos de códigos de bloqueio já definidos no nível do produto. Portanto, dependendo da ativação do código de bloqueio na API, todos os cartões com este número de conta podem ser bloqueados automaticamente para evitar a passagem de autorizações.

O número da conta é um valor obrigatório para ativar esta API.

**PUT** `/account/block-code`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Cash In/Cash Out

Esta API permite que você aplique uma quantia de dinheiro de uma agência bancária, caixa eletrônico, serviço da web, etc. Essa transferência de dinheiro não debita um cartão de crédito, cartão de débito ou conta de cartão pré-pago existente, mas essa API lança uma quantia específica de dinheiro em uma conta de destino.

Esta API permite que você aplique uma quantia de dinheiro de uma agência bancária, caixa eletrônico, serviço da web, etc. Essa transferência de dinheiro não debita um cartão de crédito, cartão de débito ou conta de cartão pré-pago existente, mas essa API lança uma quantia específica de dinheiro em uma conta de destino. Entretanto, os parâmetros previamente definidos permitem que o aplicativo FALCON (Card Fraud Prevention) audite este tipo de transação.

Use os parâmetros da API para permitir que a transferência de dinheiro esteja pronta para uso após chamar a API ou aguarde até o dia seguinte.

**PUT** `/account/v2/balance`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Consultar Débito/Crédito Direto

API permite ao utilizador trazer toda a informação sobre valores previamente configurados ao nível da conta ou gerar um Débito Direto ou Crédito Direto.

O Débito Direto e o Crédito Direto é uma funcionalidade que permite ao processo interno debitar ou creditar uma Conta Bancária (conta à ordem ou conta poupança) e este valor pode ser utilizado para pagar o saldo mínimo ou total do Extrato da Conta.

Conta poupança, conta corrente e conta de roteamento são todos valores pré-configurados no nível da conta, portanto, após chamar esta API, essas informações devem ser configuradas como parte das informações da conta por meio da API **Account Add**.

**GET** `/account/{accountNumber}/credit-debit`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Departamento de Crédito

Esta API, permite que um usuário atualize os campos do bureau de crédito no nível da conta, para que a conta seja adicionada ao relatório do bureau de crédito gerado diariamente. Este relatório é utilizado para informar uma instituição de Bureau de Crédito sobre a situação e classificação do crédito do titular do cartão.

Essa API usa o número da conta e um sinalizador para indicar se a conta deve ser adicionada ao relatório do Credit Bureau.

**PUT** `/account/creditBureau`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Detalhes da Conta para o Cartão

Esta API permite que um usuário descubra todos os cartões que foram criados com o mesmo número de conta. Se apenas o número da conta for fornecido como entrada para uma conta de moeda dupla, a chamada de API retornará o número do cartão para a conta local. Se um número de organização for fornecido nos dados de entrada, a resposta fornecerá os números de cartão associados a essa organização, seja uma organização local ou estrangeira.

Para ativar esta API, as informações do número da conta e do cartão devem ter sido previamente criadas usando as APIs: **Customer Add**, **Account Add** e **Card Add**..

Esta API mostrará todos os cartões criados sob o número da conta, o cartão principal e os cartões adicionais.

**POST** `/cards/embosser/card-details-L8V3`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Encontre Informações sobre Saldos, Refinanciamento e Reestruturação 

Esta API permite que um usuário selecione um valor de saldo específico de um plano de crédito de conta e refinancie ou reestruture esse saldo em um novo número de parcelas ou um valor fixo.

Por exemplo, um saldo de $ 10.000 para o plano de crédito 10002 com 5 parcelas tem um pagamento fixo de $ 2.000 por mês. Usando esta API, para refinanciar ou reestruturar este saldo, o novo número de parcelas pode ser 10 com um pagamento mínimo de $ 1.000 por mês.

Essa API solicita o número da conta, o tipo de refinanciamento, o plano de crédito, o novo número de parcelas e o novo valor.

**GET** `/account/{accountNumber}/balance`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Localizar Detalhes do Relacionamento

Esta API permite ao usuário agrupar todos os números de contas já criadas sob o mesmo número de relacionamento.

Um número de relacionamento é definido como uma Conta Corporativa, o que significa que todas as contas e cartões que fazem parte desta Corporação devem ser criados sob esta Conta Corporativa.

API **Account Add** permite criar contas corporativas e subcontas que farão parte dessas contas.

Essa API usa o número da conta corporativa como parâmetro de pesquisa.

**GET** `/account/{accountNumber}/relationship`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Pendente Atualização de Banco, Agência e Loja

Esta API permite que o usuário atualize a Agência da loja onde o crédito foi aprovado para criar a conta e o cartão. Esse número faz parte das informações da conta e é adicionado pela primeira vez quando a conta é criada por meio da API **Account Add**.

**PUT** `/account/bank-branch-store`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Pesquisar Detalhes da Conta

API permite que um usuário obtenha todas as informações da conta que foram adicionadas anteriormente por meio da API **Account Add** em um ambiente de teste. Essas informações da conta são recebidas na mensagem de resposta da API após chamar a API.

Essa API exibirá informações como status da conta, número do cliente, códigos de bloqueio da conta, limite de crédito, bandeiras de isenção, etc.

Esta API requer o Número da Conta como parâmetro de pesquisa juntamente com a identificação do banco (organização).

**GET** `/account/v2/accounts`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Pesquisar Saldos de Conta

Esta API pode ser utilizado pelo titular do cartão para obter informações sobre o saldo atual da conta. Utilizando o número da conta como parâmetro de busca, a API exibirá o saldo atual da conta, crédito disponível, saldo em caixa, limite de crédito, etc. na mensagem de saída da API.

Essa API exibirá as informações do saldo da conta em tempo real, no modo de consulta, portanto, os valores do saldo da conta não poderão ser atualizados.

Esta API usa o número da conta que foi atribuído quando a API **Account Add** foi ativado.

**POST** `/account/balance/details`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Prazo de Parcelamento de Atualização

Esta API permite ao usuário alterar ou atualizar o prazo de pagamento de uma transação já lançada na conta.

Em alguns países da LATAM, quando uma transação de compra é lançada na Conta, ela pode ser financiada em um determinado número de parcelas, portanto, um valor fixo de pagamento deve ser calculado para essas transações.

Essa API permite que o usuário altere o número de parcelas que já foi configurado no nível da transação.

Essa API usa o número da conta, o número de referência da transação e o novo número da parcela como parte dos parâmetros de pesquisa.

**PUT** `/account/installment-term`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Resumo da Conta

Use esta API, para obter as informações mais importantes da conta, como o número da conta, o nome do cliente, seu endereço e telefone, os campos do usuário, os dados financeiros da conta, o nível de inadimplência, etc. Essa API usa o número da conta como parâmetro de pesquisa.

**GET** `/account/{accountNumber}/overview`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Serviço de Atualização de Partes Associadas

Esta API permite ao usuário atualizar os parâmetros selecionados no nível de informações da conta, relacionados aos campos das Partes Associadas.

Os campos Parte Associada localizados no nível da Conta são usados para identificar se a Conta possui algum relacionamento com terceiros. Um terceiro associado pode ser: um fiador, um co-devedor, um signatário autorizado, um representante comercial, etc.

**PUT** `/account/associatedParties`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Transferência de Fundos de Conta para Conta

Esta API permite que um usuário transfira uma determinada quantia de dinheiro PONTO A PONTO entre duas contas diferentes: cartão de crédito para cartão de débito, cartão de débito para cartão de débito, cartão de crédito para cartão pré-pago ou cartão de débito para cartão pré-pago, carteiras digitais, etc.

Essa transferência pode ser imediata para que o destinatário da conta possa usar o dinheiro após a chamada da API ou pode ser no dia seguinte, isso depende dos parâmetros da API.

Depois de chamar essa API, as transações de débito e crédito são criadas para as contas de origem e destino.

Essa API usa o número da conta de origem e o número da conta de destino.

**PUT** `/account/transferP2P`

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
- [Gestão de Clientes](?path=docs/português/principais-casos/gestão-clientes.md)
- [Integração com o Sistema Falcon](?path=docs/português/principais-casos/integração-falcon.md)
- [Relacionamento Cliente-Conta-Cartão](?path=docs/português/principais-casos/relação.md)

---

