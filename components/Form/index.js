import {
  Form,
  Icon,
  Input,
  Button,
  Select,
  Upload,
  Cascader,
  DatePicker,
} from 'antd';
import {getType} from '../../utils';
import './form.css';
import renderFields from './renderFields';
const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;
const {RangePicker} = DatePicker;

const formItemLayout = {
  labelCol: {span: 4},
  wrapperCol: {span: 8},
};
const buttonItemLayout = {
  wrapperCol: {span: 14, offset: 4},
};
class NormalForm extends React.PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  renderEducation = (data, getFieldDecorator) => {
    return (
      <>
        {data.map(item => {
          return (
            <fieldset key={item.id} style={{position: 'relative'}}>
              {item.allowDelete && (
                <Icon
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  onClick={() => {
                    this.props.removeEducation(item.id);
                  }}
                />
              )}
              <legend>{item.legend}</legend>
              {renderFields(item, getFieldDecorator)}
            </fieldset>
          );
        })}
        <FormItem {...buttonItemLayout}>
          <Button
            type="dashed"
            onClick={this.props.addEducation}
            style={{width: '80%'}}
          >
            <Icon type="plus" /> 新增一项
          </Button>
        </FormItem>
        ;
      </>
    );
  };

  renderBasic = (data, getFieldDecorator) => {
    return (
      <fieldset key={data.id}>
        <legend>{data.legend}</legend>
        {renderFields(data, getFieldDecorator)}
      </fieldset>
    );
  };

  render() {
    const {
      data,
      form: {getFieldDecorator, getFieldValue},
    } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.renderBasic(data.basic, getFieldDecorator)}
        {this.renderEducation(data.education, getFieldDecorator)}
        <FormItem {...buttonItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            确定
          </Button>
        </FormItem>
      </Form>
    );
  }
}
const options = {
  mapPropsToFields: ({data}) => {
    const arr = Object.values(data);
    const res = {};
    arr.forEach(item => {
      if (getType(item) === 'object') {
        item.list.forEach(i => {
          if (i.type === 'upload') return;
          res[i.name] = Form.createFormField({
            value: i.value,
          });
        });
      }

      if (getType(item) === 'array') {
        item.forEach(item => {
          item.list.forEach(i => {
            if (i.type === 'upload') return;
            res[i.name] = Form.createFormField({
              value: i.value,
            });
          });
        });
      }
    });
    return res;
  },
  onValuesChange: ({setEduValue, setBasicValue}, newChangeValue, allValue) => {
    setEduValue(newChangeValue);
    setBasicValue(newChangeValue);
  },
};
const WrappedNormalForm = Form.create(options)(NormalForm);

export default WrappedNormalForm;
