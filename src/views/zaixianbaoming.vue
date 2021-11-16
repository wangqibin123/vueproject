<template>
  <div class="signup_warp">
    <div class="avi_nav">
      <p>
        <span>当前位置：</span>
        <router-link to='/'>  <span id="shou">首页 > </span></router-link>
        <span>在线报名</span>
      </p>
    </div>
    <div class="signup">
      <div class="signup_top">
        <img src="@/assets/images2/国际航空服务与管理_22.jpg" alt="" />
      </div>
      <div class="signup_inp">
        <p>
          <span>学生姓名</span>
          <a-input placeholder="请填写姓名" class="inp1" />
          <i class="icons">*</i>
        </p>
        <p>
          <span>手机号码</span>
          <a-input placeholder="请填写手机号码" class="inp3" />
            <i class="icons1">*</i>
        </p>
        <p>
          <span>出生日期</span>
          <a-date-picker @change="onChange" class="inp3"  placeholder="请选择出生日期" >
            <a-icon
              slot="suffixIcon"
              type="caret-down"
              class="test"
              style="color: #000"
            />
          </a-date-picker>
           <i class="icons1">*</i>
        </p>
        <p>
          <span>意向学校</span>
          <a-select
            v-model="form.region"
            placeholder="请选择意向学校"
            class="inp3"
          >
            <a-icon
              slot="suffixIcon"
              type="caret-down"
              class="test"
              style="color: #000"
            />
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
           <i class="icons1">*</i>
        </p>
         <p>
          <span>所选领域</span>
          <a-select
            v-model="form.region1"
            placeholder="请选择领域"
            class="inp3"
          >
            <a-icon
              slot="suffixIcon"
              type="caret-down"
              class="test"
              style="color: #000"
            />
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
           <i class="icons1">*</i>
        </p>
         <p>
          <span>所选专业</span>
          <a-select
            v-model="form.region2"
            placeholder="请选择专业"
            class="inp3"
          >
            <a-icon
              slot="suffixIcon"
              type="caret-down"
              class="test"
              style="color: #000"
            />
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
           <i class="icons1">*</i>
        </p>
         <p>
          <span>当前学历</span>
          <a-select
            v-model="form.region3"
            placeholder="请选择学历"
            class="inp3"
          >
            <a-icon
              slot="suffixIcon"
              type="caret-down"
              class="test"
              style="color: #000"
            />
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
           <i class="icons1">*</i>
        </p>
         <p>
          <span>身份证号</span>
          <a-select
            v-model="form.region4"
            placeholder="请填写身份证号"
            class="inp3"
          >
            <a-icon
              slot="suffixIcon"
              type="caret-down"
              class="test"
              style="color: #000"
            />
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
             <i class="icons1">*</i>
        </p>
         <p class="yiwen"> 
          <span class="doubt">你的疑问</span>
          <a-textarea placeholder="请输入你的疑问" :rows="4" class="inp4" />

        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        region: undefined,
        region1: undefined,
        region2: undefined,
        region3: undefined,
        region4: undefined,
      },
    };
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
};
</script>
<style lang="scss" scoped>
.signup_warp {
  width: 3.75rem;
  background: #eaeaea;
  .avi_nav {
    width: 3.75rem;
    height: 0.44rem;
    background: #fff;
    p {
      line-height: 0.44rem;
      margin-left: 0.2rem;
      color: #888;
      font-size: 0.14rem;
      span:nth-child(3) {
        margin: 0 0.03rem;
      }
      #shou{
          color: #888;
      }
    }
  }
  .signup {
    width: 3.55rem;
    height: 5.5rem;
    background:#fff;
    border-radius: 0.05rem;
    margin: 0 auto;
    margin-top: 0.15rem;
    .signup_top {
      width: 3.55rem;
      height: 0.54rem;
      border-radius: 0.05rem;
      img {
        width: 3.55rem;
        height: 0.54rem;
      }
    }
    .signup_inp {
        position: relative;
      p:nth-child(1) {
        span {
          font-size: 0.16rem;
          font-weight: 800;
          margin: 0 0 0 0.4rem;
        }
        .inp1 {
          width: 2rem;
          height: 0.31rem;
          margin: 0.15rem 0.2rem 0 0.2rem;
        }
        .icons{
            font-size: 0.12rem;
            color: #a95a5d;
            position: absolute;
            left: 1.49rem;
            top: 0.24rem;
             
        }
      }
    
      p{
        position: relative;
         .icons1{
            font-size: 0.12rem;
            color: #a95a5d;
            position: absolute;
            left: 1.49rem;
            top: 0.19rem;
            z-index: 1;
          }
        span {
          font-size: 0.16rem;
          font-weight: 800;
          margin: 0 0 0 0.4rem;
        }
        .inp3 {
          width: 2rem;
          height: 0.31rem;
          margin: 0.1rem 0.2rem 0 0.2rem;
        }
        .doubt{
            position: relative;
            top: -0.75rem;
        }
        .inp4{
            width: 2rem;
            height: 1rem;
            margin: 0 0.2rem 0 0.2rem;
            
        }
      }
      .yiwen{
          margin: 0.1rem 0;
      }
    }
  }
  ::v-deep .ant-input{
      padding: 0  0 0 0.3rem;
      height: 0.3rem;
      font-size: 0.12rem;
  }
  ::v-deep .ant-select-selection__placeholder{
      padding: 0  0 0 0.2rem;
      font-size: 0.12rem;
      height: 0.29rem;
   
  }
  ::v-deep .ant-select-selection--single {
    height: 0.3rem;
  }
  ::v-deep .ant-select-selection-selected-value{
     padding-left:0.2rem ;
  }
}
</style>