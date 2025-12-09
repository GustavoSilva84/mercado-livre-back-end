
import crypto from "crypto";

export function Crypto_Utils() {

    function generateCodeVerifier(length = 64) {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
        const randomBytes = crypto.randomBytes(length);
        let result = '';

        for (let i = 0; i < randomBytes.length; i++) {
            result += charset[randomBytes[i] % charset.length];
        }
        return result;
    }

    function base64UrlEncode(buffer: any) {
        return buffer.toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/g, '');
    }

    function generateCodeChallenge(codeVerifier: any) {
        const hash = crypto.createHash('sha256')
            .update(codeVerifier)
            .digest();
        return base64UrlEncode(hash);
    }

    const codeVerifier = generateCodeVerifier();
    const codeChallenge = generateCodeChallenge(codeVerifier);

    return {
        codeVerifier,
        codeChallenge
    }
}