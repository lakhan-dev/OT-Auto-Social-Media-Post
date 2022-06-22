import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'https://graph.facebook.com';
  pageId = '101639189268319';
  accessToken =
    'EAARlWMSdRKABAENdYmcaEXOZCOfdeKN5tBNopge971TzKYAZBUmUtr2whdZA7Hyhma7BfsDVDEgyx97RMLZBlTk452xRluul6eLRi1Wgo8XilTWZBziCWXzmgQKyr8qViE4xPlYH12MywnBUJG2cM08ZAZBmourmUnC3psQqkYivmv3X87YJ9wGA5j95r1otM3ZAf5OgeOfq29P8536VYsnC';
  message = 'Sir Zeeshan is testing from Postman....';
  errorMessage: any;
  constructor(private http: HttpClient) {}
  postDataToFB(data: any) {
    if (data.postHeader && !data.image) {
      console.log('Post : ',data.postHeader)
      // this.http
      //   .post<any>(
      //     `${this.url}/${this.pageId}/feed?message=${data.postHeader}....&access_token=${this.accessToken}`,
      //     { title: 'Angular POST Request Example' }
      //   )
      //   .subscribe({
      //     next: (data) => {
      //       console.log(data);
      //     },
      //     error: (error) => {
      //       this.errorMessage = error.message;
      //       console.error('There was an error!', error);
      //     },
      //   });
    }
    if(data.image && !data.postHeader){
      console.log('Image : ',data.image)
    }
    if(data.image && data.postHeader){
      console.log('Post : ',data.postHeader);
      console.log('Image : ',data.image)
    }
  }
}
