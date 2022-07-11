import request from '@/utils/request'

export default {
    // 首页获取所有的banner信息
    getAllBannerInfo() {
        return request({
            url: '/cmsservice/bannerFront/getAllBannerInfo',
            method: 'get'
        })
    }
}