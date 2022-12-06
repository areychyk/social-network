import React from 'react';

import s from '../Profile/Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div className={s.content}>
            <div>
                <img
                    src={'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'}/>
            </div>
            <div className={s.avaDescription}>
                <div>
                    <img className={s.avatar}
                        src={'https://img.championat.com/news/big/x/s/hasbulla-magomedov_1654777118343414709.jpg'}/>
                </div>
                <div className={"description"}>
                    description
                </div>
            </div>
            <MyPosts/>

            Main contentd
        </div>

    )
}

export default Profile;