import React from 'react';

export class Ola extends React.Component {
    render() {
        return (
            <div>
                Olá , {this.props.nomecompleto} cargo de {this.props.cargo} 
            </div>
        )
    }
}