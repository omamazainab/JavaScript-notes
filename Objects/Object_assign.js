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

let result = Object.assign({},testObj);

testObj.g.gb.gbc[2] = 'fucking'

console.log(testObj.g)
console.log(copiedObj.g)

console.log(result);
console.log(testObj)