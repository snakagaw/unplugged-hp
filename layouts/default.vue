<template>
  <div class="container">
    <AppHeader />
    <img
      src="~assets/images/main.jpg"
      style="width:100%"
    />
    <div class="row">
      <div class="col-8">
        <slot /> 
      </div>
      <div class="col-4">
        <Sidebar />
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script setup>

</script>
<style>
.container {
  padding: 0px;
}
.row {
  margin: 0px;
}
h1 {
  /* clear: both; */
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 35px;
  padding-bottom: 10px;
  border-bottom: 3px dotted #fd9e00;
  background: url('../assets/images/h1-arrow.gif') left top no-repeat;
  color: #463100;
  font-size: 1.6em;
  /* letter-spacing: 0.25em; */
  font-weight: bold;
  font-family: 'ＭＳ Ｐ明朝', serif;
}
h2 {
  clear: both;
  margin: 30px 10px 14px 10px;
  margin-bottom: 14px;
  margin-bottom: 14px;
  padding: 10px 10px 10px 22px;
  background: none;
  border-left: 10px solid #fd9e00;
  border-bottom: 1px solid #ffeeaa;
  font-size: 1.286em;
  font-weight: bold;
  font-family: 'ＭＳ Ｐ明朝', serif;
}
p {
  margin-left: 20px;
  margin-right: 10px;
  margin-bottom: 1rem;
}
a {
  text-decoration: underline;
  color: #463100;
}
a:hover {
  color: #fd9e00;
}
</style>
