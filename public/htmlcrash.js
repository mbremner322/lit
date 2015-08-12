$(document).ready(function(){
    $(".episode.hide").hide();
    $(".mini-epi.hide").hide();
    var previewFrame = document.getElementById("preview-frame-1"); 
    var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
    var editor = ace.edit("editor-ace");
    var code = editor.getValue();
    preview.open();
    preview.write(code);
    preview.close();
    var numOfEp = 2; //number of episodes present;
    var numOfmEp = 6; //number of miniEp present;
    document.getElementById('onlyHTMLframe').contentWindow.document.write("<html><body><div>programming</div><div>is</div><div>awesome!</div></body></html>");
    document.getElementById('HTMLnCSSframe').contentWindow.document.write("<html><body><style>body{background-color:#F1A1DC;} .1{text-align:right;} .2{text-align:left;} .3{text-align:center;}</style><div class='1'style='text-align:left; color:#009faa; position:absolute;font-size:36px;width: 50%;'>programming</div><div class='2'style='text-align:right; font-size: 50px; color:#08855c;'>is</div><div class='3'style='text-align:center; color: #FF3200;font-weight: bold; font-size: 60px;'>awesome!</div></body></html>");
    $('#HTMLnCSSframe').hide();
    $("#noCss").click(function(){
        $("#HTMLnCSSframe").hide();
        $("#onlyHTMLframe").show();
    });
    $("#showCss").click(function(){
        $("#HTMLnCSSframe").show();
        $("#onlyHTMLframe").hide();
    });
    $("#okBut").click(function(){
        var oldId = $(".episode.now")[0].id;
        var currNum = parseInt(oldId.slice(-1));
        var nextNum = (currNum + 1) % numOfEp;
        var newId = "ep"+ nextNum.toString();
        $("#"+oldId).hide();
        $("#"+oldId).removeClass("now");    
        $("#"+newId).show();
        $("#"+newId).addClass("now");
    });
    $("#backBut").click(function(){
        var oldId = $(".episode.now")[0].id;
        var currNum = parseInt(oldId.slice(-1));
        var nextNum = ((currNum - 1) % numOfEp + numOfEp)%numOfEp;
        var newId = "ep"+ nextNum.toString();
        $("#"+oldId).hide();
        $("#"+oldId).removeClass("now");    
        $("#"+oldId).addClass("hide");    
        $("#"+newId).removeClass("hide");
        $("#"+newId).show();
        $("#"+newId).addClass("now");
    });
    $("#evaluate").click(function evaluateBut() {
        code = ace.edit("editor-ace").getValue();
        preview.open();
        preview.write(code);
        preview.close();
    });
    $("#nextBut").click(function() {
        var oldId = $(".mini-epi.now")[0].id;
        var currNum = parseInt(oldId.slice(-1));
        var nextNum = ((currNum + 1) % numOfmEp + numOfmEp)%numOfmEp;
        var newId = "mep"+ nextNum.toString();
        if (nextNum >= 5) $('#miniTitle1')[0].innerHTML = 'CSS・飾り付けをしよう！';
        else $('#miniTitle1')[0].innerHTML = 'HTMLを試してみよう！';
        if(nextNum == 5) {
            code = ace.edit("editor-ace").getValue();
            if (code.indexOf("<style>") <= -1){
                code = code.split("</head>");
                code = code[0] + "\t<style>\n\n\t\t</style>\n</head>" + code[1]
                ace.edit("editor-ace").setValue(code);
            }
        }
        $("#"+oldId).hide();
        $("#"+oldId).removeClass("now");    
        $("#"+oldId).addClass("hide");
        $("#"+newId).show();
        $("#"+newId).removeClass("hide");
        $("#"+newId).addClass("now");
    });
    $("#mbackBut").click(function() {
        var oldId = $(".mini-epi.now")[0].id;
        var currNum = parseInt(oldId.slice(-1));
        var nextNum = ((currNum - 1) % numOfmEp + numOfmEp)%numOfmEp;
        if (nextNum >= 5) $('#miniTitle1')[0].innerHTML = 'CSS・飾り付けをしよう！';
        else $('#miniTitle1')[0].innerHTML = 'HTMLを試してみよう！';
        var newId = "mep"+ nextNum.toString();
        $("#"+oldId).hide();
        $("#"+oldId).removeClass("now");    
        $("#"+oldId).addClass("hide");
        $("#"+newId).show();
        $("#"+newId).removeClass("hide");
        $("#"+newId).addClass("now");
    });
    $(".css-demo").click(function(){
        if ($(this).hasClass("ids")) {
            if ($(this).hasClass("on")){
                $(this).prev().show();
                $(this).prev().prev().show();
                $(this).css("width","28%");
                $(this).removeClass("on");
                $(this).addClass("off"); 
                $(this).css("font-size","20px");
                $(this).css("text-align","center");
                $(this).children("div").hide();
            }
            else{
                $(this).prev().hide();
                $(this).prev().prev().hide();
                $(this).css("width","100%");
                $(this).removeClass("off");
                $(this).addClass('on');
                $(this).css("font-size","14px");
                $(this).css("text-align","left");
                $(this).children("div").show();
            }
        }
        else if ($(this).hasClass("classes")){
            if ($(this).hasClass("on")){
                $(this).prev().show();
                $(this).next().show();
                $(this).css("width","28%");
                $(this).removeClass("on");
                $(this).addClass("off"); 
                $(this).css("font-size","20px");
                $(this).css("text-align","center");
                $(this).children("div").hide();
            }
            else{
                $(this).prev().hide();
                $(this).next().hide();
                $(this).css("width","100%");
                $(this).removeClass("off");
                $(this).addClass('on');
                $(this).css("font-size","14px");
                $(this).css("text-align","left");
                $(this).children("div").show();
            }
        }
        else {//tags
            if ($(this).hasClass("on")){
                $(this).next().next().show();
                $(this).next().show();
                $(this).css("width","28%");
                $(this).removeClass("on");
                $(this).addClass("off"); 
                $(this).css("font-size","20px");
                $(this).css("text-align","center");
                $(this).children("div").hide();
            }
            else{
                $(this).next().next().hide();
                $(this).next().hide();
                $(this).css("width","100%");
                $(this).removeClass("off");
                $(this).addClass('on');
                $(this).css("font-size","14px");
                $(this).css("text-align","left");
                $(this).children("div").show();
            }

        }
    });
});
