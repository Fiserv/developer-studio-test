---
tags: [Principais Casos, Falcon, Fraude, Detecção, Prevenção, Gestão]
---

# Integração com o Sistema Falcon

O Falcon é um aplicativo de detecção, prevenção e Gestão de fraudes. Falcon examina todas as transações recebidas e determina a probabilidade de que a transação seja fraudulenta. O Falcon possui sua própria rede neural que avalia as transações que chegam a ele. Com base em vários fatores, o Falcon atribui uma classificação a cada transação, que indica a probabilidade de uma transação ser fraudulenta.

O Falcon atribui uma pontuação de zero a 999 para cada uma das transações que recebe em tempo real. Então, cada transação passa por um conjunto de regras estabelecidas de acordo com as diferentes necessidades do negócio para identificar fraudes. Ao final, o Falcon enviará a mensagem de resposta ao sistema host de autorização, como indicar que a autorização deve ser recusada e o cartão bloqueado. Ao habilitar o parâmetro no First Vision, é possível fazer a integração com o Falcon, onde as transações de autorização processadas pelo FirstVision serão roteadas para o Falcon para estabelecer o controle de fraudes.

![image](https://user-images.githubusercontent.com/111396588/208846621-4b1bd3c3-0355-48ff-a23a-0d6f313ec3d0.png)

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
- [Gestão de Contas](?path=docs/português/principais-casos/gestão-contas.md)
- [Relacionamento Cliente-Conta-Cartão](?path=docs/português/principais-casos/relação.md)

---
