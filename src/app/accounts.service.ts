export class AccountsService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAdd(name: string, status:string){
    this.accounts.push({name: name, status:status});
  }

  onChange(id:number, newStatus:string){
    this.accounts[id].status = newStatus
  }


}
