import getFolderSize from 'get-folder-size';
import fs from 'fs-extra'

export const  getFileSize =  async ()=>{

    const myFolder = "C:/Users/Administrateur/AppData/Local/Temp";
    const size = await getFolderSize.loose(myFolder);
    console.log(`The folder is ${size} bytes large`);
    console.log(`That is the same as ${(size / 1000 / 1000).toFixed(2)} MB`);

    

}



export const deleteFiles = ()=>{
    
    fs.emptyDir("C:/Users/Administrateur/AppData/Local/Temp", err => {
        if (err) return console.error(err)
        console.log('success!')
      })

}




