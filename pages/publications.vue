<template>
  <div class="container publications-page">
    <p class="sub-title">
      The vault of STUIX wisdom.
    </p>
    <div class="pub-layout">
      <section
        v-if="publications.book && publications.book.length"
        class="publication-section"
      >
        <h2>Books</h2>
        <ul class="publication-list">
          <li v-for="(item, index) in publications.book" :key="`book-${index}`">
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
        v-if="publications.networking && publications.networking.length"
        class="publication-section"
      >
        <h2>Networking</h2>
        <ul class="publication-list">
          <li
            v-for="(item, index) in publications.networking"
            :key="`networking-${index}`"
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
        book: [
          {
            title: "榮勾斯揪的皇家蜂蜜學：從 Kira Kira 到 KUSO 品嚐法",
            authors: "國王熊熊（SKOG）, 蜜蜂侍衛長",
            publisher: "出版：閃閃蜂窩城堡皇家出版社, 2024 年，怕的是他。",
            url: "#榮勾斯揪的書1" // Placeholder
          },
          {
            title: "蓋被被曬太陽：榮勾斯揪的 LKK 哲學 (安安版)",
            authors: "榮勾（著）, 勝勝（被被提供者）",
            publisher: "出版：懶洋洋出版社, 2023 年，你很奇欸。",
            url: "#榮勾斯揪的書2" // Placeholder
          },
          {
            title: "告老師！那些關於偶的 Hito 故事",
            authors: "斯勾（口述）, 某不具名蜜蜂（筆錄）",
            publisher: "出版：KUSO 文學社, 不詳年份，哇賽！",
            doiText: "[je ne sais quoi]",
            doiUrl: "#榮勾斯揪的書3_doi", // Placeholder
            url: "#榮勾斯揪的書3" // Placeholder
          }
        ],
        networking: [
          {
            title: "皇家低調奢華感的網路架構：專為國王熊熊設計",
            authors: "榮勾斯揪, 蜜蜂網路工程大臣",
            conference: "第一屆熊熊網際網路研討會（Binternet '24），挖哩咧！",
            url: "#榮勾斯揪的網1" // Placeholder
          },
          {
            title: "Zzz ～怕的是我～ Zzz：一種新型態網路睡眠協定",
            authors: "SKOG, 粉口愛研究員A, 粉口愛研究員B",
            details: "2024 年 3 月，醬子就很ㄅㄧㄤˋ了。",
            arxivText: "arXiv 預印本 (LDS 版)",
            arxivUrl: "#榮勾斯揪的網2_arxiv", // Placeholder
            url: "#榮勾斯揪的網2" // Placeholder
          },
          {
            title: "蜂蜜王國的網路安全：如何防止 SPP 攻擊",
            authors: "國王熊熊, 皇家資安蜜蜂團隊",
            conference:
              "Kira Kira 安全技術峰會 (KKSec '23)，ㄘㄟˊ，那些很遜的駭客。",
            url: "#榮勾斯揪的網3" // Placeholder
          }
        ]
      }
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

  .win95 &
    margin-top: 1rem
    text-align: left

.pub-layout
  // display: flex // Removed for single-column layout
  // gap: 2.5rem // Removed

  // Styles for former sidebar content, now direct children of .pub-layout
  p.eyebrow
    color: $primary-blue
    text-transform: uppercase
    font-size: 0.9rem
    font-weight: bold
    margin-bottom: 0.5rem
  h1
    font-size: 2.8rem
    font-weight: 700
    line-height: 1.2
    margin-bottom: 1.5rem
  // Specific styling for the "Missing a publication..." link
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
      &.authors
        // font-style: italic // Optional: if you want to emphasize authors
      &.publisher, &.conference, &.details
        font-size: 0.9rem
      a.doi-link, a.arxiv-link
        margin-left: 0.5em
        // font-weight: normal // Optional: if you prefer non-bold links here

// Responsive adjustments
@media (max-width: 768px)
  .pub-layout
    // flex-direction: column // No longer flex
    h1 // Adjust h1 size for smaller screens (moved from old sidebar specific rule)
      font-size: 2.2rem
    // Removed __sidebar and __main specific responsive rules.

  .publication-section:first-of-type
    margin-top: 2rem // Add some space between header content and first section on small screens

// Windows 95 theme adjustments
:global(body.win95theme .publications-page)
  .pub-layout // Styles for content formerly in sidebar
    p.eyebrow, > p > a // Target specific elements
      color: blue
    // .external-icon might need specific styling for W95 if the default SVG is not desired

  .publication-section
    h2
      border-bottom-color: silver
</style>
