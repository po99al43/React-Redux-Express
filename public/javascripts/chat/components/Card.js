const Card = (props) => (
<div className="card">
    <div className="card-block">
      <h4 className="card-title">{props.title1}</h4>
      <p className="card-text">{props.title2}</p>
      <p className="card-text"><small className="text-muted">{props.title3}</small></p>
    </div>
</div>
);
Card.propTypes = {
    title1: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    title2: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    title3: React.PropTypes.string,
}

Card.defaultProps = {
    title1: '標題',
    title2: '內容',
    title3: '留言者-時間',
}
module.exports = Card;
