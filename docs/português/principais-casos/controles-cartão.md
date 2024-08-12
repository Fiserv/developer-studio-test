---
tags: [Principais Casos, Controles de Cartão, Cartões, Embosser, Bloquear, Desbloquear, Limites, Viagens, Transferir, Ativo, PIN]
---

# Controles de Cartão

Esta seção descreve as diferentes APIs do Portal que são usadas para executar ações nas diferentes atividades relacionadas ao uso de cartão de crédito, cartão de débito, cartão pré-pago ou carteira, para qualquer um dos produtos Visa, MasterCard ou American Express. Abaixo está uma descrição da funcionalidade e recursos da API.

Como principal requisito, é importante que os cartões de crédito, débito, cartões pré-pagos ou carteiras digitais tenham sido criados no ambiente de teste, utilizando as APIs de Criação de Cliente **(Customer Add)**, Criação de Conta **(Account Add) ** e Criação de Cartão **(Embosser Add)**.

## Alterar o PIN de um Cartão

A alteração do PIN é uma funcionalidade atual para permitir que o titular do cartão altere o PIN do cartão atual. O motivo para alterar o PIN do cartão pode ser porque o PIN foi comprometido, o titular do cartão deseja fazer a alteração ou o emissor exige isso após um determinado número de dias.

Com esta API, titular do cartão poderá alterar seu número PIN atual para outro número PIN. Ao contrário da API de atualização do PIN do cartão, esta API solicitará o número PIN atual atribuído ao titular do cartão, portanto, ambos os valores devem ser adicionados antes de ativar a API: PIN atual e novo PIN.

Essa API pode ser usada quando o titular do cartão precisar alterar o número PIN atual para outro número PIN caso essa informação seja comprometida. Esta API pode ser ativada a partir de ATRM, VCR, APP, Web Service, etc. e é 100% online.

Os valores necessários para esta API são Número do Cartão, Canal, PIN de bloqueio Atual, Novo PIN de bloqueio, Associação de Chave (para criptografar blocos de PIN), offset do Novo PIN e Organização do Banco.

**PUT** `/cards/pin/pin-change`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Atualizar Indicador de Viagem

Através da API, o portador do cartão poderá definir os destinos fora de seu país onde utilizará o cartão de crédito. Esta API ativa online as datas e países para os quais o titular do cartão irá viajar nos próximos meses.

Caso o cartão seja utilizado em um país ou intervalo de datas não definido por esta API, a solicitação de autorização será rejeitada com a resposta: "A transação não é permitida."

Esta API permite ao titular do cartão definir o intervalo de datas e países onde o cartão será utilizado, permite também modificar e eliminar países e datas já definidos.

Os valores exigidos pela API são número do cartão, código ISO do país, intervalo de datas de início e término, permitindo a visita de no máximo cinco países com seus respectivos intervalos de datas.

**PUT** `/cards/travel`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Atualizar Limites para Compras

Esta API permite ao cliente atualizar online os diferentes limites de compras associados a cartões de crédito, cartões de débito, cartões pré-pagos e carteiras digitais. Esses limites de compra são atribuídos para compras em lojas, adiantamentos em dinheiro, compras pela Internet e compras internacionais. Os limites de compra determinam o número de transações e os valores máximos permitidos para uso diário, semanal, quinzenal e mensal. Esses limites de compras podem ser atribuídos tanto ao cartão principal quanto aos cartões adicionais.

Os valores são modificados 100% online e podem ser ajustados quantas vezes forem necessárias.

A API solicita como informação necessária o número do cartão, o número da transação e os valores de cada Limite de Compra.

**PUT** `/cards/spend-limits-L8V3`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Atualizar PIN do Cartão

Esta API permite que o titular do cartão reatribua um novo Número de Identificação Pessoal (PIN). Normalmente usado quando um novo cartão é emitido para o titular do cartão e um novo PIN precisa ser configurado e vinculado ao novo cartão já ativado por meio da API de cartões/ativação.

A API reatribui e atualiza o novo PIN 100% online para que o titular do cartão possa usar o novo PIN depois de atribuído. Esta API pode ser acionada a partir de diferentes canais, como caixa eletrônico, páginas da web, VCR, APP, etc. O titular do cartão escolherá o novo PIN de quatro dígitos e, juntamente com o número do cartão de crédito e a associação da chave (usada para criptografar a nova API), o aplicativo bancário deverá ser capaz de calcular o novo PIN de bloqueio para ativar a API.

Os valores necessários para esta API são número do cartão, organização bancária, canal, PIN de bloqueio e associação de chave.

**PUT** `/cards/pin/`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Atualizar Transferência de Cartão

Essa API permite que o titular do cartão bloqueie o número do cartão atual e solicite um novo cartão com um número de cartão diferente em um único gatilho. Assim como a API de bloqueio ou desbloqueio de cartão, o número do cartão pode ser bloqueado caso o titular do cartão acredite que as informações do cartão estão comprometidas e ao mesmo tempo pode solicitar um novo número de cartão, assim o novo cartão será gravado em alto relevo durante o processamento em lote e pronto para entrega no dia seguinte.

Como parte dos valores solicitados pela API, são obrigatórios o número do cartão, número da conta, organização e data efetiva.

**PUT** `/cards/transfer`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Bloquear ou Desbloquear Cartão

Por meio dessa API, o portador do cartão poderá fazer bloqueios preventivos e definitivos nas informações de seu cartão de crédito, cartão de débito, cartão pré-pago e carteira. A fim de evitar possíveis fraudes quando o titular do cartão suspeitar que as informações do cartão podem estar comprometidas.

Da mesma forma, o titular do cartão pode efetuar um desbloqueio preventivo do seu cartão quando tiver a certeza de que os dados do seu cartão não estão comprometidos.

As informações exigidas pela API, como número do cartão, código de bloqueio e recurso, devem ser incluídas antes da ativação da API.

**PUT** `/cards/embosser/block`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Cartão Ativo

A API ativa um cartão que já foi emitido. Essa API permite que o titular do cartão ative um novo número de cartão ao recebê-lo por correio ou retirá-lo em uma agência bancária. A data de ativação do cartão será salva no ambiente de teste para fins de auditoria.

Caso o titular do cartão tente utilizar o cartão para realizar compras ou adiantamentos em dinheiro, antes de ser ativado, o pedido de autorização será rejeitado com o motivo da rejeição “Cartão não está ativado”, para que o titular do cartão possa ativar seu cartão a partir desta API.

Esta API deve ser disparada toda vez que uma nova carta (principal ou adicional) for incorporada, para ativar cada carta que for incorporada.

Os valores necessários para esta API são número do cartão, identificação do produto bancário (Organização) e tipo de serviço (A= Ativação).

**PUT** `/cards/activation`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## PIN Lock/Unlock

A API permite que o titular do cartão bloqueie seu número PIN atual. Isso pode ser usado quando você acredita que as informações do PIN podem estar comprometidas. Esta API bloqueia apenas o número PIN e não o número do cartão, pelo que o Cliente após acionar esta API para bloquear o PIN, pode ainda utilizar o cartão para compras mas não para adiantamentos de dinheiro.

Usando a mesma API, o portador do cartão pode desbloquear um número PIN que já foi bloqueado, bastando acionar a API com um valor diferente no campo Function Code.

Outra função dessa API é permitir que o titular do cartão desbloqueie o PIN do cartão após ele ter sido bloqueado devido a tentativas excessivas de PIN malsucedido no caixa eletrônico.

Os valores solicitados por esta API são número do cartão, canal, organização bancária e função do serviço.

**PUT** `/cards/pin/status`

A descrição de cada campo da API está dentro das especificações definidas no portal.
---

## Veja também

- [Ambiente API](?path=docs/português/principais-casos/ambiente-api.md)
- [Assinatura HMAC](?path=docs/português/principais-casos/hmac.md)
- [Auditoria e Monitoramento](?path=docs/português/principais-casos/auditoria.md)
- [Carregar Fundos](?path=docs/português/principais-casos/carregar-fundos.md)
- [Emissão de Cartões Digitais](?path=docs/português/principais-casos/emissão-cartões.md)
- [Gestão de Cartões](?path=docs/português/principais-casos/gestão-cartões.md)
- [Gestão de Clientes](?path=docs/português/principais-casos/gestão-clientes.md)
- [Gestão de Contas](?path=docs/português/principais-casos/gestão-contas.md)
- [Integração com o Sistema Falcon](?path=docs/português/principais-casos/integração-falcon.md)
- [Relacionamento Cliente-Conta-Cartão](?path=docs/português/principais-casos/relação.md)

---

