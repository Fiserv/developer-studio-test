---
tags: [Card-Not-Present, Mobile, Wallets, Apple Pay, Google Pay, PayPal, Samsung Pay, Paze]
---

# Accept digital wallet payments

Digital wallets *(e-wallets)* provide a versatile and secure method for customers to manage and use their funds online. Integrating these digital wallets into your payments API can significantly enhance the user experience and streamline transactions. Commerce Hub integrates with popular digital wallet providers, including Apple Pay, Google Pay, Samsung Pay, PayPal and Paze.

Wallet transactions can originate from a digital wallet on a website or app. Merchants can submit this data as either an encrypted or decrypted request.

- **Encrypted wallet:** The merchant sends the encrypted data along with their key and Commerce Hub decrypts the information for processing.
- **Decrypted wallet:** The merchant [decrypts the wallet data](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md) before submitting it to Commerce Hub for processing.

**Key benefits:**

- **Security:** Use advanced security measures such as encryption, tokenization, and biometric authentication to protect sensitive payment information and reduce fraud risk.
- **Convenience:** Allow users to store multiple payment methods and complete transactions quickly without re-entering payment details, leading to higher conversion rates and improved customer satisfaction.
- **Compliance:** Comply with industry standards such as [PCI DSS](?path=docs/Resources/FAQs-Glossary/Glossary.md#payment-card-industry-data-security-standard) and SCA *(Strong Customer Authentication)*, helping you meet regulatory requirements and ensuring secure transactions.

---

## Wallet integrations

Choose one of the e-wallets below to begin integrating with Commerce Hub and accepting payments.

<!-- theme: info -->
> For [contactless in-person payments](?path=docs/In-Person/Encrypted-Payments/EMV.md) with a digital wallet use *PaymentEMV*.

<!-- type: row -->

<!-- type: card
title: Apple Pay
description: Integrate Apple Pay with Commerce Hub to offer secure, seamless payments on iOS devices.
link: ?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md
-->

<!-- type: card
title: Google Pay
description: Enable Google Pay in your app or website through Commerce Hub for fast, secure transactions on Android devices.
link: ?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md
-->

<!-- type: card
title: Samsung Pay
description: Add Samsung Pay to your payment options with Commerce Hub to support both NFC and MST transactions.
link: ?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Samsung-Pay/Samsung-Pay.md
-->

<!-- type: row-end -->

<!-- type: row -->

<!-- type: card
title: PayPal and Venmo
description: Enable PayPal payments through Commerce Hub to provide a trusted and widely-used payment option.
link: ?path=docs/Online-Mobile-Digital/Wallets-AltPayments/PayPal/PayPal.md
-->

<!-- type: card
title: Paze
description: Add Paze to your payment options with Commerce Hub's Checkout SDK for secure and efficient transactions.
link: ?path=docs/Resources/Guides/Payment-Sources/Paze/Paze.md
-->

<!-- type: row-end -->

---
