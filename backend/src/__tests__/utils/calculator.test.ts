import calculator from '../../handlers/calculator'

describe('book 1=2, bbook 2=2, book 3=2, book 4=1, book 5=1 should tatal 51.6', () =>{
  test('Testing 1', ()=> {
    const result = calculator({
      b1: 2,
      b2: 2,
      b3: 2,
      b4: 1,
      b5: 1
    });
    expect(result.total).toEqual(51.6);
  })
})

describe('book 1=0, bbook 2=0, book 3=0, book 4=2, book 5=0 should tatal 16', () =>{
  test('Testing 2', ()=> {
    const result = calculator({
      b1: 0,
      b2: 0,
      b3: 0,
      b4: 2,
      b5: 0
    });
    expect(result.total).toEqual(16);
  })
})

describe('book 1=1, bbook 2=0, book 3=1, book 4=0, book 5=0 should tatal 15.2', () =>{
  test('Testing 2', ()=> {
    const result = calculator({
      b1: 1,
      b2: 0,
      b3: 1,
      b4: 0,
      b5: 0
    });
    expect(result.total).toEqual(15.2);
  })
})

describe('book 1=0, bbook 2=0, book 3=1, book 4=0, book 5=0 should tatal 8', () =>{
  test('Testing 2', ()=> {
    const result = calculator({
      b1: 0,
      b2: 0,
      b3: 1,
      b4: 0,
      b5: 0
    });
    expect(result.total).toEqual(8);
  })
})