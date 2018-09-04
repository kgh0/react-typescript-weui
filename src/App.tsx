/**/
import * as React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { Button } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Button>hello wechat</Button>
      </div>
    );
  }
}

export default App;
