import React, { PureComponent } from 'react';
import './style.css'
import '../../App.css';


class CwTheme extends PureComponent {

    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.props.currIndex == 4)
            alert('Sorry, a maximum of 5 crosswords can be fetched for a day.')
        else
            this.props.onSubmit()
    }

    render () {

        return  <form  className="theme-form" onSubmit={this.handleSubmit}>
                <label className="theme-item theme-label"> Theme </label>
                <select className="select-css" value={this.props.theme} onChange={this.props.onThemeChange}>
                    <option value="G">General</option>
                    <option value="P">Psychology</option>
                    <option value="L">Legal</option>
                </select>
                <input className="theme-item button buttondarklarge" type="submit" value="Get Crossword"></input>
            </form>;
    }

}

export default CwTheme;