# QR-Code-Generator
A simple web application to generate QR codes from user input. QR codes can store a variety of data types including URLs, plain text, contact information, and more, making them useful for quick data sharing


Features

User-Friendly Interface: Easy-to-use input field for entering the content to be encoded.
Instant QR Code Generation: Generates and displays the QR code as soon as the user submits the input.
Responsive Design: Works well on both desktop and mobile devices.
Technologies Used

HTML: For structuring the web page.
CSS: (Optional) For basic styling and layout.
JavaScript: For handling user interactions and API calls.
QRServer API: External service used for generating QR codes.
How It Works

User Input: The user enters the desired text or URL into the input field.
Generate QR Code: When the "Create QR Code" button is clicked, a JavaScript function is triggered.
API Request: The function sends a request to the QRServer API, passing the user input as a parameter.
Display QR Code: The QR code image returned by the API is displayed on the web page.
