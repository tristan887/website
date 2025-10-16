import { Inter, Baskervville, Newsreader, Lora, Libre_Baskerville } from 'next/font/google'

// Configure all your fonts here
export const inter = Inter({ 
  subsets: ['latin']
})

export const baskervville = Baskervville({ 
  subsets: ['latin'],
  weight: ['400'] 
})

export const newsreader = Newsreader({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-newsreader'
})

export const lora = Lora({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-lora'
})

export const libreBaskerville = Libre_Baskerville({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-libre-baskerville'
})

