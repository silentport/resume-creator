import {connect} from 'react-redux';
import React from 'react';
import FormList from './formList';
import {Checkbox, Button} from 'antd';
const CheckboxGroup = Checkbox.Group;
import * as actions from './actions';
import Preview from '../preview';
import fetch from 'isomorphic-fetch';
import config from '../../config';

class Index extends React.Component {
  constructor (props) {
    super (props);
  }
  options = [
    'basic',
    'education',
    'intern',
    'job',
    'skill',
    'award',
    'comment',
  ];
  url = `${config.host}:${config.port}/preview`;

  onChange = checkedValues => {
    this.props.onChangeSelected (checkedValues);
  };
  downLoad = async e => {
    const res = await fetch (this.url, {
      method: 'POST',
      body: JSON.stringify (this.props),
    });

    const blob = await res.blob ();
    const url = window.URL || window.webkitURL || window.moxURL;
    const downloadHref = url.createObjectURL (blob);
    let downloadLink = document.createElement ('a');
    downloadLink.href = downloadHref;
    downloadLink.download = 'resume.pdf';
    downloadLink.click ();
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
            defaultValue={this.props.selected}
            onChange={this.onChange}
          />
          <Button type="primary" onClick={this.downLoad}>
            下载
          </Button>
        </div>
        <div
          style={{
            width: '35%',
            height: '100vh',
            background: '#fff',
            overflowY: 'auto',
            overflowX: 'hidden',
            padding: 5,
          }}
        >
          <FormList {...this.props} selected={this.props.selected} />
        </div>
        <div
          style={{
            width: '50%',
            overflowY: 'auto',
            overflowX: 'hidden',
            flexGrow: 1,
            padding: 5,
            height: '100vh',
            background: '#ddd',
          }}
        >
          <h3>预览界面</h3>
          <Preview />
        </div>
      </div>
    );
  }
}

// Index.getInitialProps = ({store}) => {};
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
    onChangeSelected: val => dispatch (actions.changeSelected (val)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (Index);
