const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Input Variables
let customerName;
let age;
let movieName;
let numberOfTickets;
let pricePerTicket;
let paymentMethod;

// Customer Name
rl.question("Enter Customer Name: ", function(name) {
    customerName = name;

    // Age
    rl.question("Enter Age: ", function(ageInput) {
        age = Number(ageInput);

        // Movie Name
        rl.question("Enter Movie Name: ", function(movie) {
            movieName = movie;

            // Number of Tickets
            rl.question("Enter Number of Tickets: ", function(ticketInput) {
                numberOfTickets = Number(ticketInput);

                // Price Per Ticket
                rl.question("Enter Price Per Ticket: ", function(priceInput) {
                    pricePerTicket = Number(priceInput);

                    // Payment Method
                    rl.question("Enter Payment Method (Card / UPI / Cash): ", function(payment) {
                        paymentMethod = payment;

                        // Calculations
                        let total = numberOfTickets * pricePerTicket;
                        let gst = total * 0.18;
                        let finalAmount = total + gst;

                        // Customer Category
                        let category;

                        if (age < 5) {
                            category = "Entry Not Allowed";
                        } else if (age >= 5 && age <= 17) {
                            category = "Child";
                        } else if (age >= 18 && age <= 59) {
                            category = "Adult";
                        } else {
                            category = "Senior Citizen";
                        }

                        // Discount
                        let discount = 0;

                        if (finalAmount > 2000) {
                            discount = finalAmount * 0.10;
                            finalAmount = finalAmount - discount;
                        }

                        // Free Gift
                        let freeGift;

                        if (numberOfTickets >= 5) {
                            freeGift = "Free Popcorn Combo";
                        } else {
                            freeGift = "No Free Gift";
                        }

                        // Payment Status
                        let paymentStatus;

                        switch (paymentMethod.toLowerCase()) {
                            case "card":
                                paymentStatus = "Payment Successful using Card";
                                break;

                            case "upi":
                                paymentStatus = "Payment Successful using UPI";
                                break;

                            case "cash":
                                paymentStatus = "Payment Successful using Cash";
                                break;

                            default:
                                paymentStatus = "Invalid Payment Method";
                        }

                        // Booking Summary
                        console.log("\n========== MOVIE TICKET BOOKING SUMMARY ==========");
                        console.log("Customer Name      :", customerName);
                        console.log("Movie Name         :", movieName);
                        console.log("Age                :", age);
                        console.log("Category           :", category);
                        console.log("Number of Tickets  :", numberOfTickets);
                        console.log("Price Per Ticket   : ₹" + pricePerTicket);
                        console.log("Total              : ₹" + total.toFixed(2));
                        console.log("GST (18%)          : ₹" + gst.toFixed(2));
                        console.log("Discount           : ₹" + discount.toFixed(2));
                        console.log("Final Amount       : ₹" + finalAmount.toFixed(2));
                        console.log("Payment Status     :", paymentStatus);
                        console.log("Free Gift          :", freeGift);
                        console.log("==================================================");

                        rl.close();
                    });
                });
            });
        });
    });
});