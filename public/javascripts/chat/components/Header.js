// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         return (
//             <header><h1>{this.props.title}</h1></header>
//         );
//     }
// }

const Header = (props) => (
    <header><h1>{props.title}</h1></header>
);
Header.propTypes = {
    title: React.PropTypes.string,
}

Header.defaultProps = {
    title: '功能標題名稱',
}

module.exports = Header;
