<template>
    <div class='yimin'>
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
                           <p class='tit'>{{item.itemTitle}}</p>
                           <p class='intr'>{{item.lightspot}}</p>
                          <p class='type'><span class='fl'>签证类型：{{item.certType}}</span><span class='fr'>手续复杂：{{item.complexity}}</span></p>
                          <p class='type'><span class='fl'>居住要求：{{item.liveRequire}}</span><span class='fr'>办理周期：{{item.cycle}}</span></p>
                          <p class='pric'>预估总费用&nbsp;&nbsp;<span>¥{{item.amountSum}}万</span>&nbsp;起</p>
                          <p class='yuyueP'><span class='yuyueBtn fl btnHoverZ' @click='toAppont()'>马上预约</span><span class='fl tel'><img src='./img/appTel.png'/>010-52705440</span></p>
                       </div>
                   </div>

                   <div class='yiminDBottom shadow'>
                       <ul class='maoUl'>
                           <a href='#Project_intr'><li class='active' id='nav1'><span>项目介绍</span></li></a>
                           <a href='#apply_cond'><li class='' id='nav2'><span>申请条件／流程</span></li></a>
                           <a href='#cost_det'><li class='' id='nav3'><span>费用详情</span></li></a>
                           <span class='yuyueBtn fr btnHoverZ' @click='toAppont()'>马上预约</span>
                       </ul>
                       <div id=''>
                            <!-- 项目介绍 -->
                            <span id='Project_intr' style='position:relative;top:-240px;opacity: 0;font-size:10px;' class='nav1'>1</span>
                            <ul class='detailUl'>
                                <li><p class='nor' v-html='item.describe'></p></li>
                                <li>
                                    <p class='tit'>项目优势</p>
                                    <p class='nor' v-html='item.superiority'></p>
                                </li>
                            </ul>
                       </div>
                   </div>
                   <div id='' class='shadow'>
                            <!-- 申请条件／流程 -->
                             <span id='apply_cond' style='position:relative;top:-120px;opacity: 0;font-size:10px;'class='nav2'>1</span>
                            <ul class='detailUl'>
                                <li class='fenLi'>
                                    <p class='tit'>申请条件</p>
                                     <div class='nor' v-html='item.applyCondition'></div>
                                </li>
                                <li class='fenLi'>
                                    <p class='tit'>申请流程</p>
                                     <div class='nor' v-html='item.applyProcess'>
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
                                <p class='nor' v-html='item.totalCost'></p>
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
             id:'',//项目Id
            itemInfoArr:[],
            fileList:[],
            proId:'',//项目Id
            name:'',
            ifShow:true,
            
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
                   that.itemInfoArr.push(itemInfo);
                    that.fileList=data.fileList;
                    that.proId=itemInfo.proId;
                    that.name=itemInfo.itemTitle;
                }     
            })
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
     #yiminB{
        background-image: url(img/yiminbanner.jpg);
    } 
</style>

