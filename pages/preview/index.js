import {connect} from 'react-redux';
import './index.css';
const Preview = props => {
  const data = props.isServer ? props.serverData : props;
  return data.selected && data.selected.length > 0
    ? data.selected.map ((key, index) => {
        const current = data[key];
        return (
          <div key={index}>
            {current.concat
              ? current.map ((item, index) => {
                  return <div key={index}>{item.legend}</div>;
                })
              : <div className="item-container">
                  <div className="title">{current.legend}</div>
                </div>}
          </div>
        );
      })
    : <h1>没有内容</h1>;
};
Preview.getInitialProps = async ctx => {
  // console.log (ctx.isServer, ctx.query);
  return {serverData: ctx.query, isServer: ctx.isServer};
};
const mapStateToProps = ({
  basic,
  education,
  intern,
  job,
  skill,
  award,
  comment,
  selected,
}) => ({
  basic,
  education,
  intern,
  job,
  skill,
  award,
  comment,
  selected,
});

export default connect (mapStateToProps, null) (Preview);
