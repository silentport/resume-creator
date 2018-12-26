import {connect} from 'react-redux';
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

  renderList = (data, getFieldDecorator) => {
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
                    this.props.remove(item.id);
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
            onClick={this.props.add}
            style={{maxWidth: '400px', background: '#eee'}}
          >
            <Icon type="plus" /> 新增一项
          </Button>
        </FormItem>
      </>
    );
  };

  renderSingle = (data, getFieldDecorator, setValue) => {
    return (
      <fieldset key={data.id}>
        <legend>{data.legend}</legend>
        {renderFields(data, getFieldDecorator, setValue)}
      </fieldset>
    );
  };

  render() {
    const {
      setValue,
      data,
      form: {getFieldDecorator, getFieldValue},
    } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        {data.concat
          ? this.renderList(data, getFieldDecorator)
          : this.renderSingle(data, getFieldDecorator, setValue)}
      </Form>
    );
  }
}
const options = {
  mapPropsToFields: ({data}) => {
    const res = {};
    if (getType(data) === 'object') {
      data.list &&
        data.list.forEach(item => {
          if (item.type === 'upload') return;
          res[item.name] = Form.createFormField({
            value: item.value,
          });
        });
    }

    if (getType(data) === 'array') {
      data.forEach(every => {
        every.list &&
          every.list.forEach(item => {
            if (item.type === 'upload') return;
            res[item.name] = Form.createFormField({
              value: item.value,
            });
          });
      });
    }

    return res;
  },

  onValuesChange: (data, newChangeValue, allValue) => {
    if (newChangeValue.avator) {
      return;
    }
    data.setValue && data.setValue(newChangeValue);
  },
};
const WrappedNormalForm = Form.create(options)(NormalForm);

export default WrappedNormalForm;
