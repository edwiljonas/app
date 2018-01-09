import { User } from './users';

export const USERS: User[] = [
    {
        id: 1 ,
        name: 'GoctaG',
        email: 'account@gmail.com',
        status: 'online', // This can either be a string or integer
        champ: 'Kogmaw',
        image: 'assets/placeholders/kog.jpg',
        profileImage: 'assets/placeholders/kog.jpg',
        played: [
            {
                image: 'assets/placeholders/kog.jpg',
                champ: 'KogMaw',
                games: 43,
            },
            {
                image: 'assets/placeholders/tris.jpg',
                champ: 'Tristana',
                games: 28,
            },
            {
                image: 'assets/placeholders/kat.jpg',
                champ: 'Katarina',
                games: 16,
            },
        ],
        history: [
            {
                status: 'Defeat',
                image: 'assets/placeholders/kog.jpg',
                champ: 'KogMaw'
            },
            {
                status: 'Defeat',
                image: 'assets/placeholders/ken.jpg',
                champ: 'Kennen'
            },
            {
                status: 'Defeat',
                image: 'assets/placeholders/jhin.jpg',
                champ: 'Jhin'
            },
            {
                status: 'Defeat',
                image: 'assets/placeholders/kat.jpg',
                champ: 'Katarina'
            },
            {
                status: 'Victory',
                image: 'assets/placeholders/ez.jpg',
                champ: 'Ezreal'
            },
        ],
    },
    {
        id: 2 ,
        name: 'Arc',
        email: 'account@gmail.com',
        status: 'online', // This can either be a string or integer
        champ: 'Katerina',
        image: 'assets/placeholders/kat.jpg',
        profileImage: 'assets/placeholders/kat.jpg',
        played: [
            {
                image: 'assets/placeholders/jhin.jpg',
                champ: 'KogMaw',
                games: 43,
            },
            {
                image: 'assets/placeholders/lux.jpg',
                champ: 'Tristana',
                games: 28,
            },
            {
                image: 'assets/placeholders/olaf.jpg',
                champ: 'Katarina',
                games: 16,
            },
        ],
        history: [
            {
                status: 'Victory',
                image: 'assets/placeholders/olaf.jpg',
                champ: 'Olaf'
            },
            {
                status: 'Defeat',
                image: 'assets/placeholders/ken.jpg',
                champ: 'Kennen'
            },
            {
                status: 'Victory',
                image: 'assets/placeholders/tris.jpg',
                champ: 'Tristana'
            },
            {
                status: 'Defeat',
                image: 'assets/placeholders/lux.jpg',
                champ: 'Lux'
            },
            {
                status: 'Defeat',
                image: 'assets/placeholders/ez.jpg',
                champ: 'Ezreal'
            },
        ],
    },
    {
        id: 3 ,
        name: 'Mike',
        email: 'account@gmail.com',
        status: 'online', // This can either be a string or integer
        champ: 'Jhin',
        image: 'assets/placeholders/jhin.jpg',
        profileImage: 'assets/placeholders/jhin.jpg',
        played: [
            {
                image: 'assets/placeholders/ken.jpg',
                champ: 'KogMaw',
                games: 43,
            },
            {
                image: 'assets/placeholders/ez.jpg',
                champ: 'Tristana',
                games: 28,
            },
            {
                image: 'assets/placeholders/tris.jpg',
                champ: 'Katarina',
                games: 16,
            },
        ],
        history: [
            {
                status: 'Defeat',
                image: 'assets/placeholders/ez.jpg',
                champ: 'Ezreal'
            },

            {
                status: 'Defeat',
                image: 'assets/placeholders/ken.jpg',
                champ: 'Kennen'
            },
            {
                status: 'Victory',
                image: 'assets/placeholders/tris.jpg',
                champ: 'Tristana'
            },
            {
                status: 'Defeat',
                image: 'assets/placeholders/lux.jpg',
                champ: 'Lux'
            },
            {
                status: 'Victory',
                image: 'assets/placeholders/olaf.jpg',
                champ: 'Olaf'
            },
        ],
    },
    {
        id: 4 ,
        name: 'WarMachine',
        email: 'account@gmail.com',
        status: 'online', // This can either be a string or integer
        champ: 'Tristana',
        image: 'assets/placeholders/tris.jpg',
        profileImage: 'assets/placeholders/tris.jpg',
        played: [
            {
                image: 'assets/placeholders/kog.jpg',
                champ: 'KogMaw',
                games: 43,
            },
            {
                image: 'assets/placeholders/tris.jpg',
                champ: 'Tristana',
                games: 28,
            },
            {
                image: 'assets/placeholders/kat.jpg',
                champ: 'Katarina',
                games: 16,
            },
        ],
        history: [
            {
                status: 'Victory',
                image: 'assets/placeholders/olaf.jpg',
                champ: 'Olaf'
            },
            {
                status: 'Victory',
                image: 'assets/placeholders/tris.jpg',
                champ: 'Tristana'
            },
            {
                status: 'Defeat',
                image: 'assets/placeholders/lux.jpg',
                champ: 'Lux'
            },
            {
                status: 'Defeat',
                image: 'assets/placeholders/ken.jpg',
                champ: 'Kennen'
            },
            {
                status: 'Defeat',
                image: 'assets/placeholders/ez.jpg',
                champ: 'Ezreal'
            },
        ],
    },
];
