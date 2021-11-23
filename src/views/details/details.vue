<template>
  <div class="details">
    <Headerlun />
    <page />
    <div class="requirement">
      <div class="requ">
        <div class="requ-top">
          <span>航空专业</span>
          <span>到底有哪些要求？</span>
          <div class="circular"></div>
          <p>REQUIREMENTS</p>
        </div>
        <div class="img">
          <img src="@/assets/img/航空专业/航空专业详情页_03.jpg" alt="" />
        </div>
        <div class="dotted">
          <p>
            随着航空事业的不断深入，从事航空事业的人也是越来越多，当然航空事业的要求是非常高的，记得当时验飞行员也是百里挑一哦，那么航空专业的要求有哪些?这个问题对于想要上蓝天的人来说是太重要了。
          </p>
          <div class="imgs">
            <img src="@/assets/img/公共/航空专业详情页_04.jpg" alt="" />
          </div>
        </div>
        <div class="number">
          <div class="left">
            <img src="@/assets/img/公共/航空专业详情页_03.png" alt="" />
          </div>
          <div class="right">
            <span class="orange">政治条件：</span>
            <span
              >拥护党的路线、方针、政策，热爱祖国，品德优秀，志愿献身民航飞行事业，符合《民用航空背景调查规定》相关要求。</span
            >
          </div>
        </div>
        <div class="number">
          <div class="left">
            <img src="@/assets/img/公共/航空专业详情页_06.png" alt="" />
          </div>
          <div class="right">
            <span class="blue">身体条件：</span>
            <span
              >大二、大三学生年龄不超过23周岁(1985年8月31日以后出生)，大四学生年龄不超过24周岁(1984年8月31日以后出生)，身高170厘米以上，身体符合《民用航空招收飞行学生体格检查鉴定规范》(MH/T7013-2006)要求。考生可按照《中国民用航空飞行学院招飞自荐标准》进行自我检查。</span
            >
          </div>
        </div>
        <div class="number">
          <div class="left">
            <img src="@/assets/img/公共/航空专业详情页_03_08.png" alt="" />
          </div>
          <div class="right">
            <span class="green">心理品质条件：</span>
            <span
              >参加中国民用航空飞行学院组织的飞行员心理选拔，其心理品质应满足飞行职业需求。</span
            >
          </div>
        </div>
        <div class="number">
          <div class="left">
            <img src="@/assets/img/公共/航空专业详情页_10.png" alt="" />
          </div>
          <div class="right">
            <span class="pink">学历文化条件：</span>
            <span
              >普通二类本科以上在校大二、大三学生或毕业生，专业不限。在校学习成绩优良，具有良好的中英文口头表达能力。大学毕业生必须达到英语四级水平。大二、三学生经考核认定英语达到相当于四级水平。</span
            >
          </div>
        </div>
        <div class="aviation_text">
          <div class="aviation_text_content">
            <a-form-model
              ref="ruleForm"
              :model="form"
              :rules="rules"
              :label-col="labelCol"
              :wrapper-col="wrapperCol"
            >
              <a-form-model-item ref="names" label="" prop="names">
                <div class="aviation_text_input">
                  <span class="span"><em>*</em>学生姓名</span>
                  <a-input
                    v-model="form.names"
                    placeholder="请填写姓名"
                    @blur="
                      () => {
                        $refs.names.onFieldBlur();
                      }
                    "
                  ></a-input>
                </div>
              </a-form-model-item>
              <a-form-model-item ref="numbers" label="" prop="numbers">
                <div class="aviation_text_input">
                  <span class="span"><em>*</em>手机号码</span>
                  <a-input
                    v-model="form.numbers"
                    placeholder="请填写手机号码"
                    @blur="
                      () => {
                        $refs.numbers.onFieldBlur();
                      }
                    "
                  ></a-input>
                </div>
              </a-form-model-item>
              <a-form-model-item ref="dates" label="" required prop="dates">
                <div class="aviation_text_input">
                  <span class="span"><em>*</em>出生年月</span>
                  <a-date-picker
                    v-model="form.dates"
                    show-time
                    type="date"
                    style="height: 0.35rem; color: #000 !important"
                    :size="size"
                    placeholder="请选择出生年月"
                    @blur="
                      () => {
                        $refs.dates.onFieldBlur();
                      }
                    "
                  />
                </div>
              </a-form-model-item>

              <a-form-model-item
                ref="regions"
                label=""
                style="margin: 0"
                prop="regions"
              >
                <div class="aviation_text_cascader">
                  <span class="span"><em>*</em>所选课程</span>
                  <div class="from_three">
                    <a-select
                      v-model="form.regions"
                      placeholder="请选择课程"
                      @blur="
                        () => {
                          $refs.regions.onFieldBlur();
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
                        <span style="color: #000">javaScript精选课程</span>
                      </a-select-option>
                      <a-select-option value="北大大学">
                        <span style="color: #000">jquery精选课程</span>
                      </a-select-option>
                    </a-select>
                  </div>
                </div>
              </a-form-model-item>

              <a-form-model-item
                ref="educations"
                label=""
                style="margin: 0"
                prop="educations"
              >
                <div class="aviation_text_cascader">
                  <span class="span"><em>*</em>当前学历</span>
                  <div class="from_three">
                    <a-select
                      v-model="form.educations"
                      placeholder="请选择学历"
                      @blur="
                        () => {
                          $refs.educations.onFieldBlur();
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

              <a-form-model-item ref="id_numbers" label="" prop="id_numbers">
                <div class="aviation_text_input">
                  <span class="span"><em>*</em>身份证号</span>
                  <a-input
                    v-model="form.id_numbers"
                    placeholder="请填写身份证号"
                    @blur="
                      () => {
                        $refs.id_numbers.onFieldBlur();
                      }
                    "
                  ></a-input>
                </div>
              </a-form-model-item>

              <a-form-model-item label="" prop="descs">
                <div class="aviation_textarea">
                  <span>您的疑问</span>
                  <div class="aviation_textarea_text">
                    <textarea
                      v-model="form.descs"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      style="color: #000"
                      placeholder="请填写您的疑问"
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
        <div class="go">
          <p>上一篇：航空方面有哪些专业？</p>
          <p>下一篇：航空专业就业前景如何？</p>
        </div>
      </div>
    </div>
    <div class="cdsa">
      <aviation />
      <div class="click">更多院校></div>
    </div>
    <div class="read">
      <div class="read-top">
        <img src="@/assets/img/航空专业/推荐阅读_03.jpg" alt="" />
      </div>
      <Data />
    </div>
  </div>
</template>

<script>
import Data from "@/views/details/data.vue";
import Headerlun from "@/components/header-lun/header_lun.vue";
import Aviation from "@/views/homes/major/aviation.vue";
import Five from "@/views/homes/Five/index.vue";
import Page from "@/components/page/index.vue";

export default {
  components: { Data, Headerlun, Aviation, Page, Five },
  data() {
    return {
      visible: false,
      size: "default",
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      form: {
        names: "",
        numbers: "",
        regions: undefined,
        dates: undefined,
        educations: undefined,
        id_numbers: undefined,
        type: [],
        descs: "",
      },
      rules: {
        names: [
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
        numbers: [
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
        regions: [
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
        dates: [
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
        educations: [
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
        id_numbers: [
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
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        descs: [
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
.title_warp {
  width: 100%;
  padding: 0 0.2rem;
  margin: 0.15rem 0;
  box-sizing: border-box;
  p {
    width: 100%;
    text-align: left;
    span {
      font-size: 0.14rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.07rem;
      letter-spacing: 0px;
      color: #888888;
    }
    .hang {
      margin-left: 0.05rem;
      font-family: PingFang-SC-Medium;
      font-size: 0.14rem;
      font-weight: normal;
      letter-spacing: 0px;
      color: #b0b0b0;
    }
  }
}
.requirement {
  width: 100%;
  // padding: 0.15rem 0.1rem;
  padding: 0 0.1rem .15rem .1rem;
  box-sizing: border-box;
  .requ {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    .requ-top {
      width: 100%;
      padding: 0.2rem 0.68rem;
      font-size: 0.18rem;
      font-weight: 700;
      text-align: center;
      box-sizing: border-box;
      span:first-of-type {
        color: rgb(51, 102, 204);
      }
      .circular {
        width: 0.04rem;
        height: 0.04rem;
        border-radius: 50px;
        background: rgb(102, 102, 102);
        margin: 0.05rem auto;
        position: relative;
      }
      .circular::before {
        content: "";
        position: absolute;
        display: block;
        right: 0.07rem;
        width: 0.5rem;
        top: 0.013rem;
        border-bottom: 1px solid rgb(102, 102, 102);
      }
      .circular::after {
        content: "";
        position: absolute;
        display: block;
        left: 0.07rem;
        width: 0.5rem;
        top: 0.013rem;
        border-bottom: 1px solid rgb(102, 102, 102);
      }
      p {
        font-size: 0.16rem;
        color: rgb(102, 102, 102);
      }
    }
    .img {
      width: 100%;
      height: 1.45rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .dotted {
      width: 3.3rem;
      height: 0.91rem;
      margin: 0.15rem 0.1rem 0.2rem;
      border-radius: 15px;
      border: 1px dashed rgb(153, 153, 153);
      padding: 0.1rem 0.13rem;
      box-sizing: border-box;
      text-indent: 0.25rem;
      position: relative;
      font-size: 0.12rem;
      color: rgb(51, 51, 51);
      .imgs {
        width: 0.13rem;
        height: 0.09rem;
        position: absolute;
        bottom: -0.14rem;
        left: 50%;
        margin-left: -0.065rem;
        img {
          width: 100%;
          height: 100%;
          float: left;
        }
      }
    }
    .number {
      width: 3.14rem;
      margin: 0.15rem 0.1rem;
      padding-bottom: 0.15rem;
      border-bottom: 1px dotted rgb(153, 153, 153);
      overflow: hidden;
      .left {
        float: left;
        width: 0.51rem;
        img {
          width: 100%;
          height: 0.53rem;
        }
      }
      .right {
        width: 2.53rem;
        float: left;
        font-size: 0.12rem;
        .orange {
          color: rgb(255, 51, 0);
        }
        .blue {
          color: rgb(0, 102, 153);
        }
        .green {
          color: rgb(0, 136, 24);
        }
        .pink {
          color: rgb(126, 0, 146);
        }
      }
    }
    .aviation_text {
      border-radius: 0.04rem;
      // margin: 0 0.1rem;
      margin-top: 0.15rem;
      margin-bottom: 0.15rem;
      overflow: hidden;
      background-color: #fff;
      ::v-deep .ant-form-item-control{
        display: flex;
        flex-direction: column;
        width: 3.55rem;
        // width: 2.73rem;
        // margin: 0 auto;
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
            margin: .15rem 0 auto;
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
            height: 0.13rem;
            text-align: center;
            padding-bottom: 0.15rem;
            display: block;
            // padding: 0 0 0.03rem 0;
            padding-top: .05rem;
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
    .go {
      margin-left: 0.16rem;
      p {
        margin-bottom: 0.15rem;
        color: rgb(51, 51, 51);
      }
    }
  }
}
.cdsa {
  overflow: hidden;
  width: 3.55rem;
  margin: 0 auto 0.15rem;
  border-radius: 0.05rem;
  box-shadow: 0 0 8px #ccc;
}
.click {
  text-align: center;
  color: rgb(153, 153, 153);
  margin: 0.18rem 0;
}
.read {
  width: 3.55rem;
  margin: 0 auto 0.15rem;
  background: #fff;
  padding-bottom: 0.3rem;
  border-radius: 5px;
  overflow: hidden;
  .read-top {
    width: 100%;
    height: 0.55rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
