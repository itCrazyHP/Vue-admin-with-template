import * as VeeValidate from 'vee-validate'
import rules from '@vee-validate/rules'
import yup from './yup'
    
Object.keys(rules).forEach(key=>{
    //@ts-ignore
    VeeValidate.defineRule(key, rules[key]);
})

const useFields=(fields:string[])=>{
    fields.forEach(field=>{
        VeeValidate.useField(field)
    })
}

const modules = {yup,...VeeValidate,useFields}
export default modules