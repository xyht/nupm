<template>
  <div  class="app">
    <v-header :seller="seller" v-show="hasHeader && !hasShow ()"></v-header>
    <div class="tab border-1px" v-show="!hasShow ()">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive >
      <router-view
        :seller="seller" @showbox="toshow"
        :msg="msg" v-show="!hasShow ()"
        @thegetfoods="thegetfoods"
      >
      </router-view>
    </keep-alive>
    <pay v-show="hasShow ()" :hasShowto="hasShow
    ()" @haspay="haspay"  :food="food"
         :seller="seller"
    >
    </pay>
  </div>
</template>

<script type="text/ecmascript-6">
import VHeader from './components/onheader/onheader'
import pay from './components/pay/pay'
const ERR_OR = 0

export default {
  data () {
    return {
      seller: {},
      hasHeader: true,
      msg: '',
      food: {
        type: Array
      }
    }
  },
  created () {
    this.$http.get('http://123.206.29.239/tp5/public/index.php/index/vue/seller').then((response) => {
      response = response.body
      if (response.errno === ERR_OR) {
        this.seller = response.data
      }
    })
  },
  components: {
    VHeader,
    pay
  },
  methods: {
    toshow (msg) {
      this.msg = msg
    },
    thegetfoods (selectFoods) {
      this.food = selectFoods
    },
    hasShow () {
      if (this.msg === 'enough') {
        return true
      } else { return false }
    },
    haspay (msg) {
      this.msg = msg
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./commen/stylus/mixin.styl"
  .app
    .tab
      display:flex
      width :100%
      height :40px
      line-height: 40px
      //border-bottom 1px solid rgba(7,17,27,0.1)
      border-px(rgba(7,17,27,0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display block
          font-size :14px
          color: rgb(77,85,93)
          &.active
            color :rgb(240,20,20)
</style>
