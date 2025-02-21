// import {fs} from  'fs';
// import {path} from 'path';

// // 1. Create a folder
// const folderPath = path.join(__dirname, 'myFolder');
// if (!fs.existsSync(folderPath)) {
//     fs.mkdirSync(folderPath);
//     console.log('Folder created:', folderPath);
// }

// // 2. Create and write to a text file
// const filePath = path.join(folderPath, 'myTextFile.txt');
// const contentToWrite = 'Hello, Playwright! This is a test file.';

// fs.writeFileSync(filePath, contentToWrite);
// console.log('File created and content written:', filePath);

// // 3. Open the text file and search for a word
// const fileContent = fs.readFileSync(filePath, 'utf8');
// const searchWord = 'Playwright';

// if (fileContent.includes(searchWord)) {
//     console.log(`The word "${searchWord}" was found in the file.`);
// } else {
//     console.log(`The word "${searchWord}" was not found in the file.`);
// }
