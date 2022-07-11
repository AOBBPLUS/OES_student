<template>
  <article class="col-7 fl">
    <div class="u-r-cont">
      <section>
        <!-- 表格 -->
        <el-form label-width="120px">
          <el-form-item label="昵称">
            <el-input v-model="memberInfo.nickname" />
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="memberInfo.sex" clearable placeholder="请选择">
              <!--
                数据类型一定要和取出的json中的一致，否则没法回填
                value使用动态绑定的值，性别由1 2代替
              -->
              <el-option :value="1" label="女" />
              <el-option :value="2" label="男" />
            </el-select>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input-number
              v-model="memberInfo.age"
              :min="0"
              controls-position="right"
            />
          </el-form-item>
          <!-- 头像 -->
          <el-form-item label="头像">
            <el-upload
              :show-file-list="true"
              :on-success="handleAvatarSuccess"
              :on-error="handleAvatarError"
              :before-upload="beforeAvatarUpload"
              class="avatar-uploader"
              action="http://localhost:8500/ossservice/oss/uploadAvatarFile"
            >
              <img v-if="memberInfo.avatar" :src="memberInfo.avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon" />
            </el-upload>
          </el-form-item>
          <el-form-item label="个性签名">
            <el-input v-model="memberInfo.sign" :rows="8" type="textarea" />
          </el-form-item>

          <el-form-item>
            <el-button
              :disabled="saveBtnDisabled"
              plain="true"
              type="primary"
              @click="save"
              >保存</el-button
            >
          </el-form-item>
        </el-form>
      </section>
    </div>
  </article>
</template>

<script>
import loginAPI from "@/api/login";
import cookie from "js-cookie";

export default {
  layout: "center",
  data() {
    return {
      token: "",
      memberInfo: {
        id: "",
        age: "",
        avatar: "",
        mobile: "",
        nickname: "",
        sex: "",
        sign: "",
      },
      saveBtnDisabled: false, //保存按钮是否禁用
    };
  },
  created() {
    var userStr = cookie.get("oes_ucenter");
    //userStr是字符串   需要转换为json对象
    if (userStr) {
      this.memberInfo = JSON.parse(userStr);
    }
    return;
  },

  methods: {
    save() {
      loginAPI.updateUserInfo(this.memberInfo).then((response) => {
        //修改成功
        //提示成功
        this.$message({
          type: "success",
          message: "修改成功！ 🧙‍♂️",
        });
        // 重新设置cookie
        // loginAPI.getUserInfo().then((response) => {
        //   this.memberInfo = response.data.memberInfo;
        //   cookie.set("oes_ucenter", JSON.stringify(this.memberInfo), {
        //     domain: "localhost",
        //   });
        // });
        // // 回显信息
        // this.showInfoFromCookie();
      });
    },

    // 头像
    // 文件上传成功
    handleAvatarSuccess(response) {
      if (response.success) {
        this.memberInfo.avatar = response.data.url;
        // 强制重新渲染
        this.$forceUpdate();
      } else {
        this.$message.error("上传失败! （非20000）");
      }
    },

    // 文件上传失败（http）
    handleAvatarError() {
      this.$message.error("上传失败! （http失败）");
    },

    // 上传校验
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt3M = file.size / 1024 / 1024 < 3;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt3M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt3M;
    },

    //从cookie中获取用户信息
    showInfoFromCookie() {
      //从cookie中获取用户信息
      var userStr = cookie.get("oes_ucenter");
      //userStr是字符串   需要转换为json对象
      if (userStr) {
        this.memberInfo = JSON.parse(userStr);
        return;
      }
      loginAPI.getUserInfo().then((response) => {
        // 重新设置cookie
        this.memberInfo = response.data.memberInfo;
        cookie.set("oes_ucenter", JSON.stringify(this.memberInfo), {
          domain: "localhost",
        });
      });
    },
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader img {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
