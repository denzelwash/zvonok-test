const CITIES = ['Казань', 'Краснодар', 'Уфа', 'Новосибирск', 'Красноярск', 'Москва']

const POPULAR_CITIES = ['Москва', 'Новосибирск', 'Краснодар', 'Красноярск', 'Тула']

const ICONS_MAP = {
  '01d': 'icn_sun',
  '01n': 'icn_sun',
  '02d': 'icn_cloud',
  '02n': 'icn_cloud',
  '03d': 'icn_cloud',
  '03n': 'icn_cloud',
  '04d': 'icn_cloud',
  '04n': 'icn_cloud',
  '09d': 'icn_rain',
  '09n': 'icn_rain',
  '10d': 'icn_rain',
  '10n': 'icn_rain',
  '11d': 'icn_cloud',
  '11n': 'icn_cloud',
  '13d': 'icn_cloud',
  '13n': 'icn_cloud',
  '50d': 'icn_cloud',
  '50n': 'icn_cloud',
} as const

const TIME_MAP = {
  '00:00': 'Ночь',
  '03:00': 'Ночь',
  '06:00': 'Утро',
  '09:00': 'Утро',
  '12:00': 'День',
  '15:00': 'День',
  '18:00': 'Вечер',
  '21:00': 'Вечер',
} as const

const DAYS_OF_WEEK = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'] as const

export { CITIES, POPULAR_CITIES, ICONS_MAP, TIME_MAP, DAYS_OF_WEEK }
