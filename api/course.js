import request from '@/utils/request'

export default {

    //后端获得分页查询课程列表的接口
    pageQueryCourseInfo(index, limit,queryCondition) {
        return request({
            url: `eduservice/courseFront/pageQueryCourseInfo/${index}/${limit}`,
            method: 'post',
            data : queryCondition
        })
    },

    // 查询课程信息
    getCourseInfoById(courseId) {
        return request({
            url: `eduservice/courseFront/getCourseInfo/${courseId}`,
            method: 'get',
        })
    },

    // 获取所有科目信息
    getAllSubject(){
        return request({
            url: "eduservice/subject/listSubjectInfo/",
            method: 'get'
        })
    }
}