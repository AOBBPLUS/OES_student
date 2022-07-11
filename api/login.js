import request from '@/utils/request'

export default {
    //用户登录
    submitLogin(userForm) {
        return request({
            url: '/ucenterservice/member/userLogin',
            method: 'post',
            data: userForm
        })
    },

    // 根据token获取用户信息
    getUserInfo() {
        return request({
            url: '/ucenterservice/member/getUserInfo',
            method: 'get'
        })
    },

    // 微信扫码
    wxScan() {
        return request({
            url: '/api/ucenter/wx/userLogin',
            method: 'get'
        })
    },

    // 修改用户信息
    updateUserInfo(userInfo) {
        return request({
            url: '/ucenterservice/member/updateUserInfo',
            method: 'post',
            data: userInfo
        })
    },

    // 修改用户密码
    updatePassword(passwordVO) {
        return request({
            url: 'ucenterservice/member/updatePassword',
            method: 'post',
            data: passwordVO
        })
    }
}