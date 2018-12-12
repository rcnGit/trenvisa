<template>
    <div class='news yinmin' >
        <h></h>
        <div class='yiminMain'>
            <div class='ban' id='newsB' >
                <span>新闻中心</span>
            </div>
           <div class='yiminListBox'>
                
               <div class='fl navT'>
                   <ul class="NaVul">
                       <li class='active' @click="navClick('all',$event)" countryId=''><span>全部</span><img src='./img/fxL.png'/></li>
                       <li  @click="navClick(index,$event)" v-for='(item,index) in countryList' :countryId='item.countryId' name='123'><span>{{item.countryName}}</span><img src='./img/fxL.png'/></li>
                       
                   </ul>
               </div>
               <div class='navList fl'>
                   <div class='noData1' v-if="noData">
                        <img src='./img/no1.png'/>
                        <p>还没有案例哦～</p>     
                    </div>
                   <ul class='navListUl' v-else='noData'>
                         <li class='navListLi' v-for="item in list">
                            <div class='fl navLiImgB'>
                                <img :src='item.httpPath' @click="checkDetile(item.newsId)" class='pointer'/>
                            </div>
                            <div class='fl dataList yindataList dataList2'>
                                <p class='name pointer' @click="checkDetile(item.newsId)">{{item.title}}</p>
                                <p class='proc' v-html="item.newsCont" style='height:49px;'></p>
                                <!-- <p class='type'><i></i>签证类型：{{item.certType}}</p>
                                <p class='type'><i></i>办理周期：{{item.cycle}}</p> -->
                                <P><span class='date'>{{subTime(item.newsDate)}}</span><span class='leisp' v-html="item.labelName"></span><span class='leisp' v-html="item.countryName"></span></P>
                                <!-- <span class='checkDet btnHoverZ' :itemId='item.itemId' @click="checkDetile(item.itemId)">查看详情</span> -->
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
                            next-text="下一页 ">
                            prev-text="上一页">
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
    name:'news',
    data:function(){
        return{
            pageSize:10,
            pageNum:1,
            totalCount:1,
            list:'',//
           countryList:[],
            cityList:[],
            countryid:'',
            noData:false,//暂无数据
        }
    },
    components:{sidebar,appointment,f,h},
    methods:{
        handleSizeChange: function (size) {
            this.pageSize = size;
            //this.getData()
            },
        handleCurrentChange: function(currentPage){
            var that=this;
            that.pageNum = currentPage;
            var countryid=that.countryid;
            that.getlist(countryid,that.pageNum);
        
        },
        subTime:function(str){
            return str.substr(0,10)
        },
        getCountry:function(){
            var that=this;
            var obj={"BEGIN_NUM":"1","CHANNEL":"1","END_NUM":"","TYPE":"4"}
            axios.post('/trpch/trcrm/country/queryCountryList',obj)
            .then(res=>{
                var data=res.data;
                //console.log(data)
                if(data.isSuccess==1){
                    that.countryList=data.list;
                    
                }     
            })
        },
        getlist:function(id,pageNo){
             var that=this;
                var obj={"channel":"1","flag":"1","country":id,"pageNo":pageNo,"pageSize":that.pageSize,"typeId":"1"}
                axios.post('/trpch/trcrm/news/queryNewsList',obj)
                .then(res=>{
                    var data=res.data;
                    //console.log(data)
                    if(data.isSuccess==1){
                       that.list=data.list;
                       if(that.list.length==0){
                           that.totalCount=1;
                           that.noData=true;
                       }else{
                           that.totalCount=data.totalNum;
                           that.noData=false;
                       }
                        
                        
                    }     
                })
        },
        navClick:function(index,event){
            var that=this;
            var el = event.currentTarget;
            var countryid=el.getAttribute('countryid');
            $('.NaVul li').removeClass('active');
            el.className='active';
            
            if(index=='all'){
                that.getlist('',1);
                return;
            }else{
                that.countryid=countryid;
                that.getlist(countryid,1)
                
            }
        },
        cityClick:function(city,event){
             var that=this;
             var el = event.currentTarget;
             $('.cityTop span').removeClass('active');
             el.className=el.className+' active'
            var countryid=that.countryid;
            that.getlist(countryid,1)
        },
        checkDetile:function(id){
             var that=this;
              window.open(that.Host+'newsdet?id='+id)
            //window.location=that.Host+'newsdet?id='+id;
        }
    },
    created:function(){
        var that=this;
        that.getCountry()//获取国家列表
        that.getlist('',1)//获取列表
    }
}
</script>
<style>
#newsB{
    background-image: url(img/newsbanner.jpg);
}
</style>

