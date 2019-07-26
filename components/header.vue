<template>
  <div>
    <div class="top">
      <ul>
        <li>
          <a href="https://ku-unplugged.net/index.php/sitemap/">サイトマップ</a>
        </li>
        <li>
          <a href="https://ku-unplugged.net/index.php/contact/">お問い合わせ</a>
        </li>
      </ul>
    </div>
    <div>
      <b-navbar toggleable="lg">
        <b-navbar-brand href="#">
          <img
            src="https://ku-unplugged.net/wp/wp-content/themes/keni_light_wp/images/common/logo.gif"
            alt="京大アンプラグド"
            width="200"
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/">
              <div class="mx-auto" style="width: 120px;">
                <img
                  src="https://ku-unplugged.net/wp/wp-content/themes/keni_light_wp/images/common/global_navi_home_off.gif"
                  alt="ホーム"
                />
              </div>
            </b-nav-item>
            <b-nav-item href="/">
              <div class="mx-auto" style="width: 120px;">
                <img
                  src="https://ku-unplugged.net/wp/wp-content/themes/keni_light_wp/images/common/global_navi_special_off.gif"
                  alt="新歓特設"
                />
              </div>
            </b-nav-item>
            <b-nav-item href="/">
              <div class="mx-auto" style="width: 120px;">
                <img
                  src="https://ku-unplugged.net/wp/wp-content/themes/keni_light_wp/images/common/global_navi_about_us_off.gif"
                  alt="サークル紹介"
                />
              </div>
            </b-nav-item>
            <b-nav-item href="/">
              <div class="mx-auto" style="width: 120px;">
                <img
                  src="https://ku-unplugged.net/wp/wp-content/themes/keni_light_wp/images/common/global_navi_members_off.gif"
                  alt="会員"
                />
              </div>
            </b-nav-item>
            <b-nav-item href="/">
              <div class="mx-auto" style="width: 120px;">
                <img
                  src="https://ku-unplugged.net/wp/wp-content/themes/keni_light_wp/images/common/global_navi_links_off.gif"
                  alt="リンク"
                />
              </div>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.top {
  height: 25px;
  width: 100%;
  background: url(https://ku-unplugged.net/wp/wp-content/themes/keni_light_wp/images/common/utility_background.gif)
    repeat center;
}

.top ul {
  position: absolute;
  right: 0;
  margin: 0px;
  height: inherit;
}

.top li {
  float: left;
  height: inherit;
  list-style-image: url(https://ku-unplugged.net/wp/wp-content/themes/keni_light_wp/images/icon/icon-dot.gif);
  list-style-position: inside;
  margin-left: 20px;
  margin-right: 10px;
}
.top a {
  font-size: 15px;
  color: #463100;
  text-decoration: underline;
  padding: 0px;
}
</style>

