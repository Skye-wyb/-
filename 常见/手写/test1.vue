<template>
    <div class="app-container">
        <el-form label-width="110px" :rules="rules" :model="formData" ref="form">
            <h2>天天读加V配置</h2>
            <section>
                <div style="margin:10px 0">
                    <span style="font-size:18px;color: red;">有vip订单：</span>
                    <el-button type="text" @click="dialogVisible = true">图片示例</el-button>
                </div>
                <span>加V详情页：</span>
                <el-form-item label="页面标题：" prop="vipAppTitle">
                    <el-input v-model="formData.vipAppTitle" style="width:300px" size="small" placeholder="最多输入40个字符" />
                </el-form-item>
                <el-form-item label="上传图片：" prop="vipAppImage">
                    <div class="info-box">
                        <div class="info-box-item">
                            <el-upload :action="picUrl" :limit="1" :on-remove="handleRemove" :on-change="handleChange"
                                :on-success="handleSuccess" :file-list="imageList" list-type="picture-card"
                                accept=".jpg, .gif, .png">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <p>(支持JPG,PNG,GIF格式，2M以下)</p>
                        </div>
                        <div class="info-box-item">
                            <el-upload :action="picUrl" :limit="1" :on-remove="handleRemove" :on-change="handleChange"
                                :on-success="handleSuccess" :file-list="imageList" list-type="picture-card"
                                accept=".jpg, .gif, .png">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <p>(支持JPG,PNG,GIF格式，2M以下)</p>
                        </div>
                    </div>
                </el-form-item>
                <span>小程序H5页：</span>
                <el-form-item label="页面标题：" prop="vipMiniAppTitle">
                    <el-input v-model="formData.vipMiniAppTitle" style="width:300px" size="small"
                        placeholder="最多输入40个字符" />
                </el-form-item>
                <el-form-item label="上传图片：" prop="vipMiniAppImage">
                    <div class="info-box">
                        <div class="info-box-item">
                            <el-upload :action="picUrl" :limit="1" :on-remove="handleRemove" :on-change="handleChange"
                                :on-success="handleSuccess" :file-list="imageList" list-type="picture-card"
                                accept=".jpg, .gif, .png">
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
                <el-form-item label="配置商品ID：" prop="unvipPopGoodsId">
                    <el-input v-model="formData.unvipPopGoodsId" style="width:300px" size="small"
                        placeholder="请配置商品ID" />
                </el-form-item>
                <p>礼物领取页*：</p>
                <el-form-item label="上传图片：" prop="unvipPopImage">
                    <div class="info-box">
                        <div class="info-box-item">
                            <el-upload :action="picUrl" :limit="1" :on-remove="handleRemove" :on-change="handleChange"
                                :on-success="handleSuccess" :file-list="imageList" list-type="picture-card"
                                accept=".jpg, .gif, .png">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <p>(支持JPG,PNG,GIF格式，2M以下)</p>
                        </div>
                    </div>
                </el-form-item>
                <span>加V详情页：</span>
                <el-form-item label="页面标题：" prop="unvipAppTitle">
                    <el-input v-model="formData.unvipAppTitle" style="width:300px" size="small"
                        placeholder="最多输入40个字符" />
                </el-form-item>
                <el-form-item label="上传图片：" prop="unvipAppImage">
                    <div class="info-box">
                        <div class="info-box-item">
                            <el-upload :action="picUrl" :limit="1" :on-remove="handleRemove" :on-change="handleChange"
                                :on-success="handleSuccess" :file-list="imageList" list-type="picture-card"
                                accept=".jpg, .gif, .png">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <p>(支持JPG,PNG,GIF格式，2M以下)</p>
                        </div>
                        <div class="info-box-item">
                            <el-upload :action="picUrl" :limit="1" :on-remove="handleRemove" :on-change="handleChange"
                                :on-success="handleSuccess" :file-list="imageList" list-type="picture-card"
                                accept=".jpg, .gif, .png">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <p>(支持JPG,PNG,GIF格式，2M以下)</p>
                        </div>
                    </div>
                </el-form-item>
                <span>小程序H5页：</span>
                <el-form-item label="页面标题：" prop="unvipMiniAppTitle">
                    <el-input v-model="formData.unvipMiniAppTitle" style="width:300px" size="small"
                        placeholder="最多输入40个字符" />
                </el-form-item>
                <el-form-item label="上传图片：" prop="unvipMiniAppImage">
                    <div class="info-box">
                        <div class="info-box-item">
                            <el-upload :action="picUrl" :limit="1" :on-remove="handleRemove" :on-change="handleChange"
                                :on-success="handleSuccess" :file-list="imageList" list-type="picture-card"
                                accept=".jpg, .gif, .png">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <p>(支持JPG,PNG,GIF格式，2M以下)</p>
                        </div>
                    </div>
                </el-form-item>
            </section>
            <section>
                <el-dialog title="示例图片" :visible.sync="dialogVisible" width="50%">
                    <el-image style="width: 100%;height: 80%;"
                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="contain">
                    </el-image>
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
    data () {
        return {
            dialogImageUrl: '',
            formData: {
                vipAppTitle: '',
                vipAppImage: '',
                vipAppButtonImage: '',
                vipMiniAppTitle: '',
                vipMiniAppImage: '',
                unvipPopGoodsId: '',
                unvipPopImage: '',
                unvipAppTitle: '',
                unvipAppImage: '',
                unvipAppButtonImage: '',
                unvipMiniAppTitle: '',
                unvipMiniAppImage: ''
            },
            picUrl: '',
            dialogVisible: false,
            rules: {
                vipAppTitle: [
                    { required: true, message: '请输入页面标题', trigger: 'blur' },
                    {
                        validator: (rules, value, callback) => {
                            if (value.length > 40) {
                                callback(new Error('最多可填写40个字符'))
                            }
                        },
                        trigger: 'blur'
                    }
                ],
                vipMiniAppTitle: [
                    { required: true, message: '请输入页面标题', trigger: 'blur' },
                    {
                        validator: (rules, value, callback) => {
                            if (value.length > 40) {
                                callback(new Error('最多可填写40个字符'))
                            }
                        },
                        trigger: 'blur'
                    }
                ],
                unvipPopGoodsId: [{ required: true, message: '请输入商品ID', trigger: 'blur' }],
                unvipAppTitle: [
                    { required: true, message: '请输入页面标题', trigger: 'blur' },
                    {
                        validator: (rules, value, callback) => {
                            if (value.length > 40) {
                                callback(new Error('最多可填写40个字符'))
                            }
                        },
                        trigger: 'blur'
                    }
                ],
                unvipMiniAppTitle: [
                    { required: true, message: '请输入页面标题', trigger: 'blur' },
                    {
                        validator: (rules, value, callback) => {
                            if (value.length > 40) {
                                callback(new Error('最多可填写40个字符'))
                            }
                        },
                        trigger: 'blur'
                    }
                ],
                vipAppImage: [
                    {
                        required: true,
                        message: '请上传图片',
                        trigger: 'change'
                    }
                ]
            }
        }
    },
    mounted () {
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
        handleRemove (file, fileList) {
            console.log(file, fileList)
        },
        handlePictureCardPreview (file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        handleSuccess (file) {
            console.log(file)
        },
        submitUpload () {
            this.$refs.upload.submit()
        },
        handleChange (uploadImage, imageList) {
            this.formData.vipAppImage = uploadImage
            if (imageList.length !== 0) {
                this.$refs.form.validateField('vipAppImage')
            }
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
