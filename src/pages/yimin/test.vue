<template>
    <div class='t'>
        <div>
        <p v-for='(i,index) in list'>{{i}}</p>
       </div>
        
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
</template>

<script>
export default {
    name:'t',
    data:function(){
        return{
             pageSize:3,
            pageNum:1,
            totalCount:10,
        }
    },
    methods:{
        handleSizeChange: function (size) {
            this.fullscreenLoading = true;
            this.pageSize = size;
            //this.getData()
            
            },
        handleCurrentChange: function(currentPage){
        this.fullscreenLoading = true;
        this.pageNum = currentPage;
        //this.getData()
        
        },
    }
}
</script>


