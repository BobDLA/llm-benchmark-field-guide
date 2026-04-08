---
layout: page
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const lang = navigator.language || navigator.userLanguage || ''
  if (lang.startsWith('zh')) {
    window.location.replace('./zh/')
  } else {
    window.location.replace('./en/')
  }
})
</script>

<div style="display:flex;align-items:center;justify-content:center;min-height:50vh;">
  <p>Redirecting…</p>
</div>
