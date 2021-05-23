export function getData(count) {
  const data = []
  for (let index = 0; index < count; index++) {
    data.push({
      id: String(index+1),
      name: `Emri ${index+1}`,
      price: index*10+5,
      qty: index*2+1,
      articleId: index
    })
  }
  return data
}
