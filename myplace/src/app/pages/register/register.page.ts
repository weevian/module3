import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
email = ""
password = ""

  constructor(public httpService: HttpService,
    private toastCtrl: ToastController) { }

  ngOnInit() {
  }

signupPressed(){
  this.httpService.registerUser(this.email, this.password).subscribe(async resp=>{
    if (resp["message"]=="User succesfully registered"){
      let toast = await this.toastCtrl.create({message:
        "Successfully registered. You may log in", duration:2000})
toast.present()
    }
    else {
      let toast = await this.toastCtrl.create({message:
        "Something wrong try again", duration:2000})
      toast.present()
    }
    console.log(resp)
  })
}
}
