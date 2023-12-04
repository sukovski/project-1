// console.log('bu yazı mymain.js den geldi')

console.log( typeof 'Sukovski' )
console.log( typeof 5)
console.log( typeof true )
console.log( typeof null )
console.log( typeof undefined)

/* değişken atıyorum. var kullanmak mazide kaldığı için let ve const kullanıyorum.
örn;
let $website
let _website
let website_adres
let websiteAdres
const country
const countryCity
const getCountryName

*/

let getAge
let getFirstName

// değeri atanmış değişkenler //
let websiteAdres = 'sukruyahyaoglu.com'
let websiteAge = 5
let isWebsiteStillActive = true
let secondWebsite = null
let websiteMoney = undefined

console.log(websiteAdres, websiteAge, secondWebsite, isWebsiteStillActive, websiteMoney)

// değişkenlerimin türünü test ediyorum
console.log (typeof websiteAdres,websiteAge, websiteMoney, isWebsiteStillActive, secondWebsite)

// const sabit değişkenler country, pi number etc.

const GRAVITY = '9.81'
//const PI = '3.14'
//console.log ile değişkenleri yazdırdım.
console.log (PI, GRAVITY)

// multiple variable

let firstName = 'Suko', 
    surName = 'Yahyaoglu',
    getBirthDay = '25 Ağustos 1995'
console.log(firstName, surName, getBirthDay)
console.log('My birthday is',getBirthDay)