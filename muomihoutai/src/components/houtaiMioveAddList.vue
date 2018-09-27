<template>
    <el-form :model="addForm" :rules="rulesFrom" ref="rulesForm" label-width="80px" size="small" class="demo-ruleForm">
      <el-form-item label="电影id" style="width: 250px" prop="movieId">
        <el-input v-model="addForm.movieId"></el-input>
      </el-form-item>
      <el-form-item label="电影名称" style="width: 500px" prop="movieName">
        <el-input v-model="addForm.movieName"></el-input>
      </el-form-item>
      <el-form-item label="电影图片" style="width: 500px">
        <el-input v-model="addForm.movieImg" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="电影评分"  prop="shopPosi">
        <el-input v-model="addForm.movieScore"></el-input>
      </el-form-item>
      <el-form-item label="电影时长" style="width: 250px" prop="movieSumTime">
        <el-input v-model="addForm.movieSumTime"></el-input>
      </el-form-item>
      <el-form-item label="上映时间">
        <el-input v-model="addForm.movieShowTime" prop="movieShowTime"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addMs()">立即添加</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "houtaiAddList",
        inject:["reload"],
        data(){
          return{
            addForm:{
              movieId:"",
              movieName:"",
              movieImg:"",
              movieScore:"",
              movieSumTime:"",
              movieShowTime:""
            },
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
      methods:{
        addMs() {
          let formList={
            movieId:this.addForm.movieId,
            movieName:this.addForm.movieName,
            movieImg:this.addForm.movieImg,
            movieScore:this.addForm.movieScore,
            movieSumTime:this.addForm.movieSumTime,
            movieShowTime:this.addForm.movieShowTime,
          };
          fetch("http://localhost:3000/movie2/addms",{
            method: "POST",
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:JSON.stringify(formList)
          }).then(result => {
            if (result.body.code === 200) {
              //添加成功
              console.log("添加成功！");
            } else {
              alert("添加失败！");
            }
          });
          this.$router.push({
            path:'/houtaiMovieSec'
          })
          this.reload();
        }
      }
    }
</script>

<style scoped>
  .el-form-item{
    max-width: 800px;
    min-width: 200px;
  }
  .el-select{
    float: left;
  }
</style>
