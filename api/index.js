import request from '@/utils/request'
export default {
    //查询热门课程和名师
    getHotTeacherAndHotCourse() {
        return request({
            url: '/eduservice/indexFront/index',
            method: 'get'
        })
    }
}