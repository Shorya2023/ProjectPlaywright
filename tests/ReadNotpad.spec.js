import {test,expect} from '@playwright/test'
import exp from 'constants';
import fs from 'fs'

const filePath="C:\\Users\\lenovo\\OneDrive\\Documents\\UploadText.txt";

test("read notepad data",async({page})=>{

    const fileContent = fs.readFileSync(filePath,'utf-8');
    console.log(fileContent);
    expect(fileContent).toContain("working")
})