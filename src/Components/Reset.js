import React from 'react';

class Reset extends React.Component {
    render() {
        return (
            <button className='Reset__button' onClick={this.props.resetApp}>Reset Board</button>
        )
    }
}

export default Reset;