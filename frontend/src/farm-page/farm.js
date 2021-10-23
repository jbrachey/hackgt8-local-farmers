export default class Farm {
    constructor(name, phone, address, city, state, zip) {
        this.name = name;
        this.phone = '(' + phone.substring(0, 3) + ') ' + phone.substring(3, 6) + '-' + phone.substring(6);
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        
    }
}