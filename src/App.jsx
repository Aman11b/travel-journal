/* eslint-disable react/jsx-key */
import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App(){

  const entryElement=data.map((entry)=>{
    return(
      <Entry 
        key={entry.id}
        img={{
          src:entry.img.src,
          alt:entry.img.alt
        }}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
    )
  })

  return(
    <>
    <Header />
    {entryElement}
    </>
  )
}