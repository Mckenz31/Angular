export class LoggingService{
  StatusUpdate(name:string, status:string){
    console.log('A server status changed, name: ' + name + 'new status: ' + status);
  }
}
