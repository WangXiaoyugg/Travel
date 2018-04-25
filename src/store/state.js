let defaultCity = '上海'
try {
  defaultCity = localStorage.city || defaultCity
} catch (e) {}

export default {
  city: defaultCity
}
