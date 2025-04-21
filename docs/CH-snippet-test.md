```javascript
// Utils
const toArrayBuffer = (str) => {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0; i < str.length; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
};

const toBase64Encode = (arrayBuffer) => window.btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

// RSA Algorithm
const asymmetricallyEncrypt = async (base64PubKey, sourceString) => {
    const keyBuf = toArrayBuffer(window.atob(base64PubKey));
    const pubKeyDer = await window.crypto.subtle.importKey(
        "spki",
        keyBuf,
        { name: "RSA-OAEP", hash: "SHA-256" },
        true,
        ["encrypt"]
    );
    const encryptedBlock = await window.crypto.subtle.encrypt(
        { name: "RSA-OAEP" },
        pubKeyDer,
        new TextEncoder().encode(sourceString)
    );
    return toBase64Encode(encryptedBlock);
};

// Example usage of the library
(async () => {
    const rsaAsymmetricPublicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3bOOfW6F6rMSmSy2/.....";

    const cardData = {
        "cardData": "4005550000000019",
        "nameOnCard": "John Doe",
        "expirationMonth": "01",
        "expirationYear": "2034",
        "securityCode": "123"
    };

    const encryptionBlock = await asymmetricallyEncrypt(rsaAsymmetricPublicKey, Object.values(cardData).join(""));
    const encoder = new TextEncoder();
    const encryptionBlockFields = Object.keys(cardData)
        .map(key => `card.${key}:${encoder.encode(cardData[key]).length}`)
        .join(',');
    const payload = {
        source: {
            sourceType: "PaymentCard",
            encryptionData: {
                keyId: "79cd0553-9db5-4676-989b-f29edfbb6a51",
                encryptionType: "RSA",
                encryptionBlock: encryptionBlock,
                encryptionBlockFields: encryptionBlockFields,
                encryptionTarget: "MANUAL",
            }
        }
    };

    console.log(JSON.stringify(payload, null, 4));
})();
```

