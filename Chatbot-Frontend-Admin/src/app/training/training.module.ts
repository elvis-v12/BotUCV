import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { TrainingComponent } from "./training.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Entrenamiento",
      urls: [{ title: "Entrenamiento", url: "/training" }, { title: "Entrenamiento" }],
    },
    component: TrainingComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
  ],
})
export class TrainingModule {}
