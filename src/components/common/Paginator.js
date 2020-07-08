import React, {useState} from "react";
import style from "./Paginator.module.css";

let Paginator = ({totalUserCount,pageSize , currentPage, onPageChanged}) => {
    let paginationSize = Math.ceil(totalUserCount/pageSize)
    let pages = []
    for( let i=1; i<=paginationSize; i++) {
        pages.push(i)
    }

    let portion = Math.ceil(totalUserCount/pageSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftBorder = (portionNumber-1)*pageSize + 1
    let rightBorder = (portionNumber*pageSize) - 1

    return (

        <div className={style.pagination}>
            {portionNumber > 1  && <button onClick={()=> {setPortionNumber(portionNumber - 1)}}> Prev </button>}

            {pages.filter((page) => { return page >= leftBorder && page <= rightBorder })
                .map((p)=> {
                    return <span className={currentPage === p ? style.selectedPage : ""}
                             onClick={()=> {onPageChanged(p)}}>{p}</span>
            })}

            {portion > portionNumber && <button onClick={()=> {setPortionNumber(portionNumber + 1)}}> Next </button>}
        </div>
    )
}

export default Paginator