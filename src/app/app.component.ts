import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  cakes:any = [{
    name: "Cake 1",
    rating: 0,
    comment: "",
    id: 1
  },
  {
    name: "Cake 2",
    rating: 0,
    comment: "",
    id: 2
  },
  {
    name: "Cake 3",
    rating: 0,
    comment: "",
    id: 3
  }] 

  newCake:any = {
    rating: 0,
    comment: ""
  }
  constructor(){}

  commentHandler( event: any, cakeId: number ): void {
    event.preventDefault();
    for( let i = 0; i < this.cakes.length; i ++ ){
      if( cakeId === this.cakes[i].id ){
        console.log( this.cakes[i] );
      }
    }
  }

  updateComment( event: any ):void{
    this.newCake.comment = event.target.value;
    console.log( this.newCake );
  }
}
