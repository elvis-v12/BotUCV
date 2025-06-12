import { Component, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './training.component.html',
  styleUrls: ["./training.component.scss"]
})

export class TrainingComponent {
  trainingContent: string = '';
  trainingStatusMessage: string = '';


  constructor(private http: HttpClient) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.trainingContent = reader.result as string;
      };
      reader.readAsText(file);
    }
  }

  trainModel(): void {
    const jsonData = JSON.parse(this.trainingContent);
    this.trainingStatusMessage = 'Subiendo archivo...';

    this.http.post('http://localhost:5000/add_intent', jsonData).subscribe(
        (response) => {
            this.trainingStatusMessage = 'Modelo entrenado correctamente';
            this.trainingContent = ''; // Vacía el textarea
            const inputElement = document.getElementById('trainingFile') as HTMLInputElement;
                if (inputElement) {
                    inputElement.value = ''; // Esto limpia el campo de archivo
                }
        },
        (error) => {
            this.trainingStatusMessage = 'Error al entrenar el modelo';
            console.error('Error training model', error);
        }
    );
}
}