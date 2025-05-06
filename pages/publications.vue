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
                :href="item.url || '#'"
                target="_blank"
                rel="noopener noreferrer"
                >{{ item.title }}</a
              >
            </h3>
            <p class="date">{{ item.date }}</p>
            <p class="authors">{{ item.authors }} / {{ item.org }}</p>
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
                :href="item.url || '#'"
                target="_blank"
                rel="noopener noreferrer"
                >{{ item.title }}</a
              >
            </h3>
            <p class="authors">{{ item.authors }} / {{ item.place }}</p>
            <p v-if="item.details" class="details">
              {{ item.details }}
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
            title: "From Spoofing to Tunneling: New Red Team Networking Skills for Initial Access, Evasion and Domain Compromise",
            authors: "Shu-Hao, Tung",
            publisher: "Ongoing Research",
            tags: ["Security"],
          }
        ],
        lecture: [
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
            tags: ["Routing", "TCP/IP"]
          },
          {
            title: "BGP 連線實作",
            authors: "Sheng-Yuan, Feng",
            date: "2024/3/3",
            org: "北臺灣學生資訊社群、成功高中、建國中學、景美女中、中山女中共同舉辦之四校聯課",
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
            tags: ["Routing", "TCP/IP"]
          },
          {
            title: "Internetworking Security",
            authors: "Li-Heng, Yu",
            date: "2024/12/09",
            org: "成大資安社",
            tags: ["BGP", "Peering"]
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
        }
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
      &.publisher, &.conference, &.org, &.place, &.details, &.date
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
