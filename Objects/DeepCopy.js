// not for function duplication

function duplicate(obj){

  if(obj == null || !(typeof obj == 'object')) return obj
  // console.log(obj)
  if(Array.isArray(obj)){
      let arr = []
      obj.forEach(function(element){
        arr.push(duplicate(element));
      })
      return arr
  } 

  if (typeof obj == 'object'){
    let newObj = {}
    for(let property in obj)
      newObj[property] = duplicate(obj[property])
    return newObj;
  }
  

}

// let testObj = [123,[321,[111,[012]]]]
// let copiedObj = duplicate(testObj)
// testObj[1][1][1] = 0
// console.log(testObj)
// console.log(copiedObj)

let testObj = {
  a : 12, 
  b: null,
  c: undefined,
  d: 'I am string',
  e: true,
  f: {},
  g: {
    ga: [1,2,3],
    gb: {
      gba: 'stupid',
      gbb: 'what?',
      gbc: ['I', 'am', 'not', 'stupid']

    }
  },
  h: [
    {
      ha: 'stupid',
      hb: 'what?',
      hc: ['I', 'am', 'not', 'stupid']

    },{
      haa: 'stupid',
      hab: 'what?',
      hac: ['I', 'am', 'not', 'stupid']

    },['array','in','array']
  ]
}

let copiedObj = duplicate(testObj)

testObj.g.gb.gbc[2] = 'fucking'

console.log(testObj.g)
console.log(copiedObj.g)
console.log(testObj)
console.log(copiedObj)

