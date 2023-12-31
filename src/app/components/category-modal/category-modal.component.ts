import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSpinerComponent } from "../button-spiner/button-spiner.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../services/supabase/category.service';
import { Category } from '../../interfaces/product';

@Component({
    selector: 'app-category-modal',
    standalone: true,
    templateUrl: './category-modal.component.html',
    imports: [CommonModule, ButtonSpinerComponent, FormsModule, ReactiveFormsModule ]
})
export class CategoryModalComponent implements OnInit {
  isOpen: boolean = false;
  categoryForm: FormGroup;
  isLoading : boolean = false;
  categories: Category[] | null = [];

  constructor(
    private formBuilder : FormBuilder,
    private categoryServ : CategoryService
  ){ this.categoryForm  = this.formBuilder.group({
      category : [ '', Validators.required ],
      father_category : [ null ],
      is_substance_active : [ false ],
  })}

  ngOnInit(): void {
    this.categoryServ.getAllFhaterCategories().then((res: Category[] | null) => {
      this.categories = res
    }).catch((error)=> {
    console.error("error to fetch fhater_categories", error)
    });
  }

    onSubmit(){
      if(this.categoryForm.valid){
        const data = this.categoryForm.value;
        try {
          this.categoryServ.addCategory(data)
        } catch (error) {
          console.error(error)
        }
      }
    }

    toggleLoading(){
      this.isLoading = !this.isLoading
    }

    toggleModal(){
      this.isOpen = !this.isOpen
    }
}
