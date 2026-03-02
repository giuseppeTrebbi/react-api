export default function Card({ nome, annoNascita, nazionalità, biografia, imgUrl, riconoscimenti }) {
    return (
        <div className="card bg-info text-dark" style={ {width: "18rem"} } >
            <img src={imgUrl} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>
                <p className="card-text">{biografia}</p>
            </div>
            <ul className="list-group list-group-flush bg-info text-dark">
                <li className="list-group-item bg-info text-dark">Year of birth: {annoNascita}</li>
                <li className="list-group-item bg-info text-dark">Nationality: {nazionalità}</li>
                <li className="list-group-item bg-info text-dark">Career awards: {riconoscimenti}</li>
            </ul>
        </div>
    )
}