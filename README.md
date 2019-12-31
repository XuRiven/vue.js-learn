# vue.js-learn学习笔记

# 0.ES6

## 0.1. 01-块级作用域

```html
<script>
    /* 
      ES5中的var是没有块级作用域的(例如:if/for) 
      ES6中的let是有块级作用域的(例如:if/for)
     */
    let btns=document.getElementsByTagName('button');
    for (let i = 0; i < btns.length; i++) {
      btns[i].onclick=function(){
        alert('第'+i+'个按钮被点击了')
      }
    }
  </script>
```

## 0.2. 02-const的使用

```html
<script>
    /* 
      注意一:一旦给const修饰的标识符赋值后，不能修改
    */
    // const name='kobe';
    // name='james';

    /* 
      注意二:在使用const定义标识符，必须进行初始化赋值
    */
    // const name;

    /* 
      注意三:常量的含义是指向的对象不能修改，但可以改变对象内部的属性
    */
    const obj = {
      name:'kobe',
      num:'24',
      height:'196cm'
    }
    console.log(obj);

    obj.name='james';
    obj.num='23';
    obj.height='206cm'
    console.log(obj);
    
    
  </script>
```

## 0.3. 03-对象字面量增强写法

```html
<script>
    const name = 'kobe';
    const num = '24';
    const height = '196';

    //ES5写法
    /* const obj={
      name:name,
      num:num,
      height:height
    }
    console.log(obj); */

    //ES6写法|
    const obj = {
      name,
      num,
      height
    }
    console.log(obj);



    //ES5写法
    /* const obj2={
      eat:function(){

      },
      drink:function(){

      }
    } */

    //ES6写法
    const obj2 = {
      eat() {

      },
      drink() {

      }
    }
  </script>
```



# 1.vue初体验

## 1.1. 01-HelloVuejs

```html
<div id="app">
    {{name}}======={{age}}
  </div>
  <!--引入js不能使用empty tag!!,切记！-->
  <script src="../js/vue.js"></script>
  <script>
    //let(常量) const(变量)
    //编程范式：声明式编程
    const app = new Vue({
      el: '#app', //用于挂载要管理的元素
      data: {//定义数据
        name: 'xuriven',
        age: '22'
      }
    })
  </script>
```

## 1.2. 02-vue列表展示

这里使用v-for="item in movies"遍历数组movies，item可以随意写，也可以写成m in movies

```html
<div id="app">
    <ui>
      <li v-for="item in movies">{{item}}</li>
    </ui>
  </div>

  <script src="../js/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        message: 'hello Vue',
        movies: ['低俗小说', '教父', '活着', '寄生虫']
      }
    })
  </script>
```

1.3. 03-vue案例之计数器

在按钮上绑定v-onclick='add'方法，然后在Vue实例的methods中添加 add: function () {
          console.log('add被执行');
          this.counter++
        }

调用data中的属性需要前面加this

```html
<div id="app">
    <h2>当前计数：{{counter}}</h2>
    <button v-on:click='add'>+</button>
    <button v-on:click='sub'>-</button>

    <h2>{{message}}</h2>
    <button v-on:click="reverseMessage">反转消息</button>
  </div>


  <script src="../js/vue.js"></script>
  <script>
    //proxy
    const obj = {
      counter: 0,
      message: 'Hello Vue'
    }
    const app = new Vue({
      el: '#app',
      data: obj,
      methods: {
        add: function () {
          console.log('add被执行');
          this.counter++
        },
        sub: function () {
          console.log('sub被执行');
          this.counter--
        },
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
      }
    })
  </script>
```

# 2.插值的操作

## 2.1. 01-mustache语法

```html
<div id="app">
    <!-- mustache语法，不仅仅可以直接写变量，也可以写简单的表达式 -->
    <h2>{{message}}</h2>
    <h2>{{firstName+lastName}}</h2>
    <h2>{{firstName+' ' +lastName}}</h2>
    <h2>{{firstName}} {{lastName}}</h2>
    <h2>{{counter /2}}</h2>
  </div>

  <script>
    const app = new Vue({
      el: '#app',
      data: {
        message: 'hello',
        firstName: 'kobe',
        lastName: 'bryant',
        counter: 100
      }
    })
  </script>
```

## 2.2. 02-v-once

```html
 <!-- 该指令后面不需要跟任何表达式（比如之前学的v-for后面是有表达式的） -->
  <!-- 该指令表示元素和组件只会渲染一次，不会随着数据的改变而改变 -->
  <div id="app">
    <h2>{{message}}</h2>
    <h2 v-once>{{message}}</h2>
  </div>
  
  <script>
    const app=new Vue({
      el:'#app',
      data:{
        message:'hello'
      }
    })
  </script>
```

## 2.3. 03-v-html

```html
 <!-- 该指令后面往往会跟上一个string类型 -->
  <!-- 会将string的html解析并且渲染出来 -->
  <div id="app">
      <h2>{{url}}</h2>
      <h2 v-html="url">{{url}}</h2>
  </div>
  
  <script>
    const app=new Vue({
      el:'#app',
      data:{
        message:'hello',
        url:'<a href="www.baidu.com">百度一下</a>'
      }
    })
  </script>
```

## 2.4. 04-v-pre

```html
 <!-- v-pre用于跳过这个元素和子元素的编译过程，用于显示原本的mustache语法 -->
  <div id="app">
    <!-- 显示message里面的内容hello -->
    <h2>{{message}}</h2> 
    <!-- 就直接显示{{message}} ，不进行编译 -->
    <h2 v-pre>{{message}}</h2>
  </div>
  
  <script>
    const app=new Vue({
      el:'#app',
      data:{
        message:'hello'
      }
    })
  </script>
```



## 2.5. 05-v-cloak

这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 `[v-cloak] { display: none }` 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

```html
<style>
    [v-cloak]{
      display: none;
    }
  </style>
<div id="app">
    <h2 v-cloak>{{message}}</h2>
  </div>

  <script>
    setTimeout(() => {
      const app = new Vue({
        el: '#app',
        data: {
          message: 'hello'
        }
      })
    }, 1000);

  </script>
```



## 2.6. 06-v-text

```html
<!-- v-text作用和mustache比较相似，都是将数据显示在界面中 -->
  <!-- v-text通常接收一个stirng类型 -->
  <div id="app">
    <h2>{{message}}</h2>
    <h2 v-text="message"></h2>
  </div>
  
  <script>
    const app=new Vue({
      el:'#app',
      data:{
        message:'hello'
      }
    })
  </script>
```

# 3.动态绑定属性

## 3.1. 01-v-bind的基本使用

```html
<div id="app">
    <img v-bind:src="imgUrl">
    <a v-bind:href="aHref">百度一下</a>

    <!-- 语法糖写法:v-bind可以省略 -->
    <img :src="imgUrl">
    <a :href="aHref">百度一下</a>
  </div>
  
  <script>
    const app=new Vue({
      el:'#app',
      data:{
        message:'hello',
        imgUrl:'https://mat1.gtimg.com/sports/kbsweb4//assets/d96bf5714189dbbde7e5.png',
        aHref:'https://www.baidu.com/'
      }
    })
  </script>
```



## 3.2. 02-v-bind动态绑定class

### 3.2.1.对象语法

```html
<div id="app">
    <h2 :class="{active:isActive,line :isLine}">{{message}}</h2>
    <h2 :class="getClass()">{{message}}</h2>
    <button v-on:click="change">按钮</button>
  </div>

  <script>
    const app = new Vue({
      el: '#app',
      data: {
        message: 'hello',
        isActive: true,
        isLine: true
      },
      methods: {
        change: function () {
          this.isActive = !this.isActive
        },
        getClass: function () {
          return {
            active: this.isActive,
            line: this.isLine
          }
        }
      }
    })
  </script>
```

### 3.2.2.数组语法

```html
<div id="app">
    <h2 :class="[active,line]">{{message}}</h2>
    <h2 :class="getClass()">{{message}}</h2>
  </div>

  <script>
    const app = new Vue({
      el: '#app',
      data: {
        message: 'Kobe',
        active: 'aaa',
        line: 'bbb'
      },
      methods: {
        getClass:function(){
          return [this.active,this.line]
        }
      }
    });
  </script>
```

## 3.3. 03-v-bind动态绑定style

### 3.3.1.对象语法

```html
 <div id="app">
    <!-- <h2 :style="{key(属性名):value(属性值)">{{message}}</h2> -->
    <h2 :style="{fontSize:finalSize +'px',color:finalColor}">{{message}}</h2>
  </div>

  <script>
    const app = new Vue({
      el: '#app',
      data: {
        message:'Kobe Bryant',
        finalSize:100,
        finalColor:'red'
      },
      methods: {}
    });
  </script>
```

### 3.3.2.数组语法

```html
<div id="app">
    <h2 :style="[baseStyle,baseStyle2]">{{message}}</h2>
  </div>

  <script>
    const app = new Vue({
      el: '#app',
      data: {
        message:'Air Jordan',
        baseStyle:{backgroundColor:'red'},
        baseStyle2:{fontSize:'200px'}
      },
      methods: {}
    });
  </script>
```

## 3.4. 作业(v-for和v-bind结合)

```html
<style>
    .active {
      color: red;
    }
  </style>
</head>

<body>
  <div id="app">
    <ul>
      <li :class="{active:index===currentIndex}" @click="changeColor(index)" v-for="(m,index) in movies">{{index}}.{{m}}
      </li>
    </ul>
  </div>

  <script>
    const app = new Vue({
      el: '#app',
      data: {
        movies: ['被解救的姜戈', '低俗小说', '杀死比尔', '无耻混蛋'],
        currentIndex: 0
      },
      methods: {
        changeColor(index) {
          //定义一个参数保存当前索引
          this.currentIndex = index
        }
      }
    });
  </script>
</body>
```





# 4.计算属性

## 4.1. 01-计算属性的基本使用

```html
<div id="app">
    <h2>{{firstName+' '+lastName}}</h2>

    <h2>{{getFullName()}}</h2>

    <!-- 计算属性，后面不需要加() -->
    <h2>{{fullName}}</h2>
  </div>

  <script>
    const app = new Vue({
      el: '#app',
      data: {
        firstName: 'Kobe',
        lastName: 'Bryant'
      },
      // 计算属性
      // methods和计算属性都可以实现我们的功能，但计算属性会进行缓存，如果使用多次，计算属性只会调用一次。
      computed: {
        fullName: function () {
          return this.firstName + ' ' + this.lastName
        }
      },
      methods: {
        getFullName: function () {
          return this.firstName + ' ' + this.lastName
        }
      }
    });
  </script>
```



## 4.2. 02-计算属性的复杂操作

```html
<div id="app">
  <h2>总价格:{{totalPrice}}</h2>
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        books: [{
            id: 1,  
            name: 'java编程思想',
            price: 110
          },
          {
            id: 2,
            name: '鸟哥的私房菜',
            price: 110
          },
          {
            id: 3,
            name: 'spring cloud 微服务实战',
            price: 110
          }
        ]
      },
      //计算属性
      computed: {
        totalPrice: function () {
          let result = 0;
          for (let i = 0; i < this.books.length; i++) {
            result += this.books[i].price
          }
          return result
        }
      }
    });
  </script>
```

## 4.3. 03-计算属性的get/set方法

```html
<div id="app">
    <h2>{{fullname}}</h2>
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        firstName: 'Kobe',
        lastName: 'Bryant'
      },
      computed: {
        //计算属性一般没有set方法
        /* fullname: {
          get: function () {
            return this.firstName + ' ' + this.lastName
          }, */
        
        //计算属性可以简写成一下形式，直接调用了get方法，所以引用的时候不需要加()
        fullname: function () {
          return this.firstName + ' ' + this.lastName
        }

        //set方法一般用不到
        /* set: function (name) {
          const newName=name.split(' ');
          this.firstName=newName[0];
          this.lastName=newName[1];
        } */
      }

    });
  </script>
```



## 4.4. 04-计算属性和methods对比

```html
 <div id="app">
    <h2>{{getFullName()}}</h2>
    <h2>{{getFullName()}}</h2>
    <h2>{{getFullName()}}</h2>
    <h2>{{getFullName()}}</h2>
    <h2>{{fullName}}</h2>
    <h2>{{fullName}}</h2>
    <h2>{{fullName}}</h2>
    <h2>{{fullName}}</h2>

  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        firstName:'Kobe',
        lastName:'James'
      },
      methods: {
        getFullName:function(){
          console.log('methods方法被调用了');
          return this.firstName+' '+this.lastName;
        }
      },
      computed: {
        fullName:function(){
        /* 
          计算属性是基于它们的响应式依赖进行缓存的
          只在相关响应式依赖发生改变时它们才会重新求值
          所以这里只会打印一次
         */          
          console.log('computed方法被调用了');
          return this.firstName+' '+this.lastName;
        }
      }
    });
  </script>
```

# 5.事件监听

## 5.1. 01-v-on的基本使用

```html
<div id="app">
    <h2>{{counter}}</h2>
    <!-- v-on:click普通写法 -->
    <!-- <button v-on:click="increment">+</button> -->
    <!-- <button v-on:click="decrement">-</button> -->

    <!-- v-on:click语法糖写法 -->
    <!-- @click=""  注意没有: -->
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        counter:0
      },
      methods: {
        increment(){
          this.counter++
        },
        decrement(){
          this.counter--
        }
      }
    });
  </script>
```



## 5.2. 02-v-on的参数问题

```html
<div id="app">
    <!-- 1.事件调用的方法没有传递参数，方法后可以不用加() -->
    <button @click="btn1">button1</button>
    <!-- 2.事件定义的时候，写方法时省略了()，但是方法本身需要传递一个参数，
      这个时候，Vue会默认将浏览器产生的event事件对象作为参数传入到方法  -->
    <button @click="btn2('abc')">button2</button>
    <button @click="btn2">button2</button>

    <!-- 3.在方法定义时，我们需要event对象，同时又需要其它对象
    在调用方法时，如何手动获取到浏览器参数的event对象:使用$event -->
    <button @click="btn3('123',$event)">button3</button>
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {},
      methods: {
        btn1() {
          console.log("Vue 无参数传递");
        },
        btn2(abc) {
          console.log("Vue 参数传递", abc);
        },
        btn3(abc,event) {
          console.log("Vue event参数传递",abc,event);
        },
      }
    });
  </script>
```



## 5.3. 03-v-on的修饰符

```html
<div id="app">
    <!-- 1、 .stop修饰符  -->
    <!-- 点解button里的click不会触发div里的click监听 -->
    <div @click="divClick">
      kobebryant
      <button @click.stop="btnClick">按钮</button>
    </div>

    <!-- 2、 .prevent修饰符 -->
    <!-- 提交事件不再重载页面 -->
    <br />
    <form action="baidu">
      <input type="submit" value="submit" @click.prevent="submitValues">
    </form>

    <!--3. .监听某个键盘的键帽-->
    <!--@keyup每当键盘弹起来一次监听一次 .enter只有按下回车后才会监听 -->
    <input type="text" @keyup.enter="keyup">

    <!--4. .once修饰符 按钮只有在第一次点击的时候会监听-->
    <button @click.once="onceClick">onceButton</button>
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {

      },
      methods: {
        divClick() {
          console.log('divClick');
        },
        btnClick() {
          console.log('btnClick');
        },
        submitValues() {
          console.log('submitValue');
        },
        keyup(){
          console.log('keyup');
        },
        onceClick(){
          console.log('onceClick');
        }
      }
    });
  </script>
```

# 6.条件判断

## 6.1. 01-v-if-else-else-if

```html
 <div id="app">
    <h2 v-if="isShow">当isShow为true显示我</h2>
    <h2 v-else>当isShow为false显示我</h2>

    <br/>
    <p v-if="socre>=90">优秀</p>
    <p v-else-if="socre>=80">良好</p>
    <p v-else-if="socre>=60">及格</p>
    <p v-else>不及格</p>
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        isShow:true,
        socre:99
      },
      methods: {}
    });
  </script>
```



## 6.2. 02-用户登录切换案例

```html
<div id="app">
    <!-- 案例小问题:如果我们在有输入内容的情况下，切换了类型，我们会发现文字依然显示之前的输入的内容。 -->
    <!-- 问题分析:这是因为Vue在进行DOM渲染时，出于性能考虑，会尽可能的复用已经存在的元素，而不是重新创建新的元素
                 在下面案例中，Vue内部会发现原来的input元素不再使用，直接作为else中的input来使用了 -->
    <!-- 问题解决:如果我们不希望Vue出现类似复用问题，可以给对应的Input添加Key,并且保证key不相同。 -->
    <span v-if="isUser">
      <label for="username">用户名称</label>
      <input type="text" id="username" placeholder="用户名称" key="username-input">
    </span>
    <span v-else>
      <label for="email">用户邮箱</label>
      <input type="text" id="email" placeholder="用户邮箱" key="email-input">
    </span>
    <button @click="changeState">切换</button>
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        isUser: true
      },
      methods: {
        changeState() {
          this.isUser = !this.isUser
        }
      }
    });
  </script>
```



## 6.3 03-v-show的使用

```html
<div id="app">
    <!-- v-if和v-show区别 -->
    <!-- 当条件为false时，包含v-if的指令根本就不会存在DOM中
         而v-show只是给我们的元素添加了一个行内样式: display:none -->

    <!--v-if和v-show的使用  -->
    <!-- 一般来说,v-if有更高的切换开销，而v-show又更高的初始渲染开销，
         因此，如果需要频繁的切换，则使用v-show，如果在运行时条件很少改变，则使用v-if较好。 -->
    <h2 id="if" v-if="isShow">{{message}}</h2>
    <h2 id="show" v-show="isShow">{{message}}</h2>
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        message:'kobe bryant',
        isShow:true
      },
      methods: {}
    });
  </script>
```

# 7.循环遍历

## 7.1. 01-v-for遍历数组

```html
 <div id="app">
    <!--1、遍历数组无索引  -->
    <ul>
      <li v-for="item in movies">{{item}}</li>
    </ul>

    <!--2、遍历数组加索引  -->
    <ul>
      <li v-for="(item,index) in movies">{{index+1}}{{item}}</li>
    </ul>

    
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        movies: ['低俗小说', '被解救的姜戈', '无耻混蛋', '落水狗'],
        object: {
          name: 'xuriven',
          age: 24,
          height: '183cm'
        }
      },
      methods: {
      }
    });
  </script>
```



## 7.2. 02-v-for遍历对象

```html
<div id="app">
    <!--1、遍历对象，如果只是获取一个值，那么获取到的是value  -->
    <ul>
      <li v-for="value in object">{{value}}</li>
    </ul>

    <!--2、遍历对象加索引和键  -->
    <ul>
      <li v-for="(value,key,index) in object">{{index}}.{{key}}:{{value}}</li>
    </ul>
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        movies: ['低俗小说', '被解救的姜戈', '无耻混蛋', '落水狗'],
        object: {
          name: 'xuriven',
          age: 24,
          height: '183cm'
        }
      },
      methods: {}
    });
  </script>
```



## 7.3. 01-v-for的过程中使用key

```html
<div id="app">
    <!-- 为什么v-for的时候要绑定v-bind:key -->
    <!-- 当Vue正在更新使用v-for渲染的元素列表时，它默认使用"就地更新"的策略，
         如果数据项的顺序被改变，Vue将不会移动DOM元素来匹配数据项的顺序，而是就地更新每个元素 -->
    <!-- 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，提高内部性能，你需要为每项提供一个唯一 key 属性
         而且这个key最好和{{value}}里面的vlaue一一对应，切记不要使用index -->
    <ul>
      <li v-for="item in letters" :key="item">{{item}}</li>
    </ul>
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        letters: ['A', 'B', 'C', 'D', 'E', ]
      },
      methods: {
      }
    });
  </script>
```



# 8.书籍购物车案例

## index.html

```html
<div id="app">
    <div v-if="movies.length">
      <table>
        <thead>
          <th></th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in movies">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.date}}</td>
            <!-- 对价格使用过滤器 -->
            <td>{{item.price | showPrice}}</td>
            <td>
              <button :disabled="item.count <=1"  @click="subBook(index)">-</button>
              {{item.count}}
              <button @click="addBook(index)">+</button>
            </td>
            <td>
              <button @click="removeHandler(index)">移除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>总价格{{totalPrice}}</h2>
    </div>
    <h2 v-else>购物车为空</h2>
  </div>

  <script src="../../../../js/vue.js"></script>
  <script src="main.js"></script>
  <script src="Higher-Order Function.js"></script>
```

## main.js

```javascript
const app = new Vue({
	el: '#app',
	data: {
		movies: [{
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
		showPrice(price) {
			return '￥' + price.toFixed(2)
		}
	},
	methods: {
		subBook(index) {
			this.movies[index].count--
		},
		addBook(index) {
			this.movies[index].count++
		},
		removeHandler(index) {
			this.movies.splice(index, 1)
		}
	},
	computed: {
		totalPrice() {
			// 1.普通的for循环
			/* let result=0; 
			for(let i=0;i<this.movies.length;i++){
				result+=this.movies[i].price * this.movies[i].count
			}
			return result; */


			//2.for(let i in this.movies)
			/* 	let result=0;
				for(let i in this.movies ){
					const book=this.movies[i]
					result+=book.price*book.count
				}
				return result */

			//3.for(let i of this.movies)
			/* let result = 0
			for (let i of this.movies) {
				result += i.price * i.count
			}
			return result */

			// 4.高阶函数
			return this.movies.reduce(function (previousValue, movie) {
				return previousValue + movie.price * movie.count
			}, 0)
		}
	}

})


```

## 高阶函数

```js
/* 
编程范式:命令式编程/声明式编程
编程范式:面向对象编程(第一公民:对象)/函数式编程(:第一公民:函数)
filter/map/reduce
*/

/* 
1、filter
filter中的回调函数有一个要求:必须返回一个boolean值
true:当返回true时，函数内部会自动将这次回调的n加入到新的数组中
false:当返回false时，函数内部会过滤掉这次的n

2、map
对回调函数中传入的n进行操作

3、reduce
reduce作用对数组中所有的内容进行汇总
需要传递两个参数:
  1.第一个参数是一个function,里面也有两个参数(可以传递四个参数)，第一个previousValue是上一次函数中获得的值，第二个是数组里遍历的值
  2.第二个参数是传递给函数的初始值
reduce(fun(previousValue,n){
  return preValue + n
},0)

*/



const nums = [30, 20, 50, 190, 800, 50, 223]
let total = nums.filter(function (n) {
  return n < 100
}).map(function (n) {
  return n * 2
}).reduce(function (previousValue, n) {
  return previousValue + n
}, 0)
console.log(total);
```

# 9.v-model的使用

## 9.1. 01-v-model的基本使用

```html
<div id="app">
    <!-- v-model双向绑定 -->
    <!-- input中值被改了，h2也会跟着改变，相反，改变message值，input也会改变 -->
    <input type="text" v-model="message">
    <h2>{{message}}</h2>
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        message:'kobe bryant'
      },
      methods: {}
    });
  </script>
```



## 9.2. 02-实现v-model的原理

```html
<div id="app">
    <!-- v-model其实是一个语法糖，它的背后实际上有两个操作:
         1、v-bind绑定一个value属性
         2、v-on指令给当前元素绑定input事件
    -->
    <!-- <input type="text" :value="message" @input="change" > -->
    <input type="text" :value="message" @input="$event.target.value">
    <h2>{{message}}</h2>
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        message:'kobe bryant'
      },
      methods: {
        change(event){
          this.message=event.target.value;
        }
      }
    });
  </script>
```



## 9.3. 03-v-model结合radio类型

```html
 <div id="app">
    <!-- 两个radio要是想互斥，需要加两个一样的name属性，如果加了一样的v-model，就不用加name属性了 -->
    <!-- label中for的作用:点击label时会自动聚焦到对应id的input上面 -->
    <label for="male">男</label>
    <input type="radio" id="male" value="男" v-model="sex">
    <label for="female">女</label>
    <input type="radio" id="female" value="女" v-model="sex">
    <h2>{{sex}}</h2>
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        sex: ''
      },
      methods: {}
    });
  </script>
```



## 9.4. 04-v-model结合checkbox类型

```html
<div id="app">
    <label for="agree">
      <input type="checkbox"  id="agree" v-model="isAgree"> 同意协议
    </label>
    <br>
    <button :disabled="!isAgree">next</button>
    <br>
    <input type="checkbox" value="kobe" v-model="name" >kobe
    <input type="checkbox" value="james" v-model="name" >james
    <input type="checkbox" value="rose" v-model="name" >rose
    <input type="checkbox" value="tmac" v-model="name" >tmac
    <input type="checkbox" value="jordan" v-model="name" >jordan
    <h2>你选择的明星有:{{name}}</h2>
    <!-- 值绑定:开发过程中value是服务器传递过来的，不能写死 -->
    <label :for="item" v-for="item in originNames">
      <input type="checkbox" :value="item"  :id="item" v-model="name">{{item}}
    </label>
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        isAgree:false,
        name:[],
        originNames:['kobe','james','jordan','durant','curry','paul']
      },
      methods: {}
    });
  </script>
```



## 9.5. 05-v-model结合select类型

```html
<div id="app">
    <select v-model="name" >
      <option value="kobe">kobe</option>
      <option value="james">james</option>
      <option value="jordan">jordan</option>
      <option value="durant">durant</option>
    </select>
    <h2>你选择的是:{{name}}</h2>


    <select v-model="names" v-model="names" multiple>
      <option value="kobe">kobe</option>
      <option value="james">james</option>
      <option value="jordan">jordan</option>
      <option value="durant">durant</option>
    </select>
    <h2>你选择的是:{{names}}</h2>
  </div>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        name:'kobe',
        names:[]
      },
      methods: {}
    });
  </script>
```



## 9.6. 06-v-model修饰符

```html
<div id="app">
    <!-- lazy修饰符
        默认情况下.v-model默认是在input事件中同步输入框的数据，一旦数据发生改变，对应的data中的数据就会跟着自动改变
        lazy修饰符可以让数据失去焦点或按下回车时才更新
    -->
    <input type="text" v-model.lazy="message">
    <h2>{{message}}</h2>


    <!-- number修饰符
        默认情况下，在输入框中无论我们输入字母还是数字，都会被当作字符串类型进行处理
        如果我们希望处理的是数字类型，那么最好直接将内容当做数字来处理
        number修饰符可以让在输入框中输入的数字自动转成数字类型
    -->
    年龄:<input type="number" v-model.number="age">
    <h2>年龄:{{age}} 类型:{{typeof age}}</h2>

      <!-- trim修饰符
        去掉内容左右两边空格 -->
      <input type="text"  v-model.trim="message">
      <h2>当前内容:----{{message}}----</h2>`
  </div>


  <script>
    const app = new Vue({
      el: '#app',
      data: {
        message: 'kobe',
        age: 0
      },
      methods: {}
    });
  </script>
```



# 10.组件化开发

## 10.1. 01-组件化的基本使用

```html
<div id="app">
    <!-- 3、使用组件
            组件必须挂载在某个vue实例下面，否则不会生效
    -->
    <my-cpn></my-cpn>
  </div>
  <script>
    //1、创建组件构造器
    const cpn=Vue.extend({
      template: `
      <div>
      <h2>组件化的基本使用</h2>
      </div>`
    })
    // 2、注册组件，并且定义组件标签的名称:my-cpn
    Vue.component('my-cpn', cpn)

    const app = new Vue({
      el: '#app',
      data: {},
      methods: {}
    });
  </script>
```



## 10.2. 02-全局组件和局部组件

```html
<div id="app">
    <!-- 3、使用组件
            组件必须挂载在某个vue实例下面，否则不会生效
    -->
    <my-cpn></my-cpn>
    <my-cpn></my-cpn>
  </div>

  <div id="app2">
    <!-- 这里app2不能使用该组件 -->
    <my-cpn></my-cpn>
  </div>
  <script>
    //1、创建组件构造器 
    const cpnC = Vue.extend({
      template: `
      <div>
      <h2>组件化的基本使用</h2>
      </div>`
    })
    // 2、注册组件，并且定义组件标签的名称:my-cpn
    // Vue.component('my-cpn', cpn) //当我们调用Vue.component()注册组件时，组件注册是全局的，这意味	  着该组件可以在任意vue实例下使用

    // 疑问：怎么注册的组件才是局部组件？

    const app = new Vue({
      el: '#app',
      data: {},
      methods: {},
      // 将上面创建的cpn组件挂载在app下面
      components: {
        // 'my=cpn'使用组件时的标签名
        'my-cpn':cpnC 
      }
    });

    const app2=new Vue({
      el:'#app2'
    })
  </script>
```



## 10.3. 03-父组件和子组件

```html
 <div id="app">
    <cpn2></cpn2>
  </div>

  
  <script>
    // 创建一个子组件构造器
    const cpnC1 = Vue.extend({
      template: `
      <div>
      <h2>标题1</h2>
      <p>kobe bryant</p>
      </div>`
    })

    // 创建一个父组件构造器
    const cpnC2 = Vue.extend({
      template: `
      <div>
      <h2>标题2</h2>
      <p>james harden</p>
      <cpn1></cpn1>
      </div>`,
      // 在cpnC2中组测cpnC1，在上方template中使用cpn1标签
      components: {
        cpn1: cpnC1
      }
    })

    // root组件
    const app = new Vue({
      el: '#app',
      data: {},
      methods: {},
      components: {
        cpn2: cpnC2
      }
    });
  </script>
```



## 10.4. 04-组件的语法糖注册方式

```html
<div id="app">
    <cpn1></cpn1>
    <cpn2></cpn2>
  </div>
  <script>
    /* 
    Vue为了简化这个过程，提供了注册的语法糖。
    主要是省去了调用Vue.extend()的步骤，而是可以直接使用一个对象来代替。
    */ 
   
    // 注册全局组件语法糖
    Vue.component('cpn1', {
      template: `
      <div>
        <h2>标题1</h2>
        <p>kobe bryant</p>
     </div>
      `
    })

    // 注册局部组件语法糖
    const app = new Vue({
      el: '#app',
      data: {},
      methods: {},
      components: {
        'cpn2': {
          template: `
      <div>
        <h2>标题2</h2>
        <p>lerbon james</p>
     </div>
      `
        }
      }
    });
  </script>
```



## 10.5. 05-组件模板的分离写法

```html
<div id="app">
    <cpn></cpn>
  </div>
  <!-- 1.script标签，类型必须是 -->
  <script type="text/x-template" id="cpn">
    <div>
      <h2>我是组件模板</h2>
    </div>
  </script>
  
  <!-- 2.使用template标签 -->
  <template id="cpn">
    <div>
      <h2>我是组件模板</h2>
    </div>
  </template>
  <script>
    // 注册一个全局组件
    Vue.component('cpn',{
      // 直接使用template中的id
      template:'#cpn'
    })
    const app = new Vue({
      el: '#app',
      data: {},
      methods: {},
      // 注册局部组件
      components: {
        template:'#cpn'
      }
    });
  </script>
```



## 10.6. 06-组件中的数据存放问题

```html
 <div id="app">
    <cpn></cpn>
  </div>
  <template id="cpn">
    <div>
      <h2>我是一个组件模板</h2>
      <p>我是组件模板里面的数据{{message}}</p>
    </div>
  </template>
  <script>
    Vue.component('cpn', {
      template: '#cpn',
      /* 
      组件对象也有一个data属性，(也可以有methods等属性)
      只是这个data属性必须是一个函数，而且这个函数返回一个对象，对象内部保存着数据
      */
      data() {
        return {
          message: 'kobe bryant'
        }
      }
    })
    const app = new Vue({
      el: '#app',
      data: {
        /* 我们发现不能访问，而且即使可以访问，如果将所有的数据都放在Vue实例中，Vue实例就会变的非常臃肿。 */
        message:'kobe bryant'
      },
      methods: {}
    });
  </script>
```



## 10.7. 07-组件中的data为什么是函数

```html
 <div id="app">
    <cpn></cpn>
  </div>
  <template id="cpn">
    <div>
      <h2>当前计数:{{counter}}</h2>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>    
  </template>
  <script>
    Vue.component('cpn', {
      template:'#cpn',
      /* 
        为什么data在组件中是一个函数？
        1.首先，如果不是一个函数，vue就会直接报错
        2.其次，原因在于vue让每个组件对象都返回一个新的对象，因为如果是同一个对象，组件在多次使用后会相互影响
      */
      data () {
        return {
          counter:0
        }
      },
      methods: {
        increment(){
          this.counter++
        },
        decrement(){
          this.counter--
        }
      }
    })
    const app = new Vue({
      el: '#app',
      data: {},
      methods: {}
    });
  </script>
```

## 10.8. 08-组件通信-父组件向子组件传递数据

```html
<body>
  <div id="app">
    <!-- 必须用v-bind来传递数据，(简写成 :) -->
    <cpn :cmovies='movies' :cmessage='message'></cpn>
  </div>
  <template  id="cpn">
    <div>
      <ul v-for='(movie,index) in cmovies'>
        <li>{{index+1}}.{{movie}}</li>
      </ul>
      <h2>{{cmessage}}</h2>
    </div>
  </template>
  <script>
    const cpn={
      template:'#cpn',
      // 在组件中，使用选项props来声明需要从父级接收到的数据。
      // 方式一:传递字符串数组，数组中的字符串就是传递时的名称
      // props: ['cmessage','cmovies'],

      // 方式二:传递对象，对象可以设置传递时的类型，也可以设置默认值等
      props:{
        // 1.类型限制
        // cmovies:Array,
        // cmessage:String

        // 2.提供一些默认值，以及必传值
        cmessage:{
          type:String,
          required:false,
          default:'default value'
        },
        cmovies:{
          type:Array,
          required:true,
          default(){
            return []
          }
        }
      },
      data () {
        return {}
      },
      methods: {}
    }
    const app = new Vue({
      el: '#app',
      data: {
        message:'kobe bryant',
        movies:['杀死比尔','星际穿越','低俗小说','白日焰火']
      },
      methods: {},
      components: {
        cpn
      }
    });
  </script>
</body>
```

## 10.9. 09-组件通信-父传子(props驼峰标识)

```html
<body>
  <div id="app">
    <!-- 驼峰绑定写法- -->
    <cpn :c-info="info" :my-childe-name-message="message" ></cpn>
  </div>
  
  <template id="cpn">
    <div>
      <h2>{{cInfo}}</h2>
      <h2>{{myChildeNameMessage}}</h2>
    </div>
  </template>

  <script>
    const cpn = {
      template: '#cpn',
      props: {
        cInfo: {
          type: Object,
          default() {
            return {}
          }   
        },
        myChildeNameMessage:{
          type:String,
          default(){
            return{}
          }
        }
        
      }
    }

    const app = new Vue({
      el: '#app',
      data: {
        info: {
          name: 'kobe',
          age: '24',
          location: 'LosAngle'
        },
        message:'Django'
      },
      methods: {},
      components: {
        cpn
      }
    });
  </script>
</body>
```

## 10.10. 10-组件通信-子传父(自定义事件)

```html
<body>
  <div id="app">
    <!-- 在父组件中，通过v-on来监听子组件事件 -->
    <cpn @item-click="cpnClick"></cpn>
  </div>

  <template id="cpn">
    <div>
      <button v-for="item in categories" @click="btnClick(item)">{{item.name}}</button>
    </div>
  </template>
  <script>
    // 1.子组件
    const cpn={
      template:"#cpn",
      data () {
        return {
          categories:[
            {id:'a',name:'热门推荐'},
            {id:'b',name:'家用家电'},
            {id:'c',name:'手机数码'},
            {id:'c',name:'电脑办公'}
          ]
          
        }
      },
      methods: {
        btnClick(item){
          // 子组件向父组件传递值,通过$emit()来触发事件,发送事件名字:item-click,传递的参数:item
          this.$emit('item-click', item)
          console.log(item.name);
        }
      }
    }

    // 2.父组件
    const app = new Vue({
      el: '#app',
      data: {},
      methods: {},
      components: {
        cpn
      },
      methods:{
        // 接受子组件传递过来的item
        cpnClick(item){
          console.log('aa',item);
        }
      }
    });
  </script>
</body>
```

## 10.11. 11-组件通信案例

```html
<body>
  <div id="app">
    <cpn :num1="number1" :num2="number2"
          @num1change="num1change"
          @num2change="num2change"
    />
  </div>
  <template id="cpn">
    <div>
      <h2>prop:{{num1}}</h2>
      <h2>data:{{dNumber1}}</h2>
      <!-- <input type="text" v-model="dNumber1"> -->
      <input type="text" :value="dNumber1" @input="num1Input">

      <h2>prop:{{num2}}</h2>
      <h2>data:{{dNumber2}}</h2>
      <!-- <input type="text" v-model="dNumber1"> -->
      <input type="text"  :value="dNumber2" @input="num2Input" >
    </div>
  </template>
  <script>
    const cpn = {
      template: "#cpn",
      props: {
        num1: Number,
        num2: Number
      },
      data() {
        return {
          dNumber1: this.num1,
          dNumber2: this.num2
        }
      },
      methods:{
        num1Input(event){
          // 1.将input中的value赋值到dnumber中
          this.dNumber1=event.target.value;
          // 2.为了让父组件可以修改值，发出一个事件
          this.$emit('num1change', this.dNumber1)
          // 3.同时修改dnumber2的值
          this.dNumber2=this.dNumber1*100;
          this.$emit('num2change',this.dNumber2)

        },
        num2Input(event){
          this.dNumber2=event.target.value;
          this.$emit('num2change', this.dNumber2)

          this.dNumber1=this.dNumber2/100;
          this.$emit('num1change', this.dNumber1)
        }
      }
    }
    const app = new Vue({
      el: '#app',
      data: {
        number1: 1,
        number2: 2
      },
      methods: {
        num1change(value){
          this.number1=parseInt(value)
        },
        num2change(value){
          this.number2=parseInt(value)
        }
      },
      components: {
        cpn
      }
    });
  </script>
</body>
```

## 10.12. 12-组件访问-父访问子-children-refs

```html
<body>
  <div id="app">
    <cpn></cpn>
    <cpn></cpn>
    <!-- 添加ref属性 -->
    <cpn ref="cpn3"></cpn>
    <button @click="btnClick">按钮</button>
  </div>
  <template id="cpn">
    <div>
      <h2>我是子组件</h2>
    </div>
  </template>
  <script>
    const cpn={
      template:"#cpn",
      methods:{
        showMessage(){
          console.log('showMessage');
        }
      },
      data () {
        return {
          name:"我是子组件name"
        }
      }
    }
    const app = new Vue({
      el: '#app',
      data: {},
      methods: {
        btnClick(){
          /* 
          1.this.$children
          $children的缺陷：
          通过$children访问子组件时，是一个数组类型，访问其中的子组件必须通过索引值。
          但是当子组件过多，我们需要拿到其中一个时，往往不能确定它的索引值，甚至还可能会发生变化。
          有时候，我们想明确获取其中一个特定的组件，这个时候就可以使用$refs
          */
          // console.log(this.$children[2].name);


          /* 
          2.this.$refs
          $refs和ref指令通常是一起使用的。
          首先，我们通过ref给某一个子组件绑定一个特定的ID。
          其次，通过this.$refs.ID就可以访问到该组件了。
          */
          console.log(this.$refs.cpn3.name);
        }
      },
      components: {
        cpn
      }
    });
  </script>
</body>

```

## 10.13 13-组件访问-子访问父-parent-root(不常用)

```html
<body>
  <div id="app">
    <cpn></cpn>
  </div>
  <template id="cpn">
    <div>
      <ccpn></ccpn>
    </div>
  </template>
  <template id="ccpn">
    <div>
      <h2>我是子组件</h2>
      <button @click="btnClick">按钮</button>
    </div>
  </template>
  <script>
    
    const ccpn={
      template:"#ccpn",
      methods: {
        btnClick(){
          // 访问父组件this.$parent
          console.log(this.$parent);
          console.log(this.$parent.name);
          // 访问根组件this.$root
          console.log(this.$root.name);
          
        }
      }
    }
    const cpn={
      template:"#cpn",
      data () {
        return {
          name:"我是子组件Name"  
        }
      },
      methods: {},
      components: {
        ccpn
      }
    }
    
    const app = new Vue({
      el: '#app',
      data: {
        name:'我是父组件name'
      },
      methods: {},
      components: {
        cpn
      }
    });
  </script>
</body>
```

















