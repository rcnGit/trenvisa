<template>
    <div class='yimin active' >
        <h1 style="display:none!important;">移民活动，移民讲座，移民沙龙</h1>
        <h></h>
        <div class='yiminMain'>
            <div class='ban' id='activeB'>
                <span>专业移民互动沙龙邀您参与</span>
            </div>
           <div class='yiminListBox'>
               <div class='navList shadow' style='width:100%;'>
                   <div class='noData1' v-if="noData">
                        <img src='./img/no1.png'/>
                        <p>还没有活动哦～</p>     
                    </div>
                   <ul class='navListUl' v-else='noData'>
                         <li class='navListLi' v-for="item in list">
                            <div class='fl navLiImgB'>
                                <img :src='item.httpPath' @click="checkDetile(item.actId)" style="cursor: pointer;"/>
                                <span :class='"act"+item.actStatus'>{{item.actStatusName}}</span>
                                <!-- <span class='hui'  v-if='item.actStatus==2'>{{item.actStatusName}}</span> -->
                            </div>
                            <div class='fl dataList yindataList' style="width:100%;">
                                <p class='name' @click="checkDetile(item.actId)" style="cursor: pointer;">{{item.title}}</p>
                                <p class='proc deletPic' v-if='item.actStatus==2' v-html="item.digest" style='height:46px;margin-bottom:14px!important;'></p>
                                <p class='proc deletPic' v-show='item.actStatus==1&&item.digest' v-html="item.digest" style='height:46px;margin-bottom:14px!important;'></p>
                                <p class='proc deletPic' v-show='item.actStatus==1&&!item.digest' style='margin-bottom:14px!important;'>唐仁国际精彩活动，等您参与~</p>
                                <p class='type'><i></i>活动地点：{{item.address}}</p>
                                <p class='type'><i></i>活动时间：{{subTime(item.startTime)}}-{{subTime(item.endTime)}}</p>
                                <span class='checkDet btnHoverZ' :itemId='item.itemId' @click="checkDetile(item.actId)" style="float:left;">查看详情</span>
                            </div>
                        </li>
                        <div style='clear:both;'></div>
                         <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="totalCount"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="pageNum"
                            :page-size="pageSize"
                            next-text="下一页"
                            prev-text="上一页" v-if='totalCount>10'>
                        </el-pagination> 
                       
                   </ul>
                  
                  
               </div><!--navList-->
               <div style='clear:both;'></div>
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
 import { Loading } from 'element-ui';
export default {
    name:'active',
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
            pageSize:10,
            pageNum:1,
            totalCount:1,
            list:'',//
           countryList:[],
            cityList:[],
            cityShow:false,
            thiscity:'',
            countryid:'',
            noData:false,//暂无数据
            loading:this.$loading({
                lock: true,
                text: '精彩内容即将出现...',
                spinner: 'el-icon-loading loading',
                background:'rgba(0, 0, 0, 0.7)',
                }),
            options:{
                lock: true,
                text: '精彩内容即将出现...',
                spinner: 'el-icon-loading loading',
                background:'rgba(0, 0, 0, 0.7)',
            },
        }
    },
    components:{sidebar,appointment,f,h},
    methods:{
        handleSizeChange: function (size) {
            var that=this;
            that.pageSize = size;
            //that.getlist(that.pageNum)
            },
        handleCurrentChange: function(currentPage){
            var that=this;
            that.pageNum = currentPage;
            var countryid=that.countryid;
            that.getlist(that.pageNum)
        
        },
        subTime:function(str){
            return str.substr(5,2)+'月'+str.substr(8,2)+'日';
        },
        getlist:function(pageNo){
             var that=this;
             that.loading=that.$loading(that.options);
                var obj={"channel":"1","pageNo":pageNo,"pageSize":that.pageSize}
                console.log(obj);
                axios.post('/trpch/trcrm/activity/queryActList',obj)
                .then(res=>{
                    var data=res.data;
                    if(data.isSuccess==1){
                       that.list=data.list;
                       console.log(that.list);
                       that.loading.close();
                       if(that.list.length==0){
                           that.totalCount=1;
                           that.noData=true;
                           that.pageNum=1;
                       }else{
                           that.totalCount=data.totalNum;
                           that.noData=false;
                          
                       }
                        
                        
                    }     
                })
        },
        checkDetile:function(id){
             var that=this;
             window.open(that.Host+'activedet?id='+id)
            //window.location=that.Host+'activedet?id='+id;
        }
    },
    created:function(){
        var that=this;
        that.getlist(that.pageNum)//获取列表
    }
}
</script>
<style>
.active .proc{
    min-height:20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    white-space:normal;
}
.active .yindataList{
    max-width:810px;
}
.active .proc{
    margin-bottom: 12px;
    line-height:24px;
    min-height:46px;
}
.active .name{
    margin-bottom:10px;
}
#activeB{
    background-image: url(img/activebanner.jpg);
}
</style>

