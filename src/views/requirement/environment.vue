<template>
  <div class="environment">
      <div class="en-top">
          <img src="@/assets/images2/国际航空服务与管理_22.jpg" alt="">
      </div>
      <div class="en-content">
          <div class="en-left">
              <img src="@/assets/images2/国际航空服务与管理_44.jpg" alt="">
          </div>
          <div class="en-right">
              <img src="@/assets/images2/国际航空服务与管理_46.jpg" alt="">
              <img src="@/assets/images2/国际航空服务与管理_48.jpg" alt="">
          </div>
      </div>
  </div>
</template>

<script type="text/javascript">
 export default{
}
</script>

<style lang='scss'>
.environment{
    width: 3.55rem;
    margin: .05rem auto 0;
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
        padding: .1rem 0;
        overflow: hidden;
        .en-left{
            float: left;
            width: 2.2rem;
            height: 1.6rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .en-right{
            float: right;
            width: 1.25rem;
            height: 1.6rem;
            position: relative;
            img{
                width: 100%;
                height: .75rem;
            }
            img:last-of-type{
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }
    }
}
</style>
