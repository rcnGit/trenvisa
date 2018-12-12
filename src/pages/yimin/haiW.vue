<template>
    <div class='haiW' >
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
                            <span class='city' v-for='(item,index) in cityList' @click="cityClick(item.cityId,$event)">{{item.city}}</span>
                        </div>
                        <div class='noData1' v-if="noData">
                            <img src='./img/no1.png'/>
                            <p>还没有房产哦～</p>     
                        </div>
                         <div v-else='noData'>
                             <li class='navListLi' v-for="item in list">
                                <div class='fl navLiImgB'>
                                    <img :src='item.httpPath'  @click="checkDetile(item.itemId)" class='pointer'/>
                                </div>
                                <div class='fl dataList haidataList'>
                                    <p class='name pointer'  @click="checkDetile(item.itemId)">{{item.itemTitle}}</p>
                                    <p class='proc'>{{item.lightspot}}</p>
                                    <p class='type'><i></i>{{item.realEstate}}&nbsp;|&nbsp;{{item.structurArea}}m²&nbsp;|&nbsp;{{subTime(item.payDate)}}交房&nbsp;|&nbsp;{{item.equityDeclare}}</p>
                                    <p class='type'><i></i>年平均收益{{item.returnRate}}%&nbsp;|&nbsp;首付比例{{item.paymentRate}}%</p>
                                    <p class='type'><i></i>{{item.nation}} · {{item.city}}</p>
                                </div>
                                <div class='fr tir dataList' style='padding-top: 20px;'>
                                    <p style='font-size:36px;color:rgba(176,154,125,1);'>¥{{item.amountSum}}万</p>
                                    <p style='font-size:14px;color:rgba(102,102,102,1);margin:15px 0 56px;'>{{item.unitCost}}万元／平方米</p>
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
                                prev-text="上一页">
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
             var that=this;
                var obj={"BEGIN_NUM":"1","CHANNEL":"1","END_NUM":"","TYPE":"3"}
                axios.post('/trpch/trcrm/country/queryCountryList',obj)
                .then(res=>{
                    var data=res.data;
                    //console.log(data)
                    if(data.isSuccess==1){
                        that.countryList=data.list;
                         var countryName=decodeURIComponent(decodeURIComponent(that.$route.query.countryName));
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
                                    }

                                    if(countryBool==false){
                                        that.getlist('','',1)//获取列表
                                    }
                                },300)
                    } //    
                })
        },
        getCity:function(id){
             var that=this;
            var countryId=id;
            var obj={"COUNTRY_ID":id,"CHANNEL":"1"};
            axios.post('/trpch/trcrm/country/queryCityList',obj)
                .then(res=>{
                    var data=res.data;
                    console.log(data);
                    if(data.isSuccess==1){
                        that.cityList=data.list;
                        console.log(that.cityList);
                        var city=decodeURIComponent(decodeURIComponent(that.$route.query.city));
                        if(!city==false&&that.getcitynum==0){
                             setTimeout(function(){
                                    $('.cityUl span').each(function(){
                                        if($(this).html()==city){
                                            $('.cityUl span').removeClass('active');
                                            $(this).addClass('active');
                                            var cityId=$(this).attr('cityId');
                                            that.cityShow=true;
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
                var obj={"channel":"1","flag":"3","country":id,"pageNo":pageNo,"pageSize":that.pageSize,"city":city}
                console.log(obj);
                axios.post('/trpch/trcrm/item/queryItemList',obj)
                .then(res=>{
                    var data=res.data;
                    console.log(data)
                    if(data.isSuccess==1){
                       that.list=data.itemList;
                       if(that.list.length==0){
                           that.totalCount=1;
                           that.noData=true;
                       }else{
                           that.totalCount=data.totalNum;
                           that.noData=false;
                          
                       }
                        
                        
                    }     
                })
        },
        navClick:function(index,event){
            var that=this;
            that.getcitynum=1;
            var el = event.currentTarget;
            var countryid=el.getAttribute('countryid');
            $('.NaVul li').removeClass('active');
            el.className='active';
            $('.cityTop span').removeClass('active');
            $('.cityTop span').eq(0).addClass('active');
            if(index=='all'){
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
        that.getCountry()//获取国家列表
       // that.getlist('','',1)//获取列表
    }
}
</script>
<style>
#haiWB{
    background-image: url(img/haiWbanner.jpg);
}
</style>

