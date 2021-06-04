function freeze(obj) {
  // Object.seal(obj);
  for (const key in obj) {
    if(typeof obj[key] == 'object'){
      freeze(obj[key])
    }
    Object.defineProperty(obj, key, {
      writable: false,
      configurable: false
    })

  }
}

let p = {
  person: 'adnan',
  gf: {
    name: 'Omama',
    values: [{ loyal: true }, { fiesty: false }],
    mood: {
      today: {
        current: 'happy'
      }
    }
  }
}

freeze(p);
p.name = 'Someone'
p.gf.name = "Someone else";
p.gf.mood.today.current = 'sad';
// p.gf.values.push({ test: true })
p.gf.values[0].loyal = false;

console.log(p.gf)
