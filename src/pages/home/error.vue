<template>
    <div class='yimin contact'>
        <h1 style="display:none!important;">移民，希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，海外房产</h1>
        <h></h>
        <div class='yiminMain'>
            <div class='ban'>
                <span>全球身份轻松定制</span>
            </div>
           <div class='yiminListBox shadow' style='min-height:474px;'>
               <div class='navList conMain' style="width:100%;">
                <img src='./img/error.png' style='display:block;margin:100px auto 0px;'/>
                <p style='color:rgba(51,51,51,1);font-size:30px;text-align:center;'>这个页面估计去了外太空~%>_<%</p>
                <p style='font-size:18px;font-weight:400;color:rgba(153,153,153,1);text-align:center;margin-top:18px;'>程序猿哥哥们真正紧急处理中 ~</p>
                  
                  <button @click='toHome()' style='cursor:pointer;width:280px;height:72px;background:rgba(176,154,125,1);border-radius:36px;text-align:center;line-height:72px;color:rgba(255,255,255,1);font-size:24px;display:block;margin:58px auto;'>返回首页</button>
               </div><!--navList-->
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
import axios from 'axios'
export default {
    name:'error',
     metaInfo: {
        title: '404页面出错了_唐仁国际',
      meta: [{                 // set meta
        name: 'description',
        content: '唐仁国际是大唐财富旗下投资移民与家庭规划高端品牌，为客户提供尊享、私密、专业的海外规划服务。为有全球化需求的高净值人群提供安全、可靠的海外身份及财富管理解决方案。业务涵盖：希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，澳洲移民，欧洲移民，海外房产，海外教育等。移民去哪儿？来唐仁国际尊享专业移民顾问服务！'
      },{                 // set meta
        name: 'keyWords',
        content: '移民，希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，海外房产，唐仁国际，大唐财富'
      }]
    },
    data:function(){
        return{
            pageSize:1,
            pageNum:1,
            totalCount:4,
            country:[],//获取国家
            list:[],//列表长度
            allList:[],//全部列表数据
        }
    },
    components:{h,f,sidebar},
    methods:{
      toHome:function(){
          var that=this;
          window.location=that.Host;
      }
       
       
    },
    created:function(){
        var that=this;
        that.getlist()//获取列表
    }
}
</script>
<style>
.navListUl{
    display: none;
}
.navListUl:first-child{
    display: block;
}
.contact .ban{
 background-image: url(img/contactbg.png);
}
.conMain{
    box-sizing: border-box;
    padding:30px;
}
.conMain .con_son{
    width:50%;
    height:100%;
    box-sizing: border-box;
}
.con_sonL img{
    margin:30px 30px 30px 70px;
}
.con_sonL .p1{
    font-size:18px;
    font-family:MicrosoftYaHei;
    color:rgba(102,102,102,1);
    margin-bottom: 16px;
    margin-top:30px;
}
.con_sonL .p2{
    font-size:24px;
    font-family:MicrosoftYaHei;
    /* font-weight:bold; */
    color:#000;
    line-height: 36px;
}
</style>

