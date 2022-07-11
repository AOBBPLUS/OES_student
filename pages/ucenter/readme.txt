该文件是用户中心文件，该目录下包含basic.vue和password.vue
使用了components目录下的center.vue方式进行布局和公共界面显示

basic.vue是用户基本信息修改界面，在这里你可以修改用户的昵称、性别、年龄、头像和签名

昵称对应后端的nickname
性别对应后端的sex
年龄对应后端的age
头像对应后端的avatar
签名对象后端的sign

头像和签名在注册时均为默认值即
avatar默认为数据库中的‘https://img.51miz.com/Element/00/88/08/84/72f298b9_E880884_d0f63115.png’
sign则默认为空

password.vue则专门用于修改用户密码
修改密码需要手机号验证,因此需要访问服务端的腾讯云SMS服务