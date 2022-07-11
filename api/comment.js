import request from '@/utils/request'

export default {
    // 获取课程列表
    pageQueryCommentInfo(courseId, index, limit,) {
        return request({
            url: `/eduservice/commentFront/pageQueryCommentInfo/${courseId}/${index}/${limit}`,
            method: 'get',
        })
    },
    // 添加评论
    addComment(comment) {
        return request({
            url: '/eduservice/commentFront/addComment',
            method: 'post',
            data: comment
        })
    }
}