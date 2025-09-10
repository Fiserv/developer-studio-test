---
tags: [Account Management, Developer Studio, Key Management, Certificate, CSR, Apple Pay]
---

# Create a Certificate Signing Request

A developer can create Certificate Signing Requests *(CSR)* from the Developer Studio Dashboard. A CSR allows integration with [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md) and other integrations that require a PEM certificate.

---

## Step 1: Access Developer Studio

Login to the Developer Studio and access the Developer Dashboard.

---

## Step 2: Create the CSR

Click the *Create CSR* button, complete the following information and click the *Create* button.

- **Select CSR type:** Cert or Production.
- **Common name:** Fully qualified domain name. Cannot contain a space or special characters.
- **Wallet type:** Select type of digital wallet from the dropdown menu.
- **Organization name:** Legal name of your organization.
- **Organization unit:** The unit of your organization.
- **Country/region:** Select country/region from the dropdown menu.
- **State/province:** The full name of the state/province.
- **City/locality:** The full name of the city/locality.
- **Description:** Details of the CSR.

---

## Step 3: Download the CSR

Click the *download icon*, review the steps and click the *OK* button to save the CSR *(common_name.pem)* to your computer.

<!-- theme: info -->
> View, Update or Delete the CSR by clicking the appropriate button or icon.

---

## See also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)
- [Developer Studio Workspace](/support/docs/?path=docs/guides/workspaces.md)
- [Use Commerce Hub APIs](?path=docs/Resources/API-Documents/Use-Our-APIs.md)

---
