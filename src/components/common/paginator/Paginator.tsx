import React, {FC} from 'react';
import s from './Paginator.module.css'


export type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void


}


export const Paginator:FC<PaginatorPropsType> = (props) => {

    const {totalUsersCount,pageSize,currentPage,onPageChanged,setTotalUsersCount}=props


    // let pagesCount = 15;
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const MinusTenUsers = () => setTotalUsersCount(totalUsersCount - 25)
    const PlusTenUsers = () => setTotalUsersCount(totalUsersCount + 25)




    return <div className={s.pageUsersBlock}>
                {totalUsersCount > 50 && <button onClick={MinusTenUsers}>-5</button>}

                {pages.map((p, index: number) => {
                    return (
                        <span
                            key={index}
                            className={currentPage === p ? s.selectedPage : " "}
                            onClick={() => {
                                onPageChanged(p)
                            }}
                        >{p}</span>)
                })}

                <button onClick={PlusTenUsers}>+5</button>
            </div>




}

