import React from 'react'
import  './style.css'


class CwList extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick(coord, e)
    {
        this.props.onClick(coord)
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (this.props.clickedCell !== nextProps.clickedCell)
            return true;
        if (this.props.defItems !== nextProps.defItems)
            return true;
        return false;
    }


    render() {

        let defItems = this.props.defItems
        let acItems=[], dwItems = []
        for (let item of defItems) {

            let styles = (this.props.clickedCell === item.c) ? { backgroundColor : '#84B198'} : {} ;
            (item.o === 'a') ? acItems.push(<dd key={item.c} style = {styles} onClick={this.handleClick.bind(this,item.c)}> {item.c + ' (' + item.l + '): ' + item.d} </dd>) : dwItems.push(<dd key={item.c} style = {styles} onClick={this.handleClick.bind(this,item.c)}> {item.c + ' (' + item.l + '): ' + item.d} </dd>)
        }
        return  <div className="column"><dl className="listtext"><dt>Across</dt>{acItems}<dt>Down</dt>{dwItems}</dl></div>;
    }

}

export default CwList;