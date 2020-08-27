import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtileriasService {

  sellersPermitFile: any;
    sellersPermitString: string;
    constructor(){}
     
    
    getImage(): String{

     return this.sellersPermitString;
    }
    public imageChangeUtils(event){
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
          const file: File = fileList[0];
          this.sellersPermitFile = file;
          this.handleInputChange(file);
        }else{
          console.log("No has seleccinado ningun archivo")
        }
      }
    
      handleInputChange(files) {
        console.log("Convirtiendo imagen")
        var file = files;
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
        }
        reader.onloadend = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
      }
      
    
      _handleReaderLoaded(e){
        let reader = e.target;
        var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
        this.sellersPermitString = base64result;
      }
}
