$(document).ready(function() { //jQuery の全てDocument がロードされてから
	$('body').append('<canvas id="jsSnake">'); //htmlのbodyにcanvasエレメントを追加
	var $canvas = $('#jsSnake');//jQueryの変数$canvasを作る。
	$canvas.attr('width',100); //canvas の横の長さを１００に設定
	$canvas.attr('height',100);//canvas の縦の長さを１００に設定
	var canvas = $canvas[0];//jQueryでcanvasのDOMを選択
	var ctx = canvas.getContext('2d');//canvasを２dに設定
	ctx.fillStyle='#FF03AA';//変数ctxの色を#FF03AAに設定
	ctx.fillRect(20,20,80,80);//四角を描く（x, y, 長さ、高さ）
});//  
