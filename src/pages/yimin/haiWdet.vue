<template>
    <div class='yimin'>
        <h1 style="display:none!important;">{{metaItemName}}，海外房产，海外房产公司，海外置业，国外购房</h1>

        <div class='cover' v-show="vCover" @click="closeCover()">
             <el-carousel arrow="always" loop='false' >
                <el-carousel-item  v-for='b in buildlist'>
                    <img :src='b.httpPath' />
                </el-carousel-item>
            </el-carousel>
           
        </div>

        <h></h>
        <div class='yiminMain'>
            <div class='ban' id='haiWB'></div>
           <div class='yiminDetBox'>
               <div class='w1200 posiRle' v-for='item in itemInfoArr'>
                   <div class='yiminDTop shadow'>
                       <div class='fl lunbo'>
                           <!-- banner -->
                          <el-carousel :interval="5000" arrow="always" v-if='fileList.length>1'>
                                <el-carousel-item  v-for='b in fileList'>
                                 <img :src='b.filePath'/>
                                </el-carousel-item>
                            </el-carousel>
                          <img :src='b.filePath' v-for='(b,index) in fileList' v-if='fileList.length==1'/>
                       </div>
                       <div class='fl lunText'>
                           <div style='height:252px;'> 
                           <p class='tit'>{{item.itemTitle}}</p>
                           <p class='intr' style='margin-bottom: 16px;'>{{item.lightspot}}</p>
                          <p class='type'>
                              <span class='fl' v-if='!item.returnMaxRate==false'>年均租金回报：{{item.returnRate}}-{{item.returnMaxRate}}%</span>
                               <span class='fl' v-else>年均租金回报：{{item.returnRate}}%</span>
                              <span class='fr'>首付比例：{{item.paymentRate}}%</span>
                         </p>
                          <p class='type'>
                              <span class='fl' v-if='!item.unitMaxCost==false'>单位价格：{{item.unitCost}}-{{item.unitMaxCost}}万元／平方米</span>
                              <span class='fl' v-else>单位价格：{{item.unitCost}}万元／平方米</span>
                              <span class='fr' v-if='item.structurMaxArea'>总面积：{{item.structurArea}}-{{item.structurMaxArea}}平方米</span>
                              <span class='fr' v-else>总面积：{{item.structurArea}}平方米</span>
                        </p>
                          <p class='pric' style='margin-bottom:14px;'  v-if='!item.amountMaxSum' >房产总价&nbsp;&nbsp;<span>¥{{item.amountSum}}万<i>&nbsp;</i></span><span style='font-size:14px;color:#666;margin-left:21px;font-weight:100;'><img src='./img/ditu.png' style='vertical-align: -2px;'/>&nbsp;&nbsp;{{item.nation}}&nbsp;·&nbsp;{{item.cityName}}</span></p>
                          <p class='pric' style='margin-bottom:14px;' v-else>房产总价&nbsp;&nbsp;<span>¥{{item.amountSum}}-{{item.amountMaxSum}}万<i>&nbsp;</i></span><span style='font-size:14px;color:#666;margin-left:21px;font-weight:100;'><img src='./img/ditu.png' style='vertical-align: -2px;'/>&nbsp;&nbsp;{{item.nation}}&nbsp;·&nbsp;{{item.cityName}}</span></p>
                          
                          <p style='font-size:14px;font-weight:400;color:rgba(102,102,102,1);margin-bottom:19px;margin-top: 14px;min-height: 19px;'>{{item.foreignCurrency}}</p>
                          </div> 
                          <p class='yuyueP'><span class='yuyueBtn fl btnHoverZ' @click='toAppont()'>马上预约</span><span class='fl tel'><img src='./img/appTel.png'/>010-53520719</span></p>
                       </div>
                   </div>
                     <div style='clear:both;'></div>
                   <div class='yiminDBottom shadow'>
                       <ul class='maoUl'>
                          <a><li class='active' id='nav1' mao='fangyuan'><span>房源详情</span></li></a>
                           <a><li class='' id='nav2' mao='huxing'><span>户型展示</span></li></a>
                           <a><li class='' id='nav3' mao='zhoubian'><span>周边设施</span></li></a>
                           <a><li class='' id='nav4' mao='goufang'><span>购房流程</span></li></a>
                           <a v-if='itdFileNum>0'><li class='' id='nav5' mao='file' style="position:relative;"><span>项目文档</span><i class='fileDtishi'>下载</i></li></a>
                           <span class='yuyueBtn fr btnHoverZ' @click='toAppont()'>马上预约</span>
                       </ul>
                       <div id='Project_intr' style='padding:30px;box-sizing:border-box;'>
                            <!-- 项目介绍 -->
                             <span id='fangyuan' style='position:relative;top:-270px;opacity:0;font-size:10px;' class='nav1'>1</span>
                            <ul class='zidu'>
                                <div style='clear:both;'></div>
                                <li>
                                    <div class='fl leiH leiHl'><span class='nameH'>物业类型</span><span class='nameT'>{{item.realEstate}}</span></div>
                                    <div class='fl leiH leiHr'><span class='nameH'>楼盘地址</span><span class='nameT'>{{item.adress}}</span></div>
                                </li>
                                <div style="clear:both"></div>
                                 <li>
                                    <div class='fl leiH leiHl'><span class='nameH'>产权说明</span><span class='nameT'>{{item.equityDeclare}}</span></div>
                                    <div class='fl leiH leiHr'><span class='nameH'>交付标准</span><span class='nameT'>{{item.payNorm}}</span></div>
                                </li>
                                <div style="clear:both"></div>
                                 <li>
                                    <div class='fl leiH leiHl'><span class='nameH'>开发商</span><span class='nameT'>{{item.developers}}</span></div>
                                    <div class='fl leiH leiHr'><span class='nameH'>交付时间</span><span class='nameT'>{{subTime(item.payDate)}}</span></div>
                                </li>
                                <div style="clear:both"></div>
                                <li>
                                    <div class='fl leiH leiHl' style='width:100%;'><span class='nameH' style='width:8%;'>可选户型</span><span class='nameT' v-html='item.hxDeclare'></span></div>
                                </li>
                                <div style="clear:both"></div>
                            </ul>
                             <p  v-html='item.other'></p>
                             <!-- style='color:#333;margin-top:15px;line-height:26px;' -->
                            <!-- <div class='nor' v-html='item.other'></div> -->
                       </div>
                   </div>
                   <div  class='shadow' >
                            <!-- 申请条件／流程 -->
                            <span id='huxing' style='position:relative;top:-120px;opacity:0;font-size:10px;' class='nav2'>1</span>
                            <ul class='detailUl'>
                                <li class='fenLi' style='border:none;'>
                                    <p class='tit'>户型展示</p>
                                     <ul class='huxUl'>
                                         <li class='huLi' v-for='(z,index) in buildlist' v-show='index==0'>
                                             <div class='fl houseImg'>
                                                 <img :src='z.httpPath' width='100%' height='100%'/>
                                             </div>
                                             <div class='fl houseMsg'>
                                                 <p class='tit' v-html="z.name"></p>
                                                 <!-- <p class='maiji'>{{item.structurArea}}</p> -->
                                                 <p class='totalP'>总价 <span class='pric'>￥{{z.amount}}万</span>起<span class='check fr btnHoverZ' @click='toBigImg(z.httpPath)'>查看大图</span></p>
                                             </div>
                                             <div style='clear:both;'></div>
                                         </li>
                                     </ul>
                                </li>
                            </ul>
                    </div>
                    <div  class='shadow' >
                        <!-- 费用详情 -->
                        <span id='zhoubian' style='position:relative;top:-120px;opacity:0;font-size:10px;' class='nav3'>1</span>
                        <ul class='detailUl'>
                            <li class='fenLi'>
                                <p class='tit'>周边设施</p>
                                <div v-html='item.circunDeclare' class=''></div>
                            </li>
                        </ul>
                    </div>
                    <div  class='shadow' >
                        <!-- 费用详情 -->
                         <span id='goufang' style='position:relative;top:-120px;opacity:0;font-size:10px;' class='nav4'>1</span>
                        <ul class='detailUl'>
                            <li class='fenLi'>
                                <p class='tit'>购房流程</p>
                                <div v-html='item.gfDeclare' class=''></div>
                            </li>
                        </ul>
                    </div>
                    <div id='' class='shadow' v-if='itdFileNum>0'>
                        <!-- 项目文档 -->
                        <span id='file' style='position:relative;top:-120px;opacity: 0;font-size:10px;' class='nav5'>1</span>
                        <ul class='detailUl'>
                            <li class='fenLi' v-for="(item,index) in itdFileList" v-show='index==0'>
                                <p class='tit'>项目文档</p>
                                <img src='./img/file.png' class='fileImg'/>
                                <p class='fileTit'>《{{item.fileName}}》简介文档</p>
                                <a :href='item.filePath'><button class='fileBtn'>点击下载</button></a>
                                <p class='fileText'>项目资料版权归唐仁国际所有</p>
                            </li>
                        </ul>
                    </div>
               </div>
           </div>
        </div>
        <sidebar></sidebar>
        <appointment ref='c1'></appointment>
        <f></f>
    </div>
</template>
<script>
import h from '@/components/header/header.vue'
import f from '@/components/footer/footer.vue'
import sidebar from '../../components/sidebar/sidebar.vue'
import appointment from '../../components/appointment/appointment.vue'
import axios from 'axios'
import { setTimeout } from 'timers';
export default {
    name:'haiWdet',
    metaInfo: function(){
        return{
            title: this.metaItemName+'_海外房产，海外房产公司，海外置业，国外购房_唐仁国际',
      meta: [{                 // set meta
        name: 'description',
        content: '唐仁国际是大唐财富旗下投资移民与家庭规划高端品牌，为客户提供尊享、私密、专业的海外规划服务。为有全球化需求的高净值人群提供安全、可靠的海外身份及财富管理解决方案。业务涵盖：希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，澳洲移民，欧洲移民，海外房产，海外教育等。移民去哪儿？来唐仁国际尊享专业移民顾问服务！'
      },{                 // set meta
        name: 'keyWords',
        content: '海外房产，海外房产公司，泰国房产，美国房产，澳洲房产，欧洲房产，唐仁国际'
      }]
        }
        
    },
    data:function(){
        return{
            proId:'',//项目Id
            nationCode:'',//国家code
            name:'',
            itemInfoArr:[],
            fileList:[],
            buildlist:'',
           // bigSrclist:'',
            vCover:false,
            ifShow:true,
            itdFileNum:'',
            itdFileList:'',
            loading:this.$loading({
                lock: true,
                text: '精彩内容即将出现...',
                spinner: 'el-icon-loading loading',
                background:'rgba(0, 0, 0, 0.7)',
                }),
           metaItemName:'',
        }
    },
    components:{sidebar,appointment,f,h},
    methods:{
        getInfo:function(id){
            var that=this;
            var obj={"FLAG":"3","ITEM_ID":id}
            axios.post('/trpch/trcrm/item/queryItemInfo',obj)
            .then(res=>{
                var data=res.data;
                console.log(data);
                if(data.isSuccess==1){
                   var itemInfo=data.itemInfo;
                   that.metaItemName=itemInfo.itemTitle;
                   that.itemInfoArr.push(itemInfo);
                    that.fileList=data.fileList;
                    that.buildlist=data.buildlist;
                    console.log(data.buildlist)
                   that.proId=itemInfo.proId;
                   that.nationCode=itemInfo.nationCode;
                   that.name=itemInfo.itemTitle;
                    //附件文档
                    that.itdFileNum=data.itdFileNum;
                    that.itdFileList=data.itdFileList;

                   
                   that.loading.close();
                   setTimeout(function(){
                       var detH=$('.posiRle').height()-250;
                       $('.yiminDetBox').height(detH);
                   },500)
                }     
            })
        },
        subTime:function(str){
            return str.substr(0,10);
        },
        toBigImg:function(){
            var that=this;
            that.vCover=true;
             //that.bigSrc=src;
        },
        closeCover:function(){
             var that=this;
            that.vCover=false;
        },
        toAppont:function(){
            var that=this;
            that.$refs.c1.toShow(that.name,that.id,that.ifShow,true,that.nationCode);
        }
    },
    created:function(){
        var that=this;
        that.id=that.$route.query.id;
        if(!that.id==false){
           that.getInfo(that.id)//获取详情信息
        }
    }
}
</script>
<style>
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .cover{
        width:100%;
        height:100%;
        background-color: rgba(0,0,0,0.4);
        position: fixed;
        z-index:1001;
    }
    .cover .el-carousel{
        display: block;
        width:50%;
        position: relative;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .cover .el-carousel img{
        width:100%;
        height:100%;
    }
    .cover button.el-carousel__arrow{
        display: block;
    }
    .cover .el-carousel__container{
       height:400px;
    }
    #haiWB{
        background-image: url(img/haiWbanner.png);
    }
</style>

