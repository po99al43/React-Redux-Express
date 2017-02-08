const Board = (props) => (
<table className="table">
    <thead className="thead-inverse">
        <tr>
            <th>{props.title1}</th>
            <th>{props.title2}</th>
            <th>{props.title3}</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
        </tr>
    </tbody>
</table>
);
Board.propTypes = {
    title1: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    title2: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    title3: React.PropTypes.string,
}

Board.defaultProps = {
    title1: '標題',
    title2: '留言者',
    title3: '時間',
}
module.exports = Board;
