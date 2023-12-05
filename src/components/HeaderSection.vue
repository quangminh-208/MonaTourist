<template>
  <div class="header">
    <div class="grid wide">
      <nav class="header__navbar hide-on-mobile-tablet">
        <ul class="header__navbar-list">
          <li class="header__navbar-item">
            <a class="header__navbar-item-link">
              <i class="header__navbar-icon fa-solid fa-location-dot"></i>
              Minh Khai, Bắc Từ Liêm, Hà Nội
            </a>
          </li>
          <li class="header__navbar-item">
            <a href="tel:0188889999" class="header__navbar-item-link">
              <i class="header__navbar-icon fa-solid fa-phone"></i>
              0772 888 999
            </a>
          </li>
          <li class="header__navbar-item">
            <a class="header__navbar-item-link">
              <i class="header__navbar-icon fa-brands fa-square-facebook"></i>
            </a>
            <a class="header__navbar-item-link">
              <i class="header__navbar-icon fa-brands fa-instagram"></i>
            </a>
            <a class="header__navbar-item-link">
              <i class="header__navbar-icon fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>

        <ul class="header__navbar-list">
          <li class="header__navbar-item header__navbar-item--separate">
            <a class="header__navbar-item-link header__navbar-item-link--strong">
              Đăng ký
            </a>
          </li>
          <li class="header__navbar-item">
            <a class="header__navbar-item-link header__navbar-item-link--strong">
              Đăng nhập
            </a>
          </li>
        </ul>
      </nav>

      <!-- Header main -->
      <div class="header__main">
        <a class="header__main-img-link">
          <RouterLink to="/">
            <img src="../assets/img/logo.png" alt="Logo Mona" class="header__main-img"/>
          </RouterLink>
        </a>
        <div class="header__main-search hide-on-mobile-tablet">
          <input type="text" class="header__main-search-box" placeholder="Tìm kiếm..." />
          <button class="header__main-search-btn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <ul class="header__main-list">
          <li class="header__main-option hide-on-mobile-tablet">
            <a class="header__main-option-link">
              <i class="header__main-icon fa-solid fa-heart"></i>
            </a>
          </li>
          <li class="header__main-option">
            <a class="header__main-option-link">
              <i class="header__main-icon fa-solid fa-bag-shopping"></i>
            </a>
          </li>
          <li class="header__main-option hide-on-mobile-tablet">
            <a class="header__main-option-link">
              <i class="header__main-icon fa-solid fa-user"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Header menu -->
    <div class="header__menu_wrap hide-on-mobile-tablet">
      <div class="grid wide">
        <div class="header__menu">
          <ul class="header__menu-list">
            <li class="header__menu-item">
              <a class="header__menu-item-link"> Trang chủ </a>
            </li>
            <li class="header__menu-item">
              <RouterLink to="/about">
                <a  class="header__menu-item-link"> Giới thiệu </a>
              </RouterLink>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-item-link"> Đồng hồ nam </a>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-item-link"> Đồng hồ nữ </a>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-item-link"> Đồng hồ trẻ em </a>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-item-link"> Blog </a>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-item-link"> Liên hệ </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Header menu sticky
window.onscroll = function () {
  if (window.scrollY >= 250) {
    document.querySelector('.header__menu_wrap').classList.add('fixed-header')
  } else document.querySelector('.header__menu_wrap').classList.remove('fixed-header')
}
</script>

<style lang="css" scoped>
.header {
  /* background-image: linear-gradient(0, #3e3e3e, var(--text-color)); */
  background-color: var(--text-color);
}

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  animation: moveDown ease-in 0.4s;
  z-index: 100;
}

.header__navbar {
  display: flex;
  justify-content: space-between;
}

.header__navbar-list {
  list-style: none;
  padding-left: 0;
}

.header__navbar-item {
  margin: 0 8px;
  position: relative;
}

.header__navbar-item,
.header__navbar-item-link {
  display: inline-block;
  font-size: 1.4rem;
  color: var(--white-color);
  text-decoration: none;
  font-weight: 400;
}

.header__navbar-item-link:hover {
  opacity: 0.8;
  cursor: pointer;
}

.header__navbar-item-link--strong {
  font-weight: 400;
}

.header__navbar-item--separate::after {
  content: '';
  display: block;
  position: absolute;
  border-left: 1px solid #888;
  height: 16px;
  top: 0;
  right: -10px;
}

.header__navbar-icon {
  font-size: 1.6rem;
  color: var(--white-color);
  text-decoration: none;
  margin: 0 4px;
}

/* Header main */
.header__main {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__main-img {
  width: 200px;
}

.header__main-search {
  height: 40px;
  display: flex;
}

.header__main-search {
  width: 35%;
}

.header__main-search-box {
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 1.4rem;
  border-style: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  transition: all 0.5s ease;
  outline: none;
}

.header__main-search-box:focus {
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
}

.header__main-search-btn {
  width: 60px;
  height: 100%;
  padding: 10px;
  font-size: 1.8rem;
  background-color: var(--primary-color);
  color: var(--white-color);
  cursor: pointer;
  border-style: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.header__main-search-btn:hover {
  background-color: #b98d70;
}

.header__main-list {
  list-style: none;
}

.header__main-option {
  display: inline-block;
}

.header__main-icon {
  font-size: 2.6rem;
  color: var(--white-color);
  margin: 0 16px;
}

/* Header menu */
.header__menu_wrap {
  background-color: var(--text-color);
}

.header__menu {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
}

.header__menu-list {
  display: inline-block;
  list-style: none;
  padding: 0;
  margin: 0;
}

.header__menu-item {
  display: inline-block;
  margin: 4px 20px;
}

.header__menu-item-link {
  text-decoration: none;
  color: var(--white-color);
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 4px;
  transition: all 0.5s ease;
}

.header__menu-item-link:hover {
  color: var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
}

@keyframes moveDown {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
