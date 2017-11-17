import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    images = [
      {
        "nome":"IONIC",
        "imagem":"https://s3-us-west-2.amazonaws.com/cosmicjs/e391cab0-6322-11e7-8774-41dfff8ae5dc-bYMCvtHD.jpg"
      },
      {
        "nome":"HTML 5",
        "imagem":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png"
      },
      {
        "nome":"SASS",
        "imagem":"http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
      },
      {
        "nome":"TYPESCRIPT",
        "imagem":"https://s.gravatar.com/avatar/3e2b342616822f8eabc9dd393840db4a?size=496&default=retro"
      },
      {
        "nome":"ANGULAR",
        "imagem":"https://qph.ec.quoracdn.net/main-qimg-30ea9a9396bde99772ea0bfd1c20b15a"
      },
      {
        "nome":"PHONEGAP",
        "imagem":"https://pbs.twimg.com/profile_images/596058283699347456/NgaEDjHt.jpg"
      },
      {
        "nome":"CORDOVA",
        "imagem":"https://cordova.apache.org/static/img/cordova_bot.png"
      },
      {
        "nome":"PHONEGAP",
        "imagem":"https://pbs.twimg.com/profile_images/596058283699347456/NgaEDjHt.jpg"
      },
      {
        "nome":"CORDOVA",
        "imagem":"https://cordova.apache.org/static/img/cordova_bot.png"
      },
      {
        "nome":"ANGULAR",
        "imagem":"https://qph.ec.quoracdn.net/main-qimg-30ea9a9396bde99772ea0bfd1c20b15a"
      },
      {
        "nome":"SASS",
        "imagem":"http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"        
      },
      {
        "nome":"TYPESCRIPT",
        "imagem":"https://s.gravatar.com/avatar/3e2b342616822f8eabc9dd393840db4a?size=496&default=retro"
      },
      {
        "nome":"IONIC",
        "imagem":"https://s3-us-west-2.amazonaws.com/cosmicjs/e391cab0-6322-11e7-8774-41dfff8ae5dc-bYMCvtHD.jpg"
      },
      {
        "nome":"HTML 5",
        "imagem":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png"
      }
    ];

  constructor(public navCtrl: NavController) {

  }

}
