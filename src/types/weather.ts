import type { ICONS_MAP } from '@/const'

export interface CurrentWeatherResponse {
  coord: {
    lon: number
    lat: number
  }
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: {
    all: number
  }
  dt: number
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

export interface WeatherByHoursResponse {
  cod: string
  message: number
  cnt: number
  list: {
    dt: number
    main: Main & {
      temp_kf: number
    }
    weather: Weather[]
    clouds: {
      all: number
    }
    wind: Wind
    visibility?: number
    pop: number
    sys: {
      pod: string
    }
    dt_txt: string
    snow?: {
      '3h': number
    }
  }[]
  city: string
}

interface Weather {
  id: number
  main: string
  description: string
  icon: Icon
}

interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

interface Wind {
  speed: number
  deg: number
  gust: number
}

export type Icon = keyof typeof ICONS_MAP
