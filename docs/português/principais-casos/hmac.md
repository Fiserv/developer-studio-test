---
tags: [Principais Casos, Assinatura HMAC]
---

# O que é a Assinatura HMAC?

HMAC, um código de autenticação de mensagem baseado em algoritmos Hash. É um controle de segurança que gera uma assinatura Hash para cada mensagem enviada de um ponto a outro.

Quando uma mensagem é enviada para um servidor habilitado para HMAC, uma nova assinatura é gerada para sua mensagem com base em sua chave secreta.

O cliente e o servidor devem ter a mesma chave secreta para que possam verificar a autenticidade da mensagem e sua integridade, pois mensagens modificadas resultam em assinaturas diferentes.

A mesma mensagem gerada com a mesma chave secreta sempre resultará na mesma assinatura.

![image](https://user-images.githubusercontent.com/111396588/223831325-86b618a5-1ee4-4134-a82f-f5ce04766e01.png)

## Por que Deve ser Usado?

Ao habilitar a verificação HMAC, você pode garantir a autenticidade do remetente da mensagem e certificar que a mensagem não foi interceptada ou modificada por hackers.

## Como Deve ser Usado?

Você precisará de uma ferramenta para gerar suas mensagens HMAC com base em sua chave secreta. A maioria das linguagens de programação possui muitas bibliotecas que podem ajudar a enviar ou verificar a autenticidade do remetente e a integridade da mensagem.

---

## Veja também

- [Ambiente API](?path=docs/português/principais-casos/ambiente-api.md)
- [Auditoria e Monitoramento](?path=docs/português/principais-casos/auditoria.md)
- [Carregar Fundos](?path=docs/português/principais-casos/carregar-fundos.md)
- [Controles de Cartão](?path=docs/português/principais-casos/controles-cartão.md)
- [Emissão de Cartões Digitais](?path=docs/português/principais-casos/emissão-cartões.md)
- [Gestão de Cartões](?path=docs/português/principais-casos/gestão-cartões.md)
- [Gestão de Clientes](?path=docs/português/principais-casos/gestão-clientes.md)
- [Gestão de Contas](?path=docs/português/principais-casos/gestão-contas.md)
- [Integração com o Sistema Falcon](?path=docs/português/principais-casos/integração-falcon.md)
- [Relacionamento Cliente-Conta-Cartão](?path=docs/português/principais-casos/relação.md)

---
