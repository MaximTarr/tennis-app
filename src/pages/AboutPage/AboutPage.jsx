import React from 'react'
import { Link } from 'react-router-dom'

import Slider from '../../components/Slider'

import slide1 from "../../images/slider-2.jpg"
import slide2 from "../../images/slider-3.jpg"



import s from "./AboutPage.module.scss"

function AboutPage() {

  const slides = [
    {
      id: 0,
      image: slide1,
      description: "Голубой корт"
    },
    {
      id: 1,
      image: slide2,
      description: "Закрытый корт"
    },
  ]

  return (
    <div>
      <div className={s.header}>Header</div>

      <div className={s.main}>
        <div className={s.container}>
          <Slider slides={slides}/>
        </div>
      </div>

      <div className={s.footer}>Footer</div>
    </div>
  )
}

export default AboutPage