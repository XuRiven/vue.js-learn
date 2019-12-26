const app=new new Vue({
  el:'#app',
  data: {
		movies: [
			{
				id: 1,
				name: '《算法导论》',
				date: '2006-9',
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: '《UNIX编程艺术》',
				date: '2006-2',
				price: 59.00,
				count: 1
			},
			{
				id: 3,
				name: '《编程珠玑》',
				date: '2008-10',
				price: 39.00,
				count: 1
			},
			{
				id: 4,
				name: '《代码大全》',
				date: '2006-3',
				price: 128.00,
				count: 1
			},
		],
	},
	// 过滤器
	filters: {
		showPrice(price){
			return '￥'+price.toFixed(2)
		}
	},
	methods: {
		subBook(index){
			this.movies[index].count--
		},
		addBook(index){
			this.movies[index].count++
		},
		removeHandler(index){
			this.movies.splice(index,1)
		}
	},
	computed: {
		totalPrice(){
			let result=0; 
			for(let i=0;i<this.movies.length;i++){
				result+=this.movies[i].price * this.movies[i].count
			}
			return result;
		}
	}
})