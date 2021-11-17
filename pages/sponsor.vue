<template>
  <div class="container">
    <!-- <h2>Platinum</h2>
    <div class="sponsor-container platinum">
      <div class="sponsor">
        <img src="/img/sponsor/sky.png" />
        <div class="name">
          <div class="en">Sky Digital Co., Ltd.</div>
          <div class="zh">天空數位有限公司</div>
        </div>
      </div>
    </div> -->

    <h2>Gold</h2>
    <div class="sponsor-container gold">
      <div class="sponsor">
        <img src="/img/sponsor/sky.png" />
        <div class="name">
          <div class="en">Sky Digital Co., Ltd.</div>
          <div class="zh">天空數位有限公司</div>
        </div>
      </div>
    </div>

    <h2>Silver</h2>
    <div class="sponsor-container silver">
      <div class="sponsor">
        <img src="/img/sponsor/twds.png" />
        <div class="name">
          <div class="en">Taiwan Digital Streaming Co.</div>
          <div class="zh">台灣數位串流有限公司</div>
        </div>
      </div>
      <div class="sponsor">
        <img src="/img/sponsor/eons.png" />
        <div class="name">
          <div class="en">Eons Data Communications Limited</div>
          <div class="zh">億安數據通信有限公司</div>
        </div>
      </div>
    </div>

    <!-- <h2>Bronze</h2>
    <div class="sponsor-container bronze">
      <div class="sponsor">
        <img src="/img/sponsor/twds.png" />
        <div class="name">
          <div class="en">Taiwan Digital Streaming Co.</div>
          <div class="zh">台灣數位串流有限公司</div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<style lang="sass" scoped>
h2
    font-size: 1.5rem
    margin: 16px 0
    margin-top: 32px
.sponsor-container
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-gap: 16px
    margin-bottom: 16px
    &.platinum
        grid-template-columns: repeat(2, 1fr)
        .sponsor
            border-bottom: 4px solid #939097
            background: linear-gradient(126.7deg,rgba(147, 144, 151, 0.1) 25%, rgba(0, 0, 0, 0.05))
            .name
                text-align: center
                font-size: 1.2rem
    &.gold
        grid-template-columns: repeat(3, 1fr)
        .sponsor
            border-bottom: 4px solid #f8dba4
    &.silver,&.bronze
        font-size: 0.75rem
    @media (max-width: 768px)
        grid-template-columns: repeat(2, 1fr)
        &.platinum
            grid-template-columns: repeat(1, 1fr)
        &.gold
            grid-template-columns: repeat(2, 1fr)
    .sponsor
        text-align: center
        background-color: rgba(0, 0, 0, 0.05)
        border-radius: 4px
        position: relative
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        &::before
            content: ''
            font-size: 8px
            font-weight: bold
            position: absolute
            bottom: calc(-8px - 0.5rem)
            right: 0
            left: 0
            margin: 0 auto
            padding: 4px 2px
            color: #fff
            border-radius: 100em
            display: none
            width: 80px
        img
            width: 75%
        .name
            padding: 8px 4px
            padding-top: 0
        .win95 &
            border-radius: 0
            background: #fff
            box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a

    &.bronze .sponsor
        background-color: transparent
        border: 1px solid rgba(0, 0, 0, 0.05)
</style>
<script>
export default {
  layout: ({ layout }) => layout,
  data() {
    return {
      page: '/sponsor/',
      title: 'Sponsor'
    }
  },
  mounted() {
    this.$store.commit('updatePage', this.page)
    this.$store.commit('updateTitle', this.title)
  }
}
</script>
