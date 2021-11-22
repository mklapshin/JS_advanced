const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";


console.log(window)

const app = new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    basketGoods: [],
    searchLine: '',
    checkBasket: 0,
    name: 'ноутбук',
    showBasket: false,
    showItem1: false,
    showItem2: false,
  },


  methods: {

    async getProducts() {
      const responce = await fetch(`${API_URL}/catalogData.json`);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
      } else {
        alert("Ошибка при соединении с сервером");
      }
    },

    async addToBasket(e) {
      this.showBasket = true;
      if (e.target.innerText == '1000') {
        this.showItem2 = true;
      } else if (e.target.innerText == 'Мышка') {
        this.showItem2 = true;
      }
      else if (e.target.innerText == 'Ноутбук') {
        this.showItem1 = true;
      }
      else if (e.target.innerText == '45600') {
        this.showItem1 = true;
      }
      },


  },

  async mounted() {
    await this.getProducts()
  }
});

// const init = async () => {
 // const list = new GoodsList();
  // const busket = new BucketList();
  // await list.fetchGoods();
  // list.render();

//  document.querySelectorAll(".buyButton").forEach((element) => {
 //   element.addEventListener("click", (event) => {
 //    const itemId = event.target.getAttribute("itemId");
  //    const item = list.goods.find(good => good.id_product === parseInt(itemId))

 //     busket.goods.push(item)
//      busket.render()

//    });
//  });
// };