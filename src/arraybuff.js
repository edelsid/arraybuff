export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export class ArrayBufferConverter {
  constructor() {
    this.buffer = getBuffer();
  }

  load(buffer) {
    this.data = buffer.buffer;
    return this.data;
  }

  toString() {
    const newArr = new Uint16Array(this.data);
    let resString = '';
    for (let i = 0; i < newArr.length; i += 1) {
      resString += String.fromCharCode(newArr[i]);
    }
    return resString;
  }
}
