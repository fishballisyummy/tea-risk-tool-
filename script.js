// 茶言觀色·客戶流失風險評估器 - JavaScript 核心邏輯（多語言版本）

// 風險描述的多語言映射
const riskDescriptions = {
    low: {
        en: "High customer loyalty, low churn possibility",
        zh: "客戶忠誠度高，流失可能性低",
        ar: "ولاء العميل مرتفع، احتمالية الفقدان منخفضة",
        fr: "Fidélité client élevée, faible possibilité de perte",
        ru: "Высокая лояльность клиента, низкая вероятность оттока",
        es: "Alta lealtad del cliente, baja posibilidad de pérdida"
    },
    medium: {
        en: "Customer has churn risk, needs attention",
        zh: "客戶有流失風險，需要關注",
        ar: "العميل معرض لمخاطر الفقدان، يحتاج إلى اهتمام",
        fr: "Le client présente un risque de perte, nécessite une attention",
        ru: "Клиент имеет риск оттока, требует внимания",
        es: "El cliente tiene riesgo de pérdida, necesita atención"
    },
    high: {
        en: "High churn risk, immediate action required",
        zh: "客戶流失風險高，需立即採取行動",
        ar: "مخاطر فقدان العميل عالية، مطلوب إجراء فوري",
        fr: "Risque de perte client élevé, action immédiate requise",
        ru: "Высокий риск оттока клиентов, требуется немедленное действие",
        es: "Alto riesgo de pérdida de clientes, se requiere acción inmediata"
    }
};

// 建議的多語言映射
const recommendations = {
    low: {
        en: [
            "Maintain current service quality",
            "Provide VIP exclusive offers",
            "Invite to participate in new product tasting",
            "Send regular care messages"
        ],
        zh: [
            "維持現有服務品質",
            "提供VIP專屬優惠",
            "邀請參與新品試飲",
            "定期發送關懷訊息"
        ],
        ar: [
            "الحفاظ على جودة الخدمة الحالية",
            "توفير عروض حصرية لـVIP",
            "الدعوة للمشاركة في تذوق المنتجات الجديدة",
            "إرسال رسائل رعاية منتظمة"
        ],
        fr: [
            "Maintenir la qualité actuelle du service",
            "Fournir des offres exclusives VIP",
            "Inviter à participer à la dégustation de nouveaux produits",
            "Envoyer des messages de soins réguliers"
        ],
        ru: [
            "Поддерживать текущее качество обслуживания",
            "Предоставлять эксклюзивные предложения для VIP",
            "Приглашать к участию в дегустации новых продуктов",
            "Регулярно отправлять заботливые сообщения"
        ],
        es: [
            "Mantener la calidad actual del servicio",
            "Proporcionar ofertas exclusivas VIP",
            "Invitar a participar en la cata de nuevos productos",
            "Enviar mensajes de cuidado regulares"
        ]
    },
    medium: {
        en: [
            "Proactively contact to understand needs",
            "Provide exclusive coupons",
            "Invite to member events",
            "Collect feedback to improve service"
        ],
        zh: [
            "主動聯繫了解需求",
            "提供專屬優惠券",
            "邀請參加會員活動",
            "收集回饋改善服務"
        ],
        ar: [
            "الاتصال بشكل استباقي لفهم الاحتياجات",
            "توفير كوبونات حصرية",
            "الدعوة لفعاليات الأعضاء",
            "جمع الملاحظات لتحسين الخدمة"
        ],
        fr: [
            "Contacter proactivement pour comprendre les besoins",
            "Fournir des coupons exclusifs",
            "Inviter à des événements membres",
            "Collecter les commentaires pour améliorer le service"
        ],
        ru: [
            "Проактивно связываться для понимания потребностей",
            "Предоставлять эксклюзивные купоны",
            "Приглашать на мероприятия для членов",
            "Собирать отзывы для улучшения обслуживания"
        ],
        es: [
            "Contactar proactivamente para comprender las necesidades",
            "Proporcionar cupones exclusivos",
            "Invitar a eventos para miembros",
            "Recopilar comentarios para mejorar el servicio"
        ]
    },
    high: {
        en: [
            "Contact customer immediately to understand reasons",
            "Provide special offers to retain",
            "Arrange store manager personal service",
            "Establish dedicated retention plan"
        ],
        zh: [
            "立即聯繫客戶了解原因",
            "提供特別優惠挽回",
            "安排店長親自服務",
            "建立專屬挽回計劃"
        ],
        ar: [
            "الاتصال بالعميل فوراً لفهم الأسباب",
            "توفير عروض خاصة للاستبقاء",
            "ترتيب خدمة شخصية من مدير المتجر",
            "إنشاء خطة استبقاء مخصصة"
        ],
        fr: [
            "Contacter le client immédiatement pour comprendre les raisons",
            "Fournir des offres spéciales pour retenir",
            "Organiser un service personnel du directeur du magasin",
            "Établir un plan de rétention dédié"
        ],
        ru: [
            "Немедленно связаться с клиентом, чтобы понять причины",
            "Предоставлять специальные предложения для удержания",
            "Организовать персональное обслуживание менеджером магазина",
            "Создать специальный план удержания"
        ],
        es: [
            "Contactar al cliente inmediatamente para comprender las razones",
            "Proporcionar ofertas especiales para retener",
            "Organizar servicio personal del gerente de la tienda",
            "Establecer un plan de retención dedicado"
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // 等待語言管理器初始化
    setTimeout(() => {
        initApp();
    }, 100);
});

function initApp() {
    bindEvents();
    initializeForm();
    evaluateRisk();
    
    // 監聽語言變更事件
    document.addEventListener('languageChanged', function() {
        evaluateRisk();
    });
}

function bindEvents() {
    const form = document.getElementById('risk-assessment-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        evaluateRisk();
    });
    
    const resetBtn = document.getElementById('reset-btn');
    resetBtn.addEventListener('click', resetForm);
    
    syncInputAndSlider('age', 'age-slider');
    syncInputAndSlider('monthly-visits', 'visits-slider');
    syncInputAndSlider('days-since-last-visit', 'days-slider');
    
    bindStarRating();
    
    ['age', 'monthly-visits', 'days-since-last-visit'].forEach(id => {
        const input = document.getElementById(id);
        input.addEventListener('input', evaluateRisk);
    });
}

function syncInputAndSlider(inputId, sliderId) {
    const input = document.getElementById(inputId);
    const slider = document.getElementById(sliderId);
    
    input.addEventListener('input', function() {
        slider.value = this.value;
        evaluateRisk();
    });
    
    slider.addEventListener('input', function() {
        input.value = this.value;
        evaluateRisk();
    });
}

function bindStarRating() {
    const stars = document.querySelectorAll('.star');
    const satisfactionInput = document.getElementById('satisfaction-score');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.getAttribute('data-value'));
            satisfactionInput.value = value;
            
            stars.forEach(s => {
                if (parseInt(s.getAttribute('data-value')) <= value) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
            
            evaluateRisk();
        });
    });
}

function initializeForm() {
    document.getElementById('age').value = 30;
    document.getElementById('age-slider').value = 30;
    document.getElementById('monthly-visits').value = 5;
    document.getElementById('visits-slider').value = 5;
    document.getElementById('days-since-last-visit').value = 15;
    document.getElementById('days-slider').value = 15;
    document.getElementById('satisfaction-score').value = 5;
}

function resetForm() {
    initializeForm();
    
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const value = parseInt(star.getAttribute('data-value'));
        if (value === 5) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
    
    evaluateRisk();
}

function evaluateRisk() {
    const age = parseInt(document.getElementById('age').value);
    const monthlyVisits = parseInt(document.getElementById('monthly-visits').value);
    const daysSinceLastVisit = parseInt(document.getElementById('days-since-last-visit').value);
    const satisfactionScore = parseInt(document.getElementById('satisfaction-score').value);
    
    const riskResult = calculateRiskLevel(age, monthlyVisits, daysSinceLastVisit, satisfactionScore);
    updateRiskDisplay(riskResult, age, monthlyVisits, daysSinceLastVisit, satisfactionScore);
}

function calculateRiskLevel(age, monthlyVisits, daysSinceLastVisit, satisfactionScore) {
    // 高風險條件
    if (daysSinceLastVisit > 60) {
        return {
            level: 'high',
            probability: 42,
            factors: {
                daysSinceLastVisit: { risk: 'high', impact: 45 },
                satisfactionScore: { risk: getSatisfactionRisk(satisfactionScore), impact: 30 },
                monthlyVisits: { risk: getVisitsRisk(monthlyVisits), impact: 15 },
                age: { risk: getAgeRisk(age), impact: 10 }
            }
        };
    }
    
    if (satisfactionScore <= 2) {
        return {
            level: 'high',
            probability: 42,
            factors: {
                daysSinceLastVisit: { risk: getDaysRisk(daysSinceLastVisit), impact: 45 },
                satisfactionScore: { risk: 'high', impact: 30 },
                monthlyVisits: { risk: getVisitsRisk(monthlyVisits), impact: 15 },
                age: { risk: getAgeRisk(age), impact: 10 }
            }
        };
    }
    
    if (monthlyVisits <= 3) {
        return {
            level: 'high',
            probability: 42,
            factors: {
                daysSinceLastVisit: { risk: getDaysRisk(daysSinceLastVisit), impact: 45 },
                satisfactionScore: { risk: getSatisfactionRisk(satisfactionScore), impact: 30 },
                monthlyVisits: { risk: 'high', impact: 15 },
                age: { risk: getAgeRisk(age), impact: 10 }
            }
        };
    }
    
    // 中風險條件
    if ((daysSinceLastVisit >= 30 && daysSinceLastVisit <= 60) ||
        satisfactionScore === 3 ||
        (monthlyVisits >= 4 && monthlyVisits <= 6)) {
        return {
            level: 'medium',
            probability: 28.5,
            factors: {
                daysSinceLastVisit: { risk: getDaysRisk(daysSinceLastVisit), impact: 45 },
                satisfactionScore: { risk: getSatisfactionRisk(satisfactionScore), impact: 30 },
                monthlyVisits: { risk: getVisitsRisk(monthlyVisits), impact: 15 },
                age: { risk: getAgeRisk(age), impact: 10 }
            }
        };
    }
    
    // 低風險條件
    return {
        level: 'low',
        probability: 15,
        factors: {
            daysSinceLastVisit: { risk: getDaysRisk(daysSinceLastVisit), impact: 45 },
            satisfactionScore: { risk: getSatisfactionRisk(satisfactionScore), impact: 30 },
            monthlyVisits: { risk: getVisitsRisk(monthlyVisits), impact: 15 },
            age: { risk: getAgeRisk(age), impact: 10 }
        }
    };
}

function getDaysRisk(days) {
    if (days > 60) return 'high';
    if (days >= 30 && days <= 60) return 'medium';
    return 'low';
}

function getSatisfactionRisk(score) {
    if (score <= 2) return 'high';
    if (score === 3) return 'medium';
    return 'low';
}

function getVisitsRisk(visits) {
    if (visits <= 3) return 'high';
    if (visits >= 4 && visits <= 6) return 'medium';
    return 'low';
}

function getAgeRisk(age) {
    if (age < 25 || age > 60) return 'medium';
    return 'low';
}

function updateRiskDisplay(riskResult, age, monthlyVisits, daysSinceLastVisit, satisfactionScore) {
    updateRiskLevel(riskResult.level);
    updateProbability(riskResult.probability, riskResult.level);
    updateRecommendations(riskResult.level);
    updateRiskFactors(riskResult.factors, age, monthlyVisits, daysSinceLastVisit, satisfactionScore);
}

function updateRiskLevel(level) {
    const riskIndicator = document.getElementById('risk-indicator');
    const riskText = document.getElementById('risk-text');
    const riskDot = riskIndicator.querySelector('.risk-dot');
    const riskDescription = document.getElementById('risk-description');
    
    // 獲取當前語言
    const currentLang = window.languageManager ? window.languageManager.getCurrentLanguage() : 'zh';
    
    // 風險等級文字映射
    const riskLevelText = {
        low: { en: 'Low Risk', zh: '低風險', ar: 'مخاطر منخفضة', fr: 'Risque Faible', ru: 'Низкий риск', es: 'Riesgo Bajo' },
        medium: { en: 'Medium Risk', zh: '中風險', ar: 'مخاطر متوسطة', fr: 'Risque Moyen', ru: 'Средний риск', es: 'Riesgo Medio' },
        high: { en: 'High Risk', zh: '高風險', ar: 'مخاطر عالية', fr: 'Risque Élevé', ru: 'Высокий риск', es: 'Riesgo Alto' }
    };
    
    // 更新風險等級文字
    riskText.textContent = riskLevelText[level][currentLang] || riskLevelText[level]['en'];
    
    // 更新風險描述
    riskDescription.textContent = riskDescriptions[level][currentLang] || riskDescriptions[level]['en'];
    
    // 更新視覺指示器
    riskDot.classList.remove('low-risk', 'medium-risk', 'high-risk');
    riskIndicator.classList.remove('low-risk', 'medium-risk', 'high-risk');
    
    riskDot.classList.add(`${level}-risk`);
    riskIndicator.classList.add(`${level}-risk`);
}

function updateProbability(probability, level) {
    const probabilityText = document.querySelector('.probability-text');
    const probabilityFill = document.querySelector('.probability-fill');
    
    probabilityText.textContent = `${probability}%`;
    
    probabilityFill.classList.remove('low-risk', 'medium-risk', 'high-risk');
    probabilityFill.classList.add(`${level}-risk`);
    
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (probability / 100) * circumference;
    probabilityFill.style.strokeDashoffset = offset;
}

function updateRecommendations(level) {
    const recommendationsList = document.getElementById('recommendations-list');
    recommendationsList.innerHTML = '';
    
    // 獲取當前語言
    const currentLang = window.languageManager ? window.languageManager.getCurrentLanguage() : 'zh';
    
    // 獲取對應語言的建議
    const langRecommendations = recommendations[level][currentLang] || recommendations[level]['en'];
    
    // 生成建議列表
    langRecommendations.forEach((rec, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${rec}`;
        li.style.animationDelay = `${0.1 * (index + 1)}s`;
        recommendationsList.appendChild(li);
    });
}

function updateRiskFactors(factors, age, monthlyVisits, daysSinceLastVisit, satisfactionScore) {
    // 更新風險因素數值（保持數字不變，只更新單位文字）
    document.querySelector('.factor:nth-child(1) .factor-value').textContent = `${daysSinceLastVisit}`;
    document.querySelector('.factor:nth-child(2) .factor-value').textContent = `${satisfactionScore}`;
    document.querySelector('.factor:nth-child(3) .factor-value').textContent = `${monthlyVisits}`;
    document.querySelector('.factor:nth-child(4) .factor-value').textContent = `${age}`;
    
    // 更新風險因素條形圖
    updateFactorBar('.factor:nth-child(1) .factor-fill', factors.daysSinceLastVisit.risk, 45);
    updateFactorBar('.factor:nth-child(2) .factor-fill', factors.satisfactionScore.risk, 30);
    updateFactorBar('.factor:nth-child(3) .factor-fill', factors.monthlyVisits.risk, 15);
    updateFactorBar('.factor:nth-child(4) .factor-fill', factors.age.risk, 10);
}

function updateFactorBar(selector, riskLevel, impactPercentage) {
    const factorFill = document.querySelector(selector);
    
    factorFill.classList.remove('low-risk', 'medium-risk', 'high-risk');
    factorFill.classList.add(`${riskLevel}-risk`);
    factorFill.style.width = `${impactPercentage}%`;
}

// 導出函數供測試使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateRiskLevel,
        getDaysRisk,
        getSatisfactionRisk,
        getVisitsRisk,
        getAgeRisk
    };
}