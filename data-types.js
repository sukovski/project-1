// Primitive veri türleri string, numbers, true false etc.
let numOne = 3
let numTwo = 3
let numThree = 4
console.log (numOne == numTwo, numTwo == numThree)

let js = 'Javascript'
let py = 'Python'

let lightOn = true 
let lightOff = false

console.log (lightOff == lightOn, js == py)

/*  non-primitive data types yani ilkel olmayan veri türleri

Array içerisinde birden fazla değer tutabiliriz array için [1,2,3,4] gibi

Javascriptte dizi indexi 0'dan başlar. Yani dizimizdeki ilk eleman 0'dır.

örneğin;

let nums = [1, 2, 3]
dizisinde ilk elemean 0'ıncı eleman yani, buranın 0'ıncı elemanı [1].
*/

let nums = [1, 2, 3]
nums[0] // 1
nums[1] // 2
nums[2] // 3
// değiştirmek istersek;
nums[0] = 5 // 1 yerine 5 yapmış olduk.
console.log (nums) // böylece 5,2,3 şeklinde sonuç alıyoruz.

let nums1 = [1, 2, 3]
let nums2 = [1, 2, 3]
console.log (nums1 == nums2) //false

// dizilerde aynı bile olsa farklı kontrol edilir.

// şimdi objecte bakalım. süslü parantez kullanıyoruz. {...}

let user1 = {
    name:'Sukru',
    surname:'Yahyaoglu'
}

let user2 = {
    name:'Sukru',
    surname:'Yahyaoglu'
}
console.log(user1==user2) // false
/* Yani non-primitive data typesları karışlaştırmıyoruz. Değerlere göre değil, referanslara göre karşılaştırma yapıldığı için. İki obje ancak ve ancak aynı temel nesneyi referans alırsa karşılaştırabilir ve true sonucu alabiliriz. Yani örneğin;*/

let nums3 = [1, 2, 3]
let nums4 = nums3
console.log (nums3 == nums4) //true

// Number Data Types
let age = 35
const gravity = 9.81
let mass = 72 //kg
const PI = 3.14 // pi a geometrical value

// Math Object - matematiksel tüm işlemleri JS ile yapabiliriz.

const getPI = Math.PI
console.log(getPI) // 3.141592653589793

// rounding to closes number en yakın sayıya yuvarlamak
console.log(Math.round(PI)) // 3
console.log(Math.round(5.44)) // 5
console.log(Math.ceil(5.01)) // 6
console.log(Math.floor(5.01)) // 5
console.log(Math.min(2,4,5,7,9,1)) // 1
console.log(Math.max(2,4,5,7,9,1)) // 9
console.log(Math.random()) // 0 - 0.9999
console.log(Math.random()*11) // 0 ile 10 arasında bir sayı istiyorsak, 10 katının bir fazlasıyla çarpıyoruz. Örneğin 0-20 ise 21 ile çarpıyoruz.

let random = Math.floor( Math.random() * 11 )
console.log(random)

// absolute value mutlak değer -10 > 10
console.log(Math.abs(-10)) // 10
console.log(Math.log(2)) // logaritma 2 = 0.6931471805599453