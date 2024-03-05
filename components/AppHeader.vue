<template>
  <div>
    <div class="top">
      <ul>
        <!-- <li>
          <a href="https://ku-unplugged.net/index.php/sitemap/">サイトマップ</a>
        </li> -->
        <li>
          <nuxt-link to="/contacts">お問い合わせ</nuxt-link>
        </li>
      </ul>
    </div>
    <div>
      <div class="navbar toggleable-lg">
        <a class="navbar-brand" href="/">
          <img
            class="brand"
            src="~assets/brand_icon.png"
            alt="京大アンプラグド"
            width="240"
          />
        </a>

        <a class="b-navbar-toggle" target="nav-collapse"></a>

        <div class="collapse" id="nav-collapse" is-nav>
          <div class="navbar-nav ml-auto">
            <a class="nav-item" to="/">
              <div class="mx-auto" style="width: 120px;">
                <img
                  src="~/assets/nav_images/home_sp.gif"
                  class="d-lg-none"
                  alt="ホーム"
                />
                <img
                  src="~/assets/nav_images/home_lg.gif"
                  class="d-none d-lg-block"
                  alt="ホーム"
                />
              </div>
            </a>
            <div class="nav-item" to="/shinkan">
              <div class="mx-auto" style="width: 120px;">
                <img
                  src="~/assets/nav_images/special_sp.gif"
                  class="d-lg-none"
                  alt="新歓特設"
                />
                <img
                  src="~/assets/nav_images/special_lg.gif"
                  class="d-none d-lg-block"
                  alt="新歓特設"
                />
              </div>
            </div>
            <div class="nav-item" to="/about">
              <div class="mx-auto" style="width: 120px;">
                <img
                  src="~/assets/nav_images/about_sp.gif"
                  class="d-lg-none"
                  alt="サークル紹介"
                />
                <img
                  src="~/assets/nav_images/about_lg.gif"
                  class="d-none d-lg-block"
                  alt="サークル紹介"
                />
              </div>
          </div>
            <div class="nav-item" to="/members">
              <div class="mx-auto" style="width: 120px;">
                <img
                  src="~/assets/nav_images/members_sp.gif"
                  class="d-lg-none"
                  alt="会員"
                />
                <img
                  src="~/assets/nav_images/members_lg.gif"
                  class="d-none d-lg-block"
                  alt="会員"
                />
              </div>
            </div>
            <div class="nav-item" to="/links">
              <div class="mx-auto" style="width: 120px;">
                <img
                  src="~/assets/nav_images/links_sp.gif"
                  class="d-lg-none"
                  alt="リンク"
                />
                <img
                  src="~/assets/nav_images/links_lg.gif"
                  class="d-none d-lg-block"
                  alt="リンク"
                />
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>
<style>
.top {
  height: 25px;
  width: 100%;
  background: url('~/assets/images/top-background.gif') repeat center;
}

.top ul {
  right: 0;
  margin: 0px;
  height: inherit;
}

.top li {
  float: right;
  height: inherit;
  list-style-image: url('~/assets/images/icon-dot.gif');
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
.brand {
  margin-left: 10%;
}
</style>
