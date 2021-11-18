<template>
  <div class="aviation_text">
    <div class="aviation_text_header">
      <a href="">
        <img src="../../assets/images/首页改1_33.gif" alt="" />
      </a>
    </div>
    <div class="aviation_text_content">
      <div class="aviation_text_input">
        <span class='span'><em>*</em>学生姓名</span>
        <a-input v-model="value" placeholder="请填写姓名"></a-input>
      </div>
      <div class="aviation_text_input">
        <span class='span'><em>*</em>手机号码</span>
        <a-input placeholder="请填写手机号码"></a-input>
      </div>
      <div class="aviation_text_input">
        <span class='span'><em>*</em>出生年月</span>
        <a-date-picker style="height:.35rem;color: #000 !important;" :size="size" placeholder="请选择出生年月"/>
      </div>
      <div class="aviation_text_cascader">
        <span class='span'><em>*</em>所选课程</span>
        <div class="from_three">
            <a-select default-value="请选择课程" style="width: 2rem;font-size:.15rem;height: .35rem;color: #ccc;overflow: hidden;">
                <a-icon slot="suffixIcon" type="caret-down" style="width: .11rem;height: .08rem; color: #000;"/>
                <a-select-option  value="清华大学">
                    <span style='color:#000'>javaScript精选课程</span>
                </a-select-option>
                <a-select-option value="北大大学">
                    <span style='color:#000'>jquery精选课程</span>
                </a-select-option>
            </a-select>
        </div>
      </div>
      <div class="aviation_text_cascader">
        <span class='span'><em>*</em>当前学历</span>
        <div class="from_three">
            <a-select default-value="请选择学历" style="width: 2rem;font-size:.15rem;height: .35rem;color: #ccc;overflow: hidden;">
                <a-icon slot="suffixIcon" type="caret-down" style="width: .11rem;height: .08rem; color: #000;"/>
                <a-select-option  value="清华大学">
                    <span style='color:#000'>大专学历</span>
                </a-select-option>
                <a-select-option value="北大大学">
                <span style='color:#000'>本科学历</span>
                </a-select-option>
            </a-select>
        </div>
      </div>
      <div class="aviation_text_input">
        <span class='span'><em>*</em>身份证号</span>
        <a-input placeholder="请填写身份证号"></a-input>
      </div>
      <div class="aviation_textarea">
        <span>您的疑问</span>
        
        <div class="aviation_textarea_text">
          <textarea name="" id="" cols="30" rows="10" style="color:#000" placeholder="请填写您的疑问">
            
          </textarea>
        </div>
      </div>
      <div class="aviation_text_button" @click="submit">
          <span>立即提交</span>
      </div>
      <div class="submit-size">
            <div>
                <span @click="showModal">《隐私保障》</span>
            </div>
            <a-modal v-model="visible" title="隐私保障" ok-text="确认" cancel-text="取消" @ok="hideModal">
            <p>Bla bla ...</p>
            <p>Bla bla ...</p>
            <p>Bla bla ...</p>
            </a-modal>
            <br />
            <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            value:'',
            visible: false,
            size: 'default',
        }
    },
    methods: {
        submit(){
           console.log(this.value);
        },
        showModal() {
            this.visible = true;
        },
        hideModal() {
            this.visible = false;
        },
        confirm() {
            this.$confirm({
                title: 'Confirm',
                content: 'Bla bla ...',
                okText: '确认',
                cancelText: '取消',
            });
        }
    },
}
</script>

<style lang='scss' scoped>
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