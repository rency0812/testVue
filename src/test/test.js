/**
 * Created by ren on 2018/4/3.
 */
export default {
  name: 'rency',
  sex: 'male',
  age: 18,
  test () {
    console.log(this.name + '\\' + this.sex)
  },
  test1 () {
    console.log(this.sex + '\\' + this.age)
  }
}
