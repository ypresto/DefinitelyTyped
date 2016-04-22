// Type definitions for speakeasy v1.0.4
// Project: https://github.com/markbao/speakeasy
// Definitions by: Lucas Woo <https://github.com/legendecas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



interface IKey {
    ascii: string;
    base32: string;
    hex: string;
    qr_code_ascii: string;
    qr_code_hex: string;
    qr_code_base32: string;
    google_auth_qr: string;
}

interface GenerateOptions {
    length?: number;
    symbols?: boolean;
    qr_codes?: boolean;
    google_auth_qr?: boolean;
    name?: string;
}

interface TotpOptions {
    key: string;
    step?: number;
    time?: number;
    initial_time?: number;
    length?: number;
    encoding?: string;
}

interface HotpOptions {
    key: string;
    counter: number;
    length?: number;
    encoding?: string;
}

declare export function generate_key(options: GenerateOptions): IKey;

declare export function hotp(options: HotpOptions): string;

declare export function counter(options: HotpOptions): string;

declare export function totp(options: TotpOptions): string;

declare export function time(options: TotpOptions): string;
