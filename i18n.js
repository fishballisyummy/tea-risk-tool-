// 茶言觀色·客戶流失風險評估器 - 國際化翻譯系統
// 完整的英文和繁體中文翻譯字典

const i18n = {
    // 支援的語言
    languages: {
        en: {
            code: 'en',
            name: 'English',
            nativeName: 'English',
            flag: '🇺🇸',
            direction: 'ltr'
        },
        zh: {
            code: 'zh',
            name: 'Chinese',
            nativeName: '中文',
            flag: '🇨🇳',
            direction: 'ltr'
        }
    },

    // 翻譯字典
    translations: {
        en: {
            // 應用標題和元數據
            'app.title': 'Tea Observation Customer Churn Risk Assessor',
            'app.subtitle': 'Tea Observation Customer Churn Risk Assessor',
            'app.description': 'Helps tea shop management quickly assess customer churn risk and provides data-driven retention suggestions',
            
            // 語言選擇器
            'language.selector': 'Language',
            'language.auto': 'Auto Detect',
            'language.english': 'English',
            'language.chinese': 'Chinese',
            'language.arabic': 'Arabic',
            'language.french': 'French',
            'language.russian': 'Russian',
            'language.spanish': 'Spanish',
            
            // 導航和標題
            'nav.input': 'Customer Data Input',
            'nav.results': 'Risk Assessment Results',
            'nav.rules': 'Assessment Rules',
            
            // 輸入區域
            'input.title': 'Customer Data Input',
            'input.description': 'Please enter four key indicators for risk assessment',
            
            // 表單欄位
            'field.age': 'Age',
            'field.age.tooltip': 'Range: 18-80 years',
            'field.age.unit': 'years',
            
            'field.monthlyVisits': 'Monthly Visits',
            'field.monthlyVisits.tooltip': 'Range: 0-30 times/month',
            'field.monthlyVisits.unit': 'times/month',
            
            'field.daysSinceLastVisit': 'Days Since Last Visit',
            'field.daysSinceLastVisit.tooltip': 'Range: 0-365 days',
            'field.daysSinceLastVisit.unit': 'days',
            
            'field.satisfactionScore': 'Satisfaction Score',
            'field.satisfactionScore.tooltip': '5-point scale: 1=Very dissatisfied, 5=Very satisfied',
            'field.satisfaction.veryDissatisfied': 'Very dissatisfied',
            'field.satisfaction.verySatisfied': 'Very satisfied',
            
            // 按鈕
            'button.assessRisk': 'Assess Risk',
            'button.reset': 'Reset',
            'button.submit': 'Submit',
            'button.cancel': 'Cancel',
            
            // 結果區域
            'results.title': 'Risk Assessment Results',
            'results.description': 'Customer churn risk analysis based on input data',
            
            'results.riskLevel': 'Risk Level',
            'results.riskLevel.low': 'Low Risk',
            'results.riskLevel.medium': 'Medium Risk',
            'results.riskLevel.high': 'High Risk',
            
            'results.riskDescription.low': 'High customer loyalty, low churn possibility',
            'results.riskDescription.medium': 'Customer has churn risk, needs attention',
            'results.riskDescription.high': 'High churn risk, immediate action required',
            
            'results.churnProbability': 'Churn Probability',
            'results.basedOnModel': 'Based on data model calculation',
            'results.averageChurnRate': 'Overall average churn rate: 24.9%',
            
            'results.actionRecommendations': 'Action Recommendations',
            
            // 風險因素分析
            'riskFactors.title': 'Risk Factor Analysis',
            'riskFactors.daysSinceLastVisit': 'Days Since Last Visit',
            'riskFactors.satisfactionScore': 'Satisfaction Score',
            'riskFactors.monthlyVisits': 'Monthly Visits',
            'riskFactors.age': 'Age',
            'riskFactors.impactLevel': 'Impact level',
            
            // 規則說明
            'rules.title': 'Assessment Rules Explanation',
            'rules.lowRisk.title': 'Low Risk Conditions',
            'rules.lowRisk.1': 'Days since last visit < 30 days',
            'rules.lowRisk.2': 'Satisfaction score ≥ 4 points',
            'rules.lowRisk.3': 'Monthly visits ≥ 7 times',
            'rules.lowRisk.probability': 'Churn probability: ~15%',
            
            'rules.mediumRisk.title': 'Medium Risk Conditions',
            'rules.mediumRisk.1': 'Days since last visit 30-60 days',
            'rules.mediumRisk.2': 'Satisfaction score = 3 points',
            'rules.mediumRisk.3': 'Monthly visits 4-6 times',
            'rules.mediumRisk.probability': 'Churn probability: ~28.5%',
            
            'rules.highRisk.title': 'High Risk Conditions',
            'rules.highRisk.1': 'Days since last visit > 60 days',
            'rules.highRisk.2': 'Satisfaction score ≤ 2 points',
            'rules.highRisk.3': 'Monthly visits ≤ 3 times',
            'rules.highRisk.probability': 'Churn probability: ~42%',
            
            // 頁尾
            'footer.version': 'Tea Observation Customer Churn Risk Assessor v1.0 • Based on February 2026 data analysis',
            'footer.disclaimer': 'This tool is for reference only. Actual decisions should combine business experience and market conditions',
            
            // 工具提示和幫助文本
            'tooltip.required': 'Required field',
            'tooltip.range': 'Valid range',
            'tooltip.help': 'Click for more information',
            
            // 錯誤訊息
            'error.required': 'This field is required',
            'error.range': 'Value must be between {min} and {max}',
            'error.invalid': 'Invalid value',
            
            // 成功訊息
            'success.assessmentComplete': 'Risk assessment completed successfully',
            
            // 星星評分標籤
            'stars.1': 'Very dissatisfied',
            'stars.2': 'Dissatisfied',
            'stars.3': 'Neutral',
            'stars.4': 'Satisfied',
            'stars.5': 'Very satisfied',
            
            // 推薦項目
            'recommendation.1': 'Maintain current service quality',
            'recommendation.2': 'Provide VIP exclusive offers',
            'recommendation.3': 'Invite to participate in new product tasting',
            'recommendation.4': 'Send regular care messages',
            
            // 風險等級特定推薦（低風險）
            'recommendation.low.1': 'Maintain current service quality',
            'recommendation.low.2': 'Provide VIP exclusive offers',
            'recommendation.low.3': 'Invite to participate in new product tasting',
            'recommendation.low.4': 'Send regular care messages',
            
            // 風險等級特定推薦（中風險）
            'recommendation.medium.1': 'Send personalized discount coupons',
            'recommendation.medium.2': 'Conduct satisfaction survey',
            'recommendation.medium.3': 'Offer loyalty program membership',
            'recommendation.medium.4': 'Schedule follow-up visit reminder',
            
            // 風險等級特定推薦（高風險）
            'recommendation.high.1': 'Contact customer immediately for feedback',
            'recommendation.high.2': 'Offer significant discount for next visit',
            'recommendation.high.3': 'Assign dedicated customer service representative',
            'recommendation.high.4': 'Create personalized recovery plan'
        },
        
        zh: {
            // 應用標題和元數據
            'app.title': '茶言觀色·客戶流失風險評估器',
            'app.subtitle': 'Tea Observation Customer Churn Risk Assessor',
            'app.description': '幫助茶飲店管理層快速評估客戶流失風險，提供數據驅動的留客建議',
            
            // 語言選擇器
            'language.selector': '語言',
            'language.auto': '自動檢測',
            'language.english': '英文',
            'language.chinese': '中文',
            'language.arabic': '阿拉伯文',
            'language.french': '法文',
            'language.russian': '俄文',
            'language.spanish': '西班牙文',
            
            // 導航和標題
            'nav.input': '客戶資料輸入',
            'nav.results': '風險評估結果',
            'nav.rules': '評估規則',
            
            // 輸入區域
            'input.title': '客戶資料輸入',
            'input.description': '請輸入客戶的四個關鍵指標進行風險評估',
            
            // 表單欄位
            'field.age': '年齡',
            'field.age.tooltip': '範圍：18-80歲',
            'field.age.unit': '歲',
            
            'field.monthlyVisits': '每月到訪次數',
            'field.monthlyVisits.tooltip': '範圍：0-30次/月',
            'field.monthlyVisits.unit': '次/月',
            
            'field.daysSinceLastVisit': '最近一次到訪天數',
            'field.daysSinceLastVisit.tooltip': '範圍：0-365天',
            'field.daysSinceLastVisit.unit': '天',
            
            'field.satisfactionScore': '滿意度評分',
            'field.satisfactionScore.tooltip': '5分制：1=非常不滿意，5=非常滿意',
            'field.satisfaction.veryDissatisfied': '非常不滿意',
            'field.satisfaction.verySatisfied': '非常滿意',
            
            // 按鈕
            'button.assessRisk': '評估風險',
            'button.reset': '重設',
            'button.submit': '提交',
            'button.cancel': '取消',
            
            // 結果區域
            'results.title': '風險評估結果',
            'results.description': '根據輸入資料計算的客戶流失風險分析',
            
            'results.riskLevel': '風險等級',
            'results.riskLevel.low': '低風險',
            'results.riskLevel.medium': '中風險',
            'results.riskLevel.high': '高風險',
            
            'results.riskDescription.low': '客戶忠誠度高，流失可能性低',
            'results.riskDescription.medium': '客戶有流失風險，需要關注',
            'results.riskDescription.high': '客戶流失風險高，需立即採取行動',
            
            'results.churnProbability': '流失機率',
            'results.basedOnModel': '基於數據模型計算',
            'results.averageChurnRate': '整體平均流失率：24.9%',
            
            'results.actionRecommendations': '行動建議',
            
            // 風險因素分析
            'riskFactors.title': '風險因素分析',
            'riskFactors.daysSinceLastVisit': '最近到訪天數',
            'riskFactors.satisfactionScore': '滿意度評分',
            'riskFactors.monthlyVisits': '每月到訪次數',
            'riskFactors.age': '年齡',
            'riskFactors.impactLevel': '影響程度',
            
            // 規則說明
            'rules.title': '評估規則說明',
            'rules.lowRisk.title': '低風險條件',
            'rules.lowRisk.1': '最近到訪天數 < 30天',
            'rules.lowRisk.2': '滿意度 ≥ 4分',
            'rules.lowRisk.3': '每月到訪次數 ≥ 7次',
            'rules.lowRisk.probability': '流失機率：~15%',
            
            'rules.mediumRisk.title': '中風險條件',
            'rules.mediumRisk.1': '最近到訪天數 30-60天',
            'rules.mediumRisk.2': '滿意度 = 3分',
            'rules.mediumRisk.3': '每月到訪次數 4-6次',
            'rules.mediumRisk.probability': '流失機率：~28.5%',
            
            'rules.highRisk.title': '高風險條件',
            'rules.highRisk.1': '最近到訪天數 > 60天',
            'rules.highRisk.2': '滿意度 ≤ 2分',
            'rules.highRisk.3': '每月到訪次數 ≤ 3次',
            'rules.highRisk.probability': '流失機率：~42%',
            
            // 頁尾
            'footer.version': '茶言觀色·客戶流失風險評估器 v1.0 • 基於2026年2月數據分析',
            'footer.disclaimer': '本工具僅供參考，實際決策請結合業務經驗與市場狀況',
            
            // 工具提示和幫助文本
            'tooltip.required': '必填欄位',
            'tooltip.range': '有效範圍',
            'tooltip.help': '點擊查看更多資訊',
            
            // 錯誤訊息
            'error.required': '此欄位為必填',
            'error.range': '數值必須在 {min} 和 {max} 之間',
            'error.invalid': '無效數值',
            
            // 成功訊息
            'success.assessmentComplete': '風險評估完成成功',
            
            // 星星評分標籤
            'stars.1': '非常不滿意',
            'stars.2': '不滿意',
            'stars.3': '普通',
            'stars.4': '滿意',
            'stars.5': '非常滿意',
            
            // 推薦項目
            'recommendation.1': '維持現有服務品質',
            'recommendation.2': '提供VIP專屬優惠',
            'recommendation.3': '邀請參與新品試飲',
            'recommendation.4': '定期發送關懷訊息',
            
            // 風險等級特定推薦（低風險）
            'recommendation.low.1': '維持現有服務品質',
            'recommendation.low.2': '提供VIP專屬優惠',
            'recommendation.low.3': '邀請參與新品試飲',
            'recommendation.low.4': '定期發送關懷訊息',
            
            // 風險等級特定推薦（中風險）
            'recommendation.medium.1': '發送個人化折扣券',
            'recommendation.medium.2': '進行滿意度調查',
            'recommendation.medium.3': '提供忠誠計劃會員資格',
            'recommendation.medium.4': '安排後續訪問提醒',
            
            // 風險等級特定推薦（高風險）
            'recommendation.high.1': '立即聯繫客戶獲取反饋',
            'recommendation.high.2': '提供下次訪問的顯著折扣',
            'recommendation.high.3': '指派專屬客戶服務代表',
            'recommendation.high.4': '制定個人化恢復計劃'
        }
    },

    // 當前語言
    currentLanguage: 'zh',
    
    // 初始化函數
    init() {
        // 從本地儲存讀取語言設定
        this.loadLanguagePreference();
        
        // 設置初始語言
        this.setLanguage(this.currentLanguage, false);
        
        // 監聽語言變更事件
        this.setupEventListeners();
        
        // 應用初始翻譯
        this.applyTranslations();
        
        console.log('i18n system initialized with language:', this.currentLanguage);
    },
    
    // 載入語言偏好設定
    loadLanguagePreference() {
        try {
            // 1. 檢查本地儲存
            const savedLanguage = localStorage.getItem('tea-risk-tool-language');
            if (savedLanguage && this.translations[savedLanguage]) {
                this.currentLanguage = savedLanguage;
                return;
            }
            
            // 2. 檢查瀏覽器語言
            const browserLanguage = this.detectBrowserLanguage();
            if (browserLanguage && this.translations[browserLanguage]) {
                this.currentLanguage = browserLanguage;
                return;
            }
            
            // 3. 預設為中文
            this.currentLanguage = 'zh';
            
        } catch (error) {
            console.error('Error loading language preference:', error);
            this.currentLanguage = 'zh';
        }
    },
    
    // 檢測瀏覽器語言
    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        
        // 檢查是否為中文變體
        if (browserLang.startsWith('zh')) {
            return 'zh';
        }
        
        // 檢查是否為英文
        if (browserLang.startsWith('en')) {
            return 'en';
        }
        
        return null;
    },
    
    // 設置事件監聽器
    setupEventListeners() {
        // 語言選擇器事件
        document.addEventListener('click', (e) => {
            const languageOption = e.target.closest('.language-option');
            if (languageOption) {
                const lang = languageOption.getAttribute('data-lang');
                if (lang === 'auto') {
                    this.setLanguage(this.detectBrowserLanguage() || 'zh', true);
                } else if (this.translations[lang]) {
                    this.setLanguage(lang, true);
                }
                
                // 關閉下拉選單
                const dropdown = document.getElementById('language-dropdown');
                if (dropdown) {
                    dropdown.classList.remove('show');
                }
            }
            
            // 語言按鈕點擊
            const languageBtn = e.target.closest('#language-btn');
            if (languageBtn) {
                const dropdown = document.getElementById('language-dropdown');
                if (dropdown) {
                    dropdown.classList.toggle('show');
                }
            }
        });
        
        // 點擊頁面其他地方關閉下拉選單
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-dropdown') && !e.target.closest('#language-btn')) {
                const dropdown = document.getElementById('language-dropdown');
                if (dropdown) {
                    dropdown.classList.remove('show');
                }
            }
        });
    },
    
    // 設置語言
    setLanguage(langCode, saveToStorage = true) {
        if (!this.translations[langCode]) {
            console.warn(`Language ${langCode} not supported, falling back to English`);
            langCode = 'en';
        }
        
        // 更新當前語言
        this.currentLanguage = langCode;
        
        // 更新 HTML lang 屬性
        document.documentElement.lang = langCode;
        
        // 更新文字方向
        const languageConfig = this.languages[langCode];
        if (languageConfig) {
            document.documentElement.dir = languageConfig.direction;
        }
        
        // 儲存到本地儲存
        if (saveToStorage) {
            try {
                localStorage.setItem('tea-risk-tool-language', langCode);
            } catch (error) {
                console.error('Error saving language preference:', error);
            }
        }
        
        // 更新語言選擇器顯示
        this.updateLanguageSelector();
        
        // 應用翻譯
        this.applyTranslations();
        
        // 觸發語言變更事件
        this.triggerLanguageChange();
        
        console.log('Language changed to:', langCode);
    },
    
    // 更新語言選擇器顯示
    updateLanguageSelector() {
        const currentLanguageElement = document.getElementById('current-language');
        if (!currentLanguageElement) return;
        
        const languageConfig = this.languages[this.currentLanguage];
        if (languageConfig) {
            currentLanguageElement.textContent = languageConfig.nativeName;
        }
        
        // 更新選中狀態
        document.querySelectorAll('.language-option').forEach(option => {
            const lang = option.getAttribute('data-lang');
            if (lang === this.currentLanguage) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    },
    
    // 應用翻譯到所有元素
    applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        let missingKeys = [];
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            
            if (translation !== undefined) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else if (element.tagName === 'IMG' && element.hasAttribute('alt')) {
                    element.alt = translation;
                } else {
                    element.textContent = translation;
                }
            } else {
                missingKeys.push(key);
                console.warn(`Missing translation key: ${key}`);
            }
        });
        
        // 更新頁面標題
        const titleTranslation = this.getTranslation('app.title');
        if (titleTranslation) {
            document.title = titleTranslation;
        }
        
        // 如果有缺失的翻譯鍵，記錄到控制台
        if (missingKeys.length > 0) {
            console.warn(`Missing translations for keys: ${missingKeys.join(', ')}`);
        }
    },
    
    // 獲取翻譯
    getTranslation(key, params = {}) {
        const langData = this.translations[this.currentLanguage];
        
        // 如果當前語言沒有翻譯，回退到英文
        let translation = langData ? langData[key] : undefined;
        
        if (translation === undefined && this.currentLanguage !== 'en') {
            translation = this.translations['en'][key];
        }
        
        // 如果還是沒有翻譯，返回鍵名本身
        if (translation === undefined) {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
        
        // 替換參數
        if (params && typeof params === 'object') {
            Object.keys(params).forEach(paramKey => {
                const placeholder = `{${paramKey}}`;
                translation = translation.replace(placeholder, params[paramKey]);
            });
        }
        
        return translation;
    },
    
    // 觸發語言變更事件
    triggerLanguageChange() {
        const event = new CustomEvent('languageChanged', {
            detail: { language: this.currentLanguage }
        });
        document.dispatchEvent(event);
    },
    
    // 獲取當前語言
    getCurrentLanguage() {
        return this.currentLanguage;
    },
    
    // 獲取支援的語言列表
    getSupportedLanguages() {
        return Object.keys(this.languages).map(code => ({
            code,
            ...this.languages[code]
        }));
    },
    
    // 格式化數字（根據語言）
    formatNumber(number) {
        if (this.currentLanguage === 'zh') {
            return number.toLocaleString('zh-TW');
        }
        return number.toLocaleString('en-US');
    },
    
    // 格式化日期（根據語言）
    formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        
        if (this.currentLanguage === 'zh') {
            return date.toLocaleDateString('zh-TW', options);
        }
        return date.toLocaleDateString('en-US', options);
    }
};

// 初始化 i18n 系統
document.addEventListener('DOMContentLoaded', () => {
    window.i18n = i18n;
    i18n.init();
});

// 導出供其他模組使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = i18n;
}