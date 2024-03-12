import Container from "@mui/material/Container/Container";
import CardContainer from "../../components/CardContainer/CardContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import { IHero } from "../../models/heroModel";
import { useRequest } from "../../hooks/useRequest";
// import { useEffect, useState } from "react";
// import { useState, useEffect } from "react";

function HomePage() {
    const data = useRequest();
    console.log(typeof (data))
    // interface IHeroProps{
    //     data: IHero[];
    //  }
    // console.log(typeof (data))
    // console.log(data)

    // const data = useRequest() as unknown as IHero[];

    // const [superHeros, setSuperHeros] = useState([]); //use state HOOK for json data
    // //
    // useEffect(() => {
    //     fetch("https://akabab.github.io/superhero-api/api/all.json")
    //         .then((response) => response.json())
    //         .then((users) => setSuperHeros(users))
    //         .then(() => console.log(superHeros));
    // }, []);

    return (
        <>
            {/* {console.log(data[562]?.name)} */}
            <Container maxWidth='lg'>
                <SearchBar></SearchBar>
                <>
                    {/* <ul>
                        {data.slice(0, 20).map((el, index) => (
                            <li key={el.id}>{index + 1}{' : '}{el.name}</li>
                        ))}
                    </ul> */}
                </>
                {/* <CardContainer {...data}></CardContainer> */}
                <CardContainer data={data}></CardContainer>


                {/* <>{console.log(data[1]?.appearance.eyeColor)}</>
                <>{console.log(data[1]?.images.lg)}</> */}


            </Container>
        </>
    );
}

export default HomePage;