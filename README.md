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
    <!-- 
        这个指令保持在元素上直到关联实例结束编译。
        和 CSS 规则如 [v-cloak] { display: none } 一起用时，
        这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。
     -->
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
        // 接收子组件传递过来的item
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



# 11.组件化高级

## 11.1. 01-slot-插槽的基本使用

```html
<body>
  <div id="app">
    <cpn>
      <!-- 这里在cpn模板里加个button，则这个button会代替slot标签，显示在页面 -->
      <button>按钮</button>
    </cpn>
    <cpn></cpn>
    <cpn></cpn>
  </div>
  <!-- template里面最外层一定要加个div标签 -->
  <template id="cpn">
    <div>
      <h2>我是组件</h2>
      <!-- 在子组件中，使用特殊的元素<slot>就可以为子组件开启一个插槽。
           该插槽插入什么内容取决于父组件如何使用。
           <slot>中的内容表示，如果没有在该组件中插入任何其他内容，就默认显示该内容
      -->
      <slot>我是插槽中默认显示的内容</slot>
    </div>
  </template>
  <script>
    const cpn = {
      template: "#cpn"
    }
    const app = new Vue({
      el: '#app',
      data: {},
      methods: {},
      components: {
        cpn
      }
    });
  </script>
</body>
```



## 11.2. 02-slot-具名插槽的使用

```html
<body>
  <div id="app">
    <cpn>
      <button slot="center">标题</button>
    </cpn>
    <cpn>
      <!-- 在需要替换的标签上指定slot的名字 -->
      <h2 slot="left">替换左边内容</h2>
      <h2 slot="right">替换右边内容</h2>
    </cpn>
    
  </div>
  <template id="cpn">
    <div>
      <h2>我是组件</h2>
      <!-- 只要给slot元素一个name属性即可 -->
      <slot name='left'>左边</slot>
      <slot name='center'>中间</slot>
      <slot name='right'>右边</slot>
    </div>
  </template>
  <script>
    const cpn = {
      template: "#cpn"
    }
    const app = new Vue({
      el: '#app',
      data: {},
      methods: {},
      components: {
        cpn
      }
    });
  </script>
</body>
```



## 11.3. 03-什么是编译的作用域

```html
<body>
  <!-- 父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译。 -->
  <div id="app">
    <!-- 父组件里面使用isShow属性，虽然是在cpn模板上，但是也只调用父组件实例里的isShow属性 -->
    <cpn v-show="isShow"></cpn>
  </div>
  <template id="cpn">
    <div>
      <h2>我是模板</h2>
      <!-- 子模板里调用isShow属性，使用的是自己的isShow属性 -->
      <button v-show="isShow"></button>
    </div>

  </template>
  <script>
    const cpn = {
      template: '#cpn',
      data() {
        return {
          isShow: false
        }
      }
    }
    const app = new Vue({
      el: '#app',
      data: {
        isShow: true
      },
      methods: {},
      components: {
        cpn
      }
    });
  </script>
</body>
```



## 11.4. 04-作用域插槽案例

```html
<body>
  <div id="app">
    <cpn>
      <!-- 父组件替换插槽的标签，但是内容由子组件来提供。 -->
      <template slot-scope='slot'>
        <span v-for="item in slot.data">{{item}} -</span>
        <span v-for="item in slot.abc">{{item}} * -</span>
        <!-- <span>{{slot.data.join(' * ')}}</span> -->
      </template>
    </cpn>
  </div>
  <template id="cpn">
    <div>
      <!-- 这个data可以随便取名，也可以叫abc,那上面就要改成slot.abc -->
      <slot :data="pLanguages">
        <ul>
          <li v-for="item in pLanguages">{{item}}</li>
        </ul>
      </slot>

      <slot :abc="pLanguages">
        <ul>
          <li v-for="item in pLanguages">{{item}}</li>
        </ul>
      </slot>
    </div>
  </template>
  <script>
    const cpn={
      template:'#cpn',
      data () {
        return {
          pLanguages:['JS','java','C#','C++','GO']
        }
      }
    }
    const app = new Vue({
      el: '#app',
      data: {

      },
      methods: {},
      components: {
        cpn 
      }
    });
  </script>
</body>

```



# 12.前端模块化

## 12.1. 01-ES6的模块化

index.html

```html
<body>
<script src="aaa.js" type="module"></script>
<script src="bbb.js" type="module"></script>
<script src="mmm.js" type="module"></script>
</body>
```

aaa.js

```js
var name = '小明'
var age = 18
var flag = true

function sum(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(20, 30));
}

// 1.导出方式一:
export {
  flag, sum
}

// 2.导出方式二:
export var num1 = 1000;
export var height = 1.88


// 3.导出函数/类
export function mul(num1, num2) {
  return num1 * num2
}

export class Person {
  run() {
    console.log('在奔跑');
  }
}

/*
注意:export default在同一个模块中，不允许同时存在多个。
 5.export default
const address = '北京市'
export {
  address
}
export const address = '北京市'
const address = '北京市'

export default address
 */

export default function (argument) {
  console.log(argument);
}


```

bbb.js

```js
import {sum} from './aaa.js'

var name = '小红'
var flag = false

console.log(sum(100, 200));
```

mmm.js

```js
// 1.导入的{}中定义的变量
import {flag, sum} from "./aaa.js";

if (flag) {
  console.log('小明是天才, 哈哈哈');
  console.log(sum(20, 30));
}

// 2.直接导入export定义的变量
import {num1, height} from "./aaa.js";

console.log(num1);
console.log(height);

// 3.导入 export的function/class
import {mul, Person} from "./aaa.js";

console.log(mul(30, 50));

const p = new Person();
p.run()

// 4.导入 export default中的内容
import addr from "./aaa.js";

addr('你好啊');

// 5.统一全部导入
// import {flag, num, num1, height, Person, mul, sum} from "./aaa.js";

import * as aaa from './aaa.js'

console.log(aaa.flag);
console.log(aaa.height);
```



# 13.webpack的使用

## 13.1. 01-webpack的起步

**什么是webpack**

从本质上来讲，webpack是一个现代的JavaScript应用的静态模块打包工具，通俗点说就是模块 和 打包。

**打包如何理解呢？**

* 理解了webpack可以帮助我们进行模块化，并且处理模块间的各种复杂关系后，打包的概念就非常好理解了。
* 就是将webpack中的各种资源模块进行打包合并成一个或多个包(Bundle)。
* 并且在打包的过程中，还可以对资源进行处理，比如压缩图片，将scss转成css，将ES6语法转成ES5语法，将TypeScript转成JavaScript等等操作。

**准备工作**

**文件和文件夹解析：**

* dist文件夹：用于存放之后打包的文件
* src文件夹：用于存放我们写的源文件
  * main.js：项目的入口文件。具体内容查看下面详情。
  * mathUtils.js：定义了一些数学工具函数，可以在其他地方引用，并且使用。具体内容查看下面的详情。
* index.html：浏览器打开展示的首页html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
   <!-- 
    bundle.js文件，是webpack处理了项目直接文件依赖后生成的一个js文件，我们只需要将这个js文件在index.html中引入即可
    webpack ./src/main.js ./dist/bundle.js 
  -->
  <script src="./dist/bundle.js"></script>

```

* package.json：通过npm init生成的，npm包管理的文件

```json
{
  "name": "meetwebpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^3.6.0"
  }
}

```

* mathUtils.js文件中的代码：

```js
function add(num1, num2) {
  return num1 + num2
}

function mul(num1, num2) {
  return num1 * num2
}

module.exports={
  add,mul
}
```

* main.js文件中的代码：

```js
// 1.使用commonjs模块化规范
const {add,mul}=require('./mathUtils.js')
console.log(add(10,20));
console.log(mul(10,20));


// 2.使用ES6模块化规范
import {name,age,height} from "./info"
console.log(name);
console.log(age);

```



## 13.2. 02-webpack的配置

**入口和出口**

我们考虑一下，如果每次使用webpack的命令都需要写上入口和出口作为参数，就非常麻烦，有没有一种方法可以将这两个参数写到配置中，在运行时，直接读取呢？当然可以，就是创建一个webpack.config.js文件。

```js
const path=require('path')
module.exports={
  // 人口:可以是字符串/对象/数组，这里我们入口只有一个，所有写一个字符串即可
  entry:'./src/main.js',
  // 出口:通常是一个对象，里面至少包含两个重要属性，path和filename
  output:{
    path:path.resolve(__dirname,'dist'),//注意:path通常是一个绝对路径
    filename:'bundle.js'
  },
}
```

**局部安装webpack**

* 目前，我们使用的webpack是全局的webpack，如果我们想使用局部来打包呢？
  * 因为一个项目往往依赖特定的webpack版本，全局的版本可能很这个项目的webpack版本不一致，导出打包出现问题。
  * 所以通常一个项目，都有自己局部的webpack。
* 第一步，项目中需要安装自己局部的webpack（npm install webpack@3.6.0 --save-dev）
* 第二步，通过node_modules/.bin/webpack启动webpack打包 

**package.json中定义启动**

* 但是，每次执行都敲这么一长串有没有觉得不方便呢？

  * OK，我们可以在package.json的scripts中定义自己的执行脚本。

* package.json中的scripts的脚本在执行时，会按照一定的顺序寻找命令对应的位置。在里面添加一条"build": "webpack"

  ```json
  {
    "name": "meetwebpack",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^3.6.0"
    }
  }

  ```

  ​

  * 首先，会寻找本地的node_modules/.bin路径中对应的命令。
  * 如果没有找到，会去全局的环境变量中寻找。
  * 如何执行我们的build指令呢？(npm run build)

****

## **13.3**. 03-webpack的loader

**什么是loader?**

* loader是webpack中一个非常核心的概念。
* webpack用来做什么呢？
  * 在我们之前的实例中，我们主要是用webpack来处理我们写的js代码，并且webpack会自动处理js之间相关的依赖。
  * 但是，在开发中我们不仅仅有基本的js代码处理，我们也需要加载css、图片，也包括一些高级的将ES6转成ES5代码，将TypeScript转成ES5代码，将scss、less转成css，将.jsx、.vue文件转成js文件等等。
  * 对于webpack本身的能力来说，对于这些转化是不支持的。那怎么办呢？给webpack扩展对应的loader就可以啦。
* loader使用过程：
  * 步骤一：通过npm安装需要使用的loader
  * 步骤二：在webpack.config.js中的modules关键字下进行配置



**main.js**

```js
// 1.使用commonjs模块化规范
const {add,mul}=require('./js/mathUtils')
console.log(add(10,20));
console.log(mul(10,20));


// 2.使用ES6模块化规范
import {name,age,height} from "./js/info"
console.log(name);
console.log(age);

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')
document.writeln('<h2>hello kobe</h2>')
```

**webpack.config.js**

```js
const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 在url前面加上对应的路径
    publicPath:'dist/'
  },
  module: {
    rules: [
      /* 
      css-loader只负责css文件加载
      style-loader负责将样式添加到DOM中
      使用多个loader时，是从右向左读取的 
      */
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }]
      },

      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            /* 
            1.图片大小小于limit:
            发现背景图是通过base64显示出来的
            这也是limit属性的作用，当图片小于13kb时，对图片进行base64编码

            2.图片大小大于limit
            如果大于13kb呢？会通过file-loader进行处理，但是我们的项目中并没有file-loader,所以，我们需要安装file-loader
            
            3.图片文件处理 – 修改文件名称
            我们可以在options中添加上如下选项：
            img：文件要打包到的文件夹
            name：获取图片原来的名字，放在该位置
            hash:8：为了防止图片名称冲突，依然使用hash，但是我们只保留8位
            ext：使用图片原来的扩展名
            */
            limit: 13000,
            name:'img/[name].[hash:8].[ext]'
          }
          
        }]
      }
    ]
  }
}
```



## **13.4**. 04-webpack配置Vue

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
   <!-- 这里的app会被template模板里的内容替换掉 -->
  <div id="app">
    
  </div>
  </body>

```



main.js

```js
// 5.使用Vue进行开发
/*
  1.el和template模板的关系是什么呢？
    在我们之前的学习中，我们知道el用于指定Vue要管理的DOM，可以帮助解析其中的指令、事件监听等等。
    而如果Vue实例中同时指定了template，那么template模板的内容会替换掉挂载的对应el的模板。
  2.这样做有什么好处呢？
    这样做之后我们就不需要在以后的开发中再次操作index.html，只需要在template中写入对应的标签即可
 */
import Vue from 'vue'
// import cpn from './vue/cpn'
import cpn from './vue/Cpn.vue'
new Vue({
  template: '<cpn/>',
  el: '#app',
  data: {},
  components: {
    cpn
  }
})
```

Cpn.vue

```vue
<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button>按钮</button>
    <h2>{{name}}</h2>
    <App/>
    </div>
</template>

<script>

/* 
这里面不能简写，要写App.vue
若想简写，需要在webpack.config.js的resolve中配置extensions:['.js'.'.vue']
*/
import App from './App.vue'

export default {
  data() {
    return {
      message: 'kobe',
      name: 'james'
    }
  },
  components: {
    App
  }
}
</script>

<style>
  .title{
    color: green
  }
</style>
```

App.vue

```vue
<template>
<div>
  <h2>我是App组件标题</h2>
  <p>我是App组件内容</p>
  <h2>{{name}}</h2>
</div>
</template>

<script>
export default {
  data () {
    return {
      name:'我是App组件name'
    }
  }
}
</script>

<style>

</style>
```



# 14.箭头函数

## 14.1. 01-箭头函数的基本使用

```html
<body>
  <script>
    // 1.定义函数的方式:function
    const fun1 = function () {

    }

    // 2.对象字面量中定义函数
    const obj = {
      fun2() {

      }
    }

    // 2.ES6中的箭头函数
    // const fun3=(参数列表) =>{

    // }
    const fun3 = () => {
      
    }

    fun3();
  </script>
</body>
```



## 14.2. 02-箭头函数参数和返回值

```html
<body>
  <script>
    // 1.参数问题
    // 1.1.传递两个参数
    const sum = (num1, num2) => {
      return num1 + num2
    }

    // 1.2.传递一个参数(参数的括号可以省略)
    const power = num => {
      return nmu * num
    }


    // 2.函数中
    // 2.1.函数代码块中有多个代码时
    const test = () => {
      console.log('kobe');
      console.log('james');
    }

    // 2.2.函数代码块中只有一行代码时(可以省略花括号和return)
    // const mul = (num1, num2) => {
    //   return num1 * num2
    // }
    const mul = (num1, num2) => num1 * num2


    // const demo = () => {
    //   console.log('hello world');
    // }
    const demo = () => console.log('hello wold');
  </script>
</body>
```



## 14.3. 03-箭头函数中this的使用

```html
<body>

  <script>
    /* 
    什么时候使用箭头函数?
    一般在一个函数中套用另外一个函数时会使用
     */
    setTimeout(function () {
      console.log(this); // window
    }, 1000);
    setTimeout(() => {
      console.log(this); // window
    }, 1000);

    /* 
    问题:箭头函数中的this时如何查找的？
    答案:向外层作用域中，一层层查找this,直到有this的定义。
    */
    const obj = {
      fun1() {
        setTimeout(function () {
          console.log(this); //window
        });

        setTimeout(() => {
          console.log(this); //obj对象
        })
      }
    }

    const obj2 = {
      fun1() {
        setTimeout(function () {
          setTimeout(function () {
            console.log(this); //window
          })

          setTimeout(() => {
            console.log(this); //window
          })

        })

        setTimeout(() => {
          setTimeout(function () {
            console.log(this); //window
          })

          setTimeout(() => {
            console.log(this); //obj对象
          })
        })
      }
    }
  </script>


</body>
```



# 15.vue-router详解

## 15.1. 01-认识路由

**后端路由阶段**

* 早期的网站开发整个HTML页面是由服务器来渲染的。
  * 服务器直接生产渲染好对应的HTML页面, 返回给客户端进行展示。
* 但是, 一个网站, 这么多页面服务器如何处理呢?
  * 一个页面有自己对应的网址, 也就是URL.
  * URL会发送到服务器, 服务器会通过正则对该URL进行匹配, 并且最后交给一个Controller进行处理.
  * Controller进行各种处理, 最终生成HTML或者数据, 返回给前端.
  * 这就完成了一个IO操作。
* 上面的这种操作, 就是后端路由.
  * 当我们页面中需要请求不同的路径内容时, 交给服务器来进行处理, 服务器渲染好整个页面, 并且将页面返回给客户端
  * 这种情况下渲染好的页面, 不需要单独加载任何的js和css, 可以直接交给浏览器展示, 这样也有利于SEO的优化.
* 后端路由的缺点:
  * 一种情况是整个页面的模块由后端人员来编写和维护的.
  * 另一种情况是前端开发人员如果要开发页面, 需要通过PHP和Java等语言来编写页面代码.
  * 而且通常情况下HTML代码和数据以及对应的逻辑会混在一起, 编写和维护都是非常糟糕的事情.

**前端路由阶段**

* 前后端分离阶段：
  * 随着Ajax的出现, 有了前后端分离的开发模式.
  * 后端只提供API来返回数据, 前端通过Ajax获取数据, 并且可以通过JavaScript将数据渲染到页面中.
  * 这样做最大的优点就是前后端责任的清晰, 后端专注于数据上, 前端专注于交互和可视化上.
  * 并且当移动端(iOS/Android)出现后, 后端不需要进行任何处理, 依然使用之前的一套API即可.
  * 目前很多的网站依然采用这种模式开发.
* 单页面富应用阶段:
  * 其实SPA最主要的特点就是在前后端分离的基础上加了一层前端路由.
  * 也就是前端来维护一套路由规则.
* 前端路由的核心是什么呢？
  * 改变URL，但是页面不进行整体的刷新



# 15.2. 02-认识vue-router

**安装和使用vue-router**

* 因为我们已经学习了webpack, 后续开发中我们主要是通过工程化的方式进行开发的.
  * 所以在后续, 我们直接使用npm来安装路由即可.
  * 步骤一: 安装vue-router
    * npm install vue-router --save
  * 步骤二: 在模块化工程中使用它(因为是一个插件, 所以可以通过Vue.use()来安装路由功能)
    * 第一步：导入路由对象，并且调用 Vue.use(VueRouter)
    * 第二步：创建路由实例，并且传入路由映射配置
    * 第三步：在Vue实例中挂载创建的路由实例
* 使用vue-router的步骤:
  * 第一步: 创建路由组件
  * 第二步: 配置路由映射: 组件和路径映射关系
  * 第三步: 使用路由: 通过<router-link>和<router-view>



**创建router实例index.js**

```js
//配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'


// import Home from '../components/Home';
// import About from '../components/About';
// import User from '../components/User';

//通过懒加载方式导入
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象,配置映射关系
const routes = [

  {
    // 设置路由的默认路径
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children:[
      {
        path:'',
        redirect: 'homeNews'
      },
      {
        // 路由嵌套里的路径不需要加/
        path:'homeNews',
        component:HomeNews
      },
      {
        path:'homeMessage',
        component:HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,

  /* 
    我们前面说过改变路径的方式有两种:
    URL的hash
    HTML5的history
    默认情况下, 路径的改变使用的URL的hash.
    如果希望使用HTML5的history模式, 非常简单, 进行如下配置即可:  
  */
  mode: 'history',
  linkActiveClass: 'active'
})

// 3.将router对象传入到Vue实例
export default router

```

**挂载到Vue实例中main.js**

```js
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

```

**创建路由组件**

**about.vue**

```vue
<template>
  <div>
    <h2>关于</h2>
    <p>kobe bryant</p>
  </div>
</template>

<script>
export default {
  name :'About'
}
</script>

<style>

</style>
```

**home.vue**

```vue
<template>
  <div>
    <h2>主页</h2>
    <p>jordan</p>
    <router-link to='/home/homeNews'>新闻</router-link>
    <router-link to='/home/homeMessage'>消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name :'Home'
}
</script>

<style>

</style>
```

**user.vue**

```vue
<template>
  <div>
    <h2>个人中心</h2>
    <p>你好{{userId}}</p>
    <p>你好{{$route.params.userId}}</p>
  </div>
</template>

<script>
export default {
  name:'User',
  computed: {
    userId(){
      return this.$route.params.userId  
    }
  }
}
</script>

<style>

</style>
```

**homeMessage.vue**

```vue
<template>
  <div>
    <ul>
      <li>你有一份权益待领取</li>
      <li>送你一张5元兰博基尼抵用券</li>
      <li>集齐五福可分2元</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeMessage'
}
</script>

```

**homeNews.vue**

```vue
<template>
  <div>
    <ul>
      <li>布克39分</li>
      <li>许尔特准绝杀</li>
      <li>弗兰西斯出售豪宅</li>
      <li>开拓者国王交易</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeNews'
}
</script>

```

**Profile.vue**

```vue
<template>
  <div>
    <h2>我是Profile</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h2>{{$route.query.height}}</h2>
  </div>
</template>

<script>
export default {
  name:'Profile'
}
</script>

```

**使用路由**

```vue
<template>
  <div id="app">
    <!-- router-link:
    该标签是一个vue-router中已经内置的组件, 它会被默认渲染成一个<a>标签. 

    <roter-link>还有其他一些属性:
    1.tag: tag可以指定<router-link>之后渲染成什么组件, 比如上面的代码会被渲染成一个<button>元素, 而不是<a>
    2.replace: replace不会留下history记录, 所以指定replace的情况下, 后退键返回不能返回到上一个页面中
    3.active-class: 当<router-link>对应的路由匹配成功时, 会自动给当前元素设置一个router-link-active的class,
    -->

    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="'/user/'+userId" tag="button">个人中心</router-link>

    <!-- 通过:to传递参数 -->
    <!-- <router-link :to="{path:'/profile',query:{name:'xuriven',age:23,height:'1.83m'}}" tag="button">档案</router-link> -->

    <!-- 通过代码方式传递参数 -->
    <button @click="profileClick">档案</button>

    <!-- router-view:
    该标签会根据当前的路径, 动态渲染出不同的组件.
    -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "kobe"
    };
  },
  methods: {
    linkToHome() {
      this.$router.push("/home");
    },
    linkToAbout() {
      this.$router.push("/about");
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "xuriven",
          age: "23",
          height: "1.83m"
        }
      });
    }
  }
};
</script>

<style>
.active {
  color: red;
}
</style>

```













