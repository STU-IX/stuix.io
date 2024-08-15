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
    </div>-->

    <h2>Gold</h2>
    <div class="sponsor-container gold">
      <div class="sponsor">
        <img src="/img/sponsor/sky.png" />
        <div class="name">
          <div class="en">Sky Digital Co., Ltd.</div>
          <div class="zh">天空數位有限公司</div>
        </div>
      </div>
      <div class="sponsor">
        <img src="/img/sponsor/pni.png" />
        <div class="name">
          <div class="en">PITTQIAO NETWORK</div>
          <div class="zh">彼得巧網路資訊股份有限公司</div>
        </div>
      </div>
      <div class="sponsor">
        <img src="/img/sponsor/FastLine.png" />
        <div class="name">
          <div class="en">Fast Line</div>
          <div class="zh">台灣速連</div>
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
      <div class="sponsor">
        <img src="/img/sponsor/Akari.png" />
        <div class="name">
          <div class="en">Akari Networks Limited</div>
          <div class="zh" style="opacity: 0 ;">_</div>
        </div>
      </div>
      <div class="sponsor">
        <img src="/img/sponsor/mercycat.png" />
        <div class="name">
          <div class="en">Mercycat Network</div>
          <div class="zh" style="opacity: 0 ;">_</div>
        </div>
      </div>
    </div>

    <h2>Bronze</h2>
    <div class="sponsor-container bronze">
      <div class="sponsor">
        <img src="/img/sponsor/Muilties.png" />
        <div class="name">
          <div class="en">Muilties Network</div>
          <!-- <div class="zh" style="opicity: 0">_</div> -->
        </div>
      </div>
      <div class="sponsor">
        <img src="/img/sponsor/daoport.png" />
        <div class="name">
          <div class="en">DAOport Network</div>
          <!-- <div class="zh" style="opicity: 0">_</div> -->
        </div>
      </div>
      <div class="sponsor">
        <img src="/img/sponsor/nafstorenet.png" />
        <div class="name">
          <div class="en">NAFSTORE NET</div>
          <div class="zh">氟化鈉數位工作室</div>
        </div>
      </div>
    </div>

    <h2>Personal</h2>
    <div class="sponsor-container bronze">
      <span v-for="sponsor of sponsors" :key="sponsor" class="sponsor">
        {{ sponsor }}
      </span>
    </div>
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
  &.platinum,&.silver,&.gold
    .sponsor
      img
        aspect-ratio: 3/1
        object-fit: contain
        object-position: center
        margin: 30px 0
  &.bronze
    .sponsor
      img
        aspect-ratio: 12/5
        object-fit: contain
        margin: 15px 0
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
import sponsors from "@/static/data/stuix-sponsors.json";
export default {
  layout: ({ layout }) => layout,
  data() {
    return {
      page: "/sponsor/",
      title: "Sponsor",
      sponsors
    };
  },
  mounted() {
    this.$store.commit("updatePage", this.page);
    this.$store.commit("updateTitle", this.title);
  }
};
</script>
