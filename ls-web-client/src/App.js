import React, {Component} from 'react';
import './App.css';
import {FocusStyleManager, Button} from "@blueprintjs/core";
import TimeTypePicker from './components/TimeTypePicker'

class App extends Component {


  constructor() {
    super();
    this.state = {
      user: 'biel',
      timeTypes: [
        'Study', 'Sport', 'Housework', 'Commute'
      ],
      activeTimeType: -1
    }
  }
  componentWillMount(){
    FocusStyleManager.onlyShowFocusOnTabs();
  }
  updateSelectedIndex(key, event){
    this.setState(Object.assign({}, this.state, {activeTimeType: key}))
    console.debug("updateSelectedIndex: ", key, event)
  }
  render() {
    const button = React.createElement(Button, {
      iconName: "predictive-analysis",
      text: "CDN Blueprint is go!",
    });
    return (
        <div className={"box"}>
          <header className="row header" style={{display: 'flex', flexFlow: 'row'}}>
            <div style={{}}>
              <h1>LifeStats</h1>
            </div>
            <div style={{
              flexGrow: '1',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'lightblue'
            }}>
              <div style={{backgroundColor: 'lightblue'}}>
                Not loggeed in
                <Button text={'Button1'}/>
              </div>
            </div>
          </header>
          <div className={"row content"} style={{padding: '5px 15px'}}>
            <p>
              <b>content</b>
              (fills remaining space)
              {button}
            </p>
            <TimeTypePicker timeTypes={this.state.timeTypes} selectedIndex={this.state.activeTimeType} updateSelectedIndex={this.updateSelectedIndex.bind(this)}/>
          </div>
          <div className={"row footer"}>
            <p><b>footer</b> (fixed height)</p>
          </div>
        </div>
    );
  }
}


export default App;
