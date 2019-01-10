<template>
    <div  class='header'>
        <!--topbar-->
        <div class="topbar" id="topbar" sup-type="topbar" ref='showBrand1'>
            <div class="grid-1200 topbar-wrap clearfix ">
                <div class="topbar-left">
                    <ul class="topmenu fl topmenu1">
                        <li class="topmenu-item">
                           <a href="javascript:void(0);" style="cursor: default;"> <img src='./img/time.png' style='vertical-align: -2px;margin-right:5px;'/>希腊 <span>{{subTime(Athens)}} </span>| 纽约 <span>{{subTime(NewYork)}}</span> | 悉尼 <span>{{subTime(Sydney)}}</span></a>
                        </li>
                    </ul>
                </div>
                <div class="topbar-right">
                    <ul class="topmenu fl">
                        <li class="topmenu-item topmenu-userinfo">
                            <a @click='Menu("news","news")' :class="n1">新闻中心</a>
                        </li>
                        <li class="topmenu-item">
                            <a href="javascript:void(0);">|</a>
                        </li>
                      <li class="topmenu-item">
                            <a href="javascript:void(0);" rel="nofollow" clstag="" class='topgwA'>官方微信<div class='gwBox'><p>扫描二维码关注</p><img src='../../../static/img/wx.png'/></div></a>
                        </li>
                        <li class="topmenu-item">
                            <a href="javascript:void(0);">|</a>
                        </li>
                        <li class="topmenu-item">
                            <a @click='Menu("contact","cont")'  :class="n2">联系我们</a>
                        </li>
                        <li class="topmenu-item">
                            <a href="javascript:void(0);">|</a>
                        </li>
                        <li class="topmenu-item">
                            <a href="//www.datangwealth.com/" target="_blank">大唐财富官网</a>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </div>
        <!--topbar end-->
        <!--main-nav-->
        <div class="main-nav header-nav-wrap" sup-type="headerNav" id='menu'> 
            <div class="nav-wrap clearfix header-nav-wrap-inner">
              <div class="grid-1200">
                <div class="main-nav-logo fl clearfix">
                    <a  clstag="" class="fl" @click='Menu("")'>
                        <img src="./img/logo-x2.png" width="380" height="37" alt="">
                    </a>
                </div>
                <div class="supply-nav fl">
                    <ul class="clearfix">
                        <li class="fl">
                            <a  @click='Menu("","")' class='menuA_home menuA' :class="n3">首页</a>
                        </li>
                         <li class="fl brand-li" @mouseenter='menHover("",$event)'  @mouseleave='menOut("",$event)'>
                            <a  @click='Menu("yimin","yimin")' :class="n8">移民国家</a>
                            <div class="brand-nav">
                                <div class="brand clearfix">
                                    <div class="fl brand-list clearfix">
                                        <div class="brand-item fl"  v-for="(itemList,index) in listYi" v-if='index<5'>
                                            <div class="brand-tit fl"><i></i><strong>{{itemList.label}}</strong></div>
                                            <div class="brand-info fl" v-for="(item,index) in itemList.labelExtEntity" v-if='index<20'>
                                               <a :href='item.httpPath' target="_blank">{{item.country}}</a>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div class="fr brand-img ">
                                        <img src="picture/brand.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="fl brand-li" @mouseenter='menHover("",$event)'  @mouseleave='menOut("",$event)'>
                            <a  @click='Menu("haiW","haiW")' :class="n9">海外房产</a>
                            <div class="brand-nav">
                                <div class="brand clearfix">
                                    <div class="fl brand-list clearfix">
                                        <div class="brand-item fl"  v-for="(itemList,index) in listHai" v-if='index<5'>
                                            <div class="brand-tit fl"><i></i><strong>{{itemList.countryName}}</strong></div>
                                            <div class="brand-info fl" v-for="(item,index) in itemList.cityEntity" v-if='index<20'>
                                                <a @click='Menu("haiW","haiW",item.city,itemList.countryName)'>{{item.city}}</a>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div class="fr brand-img ">
                                        <img src="picture/brand.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </li>
                          <!-- ref='hoverObj' -->
                        <!-- <li class="fl brand-li" @mouseenter='menHover("",$event)'  @mouseout='menOut("",$event)' >
                            <a   @click='Menu("yimin","yimin")' :class="n8">移民国家</a>
                            <div class="brand-nav">
                                <div class="brand clearfix">
                                    <div class="fl brand-list clearfix" >
                                        <div class="brand-item clearfix" v-for="(itemList,index) in listYi" v-if='index<5'>
                                            <div class="brand-tit fl"><i></i><strong>{{itemList.label}}</strong></div>
                                            <div class="brand-info fl" v-for="(item,index) in itemList.labelExtEntity" v-if='index<20'>
                                                <a :href='item.httpPath' target="_blank">{{item.country}}</a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="fr brand-img ">
                                        <img src="picture/brand.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </li> -->
                        <li class="fl">
                            <a @click='Menu("liuxue","liu")' :class="n4">海外教育</a>
                        </li>
                        <li class="fl">
                            <a  @click='Menu("active","active")' class='menuA_active menuA' :class="n5">尊享活动</a>
                        </li>
                        <li class="fl">
                            <a href="javascript:void(0);" @click='Menu("suc","suc")' class='menuA_suc menuA' :class="n6">成功案例</a>
                        </li>
                        <li class="fl">
                            <a href="javascript:void(0);" @click='Menu("about","about")' class='menuA_about menuA' :class="n7">关于唐仁</a>
                        </li>
                    </ul>
                </div>
                <!-- <div class="main-nav-supply-wrap fr">
                    <a href="//loan.jd.com/home/settle.htm">
                        <i></i>
                        <span>我的供应链</span>
                    </a>
                </div> -->
              </div>
            </div>
        </div>
    <!--main-nav end-->
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import { setInterval } from 'timers';
export default {
    name:'h',
    data:function(){
        return{
            menActive:'',
            navid:'',
            listYi:'',
            listHai:'',
            over:true,
            NewYork:'',//纽约时间
            Athens:'',//希腊时间
            Sydney:'',//悉尼时间
            navtitle:'',
            n1: '',
            n2: '',
            n3: '',
            n4: '',
            n5: '',
            n6: '',
            n7: '',
            n8: '',
            n9: ''
        }
       
    },
    watch:{
        $router(to, form) {
         //  alert(to.path)
            //console.log(to.path)
            
        }
    },
    methods:{
        subTime:function(str){
            return str.substr(0,16);
        },
        toscroll:function(){
             var that=this;
             window.addEventListener('scroll',function(){ 
                if(document.documentElement.scrollTop>300){
                   $('#menu').addClass('hn-fixed')
                }else{
                    $('#menu').removeClass('hn-fixed')
                }
               
            })
        },
        menHover:function(msg, event){
            var that=this
            if(that.over){
                var el = event.currentTarget;
                el.className='fl brand-li cur';
                document.getElementById('topbar').className='topbar showBrand';
               
                document.getElementById('menu').className=document.getElementById('menu').className+' showBrand ';
                that.over=false;
            }
            
          
        },
        menOut:function(msg, event){
            var that=this
            that.over=true
            var el = event.currentTarget;
            el.className='fl brand-li';
             document.getElementById('topbar').className='topbar';
            document.getElementById('menu').className=document.getElementById('menu').className.replace(/showBrand/,'');
        },
        toActive:function(str){
            $('.menuA').css('color','#CDD1D8!important');
            $('.'+menuA_active+'').css('color','#fff!important');
        },
        getYiMinNav:function(){
           var that=this;
           var obj={"TYPE":"1","CHANNEL":"1"}
            axios.post('/trpch/trcrm/label/queryLableAllList',obj)
                .then(res=>{
                    //console.log(res.data)
                    if(res.data.isSuccess==1){
                        that.listYi=res.data.list; 
                    }
                           
                })
            },
        getHaiWNav:function(){
           var that=this;
           var obj={"TYPE":"3","CHANNEL":"1"}
            axios.post('/trpch/trcrm/country/queryCountryAllList',obj)
                .then(res=>{
                    if(res.data.isSuccess==1){
                        that.listHai=res.data.list; 
                        //console.log(that.listHai);
                    }
                           
                })
            },
        Menu:function(str,name,city,countryName){
            var that=this;
             
           //console.log(str+'==='+name+'==='+city+'==='+countryName);
            // if(!id==false){
            //     window.location=that.Host+str+'?id='+id;
            // }else{
            //      window.location=that.Host+str;
                
            //      //window.location.href='https://www.baidu.com/'
            // }
            // if(!name==false){
            //     window.location=that.Host+str+'?name='+name;
            // }else{
            //      window.location=that.Host+str;
                
            //      //window.location.href='https://www.baidu.com/'
            // }
            that.navtitle = str
           
            var cityn=encodeURIComponent(city);
            
            var countryName=encodeURIComponent(countryName);
             
            if(countryName=='undefined'){
                countryName=''
            }
            if(cityn=='undefined'){
                cityn=''
            }
           //console.log(that.Host+str+'?name='+name+'&city='+cityn+'&countryName='+countryName)
            window.location.href=that.Host+str+'?name='+name+'&city='+cityn+'&countryName='+countryName;
        //    that.$router.push({
        //     path:'/'+that.navtitle,
        //     name:that.navtitle,
        //     query:{  
        //         name: name,
        //         city:city,
        //         countryName:countryName,
        //      }
        //     })
           
        },
        getTime:function(){
           var that=this;
            axios.post('/trpch/trcrm/time/queryAreaTime',{})
                .then(res=>{
                    //console.log(res.data.isSuccess)
                    if(res.data.isSuccess==1){
                       that.NewYork=res.data.NewYork
                       that.Athens=res.data.Athens
                       that.Sydney=res.data.Sydney
                    }
                           
                })
        },
        getNavname:function(){
            let navname = this.$route.query.name
            // if(navname == 'news'){
            //    // this.navlight = "navactive"
            //     this.$refs.nav.style.color = "#fff"
            // }
            //  if(navname == 'contact'){
            //     //this.navlight = "navactive"
            //     this.$refs.nav.style.color = "#fff"
            // }
            switch (navname){
                case 'news':
                    this.n1 = "navactive";
                    break;
                case 'cont':
                    this.n2 = "navactive";
                    break;
                case '':
                    this.n3 = "navactive";
                    break;
                case 'liu':
                    this.n4 = "navactive";
                    break;
                case 'active':
                    this.n5 = "navactive";
                    break;
                case 'suc':
                    this.n6 = "navactive";
                    break;
                case 'about':
                    this.n7 = "navactive";
                    break;
                 case 'yimin':
                    this.n8 = "navactive";
                    break;
                case 'haiW':
                    this.n9 = "navactive";
                    break;
            }

        },
        GetQueryString:function(param) { //param为要获取的参数名 注:获取不到是为null
            var currentUrl = window.location.href; //获取当前链接
            var arr = currentUrl.split("?");//分割域名和参数界限
            if (arr.length > 1) {
                arr = arr[1].split("&");//分割参数
                for (var i = 0; i < arr.length; i++) {
                    var tem = arr[i].split("="); //分割参数名和参数内容
                    if (tem[0] == param) {
                        return tem[1];
                    }
                }
                return null;
            }
            else {
                return null;
            }
        }
    },
    created:function(){
        //alert(location.href.split("/"))
        //alert(this.GetQueryString("name"))
        
        var that=this;
        that.getNavname()
        that.getYiMinNav();//移民二级菜单
        that.getHaiWNav()//海外二级菜单
        that.toscroll();
        that.getTime();//获取外国时间
        setInterval(function(){
            that.getTime();//获取外国时间
        },60000)
    }
}
</script>
<style>
.brand-info a{
    display: inline-block;
    float: left!important;
}
.supply-nav .brand-nav .brand .brand-item{
    width:100%;
    height:30px;
    overflow: hidden;
    margin-bottom: 10px;
}
.brand-tit strong{
    width:72px;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
}
.supply-nav .brand-nav .brand a{
    line-height: 17px;
}
.hn-fixed{
    z-index:999!important;
    position: fixed;
    top:0;
    width:100%;
    background: #25242a!important;
}
.supply-nav{
    margin-top: 9px!important;
}
.hn-fixed .main-nav, .hn-fixed .header-nav-wrap-inner{
    height: 36px!important;
    background: #25242a!important;
    top:0;
}


a.topgwA{
	position: relative;
}
a.topgwA .gwBox{
	position: absolute;
	width:166px;
	height:187px;
	background:url(img/ewm_top.png) no-repeat;
	background-size: cover;
	top:20px;
    left:-52px;
    padding-top:9px;
    display: none;
}
a.topgwA:hover .gwBox{
    display: block;
}
.gwBox p{
    font-size:14px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:#fff;
    line-height:34px;
    text-align: center;
    padding-top:5px;
}

.gwBox img{
    width:80%;
    display: block;
    margin:0 auto;
}
.navactive{
    color: #fff!important;
}
.header .supply-nav li{
     padding-bottom: 0px;
}
</style>


