import React from 'react';

class FileUpload extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            'buttonDisabled':false
        };

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({ buttonDisabled: true });
        let formData = new FormData();
        const files = this.filesInput.files;
        for (var key in files) {
            // check if this is a file:
            if (files.hasOwnProperty(key) && files[key] instanceof File) {
                formData.append(key, files[key]);
            }
        }

        // do asynchronous post request here 
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="file" 
                        ref={(input) => { this.filesInput = input; }} 
                        name="file"/>
                    <button  type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default FileUpload