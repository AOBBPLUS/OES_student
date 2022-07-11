该文件夹是页面主代码
pages根目录下的index.vue是主页面代码，主要有着主页面中的banner（幻灯片）部分，热门课程、热门教师部分，使用了api/index.js,api/banner.js,
pages根目录下的login.vue是登录页面的代码，包含的登录所需要的输入框以及组件，使用了api/login.js
pages根目录下的register.vue是注册页面的代码，包含了注册所需要的输入框以及组件，使用了api/register.js 

course目录下包含了课程主页面（index.vue）和课程详细页面(_id.vue)
该主页面（index.vue）主要包含了课程检索和根据条件排序的功能，并且可以通过该页面进入课程详细页面。使用了api/course.js
_id.vue是课程详细页面，主要内容是对课程的详细介绍、进入课程学习的选项、购买课程项以及课程评论内容，使用了api/course.js,api/comment,api/order.js,

teacher目录下包含了教师主页面（index.vue）和教师详细页面（_id.vue）
该主页面(index.vue)主要包含了教师列表内容，并且可以通过该页面进入教师详细页面。使用了api/teacher.js
_id.vue是教师详细页面，主要内容是对教师的详细介绍，以及该教师的课程内容，使用了api/teacher.js

orders目录下包含了_oid.vue是与课程购买订单相关的页面，包含了订单信息，使用了api/order.js

pay目录下包含了_pid.vue是和支付相关的页面，主要有支付所需要的二维码，使用了api/order.js

player目录下包含了_vid.vue是和视频播放相关的页面，主要有视频渲染的相关功能，使用了api/vod.js

ucenter目录下包含了basic.vue和password.vue，这是修改用户信息的界面，使用了/api/login.js和cookie.js