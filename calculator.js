/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {

   let _memory = 0;
   let _total = 0;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
    function _validations(x){
    if (typeof x !== 'number'){
     throw new Error(`Invalid input type: ${x} is not a Number`);
    }
  //   return null;
    }

   // function load(x){
   //  let err = _validations(x);
   //  if( err ){
   //    // handle more gracefully
   //    //  maybe rollback something
   //    //  maybe log this error, then throw
   //    //  definitely, give user some feedback
   //    throw err;
   //  }
   //  // continue normal operations
   //  _total = x;
   //  return _total;
  // }

   function _load(x) {
     _validations(x);
     _total = x;

    return _total;
   }



  /**
   * Return the value of `total`
   * @return { Number }
   */
  function _getTotal() {

    return _total;
  }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function _add(x) {
     _validations(x);
     _total += x;
   }





  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function _subtract(x) {
     _validations(x);
     _total -= x;
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function _multiply(x) {
     _validations(x);
     _total *= x;
   }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function _divide(x) {
     _validations(x);
     _total /= x;
   }



  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   function _recallMemory(x) {

    return _memory;
   }



  /**
   * Stores the value of `total` to `memory`
   */
   function _saveMemory(x) {
     _memory = _total;
   }


  /**
   * Clear the value stored at `memory`
   */
   function _clearMemory(x) {
     _memory = 0;
     return _memory;
   }
  /**
   * Validation
   */
// function _validate(x) {



// }

   return {
    load: _load,
    getTotal: _getTotal,
    add: _add,
    subtract: _subtract,
    multiply: _multiply,
    divide: _divide,
    recallMemory: _recallMemory,
    saveMemory: _saveMemory,
    clearMemory: _clearMemory
    // validate: _validations
   };

}