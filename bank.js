// intillize object
const customerInfo1 = {
    name: "John sanders",
    address: "1234 willow Av",
    phoneNumber: "521-223-6538",
    dateOfBirth: new Date(2006, 8, 3),
    balance: 3232908.4232
}

const customerInfo2 = {
    name: "Bruce Lee",
    address: "Lee Tat Street in Yau Ma Tei, Kowloon",
    phoneNumber: "+852 2384-9105",
    dateOfBirth: new Date('1940-11-27'),
    balance: 4399489390908.43322
}


// Formated Finances:
let formattedAtUS = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD'
});

customerInfo1.balance = formattedAtUS.format(customerInfo1.balance.toFixed(2))

let formattedAtHK = new Intl.NumberFormat('zh-HK', {
    style: 'currency',
    currency: 'HKD'
});

customerInfo2.balance = formattedAtHK.format(customerInfo2.balance.toFixed(2))

// JSON Conversion:
let customerInfo1StringValue = JSON.stringify(customerInfo1);
let customerInfo2StringValue = JSON.stringify(customerInfo2);

// Output
console.log("Customer Info:")
console.log(`${customerInfo1StringValue} \n ${customerInfo2StringValue}`)