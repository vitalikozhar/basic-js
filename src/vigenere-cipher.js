const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.method = direct;
    this.array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }

  encrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new NotImplementedError("Incorrect arguments!");
    }
    const resultCod = [];
    const upString = string.toUpperCase();
    const upKey = key.toUpperCase();
    const keyArray = [];
    let keyIndex = 0;

    for (let i = 0; i < upString.length; i += 1){
      if (/[A-Z]/.test(upString[i])){
        keyArray.push(upKey[keyIndex]);
        keyIndex = keyIndex < upKey.length - 1 ? keyIndex + 1 : 0;
      }else{
        keyArray.push(upString[i]);
      }
    }
    for (let i = 0; i < upString.length; i += 1){
      if (/[A-Z]/.test(upString[i])){
        const temp = (this.array.indexOf(upString[i]) + this.array.indexOf(keyArray[i])) % 26;
      resultCod.push(this.array[temp]);
      } else {
        resultCod.push(upString[i]);
      }
    }
    if (!this.method) {
      return resultCod.reverse().join('');
    }
    return resultCod.join('');
  }

  decrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new NotImplementedError("Incorrect arguments!");
    }
  
    const resultCod = [];
    const upString = string.toUpperCase();
    const upKey = key.toUpperCase();
    const keyArray = [];
    let keyIndex = 0;
  
    for (let i = 0; i < upString.length; i += 1) {
      if (/[A-Z]/.test(upString[i])) {
        keyArray.push(upKey[keyIndex]);
        keyIndex = keyIndex < upKey.length - 1 ? keyIndex + 1 : 0;
      } else {
        keyArray.push(upString[i]); 
      }
    }
      for (let i = 0; i < upString.length; i += 1) {
      if (/[A-Z]/.test(upString[i])) {
        const temp = (this.array.indexOf(upString[i]) - this.array.indexOf(keyArray[i]) + 26) % 26;
        resultCod.push(this.array[temp]);
      } else {
        resultCod.push(upString[i]); 
      }
    }
      if (!this.method) {
      return resultCod.reverse().join('');
    }
  
    return resultCod.join('');
  }
}
module.exports = {
  VigenereCipheringMachine,
};
