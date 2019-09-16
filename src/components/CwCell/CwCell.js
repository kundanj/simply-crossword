import React, { PureComponent } from 'react';
import  './style.css';

{/* CwCell is the most frequently invoked component in parent render and can be optimized much better as a React.Component and
    implementing shouldComponentUpdate directly instead of leaving it to PureComponent which does shallow compare.   
    Kept it simple for now for code comprehension. Will be optimized in later version.
*/}
class CwCell extends PureComponent
{

    handleChange(e) {
        this.props.onChange(this.props.coord, e.target.value)
    }

    handleClick(coord, e)
    {
        this.props.onClick(coord)
    }

    render() {

        {/* Not desirable - gives a 'component is changing an uncontrolled input to be controlled' warning.
        Since this is only done at the final stage of crossword lifecycle i.e. at solve stage, have chosen this quick fix as a
        tradeoff between prop optimization against proper implementation.
        */}
        let styles = (this.props.isSelected) ? { backgroundColor : '#84B198' } : {} ;
        let cwCell = this.props.coord !== undefined ? 
                <div onClick={this.handleClick.bind(this,this.props.coord)} className="enabled-cell" style={styles}> <input  name={this.props.coord} maxLength="1" type="text" style={{backgroundColor:'inherit'}} {...this.props.charValue == undefined && {onChange : this.handleChange.bind(this)}} {...this.props.charValue !== undefined && {value : this.props.charValue}}></input> { this.props.showCoord && <label htmlFor={this.props.coord} style={{backgroundColor:'inherit'}}> <sup>{this.props.coord}</sup> </label> } </div> 
                : <div className="disabled-cell"> </div>    ;
        return cwCell;
    }
}

export default CwCell;