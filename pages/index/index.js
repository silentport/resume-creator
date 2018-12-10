import {connect} from 'react-redux';
import React from 'react';
import Form from '../../components/Form/index';
import FormList from './formList';
import {Checkbox} from 'antd';
const CheckboxGroup = Checkbox.Group;
import * as actions from './actions';

class Index extends React.Component {
  constructor (props) {
    super (props);
  }
  options = [
    'Basic',
    'Education',
    'Intern',
    'Job',
    'Skill',
    'Award',
    'Comment',
  ];

  state = {
    selected: [
      'Basic',
      'Education',
      'Intern',
      'Job',
      'Skill',
      'Award',
      'Comment',
    ],
  };
  onChange = checkedValues => {
    console.log ('checked = ', checkedValues);
    this.setState ({
      selected: checkedValues,
    });
  };
  render () {
    return (
      <div style={{display: 'flex'}}>
        <div
          style={{
            width: '15%',
            height: '100vh',
            padding: 5,
            background: '#eee',
          }}
        >
          <h3>选择简历中要描述的要素</h3>
          <CheckboxGroup
            options={this.options}
            defaultValue={this.state.selected}
            onChange={this.onChange}
          />
        </div>
        <div
          style={{
            width: '35%',
            height: '100vh',
            background: '#fff',
            overflowY: 'scroll',
            overflowX: 'hidden',
            padding: 5,
          }}
        >
          <FormList {...this.props} selected={this.state.selected} />

        </div>
        <div style={{flexGrow: 1, height: '100vh', background: '#ddd'}}>8</div>
      </div>
    );
  }
}
// const Index = props => {
//   const plainOptions = [
//     'Basic',
//     'Education',
//     'Intern',
//     'Job',
//     'Skill',
//     'Award',
//     'Comment',
//   ];
//   const selected = [
//     'Basic',
//     'Education',
//     'Intern',
//     'Job',
//     'Skill',
//     'Award',
//     'Comment',
//   ];
//   function onChange (checkedValues) {
//     console.log ('checked = ', checkedValues);
//     selected = checkedValues;
//   }
//   return (
//     <div style={{display: 'flex'}}>

//       <div style={{width: '15%', height: '100vh', background: '#eee'}}>
//         <CheckboxGroup
//           options={plainOptions}
//           defaultValue={plainOptions}
//           onChange={onChange}
//         />
//       </div>
//       <div
//         style={{
//           width: '35%',
//           height: '100vh',
//           background: '#fff',
//           overflowY: 'scroll',
//           overflowX: 'hidden',
//           padding: 5,
//         }}
//       >
//         <FormList {...props} />

//       </div>
//       <div style={{flexGrow: 1, height: '100vh', background: '#ddd'}}>8</div>
//     </div>
//   );
// };
// Index.getInitialProps = ({store}) => {};
const mapStateToProps = ({
  basic,
  education,
  intern,
  job,
  skill,
  award,
  comment,
}) => ({
  basic,
  education,
  intern,
  job,
  skill,
  award,
  comment,
});
const mapDispatchToProps = dispatch => {
  return {
    onSetBasicValue: val => dispatch (actions.setBasicValue (val)),

    onAddEducation: () => dispatch (actions.addEducation ()),
    onRemoveEducation: id => dispatch (actions.removeEducation (id)),
    onSetEducationValue: val => dispatch (actions.setEducationValue (val)),

    onAddIntern: () => dispatch (actions.addIntern ()),
    onRemoveIntern: id => dispatch (actions.removeIntern (id)),
    onSetInternValue: val => dispatch (actions.setInternValue (val)),

    onAddJob: () => dispatch (actions.addJob ()),
    onRemoveJob: id => dispatch (actions.removeJob (id)),
    onSetJobValue: val => dispatch (actions.setJobValue (val)),

    onAddSkill: () => dispatch (actions.addSkill ()),
    onRemoveSkill: id => dispatch (actions.removeSkill (id)),
    onSetSkillValue: val => dispatch (actions.setSkillValue (val)),

    onAddAward: () => dispatch (actions.addAward ()),
    onRemoveAward: id => dispatch (actions.removeAward (id)),
    onSetAwardValue: val => dispatch (actions.setAwardValue (val)),

    onSetCommentValue: val => dispatch (actions.setCommentValue (val)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (Index);
