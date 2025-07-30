import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-edit-popup',
  imports: [ MatDialogModule, FormsModule, MatInputModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.css'
})
export class EditPopupComponent {
  editedDescription: string;
  constructor(public dialogRef: MatDialogRef<EditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
       this.editedDescription = data.description;
    }

    
  onSave() {
    this.dialogRef.close(this.editedDescription);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
