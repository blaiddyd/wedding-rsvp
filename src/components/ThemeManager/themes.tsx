export interface Theme {
    name: string;
    emoji: string;
    background: string;
    mobileBackground: string;
}

export const Themes: Theme[] = [
    {
        name: 'age-of-stars',
        emoji: '✨',
        // fk u webpack
        background: 'https://media.tenor.com/DBgBbva3CkwAAAPo/fullmooner.mp4',
        mobileBackground: 'https://e0.pxfuel.com/wallpapers/859/908/desktop-wallpaper-elden-ring-eldenring-thumbnail.jpg'
    }
];

export type ThemeOption = 'age-of-stars' | 'limgrave';