<template>
    <div class='yimin activedet'>
        <h1 style="display:none!important;">移民活动，移民讲座，移民沙龙，唐仁国际</h1>
        <h></h>
        <div class='yiminMain'>
            <div class='ban' id='activeB'></div>
           <div class='yiminDetBox'>
               <div class='w1200 posiRle' v-for='item in itemInfoArr'>
                   <div class='yiminDTop shadow' style='overflow:visible;'>
                       <div class='fl lunbo'>
                           <!-- banner -->
                        <img :src='httpPath'/>
                       </div>
                       <div class='fl lunText'>
                           <div style="height:206px;">
                           <p class='tit'>{{item.title}}</p>
                           <p class='type'><span class=''>活动地点：{{item.address}}</span></p>
                           <p class='type' style='min-height:44px;'><span class=''>活动时间：{{subTime(item.startTime)}}-{{subTime(item.endTime)}}</span></p>
                           <!-- <p class='pric'>预估总费用&nbsp;&nbsp;<span>¥{{item.amountSum}}万</span>&nbsp;起</p> -->
                           </div>
                          <p class='yuyueP' style='position:relative;'>
                              <el-popover
                                placement="top-start"
                                width="0"
                                trigger="hover"
                                :disabled='erNoshow'
                                offset='-8'
                                transition='fade-in-linear' 
                                >
                                <span class='signMa' v-if='item.imgPath' >
                                  <p>微信扫码报名活动</p>
                                  <img  id="3c946c81979b46deb88f4341c2a6212a_baoming_imge" :src="er" />
                                </span>
                                <button slot="reference" class='yuyueBtn fl actSign' :disabled="!item.imgPath" v-if='btnName=="已结束"'>{{btnName}}</button>
                                <button slot="reference" class='yuyueBtn fl' :disabled="!item.imgPath" v-else @click="disClick()">{{btnName}}</button>
                            </el-popover>
                              
                              <span class='fl tel' v-if='actStatus==1'><img src='./img/appTel.png' v-if='item.telPhone'/>{{item.telPhone}}</span>
                         </p>
                       </div>
                       <div style='clear:both;'></div>
                   </div>
                   <div class='yiminDBottom shadow' style="min-height:700px;">
                       <ul class='qieUl maoUl'>
                           <p :class='className' @click="actNav(true,$event)"><span>活动介绍</span></p>
                           <p :class='classHui' v-if='actStatus==2' @click="actNav(false,$event)"><span>活动回顾</span></p>
                          
                       </ul>
                       <div id='Project_intr'>
                            <!-- 项目介绍 -->
                            <ul class='actD' v-if='actdShow' v-html="item.cont">
                              
                                 <div class='noData1' v-if="item.cont==''">
                                    <img src='./img/no1.png'/>
                                    <p>暂时还没有发布活动回顾～～</p>     
                                </div>
                            </ul>
                            <ul class='huigu' v-else='actdShow' v-html="item.retrospect">
                               
                            </ul>
                       </div>
                   </div>
                  
               </div>
           </div>
        </div>
        <sidebar></sidebar>
        <appointment></appointment>
        <f></f>
    </div>
</template>
<script>
import h from '@/components/header/header.vue'
import f from '@/components/footer/footer.vue'
import sidebar from '../../components/sidebar/sidebar.vue'
import appointment from '../../components/appointment/appointment.vue'
import axios from 'axios'
export default {
    name:'yimin',
    metaInfo: {
        title: '尊享活动，移民活动，移民讲座，移民沙龙_唐仁国际',
      meta: [{                 // set meta
        name: 'description',
        content: '唐仁国际是大唐财富旗下投资移民与家庭规划高端品牌，为客户提供尊享、私密、专业的海外规划服务。为有全球化需求的高净值人群提供安全、可靠的海外身份及财富管理解决方案。业务涵盖：希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，澳洲移民，欧洲移民，海外房产，海外教育等。移民去哪儿？来唐仁国际尊享专业移民顾问服务！'
      },{                 // set meta
        name: 'keyWords',
        content: '移民活动，移民讲座，移民沙龙，唐仁国际'
      }]
    },
    data:function(){
        return{
            
            bgList:['./img/hwImg2.png','./img/hwImg2.png'],
            id:'',//项目Id
            itemInfoArr:[],
            httpPath:'',
            className:'',//默认活动
            classHui:'',//默认回顾
            actStatus:'',//活动状态
            er:'',
            btnName:'',//按钮文字
            erNoshow:false,//显示二维码
            actdShow:true,//显示活动详情
            loading:this.$loading({
                lock: true,
                text: '精彩内容即将出现...',
                spinner: 'el-icon-loading loading',
                background:'rgba(0, 0, 0, 0.7)',
                }),
            }
    },
    components:{sidebar,appointment,f,h},
    methods:{
        subTime:function(str){
           return str.substr(5,2)+'月'+str.substr(8,2)+'日';
        },
        disClick:function(){
            //$('.el-popover').hide() 
            //return;
        },
        actNav:function(bool,event){
            var that=this;
            that.actdShow=bool;
            var el = event.currentTarget;
            $('.qieUl li').removeClass('active');
            el.className='active';
            
        },
        getInfo:function(id){
            var that=this;
            var obj={"ACT_ID":id,"CHANNEL":"1"}
            axios.post('/trpch/trcrm/activity/queryActInfo',obj)
            .then(res=>{
                console.log('请求成功')
                var data=res.data;
                //console.log(data);
                console.log(data.isSuccess)
                if(data.isSuccess==1){
                   var itemInfo=data.activityInfo;
                   that.itemInfoArr.push(itemInfo);
                   that.httpPath=itemInfo.httpPath;
                   that.actStatus=itemInfo.actStatus;
                   that.er='data:image/png;base64,'+itemInfo.imgPath;
                   //console.log(that.er)
                  console.log(that.actStatus+'==that.actStatus')
                    if(that.actStatus=='1'){
                        //'报名'
                        that.btnName='预约报名'
                        that.className='active'
                        that.erNoshow=false;//显示二维码
                       $('.signMa').show();
                    }else if(that.actStatus=='2'){
                        //回顾
                        that.btnName='已结束'
                        that.classHui='active'
                        that.erNoshow=true;//不显示二维码
                        that.actdShow=false;//默认显示
                    }
                     that.loading.close();
                    setTimeout(function(){
                        console.log('settim')
                       var detH=$('.posiRle').height()-250;
                       console.log(detH);
                       $('.yiminDetBox').height(detH);
                   },500)
                }     
            })
        }
    },
    created:function(){
        var that=this;
        $('.el-popover').hide();
        that.id=that.$route.query.id;
        if(!that.id==false){
           that.getInfo(that.id)//获取详情信息
        }
        
    }
}
 
</script>
<style>
    .actD,.huigu{
        padding:20px 30px;
        box-sizing: border-box;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    button.el-carousel__arrow{
        display: none;
    }
    .el-carousel__button{
        width:10px;
        height:10px;
        border-radius: 100%;
    }

    .signMa{
        display: block;
        /* position: absolute; */
        /* width:160px!important;
        height:185px!important; */
    }
    .signMa img{
        width:80%;
        display: block;
        margin:10px auto;
    }
   .signMa p{
       font-size:16px;
        font-weight:500;
        color:rgba(0,0,0,1);
        text-align: center;
        margin-top: 15px;
   }
    .activedet .tit{
        margin-bottom:31px;
         min-height:90px;
        -webkit-box-orient: vertical;
        white-space:normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        line-height: 45px;
        
    }
     .activedet .yuyueP{
        margin-top:42px;
    }
    #activeB{
        background-image: url(img/activebanner.jpg);
    }
</style>

