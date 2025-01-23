/* eslint-disable react/jsx-key */
import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App(){

  const entryElement=data.map((entry)=>{
    return(
      <Entry 
        key={entry.id}
        {...entry}
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