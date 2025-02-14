import { assertPlatform, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IAPIRESPONSE, User } from '../../model/User';
import { MasterServiceService } from '../../service/master-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: User = new User();
  masterSrv = inject(MasterServiceService);
  router = inject(Router);

  onLogin(){
    this.masterSrv.login(this.loginObj).subscribe((res: IAPIRESPONSE)=>{
      if(res.result){
        debugger
        localStorage.setItem('IncidentUser',JSON.stringify(res.data));
        debugger
        this.router.navigateByUrl('/dashboard');

      }else{
        
      }
    })
  }
}
