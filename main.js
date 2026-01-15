document.addEventListener('DOMContentLoaded', () => {
  const recommendButton = document.getElementById('recommendButton');
  const menuDisplay = document.getElementById('menu');
  const menuImage = document.getElementById('menuImage');
  const langKoButton = document.getElementById('lang-ko');
  const langEnButton = document.getElementById('lang-en');

  const translations = {
    ko: {
      title: "저녁 메뉴 추천",
      headline: "오늘 저녁 뭐 먹지?",
      description: "버튼을 눌러 저녁 메뉴를 추천받으세요!",
      button: "메뉴 추천받기",
      thinking: "고민중...",
      menus: [
        { name: "치킨", image: "images/chicken.png" },
        { name: "피자", image: "images/pizza.png" },
        { name: "삼겹살", image: "images/samgyeopsal.png" },
        { name: "된장찌개", image: "images/doenjang-jjigae.png" },
        { name: "김치찌개", image: "images/kimchi-jjigae.png" },
        { name: "족발", image: "images/jokbal.png" },
        { name: "보쌈", image: "images/bossam.png" },
        { name: "파스타", image: "images/pasta.png" },
        { name: "스테이크", image: "images/steak.png" },
        { name: "초밥", image: "images/sushi.png" },
        { name: "라멘", image: "images/ramen.png" },
        { name: "떡볶이", image: "images/tteokbokki.png" },
        { name: "햄버거", image: "images/hamburger.png" },
        { name: "부대찌개", image: "images/budae-jjigae.png" },
        { name: "곱창", image: "images/gopchang.png" }
      ]
    },
    en: {
      title: "Dinner Menu Recommender",
      headline: "What to eat for dinner?",
      description: "Press the button to get a dinner recommendation!",
      button: "Get Recommendation",
      thinking: "Thinking...",
      menus: [
        { name: "Chicken", image: "images/chicken.png" },
        { name: "Pizza", image: "images/pizza.png" },
        { name: "Pork Belly (Samgyeopsal)", image: "images/samgyeopsal.png" },
        { name: "Soybean Paste Stew", image: "images/doenjang-jjigae.png" },
        { name: "Kimchi Stew", image: "images/kimchi-jjigae.png" },
        { name: "Pig's Trotters (Jokbal)", image: "images/jokbal.png" },
        { name: "Boiled Pork Wraps (Bossam)", image: "images/bossam.png" },
        { name: "Pasta", image: "images/pasta.png" },
        { name: "Steak", image: "images/steak.png" },
        { name: "Sushi", image: "images/sushi.png" },
        { name: "Ramen", image: "images/ramen.png" },
        { name: "Spicy Rice Cakes (Tteokbokki)", image: "images/tteokbokki.png" },
        { name: "Hamburger", image: "images/hamburger.png" },
        { name: "Army Stew (Budae-jjigae)", image: "images/budae-jjigae.png" },
        { name: "Grilled Intestines (Gopchang)", image: "images/gopchang.png" }
      ]
    }
  };

  let currentLang = 'ko';

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-lang]').forEach(el => {
      const key = el.getAttribute('data-lang');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    if (lang === 'ko') {
      langKoButton.classList.add('active');
      langEnButton.classList.remove('active');
    } else {
      langEnButton.classList.add('active');
      langKoButton.classList.remove('active');
    }
    // Clear previous result when language changes
    menuImage.style.display = 'none';
    menuDisplay.textContent = '';
  }

  langKoButton.addEventListener('click', () => setLanguage('ko'));
  langEnButton.addEventListener('click', () => setLanguage('en'));

  recommendButton.addEventListener('click', () => {
    // Hide previous result
    menuImage.style.display = 'none';
    menuDisplay.textContent = translations[currentLang].thinking;
    recommendButton.disabled = true;

    setTimeout(() => {
      const menus = translations[currentLang].menus;
      const randomIndex = Math.floor(Math.random() * menus.length);
      const randomMenu = menus[randomIndex];
      
      menuDisplay.textContent = randomMenu.name;
      menuImage.src = randomMenu.image;
      menuImage.style.display = 'block';
      
      recommendButton.disabled = false;
    }, 1500);
  });

  // Set initial language
  setLanguage(currentLang);
});
