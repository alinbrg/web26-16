// 1.შექმენით index.html და app.js ფაილები. შემოტანეთ app.js html-ში.
// 2. app.js ფაილში შექმენით ცვლადები და მიანიჭეთ მარტივი ტიპები (Primitive types). გამოიყენეთ ყველა მარტივი ტიპი რაც განვიხილეთ.
const myNumber = 10,
	myString = "Hello World",
	myBoolean = true,
	myNull = null;

let myUndefined;

// console.log("mynumber", myNumber, myString, myBoolean, myNull, myUndefined);
// console.log(myString);
// console.log(myBoolean);
// console.log(myNull);
// console.log(myUndefined);
// 3. დამატებით შექმენით ცვლადები name,  dayOfWeek, favoriteActivity და მიანიჭეთ თქვენი სახელი, კვირის დღე, თქვენი ფავორიტი აქტივობა.
const name = "Alina",
	dayOfWeek = "Friday",
	favoriteActivity = "coding";

// 4. #3 დავალებაში შექმნილი ცვლადებისგან შექმენით წინადადება:
// "Hi, my name is (აქ name ცვლადი)! Today is ( აქ dayOfWeek ცვლადი), a perfect day for (აქ favoriteActivity ცვლადი)."

const sentence = `<p>Hi, my name is ${name}! Today is ${dayOfWeek}, a perfect day for ${favoriteActivity}.</p>`;

// console.log(sentence);

const sentence2 =
	"Hi, my name is " +
	name +
	"! Today is " +
	dayOfWeek +
	", a perfect day for " +
	favoriteActivity +
	".";

// console.log(sentence2);

// myUndefined = 100;

// console.error("Hello World");
// console.warn("Hello World");
// alert("Hello World");
// const userConfirmed = confirm("Hello World");
// console.log(userConfirmed);
// const userInput = prompt("Hello World");
// console.log(userInput);
// alert("hello", userInput);
// console.table();

// array
const myArray = [
	2,
	[10, 20, 30],
	,
	3,
	"text",
	true,
	null,
	undefined,
	2,
	1,
	,
	3,
	[10, 20, 30],
];
// console.log(myArray);

// property
const myArrayLength = myArray.length;
const firstElement = myArray[0];
const num2 = 5;
const lastElement = myArray[myArrayLength - 1];
const lastElementWithAt = myArray.at(-1);
// console.log(lastElement);
// console.log(myArray[num2]);
// console.log(myArray[1][2]);
// index: value

// typeof myArray => object
// key: value

const firstProductPrice = 100,
	secondProductPrice = 200,
	thirdProductPrice = 300,
	fourthProductPrice = 400,
	fifthProductPrice = 500;

const productPrices = [100, 200, 300, 400, 1000];

productPrices.push(123);
const removedLastEl = productPrices.pop();
productPrices.unshift(1);
const removedFirstEl = productPrices.shift();

// console.table(productPrices);

// object

const productInfo = {
	productName: "Iphone 12",
	productPrice: 1000,
	productYear: 2021,
	productIsAvailable: true,
	availableColors: ["black", "white", "red"],
};

// console.log(productInfo.availableColors);
// console.log(productInfo.productDescription);

productInfo.productDescription = "This is a new Iphone 12";
productInfo.productName = "This is a new Iphone 12";

const propertyName = "productName";

// productInfo.propertyName;

// console.log(productInfo[propertyName]);

// console.log(productInfo);

const dataToUse = { ...productInfo };
// const newArr = [...productPrices];

// console.log(dataToUse[0].category_tree[0].title);
// console.log(productInfo, dataToUse);

dataToUse.productName = "Iphone 13";

// console.log(productInfo, dataToUse);

let num1 = 10;
let num3 = num1;

// console.log(num1, num3);

num1 = 20;

// console.log(num1, num3);
