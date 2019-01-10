<template>
    <div class='yimin activedet'>
        <h1 style="display:none!important;">移民案例，移民成功案例，移民经典案例</h1>
        <h></h>
        <div class='yiminMain' style='min-height:1200px;'>
            <div class='ban' id='sucB'></div>
           <div class='yiminDetBox shadow' style='min-height:680px;'>
               <div class='w1200 posiRle' v-for='item in itemInfoArr'>
                   <div class='yiminDTop shadow fl' style='min-height:1180px;width:810px;'>
                       <div class='topHist'><span @click='toSuc()'>成功案例</span>><span>案例详情</span></div>
                       <div class='lunText' style='width:100%;'>
                           <p class='tit'>{{item.title}}</p>
                           <P class='dataList2'><span class='date'>{{item.newsDate}}</span><span class='leisp'>{{item.labelName}}</span><span class='leisp'>{{item.countryName}}</span></P>
                           <div style="margin-top:20px;" v-html='item.newsCont'></div>
                       </div>
                   </div>
                   <div class='fr rightD'>
                        <div class='shadow rightTop' id='recomItem' v-show="tuijian">
                            <p class='titp'><img src='./img/tui.png' width='20'/>推荐项目</p>
                            <div class='itemBox'  v-for='item in rightItem'>
                                <img src='./img/hWImg2.png' width='100%' height='100%'/>
                                <div class='ab_text'>
                                    <p class='tit_item'>{{item.itemTitle}}</p>
                                    <button class='checkItDet btnHoverZ' :itemId='item.itemId' @click='checkDetile(item.itemId)'>查看项目详情</button>
                                </div>
                            </div>
                        </div>
                         <div class='shadow rightCenter'>
                              <p class='xiangTop'><img src='./img/xiangguan.png' width='20'/>相关案例</p>
                              <ul class='xiangUl'>
                                  <li v-for="item in rightnew" @click="tosucdet(item.newsId)" class='pointer'>
                                      <p class='xiangTit'>{{item.title}}</p>
                                      <p class='date'>{{item.newsDate}}</p>
                                  </li>
                              </ul>
                        </div>
                        <div class='shadow rightBottom'>
                            <p class='wxTit'><img src='./img/wx.png' width='20'/>官方微信</p>
                            <div style="">
                                <img src='../../../static/img/wx.png' style='display:block;width:80%;margin:0 auto;'/>
                            </div>
                            <p class='p1' style='text-align:center;'>关注唐仁国际微信公众号</p>
                            <p class='p1'style='text-align:center;'>移民动态实时掌握</p>
                        </div>
                   </div>
                    <div style='clear:both;'></div>
                   
                  
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
    name:'sucdet',
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
            bgList:['./img/hwImg2.png','./img/hwImg2.png'],
            id:'',//项目Id
            itemInfoArr:[],
            fileList:[],
            newIp:'',//用户IP
            rightItem:[],
            rightnew:[],
            flag:'',
            tuijian:false,
            loading:this.$loading({
                lock: true,
                text: '精彩内容即将出现...',
                spinner: 'el-icon-loading loading',
                background:'rgba(0, 0, 0, 0.7)',
                }),
            }
    },
    components:{sidebar,appointment,f,h},
    methods:{
        toSuc:function(){
            var that=this;
            window.location=that.Host+'suc'
        },
        tosucdet:function(id){
            var that=this;
            window.location=that.Host+'sucdet?id='+id
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
                     that.loading.close();
                    setTimeout(function(){
                       var detH=$('.posiRle').height()-250;
                       $('.yiminDetBox').height(detH);
                   },500)
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
                    console.log(data.itemList)
                     console.log(!data.itemList==false&&data.itemList.length>0)
                if(!data.itemList==false&&data.itemList.length>0){
                   that.rightItem=data.itemList;
                   that.tuijian=true;
                }else{
                    // $('#recomItem').hide();
                    //console.log('hide'+$('#recomItem').length+$('#recomItem').css('display'));
                     that.tuijian=false;
                }               
                   that.rightnew=data.list;
                   that.flag=data.flag;
                }     
            })
        },
        subTime:function(str){
            return str.substr(5,2)+'月'+str.substr(8,2)+'日 '+str.substr(11,5);
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
            window.open(that.Host+itemName+'?id='+id);
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
    #sucB{
    background-image: url(img/sucbanner.png);
}
</style>

