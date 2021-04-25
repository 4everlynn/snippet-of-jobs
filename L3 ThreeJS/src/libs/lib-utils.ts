// eslint-disable-next-line
function pass (args: any) {
  // passed for eslint
}

function uuid (): string {
  const base = performance.now() + Math.random() * 546543
  return Math.abs((base * (Math.random() & 0x22 | 0xf1) *
    // @ts-ignore
    (base[Math.floor(base.length * Math.random())] & 0xfe | 0xcf | Math.random() * 31) *
    // @ts-ignore
    (base[Math.floor(base.length * Math.random())] | 0x9f)) | 0xe3)
    .toString(16)
}

export {
  pass,
  uuid
}
