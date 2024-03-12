
import { useState, useEffect } from 'react';
import { IHero, IHeroesData } from "../models/heroModel";
function useRequest() {

    const [heroes, setHeroes] = useState<IHeroesData[]>([]);
    // const [heroes, setHeroes] = useState<IHero[]>([]);
    // const [heroes, setHeroes] = useState<IHero>();

    // const requestUrl = 'https://superheroapi.com/api.php/7122638917832984/';
    const requestUrl = 'https://akabab.github.io/superhero-api/api/all.json';



    const requestAllHeroes = async () => {
        try {
            await fetch(requestUrl)
                .then(res => res.json())
                .then((data) =>
                    setHeroes(data)
                )

            // console.log(heroes)
        }
        catch (e) {
            console.log('catch error: ' + e)
        }
    }
    useEffect(() => {
        requestAllHeroes();
    }, []);

    return heroes;

}
export { useRequest };