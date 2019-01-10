<template>
    <div class='yimin' >
        <h1 style="display:none!important;">{{metaH1}}</h1>
        <h></h>
        <div class='yiminMain'>
            <div class='ban' id='liuxueB'>
                <span>全球名校自由选择</span>
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
                        <p>还没有项目哦～</p>     
                    </div>
                   <ul class='navListUl' v-else='noData'>
                       <!-- <div class='cityTop' v-show='cityShow'>
                            <span class='city active' @click="cityClick('',$event)">全部</span>
                            <span class='city' v-for='(item,index) in cityList' @click="cityClick(item.city,$event)">{{item.city}}</span>
                        </div> -->
                         <li class='navListLi' v-for="item in list">
                            <div class='fl navLiImgB'>
                                <img :src='item.httpPath' @click="checkDetile(item.itemId)" class='pointer'/>
                            </div>
                            <div class='fl dataList yindataList'>
                                <p class='name pointer' @click="checkDetile(item.itemId)">{{item.itemTitle}}</p>
                                <p class='proc deletPic'  style='margin-bottom:61px!important;'>{{item.lightspot}}</p>
                                <p class='type'><i></i>{{item.target}}</p>
                                <p class='type'><i></i>办理周期：{{item.cycle}}</p>
                            </div>
                            <div class='yiTatol' style='padding-top: 10px;'>
                                <div style='height:150px;padding-right: 5px;'>
                                     <p style='font-size:30px;color:rgba(176,154,125,1);margin-bottom:10px;' v-if='!item.amountMaxSum==false'>￥{{item.amountSum}}-{{item.amountMaxSum}}万</p>
                                      <p style='font-size:30px;color:rgba(176,154,125,1);margin-bottom:10px;' v-else>￥{{item.amountSum}}万</p>
                                     <p style='font-size:14px;color:rgba(102,102,102,1);margin-bottom:6px;'> {{item.foreignCurrency}}</p>
                                     <p style='font-size:14px;color:rgba(102,102,102,1);margin-bottom:6px;'>预估总费用</p>
                                </div>
                                     <span class='checkDet btnHoverZ' :itemId='item.itemId' @click="checkDetile(item.itemId)">查看详情</span>
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
    name:'liuxue',
    metaInfo:function() {
        return{
            title: this.metaTitle,
            meta: [{                 // set meta
                name: 'description',
                content: '唐仁国际是大唐财富旗下投资移民与家庭规划高端品牌，为客户提供尊享、私密、专业的海外规划服务。为有全球化需求的高净值人群提供安全、可靠的海外身份及财富管理解决方案。业务涵盖：希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，澳洲移民，欧洲移民，海外房产，海外教育等。移民去哪儿？来唐仁国际尊享专业移民顾问服务！'
            },{                 // set meta
                name: 'keyWords',
                content: this.keyWords//'留学，游学，专业出国留学中介，出国留学咨询，美国留学，澳洲留学，加拿大留学，唐仁国际'
            }]
        }
        
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
            keyWords:'留学，游学，专业出国留学中介，出国留学咨询，美国留学，澳洲留学，加拿大留学，唐仁国际',
            metaH1:'留学，游学，专业出国留学中介，出国留学咨询',
            metaTitle:'留学游学，专业出国留学中介_唐仁国际',
            //countryName:'',//meta当前选中的国家
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
        this.pageNum = currentPage;
        var countryid=that.countryid;
        that.getlist(countryid,this.pageNum);
        
        },
        getCountry:function(){
            var that=this;
            var obj={"BEGIN_NUM":"","CHANNEL":"1","END_NUM":"","TYPE":"2"}
            axios.post('/trpch/trcrm/country/queryCountryList',obj)
            .then(res=>{
                var data=res.data;
                //console.log(data)
                if(data.isSuccess==1){
                    that.countryList=data.list;
                    
                }     
            })
        },
        getCity:function(id){
             var that=this;
            var obj={"COUNTRY_ID":id,"CHANNEL":"1"};
            axios.post('/trpch/trcrm/country/queryCityList',obj)
                .then(res=>{
                    var data=res.data;
                    //console.log(data)
                    if(data.isSuccess==1){
                        that.cityList=data.list;
                    }     
                })
        },
        getlist:function(id,pageNo){
             var that=this;
              that.loading=that.$loading(that.options);
                var obj={"channel":"1","flag":"2","country":id,"pageNo":pageNo,"pageSize":that.pageSize}
                axios.post('/trpch/trcrm/item/queryItemList',obj)
                .then(res=>{
                    var data=res.data;
                    if(data.isSuccess==1){
                        that.loading.close();
                        that.list=data.itemList;
                        console.log(that.list);
                       
                       if(that.list.length==0){
                           that.totalCount=1;
                           that.noData=true;
                           that.pageNum=1;
                       }else{
                           that.totalCount=data.totalNum;
                          that.noData=false;
                       }
                    //    setTimeout(function(){
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
                        //    }
                           
                       },300) 
                        
                    }     
                })
        },
        navClick:function(index,event){
            var that=this;
            var el = event.currentTarget;
             var countryName=el.getElementsByTagName('span')[0].innerHTML;
            
            if(countryName=='全部'){
                that.metaH1='留学，游学，专业出国留学中介，出国留学咨询';
                that.keyWords='留学，游学，专业出国留学中介，出国留学咨询，美国留学，澳洲留学，加拿大留学，唐仁国际';
                that.metaTitle='留学游学，专业出国留学中介_唐仁国际'
            }else{
                 that.metaTitle=countryName+'留学，'+countryName+'游学，专业'+countryName+'留学中介_唐仁国际'
                that.metaH1=countryName+'留学，'+countryName+'游学，专业'+countryName+'留学中介';
                that.keyWords=countryName+'留学，'+countryName+'游学，'+countryName+'留学咨询，唐仁国际';
            }


            var countryid=el.getAttribute('countryid');
            $('.NaVul li').removeClass('active');
            el.className='active';
            
            if(index=='all'){
                that.countryid=''
                that.cityShow=false;
                that.getlist('',1);
                return;
            }else{
                that.countryid=countryid;
                //that.getCity(countryid);
                that.getlist(countryid,1)
                that.cityShow=true;
                
            }
        },
        cityClick:function(city,event){
             var that=this;
             var el = event.currentTarget;
             that.thiscity=city;
             $('.cityTop span').removeClass('active');
             el.className=el.className+' active'
            var countryid=that.countryid;
            that.getlist(countryid,1)
        },
        checkDetile:function(id){
             var that=this;
             window.open(that.Host+'liuxuedet?id='+id)
           // window.location=that.Host+'liuxuedet?id='+id;
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
 #liuxueB{
        background-image: url(img/liuxuebanner.png);
    }
</style>

