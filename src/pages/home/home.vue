<template>
    <div class='home'>
        <h1 style="display:none!important;">移民，希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，海外房产</h1>
        <h ref='h'></h>
        <div class="banner" id="banner1">
            <ul  id="img" class="img">
                
                <li class="active" v-for='(item,index) in advertList' v-if='index==0'>
                    <a :href='skipPath(item.skipPath)' target="_blank">
                    <img :src="item.httpPath"/>
                    <div class="bannerxia"></div>
                        <div class="bannerInfo" v-if='index>=0'> 
                            <!-- <div style='height: 148px;'> -->
                                <h3>{{item.mainTitle}}</h3>
                                <!-- </div> -->
                            
                            <!-- <h3>{{item.subTitle}}</h3> -->
                            <p>{{item.subTitle}}</p>
                            <a :href='skipPath(item.skipPath)' target="_blank">
                                <div class="bannerBtn btnHoverZ">查看详情</div>
                            </a>
                        </div>
                    </a>
                </li>
                <li class="" v-for='(item,index) in advertList' v-if='index>0'>
                    <a :href='skipPath(item.skipPath)' target="_blank">
                    <img :src="item.httpPath"/>
                    <div class="bannerxia"></div>
                        <div class="bannerInfo" v-if='index>=0'> 
                            <!-- <div style='height: 148px;'> -->
                                <h3>{{item.mainTitle}}</h3>
                                <!-- </div> -->
                            <!-- <h3>{{item.subTitle}}</h3> -->
                             <p>{{item.subTitle}}</p>
                            <a :href='skipPath(item.skipPath)' target="_blank">
                                <div class="bannerBtn btnHoverZ">查看详情</div>
                            </a>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="showpage">
                <div class="changeindex clearfix">
                    <a href="javascript:void(0);" class="prev fl clearfix changeBtn"><i class="fl"></i><span class="fl"></span></a>
                    <a href="javascript:void(0);" class="next fl clearfix changeBtn"><span class="fl"></span><i class="fl"></i></a>
                </div>
            </div><!--showpage-->
        </div>
    <!-- banner -->
        <!--Consultation-->
        <div class="consultation clearfix">
            <div class="sup-nav fl"  style='margin-left:1px;'>
                <ul class="clearfix">
                    <li class="fl">
                        <a href="javascript:void(0);" class="kuaiyin" style='cursor:default;'>
                            <!-- <span class="status hot"></span> -->
                            <h3>免费定制移民规划</h3>
                            <p style='margin-bottom: 18px;'>资深移民专家一对一服务</p>
                            <p>一站式移民投资解决方案</p>
                            <button class='btnHoverZ' @click="toAppont()">马上预约</button>

                        </a>
                    </li>
                </ul>
            </div>
            <div class="consultation-msg fl">
               <ul class='consultation-news'>
                   <li class='fl'>
                       <div class='nBox'>
                           <div class='nBox_top' >
                               <span class="tit fl">尊享活动</span>
                               <span class="moz fr" @click='detClick("active")' style="cursor: pointer;">更多&nbsp;></span>
                           </div>
                           <div style='clear:both;'></div>
                           <div class='nBox_center' v-for='(item,index) in activeList' @click='detClick("activedet",item.actId)' v-if='index==0'>
                               <div class='fl' style='width:70%;'>
                                   <p class='actName' style="cursor: pointer;">{{item.title}}</p>
                                   <div class=''>
                                       <span class='sign fl' v-show='item.actStatus==1' @click='detClick("activedet",item.actId)' style='margin-top:23px'>报名</span>
                                       <span class='fl nb_hg' v-show='item.actStatus==2' @click='detClick("activedet",item.actId)' style='margin-top:23px'>回顾</span>
                                       <span class='fl actTime' style='margin-left:20px;'>{{subTimery(item.startTime)}}-{{subTimery(item.endTime)}}</span>
                                   </div>
                               </div>
                               <div class='fr' style="background:#eaeaea">
                                   <img :src='item.httpPath' class='actImg'/>
                               </div>
                           </div> <!--nBox_center-->
                           <ul class='nBox_bottom'>
                               <li v-for='(item,index) in activeList' v-if='index!=0'style='clear:both;margin-bottom:9px;height:27px;' @click='detClick("activedet",item.actId)'>
                                   <span class='fl nb_tit'>· {{item.title}}</span>
                                  <span class='fr sign'  v-show='item.actStatus==1' @click='detClick("activedet",item.actId)'>报名</span>
                                  <span class='fr nb_hg'  v-show='item.actStatus==2' @click='detClick("activedet",item.actId)'>回顾</span>
                               </li>
                           </ul>
                       </div>
                   </li>
                   <li class='fr' >
                       <div class='nBox' style='border-right:none;padding-right:0;padding-left:23px;'>
                           <div class='nBox_top'>
                               <span class="tit fl">热点资讯</span>
                               <span class="moz fr" @click='detClick("news")'>更多&nbsp;></span>
                           </div>
                           <div style='clear:both;'></div>
                           <div class='nBox_center' v-for='item in reDianFirst' @click='detClick("newsdet",item.newsId)'>
                               <div class='fl' style='width:70%;'>
                                   <p class='reName'>{{item.title}}</p>
                                   <div class=''>
                                       <span class='reTime fl'>{{item.newsDate}}</span>
                                   </div>
                               </div>
                               <div class='fr' style="background:#eaeaea">
                                   <img :src='item.httpPath' class='actImg' style='cursor: pointer;'/>
                               </div>
                           </div> <!--nBox_center-->
                           <ul class='nBox_bottom' style='padding-top: 37px;'>
                               <li v-for="item in listReDian" style='clear:both;margin-bottom:15px;cursor: pointer;' :newsId='item.newsId' @click='detClick("newsdet",item.newsId)'>
                                   <span class='fl nb_tit'>· {{item.title}}</span>
                                   <span class='fr nb_retime'>{{item.newsDate}}</span>
                               </li>
                               <!-- <li style="clear:both;margin-top:15px;">
                                   <span class='fl nb_tit'>· 希腊经济回暖，欧洲购房移民性价比</span>
                                   <span class='fr nb_retime'>1小时前</span>
                               </li> -->

                           </ul>
                       </div>
                   </li>
               </ul>
            </div>
           <div class="consultation-more">
                <div class="down">
                    <span class='sucTit' @click='detClick("suc")' style='cursor: pointer;'>成功案例</span>
                    <span class='sucName' v-for='item in listAllSuc' :newsId='item.newsId'@click='detClick("sucdet",item.newsId)' >· {{item.title}}</span>
                    <!-- <span class='sucName'>· 唐女士与先生成功购得希腊雅</span>
                    <span class='sucName'>· 唐女士与先生成功购得希腊雅</span>
                    <span class='sucName'>· 唐女士与先生成功购得希腊雅</span> -->
                </div>
            </div>
        </div>
        <!--consultation end-->
        <!--floor rongzi-->
        <div class="floor clearfix" node-type="navTab" style='z-index:9;margin:0 auto 218px;'>
            <div class="xian lefttoright" style="display:none;"></div>
            <div class="floor-title rzfw">
                <h3>移民国家</h3>
                <p>全球身份轻松定制</p>
            </div>
            <div class="floor-tab" node-type="navTit">
                <ul class='yiminUl'>
                    <div style='height:265px;'> 
                        <li :class="{'cur':!index}" v-for='(item,index) in yiContry' v-if='index<5' @mouseover='yiminHover(index,$event)' @mouseout='yiminOut(index,$event)' @click='detClick("yimin","",item.countryName)'  style='cursor: pointer;clear:both;' ><img class='countryImg' :src='item.httpPath'/><span>{{subtext(item.countryName,4)}}</span> <b></b></li>
                    </div>
                    
                     <li class="clearfix yiMinContryMore" @click="detClick('yimin')"><img src='./img/yiMinContryMore.png' class='countryImg'/><span>更多</span></li>
                   
                </ul>
            </div>
            <ul class="floor-cont" node-type="navCont" id='yiXm' style='background: #414044;width: 990px;height: 340px;left:-15px;top:175px;'>
                <li class="floor-item cur" v-if='index==0':sup-nameadd="index" v-for='(item,index) in yiminList'>
                    <div class='proBox'>
                        <div class="product-info"  v-for='z in item.itemEntity' style="background:#eaeaea;">
                            <img :src="z.httpPath" width="572" height="310" alt="" >
                            <div class="product-tit" style='opacity:1;cursor:pointer;' @click='detClick("yimindet",z.itemId)'>
                                <span>{{z.itemType}}</span>
                                <h3>{{yiTitle(z.itemTitle)}}</h3>
                                <p style='height:93px;'>{{yispot(z.lightspot)}}</p>
                                <a  class="applyBtn btnHoverZ" :itemId='z.itemId' @click='detClick("yimindet",z.itemId)'>查看项目详情</a>
                            </div>

                        </div>
                        <ul class="characteristic fr">
                            <li class='charLiTop'>                                
                                <span class='fl charLitit'>移民指南</span><span class='fr charLimore' style='cursor: pointer;' @click='detClick("news","",item.countryName)'>更多&nbsp;></span>
                            </li><!--charLiTop-->
                            <li class='charLiCenter' style='clear:both;' v-for='(n,index) in item.newsEntity' v-if='!index' @click='detClick("newsdet",n.newsId)'>
                                <div class='fl charLiCenter_img'><img :src='n.httpPath' style='width:100%;height:100%;'/></div>
                                <div class='fr charLiCenter_b'>
                                    <p class='charLiCenter_text'>· {{n.title}}</p>
                                    <p class='charLiCenter_time'>{{n.newsDate}}</p>
                                </div>
                            </li><!--charLiCenter-->
                            <li class='charLiBottom' style='clear:both;' >
                                <p v-for='(m,index) in item.newsEntity' v-if='index' @click='detClick("newsdet",m.newsId)' ><span class='fl yilistTit' >· {{m.title}}</span><span class='fr'>{{m.newsDate}}</span><span style='clear:both;'></span></p>
                            </li><!--charLiCenter-->
                        </ul>
                    </div>
                </li>
                 <li class="floor-item" v-if='index!=0' :sup-nameadd="index" v-for='(item,index) in yiminList'>
                    <div class='proBox'>
                         <div class="product-info"  v-if='item.itemEntity.length<1' style="background:#eaeaea">
                             <img src="./img/noyimin.png" width="572" height="310" alt="" style='opacity:1;' >
                             <div class="product-tit" style='opacity:1;' >
                             </div>
                          </div>
                        <div class="product-info"  v-for='z in item.itemEntity' style="background:#eaeaea">
                            <img :src="z.httpPath" width="572" height="310" alt="" style='opacity:1;'>
                            <div class="product-tit" style='opacity:1;cursor:pointer;' @click='detClick("yimindet",z.itemId)'>
                                <span>{{z.itemType}}</span>
                               <h3>{{yiTitle(z.itemTitle)}}</h3>
                                <p style='height:93px;'>{{yispot(z.lightspot)}}</p>
                                <a  class="applyBtn btnHoverZ" :itemId='z.itemId' @click='detClick("yimindet",z.itemId)'>查看项目详情</a>
                            </div>

                        </div>
                        <ul class="characteristic fr">
                            <li class='charLiTop'>                                
                                <span class='fl charLitit'>移民指南</span><span class='fr charLimore' style='cursor: pointer;' @click='detClick("news","",item.countryName)'>更多&nbsp;></span>
                            </li><!--charLiTop-->
                            <li class='charLiCenter' style='clear:both;' v-for='(n,index) in item.newsEntity' v-if='!index' @click='detClick("newsdet",n.newsId)'>
                                <div class='fl charLiCenter_img'><img :src='n.httpPath' style='width:100%;height:100%;'/></div>
                                <div class='fr charLiCenter_b'>
                                    <p class='charLiCenter_text'>· {{n.title}}</p>
                                    <p class='charLiCenter_time'>{{n.newsDate}}</p>
                                </div>
                            </li><!--charLiCenter-->
                            <li class='charLiBottom' style='clear:both;' >
                                <p v-for='(m,index) in item.newsEntity' v-if='index' @click='detClick("newsdet",m.newsId)' ><span class='fl yilistTit' >· {{m.title}}</span><span class='fr'>{{m.newsDate}}</span><span style='clear:both;'></span></p>
                            </li><!--charLiCenter-->
                        </ul>
                    </div>
                </li>
              
                <!-- <li class="floor-item" sup-nameadd="jbb">
                    <div class='proBox'>
                        <div class="product-info">
                            <img src="./img/usaY.png" width="572" height="310" alt="" style='opacity:0.5;'>
                            <div class="product-tit">
                                <h3>美国曼声商业移民</h3>
                                <p>每年近40万净收益，迪士尼周边高品质度假社区，高净值人士的选择</p>
                                <a href="//loan.jd.com/home.htm" class="applyBtn btnHoverZ">查看项目详情</a>
                            </div>

                        </div>
                        <ul class="characteristic fl">
                            <li class='charLiTop'>                                
                                <span class='fl charLitit'>移民指南</span><span class='fr charLimore'>更多&nbsp;></span>
                            </li>
                            <li class='charLiCenter' style='clear:both;'>
                                <div class='fl charLiCenter_img'><img src='./img/zhinan.png' style='width:100%;height:100%;' /></div>
                                <div class='fr charLiCenter_b'>
                                    <p class='charLiCenter_text'>· 美国VS中国计算房产面积有何不同？</p>
                                    <p class='charLiCenter_time'>1小时前</p>
                                </div>
                            </li>
                            <li class='charLiBottom' style='clear:both;'>
                                <p><span class='fl'>· 凤凰网大篇幅报道好望角，这件</span><span class='fr'>1小时前</span><span style='clear:both;'></span></p>
                                <p><span class='fl'>· 凤凰网大篇幅报道好望角，这件</span><span class='fr'>1小时前</span><span style='clear:both;'></span></p>
                                <p><span class='fl'>· 凤凰网大篇幅报道好望角，这件</span><span class='fr'>1小时前</span><span style='clear:both;'></span></p>
                            </li>
                        </ul>
                    </div>
                </li> -->
            </ul>
        </div>
        <!--floor rongzi end-->
        <!--海外房产-->
        <div class="floor-wrap" style='z-index:3;'>
            <div class="floor-bg1 floor-module" style="background-position: center 59.4573px;">
                <div class="floor clearfix" node-type="navTab">
                    <div class="floor-title lcfw" style='top:62px;'>
                        <h3 style='color:#383838;'>海外房产</h3>
                        <p style='color:#383838;'>精选全球优质房产</p>
                    </div>
                    <div class='hwBox'>
                        <ul>
                            <li v-for='(item,index) in haiwaiList' :itemId='item.itemId' @click='detClick("haiWdet",item.itemId)' v-if='index<3'>
                                <div class='hwpad'>
                                    <div class="hwop" style='background:#eaeaea'>
                                          <img :src='item.httpPath'/>
                                    </div>
                                    <div class='hwText'>
                                        <p class="hwTit pointer">{{item.itemTitle}}</p>
                                        <p class='hwBto'>
                                            <span class='fl price'><i>¥{{item.amountSum}}</i>万<em>起</em></span>
                                            <span class='fr weizhi'><img src='./img/dtImg.png'/>{{item.nation}}·{{item.city}}</span>
                                        </p>
                                    </div>
                                 </div>
                            </li>
                            <!-- <li>
                                <div class='hwpad'>
                                    <div class="hwop">
                                         <img src='./img/hwImg2.png'/>
                                    </div>
                                    <div class='hwText'>
                                        <p class="hwTit">东湾山上一块占地1.6亩的私密地块</p>
                                        <p class='hwBto'>
                                            <span class='fl price'><i>¥897</i>万<em>起</em></span>
                                            <span class='fr weizhi'><img src='./img/dtImg.png'/>美国·休斯顿</span>
                                        </p>
                                    </div>
                                 </div>
                            </li>
                            <li>
                                <div class='hwpad'>
                                    <div class="hwop">
                                         <img src='./img/hwImg.png'/>
                                    </div>
                                    <div class='hwText'>
                                        <p class="hwTit">东湾山上一块占地1.6亩的私密地块</p>
                                        <p class='hwBto'>
                                            <span class='fl price'><i>¥897</i>万<em>起</em></span>
                                            <span class='fr weizhi'><img src='./img/dtImg.png'/>美国·休斯顿</span>
                                        </p>
                                    </div>
                                 </div>
                            </li> -->
                        </ul>
                        <div style='clear:both;'></div>
                        <div style='text-align:center;margin-top:50px;'>
                            <span class='moreHw btnHoverZ' @click='detClick("haiW")'>更多海外房产 ></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!--floor kuajing end-->
        <!--海外教育-->
        <div class="floor-bg2 floor-module">
            <div class="floor clearfix" node-type="navTab">
                <div class="floor-title kjfw">
                    <h3>海外教育 </h3>
                    <p>全球名校自由选择</p>
                </div>
               <div class='liuxueBox'>
                   <div class='liuxueOne' v-for='item in liuxueList' @click='detClick("liuxuedet",item.itemId)'>
                       <div class='liuxueImgBox'>
                            <img :src='item.httpPath' class='liuxueImg'/>
                        </div>
                       <div class='liuMengB'>
                           <div class='liuMeng'>
                            <p class='liuTit'><span>{{subtext(item.itemTitle,8)}}</span></p>
                            <p class='liuIntr'>{{subtext(item.lightspot,14)}}</p>
                            <span class='biao'>{{item.nation}}</span>
                           </div>
                       </div>
                    </div><!--liuxueOne-->
                    <!-- <div class='liuxueOne'>
                       <div class='liuxueImgBox'>
                            <img src='./img/liuxue.png' class='liuxueImg'/>
                        </div>
                       <div class='liuMengB'>
                           <div class='liuMeng'>
                            <p class='liuTit'><span>墨尔本微留学</span></p>
                            <p class='liuIntr'>3-6家庭 高度定制 精品小团</p>
                            <span class='biao'>墨尔本</span>
                           </div>
                       </div>
                    </div> -->
                    
                    <div style='clear:both;'></div>
                    <div style='text-align:center;margin-top:50px;'>
                        <span class='moreLiuxue btnHoverB' @click='detClick("liuxue")'>更多留学项目 ></span>
                    </div>
               </div><!--liuxueBox-->
            </div>
        </div>
        <!--floor licai end-->
        <!-- 了解我们 -->
        <div class="floor-bg3 floor-module">
            <div class="floor clearfix" node-type="navTab">
                <div class="floor-title kjfw" style='top:190px'>
                    <h3 style='color:#383838;'>了解我们 </h3>
                    <p style='color:#383838;'>全球移民投资领航者</p>
                </div>
                <div class='knowUsBox'>
                    <div class='knowOne'>
                        <div class='shili'>
                        <p class='knowTit'>实力雄厚</p>
                        <p class='knowText'>大型财富管理集团全资子公司，实力强大</p>
                        </div>
                    </div><!--knowOne-->
                    <div class='knowOne' style="width:50%;">
                        <div class=''>
                            <p class='knowTit' style="padding-top:15px;">唐仁国际</p>
                            <p class='knowTangren'>唐仁国际咨询（北京）有限公司，作为全球移民投资领航者，是大唐财富旗下投资移民和海外生活规划高端品牌。唐仁国际秉承大唐财富“让理财更轻松 让梦想更自由”的终极使命，卓越的顾问团队为客户提供尊享、私密、专业的海外规划服务。</p>
                            <span class='checkMoreKnow' @click='detClick("about")'>查看更多></span>
                        </div>
                    </div><!--knowOne-->
                    <div class='knowOne'>
                        <div class='fugai'>
                        <p class='knowTit'>覆盖全国</p>
                        <p class='knowText'>依托集团强大的公司网路，将服务延伸至全国！</p>
                        </div>
                    </div><!--knowOne-->
                    <div class='knowOne'>
                        <div class='zishen'>
                        <p class='knowTit'>资深团队</p>
                        <p class='knowText'>团队成员全部聘用出国服务行业资深人才！</p>
                        </div>
                    </div><!--knowOne-->
                    <div class='knowOne'>
                        <div class='jingxuan'>
                        <p class='knowTit'>精选项目</p>
                        <p class='knowText'>行业独有的风控团队，对项目进行检测和层层筛选！</p>
                        </div>
                    </div><!--knowOne-->
                    <div class='knowOne'>
                        <div class='dingji'>
                        <p class='knowTit'>顶级律师</p>
                        <p class='knowText'>数十位移民行业顶级律师为客户审案！</p>
                        </div>
                    </div><!--knowOne-->
                    <div class='knowOne'>
                        <div class='youshi'>
                        <p class='knowTit'>优势合作</p>
                        <p class='knowText'>与多国政府及移民局保持良好的合作关系！</p>
                        </div>
                    </div><!--knowOne-->
                </div>
           

                <!-- 合作伙伴 -->
                <div class="partner">
                    <div class="floor-title kjfw" style='top:850px'>
                        <h3 style='color:#383838;'>合作伙伴 </h3>
                        <p style='color:#383838;'>全球伙伴值得信赖</p>
                    </div>
                    <div class='partnerBox'>
                        <img src="./img/hezuohuoban.png" style='width:100%;'/>
                        <!-- <div style='width:100%;height:100px;'>
                             <div class='partnerOne'>
                                <img src='./img/01.png'/>
                              </div>
                              <div class='partnerOne'>
                                    <img src='./img/02.png'/>
                                </div>
                                <div class='partnerOne'>
                                    <img src='./img/03.png' style='padding-top:5px;'/>
                                </div>
                                <div class='partnerOne'>
                                    <img src='./img/04.png'/>
                                </div>
                                <div style='clear:both;'></div>
                            </div>
                       <div style='height:100px;'>
                           <div class='partnerOne'>
                            <img src='./img/05.png'/>
                            </div>
                            <div class='partnerOne'>
                                <img src='./img/06.png'/>
                            </div>
                            <div class='partnerOne'>
                                <img src='./img/07.png'/>
                            </div>
                            <div class='partnerOne'>
                                <img src='./img/08.png'/>
                            </div>
                            <div style='clear:both;'></div>
                        </div> -->
                        
                       
                    </div><!--partnerBox-->
                </div>
             </div>
        </div>
        <!-- 第三部分结束 -->
        
        
        <sidebar></sidebar>
        <appointment></appointment>
         <appointmentc  ref='c1'></appointmentc>
        <f></f>
    </div>
    
    
</template>
<style>
 .el-scrollbar__wrap {
  overflow-x: hidden;
 }
 .yiMinContryMore, .yiMinContryMore span{
     cursor: pointer!important;
 }
  .yiMinContryMore img{
     opacity:1;
 }
 .yiMinContryMore:hover img{
     opacity:1;
 }
 .yiMinContryMore:hover span{
     color:#ceaa7b;
 }
 .yilistTit{
     width:80%;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
 }
</style>

<script>
import Vue from 'vue'
import h from '@/components/header/header.vue'
import f from '@/components/footer/footer.vue'
import sidebar from '../../components/sidebar/sidebar.vue'
import appointment from '../../components/appointment/appointment.vue'
import appointmentc from '../../components/appointment/appointmentCe.vue'

import axios from 'axios'
export default {
    name:'home',
      metaInfo: {
        title: '唐仁国际-大唐财富旗下投资移民与家庭规划服务平台',
      meta: [{                 // set meta
        name: 'description',
        content: '唐仁国际是大唐财富旗下投资移民与家庭规划高端品牌，为客户提供尊享、私密、专业的海外规划服务。为有全球化需求的高净值人群提供安全、可靠的海外身份及财富管理解决方案。业务涵盖：希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，澳洲移民，欧洲移民，海外房产，海外教育等。移民去哪儿？来唐仁国际尊享专业移民顾问服务！'
      },{                 // set meta
        name: 'keyWords',
        content: '移民，希腊移民，美国移民，圣基茨和尼维斯移民，葡萄牙移民，海外房产，唐仁国际，大唐财富'
      }]
    },
    components:{sidebar,appointment,h,f,appointmentc},
    data:function(){
        return{
            advertList:[{'fileName': "",
                        'httpPath': "",
                        'mainTitle': "",
                        'skipPath': "",
                        'subTitle': "",
                        'thumbnailTitle': ""}],//轮播banner的数据
            zunxiangFirst:[],//第一条尊享活动
            activeList:[{'actId': "",
                    'actOaId': "",
                    'actStatus': "",
                    'actStatusName': "",
                    'address': "",
                    'cont': "",
                    'endTime': "",
                    'httpPath': "",
                    'imgPath': "",
                    'retrospect': "",
                    'startTime': "",
                    'telPhone': "",
                    'title': ""}],//尊享活动列表
            listAllSuc:[{'countryCode': "",
                        'countryId': "",
                        'countryName': "",
                        'createDate': "",
                        'httpPath': "",
                        'labelId': "",
                        'labelName': "",
                        'newsCont': '',
                        'newsDate': "",
                        'newsId': "",
                        'readersNum': "",
                        'readingNum': "",
                        'title': ""}],//成功案例
            listReDian:[{'countryCode': "",
                'countryId': "",
                'countryName': "",
                'createDate': "",
                'httpPath': "",
                'labelId': "",
                'labelName': "",
                'newsCont': "",
                'newsDate': "",
                'newsId': "",
                'readersNum': "",
                'readingNum': "",
                'title': "",}],//热点资讯
            reDianFirst:[{
                'countryCode': "",
                'countryId': "",
                'countryName': "",
                'createDate': "",
                'httpPath': "",
                'labelId': "",
                'labelName': "",
                'newsCont': "",
                'newsDate': "",
                'newsId': "",
                'readersNum': "",
                'readingNum': "",
                'title': "",
            }],//热点第一条数据
            haiwaiList:[{
                amountSum: "",
                certType: "",
                city: "",
                cycle: "",
                equityDeclare: "",
                httpPath: "",
                itemId: "",
                itemTitle: "",
                lightspot: "",
                nation: "",
                payDate: "",
                paymentRate: "",
                realEstate: "",
                returnRate: "",
                structurArea: "",
                target: "",
                unitCost: "",
            }],//海外房产
            yiContry:[{countryName: "",
                        httpPath:'',}],//移民国家的国家
            yiminIfHover:false,//移民是否hover过
            yiminList:[{
                'cityEntity':'',
                'country':'',
                'countryId':'',
                'countryName':'',
                'httpPath':'',
                'itemEntity':[{
                    'itemTitle':'',
                    'lightspot':'',
                    'httpPath':'',
                    'itemId':'',
                }],
                'newsEntity':[{
                    'countryCode': "",
                    'countryId': "",
                    'countryName': "",
                    'createDate': "",
                    'httpPath': "",
                    'labelId': "",
                    'labelName': "",
                    'newsCont': "",
                    'newsDate': "",
                    'newsId': "",
                    'readersNum': "",
                    'readingNum': "",
                    'title': "",
                }],
            }],//移民的总列表
            firstNews:[],//第一条移民的消息
           liuxueList:[{
               amountSum: "",
                certType: "",
                city: "",
                cycle: "",
                equityDeclare: "",
                httpPath: "",
                itemId: "",
                itemTitle: "",
                lightspot: "",
                nation: "",
                payDate: "",
                paymentRate: "",
                realEstate: "",
                returnRate: "",
                structurArea: "",
                target: "",
                unitCost: "",
           }],
           ifShow:true,//预约显示
           
        }
    },
    methods:{

        toAppont:function(){
            var that=this;
            that.$refs.c1.toShow('','',that.ifShow,true);
        },
        getServerDate:function(){//获取服务器时间
            var xhr = null;
            if(window.XMLHttpRequest){
            xhr = new window.XMLHttpRequest();
            }else{ // ie
            xhr = new ActiveObject("Microsoft")
            }

            xhr.open("GET","/",false)//false不可变
            xhr.send(null);
            var date = xhr.getResponseHeader("Date");
            var t=new Date(date)
             
            return t.getTime();
        },
        subTime:function(t){
            var time=t.substr(0,10);
            return time;
        },
        subTimery:function(t){
            var time=t.substr(5,2)+'月'+t.substr(8,2)+'日';
            return time;
        },
        yiTitle:function(str){
            if(str.length>12){
                 return str.substr(0,12)+'...';
            }
            return str;
        },
        yispot:function(str){
            if(str.length>25){
                return str.substr(0,25)+'...';
            }
            return str;
        },
        subtext:function(str,num){
             if(str.length>num){
                return str.substr(0,num)+'...';
            }
            return str;
        },
       getBanner:function(){
           var that=this;
           var obj={"BEGIN_NUM":"1","END_NUM":"5","CHANNEL":"1"}
            axios.post('/trpch/trcrm/advert/queryAdvertInfo',obj)
                .then(res=>{
                    if(res.data.advertList.length>0){
                         that.advertList=res.data.advertList; 
                         console.log(that.advertList); 
                    }
                    that.getZunXiang()//获取尊享活动列表
                    that.getSuc()//获取成功案例
                    that.getHaiai()//获取海外房产
                    that.getReDian()//热点资讯
                    that.getYimin()//移民国家
                    that.getLiuxue()//获取留学   
                })
        },
    getZunXiang:function(){
            var that=this;    
            var obj={"pageNo":"1","pageSize":"3","channel":"1"}
            axios.post('/trpch/trcrm/activity/queryActList',obj)
                .then(res=>{
                    //console.log(res.data) 
                    var data=res.data;
                    if(data.isSuccess==1){
                        if(data.list.length>0){
                            that.activeList=data.list
                            console.log(that.activeList);
                        }
                        
                    }     
                })
        },
    getSuc:function(){//1.1根据国家查询消息表列表
             var that=this;
                var obj={"pageNo":"1","channel":"1","pageSize":"4","typeId":"2","country":""}
                axios.post('/trpch/trcrm/news/queryNewsList',obj)
                .then(res=>{
                    var data=res.data;
                    if(data.isSuccess==1){
                        //console.log(data)
                        if(data.list.length>0){
                            that.listAllSuc=data.list
                        }
                        
                    }     
                })
        },
        getReDian:function(){
            var that=this;
            var obj={"pageNo":"1","channel":"1","pageSize":"4","typeId":"1","country":""}//1、资讯 2、案例
            axios.post('/trpch/trcrm/news/queryNewsList',obj)
            .then(res=>{
                var data=res.data;
                if(data.isSuccess==1){
                   // console.log(data.list)
                    if(data.list.length==0){
                        return;
                    }
                    that.reDianFirst=[];
                    that.listReDian=[];
                     that.reDianFirst.push(data.list[0]);
                     that.listReDian.push(data.list[1]);
                     if(!data.list[2]==false){
                         that.listReDian.push(data.list[2]);
                     }
                }     
            })
        },
        getHaiai:function(){
            var that=this;
            var obj={"channel":"1","flag":"3","country":'',"pageNo":1,"pageSize":"3","city":"","isTop":"1"}
            axios.post('/trpch/trcrm/item/queryItemList',obj)
            .then(res=>{
                var data=res.data;
                //console.log(data);
                if(data.isSuccess==1){
                    if(data.itemList.length>0){
                         that.haiwaiList=data.itemList;
                    }
                   
                    //console.log(that.haiwaiList);
                }     
            })
        },
        detClick:function(str,id,countryName){//
            var that=this;
            if(!id==false){
                if(!countryName){
                   window.open(that.Host+str+'?id='+id);
               }else{
                   var countryName=encodeURIComponent(encodeURIComponent(countryName));
                   window.open(that.Host+str+'?id='+id+'&countryName='+countryName);
               }
            }else{
               if(!countryName){
                   window.open(that.Host+str);
               }else{
                   var countryName=encodeURIComponent(encodeURIComponent(countryName));
                   window.open(that.Host+str+'?countryName='+countryName);
               }
                
            }
            
        },
        getLiuxue:function(){
            var that=this;
            var obj={"channel":"1","flag":"2","country":'',"pageNo":1,"pageSize":"6","city":"","isTop":"1"}
            axios.post('/trpch/trcrm/item/queryItemList',obj)
            .then(res=>{
                var data=res.data;
                //console.log(data);
                if(data.isSuccess==1){
                   // console.log(data);
                    if(data.itemList.length>0){
                        that.liuxueList=data.itemList
                    }
                    
                }     
            })
        },
        getYimin:function(){
            var that=this;
            var obj={"channel":"1","flag":"1","itemnum":"1","newsnum":"4","isTop":"1"}
            axios.post('/trpch/trcrm/item/queryItemAllList',obj)
            .then(res=>{
                var data=res.data;
               // console.log(data);
                if(data.isSuccess==1){
                   //console.log(data.list)
                    if(data.list.length==0){
                        return;
                    }
                    that.yiminList=data.list;
                    console.log(that.yiminList);
                    that.yiContry=[];
                    for(var i=0;i<data.list.length;i++){
                        var obj={'countryName':data.list[i].countryName,'httpPath':data.list[i].httpPath};
                        that.yiContry.push(obj);
                    }
                    for(var i=0;i<data.list.length;i++){
                        var newsList=data.list[i].newsEntity;

                    }//最外层

                   
                }     
            })
        },
        yiminHover:function(index, event){
            var that=this;
            // var el = event.currentTarget;
            // el.className='cur';
            // that.yiminIfHover=true;
             $('.yiminUl li').removeClass('cur')
            $('.yiminUl li').eq(index).addClass('cur');
            $('#yiXm .floor-item').eq(index).addClass("cur").siblings().removeClass("cur");
            
        },
        yiminOut:function(index, event){
            return;
            var that=this;
            $('.cur').removeClass('cur')
            if(that.yiminIfHover){
                 var el = event.currentTarget;
                 el.className='';
            }
            $('.floor-cont li').eq(index).hide();
        },
        skipPath:function(str){
            if(str==''||str==null||str==undefined){
                return 'javascript:void(0);'
            }else{
                return str;
            }
        }
        
    
    },
    created:function(){
         var that=this;
        // that.$refs.h.toActive('menuA_home');
         that.getBanner();//轮播banner的数据
         
        
   

window.onload=function(){
    function openwin(url) { 
        window.open (url, "newwindow", "height=300, width=400, top=200,left=200 toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no") 
        } 
        //–> 
      
    function addUrlPara(name, value) {  
        var currentUrl = window.location.href.split('#')[0];  
        if (/\?/g.test(currentUrl)) {  
            if (/name=[-\w]{4,25}/g.test(currentUrl)) {  
                currentUrl = currentUrl.replace(/name=[-\w]{4,25}/g, name + "=" + value);  
            } else {  
                currentUrl += "&" + name + "=" + value;  
            }  
        } else {  
            currentUrl += "?" + name + "=" + value;  
        }  
        if (window.location.href.split('#')[1]) {  
            window.location.href = currentUrl + '#' + window.location.href.split('#')[1];  
        } else {  
            window.location.href = currentUrl;  
        }  
    }  
  var banner = document.getElementById('banner');
  var img = document.getElementById('img');
  var lis = img.getElementsByTagName('li');

//前期准备工作结束，开始正式的主要部分，让它动起来
var num = 0; 
var xh = null;
autoPlay();
function play(num){
    var advertList=that.advertList
    //console.log(num+'===playNum');
        if(num==0){
            $('.prev span').html(advertList[lis.length-1].thumbnailTitle);
        }else{
            $('.prev span').html(advertList[num-1].thumbnailTitle);
        }
        if(num==lis.length-1){
            $('.next span').html(advertList[0].thumbnailTitle);
        }else{
            $('.next span').html(advertList[num+1].thumbnailTitle);
        }
        for(var i=0;i<lis.length;i++){
            lis[i].className = '';
        }
        $('#img li').removeClass('active');
        $('#img li').eq(num).addClass('active');
    
}
//自动播放
    function autoPlay(){
        xh = setInterval(function(){
            num++;
            if(num >= lis.length){
                num = 0;
            }

            play(num);
        },5800);
    }

    $('.next').click(function(){
        clearInterval(xh);
        num++;
            if(num >= lis.length){
                num = 0;
            }
        play(num);
        autoPlay();
    })
    $('.prev').click(function(){
        clearInterval(xh);
        num--;
            if(num >= lis.length){
                num = 0;
            }
            if(num<0){
                num=lis.length-1;
            }
        play(num);
        autoPlay();
    })
}




 }
}
</script>

