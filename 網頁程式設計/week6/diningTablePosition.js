$(function() {
    $("#datepicker").datepicker();
});

function changeTable1Position(x) {
    if (x.checked) {
        $("#table1Position").css({top:-150, left:190});
    }
    else {
        $("#table1Position").css({top:0, left:0});
    }
}

function changeTable2Position(x){
    if(x.checked){
        $("#table2Position").css({top:-170, left:220 }); 
    }
    else {
        $("#table2Position").css({top:0, left:2 });
    }
}

function changeTable3Position(x){
    if(x.checked){
        $("#table3Position").css({top:-190, left:230 }); 
    }
    else {
        $("#table3Position").css({top:0, left:4 });
    }
}

function changeTable4Position(x){
    if(x.checked){
        $("#table4Position").css({top:-200, left:235 }); 
    }
    else {
        $("#table4Position").css({top:0, left:6 });
    }
}

function changeTable5Position(x){
    if(x.checked){
        $("#table5Position").css({top:-250, left:210 }); 
    }
    else {
        $("#table5Position").css({top:0, left:8 });
    }
}

function changeTable6Position(x){
    if(x.checked){
        $("#table6Position").css({top:-270, left:200 }); 
    }
    else {
        $("#table6Position").css({top:0, left:10 });
    }
}

function changeTable7Position(x){
    if(x.checked){
        $("#table7Position").css({top:-250, left:250 }); 
    }
    else {
        $("#table7Position").css({top:0, left:12 });
    }
}

function changeTable8Position(x){
    if(x.checked){
        $("#table8Position").css({top:-160, left:200 }); 
    }
    else {
        $("#table8Position").css({top:0, left:14 });
    }
}