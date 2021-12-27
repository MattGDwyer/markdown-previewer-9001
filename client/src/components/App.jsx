// can i use a plain jsx object somewhere? Maybe the header?

// import React from 'react';
// import ReactDOM from 'react-dom';

// components
const Header = () => {
  return (
    <header>
      {/*beginning to write react dom*/}
      <h1 className="title">React Markdown Previewer</h1>
    </header>
  );
};
const Editor = () => {
  return (
  <div className="editor">
  </div>
    );
}
const Preview = () => {
  return (
  <div className="preview">
  </div>
    );
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Body>
        <Header />
        <Editor />
        <Preview />
      </Body>
    )
  }
};

export default App;