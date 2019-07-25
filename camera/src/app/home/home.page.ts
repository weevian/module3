import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
image
  constructor(private camera:Camera, 
    private photoLibrary: PhotoLibrary, 
    private socialSharing: SocialSharing) {}

  snapPhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

takeFromLibrary(){
this.photoLibrary.requestAuthorization().then(() => {
  this.photoLibrary.getLibrary().subscribe({
    next: library => {
      library.forEach(function(libraryItem) {
        console.log(libraryItem.id);          // ID of the photo
        console.log(libraryItem.photoURL);    // Cross-platform access to photo
        console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
        console.log(libraryItem.fileName);
        console.log(libraryItem.width);
        console.log(libraryItem.height);
        console.log(libraryItem.creationDate);
        console.log(libraryItem.latitude);
        console.log(libraryItem.longitude);
        console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
      });
    },
    error: err => { console.log('could not get photos'); },
    complete: () => { console.log('done getting photos'); }
  });
})
.catch(err => console.log('permissions weren\'t granted'));
}

share(){
// Check if sharing via email is supported
this.socialSharing.shareVia('com.facebook.katana', 
'Sent from Ionic class',
null,
this.image,
 null).then(()=>{
  console.log('successfully shared on FB')
}).catch(()=> {console.log('something is wrong')
});
}
openIAB(){
  const browser =this.openIAB.create('https://ionicframework.com/')
}


}

