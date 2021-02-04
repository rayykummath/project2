var para=[];
var dis_para="";
function para_1s() {
    for (var i=0; i<6; i++){
        para[i]= document.getElementById("part_of_paragraph_"+i).value
        console.log(para[i])
    };
    dis_para=para.join(". ");
    window.alert(dis_para);
    document.getElementById("display_para_1").innerHTML=dis_para;
};