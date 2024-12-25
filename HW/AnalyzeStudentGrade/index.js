const students = [
    { name: "Alice", grades: [50, 60, 70] },
    { name: "Bob", grades: [30, 20, 40] },
    { name: "Charlie", grades: [90, 85, 95] }

]




let studentAnalyze =
{
    averages :[],
    failed :[]
}
 function calculateGrade(students)
{
    let averages = 0;
    for(let i = 0;i<students.length;i++)
    {
        for(let j = 0;j<students[i].grades.length;j++)
        {
            averages += students[i].grades[j]
        }
        averages=averages/students[i].grades.length
        studentAnalyze.averages.push({name:students[i].name,
            average:averages
        })
        if(averages<=30)
        {
            studentAnalyze.failed.push(students[i].name)
        }
        averages = 0
    }
}
calculateGrade(students)
console.log(studentAnalyze)