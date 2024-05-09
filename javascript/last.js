const modal = document.querySelector(".middle-popup");
const openBtn = document.querySelector(".popup_show"); // 괜찮아요 버튼
const closeBtn = document.querySelector('.close-button'); // 화살표 버튼
const text = document.querySelector(".text-top");
const text1 = document.querySelector(".text-middle");

const toggleModal = () => {
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
    text.style.display = (text.style.display === "none") ? "block" : "none";
    text1.style.display = (text1.style.display === "none") ? "block" : "none";
  };

openBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);