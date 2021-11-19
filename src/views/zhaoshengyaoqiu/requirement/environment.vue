<template>
    <div class="environment">
        <div class="en-top">
            <img src="@/assets/images2/国际航空服务与管理_22.jpg" alt="">
        </div>
        <div class="en-content">
            <div class="content-top">
                <div class="top-left">
                    <img src="@/assets/images2/国际航空服务与管理_50.jpg" alt="">
                </div>
                <div class="top-right">
                    <div class="right-top">
                        <img src="@/assets/images2/国际航空服务与管理_50.jpg" alt="">
                    </div>
                    <div class="right-bottom">
                        <img src="@/assets/images2/国际航空服务与管理_50.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="content-bottom">
                <div>
                    <img src="@/assets/images2/国际航空服务与管理_50.jpg" alt="">
                </div>
                <div>
                    <img src="@/assets/images2/国际航空服务与管理_50.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
 export default{
}
</script>

<style lang='scss' scoped>
.environment{
    width: 3.55rem;
    margin: .15rem auto 0;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    .en-top{
        width: 100%;
        height: .55rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .en-content{
        width: 100%;
        padding: .1rem .1rem;
        height: 3rem;
        box-sizing: border-box;
        .content-top{
            width: 100%;
            display: flex;
            justify-content: space-between;
            .top-left{
                width: 2.1rem;
                height: 1.64rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .top-right{
                width: 1.15rem;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                .right-top{
                    width: 100%;
                    height: .75rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .right-bottom{
                    width: 100%;
                    height: .75rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .content-bottom{
            width: 100%;
            padding-top: .1rem;
            display: flex;
            justify-content: space-between;
            div{
                width: 1.63rem;
                height: 1rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>
