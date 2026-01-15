document.addEventListener('DOMContentLoaded', () => {
  const recommendButton = document.getElementById('recommendButton');
  const menuDisplay = document.getElementById('menu');

  const dinnerMenus = [
    "치킨",
    "피자",
    "삼겹살",
    "된장찌개",
    "김치찌개",
    "족발",
    "보쌈",
    "파스타",
    "스테이크",
    "초밥",
    "라멘",
    "떡볶이",
    "햄버거",
    "부대찌개",
    "곱창"
  ];

  recommendButton.addEventListener('click', () => {
    menuDisplay.textContent = '고민중...';
    recommendButton.disabled = true;

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
      const randomMenu = dinnerMenus[randomIndex];
      menuDisplay.textContent = randomMenu;
      recommendButton.disabled = false;
    }, 1500);
  });
});
