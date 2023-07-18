import * as yup from 'yup'

yup.setLocale({
    mixed:{
        required:'${label}不能为空'
    },
    string:{
        email:'邮箱格式错误',
        
    }
})

export default yup