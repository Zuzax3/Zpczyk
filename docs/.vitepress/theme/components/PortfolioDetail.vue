<template>
  <Teleport to="body">
    <transition name="pd-fade">
      <div v-if="open" class="pd">
        <div class="pd-backdrop" @click="closeDetail"></div>

        <div class="pd-shell">
          <section
            class="pd-card"
            :style="{
              '--detail-bg': item?.theme?.bg || '#ee982f'
            }"
          >
            <button class="pd-close" type="button" @click="closeDetail">
              ×
            </button>

            <div class="pd-content">
              <div class="pd-top">
                <h1 class="pd-title">{{ item?.title || 'Project Title' }}</h1>

                <div class="pd-text" v-if="paragraphs.length">
                  <h3 class="pd-sub">
                    {{ item?.sections?.introTitle || 'Konzept' }}
                  </h3>

                  <p v-for="(paragraph, index) in paragraphs" :key="index">
                    {{ paragraph }}
                  </p>
                </div>
              </div>

              <div class="pd-main">
                <div class="pd-media" v-if="item?.image">
                  <img
                    :src="item.image"
                    alt=""
                    draggable="false"
                  />
                </div>

                <div class="pd-side-text" v-if="sideParagraphs.length">
                  <h3 class="pd-sub">
                    {{ item?.sections?.sideTitle || 'Material & Prozess' }}
                  </h3>

                  <p v-for="(paragraph, index) in sideParagraphs" :key="index">
                    {{ paragraph }}
                  </p>
                </div>
              </div>

              <div class="pd-extra" v-if="extraParagraphs.length">
                <h3 class="pd-sub">
                  {{ item?.sections?.extraTitle || 'Recherche' }}
                </h3>

                <p v-for="(paragraph, index) in extraParagraphs" :key="index">
                  {{ paragraph }}
                </p>
              </div>

              <div class="pd-carousel-wrap" v-if="item?.gallery?.length">
                <h3 class="pd-sub pd-carousel-title">
                  {{ item?.sections?.galleryTitle || 'Galerie' }}
                </h3>

                <div class="pd-carousel">
                  <div
                    v-for="img in item.gallery"
                    :key="img"
                    class="pd-carousel-slide"
                  >
                    <img
                      :src="img"
                      alt=""
                      draggable="false"
                      class="pd-carousel-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  item: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const paragraphs = computed(() => {
  if (Array.isArray(props.item?.description)) return props.item.description
  if (typeof props.item?.description === 'string' && props.item.description.trim()) {
    return props.item.description.split('\n\n')
  }
  return []
})

const sideParagraphs = computed(() => {
  if (Array.isArray(props.item?.sideText)) return props.item.sideText
  if (typeof props.item?.sideText === 'string' && props.item.sideText.trim()) {
    return props.item.sideText.split('\n\n')
  }
  return []
})

const extraParagraphs = computed(() => {
  if (Array.isArray(props.item?.extraText)) return props.item.extraText
  if (typeof props.item?.extraText === 'string' && props.item.extraText.trim()) {
    return props.item.extraText.split('\n\n')
  }
  return []
})

function closeDetail() {
  emit('close')
}

watch(
  () => props.open,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
  { immediate: true }
)
</script>

<style scoped>
.pd {
  position: fixed;
  inset: 0;
  z-index: 9999;
}

.pd-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.08);
}

.pd-shell {
  position: absolute;
  inset: 0;
  padding: 92px 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.pd-card {
  position: relative;
  width: min(1820px, 96vw);
  height: calc(100dvh - 92px);
  border-top-left-radius: 52px;
  border-top-right-radius: 52px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background: var(--detail-bg);
  backdrop-filter: blur(6px);
  box-shadow: 0 30px 120px rgba(0, 0, 0, 0.16);
}

.pd-close {
  position: sticky;
  top: 20px;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 20px;
  z-index: 10;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.14);
  color: rgba(255, 255, 255, 0.95);
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: transform 180ms ease, background 180ms ease;
}

.pd-close:hover {
  background: rgba(0, 0, 0, 0.22);
  transform: translateY(-1px);
}

.pd-content {
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto auto auto auto;
}

.pd-top {
  padding: 48px 100px 28px;
}

.pd-title {
  margin: 0 0 34px;
  color: rgba(255, 255, 255, 0.98);
  font-size: clamp(34px, 3.3vw, 60px);
  line-height: 1;
  letter-spacing: -0.03em;
  font-weight: 700;
}

.pd-sub {
  margin: 0 0 14px;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.62);
}

.pd-text {
  max-width: 720px;
}

.pd-text p {
  margin: 0 0 26px;
  color: rgba(255, 255, 255, 0.95);
  font-size: clamp(12px, 0.9vw, 15px);
  line-height: 1.75;
}

.pd-main {
  display: grid;
  grid-template-columns: 720px minmax(0, 1fr);
  gap: 40px;
  padding: 8px 100px 0;
  align-items: start;
}

.pd-media {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #d9d9d9;
  overflow: hidden;
}

.pd-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.pd-side-text {
  max-width: 500px;
  margin-top: 10px;
}

.pd-side-text p {
  margin: 0 0 22px;
  color: rgba(255, 255, 255, 0.95);
  font-size: clamp(12px, 0.9vw, 15px);
  line-height: 1.75;
  
}

.pd-extra {
  padding: 48px 100px 0;
  max-width: 900px;
}

.pd-extra p {
  margin: 0 0 24px;
  color: rgba(255, 255, 255, 0.95);
  font-size: clamp(12px, 0.9vw, 15px);
  line-height: 1.75;
}

/* carousel */
.pd-carousel-wrap {
  padding: 18px 100px 64px;
}

.pd-carousel-title {
  margin-bottom: 18px;
}

.pd-carousel {
  display: flex;
  gap: 22px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 0;
  padding-bottom: 8px;
}

.pd-carousel-slide {
  flex: 0 0 min(420px, 72vw);
  scroll-snap-align: start;
  background: transparent;
}

.pd-carousel-img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
  background: #d9d9d9;
  border-radius: 2px;
}

/* scrollbars */
.pd-card::-webkit-scrollbar {
  width: 10px;
}

.pd-card::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.18);
  border-radius: 999px;
}

.pd-card::-webkit-scrollbar-track {
  background: transparent;
}

.pd-carousel::-webkit-scrollbar {
  height: 8px;
}

.pd-carousel::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.28);
  border-radius: 999px;
}

.pd-carousel::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
}

.pd-fade-enter-active,
.pd-fade-leave-active {
  transition: opacity 240ms ease;
}

.pd-fade-enter-from,
.pd-fade-leave-to {
  opacity: 0;
}

@media (max-width: 1100px) {
  .pd-shell {
    padding: 86px 24px 0;
  }

  .pd-card {
    width: 96vw;
    height: calc(100dvh - 112px);
  }

  .pd-top {
    padding: 40px 48px 24px;
  }

  .pd-main {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0 48px;
  }

  .pd-side-text {
   max-width: 500px;
   margin-top: 10px;
  }

  .pd-extra {
    padding: 36px 48px 0;
    max-width: none;
  }

  .pd-carousel-wrap {
    padding: 18px 48px 48px;
  }

  .pd-carousel-slide {
    flex-basis: min(360px, 80vw);
  }
}

@media (max-width: 720px) {
  .pd-top {
    padding: 28px 26px 20px;
  }

  .pd-title {
    margin-bottom: 22px;
  }

  .pd-main {
    padding: 0 26px;
  }

  .pd-extra {
    padding: 28px 26px 0;
  }

  .pd-carousel-wrap {
    padding: 16px 26px 36px;
  }

  .pd-carousel-slide {
    flex-basis: 78vw;
  }

  .pd-close {
    top: 16px;
    margin-right: 16px;
    margin-top: 16px;
  }
}
</style>