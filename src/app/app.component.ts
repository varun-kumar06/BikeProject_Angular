import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bike';
  bikes: Bike[] = [
    {
      id: 1,
      name: 'Mountain Bike',
      type: 'Off-road',
      price: 500,
      imageUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/yezdi-adventure-tornado-black1722934351998.jpg?q=80'
    },
    {
      id: 2,
      name: 'Road Bike',
      type: 'On-road',
      price: 700,
      imageUrl: 'https://imgd.aeplcdn.com/664x374/n/bw/models/colors/suzuki-select-model-glass-sparkle-black-1671516770018.png?q=80'
    },
    {
      id: 3,
      name: 'Hybrid Bike',
      type: 'Mixed',
      price: 600,
      imageUrl: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fyamaha%2Fmt-15%2Fyamaha-mt-15-mat-light-gray.png%3Fv%3D1581051676&w=750&q=75'
    }
  ];

}

export interface Bike {
  id: number;
  name: string;
  type: string;
  price: number;
  imageUrl: string;
}



