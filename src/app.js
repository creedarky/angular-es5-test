//Sublime snippets used in the video: https://gist.github.com/johnlindquist/252f29e087219be7e11a
function Clicker(){
  this.clickCounter = 0;
  this.x = 0;
  this.y = 0;
  this.customCounter = 0;

  this.onClick = function onClick(){
    this.clickCounter++;
  };

  this.onMouseMove = function onMouseMove(event){
    this.x = event.x;
    this.y = event.y;
  };

  this.onCustom = function() {
    this.customCounter++;
  };

  var button = document.querySelector("#button");
  setInterval(function() {

    button.dispatchEvent(new Event("custom"));

  }, 1000);

}
Clicker.annotations = [
  new angular.ComponentAnnotation({
    selector: "clicker"
  }),
  new angular.ViewAnnotation({
    template: '<div>\
          <button id="button" (mousemove)="onMouseMove($event)" (custom)="onCustom()" (click)="onClick()">{{clickCounter}}</button>\
          {{x}}, {{y}}\
          {{customCounter}}\
        </div>'
  })
];

//function InputBinding() {
//  var inputBinding = this;
//  inputBinding.text = '';
//  inputBinding.customEventCount = 0;
//
//  var input = document.querySelector("#input");
//  setInterval(function() {
//
//    input.dispatchEvent(new Event("custom"));
//
//  }, 1000);
//
//  inputBinding.keyUp = function(value) {
//    inputBinding.text = value;
//  };
//
//  inputBinding.custom = function() {
//    inputBinding.customEventCount++;
//  };
//
//
//}
//
//InputBinding.annotations = [
//  new angular.ComponentAnnotation({
//    selector: "input-binding"
//  }),
//  new angular.ViewAnnotation({
//    template: '<div>' +
//        '<label>Input text</label>' +
//        '<input id="input" type="text" #ref (custom)="custom()" value="" (onkeyup)="keyUp(ref)"> ' +
//        '<hr/>' +
//        '<h1 [style.color]="ref.value">' +
//        'value = {{#ref.value}}<br/>' +
//        'this.text= {{text}}<br/>' +
//        'this.customeventCount = {{customEventCount}}<br/></h1>' +
//      '</div>'
//  })
//
//
//];

function App(){}
App.annotations = [
  new angular.ComponentAnnotation({
    selector: "app"
  }),
  new angular.ViewAnnotation({
    directives: [Clicker],
    template: '<div>\
          <h1>App</h1>\
          <clicker></clicker><br/>  \
        </div>'
  })
];

document.addEventListener("DOMContentLoaded", function(){
  angular.bootstrap(App);
});