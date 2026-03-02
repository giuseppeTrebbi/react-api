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
        <div className="container-fluid text-center mt-5 bg-danger-subtle">
            <div className="row row-cols-3 g-5">
                {
                    actresses.map((curActress) => (
                        <div key={curActress.id} className="col">
                            <Card
                                nome={curActress.name}
                                annoNascita={curActress.birth_year}
                                nazionalità={curActress.nationality}
                                biografia={curActress.biography}
                                imgUrl={curActress.image}
                                riconoscimenti={curActress.awards}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}