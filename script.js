const plusButtons = document.querySelectorAll(".fa-plus-circle");
const minusButtons = document.querySelectorAll(".fa-minus-circle");
const deleteButtons = document.querySelectorAll(".fa-trash-alt");
const likeButtons = document.querySelectorAll(".fa-heart");
const totalPriceElement = document.querySelector(".total");

plusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotalPrice();
  });
});

minusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;
      updateTotalPrice();
    }
  });
});

deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    card.remove();
    updateTotalPrice();
  });
});

likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("liked");
    //change color of the heart icon when liked
    if (button.classList.contains("liked")) {
      button.style.color = "red";
    } else {
      button.style.color = "";
    }
  });
});

function updateTotalPrice() {
  let total = 0;
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const unitPrice = parseFloat(card.querySelector(".unit-price").textContent);
    const quantity = parseInt(card.querySelector(".quantity").textContent);
    total += unitPrice * quantity;
  });
  totalPriceElement.textContent = `${total} $`;
}
