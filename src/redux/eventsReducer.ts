const initialState: InitialEventsStateType = {
    events: [
        {
            eventId: 1,
            category: 'Football',
            live: true,
            date: '',
            host: 'Real Madrid',
            guest: 'Chelsea',
            betsCount: 15,
            rate: {
                winOfHost: 1.15,
                winOfGuest: 2.35,
                draw: 2.01,
            }
        },
        {
            eventId: 2,
            category: 'Basketball',
            live: true,
            date: '',
            host: 'New York Knicks',
            guest: 'Houston Rockets',
            betsCount: 26,
            rate: {
                winOfHost: 2.98,
                winOfGuest: 5.35,
                draw: 1.01,
            }
        },
        {
            eventId: 3,
            category: 'Basketball',
            live: false,
            date: '',
            host: 'Guantanamo',
            guest: 'Dynamo',
            betsCount: 4,
            rate: {
                winOfHost: 1.5,
                winOfGuest: 3.35,
                draw: 2.1,
            }
        },
        {
            eventId: 4,
            category: 'Tennis',
            live: true,
            date: '',
            host: 'Zverev Alexander',
            guest: 'Rublev Andrey',
            betsCount: 43,
            rate: {
                winOfHost: 4.0,
                winOfGuest: 2.35,
                draw: 1.35,
            }
        },
        {
            eventId: 5,
            category: 'Hockey',
            live: true,
            date: '',
            host: 'HK Tornado',
            guest: 'Kometa Brno',
            betsCount: 20,
            rate: {
                winOfHost: 3.70,
                winOfGuest: 5.35,
                draw: 2.16,
            }
        },
        {
            eventId: 6,
            category: 'Hockey',
            live: false,
            date: '',
            host: 'HC Dinamo Molodechno',
            guest: 'Lokomotiv Yaroslavl',
            betsCount: 19,
            rate: {
                winOfHost: 1.54,
                winOfGuest: 4.20,
                draw: 5.3,
            }
        },
        {
            eventId: 7,
            category: 'Volleyball',
            live: true,
            date: '',
            host: 'Sbornaya RB Minsk',
            guest: 'Dinamo-Astana',
            betsCount: 35,
            rate: {
                winOfHost: 5.15,
                winOfGuest: 1.35,
                draw: 4.01,
            }
        },
        {
            eventId: 8,
            category: 'Baseball',
            live: false,
            date: '',
            host: 'Minnesota Twins',
            guest: 'Boston',
            betsCount: 60,
            rate: {
                winOfHost: 1.75,
                winOfGuest: 1.35,
                draw: 4.01,
            }
        },
        {
            eventId: 9,
            category: 'Basketball',
            live: false,
            date: '',
            ost: 'Avtodor Saratov',
            guest: 'Yenisey Krasnoyarsk',
            betsCount: 15,
            rate: {
                winOfHost: 5.15,
                winOfGuest: 1.35,
                draw: 1.01,
            }
        },
        {
            eventId: 10,
            category: 'Boxing',
            live: true,
            date: '',
            host: 'Gassiev Murat',
            guest: 'Justin DeLoach',
            betsCount: 70,
            rate: {
                winOfHost: 1.15,
                winOfGuest: 6.35,
                draw: 3.01,
            }
        },
        {
            eventId: 11,
            category: 'Handball',
            live: false,
            date: '',
            host: 'SC Magdeburg',
            guest: 'THW Keil',
            betsCount: 4,
            rate: {
                winOfHost: 1.75,
                winOfGuest: 1.35,
                draw: 2.01,
            }
        },
        {
            eventId: 12,
            category: 'Cycling',
            live: true,
            date: '',
            host: 'Azzam Omar',
            guest: 'Sobhy Amanda',
            betsCount: 15,
            rate: {
                winOfHost: 1.67,
                winOfGuest: 4.35,
                draw: 5.01,
            }
        },
        {
            eventId: 13,
            category: 'Tennis',
            live: false,
            date: '',
            host: 'Djokovic Novak',
            guest: 'Daniil Medvedev',
            betsCount: 87,
            rate: {
                winOfHost: 1.45,
                winOfGuest: 1.63,
                draw: 4.17,
            }
        },
        {
            eventId: 14,
            category: 'Football',
            live: false,
            date: '',
            host: 'Dinamo Minsk',
            guest: 'Akhmat',
            betsCount: 7,
            rate: {
                winOfHost: 4.15,
                winOfGuest: 2.35,
                draw: 3.54,
            }
        },
        {
            eventId: 15,
            category: 'Hockey',
            live: false,
            date: '',
            host: 'Salavat Yulaev',
            guest: 'AK Bars',
            betsCount: 38,
            rate: {
                winOfHost: 4.15,
                winOfGuest: 2.43,
                draw: 1.01,
            }
        },
        {
            eventId: 16,
            category: 'Hockey',
            live: true,
            date: '',
            host: 'JHC Molot',
            guest: 'Tolpar UFA',
            betsCount: 25,
            rate: {
                winOfHost: 1.65,
                winOfGuest: 2.89,
                draw: 5.01,
            }
        },
        {
            eventId: 17,
            category: 'Basketball',
            live: false,
            date: '',
            host: 'High Touch',
            guest: 'Istambul Anka',
            betsCount: 29,
            rate: {
                winOfHost: 1.08,
                winOfGuest: 1.46,
                draw: 15.01,
            }
        },
        {
            eventId: 18,
            category: 'Volleyball',
            live: false,
            date: '',
            host: 'Stroitel Minsk',
            guest: 'Belogorenje Belgorod',
            betsCount: 76,
            rate: {
                winOfHost: 6.87,
                winOfGuest: 4.35,
                draw: 7.01,
            }
        },
        {
            eventId: 19,
            category: 'Basketball',
            live: false,
            date: '',
            host: 'Samara',
            guest: 'Tsmoki Minsk',
            betsCount: 15,
            rate: {
                winOfHost: 4.31,
                winOfGuest: 2.67,
                draw: 4.01,
            }
        },
        {
            eventId: 20,
            category: 'Volleyball',
            live: false,
            date: '',
            host: 'Sbornaya RB Minsk',
            guest: 'Dinamo-Akademia Kazan',
            betsCount: 15,
            rate: {
                winOfHost: 5.15,
                winOfGuest: 2.78,
                draw: 7.01,
            }
        },
        {
            eventId: 21,
            category: 'Tennis',
            live: true,
            date: '',
            host: 'Diez Steven',
            guest: 'Aney Jessie',
            betsCount: 4,
            rate: {
                winOfHost: 1.80,
                winOfGuest: 3.35,
                draw: 5.24,
            }
        },
        {
            eventId: 22,
            category: 'Handball',
            live: false,
            date: '',
            host: 'Hojej',
            guest: 'Elite',
            betsCount: 29,
            rate: {
                winOfHost: 4.67,
                winOfGuest: 5.35,
                draw: 3.01,
            }
        },
        {
            eventId: 23,
            category: 'Tennis',
            live: true,
            date: '',
            host: 'Edas Butvilas',
            guest: 'Taylor Ng',
            betsCount: 51,
            rate: {
                winOfHost: 4.15,
                winOfGuest: 2.56,
                draw: 8.01,
            }
        },
        {
            eventId: 24,
            category: 'Handball',
            live: false,
            date: '',
            host: 'BM Granolles',
            guest: 'Cisne BM',
            betsCount: 9,
            rate: {
                winOfHost: 6.15,
                winOfGuest: 4.40,
                draw: 5.32,
            }
        },
        {
            eventId: 25,
            category: 'Boxing',
            live: false,
            date: '',
            host: 'Ritson Lewis',
            guest: 'Fierro Angel',
            betsCount: 45,
            rate: {
                winOfHost: 1.56,
                winOfGuest: 2.87,
                draw: 4.01,
            }
        },
        {
            eventId: 26,
            category: 'Handball',
            live: false,
            date: '',
            host: 'THW Hannover',
            guest: 'SG Flensburg',
            betsCount: 56,
            rate: {
                winOfHost: 1.64,
                winOfGuest: 2.35,
                draw: 2.78,
            }
        },
        {
            eventId: 27,
            category: 'Boxing',
            live: false,
            date: '',
            host: 'Hurd Jarrett',
            guest: 'Pacheco Diego',
            betsCount: 17,
            rate: {
                winOfHost: 1.21,
                winOfGuest: 5.35,
                draw: 2.99,
            }
        },
        {
            eventId: 28,
            category: 'Handball',
            live: false,
            date: '',
            host: 'CB Cangas',
            guest: 'BM Huesca',
            betsCount: 23,
            rate: {
                winOfHost: 6.15,
                winOfGuest: 2.78,
                draw: 5.01,
            }
        },
        {
            eventId: 29,
            category: 'Football',
            live: false,
            date: '',
            host: 'FC Fakel Voronezh',
            guest: 'Chelsea',
            betsCount: 75,
            rate: {
                winOfHost: 1.87,
                winOfGuest: 8.35,
                draw: 4.01,
            }
        },
        {
            eventId: 30,
            category: 'Football',
            live: false,
            date: '',
            host: 'Real Madrid',
            guest: 'NK Istra',
            betsCount: 56,
            rate: {
                winOfHost: 1.87,
                winOfGuest: 0.35,
                draw: 2.99,
            }
        },

    ] as EventsItemType[]
}


export const eventsReducer = (state: InitialEventsStateType = initialState): InitialEventsStateType => {
    return state
}


//  types

type InitialEventsStateType = {
    events: EventsItemType[]
}

export type EventsItemType = {
    eventId: number,
    category: string,
    live: boolean,
    date: string,
    host: string,
    guest: string,
    betsCount: number,
    rate: RateType
}

export type RateType = {
    winOfHost: number,
    winOfGuest: number,
    draw: number,
}






