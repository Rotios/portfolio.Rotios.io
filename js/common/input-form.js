import React from 'react'

class InputForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event, tag) {
        console.log('called change')
        this.props.handleChange(event)
    }

    handleSubmit(event) {
        this.props.handleSubmit(event)
    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>

                {this.props.formInfo.entries.map(
                    (formData, idx) => {
                        return(
                            <FormLabels key={idx} formInfo={formData} handleChange={this.handleChange}/>
                        )
                    }
                )}

                <input type="submit" value="Submit" />
            </form>
            <p>
                {this.props.formValue}
            </p>
            </div>
        );
    }
}

class FormLabels extends React.Component {
    render() {
       return( <label>
            {this.props.formInfo.label}
            <input name={this.props.formInfo.id} type="text" value={this.props.formInfo.value} onChange={this.props.handleChange} />
        </label>
       )
    }
}

export default InputForm;