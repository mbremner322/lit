$(document).ready(function() {
    $('.tut').click(function() {
        var text = this.children[1].innerHTML;
        $('#note')[0].innerHTML = text;
    });
    $("#actCode").click(function() {
        var code = $(".page.now").children()[0];
        var explanation = $(".page.now").children()[1];
        code.style.display = 'block';
        explanation.style.display = 'none';
    });
    $("#exp").click(function() {
        var code = $(".page.now").children()[0];
        var explanation = $(".page.now").children()[1];
        code.style.display = 'none';
        explanation.style.display = 'block';
    });
    $('#nextBut').click(function() {
        var $curr = $('.page.now');
        var $next = $curr.next();
        if ($next[0] != $("#end")[0]){
            $curr.removeClass('now');
            $curr.addClass('hide');
            $next.addClass('now');
            $next.removeClass('hide');
        }
    });
    $('#backBut').click(function() {
        var $curr = $('.page.now');
        var $prev = $curr.prev();
        if ($prev[0] != $("#start")[0]){
            $curr.removeClass('now');
            $curr.addClass('hide');
            $prev.addClass('now');
            $prev.removeClass('hide');
        }
    });

});
