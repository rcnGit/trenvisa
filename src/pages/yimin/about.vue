<template>
    <div class='yimin'>
        <h></h>
        <div class='yiminMain'>
            <div class='ban' id='aboutB'>
                <span>关于唐仁国际</span>
            </div>
           <div class='yiminListBox' style='min-height:458px;'>
               <div class='navList shadow aboutTop' style='width:100%;min-height:550px;'>
                       <img src='./img/aboutLogo.png'/>
                       <p class='aboutTit'>全球生活 · 自由选择<span></span></p>
                       <p class='aboutText'>唐仁国际咨询（北京）有限公司，作为全球移民投资领航者，是大唐财富旗下投资移民和海外生活规划高端品牌。唐仁国际秉承大唐财富“让理财更轻松 让梦<br/>想更自由”的终极使命，卓越的顾问团队为客户提供尊享、私密、专业的海外规划服务。凭借专业、综合的投资能力、强大的财富管理实力以及开创的海外项目<br/>风控机制，为有全球化需求的高净值人群提供安全、可靠的海外身份及财富管理解决方案。业务涵盖：移民、留学、海外房产及移民税务规划等海外投资的方方<br/>面面。</p>
                       <p class='aboutText'>团队成员均拥有出国服务行业十年以上从业经验，资讯充足、成绩斐然，在同行业中均享有很高声誉及知名度。共计为数千名中国高净值客户提供了出国服务解决方案，帮助怀揣出国梦想的家庭，实现“全球生活 自由选择”的人生理想。</p>
                  
               </div><!--navList-->
           </div>
           <div class='aboutCenter' >
              <div class='w1200'>
                   <p class='aboutTit'>八大优势彰显专业实力<span></span></p>
                    <div class='shili'>
                        <a href='javascript:void(0);' class='abA'>
                            <div class='shiliOne'>
                                <img src='./img/one.png'/>
                                <p class='p1'>实力雄厚</p>
                                <p class='p2'>大型财富管理集团全资子公司，</p>
                                <p class='p2'>实力强大！</p>
                            </div>
                        </a>
                        <a href='javascript:void(0);' class='abA'>
                            <div class='shiliOne'>
                                <img src='./img/two.png'/>
                                <p class='p1'>资深团队</p>
                                <p class='p2'>团队成员全部聘用出国服务行业</p>
                                <p class='p2'>资深人才！</p>
                            </div>
                        </a>
                        <a href='javascript:void(0);' class='abA'>
                            <div class='shiliOne'>
                                <img src='./img/three.png'/>
                                <p class='p1'>顶级律师</p>
                                <p class='p2'>数十位移民行业顶级律师为客户</p>
                                <p class='p2'>审案！！</p>
                            </div>
                        </a>
                        <a href='javascript:void(0);' class='abA'>
                            <div class='shiliOne'>
                                <img src='./img/four.png'/>
                                <p class='p1'>精选项目</p>
                                <p class='p2'>行业独有的风控机制，对项目进</p>
                                <p class='p2'>行检测和层层筛选！</p>
                            </div>
                        </a>
                        <a href='javascript:void(0);' class='abA'>
                            <div class='shiliOne'>
                                <img src='./img/five.png'/>
                                <p class='p1'>客户导向</p>
                                <p class='p2'>我们与客户站在一起，以服务为</p>
                                <p class='p2'>导向，将服务做到极致！</p>
                            </div>
                        </a>
                        <a href='javascript:void(0);' class='abA'>
                            <div class='shiliOne'>
                                <img src='./img/six.png'/>
                                <p class='p1'>覆盖全国</p>
                                <p class='p2'>依托集团强大的公司网络，将服</p>
                                <p class='p2'>务延伸至全国！</p>
                            </div>
                        </a>
                        <a href='javascript:void(0);' class='abA'>
                            <div class='shiliOne'>
                                <img src='./img/seven.png'/>
                                <p class='p1'>后续服务</p>
                                <p class='p2'>可为客户量身定制多种后续服务</p>
                                <p class='p2'>方案！</p>
                            </div>
                        </a>
                        <a href='javascript:void(0);' class='abA'>
                            <div class='shiliOne'>
                                <img src='./img/eight.png'/>
                                <p class='p1'>优势合作</p>
                                <p class='p2'>与多国政府及移民局保持良好的</p>
                                <p class='p2'>合作关系！</p>
                            </div>
                        </a>
                    </div>
              </div>
           </div><!--aboutCenter-->
            <div class='aboutBottom'>
                <div class='w1200'>
                    <!-- <p class='aboutTit'>八大优势彰显专业实力<span></span></p> -->
                    <img src='./img/dsj.png'/>
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
            pageSize:1,
            pageNum:1,
            totalCount:4,
            country:[],//获取国家
            list:[],//列表长度
            allList:[],//全部列表数据
        }
    },
    components:{sidebar,appointment,f,h},
    methods:{
        handleSizeChange: function (size) {
            //this.fullscreenLoading = true;
            this.pageSize = size;
            //this.getData()
            
            },
        handleCurrentChange: function(currentPage){
        //this.fullscreenLoading = true;
        this.pageNum = currentPage;
        //this.getData()
        
        },
        getlist:function(){
             var that=this;
                var obj={"CHANNEL":"1","FLAG":"1"}
                axios.post('/trpch/trcrm/item/queryItemAllList',obj)
                .then(res=>{
                    var data=res.data;
                     
                    console.log(data)
                    if(data.isSuccess==1){
                        var all=[];
                        // for(var i=0;i<data.list.length;i++){
                        //     that.country.push(data.list[i].countryName);
                        //     all=all.concat(data.list[i].itemEntity);
                        // }
                        that.allList=[{'certType': "永久居民",'cycle': "5-12个月",'httpPath':'','itemId': "c65f3ca2d5d342daaf99c1908b7171d4",
                                        'itemTitle': "美国蓝带中学、",
                                        'lightspot': "项目亮点介绍"},{'certType': "永久居民",
                                        'cycle': "5-12个月",
                                        'httpPath': '',
                                        'itemId': "c65f3ca2d5d342daaf99c1908b7171d4",
                                        'itemTitle': "美国蓝带中学、",
                                        'lightspot': "项目亮点介绍"},{'certType': "永久居民",
                                        'cycle': "5-12个月",
                                        'httpPath': '',
                                        'itemId': "c65f3ca2d5d342daaf99c1908b7171d4",
                                        'itemTitle': "美国蓝带中学、",
                                        'lightspot': "项目亮点介绍"}];
                        console.log(that.allList)
                        that.totalCount=that.allList.length
                        that.list=data.list;
                        
                        
                    }     
                })
        },
        navClick:function(index,event){
            var el = event.currentTarget;
            $('.NaVul li').removeClass('active');
            el.className='active';
             $('.navListUl').hide();
            if(index=='all'){
                $('.navList .navListUl').eq(0).show();
            }
           
            $('.navList .navListUl').eq(index+1).show();
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
.aboutCenter{
    background:url("img/abCbg.png") no-repeat;
    background-size:cover;
}
.aboutBottom{
    height:650px;
    box-sizing: border-box;
    padding:20px;
    /* position: relative;
    top:-100px; */
    background:url("img/abBbg.png") no-repeat;
    background-size:cover;
}
.aboutBottom img{
    display: block;
    margin:50px auto;
}
#aboutB{
    background-image: url(img/aboutbanner.jpg);
}
</style>

