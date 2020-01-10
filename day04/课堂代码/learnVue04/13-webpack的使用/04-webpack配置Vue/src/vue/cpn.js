export default {
  template: `
    <div>
    <h2>{{message}}</h2>
    <button>按钮</button>
    <h2>{{name}}</h2>
    </div>
    `,
  data() {
    return {
      message: 'kobe',
      name: 'james'
    }
  }
}