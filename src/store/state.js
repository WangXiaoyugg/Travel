let defaultCity = '上海'
try {
  defaultCity = localStorage.city || defaultCity
} catch (e) {}

console.log(defaultCity);
export default {
  city: defaultCity
}
