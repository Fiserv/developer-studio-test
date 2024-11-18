# Testing...


If you want to fully outsource the payment process in order not to have any sensitive cardholder data on your systems, you can use our ready-made hosted pages for your customers to enter their payment information.

The hosted pages show your merchant name at the top and allow you to display a summary of the purchased items to your customer.

**Important Note: When making decisions on your way of integration, please consider that we do not recommend to use the hosted payment forms inside an iFrame since some Internet browsers do not allow cookies to be sent to the 3rd party hosts, moreover some features (e.g.: 3D Secure authentications) and some Alternative Payment methods that involve redirections to the 3rd party services (e.g. iDEAL or PayPal) do not allow displaying their screens within an iFrame.  However, if you still plan to embed our hosted payment pages inside an iFrame you must use the 'parentUri' parameter to specify an URL of a page, where the hosted payment page will be embedded.**

![hostedpage-option00](../assets/images/hostedpage-option.jpg)

[This is an external link to hostedpage-option link](/api/hosted-image/Developer-Portal-Tenant-API/assets/images/hostedpage-option.jpg)

![hostedpage-option1](../api/hosted-image/Developer-Portal-Tenant-API/assets/images/hostedpage-option.jpg)


## Required Fields

In addition to the [fields that are mandatory for every payment request](?path=docs/additionalInfo/PreAuthorizationSale.md) that you initiate through a HTML form, the following fields are required for the hosted payment page integration:

| *Field*: | *Comment*|
|----|----|
| checkoutoption | For a standard hosted payment page integration, set the value for this parameter to *combinedpage* |

By not including fields like e.g. the card number or expiry date in your request for a card payment, the gateway takes your customer to a secure page to enter that information.

If you do not want to let your customer select the payment method on the hosted page but want to handle that part upfront within your shop environment, you can submit the payment method in your request.

## Optional Fields

> [Billing/Shipping fields](?path=docs/additionalInfo/BillingShippingFields.md)

> [Other Optional fields](?path=docs/additionalInfo/OtherOptionalFields.md)
