import React, { useState } from 'react'
const Aboutus = (props) => {
    return(
        <div style={{backgroundColor:"#1976d2"}}>
            <h2 style={{color:"white", textAlign:"center", marginTop: "0"}}>關於這個系統</h2>
            <div style={{color: "white",textAlign:"center", backgroundColor:"#1976d2"}}>
            <p>本系統概念始於協助暨南大學羽球社舉辦比賽，為開源非營利的系統，如果你有意願協助我們，還請直接幫助暨南大學羽球社，幫幫我們這群山上的孩子建立友善的羽球環境。</p>
            <p>由於作者十分喜愛羽球這項運動，因此這是一個無私奉獻的專案，希望可以對這個圈子有所貢獻。</p>
            <p>如果你有需要使用這系統，還希望可附上專案的出處來源，並協助推廣羽球這項運動。</p>
            <p>對系統有任何想法，歡迎來<a href="https://github.com/Alien663">作者的Github</a>中提出Issue</p>
            </div>
            <img src={`${process.env.PUBLIC_URL}/big-icon-white.png`}
            style={{
                display:"block",
                margin: "auto",
                width: "590",
                height: "590px"
            }} alt="Personality Icon of Alien663" title="Badminton Competition System"/>
        </div>
    )
}
export default Aboutus