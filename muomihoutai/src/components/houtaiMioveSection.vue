<template>
    <div>
      <!--搜索框-->
      <el-row>
        <el-col :span="3" class="grid">
          <el-input v-model="input" placeholder="请输入内容" size="mini" class="search-input"></el-input>
        </el-col>
        <el-col :span="1" class="grid">
          <el-button type="success" icon="el-icon-search" size="mini" @click="search()">搜索</el-button>
        </el-col>
      </el-row>
      <br>
      <!--表格数据及操作-->
      <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" border
                style="width: 100% " stripe ref="multipleTable" tooltip-effect="dark" @selection-change="selectionChange">
        <!--勾选框-->
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <!--索引-->
        <el-table-column prop="movieId" label="电影id" align="center"></el-table-column>
        <el-table-column prop="movieName" label="电影名称" align="center"></el-table-column>
        <el-table-column label="电影图片" align="center">
          <template scope="scope">
            <img :src="scope.row.movieImg" width="50" height="50" class="head_pic"/>
          </template>
        </el-table-column>
        <el-table-column prop="movieScore" label="电影评分" align="center"></el-table-column>
        <el-table-column prop="movieSumTime" label="电影时长" align="center"></el-table-column>
        <el-table-column prop="movieShowTime" label="上映时间" align="center"></el-table-column>


        <el-table-column label="编辑" width="100" align="center">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" align="center" @click="editPage(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>

        <el-table-column label="删除" width="100" align="center">
          <template slot-scope="scope">
            <el-button type="danger" icon="el-icon-delete" size="mini" @click.prevent="deleteBlog(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <!--新增按钮-->
      <el-col :span="1" class="grid">
        <router-link to="addMovielist"><el-button type="success" icon="el-icon-circle-plus-outline" size="mini" round>新增</el-button></router-link>
      </el-col>
      <!--全删按钮-->
      <el-col :span="1" class="grid">
        <el-button type="danger" icon="el-icon-delete" size="mini" round @click="removeSelection">删除选中</el-button>
      </el-col>
      <br>
      <!--分页条-->
      <el-pagination background layout="prev, pager, next"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage" :total="total" :page-size="4">
      </el-pagination>

      <!--修改弹出框-->
      <el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
        <el-form :model="editForm" :rules="rulesFrom" ref="rulesForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="电影id" style="width: 250px" prop="movieId">
          <el-input v-model="editForm.movieId"></el-input>
        </el-form-item>
        <el-form-item label="电影名称" style="width: 500px" prop="movieName">
          <el-input v-model="editForm.movieName"></el-input>
        </el-form-item>
        <el-form-item label="电影图片" style="width: 500px">
          <el-input v-model="editForm.movieImg" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="电影评分"  prop="shopPosi">
          <el-input v-model="editForm.movieScore"></el-input>
        </el-form-item>
        <el-form-item label="电影时长" style="width: 250px" prop="movieSumTime">
          <el-input v-model="editForm.movieSumTime"></el-input>
        </el-form-item>
        <el-form-item label="上映时间" prop="movieShowTime">
          <el-input v-model="editForm.movieShowTime"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="editMs(editId)">保存</el-button>
          <el-button type="primary" @click="resert()">重置</el-button>
        </el-form-item>
      </el-form>
      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "houtaiSection",
        inject:["reload"],
        data() {
          return {
            //表格数据
            tableData: [],
            total: 0, // 总页数
            pageNum: 1, // 第几页
            pageSize: 4, // 每页显示的数量
            isloading: false,
            currentPage: 1,
            input:"",
            editForm:{
              movieId:"",
              movieName:"",
              movieImg:"",
              movieScore:"",
              movieSumTime:"",
              movieShowTime:""
            },
            editFormVisible: false,
            multipleSelection: [],
            editId:"",
            rulesFrom:{
              movieId:[
                { required: true, message: '请输入电影id', trigger: 'blur' },
                { min:3, max: 9, message: '长度在 3 到 7 个字符', trigger: 'blur' }
              ],
              movieName:[
                { required: true, message: '请输入电影名称', trigger: 'blur' },
              ],
              movieSumTime:[
                { required: true, message: '请输入电影时长', trigger: 'blur' },
              ],
              movieShowTime:[
                { required: true, message: '请输入电影上映时间', trigger: 'blur' },
              ]
            }
          }
        },
        watch: {
          currentPage(oldV, newV) {
            console.log(oldV, newV);
          },
        },

        methods: {
          handleCurrentChange(val) {
            this.currentPage = val;
          },
          //表单提交验证

          //获取数据
          tablelist() {
            fetch("http://localhost:3000/movie2/msall").then((response) => {
              if (response.ok) {
                response.json().then(data => {
                  this.tableData = data
                  console.log(this.tableData)
                  this.total = data.length;
                  console.log(this.total)
                })
              }
            });
          },
          //删除数据
          deleteBlog(index, row) {
            this.$confirm('确认删除该记录吗?', '提示', {
              type: 'warning'
            }).then(() => {
              fetch("http://localhost:3000/movie2/ms?id="+row.movieId).then(result => {
                    if (result.body.code === 200) {
                      // 删除成功
                      console.log("删除成功！");
                    } else {
                      alert("删除失败！");
                    }
                  });
              this.tablelist();
              this.reload();
            }).catch(function(e){
              if(e != "cancel")
                console.log("出现错误：" + e);
            });
          },
          //查找数据
          search() {
            console.log(this.input);
            var arr=[];
            if(this.input!=""){
              fetch("http://localhost:3000/movie2/msall").then((response) =>  {
                if (response.ok) {
                  response.json().then(data => {
                    data.forEach((v,k) => {
                      if(v.movieId==this.input){
                        arr[0]=v
                        this.tableData=arr
                        console.log(this.tableData)
                      }else if(v.movieName==this.input){
                          arr[0]=v
                        this.tableData=arr
                      }else{
                        this.tableData=arr
                      }
                    })
                  })
                }
              })
            }
          },
          //打开编辑页面
          editPage(index,row){
            this.editFormVisible=true;
            this.editId=row.movieId;
            for(var n=0;n<this.tableData.length;n++){
              if(row.movieId==this.tableData[n].movieId){
                console.log(this.tableData[n].movieId);
                this.editForm.movieId=this.tableData[n].movieId;
                this.editForm.movieName=this.tableData[n].movieName;
                this.editForm.movieImg=this.tableData[n].movieImg;
                this.editForm.movieScore=this.tableData[n].movieScore;
                this.editForm.movieSumTime=this.tableData[n].movieSumTime;
                this.editForm.movieShowTime=this.tableData[n].movieShowTime;
              }
            }
          },
          //编辑页面
          editMs(row){
            console.log(row)
            let formList={
              movieIdOrg:row,
              movieId:this.editForm.movieId,
              movieName:this.editForm.movieName,
              movieImg:this.editForm.movieImg,
              movieScore:this.editForm.movieScore,
              movieSumTime:this.editForm.movieSumTime,
              movieShowTime:this.editForm.movieShowTime,
            };
            console.log(formList)
            fetch("http://localhost:3000/movie2/updatems",{
              method: "POST",
                headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
              body:JSON.stringify(formList)
            }).then(result=>{
              if (result.body.code === 200) {
                // 修改成功
                console.log("修改成功！");
              } else {
                alert("修改失败！");
              }
            })
            this.tablelist();
            this.reload();
            this.editFormVisible=false;
          },
          //重置页面
          resert(){
            this.editFormVisible=true;
            this.editForm.movieId="";
            this.editForm.movieName="";
            this.editForm.movieImg="";
            this.editForm.movieScore="";
            this.editForm.movieSumTime="";
            this.editForm.movieShowTime="";
          },
          //选择事件
          selectionChange:function(val) {
            for(var i=0;i<val.length;i++) {
              var row = val[i];
            }
            this.multipleSelection = val;
            // console.info(val);
          },
          //删除选中
          removeSelection:function() {
            var _self = this;
            var multipleSelection = this.multipleSelection;
            if (multipleSelection.length < 1) {
              _self.$message({
                message: '请至少选中一条记录',
                type: 'error'
              });
              return;
            }
            let arr = []
            for(var i=0;i<multipleSelection.length;i++) {
              var row = multipleSelection[i];
              let data = row.movieId
              console.log(data)
              this.tableData.forEach((v,index) => {
                if (data == v.movieId) {
                  this.tableData.splice(index,1)
                }
              })
              arr= this.tableData
              console.log( arr)

            }
            this.$confirm('确认删除该记录吗?', '提示', {
              type: 'warning'
            }).then(() => {
              fetch("http://localhost:3000/movie2/delms",{
                method: "POST",
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:JSON.stringify(arr)
              }).then(result => {
                if (result.body.code === 200) {
                  // 删除成功
                  console.log("删除成功！");
                } else {
                  alert("删除失败！");
                }
              });
              this.tablelist();
              this.reload();
            }).catch(function(e){
              if(e != "cancel")
                console.log("出现错误：" + e);
            });
          }
        },
        created(){
          this.tablelist()
        }
    }
</script>

<style scoped>
  .el-col{
    margin-right:30px;
  }
  .el-table{
    text-align: center;
  }
  .el-table-column .el-button{
    width: 60px;
  }
  .el-select{
    float: left;
  }
  .el-table-column{
    margin-right:0;
  }
</style>
