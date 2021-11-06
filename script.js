class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    this.goods = [
      { title: "Shirt", price: 150 },
      { title: "Socks", price: 50 },
      { title: "Jacket", price: 350 },
      { title: "Shoes", price: 250 },
    ];
  }

  render() {
    let listHtml = "";
    let totalPrice = 0;
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.title, good.price);
      totalPrice = totalPrice + good.price;
      listHtml += goodItem.render();
    });
    console.log("Суммарная стоисмость всех товаров равна " + totalPrice);
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
}


const init = () => {
    const list = new GoodsList();
    list.fetchGoods();
    list.render();
};

window.onload = init;