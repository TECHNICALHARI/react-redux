import React, { useState } from 'react';
import {NoteData} from './MobileData';
import {SData} from './MobileData';
import './mobilecompare.css';
function MobileCopare() {
    const [Note, setNote] = useState(NoteData)
    const [Ultra, setUltra] = useState(SData)
    return (
        <div className="mobile-compare">
            <div className="mobile-compare-data">
                    {
                        Note.map((data, index)=>{
                            return(
                                <div className="note-main" key={index}>
                                <div className="note-header">
                                    <div className="all-ponts">
                                        <div className="points-first">
                                            <span>{data.pointval1}</span>
                                            <span>{data.points}</span>
                                        </div>
                                        <div className="points-first">
                                            <span>{data.pointval2}</span>
                                            <span>{data.points}</span>
                                        </div>
                                        <div className="title">
                                            <h4>{data.title}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="price">
                                    <h6> &#8360;. {data.price}</h6>
                                </div>
                                <div className="image">
                                    <img src={data.image} alt=""/>
                                </div>
                                </div>
                            )
                        })  
                    }
                    <div className="vs">
                    <span>VS</span>
                    </div>
                    {
                        Ultra.map((data, index)=>{
                            return(
                                <div className="note-main" key={index}>
                                <div className="note-header">
                                    <div className="all-ponts">
                                        <div className="points-first">
                                            <span>{data.pointval1}</span>
                                            <span>{data.points}</span>
                                        </div>
                                        <div className="points-first">
                                            <span>{data.pointval2}</span>
                                            <span>{data.points}</span>
                                        </div>
                                        <div className="title">
                                            <h4>{data.title}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="price">
                                    <h6> &#8360;. {data.price}</h6>
                                </div>
                                
                                <div className="image">
                                    <img src={data.image} alt=""/>
                                </div>
                                </div>
                            )
                        })  
                    }
            </div>
        </div>
    )
}

export default MobileCopare
