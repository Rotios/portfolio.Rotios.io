import React from 'react';
import ExampleWorkModal from './example-work-modal'

class ExampleWork extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            'modalOpen' : false,
            'selectedExample' : this.props.work[0],
            'unselectedExamples': this.props.work
        };

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal(evt, example) {
        this.setState({
            'modalOpen' : true,
            'selectedExample': example,
            'unselectedExamples' : this.props.work.filter(function(value, index, arr){
                return !(value.id == example.id);
            })
        });
        console.log(this.state.unselectedExamples[0])
        console.log(this.example)
    }

    closeModal(evt) {
        this.setState({
            'modalOpen': false
        })
    }

    render() {
        if (this.state.modalOpen) {
            var elem = (
                
                <section>
                        {
                            this.props.work.map( 
                            (example,idx) => {
                                    return (
                                        <ExampleWorkBubble example={example} 
                                            key={idx} 
                                            openModal={this.openModal}
                                        />
                                    )
                                }
                            )
                        }
                        <ExampleWorkModal example={this.state.selectedExample} 
                            open={this.state.modalOpen} 
                            closeModal={this.closeModal} />
                    
                </section>
            )
        } else {
            var elem = this.props.work.map( 
                (example,idx) => {
                    return (
                        <ExampleWorkBubble example={example} 
                            key={idx} 
                            openModal={this.openModal}
                        />
                    )
                }
            )
        }
        return (
        <section className="section section--alignCentered section--description">
            {elem}
        </section>
        )
    }
}

class ExampleWorkBubble extends React.Component {
    render() {
        let example = this.props.example;
        console.log(example)

        return (
            <div
                onClick={ (evt) => this.props.openModal(evt, example) } className="section__example color--cloud">
                    <div className="section__exampleTitle">
                        {example.title}
                    </div>
                    <div className="section__exampleText">
                        {example.shortDesc}
                    </div>
            </div>
        )
    }
}

export default ExampleWork