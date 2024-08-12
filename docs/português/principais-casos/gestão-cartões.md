---
tags: [Principais Casos, Gestão de Cartões, Cartões, Estampagem(Embossing), Token PAN, Códigos de Segurança, PIN]
---

# Gestão de Cartões

## Adicionar ou Atualizar Cartões de Massa

Esta API, permite que o usuário adicione ou atualize uma solicitação para gravar novos cartões em massa. Esses cartões podem ser de crédito, débito ou pré-pago. A quantidade de cartões que serão estampados é um parâmetro solicitado pela API.

Os cartões Estampados não terão um nome de incorporador, mas o número do cartão, a data de validade e as configurações de segurança do cartão farão parte deles.

**POST** `/cards/mass-card-issue-L8V3`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Agregar Registro de Tarjetas 

API permite criar informações de cartão usadas para estampar um novo cartão ou plástico. Essas informações do cartão devem estar relacionadas a um número de conta criado por meio da API **Account Add** e este número de conta deve estar relacionado a um número de cliente criado via API **Customer Add**.

Essa API permite adicionar informações do cartão como data de validade do cartão, código de serviço, nome do titular do cartão, endereço onde o cartão será entregue, limites de compra, etc.

O número do cartão é calculado aleatoriamente pelo app, e esse número não será gerado novamente (duplicado).

**POST** `/cards/embosser/l8vf`

 A descrição de cada campo da API está dentro das especificações definidas no portal.

## Atualização da Ação do Cartão

Use esta API atualizar o sinalizador de ação usado para regravar (reemitir) um número de cartão específico.

Essa API permite que o usuário solicite a reemissão do cartão por qualquer motivo, como perda/roubo, dano, vencimento do cartão, substituição emergencial, etc.

**PUT** `/cards/embosser/cardAction-L8V2`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Cartão Instantâneo

Esta API permite ao usuário solicitar a criação de uma conta e cartão instantaneamente. As informações do cartão estarão prontas para serem usadas nas compras.

As informações do cliente devem ser criadas via API **Customer Add** antes de chamar a API do cartão instantâneo.

**POST** `/account/v2/instantCard`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Consultar Valores de Segurança 

Esta API permite ao usuário obter os valores de segurança do cartão (CVV, CVV2,ICVV, número PIN) já em relevo para um número de cartão específico.

Os valores de segurança fornecidos pela API serão criptografados usando uma chave de segurança de 32 bytes, portanto, o usuário deve usar a mesma chave de segurança e o algoritmo 3Des para descriptografar os valores de segurança.

**POST** `/cards/v1/pin/codes`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Consultar Valores Dinâmicos
Esta API permite calcular e consultar um novo CVV2 para compras com cartão ausente.

Atualmente, quando o cartão é gravado via API **Card Embosser**, o código CVV2 estático é calculado e impresso no painel de assinatura no verso do cartão. A nova funcionalidade do Dynamic CVV2 permite que o titular do cartão chame esta API para gerar e calcular um novo CVV2 antes de fazer uma compra não presente. Portanto, quando a API é ativada, o CVV2 estático é desativado e cada vez que o portador do cartão desejar fazer uma nova compra sem o cartão presente, o novo CVV2 deve ser calculado usando esta API.

**POST** `/cards/pin/dynamic-values`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Validação de PIN
Esta API confirme se o PIN gerado está correto.

Esta API requer o PIN Block e o número do cartão e não o PIN claro.

**POST** `/cards/pin/validation`

A descrição de cada campo da API está dentro das especificações definidas no portal.

## Verifique o Cartão ou PAN Token

Atualmente, quando um cliente não é certificado pela Payment Card Industry (PCI), o número do cartão não pode ser mostrado em nenhum serviço da web, ATM, POS, etc. PAN-TOKEN pode ser mostrado em um serviço da web, ATM, POS ou qualquer outro outro dispositivo ou serviço sem comprometer o número real do cartão.

Para manter esse valor de segurança seguro, é necessário usar um PAN-TOKEN em vez do número do cartão, portanto, quando um número de cartão é criado, a funcionalidade atual gera o PAN-TOKEN como substituto do número do cartão.

Quando um novo cartão é criado através da API **Card Embosser**, o PAN-TOKEN é calculado automaticamente usando uma CHAVE de segurança e pode ter valores numéricos e alfanuméricos.

Use esta API para obter o token PAN calculado para um número de cartão.

**POST** `/cards/embosser/card-pan-l8v2`

A descrição dos campos desta API pode ser encontrada nas especificações definidas no portal.

## Verifique o Número de Tentativas Inválidas de PIN

Esta API permite que o titular do cartão obtenha o número de tentativas de PIN inválidas.

Como parte das configurações de segurança, o número de tentativas inválidas de PIN é configurado para impedir o cálculo do número PIN para propostas de fraude. Quando este parâmetro é atingido, o número PIN é bloqueado e um novo número PIN deve ser calculado.

Tentativas de PIN inválidas podem ocorrer por vários motivos. O motivo mais comum é quando o titular do cartão comete um erro ao inserir o número PIN no caixa eletrônico.

**POST** `/cards/pin/invalid-attempts`

A descrição de cada campo da API está dentro das especificações definidas no portal.

---

## Veja também

- [Ambiente API](?path=docs/português/principais-casos/ambiente-api.md)
- [Assinatura HMAC](?path=docs/português/principais-casos/hmac.md)
- [Auditoria e Monitoramento](?path=docs/português/principais-casos/auditoria.md)
- [Carregar Fundos](?path=docs/português/principais-casos/carregar-fundos.md)
- [Controles de Cartão](?path=docs/português/principais-casos/controles-cartão.md)
- [Emissão de Cartões Digitais](?path=docs/português/principais-casos/emissão-cartões.md)
- [Gestão de Clientes](?path=docs/português/principais-casos/gestão-clientes.md)
- [Gestão de Contas](?path=docs/português/principais-casos/gestão-contas.md)
- [Integração com o Sistema Falcon](?path=docs/português/principais-casos/integração-falcon.md)
- [Relacionamento Cliente-Conta-Cartão](?path=docs/português/principais-casos/relação.md)

---

