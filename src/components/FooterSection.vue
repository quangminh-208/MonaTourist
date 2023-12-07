<template>
  <footer class="footer">
    <div class="container-xl">
      <div class="footer__main">
        <div class="footer__head">
          <div class="row">
            <div class="col-4">
              <ul class="footer__list">
                <li class="footer__heading">THÔNG TIN LIÊN HỆ</li>
                <li class="footer__item">
                  <font-awesome-icon class="footer__icon" icon="fa-solid fa-location-dot" />
                  Minh Khai, Bắc Từ Liêm, Hà Nội
                </li>
                <li class="footer__item">
                  <font-awesome-icon class="footer__icon" icon="fa-solid fa-phone" />
                  0772 888 999
                </li>
                <li class="footer__item">
                  <font-awesome-icon class="footer__icon" icon="fa-solid fa-envelope" />
                  quangminh2082002@gmail.com
                </li>
                <li class="footer__item">
                  <font-awesome-icon class="footer__icon" icon="fa-brands fa-square-facebook" />
                  facebook.com/quangminh.208
                </li>
                <li class="footer__item footer__item-social">
                  <font-awesome-icon class="footer__icon" icon="fa-brands fa-instagram" />
                  <font-awesome-icon class="footer__icon" icon="fa-brands fa-youtube" />
                </li>
              </ul>
            </div>
            <div class="col-2">
              <ul class="footer__list">
                <li class="footer__heading">LIÊN KẾT</li>
                <li class="footer__item">Giới thiệu</li>
                <li class="footer__item">Đồng hồ nam</li>
                <li class="footer__item">Đồng hồ nữ</li>
                <li class="footer__item">Đồng hồ trẻ em</li>
                <li class="footer__item">Blogs</li>
                <li class="footer__item">Liên hệ</li>
              </ul>
            </div>
            <div class="col-3">
              <ul class="footer__list">
                <li class="footer__heading">HỖ TRỢ</li>
                <li class="footer__item">Hướng dẫn mua hàng</li>
                <li class="footer__item">Hướng dẫn thanh toán</li>
                <li class="footer__item">Chính sách bảo hành</li>
                <li class="footer__item">Chính sách đổi trả</li>
                <li class="footer__item">Tư vấn khách hàng</li>
              </ul>
            </div>
            <div class="col-3">
              <ul class="footer__list">
                <li class="footer__heading">TẢI ỨNG DỤNG TRÊN</li>
                <li class="footer__item">
                  Ứng dụng Mona Watch hiện có sẵn trên Google Play & App Store. Tải nó ngay:
                </li>
                <li class="footer__item">
                  <img
                    class="footer__item-download-img"
                    src="../assets/img/ggplay-badge.png"
                    alt="Download from Google Play"
                  />
                </li>
                <li class="footer__item">
                  <img
                    class="footer__item-download-img"
                    src="../assets/img/appstore-badge.png"
                    alt="Download from App Store"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer__last">
          <p class="footer__last__copyright">
            Copy right &copy; 2023 Nguyễn Quang Minh - All Rights Reversed.
          </p>
          <div class="footer__last__payment">
            <img class="footer__last__payment__logo" src="../assets/img/visa.jpg" alt="" />
            <img class="footer__last__payment__logo" src="../assets/img/mastercard.jpg" alt="" />
            <img class="footer__last__payment__logo" src="../assets/img/paypal.png" alt="" />
            <img class="footer__last__payment__logo" src="../assets/img/ggpay.png" alt="" />
            <img class="footer__last__payment__logo" src="../assets/img/momo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="css" scoped>
.footer {
  background-color: var(--black-mute);
  color: var(--text-light-1);
}

.footer__head {
  padding: 40px 0;
}

.footer__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer__heading {
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.footer__item {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 10px;
}

.footer__item .footer__icon {
  font-size: 1.2rem;
  margin-right: 10px;
}

.footer__item-social .footer__icon {
  font-size: 1.8rem;
  padding-right: 16px;
  margin: 10px 0;
}

.footer__item-download-img {
  width: 50%;
}

.footer__last {
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__last__copyright {
  font-size: .9rem;
}

.footer__last__payment {
  display: flex;
  align-items: center;
}

.footer__last__payment__logo {
  width: 80px;
  border-radius: 4px;
  margin: 0 4px;
}
</style>
