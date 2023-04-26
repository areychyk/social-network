import React, {FC, useState} from 'react';
import s from './Paginator.module.css'


type Props = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number


}


export const Paginator: FC<Props> = (props) => {

    const {totalItemsCount, pageSize, currentPage, onPageChanged, portionSize} = props


    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    const MinusTenUsers = () => {
        setPortionNumber(portionNumber - 1)
    }
    const PlusTenUsers = () => {
        setPortionNumber(portionNumber + 1)
    }


    return <div className={s.pagiantor}>
      <button onClick={MinusTenUsers}>-10</button>

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p, index: number) => {
                return (
                    <span
                        key={index}
                        className={currentPage === p ? s.selectedPage : s.page}
                        onClick={() => {
                            onPageChanged(p)
                        }}
                    >{p}</span>)
            })}

      <button onClick={PlusTenUsers}>+10</button>
    </div>


}

