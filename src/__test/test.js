import { getBuffer, ArrayBufferConverter } from '../arraybuff';

test('string to buffer', () => {
  const result = getBuffer();
  expect(result).toBeInstanceOf(ArrayBuffer);
});

test('buffer to string loading', () => {
  const newStr = new ArrayBufferConverter();
  const result = newStr.load(newStr);
  expect(result).toBeInstanceOf(ArrayBuffer);
});

test('buffer to string conversion', () => {
  const newStr = new ArrayBufferConverter();
  const data = newStr.load(newStr);
  const result = newStr.toString(data);
  expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
