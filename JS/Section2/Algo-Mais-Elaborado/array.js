const alunos = ['Rodrigo']

alunos.push('Fernando')
alunos.unshift('Andreus')
alunos[1] = 'RgFoxBr'
alunos.push('Isabella')
alunos.push('Alvaro')

console.log(alunos)

// const removido = alunos.shift() //Remove o primeiro item Andreus
// delete alunos[1] //escolho qual aluno quero tirar o valor 

alunos.pop()
console.log(alunos)

// console.log(alunos.slice(0, -1))
console.log(alunos.slice(0, 1))

console.log(typeof(alunos))
console.log(alunos instanceof Array)