export default {
    basic: {
        legend: '基础信息',
        id: 'basic',
        list: [{
                id: '1',
                name: 'name',
                label: '姓名',
                value: '',
                placeholder: 'user',
                iconType: 'user',
                rules: [{
                    required: true,
                    message: 'Please input your name!',
                }],

            }, {
                id: '2',
                name: 'age',
                label: '年龄',
                value: '',
                placeholder: 'Age',
                iconType: 'smile',
                rules: [{
                    required: true,
                    message: 'Please input your Age!',
                }],

            }, {
                id: '3',
                name: 'email',
                label: '邮箱',
                value: '',
                placeholder: 'Email',
                iconType: 'mail',
                rules: [{
                    required: true,
                    message: 'Please input your Email!',
                }],

            },
            {
                id: '4',
                name: 'phone',
                label: '电话',
                value: '',
                placeholder: 'Phone',
                iconType: 'phone',
                rules: [{
                    required: true,
                    message: 'Please input your Phone!',
                }],

            },
            {
                id: '5',
                name: 'avator',
                label: '照片',
                value: '',
                placeholder: 'photo',
                iconType: 'phone',
                type: 'upload',
                rules: [{
                    // required: true,
                    message: 'Please upload photo!',
                }],

            },
        ]
    },

    education: [{
        legend: '教育经历-1',
        id: '1',
        list: [{
                id: '1',
                name: 'school-1',
                label: '学校',
                value: '',
                placeholder: 'school',
                type: 'cascade',
                iconType: 'user',
                rules: [{
                    required: true,
                    message: 'Please input your school!',
                }],
                options: [{
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [{
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [{
                            value: 'xihu',
                            label: 'West Lake',
                        }],
                    }],
                }, {
                    value: 'jiangsu',
                    label: 'Jiangsu',
                    children: [{
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [{
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        }],
                    }],
                }]

            }, {
                id: '2',
                name: 'major-1',
                label: '专业',
                value: '',
                placeholder: 'major',
                iconType: 'smile',
                rules: [{
                    required: true,
                    message: 'Please input your major!',
                }],
            },
            {
                id: '3',
                name: 'time-1',
                label: '起止时间',
                value: '',
                type: 'datepicker',
                placeholder: 'duration',
                iconType: 'smile',
                rules: [{
                    required: true,
                    message: 'Please input your duration!',
                }],
            }, {
                id: '4',
                name: 'degree-1',
                label: '学历',
                default: 'master',
                value: 'master',
                type: 'select',
                placeholder: 'degree',
                iconType: 'mail',
                rules: [{
                    required: true,
                    message: 'Please input your degree!',
                }],

            }
        ]
    }]
}