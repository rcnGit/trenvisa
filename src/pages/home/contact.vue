<template>
    <div class='yimin contact'>
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
                                <p class='p2'>010-52705440</p>
                            </div>
                            <div style='clear:both;'></div>
                        </div>
                        <div>
                             <img src='./img/email.png' class='fl'/>
                            <div class='fl'>
                                <p class='p1'>联系邮箱</p>
                                <p class='p2'>010-52705440</p>
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
                        <img src='./img/map.png' class='fr' style='width:100%;'/>
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

