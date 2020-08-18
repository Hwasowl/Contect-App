import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 3;

  state = {
    infomation: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '김한한빈빈',
        phone: '010-1200-0200'
      },
      {
        id: 2,
        name: 'e-min성',
        phone: '010-0600-0150'
      }
    ],
    keyword: '',
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
  }

  handleCreate = (data) => {
    const { infomation } = this.state;
    this.setState({
      infomation: infomation.concat(Object.assign({}, data, {id: this.id++}))
    });
  }

  handleRemove = (id) => {
    const { infomation } = this.state;
    this.setState({
      infomation: infomation.filter(info => info.id !== id)
    });
    alert ("성공적으로 삭제되었습니다.");
  }

  handleUpdate = (id, data) => {
    const { infomation } = this.state;
    this.setState({
      infomation: infomation.map(
        info => {
        if(info.id === id){
          return{
            id,
            ...data,
          };
        }
        return info;
      }
      )
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색"
        />
        <PhoneInfoList 
        data={this.state.infomation.filter(
          info => info.name.indexOf(this.state.keyword) > -1
        )} 
        onRemove={this.handleRemove}
        onUpdate={this.handleUpdate}/>        
      </div>
    );
  }
}

export default App;