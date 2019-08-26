webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Hind|Poppins:500,600,700\");\n/* You can add global styles to this file, and also import other style files */\n/*--------------------------------------------------------------\n#0.1    Theme Reset Style\n--------------------------------------------------------------*/\nhtml {\n  font-size: 15px;\n}\nbody {\n  font-family: \"Hind\", sans-serif;\n  background-color: #fff;\n  font-size: 14px;\n  font-size: 0.93333rem;\n  -webkit-font-smoothing: antialiased;\n  overflow-x: hidden;\n}\n@media (max-width: 767px) {\n  body {\n    font-size: 14px;\n  }\n}\nli{\n  color: #999999;\n\n}\np {\n  color: #999999;\n  line-height: 1.8em;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: bold;\n  color: #012f5c;\n}\nul {\n  list-style-position: inside;\n  padding-left: 0;\n  margin: 0;\n}\na {\n  text-decoration: none;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\na:hover,\na:focus {\n  text-decoration: none;\n}\nimg {\n  max-width: 100%;\n}\n/*--------------------------------------------------------------\n#0.2    Global Elements\n--------------------------------------------------------------*/\n.page-wrapper {\n  position: relative;\n  overflow: hidden;\n}\n.wow {\n  visibility: hidden;\n}\n.fi:before {\n  margin: 0;\n}\n.section-padding {\n  padding: 80px 0;\n}\n@media (max-width: 767px) {\n  .section-padding {\n    padding: 70px 0;\n  }\n}\n/*** contact form error handling ***/\n.contact-validation-active .error-handling-messages {\n    width: 100%;\n    padding: 15px 15px 0;\n    clear: both;\n  }\n.contact-validation-active label.error {\n    color: red !important;\n    font-size: 0.93333rem;\n    font-weight: normal;\n    margin: 5px 0 0 0;\n  }\n.contact-validation-active #loader,\n  .contact-validation-active #loader-2 {\n    display: none;\n    margin-top: 10px;\n  }\n.contact-validation-active #success,\n  .contact-validation-active #success-2,\n  .contact-validation-active #error,\n  .contact-validation-active #error-2 {\n    width: 100%;\n    color: #fff;\n    padding: 5px 10px;\n    font-size: 16px;\n    text-align: center;\n    display: none;\n  }\n@media (max-width: 767px) {\n    .contact-validation-active #success,\n    .contact-validation-active #success-2,\n    .contact-validation-active #error,\n    .contact-validation-active #error-2 {\n      font-size: 15px;\n    }\n  }\n.contact-validation-active #success,\n  .contact-validation-active #success-2 {\n    background-color: #009a00;\n    border-left: 5px solid green;\n    margin-bottom: 5px;\n  }\n.contact-validation-active #error,\n  .contact-validation-active #error-2 {\n    background-color: #ff1a1a;\n    border-left: 5px solid red;\n  }\n.contact-validation-active #loader {\n    text-align: center;\n    color: #fff;\n    font-size: 8px;\n    font-size: 0.53333rem;\n  }\n#contact-form-s2 #loader i {\n    color: #012f5c;\n  }\n/*** back to top **/\n.back-to-top {\n    background-color: rgba(253, 212, 21, 0.9);\n    width: 45px;\n    height: 45px;\n    line-height: 45px;\n    text-align: center;\n    display: none;\n    position: fixed;\n    z-index: 999;\n    right: 15px;\n    bottom: 15px;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n    border-radius: 3px;\n  }\n@media (max-width: 991px) {\n    .back-to-top {\n      width: 35px;\n      height: 35px;\n      line-height: 35px;\n    }\n  }\n.back-to-top:hover {\n    background-color: #fdd415;\n  }\n.back-to-top i {\n    font-size: 18px;\n    font-size: 1.2rem;\n    color: #fff;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n  }\n/** for popup image ***/\n.mfp-wrap {\n    background-color: rgba(0, 0, 0, 0.9);\n    z-index: 99999;\n  }\n.mfp-with-zoom .mfp-container,\n  .mfp-with-zoom.mfp-bg {\n    opacity: 0;\n    -webkit-backface-visibility: hidden;\n    -webkit-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n  }\n.mfp-with-zoom.mfp-ready .mfp-container {\n    opacity: 1;\n  }\n.mfp-with-zoom.mfp-ready.mfp-bg {\n    opacity: 0.8;\n  }\n.mfp-with-zoom.mfp-removing .mfp-container,\n  .mfp-with-zoom.mfp-removing.mfp-bg {\n    opacity: 0;\n  }\n/*** for fancybox video ***/\n.fancybox-overlay {\n    background: rgba(0, 0, 0, 0.9);\n    z-index: 9999 !important;\n  }\n.fancybox-wrap {\n    z-index: 99999 !important;\n  }\n.section-title, .section-title-s2, .section-title-s3, .section-title-s4, .section-title-s5 {\n    text-align: center;\n    margin: 0 0 45px;\n  }\n.section-title h2, .section-title-s2 h2, .section-title-s3 h2, .section-title-s4 h2, .section-title-s5 h2 {\n    font-size: 36px;\n    font-size: 2.4rem;\n    line-height: 1em;\n    margin: 0;\n    padding-bottom: 0.47em;\n    position: relative;\n  }\n@media (max-width: 991px) {\n    .section-title h2, .section-title-s2 h2, .section-title-s3 h2, .section-title-s4 h2, .section-title-s5 h2 {\n      font-size: 30px;\n      font-size: 2rem;\n    }\n  }\n@media (max-width: 767px) {\n    .section-title h2, .section-title-s2 h2, .section-title-s3 h2, .section-title-s4 h2, .section-title-s5 h2 {\n      font-size: 25px;\n      font-size: 1.66667rem;\n    }\n  }\n.section-title h2:after, .section-title-s2 h2:after, .section-title-s3 h2:after, .section-title-s4 h2:after, .section-title-s5 h2:after {\n    content: \"\";\n    background-color: #fdd415;\n    width: 30px;\n    height: 5px;\n    border-radius: 5px;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    bottom: 0;\n  }\n.section-title-s2 {\n    text-align: left;\n  }\n.section-title-s2 h2 {\n    line-height: 1.2em;\n  }\n.section-title-s2 h2:after {\n    left: 0;\n    -webkit-transform: none;\n    transform: none;\n  }\n.section-title-s3 h2, .section-title-s4 h2, .section-title-s5 h2 {\n    margin-bottom: 0.33em;\n  }\n.section-title-s4, .section-title-s5 {\n    text-align: left;\n  }\n@media (max-width: 991px) {\n    .section-title-s4, .section-title-s5 {\n      margin-bottom: 35px;\n    }\n  }\n.section-title-s4 h2:after, .section-title-s5 h2:after {\n    left: 0;\n    -webkit-transform: none;\n    transform: none;\n  }\n.section-title-s4 h2, .section-title-s5 h2,\n  .section-title-s4 p, .section-title-s5 p {\n    color: #fff;\n  }\n.section-title-s5 h2 {\n    color: #012f5c;\n  }\n.section-title-s5 p {\n    color: #999999;\n  }\n.theme-btn, .theme-btn-s2 {\n    font-family: \"Poppins\", sans-serif;\n    background-color: #012f5c;\n    font-size: 16px;\n    font-size: 1.06667rem;\n    color: #fff;\n    padding: 12px 48px 12px 35px;\n    border: 0;\n    border-radius: 5px;\n    display: inline-block;\n    position: relative;\n  }\n.theme-btn:after, .theme-btn-s2:after {\n    font-family: \"FontAwesome\";\n    content: \"\\f0da\";\n    color: #fdd415;\n    position: absolute;\n    right: 25px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n  }\n@media (max-width: 991px) {\n    .theme-btn:after, .theme-btn-s2:after {\n      right: 15px;\n    }\n  }\n@media (max-width: 1199px) {\n    .theme-btn, .theme-btn-s2 {\n      font-size: 14px;\n      font-size: 0.93333rem;\n      padding: 10px 40px 10px 25px;\n    }\n  }\n@media (max-width: 991px) {\n    .theme-btn, .theme-btn-s2 {\n      font-size: 13px;\n      font-size: 0.86667rem;\n      padding: 9px 30px 9px 15px;\n    }\n  }\n@media (max-width: 767px) {\n    .theme-btn, .theme-btn-s2 {\n      font-size: 12px;\n      font-size: 0.8rem;\n      padding: 8px 30px 8px 15px;\n    }\n  }\n.theme-btn:hover, .theme-btn-s2:hover, .theme-btn:focus, .theme-btn-s2:focus, .theme-btn:active, .theme-btn-s2:active {\n    background-color: #fdd415;\n    color: #012f5c;\n  }\n.theme-btn:hover:after, .theme-btn-s2:hover:after {\n    color: #012f5c;\n  }\n.theme-btn-s2 {\n    background-color: #fdd415;\n    color: #012f5c;\n  }\n.theme-btn-s2:after {\n    color: #012f5c;\n  }\n.form input,\n  .form textarea,\n  .form select {\n    border-color: #bfbfbf;\n    border-radius: 0;\n    outline: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    color: #595959;\n  }\n.form input:focus,\n  .form textarea:focus,\n  .form select:focus {\n    border-color: #012f5c;\n    -webkit-box-shadow: 0 0 5px 0 #02498e;\n    -o-box-shadow: 0 0 5px 0 #02498e;\n    -ms-box-shadow: 0 0 5px 0 #02498e;\n    box-shadow: 0 0 5px 0 #02498e;\n  }\n.form ::-webkit-input-placeholder {\n    font-style: 14px;\n    font-style: italic;\n    color: #595959;\n  }\n.form :-moz-placeholder {\n    font-style: 14px;\n    font-style: italic;\n    color: #595959;\n  }\n.form ::-moz-placeholder {\n    font-style: 14px;\n    font-style: italic;\n    color: #595959;\n  }\n.form :-ms-input-placeholder {\n    font-style: 14px;\n    font-style: italic;\n    color: #595959;\n  }\n.form select {\n    font-style: italic;\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU2MThBRjY5RjgyOTExRTdCRUYxRDQzRjI2MDNCQkEyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU2MThBRjZBRjgyOTExRTdCRUYxRDQzRjI2MDNCQkEyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTYxOEFGNjdGODI5MTFFN0JFRjFENDNGMjYwM0JCQTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTYxOEFGNjhGODI5MTFFN0JFRjFENDNGMjYwM0JCQTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5K0s/8AAAAR0lEQVR42mJUUlI6w8DAMAuKkUEaCDMLCgqCODOB+AcQH4VKlgPxRCBuZEHSORNJdwcQp4PkWKAC6IrSYWIsSLpmYWMDBBgAEv0NeY4nqBQAAAAASUVORK5CYII=) no-repeat calc(100% - 15px) center;\n    display: inline-block;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -ms-appearance: none;\n    appearance: none;\n    cursor: pointer;\n  }\n.form select::-ms-expand {\n    /* for IE 11 */\n    display: none;\n  }\n.social-links {\n    overflow: hidden;\n  }\n/******************************\n\t#page title\n******************************/\n/* .page-title {\n/*   background: url(\"assets/images/pg-title/img-1.jpg\") center center/cover no-repeat local;\n  width: 100%;\n  height: 250px;\n  text-align: center;\n  position: relative;\n} */\n@media (max-width: 767px) {\n  .page-title {\n    height: 220px;\n  }\n}\n.page-title:before {\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0.3);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.page-title .container {\n  height: 100%;\n  display: table;\n}\n.page-title .container > .row {\n  vertical-align: middle;\n  display: table-cell;\n}\n.page-title h2,\n.page-title ol {\n  color: #fff;\n}\n.page-title h2 {\n  font-size: 48px;\n  font-size: 3.2rem;\n  font-weight: 800;\n  margin: 1em 0 0.23em;\n}\n@media (max-width: 1199px) {\n  .page-title h2 {\n    font-size: 42px;\n    font-size: 2.8rem;\n  }\n}\n@media (max-width: 991px) {\n  .page-title h2 {\n    font-size: 35px;\n    font-size: 2.33333rem;\n  }\n}\n@media (max-width: 767px) {\n  .page-title h2 {\n    font-size: 28px;\n    font-size: 1.86667rem;\n    font-weight: bold;\n  }\n}\n.page-title .breadcrumb {\n  background-color: transparent;\n  padding: 0;\n}\n@media (max-width: 767px) {\n  .page-title .breadcrumb {\n    text-align: center;\n  }\n}\n.page-title .breadcrumb li {\n  font-size: 18px;\n  font-size: 1.2rem;\n  color: #fdd415;\n  margin-right: 5px;\n}\n@media (max-width: 991px) {\n  .page-title .breadcrumb li {\n    font-size: 15px;\n    font-size: 1rem;\n  }\n}\n.page-title .breadcrumb li a {\n  color: #fff;\n}\n.page-title .breadcrumb li a:hover {\n  color: #fdd415;\n}\n.page-title .breadcrumb > li + li:before {\n  font-family: \"FontAwesome\";\n  content: \"\\f105\";\n  color: #fff;\n  margin-right: 5px;\n}\n.preloader {\n  background-color: #fff;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 100000;\n}\n.preloader .inner {\n  width: 55px;\n  height: 15px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.preloader span {\n  background-color: #0263c1;\n  width: 9px;\n  height: 5px;\n  position: absolute;\n  top: 0;\n  display: block;\n  -webkit-animation: preloader-animation 1.5s infinite ease-in-out;\n  animation: preloader-animation 1.5s infinite ease-in-out;\n}\n.preloader .inner > span:nth-child(2) {\n  left: 11px;\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n.preloader .inner > span:nth-child(3) {\n  left: 22px;\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n.preloader .inner > span:nth-child(4) {\n  left: 33px;\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n.preloader .inner > span:nth-child(5) {\n  left: 44px;\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s;\n}\n@keyframes preloader-animation {\n  0%, 100%, 50% {\n    height: 5px;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    background: #0263c1;\n  }\n  25% {\n    height: 30px;\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px);\n    background: #012f5c;\n  }\n}\n@-webkit-keyframes preloader-animation {\n  0%, 100%, 50% {\n    height: 5px;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    background: #0263c1;\n  }\n  25% {\n    height: 30px;\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px);\n    background: #012f5c;\n  }\n}\n/*--------------------------------------------------------------\n#0.4\thero slider\n--------------------------------------------------------------*/\n.hero {\n  position: relative;\n  height: 100vh;\n  overflow: hidden;\n  /** slider controls **/\n  /*** hero slider animation ***/\n}\n@media (max-width: 991px) {\n  .hero {\n    min-height: 500px;\n  }\n}\n@media (max-width: 767px) {\n  .hero {\n    min-height: 420px;\n  }\n}\n.hero .slide {\n  height: 100vh;\n  position: relative;\n  background-repeat: no-repeat;\n  position: relative;\n}\n@media (max-width: 991px) {\n  .hero .slide {\n    min-height: 500px;\n  }\n}\n@media (max-width: 767px) {\n  .hero .slide {\n    min-height: 420px;\n  }\n}\n.hero .slide .slider-bg {\n  display: none;\n}\n.hero .slide:before {\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.hero .slide:focus {\n  outline: none;\n}\n.hero .slide .container {\n  height: 100%;\n  display: table;\n}\n.hero .slide .row {\n  display: table-cell;\n  vertical-align: middle;\n}\n.hero .slick-prev,\n.hero .slick-next {\n  background-color: #fff;\n  width: 50px;\n  height: 50px;\n  z-index: 9;\n  border-radius: 50%;\n  @inlcude transition-time(0.3s);\n}\n@media (max-width: 991px) {\n  .hero .slick-prev,\n  .hero .slick-next {\n    display: none !important;\n  }\n}\n.hero .slick-prev:before,\n.hero .slick-next:before {\n  color: #012f5c;\n}\n.hero .slick-prev:hover,\n.hero .slick-next:hover {\n  background-color: #012f5c;\n}\n.hero .slick-prev:hover:before,\n.hero .slick-next:hover:before {\n  color: #fff;\n}\n.hero .slick-prev {\n  left: 15px;\n}\n.hero .slick-prev:before {\n  font-family: \"FontAwesome\";\n  content: \"\\f104\";\n  opacity: 1;\n}\n.hero .slick-next {\n  right: 15px;\n}\n.hero .slick-next:before {\n  font-family: \"FontAwesome\";\n  content: \"\\f105\";\n  opacity: 1;\n}\n.hero .slick-dots {\n  bottom: 20px;\n}\n@media screen and (min-width: 992px) {\n  .hero .slick-dots {\n    display: none !important;\n  }\n}\n@media screen and (max-width:425px){\n  .hero .slick-dots {\n    bottom: 10px!important;\n  }\n}\n.hero .slick-dots li {\n  margin: 0;\n}\n.hero .slick-dots button {\n  background-color: #fdd415;\n  width: 15px;\n  height: 15px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n.hero .slick-dots button:before,\n.hero .slick-dots button:before {\n  display: none;\n}\n.hero .hero-slider .slide-caption > h2,\n.hero .hero-slider .slide-caption > p,\n.hero .hero-slider .slide-caption > .btns {\n  color: #fff;\n  opacity: 0;\n}\n.hero .hero-slider .slick-list .slick-current .slide-caption > h2 {\n  -webkit-animation: fadeInLeftSlow 1.5s 0.8s forwards;\n  animation: fadeInLeftSlow 1.5s 0.8s forwards;\n}\n.hero .hero-slider .slick-list .slick-current .slide-caption > p {\n  -webkit-animation: fadeInLeftSlow 1.5s 1.4s forwards;\n  animation: fadeInLeftSlow 1.5s 1.4s forwards;\n}\n.hero .hero-slider .slick-list .slick-current .slide-caption > .btns {\n  -webkit-animation: fadeInLeftSlow 1.5s 1.8s forwards;\n  animation: fadeInLeftSlow 1.5s 1.8s forwards;\n}\n.hero-center {\n  text-align: center;\n}\n/************************************\n\thero style 1\n*************************************/\n.hero-style-1 .slide-caption h2, .hero-style-2 .slide-caption h2, .hero-style-3 .slide-caption h2 {\n  font-size: 60px;\n  font-size: 4rem;\n  margin: 0 0 0.3em;\n}\n@media (max-width: 1199px) {\n  .hero-style-1 .slide-caption h2, .hero-style-2 .slide-caption h2, .hero-style-3 .slide-caption h2 {\n    font-size: 50px;\n    font-size: 3.33333rem;\n  }\n}\n@media (max-width: 991px) {\n  .hero-style-1 .slide-caption h2, .hero-style-2 .slide-caption h2, .hero-style-3 .slide-caption h2 {\n    font-size: 40px;\n    font-size: 2.66667rem;\n  }\n}\n@media (max-width: 767px) {\n  .hero-style-1 .slide-caption h2, .hero-style-2 .slide-caption h2, .hero-style-3 .slide-caption h2 {\n    font-size: 30px;\n    font-size: 2rem;\n  }\n}\n.hero-style-1 .slide-caption p, .hero-style-2 .slide-caption p, .hero-style-3 .slide-caption p {\n  font-size: 18px;\n  font-size: 1.2rem;\n  margin: 0 0 2em;\n}\n@media (max-width: 767px) {\n  .hero-style-1 .slide-caption p, .hero-style-2 .slide-caption p, .hero-style-3 .slide-caption p {\n    font-size: 15px;\n    font-size: 1rem;\n  }\n}\n/************************************\n\thero style 2\n*************************************/\n.hero-style-2, .hero-style-3 {\n  height: 670px;\n}\n@media (max-width: 991px) {\n  .hero-style-2, .hero-style-3 {\n    height: 500px;\n  }\n}\n@media (max-width: 767px) {\n  .hero-style-2, .hero-style-3 {\n    height: 420px;\n  }\n}\n.hero-style-2 .slide, .hero-style-3 .slide {\n  height: 670px;\n  position: relative;\n}\n@media (max-width: 991px) {\n  .hero-style-2 .slide, .hero-style-3 .slide {\n    height: 500px;\n  }\n}\n@media (max-width: 767px) {\n  .hero-style-2 .slide, .hero-style-3 .slide {\n    height: 420px;\n  }\n}\n/************************************\n\thero style 3\n*************************************/\n.hero-style-3 {\n  text-align: center;\n}\n.hero-style-3 .slide-caption h2 {\n  margin-bottom: 0.7em;\n}\n.progress-bar span {\n  font-family: \"Poppins\", sans-serif;\n  background-color: #fdd415;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  font-size: 18px;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #012f5c;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 0;\n}\n.sticky-header {\n  width: 100%;\n  position: fixed !important;\n  left: 0;\n  top: -200px;\n  z-index: 9999 !important;\n  opacity: 0;\n  -webkit-transition: all 0.7s;\n  transition: all 0.7s;\n}\n/*--------------------------------------------------------------\n\t#services\n--------------------------------------------------------------*/\n/*--------------------------------------------------------------\n#7.0\tservices-pg-section\n--------------------------------------------------------------*/\n.services-pg .page-title {\n  background: url('img-3.54268343ccec8f6174b5.jpg') center center/cover no-repeat local;\n}\n.services-pg-section {\n  padding-bottom: 50px;\n}\n@media (max-width: 767px) {\n  .services-pg-section {\n    padding-bottom: 40px;\n  }\n}\n.services-pg-section .services-grid-s2 {\n  overflow: hidden;\n  margin: 0 -15px;\n}\n.services-pg-section .services-grid-s2 .grid {\n  width: calc(33.33% - 30px);\n  float: left;\n  margin: 0 15px 30px;\n}\n@media (max-width: 1199px) {\n  .services-pg-section .services-grid-s2 .grid {\n    width: calc(50% - 30px);\n  }\n}\n@media (max-width: 600px) {\n  .services-pg-section .services-grid-s2 .grid {\n    width: calc(100% - 30px);\n    float: none;\n  }\n}\n.page-title{\n  margin-top: 60px !important;\n}\n@media (max-width:768px){\n  .page-title{\n    margin-top: 0 !important ;\n  }\n}\n@media (max-width: 991px) {\n  .service-sidebar,\n  .case-study-sidebar {\n    margin-top: 30px!important;\n  }\n}\n\n\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map