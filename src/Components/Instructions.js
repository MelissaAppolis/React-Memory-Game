import React from 'react';

class Instructions extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };
    
    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <div class="instructionsModal" id="instructionsModal">
                <h2>Instructions</h2>
                <div class="content">{this.props.children}</div>
                <div class="actions">
                    <button class="close-button" onClick={this.onClose}>Ok</button>
                </div>
            </div>
        );
    }
}

export default Instructions;