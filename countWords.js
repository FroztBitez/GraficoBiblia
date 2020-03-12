const fs = require('fs')
const regEx = /([^a-zA-Z ]+)|(r\n|\n|\r)|(\W*\b\w{1,2}\b)/g

const data = fs.readFileSync('./file/bible.txt', 'utf-8', (err, resp)=>{
    if(err) throw err
    return resp
})

const biblia = data
    .toLowerCase()
    .replace(regEx, ' ')
    .split(/\W+/)
    .filter(name => name)

let wordCount = biblia.reduce((allWords, words)=>{
    if(words in allWords){
        allWords[words]++
    }else{
        allWords[words] = 1
    }
    
    return allWords
}, {})

let obj = {}
Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]).map(key => obj[key] = wordCount[key])

const top10 = Object.keys(obj).slice(0, 10).map(key => ({[key]:obj[key]}))

let nameArray = top10.map(x => Object.getOwnPropertyNames(x)).flat();
let numArray = top10.map(x => Object.values(x)).flat();

module.exports = {nameArray, numArray}