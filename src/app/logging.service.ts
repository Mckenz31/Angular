export class LoggingService{
  StatusUpdate(status:string){
    console.log('A server status changed,new status: ' + status);
  }
}
