const files = [
    { name: "document1.pdf", size: 500 },
    { name: "document2.pdf", size: 700 },
    { name: "image1.png", size: 200 },
    { name: "image2.png", size: 300 },
    { name: "text1.txt", size: 100 },
    { name: "text2.txt", size: 150 },
    { name: "photo1.jpg", size: 400 },
    { name: "photo2.jpg", size: 350 },
    { name: "program1.exe", size: 1000 },
    { name: "program2.exe", size: 1200 },
    { name: "data1.csv", size: 600 },
    { name: "data2.csv", size: 500 },
    { name: "report1.pdf", size: 800 },
    { name: "report2.pdf", size: 900 },
    { name: "image3.png", size: 250 },
    { name: "text3.txt", size: 175 },
    { name: "photo3.jpg", size: 450 },
    { name: "document3.pdf", size: 750 }
  ];

// ----Total file size

let totalSize=files.reduce((total,f)=>{
    return total+f.size

},0)
let top5=files.sort((a,b)=>{
   return  b.size - a.size
}).slice(0,5)

// let extensions=files.reduce((acc,e)=>{
//         let ex=e.name.split('.').pop()
//     if(!acc[ex]){
//         acc[ex]=[]
//     }
//     acc[ex].push(e.name)
//     return acc
// },{})
let extensions = {};

files.forEach(file => {
  let ex = file.name.split('.').pop();  // Extract the file extension
  if (!extensions[ex]) {
    extensions[ex] = [];  // If extension group doesn't exist, initialize it
  }
  extensions[ex].push(file.name);  // Add the current file to the group
});



let newObj={
    totalSize,
    top5,
    extensions
}

console.log(newObj)