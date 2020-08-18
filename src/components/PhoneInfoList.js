import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {
    render() {

        const { data, onRemove, onUpdate } = this.props;
        if(!data) return null;

        console.log('rendring list');
        
        const list = data.map(
            info => (
            <PhoneInfo 
            info={info} 
            key={info.id} 
            onRemove={onRemove}
            onUpdate={onUpdate}/>
            )
        )

        return (
            <div>
                {list}
            </div>
        )
    }
}
