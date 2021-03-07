const PRICE = 8;
const DISCOUNT_2_BOOKS = 0.05;
const DISCOUNT_3_BOOKS = 0.1;
const DISCOUNT_4_BOOKS = 0.2;
const DISCOUNT_5_BOOKS = 0.25;


const calculator = (param: { b1: any; b2: any; b3: any; b4: any; b5: any; }) => {
  let highestCount = Math.max( // Get highest count
    param.b1,
    param.b2,
    param.b3,
    param.b4,
    param.b5
  )

  let discountGroup = new Array(highestCount)
  for (var i = 0; i < highestCount; i++) { // Grouping
    discountGroup[i] = param.b1 >= (i + 1) ? 1 : 0;
    discountGroup[i] = param.b2 >= (i + 1) ? discountGroup[i] + 1 : discountGroup[i];
    discountGroup[i] = param.b3 >= (i + 1) ? discountGroup[i] + 1 : discountGroup[i];
    discountGroup[i] = param.b4 >= (i + 1) ? discountGroup[i] + 1 : discountGroup[i];
    discountGroup[i] = param.b5 >= (i + 1) ? discountGroup[i] + 1 : discountGroup[i];
  }

  let total = 0;
  for (var i = 0; i < highestCount; i++) { // Get percentage
    switch (discountGroup[i]) {
      case 5: {
        const grossPrice = discountGroup[i] * PRICE;
        total = total + (grossPrice - (grossPrice * DISCOUNT_5_BOOKS));
        break;
      }
      case 4: {
        const grossPrice = discountGroup[i] * PRICE;
        total = total + (grossPrice - (grossPrice * DISCOUNT_4_BOOKS));
        break;
      }
      case 3: {
        const grossPrice = discountGroup[i] * PRICE;
        total = total + (grossPrice - (grossPrice * DISCOUNT_3_BOOKS));
        break;
      }
      case 2: {
        const grossPrice = discountGroup[i] * PRICE;
        total = total + (grossPrice - (grossPrice * DISCOUNT_2_BOOKS));
        break;
      }
      case 1: {
        const grossPrice = discountGroup[i] * PRICE;
        total = total + grossPrice;
        break;
      }
    }
  }

  return { total }
}

export default calculator;