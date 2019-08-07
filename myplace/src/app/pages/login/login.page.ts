import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email
  password
  
    constructor(public httpService: HttpService,
      private toastCtrl: ToastController,
      public router:Router) { }

  ngOnInit() {
  }
loginPressed(){
  this.httpService.loginUser(this.email, this.password).subscribe(async resp=>
    {console.log(resp)
      if (resp["success"] == true){
        this.router.navigate(['/pages-list'])
      } else {
        let toast = await this.toastCtrl.create({message:
          "Something wrong try again", duration:2000})
        toast.present()
      }
    })
}


}
