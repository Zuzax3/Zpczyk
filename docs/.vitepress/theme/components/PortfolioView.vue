<script setup>
import { ref, onMounted } from 'vue'
import { portfolioContent as DATA } from '../content/portfolioContent'
import PortfolioDetail from './PortfolioDetail.vue'
const detailOpen = ref(false)
const detailItem = ref(null)


const categories = [
  { key: 'projects', label: 'Projects' },
  { key: 'unfold', label: 'UNFOLD//' },
  { key: 'sketches', label: 'sketches' }
]

const isOpen = ref(false)
const activeCat = ref(null)

onMounted(() => {
  requestAnimationFrame(() => {
    isOpen.value = true
  })
})

function openItem(item) {
  console.log('open item', item)
    detailItem.value = item
  detailOpen.value = true
}


function closeDetail() {
  detailOpen.value = false
  detailItem.value = null
}


</script>


<template>
  <div class="pv" :class="{ open: isOpen }">
    <button class="pv-back" type="button" @click="$emit('close')">
  ← Back
</button>
    <div class="pv-stage"></div>

    <div class="pv-tabs">
      <div
        v-for="c in categories"
        :key="c.key"
        class="pv-col"
        @mouseenter="activeCat = c.key"
        @mouseleave="activeCat = null"
      >
        <div class="pv-drawer" :class="{ active: activeCat === c.key }">
          
          <!-- CONTENT -->
          <div class="pv-drawer-content">
            <div class="pv-title">{{ c.label }}</div>

            <div class="pv-list">
              <button
                v-for="item in DATA[c.key]"
                :key="item.id"
                class="pv-item"
                type="button"
                @click="openItem(item)"
              >
                {{ item.title }}
              </button>
            </div>
          </div>

          <!-- HANDLE (NO TEXT) -->
          <div class="pv-handle"></div>

        </div>
      </div>
    </div>
  </div>
  <PortfolioDetail
  :open="detailOpen"
  :item="detailItem"
  @close="closeDetail"
/>

</template>


<style scoped>

.pv {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 20;
}

/* stage */
.pv-stage {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30vh;
  min-height: 340px;
  background: #3a3a3a;
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;

  transform: translateY(100%);
  transition: transform 520ms cubic-bezier(.2,.9,.2,1);
}

.pv.open .pv-stage {
  transform: translateY(0);
}

/* grid */
.pv-tabs {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0; /* important: flush to bottom */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  padding: 0 7vw;
  pointer-events: auto;
  align-items: end;
}

/* column */
.pv-col {
  position: relative;
  display: flex;
  justify-content: center;
}

/* drawer */
.pv-drawer {
  --handle-h: 160px; /* bigger handle = sticks out more */

  width: 100%;
  max-width: 520px;
  height: min(800px, 60vh);
  border-radius: 64px;
  overflow: hidden;
  background: #111;
  box-shadow: 0 22px 70px rgba(0,0,0,.25);

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;

  /* only handle visible */
  transform: translateY(calc(100% - var(--handle-h)));
  transition: transform 460ms cubic-bezier(.2,.9,.2,1);
}

/* open */
.pv-drawer.active {
  transform: translateY(0);
}

/* content */
.pv-drawer-content {
  height: calc(100% - var(--handle-h));
  padding: 44px 34px;
  display: flex;
  flex-direction: column;
}

/* title */
.pv-title {
  color: #fff;
  font-size: 44px;
  font-weight: 600;
  margin-bottom: 28px;
}

/* list */
.pv-list {
  display: grid;
  gap: 16px;
  margin-top: 12px;
}

.pv-item {
  background: transparent;
  border: none;
  color: rgba(255,255,255,.75);
  text-align: left;
  cursor: pointer;
  padding: 8px 0;
  font-size: 14px;
  transition: color 180ms ease;
}

.pv-item:hover {
  color: rgba(255,255,255,.95);
}

/* handle (no text, just visual block) */
.pv-handle {
  height: var(--handle-h);
  background: #111;
  border-top: 1px solid rgba(255,255,255,.05);
}

/* subtle hover polish */
.pv-drawer.active .pv-handle {
  filter: brightness(1.1);
}

.pv-back{
  position: absolute;
  top: 64px;
  right: 28px;
  z-index: 30;

  height: 42px;
  padding: 0 16px;
  border: none;
  border-radius: 999px;

  background: rgba(0,0,0,.12);
  color: #111;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  pointer-events: auto;

  transition: background 180ms ease, transform 180ms ease;
}

.pv-back:hover{
  background: rgba(0,0,0,.18);
  transform: translateY(-1px);
}

</style>
