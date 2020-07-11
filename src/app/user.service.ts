export class UserService{
  activeUserz = ['Max', 'Anna'];
  inactiveUserz = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUserz.push(this.activeUserz[id]);
    this.activeUserz.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUserz.push(this.inactiveUserz[id]);
    this.inactiveUserz.splice(id, 1);
  }
}
