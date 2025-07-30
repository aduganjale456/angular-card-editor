import { Component, OnInit } from '@angular/core';
import { EditPopupComponent } from '../edit-popup/edit-popup.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  imports: [EditPopupComponent,MatDialogModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
card:any = [
  {

    "id": 1,

    "title": "Card 1",

    "description": "This is the description for card 1."

  },

  {

    "id": 2,

    "title": "Card 2",

    "description": "This is the description for card 2."

  },

  {

    "id": 3,

    "title": "Card 3",

    "description": "This is the description for card 3."

  }
]

constructor(private dialog:MatDialog){}
edit(card: any){
  // alert('oye11');
  const dialogRef = this.dialog.open(EditPopupComponent,{width:'300px', data:card});
  console.log('card', card)

  dialogRef.afterClosed().subscribe(result=>{
    if(result != undefined){
      const index = this.card.findIndex((c:any)=>c.id === card.id);
      if(index > -1){
        this.card[index].description = result
      }
    }
  })
  
}
ngOnInit(){
console.log('oye');

}
}
