import Form from '../../components/Form/index';
export default props => {
  return (
    <>
      {props.selected.includes('Basic') && (
        <Form
          tag="Basic"
          data={props.basic}
          setValue={props.onSetBasicValue}
          style={{
            display: 'inline',
          }}
        />
      )}
      {props.selected.includes('Education') && (
        <Form
          tag="Education"
          data={props.education}
          add={props.onAddEducation}
          remove={props.onRemoveEducation}
          setValue={props.onSetEducationValue}
          style={{
            display: 'inline',
          }}
        />
      )}
      {props.selected.includes('Intern') && (
        <Form
          tag="Intern"
          data={props.intern}
          add={props.onAddIntern}
          remove={props.onRemoveIntern}
          setValue={props.onSetInternValue}
          style={{
            display: 'inline',
          }}
        />
      )}
      {props.selected.includes('Job') && (
        <Form
          tag="Job"
          data={props.job}
          add={props.onAddJob}
          remove={props.onRemoveJob}
          setValue={props.onSetJobValue}
          style={{
            display: 'inline',
          }}
        />
      )}
      {props.selected.includes('Skill') && (
        <Form
          tag="Skill"
          data={props.skill}
          add={props.onAddSkill}
          remove={props.onRemoveSkill}
          setValue={props.onSetSkillValue}
          style={{
            display: 'inline',
          }}
        />
      )}
      {props.selected.includes('Award') && (
        <Form
          tag="Award"
          data={props.award}
          add={props.onAddAward}
          remove={props.onRemoveAward}
          setValue={props.onSetAwardValue}
          style={{
            display: 'inline',
          }}
        />
      )}
      {props.selected.includes('Comment') && (
        <Form
          tag="Comment"
          data={props.comment}
          setValue={props.onSetCommentValue}
          style={{
            display: 'inline',
          }}
        />
      )}
    </>
  );
};
