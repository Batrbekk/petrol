import 'server-only'

const dictionaries = {
    en: () => import('/src/public/dictionaries/en.json').then((module) => module.default),
    ru: () => import('/src/public/dictionaries/ru.json').then((module) => module.default),
    kk: () => import('/src/public/dictionaries/kk.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()