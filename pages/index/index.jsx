import {connect} from 'react-redux';
import React from 'react';
import FormList from './formList';
import {Checkbox, Button, Radio} from 'antd';
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;

import * as actions from './actions';
import Preview from '../preview';
import fetch from 'isomorphic-fetch';
import config from '../../config';
import './index.css';
class Index extends React.Component {
  constructor (props) {
    super (props);
  }
  state = {
    type: 'pdf',
  };
  options = [
    ['basic', '基础信息'],
    ['education', '教育经历'],
    ['intern', '实习经历'],
    ['job', '工作经历'],
    ['skill', '个人技能'],
    ['award', '获奖情况'],
    ['comment', '自我评价'],
  ];
  url = `${config.host}/resume_creator/preview`;

  onChange = checkedValues => {
    this.props.onChangeSelected (
      this.options
        .filter (item => {
          return checkedValues.includes (item[1]);
        })
        .map (item => item[0])
    );
  };
  downLoad = async e => {
    const imgUrl = this.props.basic.list[4].value;
    console.log (imgUrl);
    const res = await fetch (this.url, {
      method: 'POST',
      body: JSON.stringify ({
        ...this.props,
        type: this.state.type,
        imgUrl: imgUrl,
      }),
    });

    const blob = await res.blob ();
    const url = window.URL || window.webkitURL || window.moxURL;
    const downloadHref = url.createObjectURL (blob);
    let downloadLink = document.createElement ('a');
    downloadLink.href = downloadHref;
    if (this.state.type === 'pdf') {
      downloadLink.download = 'resume.pdf';
    }
    if (this.state.type === 'html') {
      downloadLink.download = 'resume.html';
    }
    if (this.state.type === 'picture') {
      downloadLink.download = 'resume.png';
    }

    downloadLink.click ();
  };
  onTypeChange = e => {
    this.setState ({
      type: e.target.value,
    });
  };
  render () {
    return (
      <div style={{display: 'flex'}}>
        <div className="slider">
          <h3>选择简历中要描述的要素</h3>
          <CheckboxGroup
            options={this.options.map (item => item[1])}
            defaultValue={this.options
              .filter (item => {
                return this.props.selected.includes (item[0]);
              })
              .map (item => item[1])}
            onChange={this.onChange}
          />
          <div className="ratio">
            选择下载的文件格式
            <div>
              <RadioGroup onChange={this.onTypeChange} value={this.state.type}>
                <Radio value={'pdf'}>pdf</Radio>
                <Radio value={'html'}>html</Radio>
              </RadioGroup>
            </div>
            <Button type="primary" onClick={this.downLoad}>
              下载到本地
            </Button>
          </div>
        </div>

        <div className="form">
          <FormList {...this.props} selected={this.props.selected} />
        </div>
        <div className="preview">
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
