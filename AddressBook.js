class AddressBook {
    //constructor
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
    //get and set for firstname 
    //first letter should be capital and min 3 letters
    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let NameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        // test returns a boolen value
        if (NameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "Invalid First Name";
    }

    //get and set for lastname
    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let NameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        // test returns a boolen value
        if (NameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "Invalid  Last Name";
    }

    //get and set for address
    get address() { return this._address; }
    set address(address) {
        let AddressRegex = RegExp("^[A-Za-z]{4,}$");
        if (AddressRegex.test(address))
            this._address = address;
        else
            throw "Invalid Address ";
    }

    //get and set for city
    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityRegex.test(city))
            this._city = city;
        else
            throw "Invalid City ";
    }

    //get and set for state
    get state() { return this._state; }
    set state(state) {
        let StateRegex = RegExp("^[A-Za-z]{4,}$");
        if (StateRegex.test(state))
            this._state = state;
        else
            throw "Invalid state";
    }

    //get and set for zip
    get zip() { return this._zip; }
    set zip(zip) {
        let ZipRegex = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
        if (ZipRegex.test(zip))
            this._zip = zip;
        else
            throw "Invalid zipcode ";
    }

    //get and set for phoneNumber
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let PhoneRegex = RegExp("^[7896]{1}[0-9]{9}$");
        if (PhoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw " Invalid Mobile Number ";
    }

    // get and set for email
    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "Invalid Email";
    }

    //defining to string method
    toString() {
        return "\nFirst Name: " + this.firstName + ", Last Name: " + this.lastName
            + "\nAddress: " + this.address
            + ", City: " + this.city + ", State: "
            + this.state + "\nZip: " + this.zip
            + ", Phone Number: " + this.phoneNumber + ", Email: " + this.email;
    }
}

//creating an instance and giving contact details
try {
    let AddressBookArray = new Array();
    AddressBookArray.push(new AddressBook("Priya", "Bhagat", "tilakpark", "Dehli", "Maharashtra", "413004",
        "8958268940", "bhagatPriya@gmail.com"));

    AddressBookArray.push(new AddressBook("Neha", "Patil", "modikhana", "Nagpur", "Maharashtra", "412002",
        "7790368980", "nehapatil@gmail.com"));

    AddressBookArray.push(new AddressBook("Shreya", "Mule", "dawatChouk", "Pune", "Maharashtra", "414007",
        "9088373499", "muleshreya@gmail.com"));

    AddressBookArray.push(new AddressBook("Payal", "Giri", "Kothrud", "Pune", "Maharashtra", "413007",
        "8878368999", "payalgiri@gmail.com"));

    AddressBookArray.push(new AddressBook("Soham", "Deshmukh", "navipeth", "Banglore", "Karnataka", "411007",
        "7090355988", "sohamdeshmukh@gmail.com"));

    AddressBookArray.push(new AddressBook("Soham", "Deshmukh", "navipeth", "Banglore", "Karnataka", "411007",
        "7090355988", "sohamdeshmukh@gmail.com"));
    AddressBookArray.forEach((contact) => console.log(contact.toString()));

    //finding Contact using name
    let check = AddressBookArray.findIndex(contact => contact.firstName == "Neha");
    //updating the contact detail
    AddressBookArray[check].zip = "412005";
    AddressBookArray[check].lastName = "More";
    //display updated contacts   
    console.log("\nupdated Contact Details");
    AddressBookArray.forEach((contact) => console.log(contact.toString()));

    // Delete an element from an array
    let index = AddressBookArray.findIndex(contact => contact.firstName == "Payal");
    AddressBookArray.splice(index, 3);
    console.log("\ncontacts after being deleted");
    AddressBookArray.forEach((contact) => console.log(contact.toString()));

    // find total number of contacts
    var totalContacts = 0;
    function findtotalContacts(AddressBookArray) {
        if (AddressBookArray != null)
            totalContacts++;
        return totalContacts;
    }
    AddressBookArray.reduce(findtotalContacts, 1);
    console.log("\nTotal number of contacts in AddressBook  : " + totalContacts);

    // check for duplicate Contact
    let duplicateCount = 0;
    function CheckDuplicates(contact) {
        if (contact.firstName == "Soham")
            duplicateCount++;
        return duplicateCount;
    }
    // checking the count for each contact
    AddressBookArray.forEach((contact) => CheckDuplicates(contact));
    if (duplicateCount == 1)
        console.log("\nNot a Duplicate entry");
    else
        console.log("\nDuplicate entry");

    // Search Contact using city or state
    //Search by city
    var numOfCity = 0;
    var numOfState = 0;
    console.log("\nContact by City Pune")
    function ContactByCity(contact) {
        if (contact.city == "Pune") {
            console.log(contact.toString());
            numOfCity++;
        } 
    }
    AddressBookArray.filter(ContactByCity);
    console.log("\nPersons belongs to city " + numOfCity);

    //by state
    function ContactByState(contact) {
        if (contact.state == "Maharashtra") {
            console.log(contact.toString());
            numOfState++;
        }
    }
    console.log("\nContact By State ")
    AddressBookArray.filter(ContactByState);
    console.log("contacts belongs to state " + numOfState);

    //view Contacts by city or State using map  
    //by city
    function CityMap(contact) {
        return contact.city + " -> " + contact.firstName + "  " + contact.lastName;
    }
    let addressCityMap = AddressBookArray.map(CityMap);
    console.log(addressCityMap);

    //by state
    function StateMap(contactDetails) {
        return contactDetails.state + " -> " + contactDetails.firstName + "  " + contactDetails.lastName;
    }
    let addressStateMap = AddressBookArray.map(StateMap);
    console.log(addressStateMap);
}
catch (e) {
    console.log(e);
}