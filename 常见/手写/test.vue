<template>
  <div class="app-container">
    <el-form label-width="150px" :rules="rules">
      <h2>天天读加V配置</h2>
      <section>
        <div style="margin:10px 0">
          <span style="font-size:18px;color: red;">有vip订单：</span>
          <el-button type="text" @click="dialogVisible = true">图片示例</el-button>
        </div>
        <span>加V详情页：</span>
        <el-form-item label="页面标题*：" prop="title">
          <el-input v-model="pageInfo.title" style="width:300px" size="small" placeholder="最多输入40个字符" />
        </el-form-item>
        <el-form-item label="上传图片*：">
          <div class="info-box">
            <div class="info-box-item">
              <el-upload
                :action="picUrl"
                :limit="1"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :file-list="imageList"
                list-type="picture-card"
                accept=".jpg, .gif, .png"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <p>(支持JPG,PNG,GIF格式，2M以下)</p>
            </div>
            <div class="info-box-item">
              <el-upload
                :action="picUrl"
                :limit="1"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :file-list="imageList"
                list-type="picture-card"
                accept=".jpg, .gif, .png"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <p>(支持JPG,PNG,GIF格式，2M以下)</p>
            </div>
          </div>
        </el-form-item>
        <span>小程序H5页：</span>
        <el-form-item label="页面标题*：">
          <el-input v-model="pageInfo.title" style="width:300px" size="small" placeholder="最多输入40个字符" />
        </el-form-item>
        <el-form-item label="上传图片*：">
          <div class="info-box">
            <div class="info-box-item">
              <el-upload
                :action="picUrl"
                :limit="1"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :file-list="imageList"
                list-type="picture-card"
                accept=".jpg, .gif, .png"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <p>(支持JPG,PNG,GIF格式，2M以下)</p>
            </div>
          </div>
        </el-form-item>
      </section>
      <section>
        <div style="margin:10px 0">
          <span style="font-size:18px;color: red;">无vip订单：</span>
          <el-button type="text" @click="dialogVisible = true">图片示例</el-button>
        </div>
        <el-form-item label="配置商品id*：" prop="title">
          <el-input style="width:300px" size="small" />
        </el-form-item>
        <p>礼物领取页*：</p>
        <el-form-item label="上传图片*：">
          <div class="info-box">
            <div class="info-box-item">
              <el-upload
                :action="picUrl"
                :limit="1"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :file-list="imageList"
                list-type="picture-card"
                accept=".jpg, .gif, .png"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <p>(支持JPG,PNG,GIF格式，2M以下)</p>
            </div>
          </div>
        </el-form-item>
        <span>加V详情页：</span>
        <el-form-item label="页面标题*：" prop="title">
          <el-input v-model="pageInfo.title" style="width:300px" size="small" placeholder="最多输入40个字符" />
        </el-form-item>
        <el-form-item label="上传图片*：">
          <div class="info-box">
            <div class="info-box-item">
              <el-upload
                :action="picUrl"
                :limit="1"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :file-list="imageList"
                list-type="picture-card"
                accept=".jpg, .gif, .png"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <p>(支持JPG,PNG,GIF格式，2M以下)</p>
            </div>
            <div class="info-box-item">
              <el-upload
                :action="picUrl"
                :limit="1"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :file-list="imageList"
                list-type="picture-card"
                accept=".jpg, .gif, .png"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <p>(支持JPG,PNG,GIF格式，2M以下)</p>
            </div>
          </div>
        </el-form-item>
        <span>小程序H5页：</span>
        <el-form-item label="页面标题*：">
          <el-input v-model="pageInfo.title" style="width:300px" size="small" placeholder="最多输入40个字符" />
        </el-form-item>
        <el-form-item label="上传图片*：">
          <div class="info-box">
            <div class="info-box-item">
              <el-upload
                :action="picUrl"
                :limit="1"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :file-list="imageList"
                list-type="picture-card"
                accept=".jpg, .gif, .png"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <p>(支持JPG,PNG,GIF格式，2M以下)</p>
            </div>
          </div>
        </el-form-item>
      </section>
      <section>
        <el-dialog title="示例图片" :visible.sync="dialogVisible" width="50%">
          <el-image
            style="width: 100%;height: 80%;"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="contain"
          ></el-image>
        </el-dialog>
      </section>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" style="width:100px">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getAddVConfigure, saveAddVConfigure } from '@/api/addV'
export default {
  data() {
    return {
      dialogImageUrl: '',
      formData: {
        vip: {},
        unvip: {}
      },
      pageInfo: {
        title: ''
      },
      picUrl: '',
      imageList: [],
      dialogVisible: false,
      rules: {
        title: [
          { require: true, message: '请输入页面标题', trigger: 'blur' },
          { min: 0, max: 40, message: '请注意文本字数', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    let promise = getAddVConfigure()
    promise.then(res => {
      console.log(res)
    })
    let promsie1 = saveAddVConfigure()
    promsie1.then(res => {
      console.log(res)
    })
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleSuccess(file) {
      console.log(file)
    },
    submitUpload() {
      this.$refs.upload.submit()
    }
  }
}
</script>

<style>
.info-box-item {
  float: left;
  margin: 0 20px;
}
</style>
