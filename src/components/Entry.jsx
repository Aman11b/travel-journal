export default function Entry(props){
    return (

        <article className="journal-entry">
            <img className="main-img" src={props.img.src} alt={props.img.alt} />
            <div className="info-container">
                <img className="marker-logo" src="./assets/marker.png" alt="marker icon" />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink}>
                view on Google maps
                </a>
                <h2 className="entry-title">Mount Fuji</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">
                    {props.text}
                </p>
            </div>
        </article>
    )
}