import React, { Component } from 'react';
import QnATemplate from './QnAcomponents/QnATemplate';
import AskForm from './QnAcomponents/AskForm';
import AskList from './QnAcomponents/AskList';

class QnA extends Component {
  id = 0
  state = {
    input: '',
    qs: []
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }
  handleCreate = () => {
    const {input, qs} =  this.state;
    this.setState({
      input: '',
      qs: qs.concat({
        id: this.id++,
        q: input
      })
    });
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }
  handleRemove = (id) => {
    const {qs} = this.state;
    this.setState({
      qs: qs.filter(qx => qx.id !== id)
    });
  }
  render() {
    const {input, qs} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleRemove
    } = this;

    return (
      <QnATemplate form={(
        <AskForm
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
      <AskList qs={qs} onRemove={handleRemove}/>
    </QnATemplate>
    );
  }
}

export default QnA;