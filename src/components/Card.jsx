export default function Card({ nome, annoNascita, nazionalità, biografia, imgUrl, riconoscimenti }) {
    return (
        <div className="card" style={ {width: "18rem"} } >
            <img src={imgUrl} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>
                <p className="card-text">{biografia}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{annoNascita}</li>
                <li className="list-group-item">{nazionalità}</li>
                <li className="list-group-item">{riconoscimenti}</li>
            </ul>
        </div>
    )
}