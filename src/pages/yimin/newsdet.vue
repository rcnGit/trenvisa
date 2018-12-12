<template>
    <div class='yimin activedet'>
        <h></h>
        <div class='yiminMain'>
            <div class='ban' id='newsB'></div>
           <div class='yiminDetBox'>
               <div class='w1200 posiRle' v-for='item in itemInfoArr'>
                   <div class='yiminDTop shadow fl' style='min-height:810px;width:810px;'>
                       <div class='topHist'><span @click='toNews()'>新闻中心</span>><span>资讯详情</span></div>
                       <div class='lunText' style='width:100%;'>
                           <p class='tit'>{{item.title}}</p>
                           <P class='dataList2'><span class='date'>{{item.newsDate}}</span><span class='leisp'>{{item.labelName}}</span><span class='leisp'>{{item.countryName}}</span></P>
                           <div style="margin-top:20px;" v-html="item.newsCont"></div>
                       </div>
                   </div>
                   <div class='fr rightD'>
                        <!-- <div class='shadow rightTop'>
                            <p class='titp'><img src='./img/tui.png' width='20'/>推荐项目</p>
                            <div class='itemBox'  v-for='item in rightItem'>
                                <img src='./img/hWImg2.png' width='100%' height='100%'/>
                                <div class='ab_text'>
                                    <p class='tit_item'>{{item.itemTitle}}</p>
                                    <button class='checkItDet btnHoverZ' :itemId='item.itemId' @click='checkDetile(item.itemId)'>查看项目详情</button>
                                </div>
                            </div>
                        </div> -->
                         <div class='shadow rightCenter'>
                              <p class='xiangTop'><img src='./img/xiang_zixun.png' width='20'/>相关咨询</p>
                              <ul class='xiangUl'>
                                  <li v-for='item in rightnew'>
                                      <p class='xiangTit'>{{item.title}}</p>
                                      <p class='date'>{{item.newsDate}}</p>
                                  </li>
                              </ul>
                        </div>
                        <div class='shadow rightBottom'>
                            <p class='wxTit'><img src='./img/wx.png' width='20'/>官方微信</p>
                            <div style="height:137px;">
                                 <img src='../../../static/img/wx.png' style='display:block;width:80%;margin:0 auto;'/>
                            </div>
                            <p class='p1' style='text-align:center;'>关注唐仁国际微信公众号</p>
                            <p class='p1' style='text-align:center;'>移民动态实时掌握</p>
                        </div>
                   </div>

                   
                  
               </div>
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
export default {
    name:'yimin',
    data:function(){
        return{
            bgList:['./img/hwImg2.png','./img/hwImg2.png'],
            id:'',//项目Id
            itemInfoArr:[],
            fileList:[],
            newIp:'',//用户IP
            rightItem:[],
            rightnew:[],
            flag:'',
            }
    },
    components:{sidebar,appointment,f,h},
    methods:{
        toNews:function(){
            var that=this;
            window.location=that.Host+'news'
        },
        getInfo:function(id){
            var that=this;
            var obj={"NEWS_ID":id,"CHANNEL":"1","NEWS_IP":that.newIp}
           ///{"CHANNEL":"1","NEWS_ID":"1","NEWS_IP":"172.16.6.25"}
            axios.post('/trpch/trcrm/news/queryNewsInfo',obj)
            .then(res=>{
                var data=res.data;
               // console.log(data);
                if(data.isSuccess==1){
                   var itemInfo=data.newsinfo;
                   that.itemInfoArr.push(itemInfo);
                    that.fileList=data.fileList;
                }     
            })
        },
        getItem:function(id){
             var that=this;
            var obj={"newsId":id,"channel":"1","type":'2'}
             axios.post('/trpch/trcrm/news/queryNewsAndCountry',obj)
            .then(res=>{
                var data=res.data;
                console.log(data);
                if(data.isSuccess==1){
                   that.rightItem=data.itemList;
                   that.rightnew=data.list;
                   that.flag=data.flag;
                }     
            })
        },
        checkDetile:function(id){
             var that=this;
             var itemName=''
             var type=that.flag;
             if(type==1){
                 itemName='yimindet';
             }else if(type==2){
                  itemName='liuxuedet';
             }else if(type==3){
                 itemName='haiWdet';
             }
            window.location=that.Host+itemName+'?id='+id;
        }
    },
    created:function(){
        var that=this;
        that.id=that.$route.query.id;
       var location='"'+window.location+'"';
       var loArr=location.split(':');
       that.newIp=loArr[1].substr(2,loArr[1].length);
       
        if(!that.id==false){
           that.getInfo(that.id)//获取详情信息
           that.getItem(that.id)//获取右侧
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
    button.el-carousel__arrow{
        display: none;
    }
    .el-carousel__button{
        width:10px;
        height:10px;
        border-radius: 100%;
    }

    .activedet .lunText{
       
    }
    .activedet .tit{
        margin-bottom:20px;
         min-height:50px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        white-space:normal;
        padding-top: 20px;
    }
     .activedet .yuyueP{
        margin-top:42px;
    }
    #newsB{
    background-image: url(img/newsbanner.jpg);
}
</style>

