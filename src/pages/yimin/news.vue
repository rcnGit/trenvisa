<template>
    <div class='news yinmin' >
        <h1 style="display:none!important;">新闻资讯，移民政策，移民资讯，留学教育，移民攻略</h1>
        <h></h>
        <div class='yiminMain'>
            <div class='ban' id='newsB' >
                <span>新闻中心</span>
            </div>
           <div class='yiminListBox shadow'>
                
               <div class='fl navT'>
                   <ul class="NaVul">
                       <li class='active' @click="navClick('all',$event)" countryId=''><span>全部</span><img src='./img/fxL.png'/></li>
                       <li  @click="navClick(index,$event)" v-for='(item,index) in countryList' :countryId='item.countryId' name='123'><span>{{item.countryName}}</span><img src='./img/fxL.png'/></li>
                       
                   </ul>
               </div>
               <div class='navList fl'>
                   <div class='noData1' v-if="noData">
                        <img src='./img/no1.png'/>
                        <p>还没有新闻哦～</p>     
                    </div>
                   <ul class='navListUl' v-else='noData'>
                         <li class='navListLi' v-for="item in list">
                            <div class='fl navLiImgB'>
                                <img :src='item.httpPath' @click="checkDetile(item.newsId)" class='pointer'/>
                            </div>
                            <div class='fl dataList yindataList dataList2' style="width:100%;">
                                <div style='height:163px;'>
                                    <p class='name pointer' @click="checkDetile(item.newsId)"  style='white-space: nowrap;overflow:hidden;text-overflow: ellipsis;display:block;'>{{item.title}}</p>
                                    <p class='proc deletPic' v-html="item.digest" style='height:49px;'></p>
                                </div>
                                
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
import { setTimeout } from 'timers';
export default {
    name:'news',
      metaInfo: {
        title: '新闻资讯，移民政策，移民资讯，留学教育，移民攻略_唐仁国际',
      meta: [{                 // set meta
        name: 'description',
        content: '唐仁国际是大唐财富旗下投资移民与家庭规划高端品牌，为客户提供尊享、私密、专业的海外规划服务。为有全球化需求的高净值人群提供安全、可靠的海外身份及财富管理解决方案。业务涵盖：希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，澳洲移民，欧洲移民，海外房产，海外教育等。移民去哪儿？来唐仁国际尊享专业移民顾问服务！'
      },{                 // set meta
        name: 'keyWords',
        content: '新闻资讯，移民政策，移民资讯，留学教育，移民攻略_唐仁国际'
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
            }
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
                    //
                      var countryName=decodeURIComponent(decodeURIComponent(that.$route.query.countryName));
                            var countryBool=false;
                                setTimeout(function(){
                                   // console.log(countryName)
                                    if(!countryName==false){
                                        $('.NaVul li').each(function(){
                                            if($(this).find('span').html()==countryName){
                                                countryBool=true;
                                                $('.NaVul li').removeClass('active');
                                                $(this).addClass('active');
                                                var id=$(this).attr('countryId')
                                                that.getlist(id,1)//获取列表
                                                return;
                                            }
                                        })
                                    }else{
                                        that.getlist('',1)//获取列表
                                    }
                                    if(countryBool==false){
                                        that.getlist('',1)//获取列表
                                    }
                                    
                                },300)
                }//
            })
        },
        getlist:function(id,pageNo){
             var that=this;
              that.loading=that.$loading(that.options);
                var obj={"channel":"1","flag":"1","country":id,"pageNo":pageNo,"pageSize":that.pageSize,"typeId":"1"}
                axios.post('/trpch/trcrm/news/queryNewsList',obj)
                .then(res=>{
                    var data=res.data;
                    //console.log(data)
                    if(data.isSuccess==1){
                        that.loading.close();
                       that.list=data.list;
                      // console.log(that.list)
                        //console.log(that.list.length)
                       if(that.list.length==0){
                           that.totalCount=1;
                           that.noData=true;
                           that.pageNum=1;
                       }else{
                           that.totalCount=data.totalNum;
                           that.noData=false;
                       }
                     setTimeout(function(){
                           var navH=$('.navT').height();
                           var listH=$('.navListUl').height()+70
                           console.log($('.navListUl').height())
                         $('.yiminListBox').height($('.navListUl').height()+70);
                        //    console.log(navH<listH)
                        //    console.log(navH+'====='+listH)
                        //    if(navH<listH){
                        //         //$('.navT').height($('.navListUl').height()+70);
                        //         $('.navList').height($('.navListUl').height()+70);
                        //    }else{
                        //        //console.log($('.navListUl').height())
                        //        $('.navList').height($('.navListUl').height());
                        //          $('.navT').height($('.navListUl').height());
                        //        //$('.navList').height(navH-70)
                        //    }
                           
                       },300) 
                        
                        
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
                that.countryid='';
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
        //that.getlist('',1)//获取列表
    }
}
</script>
<style>
#newsB{
    background-image: url(img/newsbanner.jpg);
}
</style>

