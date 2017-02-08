import Header from '../components/Header';
// import Footer from '../components/Footer';
import Card from '../components/Card';
// import Board from '../containers/Board';

class App extends React.Component {
    render() {
        return <div><Header title="留言板" /><Card title1="標題" title2="內容" title3="Last updated 3 mins ago"/></div>;
    }
}
module.exports = App;
