import request from '@/utils/request'

export default {
    // 提交注册信息
    submitRegister(params) {
        return request({
            url: `/ucenterservice/member/userRegister`,
            method: 'post',
            data: params
        })
    },

    // 获取验证码
    getVerificationCode(phone) {
        return request({
            url: `/smsservice/sms/sendVerificationCode/${phone}`,
            method: 'get'
        })
    }
}