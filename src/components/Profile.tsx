import React from 'react';

const Profile = () => {
    return (<div className="content">
            <div>
                <img
                    src={'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'}/>
            </div>
            <div className={"avaDescription"}>
                <div className={"avatar"}>
                    <img
                        src={'https://img.championat.com/news/big/x/s/hasbulla-magomedov_1654777118343414709.jpg'}/>
                </div>
                <div className={"description"}>
                    description
                </div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    New post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>

            Main contentd
        </div>

    )
}

export default Profile;