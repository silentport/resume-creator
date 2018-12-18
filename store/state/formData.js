export default {
    basic: {
        legend: '基础信息',
        id: 'basic',
        list: [{
                id: '1',
                name: 'name',
                label: '姓名',
                value: '555',
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
                // type: 'cascade',
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
                value: '65656',
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
    }],


    intern: [{
        legend: '实习经历-1',
        id: 1,
        list: [{

                id: '1',
                name: 'intern-company-1',
                label: '公司',
                value: '',
                placeholder: 'company',
                iconType: 'user',
                rules: [{
                    required: true,
                    message: 'Please input your company!',
                }]
            },
            {

                id: '2',
                name: 'position-1',
                label: '职位',
                value: '',
                placeholder: 'position',
                iconType: 'smile',
                rules: [{
                    required: true,
                    message: 'Please input your position!',
                }],

            }, {

                id: '3',
                name: 'internTime-1',
                label: '起止时间',
                value: '',
                type: 'datepicker',
                placeholder: 'duration',
                iconType: 'smile',
                rules: [{
                    required: true,
                    message: 'Please input your duration!',
                }],

            },
            {

                id: '4',
                name: 'description-1',
                label: '工作描述',
                value: '',
                type: 'area',
                placeholder: 'description',
                iconType: 'smile',
                rules: [{
                    required: true,
                    message: 'Please input your position!',
                }],

            }
        ]



    }],

    job: [{
        legend: '工作经历-1',
        id: 1,
        list: [{

                id: '1',
                name: 'intern-company-1',
                label: '公司',
                value: '',
                placeholder: 'company',
                iconType: 'user',
                rules: [{
                    required: true,
                    message: 'Please input your company!',
                }]
            },
            {

                id: '2',
                name: 'position-1',
                label: '职位',
                value: '',
                placeholder: 'position',
                iconType: 'smile',
                rules: [{
                    required: true,
                    message: 'Please input your position!',
                }],

            }, {

                id: '3',
                name: 'internTime-1',
                label: '起止时间',
                value: '',
                type: 'datepicker',
                placeholder: 'duration',
                iconType: 'smile',
                rules: [{
                    required: true,
                    message: 'Please input your duration!',
                }],

            },
            {

                id: '4',
                name: 'description-1',
                label: '工作描述',
                value: '',
                type: 'area',
                placeholder: '请描述工作内容',
                iconType: 'smile',
                rules: [{
                    required: true,
                    message: 'Please input your position!',
                }],

            }
        ]



    }],

    skill: [{
        legend: '个人技能-1',
        id: 1,
        list: [{

            id: '1',
            name: 'skill-1',
            label: '技能详情',
            value: '',
            type: 'area',
            placeholder: '请描述技能',
            iconType: 'user',
            rules: [{
                required: true,
                message: 'Please input your skill!',
            }]
        }, ]

    }],

    award: [{
        legend: '获奖情况-1',
        id: 1,
        list: [{
            id: '1',
            name: 'award-1',
            label: '获奖详情',
            value: '',
            type: 'area',
            placeholder: '请描述获奖信息',
            rules: [{
                required: true,
                message: 'Please input your award!',
            }]
        }, ]

    }],

    comment: {
        legend: '自我评价',
        id: 'comment',
        list: [{
            id: '1',
            name: 'introduce',
            label: '评价详情',
            value: '',
            type: 'area',
            placeholder: '请写下对自己的评价',
            rules: [{
                required: true,
                message: 'Please input your introduce!',
            }],

        }]
    },

}