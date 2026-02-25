// 茶言觀色·客戶流失風險評估器 - JavaScript 核心邏輯

document.addEventListener('DOMContentLoaded', function() {
    // 初始化應用程式
    initApp();
});

function initApp() {
    // 綁定事件監聽器
    bindEvents();
    
    // 初始化表單值
    initializeForm();
    
    // 執行初始評估
    evaluateRisk();
}

function bindEvents() {
    // 表單提交事件
    const form = document.getElementById('risk-assessment-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        evaluateRisk();
    });
    
    // 重設按鈕事件
    const resetBtn = document.getElementById('reset-btn');
    resetBtn.addEventListener('click', resetForm);
    
    // 數字輸入框與滑桿同步
    syncInputAndSlider('age', 'age-slider');
    syncInputAndSlider('monthly-visits', 'visits-slider');
    syncInputAndSlider('days-since-last-visit', 'days-slider');
    
    // 滿意度評分點擊事件
    bindStarRating();
    
    // 輸入框即時更新
    const inputs = ['age', 'monthly-visits', 'days-since-last-visit'];
    inputs.forEach(id => {
        const input = document.getElementById(id);
        input.addEventListener('input', evaluateRisk);
    });
}

function syncInputAndSlider(inputId, sliderId) {
    const input = document.getElementById(inputId);
    const slider = document.getElementById(sliderId);
    
    // 輸入框變更時更新滑桿
    input.addEventListener('input', function() {
        slider.value = this.value;
        evaluateRisk();
    });
    
    // 滑桿變更時更新輸入框
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
            
            // 更新隱藏輸入框的值
            satisfactionInput.value = value;
            
            // 更新星星樣式
            stars.forEach(s => {
                if (parseInt(s.getAttribute('data-value')) <= value) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
            
            // 重新評估風險
            evaluateRisk();
        });
    });
}

function initializeForm() {
    // 設置預設值
    document.getElementById('age').value = 30;
    document.getElementById('age-slider').value = 30;
    
    document.getElementById('monthly-visits').value = 5;
    document.getElementById('visits-slider').value = 5;
    
    document.getElementById('days-since-last-visit').value = 15;
    document.getElementById('days-slider').value = 15;
    
    document.getElementById('satisfaction-score').value = 5;
}

function resetForm() {
    // 重置表單到預設值
    initializeForm();
    
    // 重置星星評分
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const value = parseInt(star.getAttribute('data-value'));
        if (value === 5) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
    
    // 重新評估風險
    evaluateRisk();
}

function evaluateRisk() {
    // 獲取表單值
    const age = parseInt(document.getElementById('age').value);
    const monthlyVisits = parseInt(document.getElementById('monthly-visits').value);
    const daysSinceLastVisit = parseInt(document.getElementById('days-since-last-visit').value);
    const satisfactionScore = parseInt(document.getElementById('satisfaction-score').value);
    
    // 計算風險等級
    const riskResult = calculateRiskLevel(age, monthlyVisits, daysSinceLastVisit, satisfactionScore);
    
    // 更新UI顯示結果
    updateRiskDisplay(riskResult, age, monthlyVisits, daysSinceLastVisit, satisfactionScore);
}

function calculateRiskLevel(age, monthlyVisits, daysSinceLastVisit, satisfactionScore) {
    // 根據 PRD.md 中的規則計算風險等級
    
    // 高風險條件（符合任一項即為高風險）
    if (daysSinceLastVisit > 60) {
        return {
            level: 'high',
            probability: 42,
            description: '客戶超過60天未到訪，流失風險顯著升高',
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
            description: '客戶滿意度低，極易流失',
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
            description: '客戶到訪頻率低，忠誠度不足',
            factors: {
                daysSinceLastVisit: { risk: getDaysRisk(daysSinceLastVisit), impact: 45 },
                satisfactionScore: { risk: getSatisfactionRisk(satisfactionScore), impact: 30 },
                monthlyVisits: { risk: 'high', impact: 15 },
                age: { risk: getAgeRisk(age), impact: 10 }
            }
        };
    }
    
    // 中風險條件（不符合高風險，且符合任一項）
    if ((daysSinceLastVisit >= 30 && daysSinceLastVisit <= 60) ||
        satisfactionScore === 3 ||
        (monthlyVisits >= 4 && monthlyVisits <= 6)) {
        return {
            level: 'medium',
            probability: 28.5,
            description: '客戶有流失風險，需要關注',
            factors: {
                daysSinceLastVisit: { risk: getDaysRisk(daysSinceLastVisit), impact: 45 },
                satisfactionScore: { risk: getSatisfactionRisk(satisfactionScore), impact: 30 },
                monthlyVisits: { risk: getVisitsRisk(monthlyVisits), impact: 15 },
                age: { risk: getAgeRisk(age), impact: 10 }
            }
        };
    }
    
    // 低風險條件（需同時滿足所有條件）
    // 預設為低風險
    return {
        level: 'low',
        probability: 15,
        description: '客戶忠誠度高，流失可能性低',
        factors: {
            daysSinceLastVisit: { risk: getDaysRisk(daysSinceLastVisit), impact: 45 },
            satisfactionScore: { risk: getSatisfactionRisk(satisfactionScore), impact: 30 },
            monthlyVisits: { risk: getVisitsRisk(monthlyVisits), impact: 15 },
            age: { risk: getAgeRisk(age), impact: 10 }
        }
    };
}

// 輔助函數：計算各因素的風險等級
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
    // 年齡影響較小，根據PRD年齡重要性約10%
    if (age < 25 || age > 60) return 'medium';
    return 'low';
}

function updateRiskDisplay(riskResult, age, monthlyVisits, daysSinceLastVisit, satisfactionScore) {
    // 更新風險等級顯示
    updateRiskLevel(riskResult.level, riskResult.description);
    
    // 更新流失機率顯示
    updateProbability(riskResult.probability, riskResult.level);
    
    // 更新行動建議
    updateRecommendations(riskResult.level);
    
    // 更新風險因素分析
    updateRiskFactors(riskResult.factors, age, monthlyVisits, daysSinceLastVisit, satisfactionScore);
}

function updateRiskLevel(level, description) {
    const riskIndicator = document.getElementById('risk-indicator');
    const riskText = riskIndicator.querySelector('.risk-text');
    const riskDot = riskIndicator.querySelector('.risk-dot');
    const riskDescription = document.getElementById('risk-description');
    
    // 移除所有風險等級類別
    riskDot.classList.remove('low-risk', 'medium-risk', 'high-risk');
    riskIndicator.classList.remove('low-risk', 'medium-risk', 'high-risk');
    
    // 添加對應的風險等級類別
    let levelText = '';
    switch(level) {
        case 'low':
            levelText = '低風險';
            riskDot.classList.add('low-risk');
            riskIndicator.classList.add('low-risk');
            break;
        case 'medium':
            levelText = '中風險';
            riskDot.classList.add('medium-risk');
            riskIndicator.classList.add('medium-risk');
            break;
        case 'high':
            levelText = '高風險';
            riskDot.classList.add('high-risk');
            riskIndicator.classList.add('high-risk');
            break;
    }
    
    // 更新文字內容
    riskText.textContent = levelText;
    riskDescription.textContent = description;
}

function updateProbability(probability, level) {
    const probabilityText = document.querySelector('.probability-text');
    const probabilityFill = document.querySelector('.probability-fill');
    
    // 更新百分比文字
    probabilityText.textContent = `${probability}%`;
    
    // 移除所有風險等級類別
    probabilityFill.classList.remove('low-risk', 'medium-risk', 'high-risk');
    
    // 添加對應的風險等級類別
    switch(level) {
        case 'low':
            probabilityFill.classList.add('low-risk');
            break;
        case 'medium':
            probabilityFill.classList.add('medium-risk');
            break;
        case 'high':
            probabilityFill.classList.add('high-risk');
            break;
    }
    
    // 計算圓圈進度 (圓周長 = 2πr, r=54)
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (probability / 100) * circumference;
    
    // 更新圓圈進度
    probabilityFill.style.strokeDashoffset = offset;
}

function updateRecommendations(level) {
    const recommendationsList = document.getElementById('recommendations-list');
    recommendationsList.innerHTML = '';
    
    let recommendations = [];
    
    switch(level) {
        case 'low':
            recommendations = [
                '維持現有服務品質',
                '提供VIP專屬優惠',
                '邀請參與新品試飲',
                '定期發送關懷訊息'
            ];
            break;
        case 'medium':
            recommendations = [
                '主動聯繫了解需求',
                '提供專屬優惠券',
                '邀請參加會員活動',
                '收集回饋改善服務'
            ];
            break;
        case 'high':
            recommendations = [
                '立即聯繫客戶了解原因',
                '提供特別優惠挽回',
                '安排店長親自服務',
                '建立專屬挽回計劃'
            ];
            break;
    }
    
    // 生成建議列表
    recommendations.forEach((rec, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${rec}`;
        li.style.animationDelay = `${0.1 * (index + 1)}s`;
        recommendationsList.appendChild(li);
    });
}

function updateRiskFactors(factors, age, monthlyVisits, daysSinceLastVisit, satisfactionScore) {
    // 更新風險因素數值
    document.querySelector('.factor:nth-child(1) .factor-value').textContent = `${daysSinceLastVisit}天`;
    document.querySelector('.factor:nth-child(2) .factor-value').textContent = `${satisfactionScore}分`;
    document.querySelector('.factor:nth-child(3) .factor-value').textContent = `${monthlyVisits}次`;
    document.querySelector('.factor:nth-child(4) .factor-value').textContent = `${age}歲`;
    
    // 更新風險因素條形圖
    updateFactorBar('.factor:nth-child(1) .factor-fill', factors.daysSinceLastVisit.risk, 45);
    updateFactorBar('.factor:nth-child(2) .factor-fill', factors.satisfactionScore.risk, 30);
    updateFactorBar('.factor:nth-child(3) .factor-fill', factors.monthlyVisits.risk, 15);
    updateFactorBar('.factor:nth-child(4) .factor-fill', factors.age.risk, 10);
}

function updateFactorBar(selector, riskLevel, impactPercentage) {
    const factorFill = document.querySelector(selector);
    
    // 移除所有風險等級類別
    factorFill.classList.remove('low-risk', 'medium-risk', 'high-risk');
    
    // 添加對應的風險等級類別
    switch(riskLevel) {
        case 'low':
            factorFill.classList.add('low-risk');
            break;
        case 'medium':
            factorFill.classList.add('medium-risk');
            break;
        case 'high':
            factorFill.classList.add('high-risk');
            break;
    }
    
    // 根據影響程度設置寬度
    // 影響程度越高，條形圖越長（但視覺上我們用固定百分比顯示影響程度）
    // 這裡我們用影響百分比作為視覺寬度
    factorFill.style.width = `${impactPercentage}%`;
}

// 輸入驗證函數
function validateInput(input, min, max) {
    let value = parseInt(input.value);
    
    if (isNaN(value)) {
        value = min;
    }
    
    if (value < min) {
        value = min;
    }
    
    if (value > max) {
        value = max;
    }
    
    input.value = value;
    return value;
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