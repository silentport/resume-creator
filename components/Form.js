import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Select,
  Upload,
  Cascader,
  DatePicker,
} from 'antd';
import {inherits} from 'util';
import {addEducation} from './../store/action/index';

const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;

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

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  renderFields = (data, getFieldDecorator) => {
    return data.map(item => {
      switch (item.type) {
        case 'upload':
          return (
            <FormItem
              key={item.id}
              label={item.label}
              {...formItemLayout}
              extra="请上传图片"
            >
              {getFieldDecorator('upload', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload name="logo" action="" listType="picture">
                  <Button>
                    <Icon type="upload" /> Click to upload
                  </Button>
                </Upload>
              )}
            </FormItem>
          );
        case 'select':
          return (
            <FormItem key={item.id} label={item.label} {...formItemLayout}>
              {getFieldDecorator(item.name, {
                rules: item.rules,
                initialValue: 'master',
              })(
                <Select
                  style={{width: 200}}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  onChange={() => {}}
                  onFocus={() => {}}
                  onBlur={() => {}}
                >
                  <Option value="junior">大专</Option>
                  <Option value="bachelor">本科</Option>
                  <Option value="master">硕士</Option>
                  <Option value="doctor">博士</Option>
                </Select>
              )}
            </FormItem>
          );
        case 'cascade':
          return (
            <FormItem key={item.id} label={item.label} {...formItemLayout}>
              {getFieldDecorator(item.name, {
                rules: item.rules,
              })(
                <Cascader
                  style={{width: '410px'}}
                  options={item.options}
                  placeholder="Select Address"
                />
              )}
            </FormItem>
          );
        default:
          return (
            <FormItem key={item.id} label={item.label} {...formItemLayout}>
              {getFieldDecorator(item.name, {
                rules: item.rules,
              })(
                <Input
                  style={{width: '410px'}}
                  prefix={
                    <Icon
                      type={item.iconType}
                      style={{color: 'rgba(0,0,0,.25)'}}
                    />
                  }
                  placeholder={item.placeholder}
                />
              )}
            </FormItem>
          );
      }
    });
  };

  renderEducation = (data, getFieldDecorator) => {
    return (
      <>
        {data.map(item => {
          return (
            <fieldset key={item.id}>
              <legend>{item.legend}</legend>
              {this.renderFields(item.list, getFieldDecorator)}
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
        {this.renderFields(data.list, getFieldDecorator)}
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

const WrappedNormalForm = Form.create()(NormalForm);

export default WrappedNormalForm;
