import React from 'react'
import { CwCell } from '../CwCell'
import * as constants from '../../constants/Constants.js'
import  './style.css'


class CwGrid extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {

        // to be implemented. Grid should not be rendered when Theme is changed. 
        // Besides there are optimizations to be done to mitigate redundant processing due to prop drilling.
        return true;
    }

    renderCell = (x,y,selectedItems) => {

        let coord = x+"-"+y
        let isSelected = (selectedItems.length && selectedItems.includes(coord)) ? true : false ;
        let charValue = this.props.isSolved ?  this.props.charMap.get(coord) : undefined
        let cellDiv = (this.props.charMap.get(coord) !== undefined) ? 
                    <CwCell key={coord} coord={coord} showCoord={ this.props.defItems.find(item => item.c === coord) !== undefined ? true : false } isSelected={isSelected} onChange={this.props.onChange} onClick={this.props.onClick} charValue={charValue}></CwCell> 
                    : <CwCell key={coord}></CwCell>

        return cellDiv;
    }


    renderGrid = () =>
    {
        let grid=[]
        let clickedCell=this.props.clickedCell
        let selectedItems = []
        if (clickedCell != null)
        {
            let objects = this.props.defItems.filter( item => item.c === clickedCell )
            for (let obj of objects ) {
                let orientation = obj.o
                if (orientation === 'a')
                {
                    let [xc,yc] = clickedCell.split("-");
                    for (let i=0; i < obj.l; i++)
                    {
                        selectedItems.push(xc+"-"+yc++);
                    }
                }
                else {
                    let [xc,yc] = clickedCell.split("-");
                    for (let j=0; j< obj.l; j++)
                    {
                        selectedItems.push(xc++ + "-" + yc);
                    }
                }
            }
        }

        for (let i = 1; i <= constants.NUMCELLS; i++)
        {
            let children=[]
            for (let j = 1; j <= constants.NUMCELLS; j++)
                children.push(this.renderCell(i,j,selectedItems))
            grid.push(<div key={i} className="cw-row">{children}</div>)
        }
        
        return <div className="column">{grid}</div>
    }

    render ()
    {
        return this.renderGrid();
    }
}

export default CwGrid;