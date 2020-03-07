import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    Persons: [{ name: '家', count: 1314,id:0 }, { name: '黄华康', count: 5454,id:1 }, { name: '王依阳', count: 1021,id:2 }],
    otherState: 'anything',
    showPerson: false
  }

  // 实现传函数
  changeName(newName) {
    this.setState({
      Persons: [{ name: '家', count: 1314,id:0 }, { name: newName, count: 5454,id:1 }, { name: '王依阳', count: 1021,id:2 }]
    })
  }
  // 数据双向绑定
  doubleBindData(val,index,event) {
    val.name=event.target.value;
    this.state.Persons[index]=val;
    const newArr=this.state.Persons;
    this.setState({
      Persons: newArr
    })
  }
  // 更改内容
  changCnt(){
    const Person=this.state.showPerson;
    this.setState({
      showPerson:!Person
    })
  }
// 删除当前点击项
  deleteCurrentItem(index){
    console.log(index);
    const Persons=this.state.Persons;
    Persons.splice(index,1);
   
    this.setState({
      Persons:Persons
    })
  }

  render() {
    const styleCss = {
      backgroundColor: 'green',
      color:'#fff',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let Persons = null;
    if (this.state.showPerson) {
      Persons = (
        <div>
          {this.state.Persons.map((val,index)=>{
            return <Person changed={(event)=>{this.doubleBindData(val,index,event)}} myClick={()=>{this.deleteCurrentItem(index)}} name={val.name} count={val.count} key={val.id}></Person>
          })}
          {/* <Person changed={this.doubleBindData.bind(this)} name={this.state.Persons[0].name} count={this.state.Persons[0].count}></Person>
          <Person myClick={this.changeName.bind(this, "传事件")} name={this.state.Persons[1].name} count={this.state.Persons[1].count}>我已經做好了迎接生活中的各種挑戰！</Person>
          <Person name={this.state.Persons[2].name} count={this.state.Persons[2].count}>我也是！</Person> */}
        </div>
      )
      styleCss.backgroundColor="red";
    };
    const classes=[];
    if(this.state.Persons.length<=1){
      classes.push("red")
    }else if(this.state.Persons.length<=2){
      classes.push("bold")
    }
    return (
      <div className="App">
        <h1 className={classes.join(" ")}>黄华康，欢迎你~</h1>
        {
        Persons
        }
        <button style={styleCss} onClick={this.changCnt.bind(this,'dddd')}>更改内容</button>
        <button style={styleCss} onClick={() => { this.changeName("hugo") }}>更改状态</button>
      </div>
    );
  }
}

export default App;
