export class User{

  userName: string;
  password: string;

  constructor(){
    this.userName ='',
    this.password=''
  }
}

export interface IAPIRESPONSE{
    
        message: string,
        result: boolean,
        data: any,
      
}

export class LoggedUser{
  userId: number =0
  userName: string = ''
  emailId: string = ''
  fullName: string =''
  role: string =''
  createdDate: string=''
  password: string=''
  projectName: string=''
  refreshToken: string=''
  refreshTokenExpiryTime: string=''

  constructor() {
  this.userId =0
  this.userName = ''
  this.emailId = ''
  this.fullName =''
  this.role =''
  this.createdDate=''
  this.password=''
  this.projectName=''
  this.refreshToken=''
  this.refreshTokenExpiryTime=''
    
  }
}