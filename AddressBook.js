class Address {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
        // Validate fields
        this.validate();
    }
    validate() { 
        // Regex patterns
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^[0-9]{10}$/;
        const addressRegex = /[A-Za-z0-9\s]{4,}/;
        const zipRegex = /^\d{6}$/;
        // Validate fields
        if (!emailRegex.test(this.email)) {
            throw new Error("Invalid email");
        }
        if (!nameRegex.test(this.firstName) || !nameRegex.test(this.lastName)) {
            throw new Error("Invalid First or Last Name");
        }
        if (!addressRegex.test(this.address)) {
            throw new Error("Invalid address");
        }
        if (!addressRegex.test(this.state)) {
            throw new Error("Invalid state");
        }
        if (!addressRegex.test(this.city)) {
            throw new Error("Invalid city");
        }
        if (!phoneRegex.test(this.phone)) { 
            throw new Error("Invalid phone number");
        } 
        if (!zipRegex.test(this.zip)) {
            throw new Error("Invalid ZIP code");
        }
    }
}

let addressBook = []; 

// Function to store contact in the address book array
function addAddress(address) {
    addressBook.push(address);
}

// Function to find and edit contact
function editAddress(name, newDetails) { 
    let existingAddress = addressBook.find(contact => contact.firstName === name);
    
    if (existingAddress) {
        Object.assign(existingAddress, newDetails);
        existingAddress.validate(); // Validate after updating details
    } else {
        throw new Error("Contact not found");
    }
}