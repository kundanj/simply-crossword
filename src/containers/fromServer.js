import React from 'react';
//import axios from 'axios';
import * as constants from '../constants/Constants.js'
import {loadCW, matchMaps} from '../common/utils'

const fromServer = (WrappedComponent, url) => {

    {/* HOC container which houses all the data fetching, manipulation and consolidates state processing.
        It calls on lower layers of presentational components to render the crossword
    */}
    return class extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                charMap: null,
                workingMap: null,
                theme:'G',
                clickedCell: null,
                defItems: null,
                isSolved: false,
                currIndex: 0,
                hasLoadFailed: false,
            };
        }

        componentDidMount() {
            // Please note that CORS for all has been enabled at node REST API server level
            // do NOT use no-cors header in request here! Opaque requests screws up the json!
            loadCW(constants.CW_URL,  { theme: 'G', count: 0 } , this.convJSONtoMap, this.onLoadErr)
        }

        convJSONtoMap = (jsonData) => {
            
            let charMap= new Map();
            let defItems = [];
            let obj=jsonData;
            for (let acItems of obj.cw.a)
            {
                let [xc, yc] = acItems.c.split("-");
                let wordArr = [...acItems.w];
                for (let incre = 0; incre < acItems.w.length;incre++)
                {
                    charMap.set(xc+"-"+(+yc+incre),wordArr[incre] );
                }
                defItems.push({ 'c' : acItems.c, 'd': acItems.d, 'o': 'a', 'l': acItems.w.length});
            }
            for (let dwItems of obj.cw.d)
            {
                let [xc, yc] = dwItems.c.split("-");
                let wordArr = [...dwItems.w];
                for (let incre = 0; incre < dwItems.w.length;incre++)
                {
                    charMap.set((+xc+incre)+"-"+yc,wordArr[incre] );
                }
                defItems.push({ 'c' : dwItems.c,  'd': dwItems.d, 'o': 'd', 'l': dwItems.w.length});
            }

            this.setState ((state) => (
                {
                    charMap : charMap,
                    workingMap : new Map(),
                    defItems: defItems,
                    hasLoadFailed: false,
                    currIndex: ++state.currIndex,
                })
            )
        }
    
        onChange = (coord, val) => {
            let workingMap = this.state.workingMap
            workingMap.set(coord,val)
            this.setState({
                workingMap: workingMap
                }
            )
            if (matchMaps(this.state.charMap, this.state.workingMap))
                this.setState( {
                    isSolved: true }
                )
            else    
                this.setState( {
                    isSolved: false }
                )
        }


        onClick = (coord) => {
            this.setState ({
                clickedCell : coord
            })
        }

        onLoadErr = (err) => {
            this.setState (
            {
                hasLoadFailed : true,
            })
        }

        onSubmit = () => {
            this.resetState()
            loadCW(constants.CW_URL, { theme : this.state.theme, count : this.state.currIndex }, this.convJSONtoMap, this.onLoadErr)
        }

        onThemeChange = (e) => {
            let theme = e.target.value
            this.setState ({
                theme : theme
            })
        }

        onSolveClick = () => {
            this.setState ({
                isSolved : true
            })
        }

        resetState = () => {
            this.setState((state) => ({
                charMap: null,  
                workingMap: null,
                clickedCell: null,
                defItems: null,
                isSolved: false,
                hasLoadFailed : false,
            }));
        }

        render() {

            return (this.state.charMap) ? 
                    <WrappedComponent 
                    charMap={this.state.charMap} 
                    defItems={this.state.defItems} 
                    clickedCell={this.state.clickedCell}
                    isSolved={this.state.isSolved} 
                    theme={this.state.theme} 
                    currIndex={this.state.currIndex}
                    onThemeChange={this.onThemeChange} 
                    onSubmit={this.onSubmit} 
                    onChange={(x,y) => this.onChange(x,y)} 
                    onClick={(x) => this.onClick(x)} 
                    onSolveClick={this.onSolveClick}/>
                    : <div> {!this.state.hasLoadFailed ? <h3>Loading.....</h3> : <p> Sorry...There was an error in fetching crossword from server</p>} </div>;
        }
    }

}


export default fromServer