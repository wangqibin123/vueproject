<template>
  <div class="aviation_text">
    <div class="aviation_text_header">
      <a href="">
        <img src="../../assets/images/首页改1_33.gif" alt="" />
      </a>
    </div>
    <div class="aviation_text_content">
      <InputOf/>
      <InputText/>
    </div>
  </div>
</template>

<script>
import InputOf from './index.vue'
import InputText from './index1.vue'
export default {
    components:{
      InputOf,
      InputText
    },
}
</script>

<style lang='scss' scoped>
::v-deep .ant-form{
    padding-top: .13rem !important;
}
.aviation_text { 
  border-radius: .04rem;
  margin: 0 0.1rem;
  margin-bottom: 0.15rem;
  overflow: hidden;
  background-color: #fff;
  .aviation_text_header {
    a {
      display: flex;
      border: 0;
      img {
        width: 100%;
      }
    }
  }
  .aviation_text_content {
    display: flex;
    flex-direction: column;
    padding-top: 0.15rem;
    .aviation_text_input {
      display: flex;
      // justify-content: center;
      align-items: center;
      margin-bottom: 0.1rem;
      .span {
        width: 0.8rem;
        line-height: 0.35rem;
        color: #454444;
        margin-left: .3rem;
        em {
          color: #e76888;
        }
      }
      .ant-calendar-picker {
        width: 2rem;
      }
      input {
        // width: 2.52rem;
        width: 2rem;
        border-radius: 0;
        height: 0.35rem;
        color: #000;
      }
    }
    .aviation_textarea{
      display: flex;
      span{
        width: .75rem;
        height: .35rem;
        font-family: PingFang-SC-Medium;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        // color: #333333;
        padding-left: .05rem;
        line-height: 0.35rem;
        color: #454444;
        margin-left: .3rem;
      }
      .aviation_textarea_text{
        border: 1px solid #cbcbcb;
        width: 2rem;
        textarea{
          width: 1.75rem;
          height: .63rem;
          border-radius: .01rem;
          padding-left: .14rem;
          padding-top: .11rem;
          border: none;
          outline: none;
          resize: none;
        }
        textarea::-webkit-input-placeholder { /* WebKit browsers*/
          color: #cbcbcb;
        }
      }
    }
    .aviation_text_cascader {
      display: flex;
      // justify-content: center;
      align-items: center;
      margin-bottom: 0.1rem;
      .span {
        width: 0.8rem;
        // text-align: center;
        line-height: 0.35rem;
        color: #454444;
        margin-left: .3rem;
        em {
          color: #e76888;
        }
      }
      .ant-cascader-picker{
          width: 2rem;
      }
      .from_three{
            position: relative;
            .ant-select-selection-selected-value{
                display: inline-block !important;
                padding-left: .05rem;
                color:#000 !important;
            }
      }
    }
    .aviation_text_button{
        background: #1d6da5;
        width: 2.43rem;
        height: 0.34rem;
        display: block;
        margin: .1rem .5rem 0 .5rem;
        line-height: .34rem;
        text-align: center;
        font-size: .18rem;
        color: #e8ffff;
    }
    .submit-size{
        height: .13rem;
        text-align: center;
        margin-bottom: .11rem;
        display: block;
        padding: 0 0 .03rem 0;
        font-family: PingFang-SC-Medium;
        font-weight: normal;
        font-stretch: normal;
        line-height: 18px;
        letter-spacing: 0px;
        color: #888888;
    }
  }
}

::v-deep .ant-select-selection{
    border-radius: 0 !important;
    z-index: 99;
    font-size: 14px;
    padding-left: .05rem;
}
::v-deep .ant-select-selection--single{
    height: .35rem;
    i{
      svg{
          width: 10px;
          height: 9px;
          font-family: PingFang-SC-Medium;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 18px;
          letter-spacing: 0px;
          color: #888888;
      }
    }
}
::v-deep .ant-select-selection__rendered{
    line-height: .35rem;
}
::v-deep .ant-calendar-picker-input{
    height: .35rem;
}
::v-deep .ant-input{
    height: .35rem;
    display: inline-block;
    padding-left: .15rem;
    color:#000;
    margin-right: .38rem;
    border-radius: 0;
}
</style>