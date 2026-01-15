document.addEventListener('DOMContentLoaded', () => {
  const recommendButton = document.getElementById('recommendButton');
  const menuDisplay = document.getElementById('menu');
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
        "치킨", "피자", "삼겹살", "된장찌개", "김치찌개",
        "족발", "보쌈", "파스타", "스테이크", "초밥",
        "라멘", "떡볶이", "햄버거", "부대찌개", "곱창"
      ]
    },
    en: {
      title: "Dinner Menu Recommender",
      headline: "What to eat for dinner?",
      description: "Press the button to get a dinner recommendation!",
      button: "Get Recommendation",
      thinking: "Thinking...",
      menus: [
        "Chicken", "Pizza", "Pork Belly (Samgyeopsal)", "Soybean Paste Stew", "Kimchi Stew",
        "Pig's Trotters (Jokbal)", "Boiled Pork Wraps (Bossam)", "Pasta", "Steak", "Sushi",
        "Ramen", "Spicy Rice Cakes (Tteokbokki)", "Hamburger", "Army Stew (Budae-jjigae)", "Grilled Intestines (Gopchang)"
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
    menuDisplay.textContent = '';
  }

  langKoButton.addEventListener('click', () => setLanguage('ko'));
  langEnButton.addEventListener('click', () => setLanguage('en'));

  recommendButton.addEventListener('click', () => {
    menuDisplay.textContent = translations[currentLang].thinking;
    recommendButton.disabled = true;

    setTimeout(() => {
      const menus = translations[currentLang].menus;
      const randomIndex = Math.floor(Math.random() * menus.length);
      const randomMenu = menus[randomIndex];
      
      menuDisplay.textContent = randomMenu;
      
      recommendButton.disabled = false;
    }, 1500);
  });

  // Set initial language
  setLanguage(currentLang);
});
