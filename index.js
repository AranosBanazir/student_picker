import spin from 'cli-spinners'
import ora from 'ora'

const colors = [ 'red' , 'green' , 'yellow' , 'blue' , 'magenta' , 'cyan', 'white']
const students = ['Veysel', 'Jake', 'Nick', 'Kent', 'Caleb', 'Parker', 'Tom', 'Meg', 'Larry', 'Ryan']


// ora('picking a student', spin.dots10).start()

const defaultSpin = {


}


const spinner = ora('Picking a student...').start();


const colorChange = setInterval(() =>{
    const cIndex = Math.floor(Math.random() * colors.length)
    spinner.spinner = spin.dots,
    spinner.color = colors[cIndex]
}, 1000)


setTimeout(()=>{
    clearInterval(colorChange)
    const student = Math.floor(Math.random() * students.length)

    spinner.text = `The chosen student is: ${students[student]}`
    // process.exit(0)
    
}, 5000)
