import { connect } from "react-redux";
import "./index.css";
const Preview = props => {
  const data = props.isServer ? props.serverData : props;
  return (
    <div className="container">
      {data.selected && data.selected.length > 0 ? (
        data.selected.map((key, index) => {
          const current = data[key];
          const isAvator = current.name === 'avator' ?
                "detail avator": "detail";      
          return (
            <div key={index}>
              {current.concat ? (
                current.map((item, index) => {
                  return (
                    <div key={index} className="item-container">
                      <div className="title">{item.legend.split("-")[0]}</div>
                    </div>
                  );
                })
              ) : (
                <div className="item-container">
                  <div className="title">{current.legend}</div>
                  <div className={isAvator} style={{width: 'calc(100% - 200px)'}}>
                  {current.list.map((item, index) => {
                    return (
                      <div key={index} className="name">
                        {item.value && (
                          <div>
                            {item.label}: {item.value}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  </div>

                </div>
              )}
            </div>
          );
        })
      ) : (
        <h1>没有内容</h1>
      )}
    </div>
  );
};
Preview.getInitialProps = async ctx => {
  // console.log (ctx.isServer, ctx.query);
  return { serverData: ctx.query, isServer: ctx.isServer };
};
const mapStateToProps = ({
  basic,
  education,
  intern,
  job,
  skill,
  award,
  comment,
  selected
}) => ({
  basic,
  education,
  intern,
  job,
  skill,
  award,
  comment,
  selected
});

export default connect(
  mapStateToProps,
  null
)(Preview);
