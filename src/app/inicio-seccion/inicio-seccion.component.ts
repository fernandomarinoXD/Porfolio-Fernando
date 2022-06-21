import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl,FormGroup , Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-seccion',
  templateUrl: './inicio-seccion.component.html',
  styleUrls: ['./inicio-seccion.component.css']
})
export class InicioSeccionComponent implements OnInit {
form:FormGroup;
  constructor(private formbuilder:FormBuilder){
this.form=this.formbuilder.group ({
email:['',[Validators.required,Validators.email]],
password:['',[Validators.required,Validators.minLength(8)]],  


})
;

} 
  ngOnInit(): void {
  }
get Email(){

  return this.form.get('email');
}

get Password(){

  return this.form.get('password');
} 

}