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
        background: 'https://media.tenor.com/DBgBbva3CkwAAAPo/fullmooner.mp4'
    },
    {
        name: 'limgrave',
        emoji: '✨',
        // fk u webpack
        background: 'https://media.tenor.com/8yWx1Zf8aQMAAAPo/erdtree-elden-ring.mp4'
    },
];

export type ThemeOption = 'age-of-stars' | 'limgrave';