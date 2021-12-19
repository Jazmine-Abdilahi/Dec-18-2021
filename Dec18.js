const massJazz = 95;
const heightJazz = 1.88;
const massYazz = 85;
const heightYazz = 1.76;

const BMIJazz = massJazz / heightJazz ** 2;
const BMIYazz = massYazz / (heightYazz * heightYazz);
const jazzhigherBIM = BIMMark > BMIYazz;

console.log(BIMJazz, BIMYazz, jazzHigherBIM);


///////////////////////////////////

if (BIMJazz > BIMYazz) {
    console.log('Jazzs BMI (${BIMJazz}) is higher than Yazzs (${BIMYazz})!')
} else {
    console.log('Yazzs BIM (${BIMYazz}) is higher than Jazzs (${BIMJazz})!')
}

