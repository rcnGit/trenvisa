<template>
    <div class='suc' >
        <h1 style="display:none!important;">移民案例，移民成功案例，移民经典案例</h1>
        <h></h>
        <div class='yiminMain'>
            <div class='ban' id='sucB'>
                <span>为您提供国际化至尊生活</span>
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
                        <p>还没有案例哦～</p>     
                    </div>
                   <ul class='navListUl' v-else='noData'>
                         <li class='navListLi' v-for="item in list">
                            <div class='fl navLiImgB'>
                                <img :src='item.httpPath' @click="checkDetile(item.newsId)" class='pointer'/>
                            </div>
                            <div class='fl dataList yindataList dataList2' style='min-width: 600px;width:100%;'>
                                 <div style='height:163px;'>
                                    <p class='name pointer' @click="checkDetile(item.newsId)">{{title(item.title)}}</p>
                                    <p class='proc deletPic' v-html='item.digest' style="height:47px;"></p>
                                 </div>
                                <!-- <p class='type'><i></i>签证类型：{{item.certType}}</p>
                                <p class='type'><i></i>办理周期：{{item.cycle}}</p> -->
                                <P><span class='date'>{{item.newsDate}}</span><span class='leisp'>{{item.labelName}}</span><span class='leisp'>{{item.countryName}}</span></P>
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
export default {
    name:'suc',
     metaInfo: {
        title: '移民案例，移民成功案例_唐仁国际',
      meta: [{                 // set meta
        name: 'description',
        content: '唐仁国际是大唐财富旗下投资移民与家庭规划高端品牌，为客户提供尊享、私密、专业的海外规划服务。为有全球化需求的高净值人群提供安全、可靠的海外身份及财富管理解决方案。业务涵盖：希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，澳洲移民，欧洲移民，海外房产，海外教育等。移民去哪儿？来唐仁国际尊享专业移民顾问服务！'
      },{                 // set meta
        name: 'keyWords',
        content: '移民案例，移民成功案例，移民经典案例，唐仁国际'
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
        getCountry:function(){
            var that=this;
            var obj={"BEGIN_NUM":"1","CHANNEL":"1","END_NUM":"","TYPE":"5"}
            axios.post('/trpch/trcrm/country/queryCountryList',obj)
            .then(res=>{
                var data=res.data;
                //console.log(data)
                if(data.isSuccess==1){
                    that.countryList=data.list;
                    
                }     
            })
        },
        subTime:function(str){
            return str.substr(5,2)+'月'+str.substr(8,2)+'日 '+str.substr(11,5);
        },
        title:function(str){
            if(str.length>44){
                return str.substr(0,44)+'......'
            }else{
                return str;
            }
        },
        getlist:function(id,pageNo){
             var that=this;
             that.loading=that.$loading(that.options);
                var obj={"channel":"1","flag":"2","country":id,"pageNo":pageNo,"pageSize":that.pageSize,"typeId":"2"}
                console.log(obj);
                axios.post('/trpch/trcrm/news/queryNewsList',obj)
                .then(res=>{
                    var data=res.data;
                    console.log(data)
                    if(data.isSuccess==1){
                       that.loading.close();
                       that.list=data.list;
                       if(that.list.length==0){
                           that.totalCount=1;
                           that.noData=true;
                           that.pageNum=1;
                       }else{
                           that.totalCount=data.totalNum;
                           that.noData=false;
                       }
                    //     setTimeout(function(){
                    //        $('.navT').height($('.navList').height()+71);
                    //    },300) 
                     setTimeout(function(){
                         var navH=$('.navT').height();
                           var listH=$('.navListUl').height()+70
                           console.log($('.navListUl').height())
                         $('.yiminListBox').height($('.navListUl').height()+70);
                        //    var navH=$('.navT').height();
                        //    var listH=$('.navList').height()
                        //   // alert(navH<(listH+70))
                        //    if(navH<(listH+70)){
                        //         $('.navT').height($('.navList').height()+71);
                        //    }else{
                        //        $('.navList').height(navH-70)
                           //}
                           
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
             window.open(that.Host+'sucdet?id='+id)
           // window.location=that.Host+'sucdet?id='+id;
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
#sucB{
    background-image: url(img/sucbanner.png);
}
</style>

