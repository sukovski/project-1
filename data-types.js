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