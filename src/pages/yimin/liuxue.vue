<template>
    <div class='yimin' >
        <h></h>
        <div class='yiminMain'>
            <div class='ban' id='liuxueB'>
                <span>全球名校自由选择</span>
            </div>
           <div class='yiminListBox shadow'>
               <div class='fl navT'>
                   <ul class="NaVul">
                       <li class='active' @click="navClick('all',$event)" countryId=''><span>全部</span><img src='./img/fxL.png'/></li>
                       <li  @click="navClick(index,$event)" v-for='(item,index) in countryList' :countryId='item.countryId' name='123'><span>{{item.countryName}}</span><img src='./img/fxL.png'/></li>
                       
                   </ul>
               </div>
               <div class='navList fl'>
                   <div class='noData1' v-if="noData">
                        <img src='./img/no1.png'/>
                        <p>还没有留学旅游信息哦～</p>     
                    </div>
                   <ul class='navListUl' v-else='noData'>
                       <!-- <div class='cityTop' v-show='cityShow'>
                            <span class='city active' @click="cityClick('',$event)">全部</span>
                            <span class='city' v-for='(item,index) in cityList' @click="cityClick(item.city,$event)">{{item.city}}</span>
                        </div> -->
                         <li class='navListLi' v-for="item in list">
                            <div class='fl navLiImgB'>
                                <img :src='item.httpPath' @click="checkDetile(item.itemId)" class='pointer'/>
                            </div>
                            <div class='fl dataList yindataList'>
                                <p class='name pointer' @click="checkDetile(item.itemId)">{{item.itemTitle}}</p>
                                <p class='proc'>{{item.lightspot}}</p>
                                <p class='type'><i></i>{{item.target}}</p>
                                <p class='type'><i></i>办理周期：{{item.cycle}}</p>
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
                            next-text="下一页 >"
                            prev-text="上一页">
                        </el-pagination> 
                       
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
    name:'liuxue',
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
        that.getlist(countryid,this.pageNum);
        
        },
        getCountry:function(){
            var that=this;
            var obj={"BEGIN_NUM":"","CHANNEL":"1","END_NUM":"","TYPE":"2"}
            axios.post('/trpch/trcrm/country/queryCountryList',obj)
            .then(res=>{
                var data=res.data;
                //console.log(data)
                if(data.isSuccess==1){
                    that.countryList=data.list;
                    
                }     
            })
        },
        getCity:function(id){
             var that=this;
            var obj={"COUNTRY_ID":id,"CHANNEL":"1"};
            axios.post('/trpch/trcrm/country/queryCityList',obj)
                .then(res=>{
                    var data=res.data;
                    //console.log(data)
                    if(data.isSuccess==1){
                        that.cityList=data.list;
                    }     
                })
        },
        getlist:function(id,pageNo){
             var that=this;
                var obj={"channel":"1","flag":"2","country":id,"pageNo":pageNo,"pageSize":that.pageSize}
                axios.post('/trpch/trcrm/item/queryItemList',obj)
                .then(res=>{
                    var data=res.data;
                    if(data.isSuccess==1){
                        that.list=data.itemList;
                        console.log(that.list);
                       
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
            var el = event.currentTarget;
            var countryid=el.getAttribute('countryid');
            $('.NaVul li').removeClass('active');
            el.className='active';
            
            if(index=='all'){
                that.cityShow=false;
                that.getlist('',1);
                return;
            }else{
                that.countryid=countryid;
                //that.getCity(countryid);
                that.getlist(countryid,1)
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
            that.getlist(countryid,1)
        },
        checkDetile:function(id){
             var that=this;
             window.open(that.Host+'liuxuedet?id='+id)
           // window.location=that.Host+'liuxuedet?id='+id;
        }
    },
    created:function(){
        var that=this;
        that.getCountry()//获取国家列表
        that.getlist('',1)//获取列表
    }
}
</script>
<style>
 #liuxueB{
        background-image: url(img/liuxuebanner.jpg);
    }
</style>

