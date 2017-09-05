import React, { Component } from 'react';
import './App.less';
import Avatar from '../index';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ margin: 100 }}>
        <Avatar
          ltbHeadpic="http://dyttest-oimg.cdn.dayiner.com/gliv/avatar/03553cb17be2482ba3a8373bbd9ef8bd.jpg"
          adviserLeaderFlag={1}
          roleMark={5}
        />
      </div>
    );
  }
}

export default App;
