<template>
    <div class='footer' style='position: relative;top: -70px;background: #25242a;'>
        <!-- 底部预约 -->
        <div class="footYuYue">
            <p>全方位定制专属移民规划，资深顾问一对一全程服务</p>
            <div class='inputBox'>
                
                <el-form ref="appointForm" :model="appointForm" status-icon :rules="rules2" label-width="80px">
                    <el-form-item label="" prop="countryId">
                        <el-select v-model="appointForm.countryId" placeholder="意向国家">
                              <el-option v-for='item in countryList' :label="item.label" :value="item.value"></el-option> 
                        </el-select>
                    </el-form-item>
                    <el-form-item label="" prop="name">
                        <el-input v-model="appointForm.name" placeholder="输入您的姓名" maxlength="20"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="phone">
                        <el-input v-model="appointForm.phone" placeholder="输入您的手机号" maxlength="11"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <!-- <button class='btnHoverZ' @click="submitForm('appointForm')" :disabled="isdisabledbtn" type="primary">立即预约</button> -->
                         <el-button type="primary" class='btnHoverZ' @click="submitForm('appointForm')" :disabled="isdisabledbtn">立即预约</el-button> 
                    </el-form-item>
                </el-form>
            
                
            </div>
        </div>
        <!-- 底部预约结束 -->

       <!--footer-->
        <div class="f-copyright" style="position: relative; top: 0px;height:175px;">
            <div class="grid-1200 footerHolder">
                <div class="footer-nav">
                    <p style='margin-bottom:34px;margin-top: 45px;'><span>全国服务热线：010-53520719</span><a><button class="zhiCustomBtn" style='position: static;width:83px;height:19px;background:#25242a!important;color:#fff!important;margin-left:30px;'><img src='./img/kefufoot.png' style='vertical-align: -4px;margin-right:8px;'/><span>在线客服</span></button></a><span style='margin:0 10px;'>|</span><a href='mailto:vip@datangwealth.com'><img src='./img/emailfoot.png' style='vertical-align: -2px;margin-right:8px;margin-left: 5px;'/><span>客服邮箱</span></a></p>
                    <p>
                        <a @click="openhref('about')">关于唐仁国际</a><span class="footer-nav-cut">|</span>
                        <a href="//www.datangwealth.com/" target="_blank" >关于大唐财富</a><span class="footer-nav-cut">|</span>
                        <a @click="openhref('contact')">联系我们</a>
                    </p>
                    <p style='font-size:12px;'>
                       唐仁国际咨询 （北京） 有限公司 版权所有<span class="footer-nav-cut"></span>Copyright © 2016-2017 XXX .All Rights Reserved 
                    </p>
                </div>
                <div class="footer-contact">
                    <div class='fl' style='margin-right:65px;'>
                        <img src='../../../static/img/tg.png' style="width:154px;height:154px;margin-bottom:10px;"/>
                        <p style="text-align:center;">大唐财富APP</p>
                    </div>
                    <div class='fl'>
                         <img src='../../../static/img/wx.png' style="width:154px;height:154px;margin-bottom:10px;"/>
                        <p style="text-align:center;">唐仁国际公众号</p>
                    </div>
                </div>
            </div>
        </div>
        <!--footer end-->
        <appointment ref='c1'></appointment>
    </div>
</template>
<script>
import axios from 'axios'
import { isValidMobile, isValidName } from '../../../static/js/extends.js'
import appointment from '../../components/appointment/appointment.vue'
export default {
    name:'foot',
    data:function(){
            var validPhone=(rule, value,callback)=>{
                if (!value){
                //this.warnShow2= true
                callback(new Error('请输入您的手机号'))
                }else  if (!isValidMobile(value)){
                callback(new Error('手机号需为11位数字'))
                }else {
                callback()
                }
            }
            var validcontry=(rule, value,callback)=>{
                if (!value){
                    callback(new Error('请选择意向国家'))
                }
                else {
                    callback()
                }
            }
            var validateName = (rule, value, callback) => {
                if (value =='') {
                callback(new Error('请输入您的真实姓名'));
                }else if(isValidName(value)){
                    callback(new Error('姓名需为中文字符'));
                }else{
                callback();
                }
            }
        return{
            
            appointForm:{
                phone:'',
                name:'',
                countryId:'',
            },
             countryList:[{
                 label:'中国',
                 value:'123',
             }],
            isdisabledbtn:false,//可以提交
            rules2: {
                countryId: [
                    { validator: validcontry, trigger: 'blur' }
                ],
                phone: [
                    { validator: validPhone, trigger: 'blur' }
                ],
                name: [
                    { validator: validateName, trigger: 'blur' }
                ]
            }

        }
        
    },
    components:{appointment},
    methods:{
        getCountry:function(){
            var that=this;
            var obj={"TYPE":"TR_NATIONALITY","VALUE":""}
            //var obj={"BEGIN_NUM":"1","CHANNEL":"1","END_NUM":"","TYPE":"1"}
            axios.post('/trpch/trcrm/dict/querydictList',obj)
            .then(res=>{
                var data=res.data;
                if(data.isSuccess==1){
                    that.countryList=data.dictList;
                    //console.log('=====');
                    //console.log(that.countryList);
                }     
            })
        },
        appoint:function(){//预约

        },
        submitForm(formName) {
             let that = this
            that.$refs[formName].validate((valid) => {
            if (valid) {
                this.submitlogin()
            }else{
                console.log('error submit!!');
                return false;
            }
            });
      },
       toAppont:function(){
            var that=this;
            that.$refs.c1.toShow('','',true,false);
        },
      submitlogin(){
        let that = this
        this.isdisabledbtn = true
        this.fullscreenLoading = true;
        var postData={
            USER_NAME: that.appointForm.name,
            NATION: that.appointForm.countryId,
            TEL_PHONE:that.appointForm.phone,
            CHANNEL:'1'
        }
    //     let postData = qs.stringify({
    //       phone: that.appointForm.name,
    //       loginPwd: that.appointForm.countryId,
    //       agentCom:that.appointForm.phone,
    //   })
        that.appointForm.name=''
        that.appointForm.phone=''
        that.appointForm.countryId=''
        axios.post('/trpch/trcrm/apppointment/insertApporint',postData).then(response => {   
            that.isdisabledbtn = false
            //console.log(response.data);
            if(response.data.isSuccess==1){
                that.toAppont();
            }
            
           
        }).catch(error => {
            console.log('error')
        });
      },
      openhref:function(str){
          var that=this;
          window.location=that.Host+str;
        //  var navtitle = str
        //    that.$router.push({
        //     path:'/'+navtitle,
        //     name:navtitle,
        //     query:{  
        //         name: ''
        //      }
        //     })
      }
    },
    created:function(){
         var that=this;
         that.getCountry();
    }
}
</script>
<style>
.footer-nav,.footer-nav a,.footer-contact{
    font-size:14px;
    font-family:MicrosoftYaHei;
    color:#fff!important;
}
.footer-nav .footer-nav-cut{
    color:#fff;
}
.el-select-dropdown__wrap.el-scrollbar__wrap{
    margin-bottom:0!important;
}
.footYuYue .el-select-dropdown{
        min-width: 219px!important;
        left: 355px!important;
}
</style>

