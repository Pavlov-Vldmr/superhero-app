interface IHero {
    id: number;
    // id: {
    name: string;
    powerstats: {
        intelligence: number;
        strength: number;
        speed: number;
        durability: number;
        power: number;
        combat: number
    };
    biography: {
        fullName: string;
        alterEgos: string;
        aliases: Array<{}>;
        placeOfBirth: string;
        firstAppearance: string;
        publisher: string;
        alignment: string;

    };
    appearance: {
        gender: string;
        race: string;
        height: Array<{}>;
        weight: Array<{}>;
        eyeColor: string;
        hairColor: string;
    }
    work: {
        occupation: string;
        base: string;
    }
    connections: {
        groupAffiliation: string;
        relatives: string;
    }
    images: {
        // url: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
    }
}

interface IHeroesData extends IHero {
    key: React.Key;
    id: number;
    name: string;
    // image: {
    //     url: string;
    // }
}

export type { IHero, IHeroesData };