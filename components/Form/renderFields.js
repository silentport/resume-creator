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
const FormItem = Form.Item;
const Option = Select.Option;
const {RangePicker} = DatePicker;

const formItemLayout = {
  labelCol: {span: 4},
  wrapperCol: {span: 8},
};
const normFile = e => {
  console.log ('Upload event:', e);
  if (Array.isArray (e)) {
    return e;
  }
  return e && e.fileList;
};

export default ({list, id}, getFieldDecorator) => {
  return list.map (item => {
    switch (item.type) {
      case 'upload':
        return (
          <FormItem
            key={item.id}
            label={item.label}
            {...formItemLayout}
            extra="请上传图片"
          >
            {getFieldDecorator (item.name, {
              valuePropName: 'fileList',
              getValueFromEvent: normFile,
            }) (
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
            {getFieldDecorator (item.name, {
              rules: item.rules,
              initialValue: 'master',
            }) (
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
      case 'datepicker':
        return (
          <FormItem key={item.id} {...formItemLayout} label={item.label}>
            {getFieldDecorator (item.name, {
              rules: [
                {
                  ...item.rules[0],
                  type: 'array',
                },
              ],
            }) (<RangePicker style={{width: '410px'}} />)}
          </FormItem>
        );
      case 'cascade':
        return (
          <FormItem key={item.id} label={item.label} {...formItemLayout}>
            {getFieldDecorator (item.name, {
              rules: item.rules,
            }) (
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
            {getFieldDecorator (item.name, {
              rules: item.rules,
            }) (
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
