export default {
  changeCity (state, city) {
    state.city = city

    // 保存数据到localstorage
    try {
     localStorage.city = city
    } catch (e) {}
  }
}
