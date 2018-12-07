import {connect} from 'react-redux';
import Form from '../../components/Form/index';
import * as actions from './actions';
const Index = ({
  basic,
  education,
  onAdd,
  onRemove,
  onSetEduValue,
  onSetBasicValue,
}) => (
  <div>
    <div
      style={{
        width: '500px',
      }}
    >
      <Form
        data={{basic, education}}
        addEducation={onAdd}
        removeEducation={onRemove}
        setEduValue={onSetEduValue}
        setBasicValue={onSetBasicValue}
        style={{
          display: 'inline',
        }}
      />
    </div>
  </div>
);
Index.getInitialProps = ({store}) => {};
const mapStateToProps = ({basic, education}) => ({basic, education});
const mapDispatchToProps = dispatch => {
  return {
    onAdd: () => dispatch (actions.addEducation ()),
    onRemove: id => dispatch (actions.removeEducation (id)),
    onSetEduValue: payload => dispatch (actions.setEducationValue (payload)),
    onSetBasicValue: payload => dispatch (actions.setBasicValue (payload)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (Index);
