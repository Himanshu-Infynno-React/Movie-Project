import React from 'react'
import User from '../../images/users 1.png'
import List from '../../images/list (1) 1.png'
import Download from '../../images/download (1) 1.png'
import Setting from '../../images/settings 1.png'

function homePageSideBar() {
    return (
        <>
            <section>
                <div className="sideBar">
                    <div className="user">
                        <img src={User} alt="" />
                    </div>
                    <div className="list">
                        <img src={List} alt="" />
                    </div>
                    <div className="downloads">
                        <img src={Download} alt="" />
                    </div>
                    <div className="settings">
                        <img src={Setting} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default homePageSideBar
