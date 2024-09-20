import 'server-only'

const dictionaries = {
    ru: () => import('/src/public/dictionaries/ru.json').then((module) => module.default),
    kk: () => import('/src/public/dictionaries/kk.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()