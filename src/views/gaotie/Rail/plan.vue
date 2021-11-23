<template>
    <div class="plan">
        <div class="plan-body">
            <div class="plan-img1">
                <img src="@/assets/img/公共/职业规划_03.jpg" alt="">
            </div>
            <div class="plan-img2">
                <img src="@/assets/img/高铁专业/高铁专业_08.gif" alt="">
            </div>
            <div class="plan-list">  
                伴随着近几年铁路格局的改变，铁路事业的发展，形成了在铁路工程和服务领域的人才紧缺，这一专业的人才呈现出供不应求的状态，大量高铁乘务专业的人才缺口急需填补。因此，未来高铁专业的就业前景十分广阔。
            </div>
         </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            highList:[{
                text:"伴随着近几年铁路格局的改变，铁路事业的发展，形成了在铁路工程和服务领域的人才紧缺，这一专业的人才呈现出供不应求的状态，大量高铁乘务专业的人才缺口急需填补。因此，未来高铁专业的就业前景十分广阔。"
            }]
        }
    },
}
</script>

<style lang="scss" scoped>
    .plan{
        width:100%;
        margin-top: .15rem;
        margin-bottom: .15rem;
        display: flex;
        justify-content: center;
        .plan-body{
            width: 3.55rem;
            // height: 2.94rem;
            background: white;
            border-radius: .05rem;
            .plan-img1{
                width: 3.55rem;
	            height: .55rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .plan-img2{
                width: 3.35rem;
                height: 1.2rem;
                margin: 0 auto;
                overflow: hidden;
                border-radius: .05rem;
                margin-top: .1rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .plan-list{
                width: 3.3rem;
                box-sizing: border-box;
                height: .89rem;
                border-radius: .15rem;
                border: dashed  .01rem #999999;
                margin: .1rem .1rem .2rem .1rem;
                padding: .1rem .13rem;
                color: #333333;
                font-size: .12rem;
                font-weight: normal;
                line-height: .18rem;
                li{
                    line-height: .19rem;
                    text-align: justify;
                }
            }
        }   
    }
</style>