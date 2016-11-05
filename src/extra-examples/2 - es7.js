'use strict';

function doSomethingAsync(aditionalText) {
  console.log('Início da operação');
  
  return new Promise((resolve, reject) => {
    if (2 < 1) {
      reject('Operação com erro')
    }
    
    setTimeout(() => {
      resolve('Operação com sucesso');
    }, 3000);
  });
}

async function asyncTest() {
  let result = await doSomethingAsync();
  console.log(result);
}

asyncTest();
