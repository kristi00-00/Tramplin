/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker')

const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)]
const collections = ['street', 'black', 'casual', 'orange', 'white', 'head']
const colors = ['blue', 'yellow', 'orange', 'black', 'white']
const compositions = ['cotton', 'synthetics', 'polyester']
const accessoryTypes = ['bags', 'headdress', 'gloves']
const images = [
  '/img/accessories/accessories-bags-1.png',
  '/img/accessories/accessories-bags-2.png',
  '/img/accessories/accessories-bags-3.png',
  '/img/accessories/accessories-bags-4.png',
  '/img/accessories/accessories-gloves-1.png',
  '/img/accessories/accessories-gloves-2.png',
  '/img/accessories/accessories-gloves-3.png',
  '/img/accessories/accessories-headdress-1.png',
  '/img/accessories/accessories-headdress-2.png',
  '/img/accessories/accessories-headdress-3.png',
]
const wearingMethod = ['on shoulder', 'over shoulder']
const textures = ['polyester', 'polyamide']
const styles = ['sports', 'travel']
const seasons = ['demi-season', 'winter']
const foldedLengths = [156, 166, 177, 188]

module.exports = {
  async up(db) {
    return db.collection('accessories').insertMany(
      [...Array(50)].map(() => {
        const type =
          accessoryTypes[Math.floor(Math.random() * accessoryTypes.length)]

        const characteristics = [
          {
            type: 'bags',
            color: getRandomArrayValue(colors),
            composition: getRandomArrayValue(compositions),
            collection: getRandomArrayValue(collections),
            wearingMethod: getRandomArrayValue(wearingMethod),
            foldedLength: getRandomArrayValue(foldedLengths),
            texture: getRandomArrayValue(textures),
            style: getRandomArrayValue(styles),
          },
          {
            type: 'headdress',
            color: getRandomArrayValue(colors),
            composition: getRandomArrayValue(compositions),
            season: getRandomArrayValue(seasons),
          },
          {
            type: 'gloves',
            color: getRandomArrayValue(colors),
            composition: getRandomArrayValue(compositions),
            season: getRandomArrayValue(seasons),
          },
        ]

        return {
          category: 'accessories',
          type,
          price: +faker.string.numeric(4).replace(/.{0,2}$/, 99),
          name: faker.lorem.sentence(2),
          description: faker.lorem.sentences(10),
          characteristics: characteristics.find((item) => item.type === type),
          images: images.filter((item) => item.includes(type)),
          vendorCode: faker.string.numeric(4),
          inStock: faker.string.numeric(2),
          isBestseller: faker.datatype.boolean(),
          isNew: faker.datatype.boolean(),
          popularity: +faker.string.numeric(3),
          sizes:
            type === 'gloves'
              ? {}
              : {
                s: faker.datatype.boolean(),
                l: faker.datatype.boolean(),
                m: faker.datatype.boolean(),
                xl: faker.datatype.boolean(),
                xxl: faker.datatype.boolean(),
              },
        }
      })
    )
  },

  async down(db) {
    return db.collection('accessories').updateMany([])
  },
}
