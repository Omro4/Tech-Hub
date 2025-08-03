// const omar = {

//     name : "omar" , age : 21 , live : "suker"
// }
// omar.long=180;
// omar.age=15;
// omar.live="mousl";

// delete omar.age ;

// delete omar.live ;


// for (let x in omar)
// {
// console.log(x , omar[x])
// }


// let omar = {
//   name: "Omar",
//   age: 21,
//   city: "Mosul"
// };

// let y=Object.entries(omar);
// // console.log(y)




// function exam (){
//  keys=['id','name','email', 'role'];
//  values=[101 , 'omar', 'omar@gmail.com','developer'];
// let y= {};
// for(i=0;i<keys.length;i++)
// { 
// console.log(i);
// x=y[keys];
// return x;
// }
// }
// console.log(exam());

// const nice={ 
//   'id' :101 , name:"omar", email : "omar@gmail.com" , role : "developer"
//  }
// function exam(){

//  console.log(Object.keys(nice))
//   console.log(Object.values(nice))

// }
// exam();



// function exam(){
// const nice={ 
//   'id' :101 , name:"omar", email : "omar@gmail.com" , role : "developer"
//  }
// const nice2 ={stage:"3"}
// y=Object.entries(nice2);
// console.log(y)
// z=y.push(nice);
// console.log(y,z)
// }
// exam();

// function exam(){


// x=[

// { 'id' :101 , name:"omar", email : "aziz@gmail.com" , role : "developer"},
// { 'id' :101 , name:"omar", email : "omar@gmail.com" , role : "developer"},
// { 'id' :101 , name:"omar", email : "yahya@gmail.com" , role : "developer"},
// { age :101 , name:"omar", email : "ahmed@gmail.com" , role : "developer"}

// ]
// let y=0;
// let z=0;
// for(i=0;i<x.length;i++){

//   if(x[i]=='id')
//   {
//    y=y+1;
//   }
//    if(x[i]==Object.keys(x))
//   {
//    z=z+1;
//   }
//   console.log(y)
// }
// return x;
// }
// exam();


// // Question 1: Array to Object Conversion
// const keys = ['id', 'name', 'email', 'role'];
// const values = [101, 'John Doe', 'john@example.com', 'developer'];
// Task 1: Convert arrays to object
// Expected: { id: 101, name: 'John Doe', email: 'john@example.com', role: 'developer' }
// Task 2: Add new property 'permissions' with value ['read', 'write']
// Expected: { id: 101, name: 'John Doe', email: 'john@example.com', role: 'developer', permissions: ['read', 'write'] }
// Task 3: Convert object back to array of key-value pairs
// Expected: [['id', 101], ['name', 'John Doe'], ['email', 'john@example.com'], ['role', 'developer'], ['permissions', ['read', 'write']]]
// console.log("Question 1 Solutions:");
// Your code here















// function quiz(){


// const keys = ['id', 'name', 'email', 'role' ,'age'];
// const values = [101, 'John Doe', 'john@example.com', 'developer', 50];let i
// y={};
// for(i=0;i<keys.length;i++)
// {
//     for(j=0;j<values.length;j++)
//     {
// y[keys[i]]=values[i]

//     }
// }
// // console.log(y);
// }
// quiz();

// console.log(Object.keys(y))
// console.log(Object.values(y))
// y.stage=2;
// console.log(y)

// let i;

// let x=['a','e','i','o','u'];
// function fun(word)
// { for(i=0;i<word.length;i++)
// {
//     if(word>=3){ return }
// else if (word[i] <=0 && word[i] >=9)
// {
// return true
// }
// else if (word[i]==x[i])
// {
// return true
// }
// else if(word[i]>='A'&& word[i]<='Z')
// {
//     return true
// }
// else if(word[i]>='a'&& word[i]<='z')
// {
//     return true
// }
// }

// }
// word="234Adas";
// console.log(fun(word))

// function sum()
// { 
//     x=[2,7,11,15];
// T=9;
// for(i=0; i<x;i++)
// { for(j=1;j<x.length;j++)
// {


// }

// }
// }
// sum();





// function num(x)
// {  for(i=0;i<x.length;i++)
// {
//  if(x[0]===x[2])
//  {
//     return true
//  }
//   else
//  return false
// }
// }
// x=[1,2,1];
// num(x)
// --------------------------
// function omar ()
// {
//  x=[1,2,3,4,5,6];
//  y=[7,8,9,10,11,12]

//  for(i=0;i<6;i++)
//  {
//     if(x[i]%2==0)
//     {
//      console.log(x[i])
//     }
//  }

// //

//  for(i=0;i<6;i++)
//  {
//     if(y[i]%2!=0)
//     {
//     console.log(y[i]);

//     }

//  }

// }
// omar ();


// function process(callback) {
//   return callback(7);
// }

// function square(x) {
//   return x * x;
// }

// console.log(process(square)); // 25


// function omar(number)
// {
//     return number(9);
// }


// function abood(x)
// { 
//     return (2*x)+x; 
// }

// console.log(omar(abood));





// function omar (x)
// {

// let y= x.toString()===x.toString().split('').reverse().join('')
// return y;

// }
// x=500;
// console.log(omar (x))


// function omar(x) {
//   let y = x.split(' ');
//   return y[y.length - 1].length;
// }

// x="fly me to the moon"
// //x=["fly","me","to","the","moon"]
// console.log(omar(x))


// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [7, 8, 9, 10, 11, 12];

// for (let i = 0; i < arr1.length; i++) {
//   let even1 = arr1[i] % 2 === 0;
//   let even2 = arr2[i] % 2 === 0;

//   if ((even1 && !even2) || (!even1 && even2)) {
//     // نبدل القيم
//     let temp = arr1[i];
//     arr1[i] = arr2[i];
//     arr2[i] = temp;
//   }
// }
// console.log("arr1 =", arr1);
// console.log("arr2 =", arr2);



// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [7, 8, 9, 10, 11, 12];

// for (let i = 0; i < arr1.length; i++) {
//   let a = arr1[i];
//   let b = arr2[i];

//   // إذا أحدهم زوجي والثاني فردي → نبدلهم
//   if ((a % 2 === 0 && b % 2 !== 0) || (a % 2 !== 0 && b % 2 === 0)) {
//     arr1[i] = b;
//     arr2[i] = a;
//   }
// }
// console.log("arr1:", arr1);
// console.log("arr2:", arr2);

// function sort()
// { 
// x=[[5,4,7,8],[9,8,5,7],[7,4,5,1]]
// let t;
// for(i=0;i<x.length;i++)
// {
//     for(j=1;j<x.length;j++)
//     { 
//         console
//         if(x[j]<x[i])
//         {
//             t=x[i];
//             x[i]=x[j];
//             x[j]=t;
//         }
//     }
// }
// return x
// }
// console.log(sort())

// function sort() {
//     x = [["*"], ["*", "*"]["*", "*", "*"], ["*", "*", "*", "*"], ["*", "*", "*", "*", "*"]]

//     for (i = 0; i < x.length; i++) {
//         for (j = x.length; j > 0; j--) {
//             console.log(x)
//         }
//     }

// }
// sort()
// let x=[[5,4,7,8],[9,8,5,7],[7,4,5,1],[7,4,5,1]] ;
//  function omar(x)
// { 
//  for(i=0;i<x.length;i++)
//  {
//  for(j=0;j<x.length+1;j++)
//  {
//     if(x[i][j] %2 ===1)
//     {
//         x[i][j]=0
    
//     }
//  }
// }
//  return x
// }
// console.log(omar(x))


// const matrix = [
//   [3, 7, 2, 9, 1],
//   [15, 4, 8, 12, 6],
//   [20, 11, 5, 18, 14],
//   [25, 9, 13, 7]
// ];

// const result = [];
// for (let i = 0; i < x.length; i++) {
//   let max = x[i][0];
//   for (let j = 1; j < x.length; j++) {
//     if (x[i][j] > max) {
//       max = x[i][j];
//     }
//   }
//   result.push(max);
// }
// console.log(result);



/*--------------------*/

// const values = [
//   ['John', 25, 'Engineer'],
//   ['Sarah', 30, 'Designer'],
//   ['Mike', 28, 'Developer']
// ];

// const keys = [
//   ['name', 'age', 'job'],
//   ['name', 'age', 'job'],
//   ['name', 'age', 'job']
// ];
// const result = [];
// for( let i=0;i<values.length;i++){
//     const obj = {}
//     for(let j=0;j<keys.length;j++){
//         obj[keys[i][j]]= values[i][j]
//     }
//     result.push(obj)
// }
// console.log(result)


// function exam(x) {
//   let max = -1;

//   for (let i = x.length - 1; i >= 0; i--)
//  {
//     let current = x[i];
//     x[i] = max;
//     if (current > max)
//          {
//            max = current;
//          }
//   }
//   return x;
// }
// let x = [17, 18, 5, 4, 6, 1];
// console.log(exam(x)); 


/*    حل بطريقة ثانية */


// function exam(x) {
//   for (let i = 0; i < x.length - 1; i++) {
//     let max = x[i + 1];
//     for (let j = i + 1; j < x.length; j++) {
//       if (x[j] > max) {
//         max = x[j];
//       }
//     }
//     x[i] = max;
//   }

//   x[x.length - 1] = -1;
//   return x;
// }
// let x = [17, 18, 5, 4, 6, 1];
// console.log(exam(x)); 



// function fun(x)
// {   let z=0;
//     for(i=0;i<x.length;i++)
//     {   
//        if()
//     }

// return z;
// }
// let x=[1,7,3,6,5,6];

// console.log(fun(x))





// function fun (x)
// { for(i=0;i<x.length;i++)
// {
//  if(x[i+1]>x[i])
//  {
//     return true
//  }
//  else
//     return false 

// return x;
// }
// }
// let x=[0,2,3,4,5,2,1,0];
// console.log(fun(x))\


// const x = [0, 1, 0, 6, 7];
// let index = 0;
// for (let i = 0; i < x.length; i++) {
//   if (x[i] !== 0)
//      {
//     x[index] = x[i];
//     index ++;
//      }
//  }
//  for (let i = index; i < x.length; i++) {
//   x[i] = 0;
//  }
// console.log(x);
/*--------------------*/
// let x = [0, 1, 0, 6, 7];
// let y = [];

// let countZero = 0;

// for (let i = 0; i < x.length; i++) {
//   if (x[i] !== 0) {
//     y.push(x[i]); // نضيف العناصر غير الصفر
//   } else {
//     countZero++; // نحسب عدد الأصفار
//   }
// }

// // نضيف الأصفار في النهاية
// for (let i = 0; i < countZero; i++) {
//   y.push(0);
// }

// console.log(y); // [1, 6, 7, 0, 0]

/*----------------------*/
// function fun(x) {
//   let total = 0;
//   for (let i = 0; i < x.length; i++) 
//     {
//     total = total + x[i];
//     }
//   let left = 0;

//   for (let i = 0; i < x.length; i++) {
//     let right = total - left-x[i]  // نحسب مجموع اليمين

//     if (left === right) {
//       return i;
//     }

//     left = left+ x[i];
//   }

//   return -1;
// }
// console.log(fun([1, 7, 3, 6, 5, 6])); // يطبع 3
// console.log(fun([1, 2, 3])); // يطبع -1


// x=[0,1,3]
// function fun (x)
// {
//   for(i=0;i<x.length;i++)  
//   {
//     if(x[i]>=0&&x[i]<=3)
//     {
//      return x
//     }
//   }
// return false;
// }

// console.log(fun(x))


// function fun(x, target) {
//   for (let i = 0; i < x.length; i++) {
//     for (let j = i + 1; j < x.length; j++) {
//       if (x[i] + x[j] == target) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }

// let x = [2, 7, 11, 15];
// let target = 9;

// console.log(fun(x)); // ✅ يطبع [0, 1]

// a="sad";
// b="sadbutsad";

// function fun(a,b)
// {  x=a.split('');
//     y=b.split('');
 
//    for(i=0;i<y.length;i++)
//    { 
//         if(y.include(x))
//         {
//             return i
//         }
//         else
//         {
//             return -1
//         }
//    }
// }
// console.log(fun(a,b));


// var x=[1,2,3,0,0,0];
//  let y=[2,5,6];
// function fun(x)
// {
//      for(let i=0;i<x.length;i++)
//      {
//         for(j=0;j<y.length;j++)
//         {
//             if(x[i]===0)
//             {

//             }
//         }
//      }


// }
// console.log(fun(x))
 