<template>
    <el-form :model="addForm" :rules="rulesFrom" ref="rulesForm" label-width="80px" size="small" class="demo-ruleForm">
      <el-form-item label="商铺id" style="width: 250px" prop="shopId">
        <el-input v-model="addForm.shopId"></el-input>
      </el-form-item>
      <el-form-item label="商铺名称" style="width: 500px" prop="shopName">
        <el-input v-model="addForm.shopName"></el-input>
      </el-form-item>
      <el-form-item label="店铺图片" style="width: 500px">
        <el-input v-model="addForm.shopimg" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="店铺地址"  prop="shopPosi">
        <el-input v-model="addForm.shopPosi"></el-input>
      </el-form-item>
      <el-form-item label="人均价格" style="width: 250px">
        <el-input v-model="addForm.shopPrice"></el-input>
      </el-form-item>
      <el-form-item label="商铺活动">
        <el-input v-model="addForm.shopActivityName"></el-input>
      </el-form-item>
      <el-form-item label="商铺推荐" prop="shopEvaluation">
        <el-input v-model="addForm.shopEvaluation"></el-input>
      </el-form-item>
      <el-form-item label="是否团购">
        <el-select v-model="addForm.shopActivity" placeholder="请选择" >
          <el-option label="支持团购" value="http://localhost:3000/image/k_tuan.png" ></el-option>
          <el-option label="不支持团购" value=""></el-option>
        </el-select>
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
              shopId:"",
              shopName:"",
              shopimg:"",
              shopPosi:"",
              shopPrice:"",
              shopActivityName:"",
              shopEvaluation:"",
              shopActivity:"",
            },
            rulesFrom:{
              shopId:[
                {required: true, message: '店铺编号不能为空', trigger: 'blur'},
                { min:5, max: 9, message: '长度在 5 到 7 个字符', trigger: 'blur' }
              ],
              shopName:[
                {required: true, message: '店铺名称不能为空', trigger: 'blur'}
              ],
              shopPosi:[
                {required: true, message: '店铺地址不能为空', trigger: 'blur'}
              ],
              shopEvaluation:[
                {required: true, message: '店铺不能为空', trigger: 'blur'}
              ]
            }
          }
        },
      methods:{
        addMs() {
          let formList={
            shopId:this.addForm.shopId,
            shopName:this.addForm.shopName,
            shopimg:this.addForm.shopimg,
            shopPosi:this.addForm.shopPosi,
            shopPrice:this.addForm.shopPrice,
            shopActivityName:this.addForm.shopActivityName,
            shopEvaluation:this.addForm.shopEvaluation,
            shopActivity:this.addForm.shopActivity
          };
          fetch("http://localhost:3000/meishis/addms",{
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
            path:'/houtaiSec'
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
