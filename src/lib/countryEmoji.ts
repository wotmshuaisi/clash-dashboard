export function getCountryFlagEmojiByISOCode (code: any): string {
    if (!code) {
        return ''
    }
    const codePoints = code
        .toUpperCase()
        .split('')
        .map((char: string) => 127397 + char.charCodeAt(0))
    return String.fromCodePoint(...codePoints)
}
