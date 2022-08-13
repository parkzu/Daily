import React, { Component } from 'react'
import { ThemeContext, themes } from './ThemeContext';
import ThemedButton from './ThemedButton';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        }
    }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
            <ThemedButton />
        </ThemeContext.Provider>
        <ThemedButton />
      </div>
    )
  }
}
