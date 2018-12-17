import React from 'react';
import UploadFile from '../upload-file'

class FF2EPub extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <span>
            <section className="section section--alignCentered section--description">

            <UploadFile />
        </section>
        </span>
        )
    }
}

class EPubDesc extends React.Component {

}

export default FF2EPub
