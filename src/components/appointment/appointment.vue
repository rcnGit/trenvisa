<template>
    <div class='appoint'>
        <div class='appBg'>
            <el-dialog title="" :visible.sync="dialogVisible" width="30%" >
                <!-- :before-close="handleClose" -->
            <div class='appHead' v-show="ifNoSuc">   
                <span class='fl apptit'>唐仁国际</span>
                <span class='fr appTel'><img src='./appTel.png' style='width:20px;'/>010-52705440</span>
            </div>
            <div class='appBody' v-show="ifNoSuc">
                <h3>预约移民顾问服务</h3>
                <p style='font-size:16px;font-weight:400;color:rgba(51,51,51,1);text-align:Center;margin-bottom:50px;'>项目：{{itemName}}</p>
                     <el-form ref="appointForm" :model="appointForm" status-icon :rules="rules2"  label-width="80px">
                        <el-form-item label="" prop="name">
                            <el-input v-model="appointForm.name" placeholder="请输入您的姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="phone">
                            <el-input v-model="appointForm.phone" placeholder="请输入您的手机号"></el-input>
                        </el-form-item>
                    </el-form>
            </div>
            <div class='appBody sucBody' v-show="!ifNoSuc" >
                <img src='./apponitSuc.png'/>
                <p class='p1'>预约成功！</p>
                <p class='p2' style='font-size: 14px;margin: 36px auto 18px;'>我们的专家顾问将在第一时间和您联系，请保持通讯畅通</p>
            </div>
            <span slot="footer" class="dialog-footer">
                <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
                <el-button type="primary" @click="submitForm('appointForm')" :disabled="isdisabledbtn" class='btnHoverZ' v-show="ifNoSuc">立即预约</el-button>
                 <p class='p2' v-show="ifNoSuc" style="height:48px;background:#f4f4f4;line-height:48px;color:#666;margin-top: 19px;">我们的专家顾问将在第一时间和您联系，请保持通讯畅通</p>
                <el-button type="primary" class='btnHoverZ' @click="dialogVisible = false" v-show="!ifNoSuc">知道了</el-button>
            </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { isValidMobile, isValidName } from '../../../static/js/extends.js'
export default {
    name:'appoint',
    data:function(){
        var validPhone=(rule, value,callback)=>{
               //console.log(value);
                if (!value){
                //this.warnShow2= true
                callback(new Error('请输入电话号码'))
                }else  if (!isValidMobile(value)){
                callback(new Error('请输入正确的11位手机号码'))
                }else {
                callback()
                }
            }
            var validateName = (rule, value, callback) => {
                //console.log(value)
               
                if (value =='') {
                callback(new Error('请输入姓名'));
                }else if(isValidName(value)){
                    callback(new Error('请输入正确的姓名'));
                }else{
                callback();
                }
            }
        return{
            dialogVisible:false,
            ifNoSuc:true,
            itemName:'美国移民 EB-1A杰出人才',
            itemId:'583441e4a70d42ccaa77315ba957132d',
            appointForm:{
                phone:'',
                name:'',
            },
            isdisabledbtn:false,//可以提交
               rules2: {
                phone: [
                    { validator: validPhone, trigger: 'blur' }
                ],
                name: [
                    { validator: validateName, trigger: 'blur' }
                ]
            }
        }
    },
  
    methods:{
        handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      toShow:function(name,id,ifShow,ifNoSuc){
          let that = this;
          that.dialogVisible=ifShow;
          that.itemName=name;
          that.itemId=id;
          that.ifNoSuc=ifNoSuc;
      },
      submitForm(formName) {
             let that = this
            that.$refs[formName].validate((valid) => {
            if (valid) {
                this.submitlogin()
            }else{
                //console.log('error submit!!');
                return false;
            }
            });
      },
      submitlogin(){
        let that = this
        this.isdisabledbtn = true
        this.fullscreenLoading = true;
        var postData={
            USER_NAME: that.appointForm.name,
            APPOINT_ITEM: that.itemId,
            TEL_PHONE:that.appointForm.phone,
            CHANNEL:'1'
        }
        axios.post('/trpch/trcrm/apppointment/insertApporintItem',postData).then(response => {   
            that.isdisabledbtn = false
            //console.log(response.data);
            if(response.data.isSuccess==1){
               that.ifNoSuc=false;
            }
           
        }).catch(error => {
            console.log('error')
        });
      }
    },
    created:function(){
        var that=this;
        
    }
}
</script>
<style>
    .appBg .el-dialog__headerbtn{
        top: -6px!important;
        right: -23px!important;
    }
    .appBg .el-dialog__headerbtn .el-dialog__close{
        color:#fff;
    }
    .appBg .el-dialog__header{
        padding:0!important;
    }
    .appBg .el-dialog{
        width:400px!important;
        height:450px!important;
        box-sizing: border-box;
    }

    .apptit{
        font-size:22px;
        color:rgba(60,40,20,1)
    }
    .appTel{
        font-size:20px;
        color:rgba(60,40,20,1);
    }
    .appBg .el-dialog__body{
        padding:0!important;
    }


     .appBg .el-select{
        display: block;
    }
    .el-form-item{
        padding:0 30px;
        margin-bottom:20px;
    }
    .appBg  .el-form-item__content{
        margin-left:0!important;
    }
    .appBody h3{
        font-size:24px;
        font-family:MicrosoftYaHei;
        font-weight:bold;
        color:rgba(176,154,125,1);
        text-align: center;
        margin:30px 0 20px;
    }
    .appHead{
       padding:0 30px;
        background:rgba(176,154,125,1);
        height: 68px;
        line-height: 68px;
    }
    .appBg .el-dialog__body img{
        display: inline-block;
        vertical-align: -2px;
        margin-right: 10px;
     }
     .appBg .el-dialog__headerbtn{
         font-size: 20px;
     }
     .appBg .el-dialog__footer{
         text-align: center;
         margin-top: 0px;
          padding:10px 0;
     }
     .appBg .el-button{
         padding:12px 150px;
         background-color: #B09A7D!important;
        border-color: #B09A7D!important;
        outline: none;
       
     }
     .appBg .el-button:active,.appBg .el-button:hover{
         background-color: #B09A7D;
        border-color: #B09A7D;
        outline: none;  
     }
     .sucBody{
         text-align: center;
     }
     .sucBody img{
         width:90px;
         height:90px;
         display: block;
         margin:90px auto 70px;
     }
     .sucBody .p1{
         font-size:32px;
         color:rgba(176,154,125,1);
     }
     .sucBody .p2{
         font-size:16px;
        font-weight:400;
        color:rgba(102,102,102,1);
        margin:36px auto 60px;
     }
</style>

