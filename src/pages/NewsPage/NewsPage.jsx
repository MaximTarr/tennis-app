import React, { useEffect, useState } from 'react'

import TennisCard from "../../components/Tenniscard"



import s from "./NewsPage.module.css"


const endpoint = process.env.REACT_APP_ENDPOINT || "";

function NewsPage() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${endpoint}/cards`)
      const data = await response.json()
      setCards(data)
    }
    getData()
  }, [])
  return (
    <div>
      <div className={s.grid}>
        {cards?.length > 0 && cards.map((elem) => (
          <TennisCard
            id={elem.id}
            image={elem.image}
            date={elem.date}
            text={elem.text}
            buttonText={elem.buttonText}
          />
        ))}
      </div>
    </div>
  )
}

export default NewsPage