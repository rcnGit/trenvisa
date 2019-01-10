<template>
    <div class='yimin'>
        <h1 style="display:none!important;">{{metaItemName}}，申请流程，申请条件，费用价格，唐仁国际</h1>
        <h></h>
        <div class='yiminMain'>
            <div class='ban' id='yiminB'></div>
           <div class='yiminDetBox'>
               <div class='w1200 posiRle' v-for='item in itemInfoArr'>
                   <div class='yiminDTop shadow'>
                       <div class='fl lunbo'>
                           <!-- banner -->
                           <el-carousel :interval="5000" arrow="always" v-if='fileList.length>1'>
                                <el-carousel-item  v-for='(b,index) in fileList' >
                                 <img :src='b.filePath'/>
                                </el-carousel-item>
                            </el-carousel>
                            <img :src='b.filePath' v-for='(b,index) in fileList' v-if='fileList.length==1'/>
                       </div>
                       <div class='fl lunText'>
                           <div style='height:252px;'> 
                            <p class='tit'>{{item.itemTitle}}</p>
                            <p class='intr'>{{item.lightspot}}</p>
                            <p class='type'><span class='fl'>签证类型：{{item.certType}}</span><span class='fr'>手续复杂：{{item.complexity}}</span></p>
                            <p class='type'><span class='fl'>居住要求：{{item.liveRequire}}</span><span class='fr'>办理周期：{{item.cycle}}</span></p>
                            <p class='pric' style='margin-bottom:5px;' v-if='!item.amountMaxSum==false'>预估总费用&nbsp;&nbsp;<span>¥{{item.amountSum}}-{{item.amountMaxSum}}万<i>&nbsp;</i></span></p>
                            <p class='pric' style='margin-bottom:5px;' v-else>预估总费用&nbsp;&nbsp;<span>¥{{item.amountSum}}万<i>&nbsp;</i></span></p>
                            <p class='pric' style='margin-top:0;color:#666;margin-bottom: 25px;min-height: 19px;'>{{item.foreignCurrency}}</p>
                            </div> 
                            <p class='yuyueP'><span class='yuyueBtn fl btnHoverZ' @click='toAppont()'>马上预约</span><span class='fl tel'><img src='./img/appTel.png'/>010-53520719</span></p>
                         </div>
                   </div>
                     <div style='clear:both;'></div>
                   <div class='yiminDBottom shadow'>
                       <ul class='maoUl'>
                           <a><li class='active' id='nav1' mao='Project_intr'><span>项目介绍</span></li></a>
                           <a><li class='' id='nav2' mao='apply_cond'><span>申请条件／流程</span></li></a>
                           <a><li class='' id='nav3' mao='cost_det'><span>费用详情</span></li></a>
                           <a v-if='itdFileNum>0'><li class='' id='nav4' mao='file' style="position:relative;"><span>项目文档</span><i class='fileDtishi'>下载</i></li></a>
                           <span class='yuyueBtn fr btnHoverZ' @click='toAppont()'>马上预约</span>
                       </ul>
                       <div id=''>
                            <!-- 项目介绍 -->
                            <span id='Project_intr' style='position:relative;top:-240px;opacity: 0;font-size:10px;' class='nav1'>1</span>
                            <ul class='detailUl'>
                                <li><p class='' v-html='item.describe'></p></li>
                                <li>
                                    <p class='tit'>项目优势</p>
                                    <p class='' v-html='item.superiority'></p>
                                </li>
                            </ul>
                       </div>
                   </div>
                   <div id='' class='shadow'>
                            <!-- 申请条件／流程 -->
                             <span id='apply_cond' style='position:relative;top:-120px;opacity: 0;font-size:10px;' class='nav2'>1</span>
                            <ul class='detailUl'>
                                <li class='fenLi'>
                                    <p class='tit'>申请条件</p>
                                     <div class='' v-html='item.applyCondition'></div>
                                </li>
                                <li class='fenLi'>
                                    <p class='tit'>申请流程</p>
                                     <div class='' v-html='item.applyProcess'>
                                     </div>
                                </li>
                            </ul>
                    </div>
                    <div id='' class='shadow'>
                        <!-- 费用详情 -->
                        <span id='cost_det' style='position:relative;top:-120px;opacity: 0;font-size:10px;' class='nav3'>1</span>
                        <ul class='detailUl'>
                            <li class='fenLi'>
                                <p class='tit'>费用详情</p>
                                <p class='' v-html='item.totalCost'></p>
                            </li>
                        </ul>
                    </div>
                      <div id='' class='shadow' v-if='itdFileNum>0'>
                        <!-- 项目文档 -->
                        <span id='file' style='position:relative;top:-120px;opacity: 0;font-size:10px;' class='nav4'>1</span>
                        <ul class='detailUl'>
                            <li class='fenLi' v-for="(item,index) in itdFileList">
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
export default {
    name:'yimin',
     metaInfo:function() {
         return{
              title: this.metaItemName+'_移民项目，申请流程，申请条件，费用价格_唐仁国际',
              meta: [{                 // set meta
                    name: 'description',
                    content: '唐仁国际是大唐财富旗下投资移民与家庭规划高端品牌，为客户提供尊享、私密、专业的海外规划服务。为有全球化需求的高净值人群提供安全、可靠的海外身份及财富管理解决方案。业务涵盖：希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，澳洲移民，欧洲移民，海外房产，海外教育等。移民去哪儿？来唐仁国际尊享专业移民顾问服务！'
                },{                 // set meta
                    name: 'keyWords',
                    content: '移民，希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，移民去哪儿'
                }]
         }
       
    },
    data:function(){
        return{
             id:'',//项目Id
             nationCode:'',//国家code
            itemInfoArr:[],
            fileList:[],
            proId:'',//项目Id
            name:'',
            itdFileNum:'',
            itdFileList:'',
            ifShow:true,
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
            var obj={"FLAG":"1","ITEM_ID":id}
            axios.post('/trpch/trcrm/item/queryItemInfo',obj)
            .then(res=>{
                var data=res.data;
                console.log(data);
                if(data.isSuccess==1){
                   var itemInfo=data.itemInfo;
                   that.metaItemName=itemInfo.itemTitle;
                   that.itemInfoArr.push(itemInfo);
                    that.fileList=data.fileList;
                    that.proId=itemInfo.proId;
                    that.name=itemInfo.itemTitle;
                    that.nationCode=itemInfo.nationCode;
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
     #yiminB{
        background-image: url(img/yiminbanner.jpg);
    } 
    
</style>

