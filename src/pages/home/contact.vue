<template>
    <div class='yimin contact'>
         <h1 style="display:none!important;">移民，希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，海外房产</h1>
        <h></h>
        <div class='yiminMain'>
            <div class='ban'>
                <span>联系我们</span>
            </div>
           <div class='yiminListBox shadow' style='min-height:474px;'>
               <div class='navList conMain' style="width:100%;min-height:474px!important;">
                <div>
                    <div class='fl con_son con_sonL'>
                        <div>
                            <img src='./img/telphone.png' class='fl'/>
                            <div class='fl'>
                                <p class='p1'>联系电话（7*24）</p>
                                <p class='p2'>010-53520719</p>
                            </div>
                            <div style='clear:both;'></div>
                        </div>
                        <div>
                             <img src='./img/email.png' class='fl'/>
                            <div class='fl'>
                                <p class='p1'>联系邮箱</p>
                                <p class='p2'>vip@datangwealth.com</p>
                            </div>
                             <div style='clear:both;'></div>
                        </div>
                        <div>
                            <img src='./img/dizhi.png' class='fl'/>
                            <div class='fl' style='width:302px;'>
                                <p class='p1'>联系地址</p>
                                <p class='p2'>北京市朝阳区建国门外大街19号国际大厦A座9层C-D室</p>
                            </div>
                             <div style='clear:both;'></div>
                        </div>
                    </div><!--con_son-->
                    <div class='fl con_son'>
                        <img src='./img/map.jpg' class='fr' style='width:100%;'/>
                    </div>
                </div>
                  
                  
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
    name:'contact',
      metaInfo: {
        title: '联系我们_唐仁国际',
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
    margin-bottom: 10px;
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

