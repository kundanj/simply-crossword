import React from 'react'
import fromServer from './fromServer'
import { CwGrid } from '../components/CwGrid'
import { CwList } from '../components/CwList'
import { CwTheme } from '../components/CwTheme'
import { CwToolPanel } from '../components/CwToolPanel';
import '../App.css';

const CrossWord = (props) => {

    return (
        <div className="crossword"> 
            <CwTheme onSubmit={props.onSubmit} onThemeChange={props.onThemeChange} theme={props.theme} currIndex={props.currIndex}/>
            <CwGrid {...props}/>
            <CwList defItems={props.defItems} onClick={props.onClick} clickedCell={props.clickedCell}></CwList>
            <CwToolPanel clueValue={props.charMap.get(props.clickedCell)} onSolveClick={props.onSolveClick}/>
            <div className="checkSolved">{props.isSolved && <span> <h1>&#10003;</h1>  </span>}</div>
        </div>
    );

}

export default fromServer(CrossWord);
