import React from 'react'

class InputForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event, tag) {
        console.log("handle event")
        this.props.handleChange(event, tag)
    }

    handleSubmit(event) {
        console.log("Handle Submit")
        this.props.handleSubmit(event)
    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                {Object.keys(this.props.formInfo).map(
                    (formData, idx) => {
                        return(
                            <FormLabels key={idx} formInfo={this.props.formInfo[formData]} handleChange={this.handleChange}/>
                        )
                    }
                )}
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

class FormLabels extends React.Component {
    render() {
        console.log("rendered again")
        console.log(this.props)
        return( 
            <div>
                <label>
                    {this.props.formInfo.label + ": "}
                </label>
                <input name={this.props.formInfo.id}
                    type="text" 
                    value={this.props.formInfo.value} 
                    onChange={this.props.handleChange} />
                <br/>
            </div>
        )
    }
}

export default InputForm;