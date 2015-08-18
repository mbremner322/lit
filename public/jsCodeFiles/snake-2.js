var JS_SNAKE= {};//JS_SNAKEというグローバル変数
JS_SNAKE.game = (function() {//JS_SNAKEのなかにobjectを作る
  var ctx;//変数ctxをイニシャライズ
  var xPosition = 0;//一番最初のxポジション
  var yPosition = 0;//一番最初のyポジション
  var frameLength = 500;//一つのフレームの長さ（ミリ秒）
  function init() {//initの関数
    $('body').append('<canvas id="jsSnake">');//htmlにcanvasエレメント追加
    $canvas = $('#jsSnake');//jQueryの変数$canvasを作る
    $canvas.attr('width',200);//canvas の横の長さを200に設定
    $canvas.attr('height',200);//canvas の縦の長さを200に設定
    var canvas = $canvas[0];//jQueryでcanvasのDOMを選択
    ctx = canvas.getContext('2d');//canvasを２dに設定
    gameLoop();//gameLoopをよぶ
  }// 
  function gameLoop() {//gameLoop関数
    xPosition += 2;//xポジションを２ピクセル右に動かす
    yPosition += 4;//yポジションを４ピクセルしたに動かす
    ctx.clearRect(0,0,100,100);//canvasを一回消す
    ctx.fillStyle = '#FF03AA';//色をセット
    ctx.fillRect(xPosition, yPosition, 80, 80);//新しい四角を書き直す
    setTimeout(gameLoop, frameLength);//frameLengthの時間がたったらもう一回gameLoopを呼ぶ
  }// 
  return {// 
    init: init//
};// 
})();// 
$(document).ready(function () {//document が出来た時に
  JS_SNAKE.game.init();//JS_SNAKEのgameのinitを呼ぶ
});// 