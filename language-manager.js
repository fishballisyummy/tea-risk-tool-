// 茶言觀色·客戶流失風險評估器 - 多語言管理器

class LanguageManager {
    constructor() {
        this.currentLanguage = 'zh'; // 預設語言
        this.translations = window.translations || {};
        this.init();
    }

    init() {
        // 從本地儲存讀取語言設定
        const savedLanguage = localStorage.getItem('tea-risk-tool-language');
        if (savedLanguage) {
            this.currentLanguage = savedLanguage;
        } else {
            // 自動檢測語言
            this.detectAndSetLanguage();
        }
        
        // 初始化語言選擇器
        this.initLanguageSelector();
        
        // 應用當前語言
        this.applyLanguage();
    }

    detectAndSetLanguage() {
        // 嘗試使用地理位置檢測
        this.detectByGeolocation()
            .then(countryCode => {
                if (countryCode) {
                    const lang = this.detectLanguageByCountry(countryCode);
                    this.setLanguage(lang, false); // 不儲存到本地儲存
                } else {
                    // 使用瀏覽器語言檢測
                    const browserLang = this.detectLanguageByBrowser();
                    this.setLanguage(browserLang, false);
                }
            })
            .catch(() => {
                // 使用瀏覽器語言檢測作為備用
                const browserLang = this.detectLanguageByBrowser();
                this.setLanguage(browserLang, false);
            });
    }

    detectByGeolocation() {
        return new Promise((resolve, reject) => {
            // 使用 IP 地理位置 API
            fetch('https://ipapi.co/json/')
                .then(response => response.json())
                .then(data => {
                    if (data && data.country_code) {
                        resolve(data.country_code);
                    } else {
                        reject(new Error('無法獲取地理位置'));
                    }
                })
                .catch(() => {
                    // 備用 API
                    fetch('https://geolocation-db.com/json/')
                        .then(response => response.json())
                        .then(data => {
                            if (data && data.country_code) {
                                resolve(data.country_code);
                            } else {
                                reject(new Error('無法獲取地理位置'));
                            }
                        })
                        .catch(reject);
                });
        });
    }

    detectLanguageByCountry(countryCode) {
        const countryToLanguage = {
            // 阿拉伯語國家
            'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'IQ': 'ar', 'JO': 'ar',
            'KW': 'ar', 'LB': 'ar', 'OM': 'ar', 'QA': 'ar', 'SY': 'ar', 'YE': 'ar',
            
            // 中文國家/地區
            'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'MO': 'zh', 'SG': 'zh',
            
            // 法語國家
            'FR': 'fr', 'BE': 'fr', 'CH': 'fr', 'CA': 'fr', 'LU': 'fr', 'MC': 'fr',
            
            // 俄語國家
            'RU': 'ru', 'BY': 'ru', 'KZ': 'ru', 'KG': 'ru', 'UA': 'ru',
            
            // 西班牙語國家
            'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es',
            'VE': 'es', 'CL': 'es', 'EC': 'es', 'GT': 'es', 'CU': 'es', 'DO': 'es', 'BO': 'es',
            
            // 英語國家
            'US': 'en', 'GB': 'en', 'AU': 'en', 'CA': 'en', 'NZ': 'en', 'IE': 'en', 'ZA': 'en', 'IN': 'en'
        };
        
        return countryToLanguage[countryCode] || 'en';
    }

    detectLanguageByBrowser() {
        const browserLang = navigator.language || navigator.userLanguage;
        
        if (browserLang.startsWith('ar')) return 'ar';
        if (browserLang.startsWith('zh')) return 'zh';
        if (browserLang.startsWith('fr')) return 'fr';
        if (browserLang.startsWith('ru')) return 'ru';
        if (browserLang.startsWith('es')) return 'es';
        
        return 'en';
    }

    initLanguageSelector() {
        const languageBtn = document.getElementById('language-btn');
        const languageDropdown = document.getElementById('language-dropdown');
        const currentLanguageText = document.getElementById('current-language');
        
        if (!languageBtn || !languageDropdown) return;
        
        // 切換下拉選單顯示
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });
        
        // 點擊語言選項
        const languageOptions = languageDropdown.querySelectorAll('.language-option');
        languageOptions.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                if (lang === 'auto') {
                    this.detectAndSetLanguage();
                } else {
                    this.setLanguage(lang, true);
                }
                languageDropdown.classList.remove('show');
            });
        });
        
        // 點擊頁面其他地方關閉下拉選單
        document.addEventListener('click', () => {
            languageDropdown.classList.remove('show');
        });
        
        // 更新當前語言顯示
        this.updateLanguageDisplay(currentLanguageText);
    }

    updateLanguageDisplay(element) {
        if (!element) return;
        
        const languageNames = {
            'en': 'English',
            'zh': '中文',
            'ar': 'العربية',
            'fr': 'Français',
            'ru': 'Русский',
            'es': 'Español',
            'auto': '自動檢測'
        };
        
        element.textContent = languageNames[this.currentLanguage] || '中文';
    }

    setLanguage(lang, saveToStorage = true) {
        if (!this.translations[lang]) {
            console.warn(`語言 ${lang} 的翻譯不存在，使用英語`);
            lang = 'en';
        }
        
        this.currentLanguage = lang;
        
        // 儲存到本地儲存
        if (saveToStorage) {
            localStorage.setItem('tea-risk-tool-language', lang);
        }
        
        // 更新語言顯示
        const currentLanguageText = document.getElementById('current-language');
        this.updateLanguageDisplay(currentLanguageText);
        
        // 更新 HTML 的 lang 屬性
        document.documentElement.lang = lang;
        
        // 更新文字方向（阿拉伯語是右到左）
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
        
        // 應用翻譯
        this.applyLanguage();
        
        // 觸發語言變更事件
        this.triggerLanguageChange();
    }

    applyLanguage() {
        const langData = this.translations[this.currentLanguage];
        if (!langData) return;
        
        // 更新所有帶有 data-i18n 屬性的元素
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (langData[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = langData[key];
                } else {
                    element.textContent = langData[key];
                }
            }
        });
        
        // 更新頁面標題
        if (langData.appTitle) {
            document.title = langData.appTitle;
        }
        
        // 更新風險評估結果（需要重新計算）
        if (window.evaluateRisk) {
            window.evaluateRisk();
        }
    }

    triggerLanguageChange() {
        // 觸發自定義事件，讓其他模組知道語言已變更
        const event = new CustomEvent('languageChanged', {
            detail: { language: this.currentLanguage }
        });
        document.dispatchEvent(event);
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    getTranslation(key) {
        const langData = this.translations[this.currentLanguage];
        return langData ? langData[key] : key;
    }
}

// 初始化語言管理器
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});

// 導出供其他模組使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageManager;
}