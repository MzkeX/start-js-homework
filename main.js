
// 1
const getData = async () => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData()

// 2 
const fetchData = async () => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories')
    const data = await response.json()

    const slicedData = data.slice(0, 3)
    console.log(slicedData);
  } catch (error) {
    console.log(error);
  }
}
fetchData()

// 3
const loadData = async () => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories/1')
    const data = await response.json()

    if (data.length > 1) {
      console.log(false);
    } else if (data.length = 1) {
      console.log(data);
    }
  } catch (error) {
    console.log(error); 
  }
}
loadData()

