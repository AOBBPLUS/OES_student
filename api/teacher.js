import request from '@/utils/request'

export default {
    // 获得讲师列表的接口
    pageQueryTeacherInfo(index, limit) {
        return request({
            url: `/eduservice/teacherFront/pageQueryTeacherInfo/${index}/${limit}`,
            method: 'get'
        })
    },

    // 讲师详情
    getTeacherInfo(teacherId) {
        return request({
            url: `/eduservice/teacherFront/getTeacherInfo/${teacherId}`,
            method: 'get'
        })
    }
}