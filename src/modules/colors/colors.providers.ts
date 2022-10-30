import { Colors } from './colors.entity';

export const colorsProviders = [
    {
        provide: 'colors',
        useValue: Colors,
    },
];
