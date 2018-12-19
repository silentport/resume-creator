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
      console.log (reader.result);
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
                action="http://localhost:3000/upload"
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
              <Select style={{width: 'calc(100% - 120px)'}}>
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
              <TextArea cols={100} rows={4} placeholder={item.placeholder} />
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
                format="YYYY-MM"
                style={{width: 'calc(100% - 120px)'}}
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
                style={{width: '100%'}}
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
