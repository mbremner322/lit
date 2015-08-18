var JS_SNAKE= {};//JS_SNAKEというグローバル変数
JS_SNAKE.game = (function() {//JS_SNAKEのなかにobjectを作る
  var ctx;//変数ctxをイニシャライズ
  JS_SNAKE.width = 200;//蛇の横の長さ
  JS_SNAKE.height = 200;//蛇の縦の長さ
  JS_SNAKE.blockSize = 10;//蛇の部品のブロックサイズ
  var frameLength = 500;//一つのフレームの長さ（ミリ秒）
  var snake;//蛇の変数をイニシャライズ    

  function init() {//initの関数
    $('body').append('<canvas id="jsSnake">');//htmlにcanvasエレメント追加
    $canvas = $('#jsSnake');//jQueryの変数$canvasを作る
    $canvas.attr('width',JS_SNAKE.width);//canvas の横の長さを蛇の長さに
    $canvas.attr('height',JS_SNAKE.height);//canvas の縦の長さを蛇の長さに
    var canvas = $canvas[0];//jQueryでcanvasのDOMを選択
    ctx = canvas.getContext('2d');//canvasを２dに設定
    snake = JS_SNAKE.snake();//JS_SNAKE.snakeで返されるobjectをsnakeに入れる
    gameLoop();//gameLoopをよぶ
  }//  

  function gameLoop() {//gameLoop関数
    ctx.clearRect(0, 0, JS_SNAKE.width, JS_SNAKE.height);//canvasを一回消す
    snake.advance();//advanceを呼ぶ
    snake.draw(ctx);//drawを呼ぶ
    setTimeout(gameLoop, frameLength);//frameLengthの時間がたったらもう一回gameLoopを呼ぶ
  }// 

  return {//  
    init: init// 
};// 
})();// 


JS_SNAKE.snake = function () {//snakeメソッドを作る
  var posArray = [];//　
  posArray.push([6, 4]);//最初からあるブロック追加
  posArray.push([5, 4]);//最初からあるブロック追加
  posArray.push([4, 4]);//最初からあるブロック追加
  var direction = 'right';//動く方面は右

  function drawSection(ctx, position) {//drawSection 関数
    var x = JS_SNAKE.blockSize * position[0];//スタート地点の計算
    var y = JS_SNAKE.blockSize * position[1];//スタート地点の計算
    ctx.fillRect(x, y, JS_SNAKE.blockSize, JS_SNAKE.blockSize);//ブロックを描く
  }//　

  function draw(ctx) {//draw関数
    ctx.save();//セーブスル
    ctx.fillStyle = '#33a';//色
    for(var i = 0; i < posArray.length; i++) {//配列の中のブロックを一つずつ
      drawSection(ctx, posArray[i]);//ブロックを描く
    }//　
    ctx.restore();//　
  }//　

  function advance() {//advance関数
    var nextPosition = posArray[0].slice(); //蛇の頭をコピー
    nextPosition[0] += 1; //ポジションに一つたす
    posArray.unshift(nextPosition);//コピーして値を変えて物を配列の中に入れる
    posArray.pop();//後ろを捨てる
  }//　

  return {//　　
    draw: draw,//　
    advance: advance//　　
  };//　　
};//　

$(document).ready(function () {//document が出来た時に
  JS_SNAKE.game.init();//JS_SNAKEのgameのinitを呼ぶ
});// 