import spin from 'cli-spinners'
import ora from 'ora'

const colors = [ 'red' , 'green' , 'yellow' , 'blue' , 'magenta' , 'cyan', 'white']
const students = ['Veysel', 'Jake', 'Nick', 'Kent', 'Caleb', 'Parker', 'Tom', 'Meg', 'Larry', 'Ryan']




const spinner = ora({text: 'Picking a student...', spinner: spin.arrow3,}).start();


setInterval(() =>{
    const cIndex = Math.floor(Math.random() * colors.length)
    spinner.color = colors[cIndex]
}, 300)


setTimeout(()=>{
    
    const student = Math.floor(Math.random() * students.length)

    spinner.text = `The chosen student is: ${students[student]}`
    
    
}, 2000)

setTimeout(()=>{
    spinner.color = 'red'
    spinner.spinner = spin.arrow3
    process.exit(0)
}, 3000)