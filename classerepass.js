console.log("hello world");
let json = "{\"key\":\"value1\",\"key2\":\"value2\"}";
/*
    <arrel>
        <key1>
            value1
        <key1>
    <arrel>
*/
function json2XML() {
    //la key va abans de :
    //el value va despres de : hasta la ,
    json = json.replaceAll("\"","");
    json = json.replaceAll("{","");
    json = json.replaceAll("}","");
    //""
    let keyvalues =[];
    keyvalues= json.split(",");
let xml="";
 xml+="<arrel>"
    for(let i= 0;i < keyvalues.length; i++) {
        let temparray = keyvalues[i].split(":");
         xml+="<"
         xml+= temparray[0];
         xml+= "> ";

            xml+= temparray[1]

         xml+="</"
         xml+= temparray[0];
         xml+= "> ";

    }
    xml+="</arrel>"
    console.log(xml)
}
json2XML()