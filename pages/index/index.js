import {connect} from 'react-redux';
import Form from '../../components/Form';
import {addEducation} from '../../store/action';
const Index = ({basic, education, onAdd}) => (
  <div>
    <div
      style={{
        width: '500px',
      }}
    >
      <Form
        data={{basic, education}}
        addEducation={onAdd}
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
    onAdd: text => dispatch (addEducation (text)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (Index);
