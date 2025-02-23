import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation',
  template: `
    <h2 mat-dialog-title>Confirm Deletion</h2>
    <mat-dialog-content>Are you sure you want to delete this employee?</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onCancel()">No</button>
      <button mat-button color="warn" (click)="onConfirm()">Yes</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      mat-dialog-content {
        font-size: 16px;
        margin-bottom: 15px;
      }
      mat-dialog-actions {
        display: flex;
        justify-content: flex-end;
      }
    `
  ]
})
export class DeleteConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
