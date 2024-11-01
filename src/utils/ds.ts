import * as crypto from 'node:crypto'

function randomString(length: number): string {
  const s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const res = [];
  for (let i = 0; i < length; ++i) {
    res.push(s[Math.floor(Math.random() * s.length)]);
  }
  return res.join("");
}

function ds(salt: string): string {
  const time = Math.floor(Date.now() / 1000);
  const random = randomString(6);

  const crpto = crypto.createHash('md5').update(`salt=${salt}&t=${time}&r=${random}`).digest('hex');
  console.timeEnd("e");
  return `${time},${random},${crpto}`;
}

export default ds;