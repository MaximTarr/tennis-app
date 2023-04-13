import React from "react";
import { Link } from "react-router-dom";
import s from "./Tennis.module.scss"

function Tennis({ id, image, date, text, buttonText = "Подробнее" }) {

    return (
        <div className={s.mainDiv}>
            <img src={image} alt="tennis" className={s.image} />
            <br />
            <p className={s.dateClass}>{date}</p>
            <p>{text}</p>
            <br />
            <div>
                <Link to={`/news/${id}`} className={s.moreBtn}>{buttonText}</Link>
            </div>
        </div>
    )
}




export default Tennis