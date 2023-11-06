<template>
  <div class="footer">
    <div class="footer-description">
      <router-link to="/"> 회사소개 </router-link>
      <router-link to="/"> 이용약관 </router-link>
      <router-link to="/"> 개인정보처리방침 </router-link>
      <router-link to="/"> 1:1 문의 </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: gray;
  height: 200px;
  min-height: 100%;
  padding: 0 50px;
}
</style>
