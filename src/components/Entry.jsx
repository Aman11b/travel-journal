/* eslint-disable react/prop-types */
export default function Entry(props){
    return (

        <article className="journal-entry">
            <img className="main-img" src={props.entry.img.src} alt={props.entry.img.alt} />
            <div className="info-container">
                <img className="marker-logo" src="./assets/marker.png" alt="marker icon" />
                <span className="country">{props.entry.country}</span>
                <a href={props.entry.googleMapsLink}>
                view on Google maps
                </a>
                <h2 className="entry-title">{props.entry.title}</h2>
                <p className="trip-dates">{props.entry.dates}</p>
                <p className="entry-text">
                    {props.entry.text}
                </p>
            </div>
        </article>
    )
}