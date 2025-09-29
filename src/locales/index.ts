import { createI18n } from 'vue-i18n'
import zh from './zh-CN'
import en from './en-US'

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('lang') || 'zh-CN',
  messages: { 'zh-CN': zh, 'en-US': en }
})