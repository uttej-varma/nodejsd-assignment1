const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	const data=await fs.writeFile("testfile.txt","This is a test file",(err)=>{
		console.log(err);
	});
	
}
myFileWriter();


const myFileReader = async (fileName) => {
	const data=await fs.readFile("testfile.txt","utf-8")
	console.log(data);
}
myFileReader();



const myFileUpdater = async (fileName, fileContent) => {
	const data=await fs.appendFile("testfile.txt"," I was Updated",(err)=>{
		console.log(err);
	})
}
myFileUpdater();

const myFileDeleter = async (fileName) => {
	const data=await fs.unlink("testfile.txt",(err)=>{
		console.log(err);
	})
}
myFileDeleter();



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }