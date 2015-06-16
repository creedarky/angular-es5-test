// INITIAL
function App(){}
App.annotations = [
  new angular.ComponentAnnotation({
    selector: "app"
  }),
  new angular.ViewAnnotation({
    template: '<div>' +
          '<h1>App</h1>' +
        '</div>'
  })
];

document.addEventListener("DOMContentLoaded", function(){
  angular.bootstrap(App);
});



// Render data
//
//function App(){
//  this.text = 'Hello world'
//}
//App.annotations = [
//  new angular.ComponentAnnotation({
//    selector: "app"
//  }),
//  new angular.ViewAnnotation({
//    template: '<div>' +
//          '<h1>App</h1>' +
//          '<h1>{{ text }}</h1>' +
//        '</div>'
//  })
//];

// Change detection

//function App(){
//  var app = this;
//  app.text = 'Hello world';
//  app.counter = 0;
//  setInterval(function() {
//    app.counter++;
//  }, 1000);
//}
//App.annotations = [
//  new angular.ComponentAnnotation({
//    selector: "app"
//  }),
//  new angular.ViewAnnotation({
//    template: '<div>'+
//          '<h1>App</h1>' +
//          '<h1>text: {{ text }} counter: {{ counter }}</h1>' +
//        '</div>'
//  })
//];


// Subcomponent
//
//function Subcomponent(){
//
//}
//Subcomponent.annotations = [
//  new angular.ComponentAnnotation({
//    selector: "subcomponent"
//  }),
//  new angular.ViewAnnotation({
//    template: '<div>' +
//          '<h2>This is another component</h2>' +
//        '</div>'
//  })
//];
//
//
//
//function App(){
//  var app = this;
//  app.text = 'Hello world';
//  app.counter = 0;
//  setInterval(function() {
//    app.counter++;
//  }, 1000);
//}
//App.annotations = [
//  new angular.ComponentAnnotation({
//    selector: "app"
//  }),
//  new angular.ViewAnnotation({
//    directives: [Subcomponent],
//    template: '<div>' +
//          '<h1>App</h1>' +
//          '<h1>text: {{ text }} counter: {{ counter }}</h1>' +
//          '<hr />' +
//          '<subcomponent></subcomponent>' +
//        '</div>'
//  })
//];


// Events

//function Clicker(){
//  this.clickCounter = 0;
//  this.x = 0;
//  this.y = 0;
//  this.customCounter = 0;
//
//  this.onClick = function onClick(){
//    this.clickCounter++;
//  };
//
//  this.onMouseMove = function onMouseMove(event){
//    this.x = event.x;
//    this.y = event.y;
//  };
//
//}
//Clicker.annotations = [
//  new angular.ComponentAnnotation({
//    selector: "clicker"
//  }),
//  new angular.ViewAnnotation({
//    template: '<div>' +
//          '<button id="button" (mousemove)="onMouseMove($event)" (click)="onClick()">Click me</button>' +
//          'position: {{x}}, {{y}} ' +
//          'clickCounter: {{clickCounter}}' +
//        '</div>'
//  })
//];
//
//
//
//function App(){}
//App.annotations = [
//  new angular.ComponentAnnotation({
//    selector: "app"
//  }),
//  new angular.ViewAnnotation({
//    directives: [Clicker],
//    template: '<div>' +
//          '<h1>App</h1>' +
//          '<clicker></clicker><br/>' +
//        '</div>'
//  })
//];


// Custom Events
//function Clicker(){
//  this.clickCounter = 0;
//  this.x = 0;
//  this.y = 0;
//  this.customCounter = 0;
//
//  this.onClick = function onClick(){
//    this.clickCounter++;
//  };
//
//  this.onMouseMove = function onMouseMove(event){
//    this.x = event.x;
//    this.y = event.y;
//  };
//
//  this.onCustom = function() {
//    this.customCounter++;
//  };
//
//  var button = document.querySelector("#button");
//  setInterval(function() {
//    button.dispatchEvent(new Event("custom"));
//  }, 1000);
//
//}
//Clicker.annotations = [
//  new angular.ComponentAnnotation({
//    selector: "clicker"
//  }),
//  new angular.ViewAnnotation({
//    template: '<div>' +
//          '<button id="button" (mousemove)="onMouseMove($event)" (custom)="onCustom()" (click)="onClick()">Click me</button>' +
//          'position: {{x}}, {{y}} ' +
//          'clickCounter: {{clickCounter}} ' +
//          'customCounter: {{ customCounter}}' +
//        '</div>'
//  })
//];
//
//
//
//function App(){}
//App.annotations = [
//  new angular.ComponentAnnotation({
//    selector: "app"
//  }),
//  new angular.ViewAnnotation({
//    directives: [Clicker],
//    template: '<div>\
//          <h1>App</h1>\
//          <clicker></clicker><br/>  \
//        </div>'
//  })
//];
//
