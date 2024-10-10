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
  
  // Step 1: Calculate total size
//   const totalSize = files.reduce((total, file) => total + file.size, 0);
  const totalSize=files.reduce((total,e)=>{
       return total + e.size

  },0)
  
  // Step 2: Find the largest 5 files
//   const largestFiles = files
//     .sort((a, b) => b.size - a.size) // Sort by size in descending order
//     .slice(0, 5); // Select the top 5 largest files
  const largestFiles=files.sort((a,b)=>b.size - a.size).slice(0,5)
  
  // Step 3: Group files by their extensions
  const filesByExtension = files.reduce((acc, file) => {
    // Extract the file extension (everything after the last '.')
    const extension = file.name.split('.').pop();
    
    // If the extension category doesn't exist, create it
    if (!acc[extension]) {
      acc[extension] = [];
    }
  
    // Add the file name to the corresponding extension group
    acc[extension].push(file.name);
    
    return acc;
  }, {});
  
  // Step 4: Combine everything into the final output
  const output = {
    totalSize,
    largestFiles,
    filesByExtension
  };
  
  console.log(output);
  