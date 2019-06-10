export class User {
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phone: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }
}
