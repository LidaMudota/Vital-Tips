const tips = [
    "Пейте больше воды. Вода необходима для всех функций организма.",
    "Старайтесь каждый день быть физически активным.",
    "Ешьте больше овощей и фруктов.",
    "Избегайте стресса и старайтесь отдыхать.",
    "Практикуйте медитацию для улучшения ментального здоровья.",
    "Старайтесь спать не менее 7-8 часов каждую ночь.",
    "Регулярно проверяйте здоровье у врача.",
    "Ешьте меньше сахара и переработанных продуктов.",
    "Практикуйте благодарность и позитивное мышление.",
    "Проводите больше времени на свежем воздухе."
];

const button = document.getElementById('generate');
const tipContainer = document.getElementById('tip-container');
const tipElement = document.getElementById('tip');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipElement.textContent = tips[randomIndex];
    tipContainer.style.display = 'block';
});
