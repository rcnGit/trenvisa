<template>
    <div class='yimin'>
         <h1 style="display:none!important;">{{metaItemName}}留学，游学，专业出国留学中介，出国留学咨询</h1>
        <h></h>
        <div class='yiminMain'>
            <div class='ban' id='liuxueB'></div>
           <div class='yiminDetBox'>
               <div class='w1200 posiRle' v-for='item in itemInfoArr'>
                   <div class='yiminDTop shadow'>
                       <div class='fl lunbo'>
                           <!-- banner -->
                           <el-carousel :interval="5000" arrow="always"  v-if='fileList.length>1'>
                                <el-carousel-item  v-for='(b,index) in fileList'>
                                 <img :src='b.filePath'/>
                                </el-carousel-item>
                            </el-carousel>
                          <img :src='b.filePath' v-for='(b,index) in fileList' v-if='fileList.length==1'/>
                       </div>
                       <div class='fl lunText'>
                           <div style='height:252px;'> 
                               <p class='tit' v-html='item.itemTitle'></p>
                                <p class='intr' v-html='item.lightspot'></p>
                                <p class='type'><span class='fl'>目的地：{{item.target}}</span></p>
                                <p class='type'><span class='fl'>办理周期：{{item.cycle}}</span></p>
                                <p class='pric' v-if='!item.amountMaxSum==false' style='margin-bottom:17px;'>预估总费用&nbsp;&nbsp;<span>¥{{item.amountSum}}-{{item.amountMaxSum}}万<i>&nbsp;</i></span></p>
                                <p class='pric' v-else style='margin-bottom:17px;'>预估总费用&nbsp;&nbsp;<span>¥{{item.amountSum}}万<i>&nbsp;</i></span></p>
                                <p class='pric' style='margin-top:0;color:#666;margin-bottom: 25px;min-height: 19px;'>{{item.foreignCurrency}}</p>
                           </div>
                          
                          <p class='yuyueP'><span class='yuyueBtn fl btnHoverZ' @click='toAppont()'>马上预约</span><span class='fl tel'><img src='./img/appTel.png'/>010-53520719</span></p>
                       </div>
                   </div>
                     <div style='clear:both;'></div>
                   <div class='yiminDBottom shadow'>
                       <ul class='maoUl'>
                           <a><li class='active' id='nav1' mao='advantage'><span>项目介绍</span></li></a>
                           <a><li class='' id='nav2' mao='apply_cond'><span>申请条件／流程</span></li></a>
                           <a><li class='' id='nav3' mao='cost_det'><span>费用详情</span></li></a>
                           <a v-if='itdFileNum>0'><li class='' id='nav4' mao='file' style="position:relative;"><span>项目文档</span><i class='fileDtishi'>下载</i></li></a>
                           <span class='yuyueBtn fr btnHoverZ' @click='toAppont()'>马上预约</span>
                       </ul>
                        <a name='advantage'></a>
                        <span id='advantage' style='position:relative;top:-240px;opacity:0;font-size:10px;' class='nav1'>1</span>
                       <div id='' class=''>
                            <!-- 项目介绍 -->
                            <ul class='detailUl'>
                                <li><p class='' v-html='item.describe'></p></li>
                                <!-- <li>
                                    <p class='tit'>政策介绍</p>
                                    <p class='nor'>2013年4月，希腊政府出台了旨在促进本国经济发展的投资移民政策。2015年7月9日，希腊又通过了新的移民法案。非欧盟公民在希腊购买25万欧元以上的房子，就可以带配偶、21周岁以下子女、自己和配偶的父母一起一步到位获得希腊“绿卡”（永久居留身份）。真正实现一人投资，三代移民。永久居民若满足一定居住要求还可以申请入籍。希腊25万欧元购房移民项目堪称欧洲性价比最高的“绿卡”项目。截止到2017年6月30日，4年间总共向海外投资者签发了5,779份永居许可，包括1,684份投资者永居许可以及4,095份家庭团聚永居许可。通过购房移民项目，希腊已经吸引了约10亿欧元的投资资金。</p>
                                </li> -->
                                <li id='advantage'>
                                    <p class='tit'>项目优势</p>
                                    <p class='' v-html='item.superiority'></p>
                                </li>
                            </ul>
                       </div>
                   </div>
                   <div  class='shadow' >
                       <a name='apply_cond'></a>
                       <span id='apply_cond' style='position:relative;top:-120px;opacity:0;font-size:10px;' class='nav2'>1</span>
                            <!-- 申请条件／流程 -->
                            <ul class='detailUl'>
                                <li class='fenLi'>
                                    <p class='tit'>申请条件</p>
                                     <p class='' v-html='item.applyCondition'></p>
                                     <!-- <p class='nor'>2.在希腊购买25万欧元以上的房产（长期持有，不可出售）；</p>
                                     <p class='nor'>3.无语言、经商经验和资金来源要求；</p>
                                     <p class='nor'>4.无犯罪记录。</p> -->
                                </li>
                                <li class='fenLi'>
                                    <p class='tit'>申请流程</p>
                                     <p class=''  v-html='item.applyProcess'></p>
                                     <!-- <p class='nor'>3.在线递交EOI申请</p>
                                     <p class='nor'>4.完成州担保申请，等待接收移民局邀请</p>
                                     <p class='nor'>5.整理好全套文件安排邮寄澳大利亚移民局（香港）、填写网申，如没问题最好安排同一天进行递交；在网申时同时提供Visa/MasterCard的信用卡信息</p>
                                     <p class='nor'>6.收到移民局面试通知，准备面试，并进行面试（被面试概率为20%-30%）</p> -->
                                </li>
                            </ul>
                    </div>
                    <div  class='shadow' >
                        <!-- <a name='cost_det'></a> -->
                        <span id='cost_det' style='position:relative;top:-120px;opacity: 0;font-size:10px;' class='nav3'>1</span>
                        <!-- 费用详情 -->
                        <ul class='detailUl'>
                            <li class='fenLi'>
                                <p class='tit'>费用详情</p>
                                <p class=''  v-html='item.totalCost'></p>
                                <!-- <p class='nor'>②交付定金CNY40,000(人民币肆万圆)</p>
                                <p class='nor'>③享受促销活动，抵扣40万泰铢</p>
                                <p class='nor'>④14天内签订合同，交付30%首付款</p>
                                <p class='nor'>⑤2019年项目交付时支付70%尾款</p> -->

                                <!-- <p class='qtFei'>其他部分购置费用说明：</p>
                                <p class='nor'>水电开户费4,000泰铢</p>
                                <p class='nor'>1%过户费</p>
                                <p class='nor'>维修基金250泰铢/平方米，一次性付清</p>
                                <p class='nor'>物业管理费45泰铢平方米，提前一年支付</p> -->




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
    name:'liuxuedet',
     metaInfo:function() {
         return{
             title: this.metaItemName+'_留学游学，专业出国留学中介_唐仁国际',
            meta: [{                 // set meta
                name: 'description',
                content: '唐仁国际是大唐财富旗下投资移民与家庭规划高端品牌，为客户提供尊享、私密、专业的海外规划服务。为有全球化需求的高净值人群提供安全、可靠的海外身份及财富管理解决方案。业务涵盖：希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，澳洲移民，欧洲移民，海外房产，留学游学等。移民去哪儿？来唐仁国际尊享专业移民顾问服务！'
            },{                 // set meta
                name: 'keyWords',
                content: '留学，游学，专业出国留学中介，出国留学咨询，美国留学，澳洲留学，加拿大留学，唐仁国际'
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
            var obj={"FLAG":"2","ITEM_ID":id}
            axios.post('/trpch/trcrm/item/queryItemInfo',obj)
            .then(res=>{
                var data=res.data;
                console.log(data);
                if(data.isSuccess==1){
                   var itemInfo=data.itemInfo;
                   that.metaItemName=itemInfo.itemTitle;
                   that.itemInfoArr.push(itemInfo);
                    that.fileList=data.fileList;
                    console.log( that.fileList)
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
 #liuxueB{
        background-image: url(img/liuxuebanner.png);
    }
</style>

