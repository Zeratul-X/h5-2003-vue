<!-- 底部通用组件 -->
<template>
  <div class>
    <footer class="footer-area">
      <div class="container">
        <div class="footer-widget about-widget">
          <div class="about-logo">
            <a href="index.html">
              <img src="../assets/img/logo/logo-3.png" alt="logo" />
            </a>
          </div>
          <ul>
            <li>地址：德克萨斯州休斯敦Wines Lane 4772号，邮政编码77032</li>
            <li>电话：+ 832-347-5843</li>
            <li>Email: contact@Glee.com</li>
          </ul>
        </div>

        <div class="footer-widget links-widgets">
          <h4 class="widget-title">服务</h4>
          <ul>
            <li>
              <a href="#">联系我们</a>
            </li>
            <li>
              <a href="#">我的帐户</a>
            </li>
            <li>
              <a href="#">客户服务</a>
            </li>
            <li>
              <a href="#">条款及细则</a>
            </li>
            <li>
              <a href="#">常见问题</a>
            </li>
          </ul>
        </div>

        <div class="footer-widget links-widgets">
          <h4 class="widget-title">帐户</h4>
          <ul>
            <li>
              <a href="#">facebook</a>
            </li>
            <li>
              <a href="#">推特</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">运球</a>
            </li>
            <li>
              <a href="#">Google Plus</a>
            </li>
          </ul>
        </div>
        <div class="footer-widget newsletter-widget">
          <h4 class="widget-title">通讯</h4>
          <p>
            注册成为第一个
            <br />了解独家优惠的人。
          </p>
          <form action="#">
            <div class="input-wrap">
              <input type="text" placeholder="Email" />
              <button>订阅</button>
            </div>
          </form>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <div class="copyright">©2020 Glee商店。保留所有权利。</div>
          <div class="footer-menu">
            <ul>
              <li>
                <a href="index.html">家</a>
              </li>
              <li>
                <a href="about.html">关于</a>
              </li>
              <li>
                <a href="faq.html">常见问题</a>
              </li>
              <li>
                <a href="contact.html">联系我们</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="toTop" @click="toTop">》</div>
    </footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toTop: function () {
      clearInterval(timer);
      var timer = setInterval(() => {
        document.documentElement.scrollTop -= 8;
        if (document.documentElement.scrollTop == 0) {
          clearInterval(timer);
        }
      }, 10);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.footer-area {
    // 回到顶部按钮
  .toTop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #fcd7b6;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 24px;
    border: 0;
    border-radius: 4px;
    font-weight: 700;
    opacity: 0.6;
    cursor: pointer;
    z-index: 9999;
    transform: rotate(-90deg);
  }
  padding: 50px 0;
  .container {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    .footer-widget.about-widget {
      width: 285px;
      height: 262px;
      padding: 0 15px;
      .about-logo {
        a {
          img {
          }
        }
      }

      ul {
        list-style: none;
        padding-left: 0;
        li {
          margin-bottom: 15px;
          color: #7b7b7b;
          font-size: 14px;
          font-family: "Rubik", sans-serif;
          margin-bottom: 15px;
          text-decoration: none;
          font-weight: 400;
        }
      }
    }

    .footer-widget.links-widgets {
      width: 190px;
      height: 262px;
      padding: 0 15px;
      h4.widget-title {
        color: #1f2044;
        font-size: 16px;
        font-family: "DM Sans", sans-serif;
        font-weight: 700;
        margin-bottom: 25px;
        text-transform: uppercase;
      }
      ul {
        list-style: none;
        padding-left: 0;

        li {
          margin-bottom: 15px;

          a {
            color: #7b7b7b;
            font-size: 14px;
            font-family: "Rubik", sans-serif;
            margin-bottom: 15px;
            text-decoration: none;
            font-weight: 400;
          }
        }
      }
    }

    .footer-widget.newsletter-widget {
      width: 475px;
      height: 262px;
      padding: 0 15px;
      h4.widget-title {
        margin-bottom: 25px;
      }

      p {
        font-size: 14px;
        line-height: 26px;
        color: #7b7b7b;
        font-family: "Rubik", sans-serif;
        font-weight: 400;
        margin-bottom: 16px;
      }

      form {
        .input-wrap {
          display: flex;
          input {
            border-radius: 0;
            background: rgba(252, 215, 182, 0.5);
            width: 445px;
            height: 60px;
            line-height: 60px;
            padding-left: 10px;
            padding-right: 144px;
            border: 0;
          }

          button {
            border-radius: 0;
            background: #a3bbc8;
            height: 60px;
            border: none;
            color: #fff;
            width: 92px;
          }
        }
      }
    }
  }

  .footer-bottom {
    .container {
      padding: 20px 0;
      width: 1000px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #a3bbc8;
      .copyright {
        height: 16px;
        color: #7b7b7b;
        font-size: 16px;
        line-height: 16px;
        font-family: "Rubik", sans-serif;
        font-weight: 400;
      }
      .footer-menu {
        height: 16px;
        ul {
          margin: 0;
          height: 16px;
          list-style: none;
          display: flex;
          li {
            height: 16px;
            &:before {
              content: "|";
              margin: 0 15px;
              color: #7b7b7b;
            }
            a {
              font-size: 16px;
              color: #7b7b7b;
              line-height: 16px;
              text-transform: capitalize;
              text-decoration: none;
            }
          }
          li:first-child:before {
            content: "";
          }
        }
      }
    }
  }
}
</style>