import React from "react"
import NavBar from "./MainPageComponents/NavBar"
import MainPageContent from "./MainPageComponents/MainPageContent"
import Card from "./MainPageComponents/Card"
import Footer from "./MainPageComponents/Footer"
function MainPage() {
    const list = ['My List','TV Shows','Trending Now','Continue Watching','Comedies','Binge-worthy US TV Shows','Netflix Originals','Suspenseful TV Shows','Top 10 in India Today','Teen TV Shows','Exciting Movies','US Movies','Crime TV Shows','Romatic Movies','Children & Family TV','Crime Movies']

    return <div>
        <NavBar />
        <MainPageContent />
        {list.map( (x) => {
            return <div className = "whole-card-container">
            <h2>{x}</h2>
            
            <div className="card-container">
                <p className = "left-right-sign">1</p>
                <Card img="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
                <Card img="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
                <Card img="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
                <Card img="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
                <Card img="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
                <p className = "left-right-sign">2</p>
            </div>
        </div> 
        })}
        <Footer/>     

    </div>
}

export default MainPage