<template>
    <div class='sidebar'>
        <div class='ui-sidebar'>
            <a class='ui-sidebar-block feedback'>
               <div class='slidLab slidLab_Tel'>
                   <!-- <p class='p1'>010-52705435</p>
                   <p class='p2'>(8:30-17:30)</p> -->
               </div>
            </a>
            <a class='ui-sidebar-block yuyue' @click="toAppont()"></a>
            <a class='ui-sidebar-block yimin' @click="tonews()"></a>
            <a class='ui-sidebar-block wx'>
                <div class='slidLab slidLab_ma'>
                     <p style='line-height:36px;padding-top: 5px;font-size:14px;font-family:PingFang-SC-Medium;font-weight:500;color:#fff;text-align:center;'>扫描二维码关注</p>
                     <img src='../../../static/img/wx.png' />
                     </div>
            </a>
            <a class='ui-sidebar-block service' @click="goTop()"></a>
            <a class='ui-sidebar-block backtop2' v-show="toT" @click="goTop()" id='backTop' style='opacity:0'></a>
             
             
              <!-- <a class='ui-sidebar-block'></a> -->
         </div>
         <appointment  ref='c1'></appointment>
    </div>
</template>

<script>
import axios from 'axios'
import appointment from '../../components/appointment/appointmentCe.vue'
export default {
    name:'sidebar',
    data:function(){
        return{
            toT:true,
            ifShow:true,
        }
    },
    components:{appointment},
    methods:{
         toAppont:function(){
            var that=this;
            that.$refs.c1.toShow('','',that.ifShow,true);
        },
        tonews:function(){
            var that=this;
            window.location=that.Host+'news';
        },
         getCountry:function(){
            var that=this;
            var obj={"BEGIN_NUM":"1","CHANNEL":"1","END_NUM":"1","TYPE":"3"}
            axios.post('/trpch/trcrm/country/queryCountryList',obj)
            .then(res=>{
                var data=res.data;
                if(data.isSuccess==1){
                    that.countryList=data.list;
                    //console.log('=====');
                    //console.log(that.countryList);
                }     
            })
        },
         toscroll:function(){
             var that=this;
             window.addEventListener('scroll',function(){ 
                if(document.documentElement.scrollTop>900){
                    //that.toT=true;
                    $('#backTop').css('opacity','1')
                   // $.res.backTop.style.opacity=1;
                }else{
                    //that.toT=false;
                      //$.res.backTop.style.opacity=0;
                       $('#backTop').css('opacity','0')
                }
               
            })
        },
        goTop () {
            let self = this
            self.timer = setInterval(function () {
            let osTop = document.documentElement.scrollTop || document.body.scrollTop
            let ispeed = Math.floor(-osTop / 5)
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
            self.isTop = true
            if (osTop === 0) {
            clearInterval(self.timer)
            }
            }, 50)
            }
    },
    created:function(){
        var that=this;
        that.toscroll();
    }
}
</script>
<style>
.slidLab_Tel{
    background:url(img/bg_tel.png) no-repeat;
    width:173px;
    height:77px;
    background-size: cover;
    text-align: center;
}
.slidLab_Tel .p1{
    font-size:16px;
    font-family:ArialMT;
    font-weight:400;
    color:rgba(0,0,0,1);
    padding-top:14px;
    margin-bottom:5px;
}
.slidLab_Tel .p2{
    font-size:13px;
    font-family:Adobe Heiti Std R;
    font-weight:normal;
    color:rgba(0,0,0,1);
}
.slidLab_ma{
    background:url(img/right_ewm.png) no-repeat;
    width:173px;
    height:196px;
    background-size: cover;
    text-align: center;
    top:-65px!important;
}
.ui-sidebar{
    bottom:200px;
}
.slidLab_ma img{
    display: block;
    width:80%;
    margin:0 auto;
}
</style>

