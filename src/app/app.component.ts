import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoangular';
  Comentarios = [
    {
      user:'https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg',
      Comments:'First Comment'
    },
    {
      user:'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg',
      Comments:'Second Comment'
    },
    {
      user:'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg',
      Comments:'Third Comment'
    }
  ];

  AddCommentos(){
    var comm = document.getElementById("exampleFormControlTextarea1");
    this.Comentarios.push({      
      user:'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg',
      Comments: comm.value
    })
    document.getElementById("exampleFormControlTextarea1").value = "";
  }
}

