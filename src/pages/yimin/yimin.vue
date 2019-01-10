<template>
    <div class='yimin' >
        <h1 style="display:none!important;">{{metaH1}}</h1>
        <h></h>
        <div class='yiminMain'>
            <div class='ban' id='yiminB'>
                <span>全球身份轻松定制</span>
            </div>
           <div class='yiminListBox shadow'>
               <div class='fl navT'>
                   <ul class="NaVul">
                       <li class='active' @click="navClick('all',$event)" countryId=''><span>全部</span><img src='./img/fxL.png'/></li>
                       <li  @click="navClick(index,$event)" v-for='(item,index) in countryList' :countryId='item.countryId' name='123'><span>{{item.countryName}}</span><img src='./img/fxL.png'/></li>
                       
                   </ul>
               </div>
               <div class='navList fl'>
                   <ul class='navListUl' >
                       <!-- <div class='cityTop' v-show='cityShow'>
                            <span class='city active' @click="cityClick('',$event)">全部</span>
                            <span class='city' v-for='(item,index) in cityList' @click="cityClick(item.city,$event)">{{item.city}}</span>
                        </div> -->
                        <div class='noData1' v-if="noData">
                            <img src='./img/no1.png'/>
                            <p>还没有项目哦～</p>     
                        </div>
                         <div v-else='noData'>
                             <li class='navListLi' v-for="item in list">
                                <div class='fl navLiImgB'>
                                    <img :src='item.httpPath' class='pointer' @click="checkDetile(item.itemId)"/>
                                    <span class='picab'>{{item.itemType}}</span>
                                </div>
                                <div class='fl dataList yindataList'>
                                    <p class='name pointer' @click="checkDetile(item.itemId)">{{item.itemTitle}}</p>
                                    <p class='proc deletPic' style='margin-bottom:61px!important;'>{{item.lightspot}}</p>
                                    <p class='type'><i></i>签证类型：{{item.certType}}</p>
                                    <p class='type'><i></i>办理周期：{{item.cycle}}</p>
                                    
                                </div>
                                <div class='yiTatol' style='padding-top: 10px;'>
                                     <div style='height:150px;'>
                                     <p style='font-size:30px;color:rgba(176,154,125,1);margin-bottom:10px;'  v-if='!item.amountMaxSum==false'>￥{{item.amountSum}}-{{item.amountMaxSum}}万<span style='font-size:20px;'></span></p>
                                     <p style='font-size:30px;color:rgba(176,154,125,1);margin-bottom:10px;' v-else>￥{{item.amountSum}}万<span style='font-size:20px;'></span></p>
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
                         </div>
                       
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
    name:'yimin',
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
            keyWords:'移民，希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，移民去哪儿',
            metaH1:'移民，希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民',
            countryName:'移民项目',//meta当前选中的国家
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
      metaInfo:function(){
          return{
              title: this.countryName+'，申请流程，申请条件，费用价格_唐仁国际',
                meta: [{                 // set meta
                    name: 'description',
                    content: '唐仁国际是大唐财富旗下投资移民与家庭规划高端品牌，为客户提供尊享、私密、专业的海外规划服务。为有全球化需求的高净值人群提供安全、可靠的海外身份及财富管理解决方案。业务涵盖：希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，澳洲移民，欧洲移民，海外房产，海外教育等。移民去哪儿？来唐仁国际尊享专业移民顾问服务！'
                },{                 // set meta
                    name: 'keyWords',
                    content: this.keyWords
                }]
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
                var obj={"BEGIN_NUM":"1","CHANNEL":"1","END_NUM":"","TYPE":"1"}
                axios.post('/trpch/trcrm/country/queryCountryList',obj)
                .then(res=>{
                    var data=res.data;
                    //console.log(data)
                    if(data.isSuccess==1){
                        that.countryList=data.list;
                        //国家
                        var countryName=decodeURIComponent(that.$route.query.countryName);
                        if(!countryName==false){
                            that.countryName=countryName+'移民';
                            that.metaH1=countryName+'移民，'+countryName+'移民政策，'+countryName+'移民条件，'+countryName+'移民办理，'+countryName+'移民项目'
                            that.keyWords=countryName+'移民，'+countryName+'移民政策，'+countryName+'移民条件，'+countryName+'移民办理，'+countryName+'移民项目'
                        }
                       var countryBool=false;
                        setTimeout(function(){
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
                        
                    }     
                })
        },
        // getCity:function(id){
        //      var that=this;
        //     var obj={"COUNTRY_ID":id,"CHANNEL":"1"};
        //     console.log(obj)
        //     axios.post('/trpch/trcrm/country/queryCityList',obj)
        //         .then(res=>{
        //             var data=res.data;
        //             //console.log(data)
        //             if(data.isSuccess==1){
        //                 that.cityList=data.list;
                        
        //             }     
        //         })
        // },
        
        getlist:function(id,pageNo){
             var that=this;
              that.loading=that.$loading(that.options);
                var obj={"channel":"1","flag":"1","country":id,"pageNo":pageNo,"pageSize":that.pageSize}
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
                that.metaH1='移民，希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，移民去哪儿';
                that.keyWords='移民，希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，移民去哪儿';
                that.countryName='移民项目';
            }else{
                that.countryName=countryName+'移民';
                that.metaH1=countryName+'移民，'+countryName+'移民政策，'+countryName+'移民条件，'+countryName+'移民办理，'+countryName+'移民项目'
                that.keyWords=countryName+'移民，'+countryName+'移民政策，'+countryName+'移民条件，'+countryName+'移民办理，'+countryName+'移民项目'
            }
           
          
            var countryid=el.getAttribute('countryid');
            $('.NaVul li').removeClass('active');
            el.className='active';
            //alert(countryid)
            if(index=='all'){
                that.countryid='';
                that.cityShow=false;
                that.getlist('',1);
                return;
            }else{
                that.countryid=countryid;
               // that.getCity(countryid);
                that.getlist(countryid,1)
                //that.cityShow=true;
                
            }
        },
        // cityClick:function(city,event){
        //      var that=this;
        //      var el = event.currentTarget;
        //      that.thiscity=city;
        //      $('.cityTop span').removeClass('active');
        //      el.className=el.className+' active'
        //     var countryid=that.countryid;
        //     that.getlist(countryid,city,1)
        // },
        checkDetile:function(id){
            var that=this;
             window.open(that.Host+'yimindet?id='+id)
            //window.location=that.Host+'yimindet?id='+id;
        }
    },
    created:function(){
        var that=this;
       that.getCountry()//获取国家列表
       
      
       
    }
}
</script>
<style>
 #yiminB{
    background-image: url(img/yiminbanner.jpg);
} 
.picab{
    min-width:58px;
    height:32px;
    background-color:rgba(0,0,0,0.5);
    position: absolute;
    left:0;
    top:10px!important;
    line-height:32px;
    text-align: center;
    font-size: 14px;
    color:#fff;
    padding:0 10px;
}
</style>

