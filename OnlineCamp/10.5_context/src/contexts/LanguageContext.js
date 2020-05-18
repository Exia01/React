import React, { Component, createContext } from 'react';

export const LanguageContext = createContext(); //creating context

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { language: 'spanish' };
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  changeLanguage(e) {
    //passing the event target value
    this.setState({ language: e.target.value });
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

// HOC -> Rendering another component with a func passing the component prop
export const withLanguageContext = (Component) => (props) => (
  <LanguageContext.Consumer>
    {/* Component is just a generic name, props as language and then passing al other props */}
    {(value) => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
);
// rendering the component and injecting the languageContext
