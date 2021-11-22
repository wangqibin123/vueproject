<template>
  <div class="aviation_text">
    <div class="aviation_text_header">
      <a href="">
        <img src="../../assets/images/首页改1_33.gif" alt="" />
      </a>
    </div>
    <div class="aviation_text_content">
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item ref="name" label="" prop="name">
          <div class="aviation_text_input">
            <span class="span"><em>*</em>学生姓名</span>
            <a-input
              v-model="form.name"
              placeholder="请填写姓名"
              @blur="
                () => {
                  $refs.name.onFieldBlur();
                }
              "
            ></a-input>
          </div>
        </a-form-model-item>
        <a-form-model-item ref="number" label="" prop="name">
          <div class="aviation_text_input">
            <span class="span"><em>*</em>手机号码</span>
            <a-input
              v-model="form.number"
              placeholder="请填写手机号码"
              @blur="
                () => {
                  $refs.number.onFieldBlur();
                }
              "
            ></a-input>
          </div>
        </a-form-model-item>
        <a-form-model-item ref="date1" label="" required prop="date1">
          <div class="aviation_text_input">
            <span class="span"><em>*</em>出生年月</span>
            <a-date-picker
              v-model="form.date1"
              show-time
              type="date"
              style="height: 0.35rem; color: #000 !important"
              :size="size"
              placeholder="请选择出生年月"
              @blur="
                () => {
                  $refs.date1.onFieldBlur();
                }
              "
            />
          </div>
        </a-form-model-item>

        <a-form-model-item ref="region" label="" style="margin: 0" prop="region">
          <div class="aviation_text_cascader">
            <span class="span"><em>*</em>所选课程</span>
            <div class="from_three">
              <a-select
                v-model="form.region"
                placeholder="请选择课程"
                style="
                  width: 2rem;
                  font-size: 0.15rem;
                  height: 0.35rem;
                  color: #ccc;
                  overflow: hidden;
                "
                 @blur="
                    () => {
                      $refs.region.onFieldBlur();
                    }
                  "
              >
                <a-icon
                  slot="suffixIcon"
                  type="caret-down"
                  style="width: 0.11rem; height: 0.08rem; color: #000"
                />
                <a-select-option value="清华大学">
                  <span style="color: #000">javaScript精选课程</span>
                </a-select-option>
                <a-select-option value="北大大学">
                  <span style="color: #000">jquery精选课程</span>
                </a-select-option>
              </a-select>
            </div>
          </div>
        </a-form-model-item>

        <a-form-model-item label="" style="margin: 0" ref="education" prop="education">
          <div class="aviation_text_cascader">
            <span class="span"><em>*</em>当前学历</span>
            <div class="from_three">
              <a-select
                v-model="form.education"
                placeholder="请选择学历"
                 @blur="
                    () => {
                      $refs.education.onFieldBlur();
                    }
                  "
                style="
                  width: 2rem;
                  font-size: 0.15rem;
                  height: 0.35rem;
                  color: #ccc;
                  overflow: hidden;
                "
              >
                <a-icon
                  slot="suffixIcon"
                  type="caret-down"
                  style="width: 0.11rem; height: 0.08rem; color: #000"
                />
                <a-select-option value="清华大学">
                  <span style="color: #000">大专学历</span>
                </a-select-option>
                <a-select-option value="北大大学">
                  <span style="color: #000">本科学历</span>
                </a-select-option>
              </a-select>
            </div>
          </div>
        </a-form-model-item>

        <a-form-model-item label="" prop="id_number" ref="id_number">
          <div class="aviation_text_input">
            <span class="span"><em>*</em>身份证号</span>
            <a-input
              v-model="form.id_number"
              placeholder="请填写身份证号"
              @blur="
                    () => {
                      $refs.id_number.onFieldBlur();
                    }
                  "
            ></a-input>
          </div>
        </a-form-model-item>

        <a-form-model-item label="" prop="desc" ref="desc">
          <div class="aviation_textarea">
            <span>您的疑问</span>
            <div class="aviation_textarea_text">
              <textarea
                v-model="form.desc"
                name=""
                id=""
                cols="30"
                rows="10"
                style="color: #000"
                placeholder="请填写您的疑问"
                @blur="
                    () => {
                      $refs.desc.onFieldBlur();
                    }
                  "
              >
              </textarea>
            </div>
          </div>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <!-- <a-button type="primary" @click="onSubmit"> -->
          <div class="bottom_jick">
            <div class="aviation_text_button" @click="onSubmit">
              <span>立即提交</span>
            </div>
            <div class="submit-size">
              <div>
                <span @click="showModal">《隐私保障》</span>
              </div>
              <a-modal
                v-model="visible"
                title="隐私保障"
                ok-text="确认"
                cancel-text="取消"
                @ok="hideModal"
              >
                <p>Bla bla ...</p>
                <p>Bla bla ...</p>
                <p>Bla bla ...</p>
              </a-modal>
              <br />
              <br />
            </div>
          </div>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      size: "default",
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      form: {
        name: "",
        number: "",
        region: undefined,
        date1: undefined,
        education: undefined,
        id_number: undefined,
        type: [],
        desc: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        date1: [
          {
            required: true,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        education: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        id_number: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please input activity form",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert("submit!");
          console.log(this.form);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    submit() {
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
        title: "Confirm",
        content: "Bla bla ...",
        okText: "确认",
        cancelText: "取消",
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.aviation_text {
  border-radius: 0.04rem;
  // margin: 0 0.1rem;
  margin-top: .15rem;
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
  ::v-deep .ant-form-item-control{
    display: flex;
    flex-direction: column;
    width: 3.55rem;
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
        margin-left: 0.3rem;
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
    .aviation_textarea {
      display: flex;
      span {
        width: 0.75rem;
        height: 0.35rem;
        font-family: PingFang-SC-Medium;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        // color: #333333;
        padding-left: 0.05rem;
        line-height: 0.35rem;
        color: #454444;
        margin-left: 0.3rem;
      }
      .aviation_textarea_text {
        border: 1px solid #cbcbcb;
        width: 2rem;
        textarea {
          width: 1.75rem;
          height: 0.63rem;
          border-radius: 0.01rem;
          padding-left: 0.14rem;
          padding-top: 0.11rem;
          border: none;
          outline: none;
          resize: none;
        }
        textarea::-webkit-input-placeholder {
          /* WebKit browsers*/
          color: #cbcbcb;
        }
      }
    }
    .aviation_text_cascader {
      display: flex;
      // justify-content: center;
      //   align-items: center;
      margin-bottom: 0.1rem;
      .span {
        width: 0.8rem;
        // text-align: center;
        line-height: 0.35rem;
        color: #454444;
        margin-left: 0.3rem;
        em {
          color: #e76888;
        }
      }
      .ant-cascader-picker {
        width: 2rem;
      }
      .from_three {
        position: relative;
        height: 0.35rem;
        .ant-select-selection-selected-value {
          display: inline-block !important;
          padding-left: 0.05rem;
          color: #000 !important;
        }
      }
    }
   .bottom_jick{
        margin-top: .15rem;
      .aviation_text_button {
        background: #1d6da5;
        width: 2.73rem;
        height: 0.44rem;
        display: block;
        // margin: 0.1rem 0.5rem 0 0.5rem;
        margin: 0 auto;
        line-height: 0.44rem;
        text-align: center;
        font-size: 0.18rem;
        color: #e8ffff;
      }
      .submit-size {
        // padding: 0 0 0.03rem 0;
        // padding-top: .05rem;
        padding-bottom: .15rem;
        height: 0.13rem;
        text-align: center;
        // margin-bottom: 0.05rem;
        padding-top: .05rem;
        display: block;
        font-family: PingFang-SC-Medium;
        font-weight: normal;
        font-stretch: normal;
        line-height: 18px;
        letter-spacing: 0px;
        color: #888888;
      }
    }
  }
}
::v-deep .ant-select-selection {
  border-radius: 0 !important;
  z-index: 99;
  font-size: 14px;
  padding-left: 0.05rem;
}
::v-deep .ant-select-selection--single {
  height: 0.35rem;
  i {
    svg {
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
::v-deep .ant-select-selection__rendered {
  line-height: 0.35rem;
}
::v-deep .ant-calendar-picker-input {
  height: 0.35rem;
}
::v-deep .ant-input {
  height: 0.35rem;
  display: inline-block;
  padding-left: 0.15rem;
  color: #000;
  margin-right: 0.38rem;
  border-radius: 0;
}
.ant-form-item {
  margin: 0;
}
::v-deep .ant-col-offset-4 {
  margin: 0 !important;
}
::v-deep .ant-form-explain {
  text-align: center;
  padding-left: 0.25rem;
  padding-bottom: 0.05rem;
}
</style>