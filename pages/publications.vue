<template>
  <div class="container publications-page">
    <p class="sub-title">
      Publications / Research Topics / Lectures using STUIX related resources.
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
        v-if="networkUsers.length"
        class="publication-section network-users-section"
      >
        <h2>Providing Network Resources</h2>
        <div class="network-user-list">
          <span
            v-for="user of networkUsers"
            :key="user"
            class="networkuser-tag"
          >
            {{ user }}
          </span>
        </div>
      </section>

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
                v-if="item.url"
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                >{{ item.title }}</a
              >
              <span v-else>{{ item.title }}</span>
            </h3>
            <p class="authors">{{ item.authors }}</p>
            <p v-if="item.publisher" class="publisher">
              {{ item.publisher }}
            </p>
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
            <div v-if="item.tags && item.tags.length" class="publication-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag-item">{{
                tag
              }}</span>
            </div>
          </li>
        </ul>
      </section>

      <section
        v-if="publications.lecture && publications.lecture.length"
        class="publication-section"
      >
        <h2>Lectures</h2>
        <ul class="publication-list">
          <li
            v-for="(item, index) in publications.lecture"
            :key="`lecture-${index}`"
          >
            <h3>
              <a
                v-if="item.url"
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                >{{ item.title }}</a
              >
              <span v-else>{{ item.title }}</span>
            </h3>
            <p class="date">{{ item.date }}</p>
            <p class="authors">{{ item.authors }} / {{ item.org }}</p>
            <div v-if="item.tags && item.tags.length" class="publication-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag-item">{{
                tag
              }}</span>
            </div>
          </li>
        </ul>
      </section>

      <section
        v-if="publications.others && publications.others.length"
        class="publication-section"
      >
        <h2>Others</h2>
        <ul class="publication-list">
          <li
            v-for="(item, index) in publications.others"
            :key="`others-${index}`"
          >
            <h3>
              <a
                v-if="item.url"
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                >{{ item.title }}</a
              >
              <span v-else>{{ item.title }}</span>
            </h3>
            <p class="authors">{{ item.authors }} / {{ item.place }}</p>
            <p v-if="item.details" class="details">
              {{ item.details }}
            </p>
            <div v-if="item.tags && item.tags.length" class="publication-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag-item">{{
                tag
              }}</span>
            </div>
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
      page: "/publications/",
      title: "Publications",
      addPublicationUrl:
        "https://github.com/stuix/website/issues/new?assignees=&labels=publication&template=add-publication.md&title=Add+Publication%3A+%5BYour+Publication+Title%5D",
      publications: {
        researchTopic: [
          {
            title:
              "From Spoofing to Tunneling: New Red Team Networking Skills for Initial Access, Evasion and Domain Compromise",
            authors: "Shu-Hao, Tung",
            publisher: "Ongoing Research",
            tags: ["Security", "Tunneling"]
          },
          {
            title:
              "從 Segment Routing 往回看，Tunnel Injection 一招讓你內網看光光",
            authors: "Yu-Shan, Tsai",
            publisher: "Ongoing Research",
            tags: ["Security", "Tunneling"]
          }
        ],
        lecture: [
          {
            title: "網路安全與實作",
            authors: "Li-Heng, Yu",
            date: "2021/04/26",
            org: "國立清華大學 CSST 程式設計討論會",
            tags: ["Routing", "TCP/IP", "Security"]
          },
          {
            title: "網路安全與實作 - Internetworking",
            authors: "Li-Heng, Yu",
            date: "2021/05/03",
            org: "國立清華大學 CSST 程式設計討論會",
            tags: ["BGP", "Peering", "Security", "Routing"]
          },
          {
            title: "玩轉 iptables 第一次就上手",
            authors: "Li-Heng, Yu",
            date: "2021/12/22",
            org: "國立清華大學 CSST 程式設計討論會",
            tags: ["Routing", "TCP/IP"]
          },
          {
            title: "網路基礎",
            authors: "Sheng-Yuan, Feng",
            date: "2023/3/29",
            org: "雲林斗六高中資訊研究社",
            tags: ["BGP", "Internet", "Peering"]
          },
          {
            title: "BGP 基礎與安全概念",
            authors: "Sheng-Yuan, Feng",
            date: "2023/4/25",
            org: "台中明道資安社",
            tags: ["RPKI", "IRR", "Flowspec"]
          },
          {
            title: "網路基礎月",
            authors: "Sheng-Yuan, Feng",
            date: "2023/8/14",
            org: "CISCON 社群",
            tags: ["BGP", "Internet", "Peering"]
          },
          {
            title: "Network Infra Security",
            authors: "Li-Heng, Yu",
            date: "2023/10/29",
            org: "SCAICT 中部高中電資社團聯合會議",
            tags: ["Routing", "TCP/IP", "Security"]
          },
          {
            title: "BGP 連線實作",
            authors: "Sheng-Yuan, Feng",
            date: "2024/3/3",
            org:
              "北臺灣學生資訊社群、成功高中、建國中學、景美女中、中山女中共同舉辦之四校聯課",
            tags: ["Bird2", "Prefix Filter", "Routing"]
          },
          {
            title: "網路安全",
            authors: "Sheng-Yuan, Feng",
            date: "2024/3/27",
            org: "新竹女中資訊研究社",
            tags: ["BGP", "Internet", "Peering"]
          },
          {
            title: "BGP 連線實作",
            authors: "Sheng-Yuan, Feng",
            date: "2024/3/31",
            org: "斗六高中一日資訊體驗營雲林場",
            tags: ["Bird2", "Prefix Filter", "Routing"]
          },
          {
            title: "Intranet Security",
            authors: "Li-Heng, Yu",
            date: "2024/12/02",
            org: "成大資安社",
            tags: ["Routing", "TCP/IP", "Security"]
          },
          {
            title: "Internetworking Security",
            authors: "Li-Heng, Yu",
            date: "2024/12/09",
            org: "成大資安社",
            tags: ["BGP", "Peering", "Security", "Routing"]
          },
          {
            title: "網路基礎",
            authors: "Sheng-Yuan, Feng",
            date: "2024/12/13",
            org: "台北百齡高中科技研究社",
            tags: ["BGP", "Internet", "Peering"]
          },
          {
            title: "網路基礎",
            authors: "Sheng-Yuan, Feng",
            date: "2025/6/6",
            org: "台北百齡高中科技研究社",
            tags: ["BGP", "Internet", "Peering"]
          }
        ],
        others: [
          {
            title: "CTF Challenge: SwitchRange",
            authors: "Yu-Shan, Tsai",
            place: "Cyber Guardian Grand Challenge 2024",
            details: "Challenge based on SRv6 and using STUIX resources",
            url:
              "https://github.com/Jimmy01240397/My-CTF-Challenges/tree/master/cggc-2024/SwitchRange"
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
          id: "scaict",
          name: "SCAICT 中部高中電資社團聯合會議",
          imgSrc: "/img/pub/scaict.svg"
        },
        {
          id: "thjcc",
          name: "THJCC CTF 臺灣高中資安聯合競賽",
          imgSrc: "/img/pub/thjcc.png"
        }
      ],
      networkUsers: [
        "2024 斗六高中舉辦之一日資訊體驗營台南場",
        "2025 數位實中x松山高中 資訊聯合工作坊",
        "APCS 模擬測驗團隊",
        "竹科實中資訊研究社",
        "臺灣跨校資安聯合社團",
        "成功高中電子計算機研習社",
        "明倫高中程式設計社",
        "中大壢中資訊培訓讀書、電腦科學研究社",
        "內壢高中資訊研究社",
        "豐原高中資訊研究社",
        "中部高中電資社團聯合會議",
        "大園國際高中程式設計社",
        "臺南一中資訊社",
        "內湖高中資訊研究社",
        "松山工農黑客 IT 社",
        "永慶高中資訊研究社",
        "成淵高中資訊研究社",
        "竹北高中軟體研究社",
        "建國中學電子計算機研習社 與 北一女中資訊研習社",
        "百齡高中科技研究社",
        "臺南高商資訊研究社",
        "國立臺灣師範大學附屬高級中學校園網絡管理小組",
        "桃園高中資訊安全讀書會",
        "NTOUIND 海洋大學網路發展學會",
        "宜蘭大學 NIU CyberSecurity 資安學習平台社群",
        "桃園陽明高中資訊研究社",
        "emfont",
        "eduroam 臺灣第三方資料庫",
        "新竹高中網球社",
        "新莊高中電研社"
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
$light-gray-bg: #f8f9fa // For subtle backgrounds
$border-color: #e9ecef  // Soft border color
$text-color-main: #343a40
$text-color-muted: #6c757d

.publications-page
  padding-bottom: 5rem // Increased padding
  margin-top: -1rem
  .win95 &
    padding-top: 0
    margin-top: 0
.sub-title
  text-align: center
  font-size: 1.4rem // Adjusted size
  font-weight: 300 // Lighter weight for elegance
  color: $text-color-muted
  margin-top: -1rem
  margin-bottom: 3rem // Increased bottom margin
  text-wrap: balance

  .win95 &
    margin-top: 0
    text-align: left
    font-weight: normal // Win95 usually has normal weight
    color: black // Standard Win95 text color

.pub-layout
  // Specific styling for the "Missing a publication..." link
  > p:first-child
    text-align: center
    margin-bottom: 3rem // Increased spacing
    margin-top: -1rem

    .win95 &
      text-align: left
      margin-top: -3rem

  > p > a
    color: $primary-blue
    text-decoration: none
    font-weight: bold
    display: inline-flex
    align-items: center
    &:hover
      text-decoration: underline
    .win95 &
      color: blue // Standard W95 link blue

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
  margin-bottom: 3rem // Increased spacing
  h2
    font-size: 1.9rem // Adjusted size
    font-weight: 600 // Clearer section titles
    margin-bottom: 1.75rem // Adjusted spacing
    padding-bottom: 0.75rem
    border-bottom: 2px solid $border-color // Softer border
    .win95 &
      border-bottom-color: silver // W95 standard border
      font-weight: bold // W95 standard bold

.publication-list
  list-style: none
  padding-left: 0
  li
    margin-bottom: 2rem
    padding: 1.5rem
    border: 1px solid $border-color
    border-radius: 8px // Rounded corners for modern look
    background-color: #fff // Cleaner background
    box-shadow: 0 2px 8px rgba(0,0,0,0.05) // Subtle shadow for depth
    .win95 &
      background-color: #c0c0c0
      border: none
      border-radius: 0
      box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a
    h3
      font-size: 1.2rem // Adjusted for better hierarchy
      font-weight: 600
      margin-bottom: 0.5rem // Spacing
      a
        color: $primary-blue
        text-decoration: none
        &:hover
          text-decoration: underline
    p
      font-size: 0.95rem
      color: $text-color-main // Main text color
      line-height: 1.6
      margin-bottom: 0.3rem
      &.publisher, &.conference, &.org, &.place, &.details, &.date
        font-size: 0.88rem
        color: $text-color-muted // Muted color for secondary info
      a.doi-link, a.arxiv-link
        margin-left: 0.5em

.publication-tags
  margin-top: 1rem
  .tag-item
    display: inline-block
    background-color: lighten($primary-blue, 45%) // Lighter blue for tags
    color: darken($primary-blue, 10%)         // Darker blue text for contrast
    padding: 0.3em 0.7em
    border-radius: 4px
    font-size: 0.8rem
    margin-right: 0.5em
    margin-bottom: 0.5em // Add some space if tags wrap
    border: 1px solid lighten($primary-blue, 35%)
    font-weight: 500

    .win95 &
      background-color: navy // W95 classic blue
      color: white
      border-radius: 0
      border: 1px solid
      border-top-color: silver
      border-left-color: silver
      border-right-color: black
      border-bottom-color: black
      padding: 0.2em 0.5em
      font-weight: normal

// Responsive adjustments
@media (max-width: 768px)
  .publication-section:first-of-type
    margin-top: 2rem
  .sub-title
    font-size: 1.2rem // Adjust for smaller screens

// Windows 95 theme adjustments
.partner-container
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
  grid-gap: 24px // Increased gap
  margin-top: 1rem
  margin-bottom: 16px

  .win95 &
    background-color: transparent
    grid-gap: 16px // W95 might prefer tighter spacing

.partner-logo-item
  background-color: #fff // White background for logos
  border: 1px solid $border-color // Soft border
  border-radius: 8px // Rounded corners
  padding: 16px 8px
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
  box-shadow: 0 2px 4px rgba(0,0,0,0.03)
  letter-spacing: -0.05em

  img
    width: 80%
    height: 60px
    aspect-ratio: auto // Let height and object-fit control
    object-fit: contain
    object-position: center
    margin: 10px 0 15px 0 // Adjusted margin

  .partner-name
    font-size: 0.85rem
    color: $text-color-main
    padding: 4px
    line-height: 1.3 // Improved line height
    width: 100%

  .win95 &
    background: #c0c0c0 // Silver for W95
    border-radius: 0
    box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a
    padding: 8px 4px
    border: none // Use box-shadow for W95 border effect

    img
      margin: 15px 0
      width: 75% // Revert to original W95 spec if it was better

    .partner-name
      color: #000000
      background-color: transparent

// Styling for the new "Providing Network Resources" section
.network-users-section // Targets the whole section if needed for spacing etc.
  .network-user-list
    display: flex
    flex-wrap: wrap
    gap: 10px 12px // Row and column gap for tags
    margin-top: 1rem

  .networkuser-tag
    background-color: $light-gray-bg // Light background for tags
    color: $text-color-main
    padding: 0.5em 0.9em // More padding
    border-radius: 6px // Slightly more rounded
    font-size: 0.9rem
    line-height: 1.4
    border: 1px solid $border-color
    transition: background-color 0.2s, border-color 0.2s // Smooth transition

    &:hover
      background-color: darken($light-gray-bg, 5%) // Darken on hover
      border-color: darken($border-color, 10%)

    .win95 & // Win95 specific styling for these tags
      background-color: #c0c0c0 // Silver
      border: 1px solid
      border-top-color: #fff
      border-left-color: #fff
      border-right-color: #0a0a0a
      border-bottom-color: #0a0a0a
      border-radius: 0
      color: black
      padding: 0.4em 0.7em // Adjusted W95 padding
      font-size: 0.9rem
      margin: 2px // Minimal margin for W95
      transition: none // No transitions for W95
      &:hover
        background-color: #b0b0b0 // Simple hover for W95
</style>
