import React, { useState, Component } from 'react';

class Form extends Component {

    initialstate = {
        PasswordLength: ''
    }
    state = this.initialstate;

    handleChange = (event) => {

        this.setState({
            PasswordLength: event.target.value
        })
    }
    render(){
        return(
            <form>
                <div id="sec_options">
                <div class="chboxl">Password Length:</div>
		        <div class="chboxr">
				<select id="PasswordLength" title="Select the length of your password." onChange={this.handleChange}>
				<optgroup label="Weak">				
	  				 <option value="6">6</option>
	  				 <option value="7">7</option>
	  				 <option value="8">8</option>
	   				 <option value="9">9</option>
	  				 <option value="10">10</option>
	  				 <option value="11">11</option>
	  				 <option value="12">12</option>
	   				<option value="13">13</option>
	   				<option value="14">14</option>
	   				<option value="15">15</option>
				</optgroup>
				</select>
		    </div>
		    </div>
            </form>
        )
    }
}

export default Form 