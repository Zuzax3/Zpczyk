<template>
  <Teleport to="body">
    <transition name="pd">
      <div v-if="open" class="pd" @keydown.esc.prevent="emitClose" tabindex="-1">
        <!-- backdrop click closes -->
        <div class="pd-backdrop" @click="emitClose"></div>

        <div class="pd-shell" role="dialog" aria-modal="true">
          <!-- close -->
          <button class="pd-close" type="button" @click="emitClose">×</button>

          <!-- your big rounded card -->
          <div class="pd-card" @click.stop>
            <div class="pd-grid">
              <div class="pd-left">
                <h1 class="pd-title">{{ item?.title }}</h1>

                <div class="pd-text">
                  <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
                </div>
              </div>

              <div class="pd-right">
                <div class="pd-media">
                  <!-- placeholder for image/video -->
                  <img
                    v-if="item?.image"
                    :src="item.image"
                    alt=""
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- little stage corners like your screenshot (optional) -->
          <div class="pd-stage-left"></div>
          <div class="pd-stage-right"></div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  item: { type: Object, default: null }
})
const emit = defineEmits(['close'])

const rootEl = ref(null)

const paragraphs = computed(() => {
  // You can map to your real content later
  const raw = props.item?.description || ''
  if (Array.isArray(raw)) return raw
  if (typeof raw === 'string' && raw.trim()) return raw.split('\n\n')
  return [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in vulputate dolor.',
    'Donec ultrices congue ex. Praesent et mollis odio. Morbi ullamcorper commodo dui.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in vulputate dolor.'
  ]
})

function emitClose() {
  emit('close')
}

/** lock scroll while open */
let prevOverflow = ''
watch(
  () => props.open,
  (v) => {
    if (v) {
      prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = prevOverflow
    }
  },
  { immediate: true }
)

onMounted(() => {
  // focus to receive ESC
  // (tabindex on wrapper)
})
</script>

<style scoped>
.pd{
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: auto;
}

.pd-backdrop{
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,.10);
}

.pd-shell{
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}

/* big rounded card */
.pd-card{
  width: min(1900px, 96vw);   /* breiter */
  height: min(1780px, 92vh);   /* fast full height */
  background: #111;
  border-radius: 90px;
  box-shadow: 0 50px 160px rgba(0,0,0,.32);
  overflow: hidden;
  position: relative;
}

/* inner layout */
.pd-grid{
  height: 100%;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 0;
  padding: 90px 90px;
}

.pd-title{
  margin: 0 0 26px 0;
  font-size: 56px;
  font-weight: 650;
  letter-spacing: -0.02em;
  color: #fff;
}

.pd-text{
  color: rgba(255,255,255,.72);
  font-size: 13px;
  line-height: 1.8;
  max-width: 62ch;
}

.pd-text p{
  margin: 0 0 18px 0;
}

.pd-media{
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #d9d9d9;
  border-radius: 2px;
  margin-top: 96px; /* matches your mock vibe */
}

.pd-media img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* close */
.pd-close{
  position: absolute;
  top: 28px;
  right: 28px;
  width: 46px;
  height: 46px;
  border: none;
  border-radius: 999px;
  background: rgba(0,0,0,.15);
  color: #111;
  font-size: 26px;
  cursor: pointer;
  z-index: 2;
}



/* transition */
.pd-enter-active,
.pd-leave-active{
  transition: opacity 260ms ease, transform 360ms cubic-bezier(.2,.9,.2,1);
}
.pd-enter-from,
.pd-leave-to{
  opacity: 0;
  transform: translateY(12px);
}
</style>