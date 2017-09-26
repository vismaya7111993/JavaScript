alert("Hello World");


window.LabelInfoComponent = window.LabelInfoComponent || {};

window.LabelInfoComponent.init = (dataObject) => { 

    if(dataObject){
        console.log("U r good ..."+JSON.stringify(dataObject));
    }
}
 

 window.LabelInfoComponent.show =(scannedID) =>{
     if(scannedID){
         console.log(scannedID);
     }
 }