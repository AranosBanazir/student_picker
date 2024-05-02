import spin from 'cli-spinners'
import ora from 'ora'
import fs from 'fs/promises'
import color from 'colors'


const colors = [ 'red' , 'green' , 'yellow' , 'blue' , 'magenta' , 'cyan', 'white']
const students = ['Veysel', 'Jake', 'Nick', 'Kent', 'Caleb', 'Parker', 'Tom', 'Meg', 'Larry', 'Ryan']
const spinner = ora({text: 'Picking a student...', spinner: spin.line,}).start();
let usedStudents;

async function getUsedStudents(){
    usedStudents = (await fs.readFile('./usedStudents.txt', 'utf8'))
    return usedStudents
}

async function newStudent(){
  
   const used = (await getUsedStudents()).split('\n')
    const filteredStudents = students.filter(student => !used.includes(student))
    if (filteredStudents.length === 1){
        fs.writeFile('./usedStudents.txt', ``)
    }
    const student = Math.floor(Math.random() * filteredStudents.length)


    
    return filteredStudents[student]
}

function editUsedStudents(student){
    fs.appendFile('./usedStudents.txt',  student +'\n')
}


const colorChange = setInterval(() =>{
    const cIndex = Math.floor(Math.random() * colors.length)
    spinner.color = colors[cIndex]
}, 300)


setTimeout(async function(){
    clearInterval(colorChange)
    const student = await newStudent()

    
    spinner.text = ''
    spinner.spinner = {interval: 80, frames: [`==>  `.brightGreen + `The chosen student is: `.white + `${student}`.green]}
    editUsedStudents(student)
    
}, 2000)

setTimeout(()=>{
    process.exit(0)
}, 2600)