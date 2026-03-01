import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";


export default function CardsGrid() {
    const [actresses, setActresses] = useState([])


    useEffect(() => {
        axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => {
            console.log(resp.data);
            setActresses(resp.data)
        })
    }, [])


    return (
        <div className="container text-center">
            <div className="row row-cols-2">
                <div className="col">
                    {
                        actresses.map((curActress) => (
                            <Card 
                                key={curActress.id} 
                                nome={curActress.name} 
                                annoNascita={curActress.birth_year}
                                nazionalità={curActress.nationality}
                                biografia={curActress.biography}
                                imgUrl={curActress.image}
                                riconoscimenti={curActress.awards}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}