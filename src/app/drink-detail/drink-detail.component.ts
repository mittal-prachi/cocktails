import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.scss']
})
export class DrinkDetailComponent {

  constructor(public dialogRef: MatDialogRef<DrinkDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  public close() {
    this.dialogRef.close();
  }
}
