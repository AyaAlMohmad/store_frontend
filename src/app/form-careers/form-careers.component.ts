import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-careers',
  templateUrl: './form-careers.component.html',
  styleUrls: ['./form-careers.component.css']
})
export class FormCareersComponent implements OnInit {
  myForm:any= FormGroup ;
  careers:any[]=[]
  selectedFile:any;

  constructor(private fb: FormBuilder , private http: HttpClient,private prod:ProductsService){}
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      file:["",Validators.required],
      career:["",Validators.required]
    });

     this.prod.getIndexCareers().subscribe((result:any)=>{
// console.log(result.data)
 this.careers=result.data
    })

  }
  onSubmit(form: FormGroup) {
    if (form.valid) {
      const formData = new FormData();
      formData.append('name', form.value.name);
      formData.append('phone', form.value.mobileNumber);
      formData.append('id_career',form.value.career)
      if (this.selectedFile) {
         formData.append('pdf', this.selectedFile);
       }
       console.log(formData)
      this.prod.postOrderJop(formData).subscribe((res:any)=>{
       // this.toastr.success("Successfully")
       alert("successfully")
       })
  }
}

onFileChange(event: any) {
  this.selectedFile = event.target.files[0];
}

}
