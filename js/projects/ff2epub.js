import React from 'react';
import InputForm from '../common/input-form'

class FF2EPub extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // 'formData': [
            //     {
            //         'id' : 'ff_net_id',
            //         'label' : 'FF.net ID',
            //         'value' : ''
            //     },
            //     {
            //         'id': 'email',
            //         'label' : 'email',
            //         'value' : ''
            //     }
            // ]
            'formData': {
                'ff_net_id' :{
                    'id' : 'ff_net_id',
                    'label' : 'FF.net ID',
                    'value' : ''
                },
                'email' :{
                    'id': 'email',
                    'label' : 'email',
                    'value' : ''
                }
            }

        }

        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(target.key)
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit (event) {
        console.log('parent handle submit')

        alert('A name was : ' + this.state.value);
    };
    
    render() {

        let formData = this.state.formData
        

        return (
            <span>
            <section className="section section--alignCentered section--description">

            <InputForm formInfo={formData} handleSubmit={this.handleSubmit} handleChange={this.handleInputChange} />
        </section>
        </span>
        )
    }
}

class EPubDesc extends React.Component {

}

export default FF2EPub
