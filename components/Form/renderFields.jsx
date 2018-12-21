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
import config from '../../config';
const FormItem = Form.Item;
const Option = Select.Option;
const {TextArea} = Input;
const {RangePicker} = DatePicker;

const formItemLayout = {
  labelCol: {span: 4},
  wrapperCol: {span: 8},
};

const normFile = (file, setAvator) => {
  console.log ('Upload event:', file, setAvator);
  const reader = new FileReader ();
  reader.addEventListener (
    'load',
    function () {
      setAvator ({avator: reader.result});
    },
    false
  );
  reader.readAsDataURL (file);
};

const remove = (file, setAvator) => {
  setAvator ({avator: ''});
};

export default ({list, id}, getFieldDecorator, setValue) => {
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
              valuePropName: 'avator',
            }) (
              <Upload
                name="logo"
                // action={`${config.host}:${config.port}/upload`}
                listType="picture"
                beforeUpload={file => {
                  normFile (file, setValue);
                }}
                onRemove={file => {
                  remove (file, setValue);
                }}
              >
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
            }) (
              <Select style={{width: '400px'}}>
                <Option value="junior">大专</Option>
                <Option value="bachelor">本科</Option>
                <Option value="master">硕士</Option>
                <Option value="doctor">博士</Option>
              </Select>
            )}
          </FormItem>
        );
      case 'area':
        return (
          <FormItem key={item.id} label={item.label} {...formItemLayout}>
            {getFieldDecorator (item.name, {
              rules: item.rules,
              initialValue: 'master',
            }) (
              <TextArea
                style={{width: '400px'}}
                rows={4}
                placeholder={item.placeholder}
              />
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
            }) (
              <RangePicker
                placeholder={['开始日期', '结束日期']}
                format="YYYY-MM"
                style={{width: '400px'}}
              />
            )}
          </FormItem>
        );
      case 'cascade':
        return (
          <FormItem key={item.id} label={item.label} {...formItemLayout}>
            {getFieldDecorator (item.name, {
              rules: item.rules,
            }) (
              <Cascader
                style={{width: 'calc(100% - 120px)'}}
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
                style={{width: '200px'}}
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
