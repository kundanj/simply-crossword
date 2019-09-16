import React, { PureComponent } from 'react';
import './style.css';
import '../../App.css';


class CwToolPanel extends PureComponent {

    constructor (props) {
        super(props);
    }

    // TBD: Implement a professional looking modal dialog here using local state 
    onClueClick = () => {
        if (this.props.clueValue == ' ')
            alert('Value of cell you last clicked is Spacebar' )
        else if (this.props.clueValue === undefined)
            alert('You have not clicked on any crossword cell yet.')
        else
            alert('Value of cell you last clicked is ' + this.props.clueValue)
    }


    render () {
        return  <div className="tool-bar">
                    <div className="button buttongraysmall tool-item" onClick={this.onClueClick}>Clue</div>
                    <div className="button buttongraysmall tool-item" onClick={this.props.onSolveClick}>Solve</div>
                </div>;
    }

}

export default CwToolPanel;