# Multi-Currency-Bank-Account-Balance-and-Profile-Statement-CLI

## Topic: 
JavaScript Data Type Conversion, JSON, and Number Formatting

## The Objective:
A lightweight Node.js script that manages a bank customer's personal information, serializes it to JSON, and formats their account balance into local regional currencies.

## Pseudocode Algorithm & Data Structures:

1. **Initialize Data Objects:**
   - Create a customer profile object containing `name`, `address`, `phoneNumber`, `dateOfBirth`, and raw `balance` values.
2. **Format Financial Data:**
   - Use `Intl.NumberFormat` with locale and currency property-value pairs (e.g., USD, JPY, EUR) to format account balances.
   - Apply `Math` objects or `toFixed()` for decimal precision where necessary.
3. **JSON Conversion:**
   - Convert the customer profile object into a JSON string using `JSON.stringify()`.
   - Parse or log the serialized data to simulate data transmission or storage.
4. **Output Results:**
   - Log the formatted multi-currency financial statement and the JSON profile string to the console using template literals.