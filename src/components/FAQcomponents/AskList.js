import React, {Component} from 'react';
import Asks from './Asks';

class AskList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.qs !== nextProps.qs;
    }
    render() {
        const {qs, onRemove, onChange} = this.props;
        const qList = qs.map(
            ({id, q}) => (
                <Asks
                    id={id}
                    q={q}
                    onRemove={onRemove}
                    onChange={onChange}
                    key={id}
                />
            )
        );

        return (
            <div>
                {qList}
            </div>
        );
    }
}
export default AskList;