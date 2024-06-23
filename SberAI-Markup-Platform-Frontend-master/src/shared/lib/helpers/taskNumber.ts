export const taskNumber = (index?: string) => {
  return index ? index.padStart(3, '0') : ''
}
