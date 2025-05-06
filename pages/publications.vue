<template>
  <div class="container publications-page">
    <p class="sub-title">
      Publications / Research Topics / Lecture using STUIX related resources.
    </p>
    <div class="pub-layout">
      <p>
        <a
          href="https://github.com/STU-IX/stuix.io/blob/main/pages/publications.vue"
          target="_blank"
          rel="noopener noreferrer"
        >
          Missing a publication, or want to add yours?
          <span class="external-icon"></span>
        </a>
      </p>

      <section
        v-if="publications.researchTopic && publications.researchTopic.length"
        class="publication-section"
      >
        <h2>Research Topic</h2>
        <ul class="publication-list">
          <li
            v-for="(item, index) in publications.researchTopic"
            :key="`researchTopic-${index}`"
          >
            <h3>
              <a
                :href="item.url || '#'"
                target="_blank"
                rel="noopener noreferrer"
                >{{ item.title }}</a
              >
            </h3>
            <p class="authors">{{ item.authors }}</p>
            <p v-if="item.publisher" class="publisher">
              {{ item.publisher }}
              <a
                v-if="item.doiUrl"
                :href="item.doiUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="doi-link"
                >{{ item.doiText }}</a
              >
            </p>
          </li>
        </ul>
      </section>

      <section
        v-if="publications.lecture && publications.lecture.length"
        class="publication-section"
      >
        <h2>Lecture</h2>
        <ul class="publication-list">
          <li
            v-for="(item, index) in publications.lecture"
            :key="`lecture-${index}`"
          >
            <h3>
              <a
                :href="item.url || '#'"
                target="_blank"
                rel="noopener noreferrer"
                >{{ item.title }}</a
              >
            </h3>
            <p class="authors">{{ item.authors }}</p>
            <p v-if="item.conference" class="conference">
              {{ item.conference }}
            </p>
            <p v-if="item.details" class="details">
              {{ item.details }}
              <a
                v-if="item.arxivUrl"
                :href="item.arxivUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="arxiv-link"
                >{{ item.arxivText }}</a
              >
            </p>
          </li>
        </ul>
      </section>

      <section
        v-if="researchPartners.length"
        class="publication-section partners-section"
      >
        <h2>Research Partner</h2>
        <div class="partner-container">
          <div
            v-for="partner in researchPartners"
            :key="partner.id"
            class="partner-logo-item"
          >
            <img
              :src="partner.imgSrc"
              :alt="partner.name || 'Research Partner Logo'"
            />
            <div v-if="partner.name" class="partner-name">
              {{ partner.name }}
            </div>
          </div>
        </div>
      </section>

      <section
        v-if="educationPartners.length"
        class="publication-section partners-section"
      >
        <h2>Education Partner</h2>
        <div class="partner-container">
          <div
            v-for="partner in educationPartners"
            :key="partner.id"
            class="partner-logo-item"
          >
            <img
              :src="partner.imgSrc"
              :alt="partner.name || 'Education Partner Logo'"
            />
            <div v-if="partner.name" class="partner-name">
              {{ partner.name }}
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicationsPage",
  layout: ({ layout }) => layout,
  data() {
    return {
      page: "publications",
      title: "Publications",
      addPublicationUrl:
        "https://github.com/stuix/website/issues/new?assignees=&labels=publication&template=add-publication.md&title=Add+Publication%3A+%5BYour+Publication+Title%5D",
      publications: {
        researchTopic: [
          {
            title: "榮勾斯揪的皇家蜂蜜學：從 Kira Kira 到 KUSO 品嚐法",
            authors: "國王熊熊（SKOG）, 蜜蜂侍衛長",
            publisher: "出版：閃閃蜂窩城堡皇家出版社, 2024 年，怕的是他。",
            url: "#榮勾斯揪的書1"
          },
          {
            title: "蓋被被曬太陽：榮勾斯揪的 LKK 哲學 (安安版)",
            authors: "榮勾（著）, 勝勝（被被提供者）",
            publisher: "出版：懶洋洋出版社, 2023 年，你很奇欸。",
            url: "#榮勾斯揪的書2"
          },
          {
            title: "告老師！那些關於偶的 Hito 故事",
            authors: "斯勾（口述）, 某不具名蜜蜂（筆錄）",
            publisher: "出版：KUSO 文學社, 不詳年份，哇賽！",
            doiText: "[je ne sais quoi]",
            doiUrl: "#榮勾斯揪的書3_doi",
            url: "#榮勾斯揪的書3"
          }
        ],
        lecture: [
          {
            title: "皇家低調奢華感的網路架構：專為國王熊熊設計",
            authors: "榮勾斯揪, 蜜蜂網路工程大臣",
            conference: "第一屆熊熊網際網路研討會（Binternet '24），挖哩咧！",
            url: "#榮勾斯揪的網1"
          },
          {
            title: "Zzz ～怕的是我～ Zzz：一種新型態網路睡眠協定",
            authors: "SKOG, 粉口愛研究員A, 粉口愛研究員B",
            details: "2024 年 3 月，醬子就很ㄅㄧㄤˋ了。",
            arxivText: "arXiv 預印本 (LDS 版)",
            arxivUrl: "#榮勾斯揪的網2_arxiv",
            url: "#榮勾斯揪的網2"
          },
          {
            title: "蜂蜜王國的網路安全：如何防止 SPP 攻擊",
            authors: "國王熊熊, 皇家資安蜜蜂團隊",
            conference:
              "Kira Kira 安全技術峰會 (KKSec '23)，ㄘㄟˊ，那些很遜的駭客。",
            url: "#榮勾斯揪的網3"
          }
        ],
        classes: [
          {
            title: "STUIX 網路架構與設計",
            authors: "國王熊熊, 蜜蜂網路工程大臣",
            details: "2024 年 3 月，這堂課會讓你變得更聰明！",
            url: "#榮勾斯揪的課程1"
          },
          {
            title: "STUIX 網路安全與防護",
            authors: "國王熊熊, 皇家資安蜜蜂團隊",
            details: "2024 年 3 月，這堂課會讓你變得更聰明！",
            url: "#榮勾斯揪的課程2"
          }
        ]
      },
      researchPartners: [
        /*{
          id: "ripe",
          name: "RIPE NCC",
          imgSrc: "/img/pub/ripe.png"
        }*/
      ],
      educationPartners: [
        {
          id: "twds",
          name: "台灣數位串流有限公司",
          imgSrc: "/img/pub/twds.png"
        },
        {
          id: "simpleinfo",
          name: "簡單資訊有限公司",
          imgSrc: "/img/pub/simple.png"
        },
        {
          id: "ncse",
          name: "NCSE Network 國雲網路",
          imgSrc: "/img/pub/ncse.png"
        },
        {
          id: "scint",
          name: "SCINT 北臺灣學生資訊社群",
          imgSrc: "/img/pub/scint.png"
        },
        {
          id: "thjcc",
          name: "THJCC CTF 臺灣高中資安聯合競賽",
          imgSrc: "/img/pub/thjcc.png"
        }
      ]
    };
  },
  head() {
    return {
      title: `${this.title} - STUIX`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "A list of publications related to STUIX architecture, research, and developments by the community and its collaborators."
        }
      ]
    };
  },
  mounted() {
    if (this.$store) {
      this.$store.commit("updatePage", this.page);
      this.$store.commit("updateTitle", this.title);
    }
  }
};
</script>

<style lang="sass" scoped>
$primary-blue: #007bff

.publications-page
  padding-bottom: 4rem

.sub-title
  text-align: center
  font-size: 1.5rem
  margin-top: -1rem
  margin-bottom: 1.5rem
  text-wrap: balance

  .win95 &
    margin-top: 1rem
    text-align: left

.pub-layout
  // Specific styling for the "Missing a publication..." link
  > p:first-child
    text-align: center
    margin-bottom: 2rem
    margin-top: -1rem

    .win95 &
      text-align: left

  > p > a
    color: $primary-blue
    text-decoration: none
    font-weight: bold
    display: inline-flex
    align-items: center
    &:hover
      text-decoration: underline

    .external-icon
      display: inline-block
      width: 1em
      height: 1em
      margin-left: 0.3em
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'/%3E%3C/svg%3E")
      background-repeat: no-repeat
      background-size: contain
      vertical-align: middle

.publication-section
  margin-bottom: 2.5rem
  h2
    font-size: 2rem
    font-weight: bold
    margin-bottom: 1.5rem
    padding-bottom: 0.75rem
    border-bottom: 1px solid #e0e0e0

.publication-list
  list-style: none
  padding-left: 0
  li
    margin-bottom: 2rem
    h3
      font-size: 1.25rem
      font-weight: bold
      margin-bottom: 0.3rem
      a
        color: $primary-blue
        text-decoration: none
        &:hover
          text-decoration: underline
    p
      font-size: 0.95rem
      color: #555
      line-height: 1.6
      margin-bottom: 0.25rem
      &.publisher, &.conference, &.details
        font-size: 0.9rem
      a.doi-link, a.arxiv-link
        margin-left: 0.5em

// Responsive adjustments
@media (max-width: 768px)
  .publication-section:first-of-type
    margin-top: 2rem

// Windows 95 theme adjustments
:global(body.win95theme .publications-page)
  .pub-layout
    > p > a
      color: blue

  .publication-section
    h2
      border-bottom-color: silver


.partner-container
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
  grid-gap: 16px
  margin-top: 1rem
  margin-bottom: 16px

  .win95 &
    background-color: transparent

.partner-logo-item
  background-color: rgba(0, 0, 0, 0.05)
  border-radius: 4px
  padding: 8px 4px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-between
  text-align: center

  img
    width: 75%
    aspect-ratio: 3/1
    object-fit: contain
    object-position: center
    margin: 15px 0

  .partner-name
    font-size: 0.85rem
    color: #333
    padding: 4px
    line-height: 1.2
    width: 100%

  .win95 &
    background: #fff
    border-radius: 0
    box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a
    padding: 8px 4px

    img
      margin: 15px 0

    .partner-name
      color: #000000
      background-color: transparent
</style>
