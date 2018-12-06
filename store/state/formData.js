export default {
    basic: {
        legend: '基础信息',
        id: '1',
        list: [{
                id: '1-1',
                name: 'name',
                label: '姓名',
                placeholder: 'user',
                iconType: 'user',
                rules: [{
                    required: true,
                    message: 'Please input your name!',
                }],

            }, {
                id: '1-2',
                name: 'age',
                label: '年龄',
                placeholder: 'Age',
                iconType: 'smile',
                rules: [{
                    required: true,
                    message: 'Please input your Age!',
                }],

            }, {
                id: '1-3',
                name: 'email',
                label: '邮箱',
                placeholder: 'Email',
                iconType: 'mail',
                rules: [{
                    required: true,
                    message: 'Please input your Email!',
                }],

            },
            {
                id: '1-4',
                name: 'phone',
                label: '电话',
                placeholder: 'Phone',
                iconType: 'phone',
                rules: [{
                    required: true,
                    message: 'Please input your Phone!',
                }],

            },
            {
                id: '1-5',
                name: 'avator',
                label: '照片',
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
        id: '2',
        list: [{
            id: '2-1',
            name: 'school',
            label: '学校',
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
            id: '2-2',
            name: 'major',
            label: '专业',
            placeholder: 'major',
            iconType: 'smile',
            rules: [{
                required: true,
                message: 'Please input your major!',
            }],
        }, {
            id: '2-3',
            name: 'degree',
            label: '学历',
            type: 'select',
            placeholder: 'degree',
            iconType: 'mail',
            rules: [{
                required: true,
                message: 'Please input your degree!',
            }],

        }]
    }]
}