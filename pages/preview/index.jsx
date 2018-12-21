import {connect} from 'react-redux';
import './index.css';
import {getDate} from '../../utils';
const Preview = props => {
  const data = props.isServer ? props.serverData : props;
  const degree = {
    master: '硕士',
    junior: '大专',
    doctor: '博士',
    bachelor: '本科',
  };
  const renderValue = (label, value) => {
    switch (label) {
      case '起止时间':
        return (
          getDate (value[0]).substring (0, 7) +
          ' ~ ' +
          getDate (value[1]).substring (0, 7)
        );
      case '学历':
        return degree[value];
      default:
        return value;
    }
  };

  const hasValue = data => {
    if (data.concat) {
      return data.some (item => {
        return item.list.some (i => i.value !== '' && i.label !== '学历');
      });
    } else {
      return data.list.some (item => {
        return item.value !== '';
      });
    }
  };

  return (
    <div className="container">
      {data.selected && data.selected.length > 0
        ? data.selected.map ((key, index) => {
            const current = data[key];
            const isBasic = current.id === 'basic';
            let hasAvator = false;
            if (isBasic) {
              hasAvator = current.list[4].value.includes ('data:image');
            }
            if (current.concat) {
              switch (current[0].legend.split ('-')[0]) {
                case '教育经历':
                  return hasValue (current)
                    ? <div className="item-container" key={index}>
                        <div className="title">
                          {current[0].legend.split ('-')[0]}
                        </div>
                        <table className="education">
                          <tbody>
                            {current.map ((item, index) => {
                              return (
                                <tr key={index}>
                                  {item.list.map ((i, idx) => {
                                    return (
                                      <td key={idx}>
                                        {i.value &&
                                          renderValue (i.label, i.value)}
                                      </td>
                                    );
                                  })}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    : null;
                case '实习经历':
                case '工作经历':
                  return hasValue (current)
                    ? <div className="item-container" key={index}>
                        <div className="title">
                          {current[0].legend.split ('-')[0]}
                        </div>
                        {current.map ((item, index) => {
                          return (
                            <div key={index}>
                              <div className="work">
                                {item.list.map ((i, idx) => {
                                  return i.label !== '工作描述'
                                    ? <div key={idx}>
                                        {/* {i.label}: */}
                                        {i.value &&
                                          renderValue (i.label, i.value)}
                                      </div>
                                    : null;
                                })}
                              </div>
                              {item.list[3].value &&
                                item.list[3].value
                                  .split ('\n')
                                  .map ((item, idx) => {
                                    return (
                                      <div key={idx} className="description">
                                        {item}
                                      </div>
                                    );
                                  })}

                            </div>
                          );
                        })}
                      </div>
                    : null;
                case '个人技能':
                case '获奖情况':
                  return hasValue (current)
                    ? <div className="item-container" key={index}>
                        <div className="title">
                          {current[0].legend.split ('-')[0]}
                        </div>
                        {current.map ((item, index) => {
                          return item.list[0].value && item.list[0].value
                            ? <div
                                key={index}
                                className={
                                  current.length > 1 ? 'description' : 'null'
                                }
                              >
                                {item.list[0].value}
                              </div>
                            : null;
                        })}
                      </div>
                    : null;
                default:
                  return <h3 key={index}>无匹配项</h3>;
              }
            } else {
              switch (current.legend) {
                case '基础信息':
                  return hasValue (current)
                    ? <div className="item-container" key={index}>
                        <div className="title">{current.legend}</div>
                        {isBasic && hasAvator
                          ? <div className="basic-container">
                              <div className="info">
                                {current.list.map ((item, index) => {
                                  return (
                                    item.value &&
                                    item.name !== 'avator' &&
                                    <div key={index} className="name">
                                      <div>
                                        {item.label}: {item.value}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                              <div className="avator">
                                <img src={current.list[4].value} alt="" />
                              </div>
                            </div>
                          : <div
                              className="detail"
                              style={{
                                width: '100%',
                              }}
                            >
                              {current.list.map ((item, index) => {
                                return (
                                  <div key={index} className="name">
                                    {item.value &&
                                      <div>
                                        {/* {item.value} */}
                                        {item.label}: {item.value}
                                      </div>}
                                  </div>
                                );
                              })}
                            </div>}
                      </div>
                    : null;
                default:
                  return hasValue (current)
                    ? <div className="item-container" key={index}>
                        <div className="title">{current.legend}</div>
                        <div className="comment">{current.list[0].value}</div>
                      </div>
                    : null;
              }
            }
          })
        : <h1>没有内容</h1>}
    </div>
  );
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
