import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar:MatSnackBar) { }

  /* It takes three parameters  
    1.the message string  
    2.the action  
    3.the duration, alignment, etc. */
  
    openSnackBar(message: string, action: string,
      horizontalPosition: MatSnackBarHorizontalPosition,
      verticalPosition: MatSnackBarVerticalPosition) { 
    
    this.snackBar.open(message, action, { 
       duration: 3000,
       horizontalPosition: horizontalPosition,
       verticalPosition: verticalPosition, 
    }); 
  }
}
