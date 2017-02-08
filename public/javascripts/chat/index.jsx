import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
// import Header from './components/Header';
// class HelloMessage extends React.Component {
//   render() {
//     return <div>Hello {this.props.name}</div>;
//   }
// }
// ReactDOM.render(<HelloMessage name="Jane" />,
//   document.getElementById('main')
// );
//

// class Board extends React.Component {
//   render() {
//     return <div className="alert alert-info" role="alert"><strong>Heads up!</strong> This alert needs your attention, but it's not super important.</div>;
//   }
// }
// class Main extends React.Component {
//   render() {
//     return <div><Header title="留言板" /><Board /></div>;
//   }
// }
ReactDOM.render(<App />,
  document.getElementById('main')
);