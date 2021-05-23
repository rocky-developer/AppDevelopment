import './season.css';
import React from 'react';

const seasonConfig = {
    summer :{
        text:"let's hit the beach!",
        iconName: "sun"
    },
    winter:{
        text:"Burr it is cold",
        iconName :"snowflake"
    }
};

const getSeason = (latitude, month) =>{
    if(month <2 && month >9){
        return latitude >0 ? 'summer':'winter';
    }
    else{
        return latitude >0 ? 'winter':'summer';
    }
}
const SeasonDisplay = (props) =>{
    let season = getSeason(props.latm,new Date().getMonth());
    const {text,iconName} = seasonConfig[season];


    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`}></i>
            <h1>{text}</h1>
            <i className={`${iconName} icon massive icon-right`}></i>
        </div>
    );
}

export default SeasonDisplay;