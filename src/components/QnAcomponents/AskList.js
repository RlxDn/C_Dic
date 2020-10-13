import React, {Component} from 'react';
import Asks from './Asks';

class AskList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.qs !== nextProps.qs;
    }
    render() {
        const {qs, onRemove} = this.props;
        const qList = qs.map(
            ({id, q}) => (
                <Asks
                    id={id}
                    q={q}
                    onRemove={onRemove}
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