export interface Theme {
    name: string;
    emoji: string;
    background: string;
}

export const Themes: Theme[] = [
    {
        name: 'age-of-stars',
        emoji: '✨',
        // fk u webpack
        background: 'https://64.media.tumblr.com/e5954130ebb766e3e34ddc620969cf94/0496d0eea7a3c1db-70/s540x810/69e9f521296052fab47ac8bb67098412c96de100.gif'
    }
];

export type ThemeOption = 'age-of-stars' | 'limgrave';