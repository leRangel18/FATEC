import PromptSync from "prompt-sync"
import chalk from "chalk"

const prompt = PromptSync()

// Atividade 1 - Cálculo de novo salário

const salario = Number(prompt(chalk.magenta("Qual é o seu salário? ")))
const aumento = Number(prompt(chalk.magenta("Quanto você quer aumentar? ")))
const salarionovo = salario + (salario * (aumento/100))

console.log(chalk.blue.bgMagenta.bold(`O salário novo é: ${salarionovo}`))


// Atividade 2 - Cálculo de idade


const idade = prompt(chalk.blue("Qual é o seu ano de nascimento? "))
const anoAtual = 2023

console.log(chalk.blue.bgBlue.bold(`Sua idade é ${anoAtual-idade}`))
