import request from '@/utils/request'

export default {
    // 生成订单
    createOrder(courseId) {
        return request({
            url: `/orderservice/order/generateOrder/${courseId}`,
            method: 'post'
        })
    },


    // 根据订单id查询订单信息
    getOrder(orderId) {
        return request({
            url: `/orderservice/order/getOrderInfo/${orderId}`,
            method: 'get'
        })
    },

    // 生成二维码的方法
    createNative(orderNo) {
        return request({
            url: `/orderservice/paylog/generateOrCode/${orderNo}`,
            method: 'get'
        })
    },


    // 查询支付状态的方法
    queryOrderStatus(orderNo) {
        return request({
            url: `/orderservice/paylog/queryOrderState/${orderNo}`,
            method: 'get'
        })
    }
}
