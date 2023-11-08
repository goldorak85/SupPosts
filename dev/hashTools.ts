export async function hash(password: string, username: string, env) {
    const myText = new TextEncoder().encode(username + password + env.DB_SALT);

    const myDigest = await crypto.subtle.digest(
        {
            name: 'SHA-512',
        },
        myText, // The data you want to hash as an ArrayBuffer
    );
    const hashArray = Array.from(new Uint8Array(myDigest));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

export async function verify(password: string, username: string, baseHash: string, env) {
    const testedHash = await hash(password, username, env);
    return (testedHash === baseHash);
}

export async function getRandomInt(min, max) {
    // Create byte array and fill with 1 random number
    const byteArray = new Uint8Array(1);
    crypto.getRandomValues(byteArray);
    const range = max - min + 1;
    const n = ((byteArray[0] % range) * Math.random()) / 100;
    const value = n * (max - min + 1) + min;
    return Math.floor(value);
}
