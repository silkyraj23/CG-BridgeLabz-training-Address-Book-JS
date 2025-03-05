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
function addAddress(address){
    // Function to ensure there is no Duplicate Entry
    let duplicateEntries = addressBook.filter(existingAddress => existingAddress.firstName === address.firstName);
    
    if (duplicateEntries.length > 0) {
        console.log(address.firstName, "already exists");
        return;
    }
    
    addressBook.push(address);
    console.log(address.firstName, "added successfully");
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
// Function to delete an address from the address book
function deleteAddress(name) { 
    let index = addressBook.findIndex(address => address.firstName === name);
    
    if (index !== -1) {
        addressBook.splice(index, 1);
        return "Address deleted successfully";
    } else {
        return "Address not found";
    }
}

// Function to find the number of contacts
function findNumberOfAddress() {
    return addressBook.reduce((count) => count + 1, 0);
}

//Function to search Person in a particular City or State
function searchByCityOrState(city, state) {
    return addressBook.filter(address => 
        (!city || address.city.toLowerCase() === city.toLowerCase()) || 
        (!state || address.state.toLowerCase() === state.toLowerCase())
    );
}

//Function to view Persons by City or State
function viewByCityOrState(city, state) { 
    let viewAddress = addressBook.filter(address => 
        (!city || address.city.toLowerCase() === city.toLowerCase()) || 
        (!state || address.state.toLowerCase() === state.toLowerCase())
    );

    console.log(viewAddress); 
    return viewAddress; 
}

//Function to get number of contact persons i.e. count by City or State
function countByCityOrState(city, state) { 
    return searchByCityOrState(city, state).length;
}

//Function to Sort the entries alphabetically by name
function sortByName() {
    return [...addressBook].sort((a, b) => a.firstName.localeCompare(b.firstName));
}