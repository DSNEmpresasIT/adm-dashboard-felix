import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { SupabaseService } from '../../services/supabase/supabase.service';
import { ButtonSpinerComponent } from "../button-spiner/button-spiner.component";
import { AlertService, AlertsType } from '../../services/alert.service';

@Component({
    selector: 'app-form-product',
    standalone: true,
    templateUrl: './form-product.component.html',
    styleUrl: './form-product.component.css',
    imports: [CommonModule, ReactiveFormsModule, FormsModule, ButtonSpinerComponent]
})
export class FormProductComponent implements OnInit {
  productForm: FormGroup;
  isLoading: boolean= false;
  renderProduct: Product | undefined;
  @Output() booleanOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder, private supaBase : SupabaseService,
    private alertServ: AlertService
  ) {
    this.productForm = this.formBuilder.group({
      id: [this.renderProduct?.id],
      name: [this.renderProduct?.name, [Validators.required]],
      formulacion: [this.renderProduct?.formulacion],
      img: [this.renderProduct?.img],
      is_active_substance: [this.renderProduct?.is_active_substance !== undefined ? this.renderProduct.is_active_substance : false]
    });
  }

  toggleModal(){
    this.booleanOutput.emit();
  }

  toggleLoading(){
    this.isLoading = !this.isLoading
  }

  ngOnInit(): void {
    this.supaBase.editProduct.subscribe((editedProduct: Product | null) => {
      if (editedProduct) {
        this.renderProduct = editedProduct;
        this.updateFormValues();
      }
    });
  } 
  
  async onImageSelected(event: Event): Promise<void> {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const reader = new FileReader();
  
      const maxSizeInBytes = 500 * 1024; // 500kb

      if (file.size > maxSizeInBytes) {
        console.error('The file exceeds the maximum allowed size.');
        this.alertServ.show(4000, "La imagen supera el tamaño maximo de 500kb", AlertsType.ERROR)
        return;
      }

      await new Promise<void>((resolve, reject) => {
        reader.onload = (e: any) => {
          this.productForm.get('img')?.setValue(e.target.result);
          resolve();
        };
  
        reader.onerror = (error) => {
          reject(error);
        };
  
        reader.readAsDataURL(file);
      });
    }
  }
  

  onSubmit() {
    if (this.productForm.valid) {
      const formData: Product = this.productForm.value;
      console.log(formData.id);
      this.toggleLoading()
      this.supaBase.updateProduct(formData)
        .then((result) => {
          this.toggleModal() // cerrar el modal del form
          this.supaBase.updateProducts()
          this.alertServ.show(4000, "Producto actualizado con exito", AlertsType.SUCCESS);
        })
        .catch((error) => {
          this.toggleLoading()
          console.error('Error al actualizar el producto:', error);
          this.alertServ.show(4000, "Error al actualizar el producto", AlertsType.ERROR);
        });
    }
  }

  private updateFormValues() {
    // Actualizar los valores del formulario cuando se recibe un nuevo producto editado
    this.productForm.patchValue({
      id: this.renderProduct?.id,
      name: this.renderProduct?.name,
      formulacion: this.renderProduct?.formulacion,
      img: this.renderProduct?.img,
      is_active_substance: this.renderProduct?.is_active_substance
    });
  }

}
