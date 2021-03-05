let l = process.argv.length
let sum = 0
for (let i = 2; i < l; i++) {

    sum += Number(process.argv[i])

}
console.log(sum)