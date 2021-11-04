import React from 'react';
import {useParams} from "react-router";

const Hello = () => {
    const {wcolor} = useParams();
    const {bcolor} = useParams();
    return (
        <div style={{backgroundColor: bcolor}}>
            <h1 style={{color: wcolor}}>Hello!</h1>
        </div>
    );
};

export default Hello;