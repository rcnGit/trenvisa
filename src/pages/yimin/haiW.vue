<template>
    <div class='haiW'>
        <h1 style="display:none!important;">{{metaH1}}</h1>
        <h></h>
        <div class='yiminMain'>
            <div class='ban' id='haiWB'>
                <span>精选全球优质房产</span>
            </div>
           <div class='yiminListBox shadow'>
               <div class='fl navT'>
                   <ul class="NaVul">
                       <li class='active' @click="navClick('all',$event)" countryId=''><span>全部</span><img src='./img/fxL.png'/></li>
                       <li  @click="navClick(index,$event)" v-for='(item,index) in countryList' :countryId='item.countryId' name='123'><span>{{item.countryName}}</span><img src='./img/fxL.png'/></li>
                       
                   </ul>
               </div>
               <div class='navList fl'>
                   <ul class='navListUl'>
                       <div class='cityTop cityUl' v-show='cityShow'>
                            <span class='city active' @click="cityClick('',$event)">全部</span>
                            <span class='city' v-for='(item,index) in cityList' @click="cityClick(item.cityId,$event)" :cityId='item.cityId'>{{item.city}}</span>
                        </div>
                        <div class='noData1' v-if="noData">
                            <img src='./img/no1.png'/>
                            <p>还没有项目哦～</p>
                                 
                        </div>
                         <div v-else='noData'>
                             <li class='navListLi' v-for="item in list">
                                <div class='fl navLiImgB'>
                                    <img :src='item.httpPath'  @click="checkDetile(item.itemId)" class='pointer'/>
                                   
                                </div>
                                <div class='fl dataList haidataList'>
                                    <p class='name pointer'  @click="checkDetile(item.itemId)">{{item.itemTitle}}</p>
                                    <p class='proc deletPic'>{{item.lightspot}}</p>
                                    <p class='type' v-if='!item.structurMaxArea==false'><i></i>{{item.realEstate}}&nbsp;|&nbsp;{{item.structurArea}}-{{item.structurMaxArea}}m²&nbsp;|&nbsp;{{subTime(item.payDate)}}交房&nbsp;|&nbsp;{{item.equityDeclare}}</p>
                                     <p class='type' v-else><i></i>{{item.realEstate}}&nbsp;|&nbsp;{{item.structurArea}}m²&nbsp;|&nbsp;{{subTime(item.payDate)}}交房&nbsp;|&nbsp;{{item.equityDeclare}}</p>
                                    
                                    <p class='type' v-if='!item.returnMaxRate==false'><i></i>年均租金回报{{item.returnRate}}-{{item.returnMaxRate}}%&nbsp;|&nbsp;首付比例{{item.paymentRate}}%</p>
                                    <p class='type' v-else><i></i>年均租金回报{{item.returnRate}}%&nbsp;|&nbsp;首付比例{{item.paymentRate}}%</p>
                                    <p class='type'><i></i>{{item.nation}} · {{item.city}}</p>
                                </div>
                                <div class='fr tir dataList yiTatol' style='padding-top: 10px;'>
                                    <div style='height:150px;padding-right:5px;'>
                                     <p style='font-size:30px;color:rgba(176,154,125,1);margin-bottom: 10px;' v-if='!item.amountMaxSum'>¥{{item.amountSum}}万<span style='font-size:20px;'></span></p><!-- amountSum -->
                                    <p style='font-size:30px;color:rgba(176,154,125,1);margin-bottom: 10px;' v-else>¥{{item.amountSum}}-{{item.amountMaxSum}}万<span style='font-size:20px;'></span></p><!-- amountSum -->
                                    <!-- <p style='font-size:14px;color:rgba(102,102,102,1);margin:15px 0 56px;'>{{item.unitCost}}万元／平方米</p> -->
                                    <p style='font-size:14px;color:rgba(102,102,102,1);margin-bottom:6px;'>{{item.foreignCurrency}}</p>
                                     <p style='font-size:14px;color:rgba(102,102,102,1);margin-bottom:6px;'>房产总价</p>
                                    </div>
                                    <p><span class='checkDet btnHoverZ' :itemId='item.itemId' @click="checkDetile(item.itemId)">查看详情</span></p>
                                    
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
export default {
    name:'haiW',
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
            getcitynum:0,
            keyWords:'海外房产，海外房产公司，泰国房产，美国房产，澳洲房产，欧洲房产，唐仁国际',
            metaH1:'海外房产，海外房产公司，泰国房产，美国房产，澳洲房产，欧洲房产',
            metaTitle:'海外房产，海外房产公司，海外置业，国外购房_唐仁国际',
            metadescription:'唐仁国际是大唐财富旗下投资移民与家庭规划高端品牌，为客户提供尊享、私密、专业的海外规划服务。为有全球化需求的高净值人群提供安全、可靠的海外身份及财富管理解决方案。业务涵盖：希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，澳洲移民，欧洲移民，海外房产，留学游学等。移民去哪儿？来唐仁国际尊享专业移民顾问服务！',
             loading:'',
             options:{
                 lock: true,
                 text: '精彩内容即将出现...',
                 spinner: 'el-icon-loading loading',
                background:'rgba(0, 0, 0, 0.7)',
             },
        }
    },
    metaInfo:function(){
        return{
            title: this.metaTitle,
            meta: [{                 // set meta
                name: 'description',
                content:this.metadescription,
            },{                 // set meta
                name: 'keyWords',
                content:this.keyWords,
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
            this.pageNum = currentPage;
            var countryid=that.countryid;
            that.getlist(countryid,that.thiscity,this.pageNum);
        },
        subTime:function(str){
            return str.substr(0,10);
        },
        getCountry:function(){
            console.log('getCountry')
             var that=this;
                var obj={"BEGIN_NUM":"1","CHANNEL":"1","END_NUM":"","TYPE":"3"}
                axios.post('/trpch/trcrm/country/queryCountryList',obj)
                .then(res=>{
                    var data=res.data;
                    console.log(data)
                    if(data.isSuccess==1){
                        that.countryList=data.list;
                         var countryName=decodeURIComponent(decodeURIComponent(that.$route.query.countryName));
                          if(!countryName==false){
                              that.metaTitle=countryName+'房产，'+countryName+'买房，'+countryName+'房价，'+countryName+'房产投资_唐仁国际';
                              that.metaH1=countryName+'房产，'+countryName+'买房，'+countryName+'房价，'+countryName+'房产投资';
                              that.keyWords=countryName+'房产，'+countryName+'买房，'+countryName+'房价，'+countryName+'房产投资，唐仁国际';
                              that.metadescription='唐仁国际是专业的海外房产服务机构，为您提供专业的'+countryName+'房产动态，'+countryName+'房源信息，'+countryName+'房价，'+countryName+'房产投资指南，'+countryName+'买房攻略等服务。'
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
                                                that.getCity(id)//获取列表
                                                return;
                                            }
                                        })
                                    }else{
                                        
                                        that.getlist('','',1)//获取列表
                                        return;
                                    }

                                    if(countryBool==false){
                                        that.getlist('','',1)//获取列表
                                        return;
                                    }
                                },300)
                    } //    
                })
        },
        getCity:function(id){
            console.log(id)
             var that=this;
            var countryId=id;
            var obj={"COUNTRY_ID":id,"CHANNEL":"1"};
            axios.post('/trpch/trcrm/country/queryCityList',obj)
                .then(res=>{
                    var data=res.data;
                    console.log(data);
                    if(data.isSuccess==1){
                        that.cityList=data.list;
                        var city=decodeURIComponent(decodeURIComponent(that.$route.query.city));
                        console.log(!city==false&&that.getcitynum==0)
                        if(!city==false&&that.getcitynum==0){
                             setTimeout(function(){
                                    $('.cityUl span').each(function(){
                                        if($(this).html()==city){
                                            
                                            $('.cityUl span').removeClass('active');
                                            $(this).addClass('active');
                                            var cityId=$(this).attr('cityId');
                                            that.cityShow=true;
                                            console.log(cityId+'传入Idbbbbbbbbbbb')
                                            that.getlist(countryId,cityId,1)//获取列表
                                            return;
                                        }
                                    })
                            },300)
                        }
                    }//1   
                })
        },
        getlist:function(id,city,pageNo){
             var that=this;
             that.loading=that.$loading(that.options);
                var obj={"channel":"1","flag":"3","country":id,"pageNo":pageNo,"pageSize":that.pageSize,"city":city}
                axios.post('/trpch/trcrm/item/queryItemList',obj)
                .then(res=>{
                    var data=res.data;
                    console.log(data)
                    //alert(data.isSuccess+'ppp')
                    if(data.isSuccess==1){
                        that.loading.close();
                       that.list=data.itemList;
                       if(that.list.length==0){
                           $('.el-pagination').css('display','none');
                           that.totalCount=1;
                           that.noData=true;
                           that.pageNum=1;
                       }else{
                          that.noData=false;
                           that.totalCount=data.totalNum;
                          
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
                           //}
                           
                       },500) 
                        
                    }     
                })
        },
        navClick:function(index,event){
            var that=this;
            that.getcitynum=1;
            var el = event.currentTarget;

            var countryName=el.getElementsByTagName('span')[0].innerHTML;
           // alert(that.metaTitle)
            if(countryName=='全部'){
                that.metaH1='海外房产，海外房产公司，泰国房产，美国房产，澳洲房产，欧洲房产';
                that.keyWords='海外房产，海外房产公司，泰国房产，美国房产，澳洲房产，欧洲房产，唐仁国际';
                that.metaTitle='海外房产，海外房产公司，海外置业，国外购房_唐仁国际';
                that.metadescription='唐仁国际是大唐财富旗下投资移民与家庭规划高端品牌，为客户提供尊享、私密、专业的海外规划服务。为有全球化需求的高净值人群提供安全、可靠的海外身份及财富管理解决方案。业务涵盖：希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，澳洲移民，欧洲移民，海外房产，留学游学等。移民去哪儿？来唐仁国际尊享专业移民顾问服务！'
            }else{
                 that.metaTitle=countryName+'房产，'+countryName+'买房，'+countryName+'房价，'+countryName+'房产投资_唐仁国际';
                that.metaH1=countryName+'房产，'+countryName+'买房，'+countryName+'房价，'+countryName+'房产投资';
                that.keyWords=countryName+'房产，'+countryName+'买房，'+countryName+'房价，'+countryName+'房产投资，唐仁国际';
                that.metadescription='唐仁国际是专业的海外房产服务机构，为您提供专业的'+countryName+'房产动态，'+countryName+'房源信息，'+countryName+'房价，'+countryName+'房产投资指南，'+countryName+'买房攻略等服务。'
            }
          
            var countryid=el.getAttribute('countryid');
            $('.NaVul li').removeClass('active');
            el.className='active';
            $('.cityTop span').removeClass('active');
            $('.cityTop span').eq(0).addClass('active');
            if(index=='all'){
                that.countryid=''
                that.cityShow=false;
                that.getlist('','',1);
                return;
            }else{
                that.countryid=countryid;
                that.getCity(countryid);
                that.getlist(countryid,'',1)
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
            console.log(city);
            that.getlist(countryid,city,1)
        },
        checkDetile:function(id){
             var that=this;
             window.open(that.Host+'haiWdet?id='+id)
           // window.location=that.Host+'haiWdet?id='+id;
        }
    },
    created:function(){
        var that=this;
         that.getCountry();
         
        window.onpopstate = function(e){
            var h=window.location.href;
            that.getCountry()//获取国家列表
        }
        
       
    }
}
// window.onpopstate = function(e){

// 　　console.log('123');

// }
</script>
<style>
#haiWB{
    background-image: url(img/haiWbanner.png);
}
</style>



