const products = [
  { id: 1, name: "Крем для рук", price: 590, category: "уход" },
  { id: 2, name: "Гель для душа", price: 790, category: "уход" },
  { id: 3, name: "Парфюм", price: 2590, category: "ароматы" },
];

const cart = JSON.parse(localStorage.getItem('cart')) || [];

const updateCart = () => {
  const cartList = document.querySelector("#cart ul");
  const totalElem = document.querySelector("#cart p strong");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    cartList.innerHTML += `<li>${item.name} — ${item.qty} шт.</li>`;
    total += item.qty;
  });

  totalElem.textContent = `Итого: ${total} товаров`;
  localStorage.setItem('cart', JSON.stringify(cart));
};

const addToCart = (id) => {
  const product = products.find(p => p.id === id);
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
};

document.querySelectorAll(".card button").forEach((btn, index) => {
  btn.addEventListener("click", () => addToCart(products[index].id));
});

updateCart();