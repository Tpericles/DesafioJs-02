const students = [
  {  
  name: 'Thiago',
  firstNote: 10,
  secondNote: 10},
  {
    name: 'Jon',
    firstNote: 3,
    secondNote: 4,
  },
  {
    name: 'Tavares',
    firstNote: 7,
    secondNote:5,
  }
]

function media(firstNote,secondNote){
  return (firstNote + secondNote) / 2
}

function printStudentsMedia(student){
  return `Estudante ${student.name} tem a media  ${media(student.firstNote, student.secondNote)}`
}

for(let student of students){
  let mediaMessage= printStudentsMedia(student)
  if (media(student.firstNote,student.secondNote) > 7) {
    alert(`${mediaMessage}\n foi aprovado`)
  }else{
    alert(`${mediaMessage}\n foi reprovado`)
  }
}