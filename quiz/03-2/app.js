
var cmp = {
  template: '<p>This is another child local component</p>'
}

// 실습 #1 - `todo-footer` 컴포넌트 전역 등록
// <p>This is another child global component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.

Vue.component('todo-footer', {
  template: '<p>This is another child global component</p>'
});

var app1 = new Vue({
  el: '#app1',
  data: {
    message : 'This is a parent component'
  },

  // 실습 #2 - `todo-list` 컴포넌트 지역 등록
  // <p>This is another child local component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
  components: {
  		'todo-list': cmp
  	}

});
