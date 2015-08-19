$(document).ready(function(){
    $("#button").click(function(){
        $('#commands').toggle("slide");
    });
});
jQuery(document).ready(function($) {
    var id = 1;
        $('#terminal').terminal(function(command, term) {
            if (command == 'help') {
                term.echo("available commands are test and db");
            } else if (command == 'test'){
                term.push(function(command, term) {
                    if (command == 'help') {
                        term.echo('try entering meep! exit to exit');
                    } else if (command == 'meep') {
                        term.echo('MEEP!!!!!!');
                    } else if (command == 'exit') {
                        return;
                    } else {
                        term.echo('unknown command ' + command);
                    }
                }, {
                    prompt: 'test> ',
                    name: 'test'});
            } else if (command == 'db'){
                var tutorial = false;
                term.echo('enter tutorial or do your own thang');
                term.push(function(command, term) {
                    if (command == 'tutorial') {
                        tutorial = tutorial? false:true;
                        addedField = false;
                        if (tutorial == true) {
                            term.echo("\t===tutorial===");
                            term.echo("\ttry typing in the following:");
                            term.echo("\trake db:create_migration NAME=create_cateogories");
                            term.echo("\t===tutorial===");
                        }
                    }
                    if (/rake db:create_migration NAME=create_/.test(command)){
                        var regEx = /rake db:create_migration NAME=create_(.*?)(?:\s|$)/g;
                        var match = regEx.exec(command)[1];
                        if (document.getElementById(match) !== null)
                            term.echo("\ttable with name:"+match+" already exists");
                        else {
                            if (tutorial == true) {
                                term.echo("");
                                term.echo("\t===tutorial===");
                                term.echo("\tGood Job! Let's assign some fields!");
                                term.echo("\tFirst: type in 't.string :name' to add a name field");
                                term.echo("\tthis means that the name of the field is 'name' and the type is 'string'");
                                term.echo("\t===tutorial===");
                            }
                            term.echo("");
                            term.echo('\tcreating a new table...');
                            term.echo('\tcreate_table :'+match+" do |t|");
                            arr = [];
                            term.push(function(command, term){
                            
                                var myRegEx = /t.\b(primary_key|string|text|integer|float|decimal|datetime|timestamp|time|date|binary|boolean|)\b :/
                                if (myRegEx.test(command)) {
                                    var regExName = /t.\b(primary_key|string|text|integer|float|    decimal|datetime|timestamp|time|date|binary|boolean|)\b :(.*?)(?:\s|$)/g;
                                    var name = regExName.exec(command);
                                    arr.push(name[2]);
                                    if (tutorial == true && addedField == false) {
                                        term.echo("");
                                        term.echo("\t===tutorial===");
                                        term.echo("\tgreat! add another! what about t.integer :age ?");
                                        term.echo("\tif you're all set type in 'rake db:migrate' to create the table!");
                                        term.echo("\t===tutorial===");
                                        addedField = false;
                                    }
                                }
                                else if(command === "rake db:migrate") {
                                    term.echo("==migrating");
                                    term.echo("==============================");
                                    term.echo("-- create_table(:"+match+")");
                                    term.echo("==migrated");
                                    term.echo("==============================");
                                    term.echo("enter exit");
                                    $("#db").prepend("<div id="+match+"></div>");
                                    $("#"+match).append("<p class='title'>"+match+"</p>");
                                    $("#"+match).append("<table class='table'></table>");
                                    var numOfCol = arr.length+1;
                                    var table = $('#'+match +" table")[0];
                                    var row = table.insertRow(0);
                                    for (var i = 0; i < numOfCol; i++) {
                                        var cell = row.insertCell(i);
                                        cell.innerHTML = (i==0)?"id":arr[i-1];
                                    }

                                }
                                else{
                                    term.echo("please check your syntax");
                                    term.echo('  ==> '+command);
                                }
                            }, {
                                prompt: "create_"+match+"> ",
                                name:"create_"+match});

                        }
                    }
                    if( command == 'new'){
                        var table = $('#students table');
                        table = table[0];
                        var row = table.insertRow(table.rows.length);
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        var cell3 = row.insertCell(2);
                        cell1.innerHTML = "4";
                        cell2.innerHTML = "too";
                        cell3.innerHTML = "23";
                    }
                    if (/rake db:create_migration NAME=add_/.test(command)){
                        var commandex = command.split("NAME=add_")[1];
                        var commandex = commandex.split('_');
                        var field = commandex[0];
                        var table = commandex[2];
                        var tableD = $('#'+table+' table');
                        tableD = tableD[0];
                        var firstRow = tableD.rows[0];
                        var x = firstRow.insertCell(-1);
                        x.innerHTML = field;
                    }
                    if (command[0].toUpperCase() === command[0]){
                        var name = command.substring(0, command.indexOf("."));
                        name = name.toLowerCase().pluralize();//Student=>student=>students
                        var table = $("#"+name+" table");
                        table = table[0];
                        var row = table.insertRow(table.rows.length); 

                        var fields = command.split("({")[1].split("})")[0].split(",");
                        for (var i = 0; i < fields.length; i++){
                            var field = fields[i];
                            field = field.split(":");
                            var data = field[1];
                            row.insertCell(i).innerHTML = data;
                        }
                        row.insertCell(0).innerHTML = table.rows.length-2;
                        

                    }
                }, {
                    prompt: 'db> ',
                    greetings:"hello",
                    name: 'db'});
            }
            else {
                term.echo("unknow command " + command);
            }
        }, {
            greetings: "Welcome human! let's visualize some data! :) press help for help",
            height: 250,
            onBlur: function() {
                // prevent loosing focus
                return false;
            }
        });
});
