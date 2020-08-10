import { isProd } from './sys'

export let warn = () => { }

export let error = () => { }

export let log = () => { }

if (!isProd) {
  warn = msg => console.warn(`[Li Warn]: ${msg}`)
  error = msg => console.error(`[Li Error]: ${msg}`)
  log = (...ags) => console.log(...ags)
}