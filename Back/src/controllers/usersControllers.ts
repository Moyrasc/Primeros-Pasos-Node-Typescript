
export const newUser = (object: any): any => {
  const id = Math.random() * 10
  return { id, ...object }
}
