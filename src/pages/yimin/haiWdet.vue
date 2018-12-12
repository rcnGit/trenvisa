<template>
    <div class='yimin'>
        <div class='cover' v-show="vCover" @click="closeCover()">
            <img :src='bigSrc' />
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
                           <p class='tit'>{{item.itemTitle}}</p>
                           <p class='intr'>{{item.lightspot}}</p>
                          <p class='type'><span class='fl'>年均租金汇报：{{item.returnRate}}%</span><span class='fr'>首付比例：{{item.paymentRate}}%</span></p>
                          <p class='type'><span class='fl'>单位价格：{{item.unitCost}}万元／平方米</span><span class='fr'>占地面积：{{item.structurArea}}平方米</span></p>
                          <p class='pric'>房产总价&nbsp;&nbsp;<span>¥{{item.amountSum}}万</span>&nbsp;起<span style='font-size:14px;color:#666;margin-left:37px;'><img src='./img/ditu.png' style='vertical-align: -2px;'/>&nbsp;&nbsp;{{item.nation}}{{item.cityName}}</span></p>
                          <p class='yuyueP'><span class='yuyueBtn fl btnHoverZ' @click='toAppont()'>马上预约</span><span class='fl tel'><img src='./img/appTel.png'/>010-52705440</span></p>
                       </div>
                   </div>

                   <div class='yiminDBottom shadow'>
                       <ul class='maoUl'>
                          <a href='#fangyuan'><li class='active' id='nav1'><span>房源详情</span></li></a>
                           <a href='#huxing'><li class='' id='nav2'><span>户型展示</span></li></a>
                           <a href='#zhoubian'><li class='' id='nav3'><span>周边设施</span></li></a>
                           <a href='#goufang'><li class='' id='nav4'><span>购房流程</span></li></a>
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
                                 <li>
                                    <div class='fl leiH leiHl'><span class='nameH'>产权说明</span><span class='nameT'>{{item.equityDeclare}}</span></div>
                                    <div class='fl leiH leiHr'><span class='nameH'>交付标准</span><span class='nameT'>{{item.payNorm}}</span></div>
                                </li>
                                 <li>
                                    <div class='fl leiH leiHl'><span class='nameH'>开发商</span><span class='nameT'>{{item.developers}}</span></div>
                                    <div class='fl leiH leiHr'><span class='nameH'>交付时间</span><span class='nameT'>{{subTime(item.payDate)}}</span></div>
                                </li>
                                <li>
                                    <div class='fl leiH leiHl' style='width:100%;'><span class='nameH'>可选户型</span><span class='nameT' v-html='item.hxDeclare'></span></div>
                                </li>
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
                                         <li class='huLi' v-for='z in buildlist'>
                                             <div class='fl houseImg'>
                                                 <img :src='z.httpPath' width='100%' height='100%'/>
                                             </div>
                                             <div class='fl houseMsg'>
                                                 <p class='tit'>{{z.name}}</p>
                                                 <p class='maiji'>{{item.structurArea}}</p>
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
                                <div v-html='item.circunDeclare'></div>
                            </li>
                        </ul>
                    </div>
                    <div  class='shadow' >
                        <!-- 费用详情 -->
                         <span id='goufang' style='position:relative;top:-120px;opacity:0;font-size:10px;' class='nav4'>1</span>
                        <ul class='detailUl'>
                            <li class='fenLi'>
                                <p class='tit'>购房流程</p>
                                <div v-html='item.gfDeclare'></div>
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
export default {
    name:'yimin',
    data:function(){
        return{
            proId:'',//项目Id
            name:'',
            itemInfoArr:[],
            fileList:[],
            buildlist:'',
            bigSrc:'',
            vCover:false,
            ifShow:true,
           
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
                   that.itemInfoArr.push(itemInfo);
                    that.fileList=data.fileList;
                    that.buildlist=data.buildlist;
                   that.proId=itemInfo.proId;
                   that.name=itemInfo.itemTitle;
                }     
            })
        },
        subTime:function(str){
            return str.substr(0,10);
        },
        toBigImg:function(src){
            var that=this;
            that.vCover=true;
             that.bigSrc=src;
        },
        closeCover:function(){
             var that=this;
            that.vCover=false;
        },
        toAppont:function(){
            var that=this;
            that.$refs.c1.toShow(that.name,that.id,that.ifShow,true);
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
        z-index: 999;
    }
    .cover img{
        display: block;
        width:50%;
        position: relative;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    #haiWB{
        background-image: url(img/haiWbanner.jpg);
    }
</style>

