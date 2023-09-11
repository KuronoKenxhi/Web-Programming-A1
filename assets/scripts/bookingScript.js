// JAVASCRIPT FILE for Booking Page
// Author: Mitchell Hughes s3901335

//
//  VALIDATION
//

// Calls the updateCommentText function after all of the html content is loaded
document.addEventListener("DOMContentLoaded", updateCommentText());

// Calls the date validation function after html content is loaded
document.addEventListener("DOMContentLoaded", dateValidation());

// Calls the patient ID validation function after html content is loaded
document.addEventListener("DOMContentLoaded", patientIDAutoCapitalisation());


//
// VISUALS
//

// Sticky Navigation Bar
document.addEventListener("DOMContentLoaded", function() {
    // call elements from html into the script
    const navbar = document.getElementById("navbar");
    const header = document.querySelector("header");
    const stickyOffset = header.offsetHeight; // Offset by the header's height
    const sticky = stickyOffset;

    // On scroll event add class to navbar element called 'sticky'
    window.addEventListener("scroll", function() {
        // checks whether or not the window is below the header or not
        if (window.scrollY >= sticky) {
            // add class to navbar
            navbar.classList.add("sticky");
        } else {
            // remove class from navbar
            navbar.classList.remove("sticky");
        }
    })
});
// Checkbox Background Changer
document.addEventListener("DOMContentLoaded", function() {
    // Call all checkboxes into script
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Adds event listener to each checkbox
    checkboxes.forEach(checkbox => {
        // Event Listener to listen for change event
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                // Adds checked class to parent element
                this.parentElement.classList.add('checked');
                console.log(this.id + " is now Selected")
            }
            else {
                // Removes checked class from parent element
                this.parentElement.classList.remove('checked');
                console.log(this.id + " is now Unselected")
            }
        });
        
    });
});



//
// FUNCTIONS
//

// Updates the comment text area dynamically as drop down selection changes
function updateCommentText() {
    // Import elements by id
    var reason = document.getElementById("reason");
    var textarea = document.getElementById("comment");

    // Setup content options accordingly
    const contentOptions = {
        childhoodVaccination: "Multiple vaccines are normally administered in combination and may cause the child to be sluggish or feverous for 24 - 48 hours afterwards.",
        influenzaShot: "The best time to get vaccinated is in April and May each year for optimal protection over the winter months.",
        covidBooster: "It is advised that everyone should arrange to have their third shot as soon as possible and adults over the age of 30 should have their fourth shot to protect against new variant strains.",
        bloodTest: "Some tests require some fasting ahead of time. A staff member will advise you of this prior to the appointment if required."
    }

    reason.addEventListener("change", function() {
        // Get selected option value
        const selectedValue = reason.value;

        // Update textarea content based on dropdown selection
        if(selectedValue === "") {
            textarea.value = "";
        }
        else if(selectedValue === "childhoodVaccination") {
            textarea.value = contentOptions["childhoodVaccination"];
            console.log("Childhood Vaccination Information Displayed");
        }
        else if(selectedValue === "influenzaShot") {
            textarea.value = contentOptions["influenzaShot"];
            console.log("Influenza Shot Information Displayed");
        }
        else if(selectedValue === "covidBooster") {
            textarea.value = contentOptions["covidBooster"];
            console.log("Covid Booster Information Displayed");
        }
        else if(selectedValue === "bloodTest") {
            textarea.value = contentOptions["bloodTest"];
            console.log("Blood Test Information Displayed");
        }
    });
}
// Date Validation to restrict dates that are in the past
function dateValidation() {
    const dateInput = document.getElementById("date");

    dateInput.addEventListener("input", function() {
        const selectedDate = new Date(dateInput.value);
        const currentDate = new Date();

        selectedDate.setHours(0, 0, 0, 0);
        currentDate.setHours(0, 0, 0, 0);

        if (selectedDate < currentDate) {
            console.log("Date Invalid");
            alert("Please select a valid date for an appointment.")
            dateInput.value = "";
        }
    });
}
// Patient ID Validation to restrict lower case inputs
function patientIDAutoCapitalisation() {
    // Calls patient id value into textInput const
    const textInput = document.getElementById("pid");

    // AUTO CAPITALISATION
    // Add Event listener for input events that sets to uppercase
    textInput.addEventListener("input", function() {
        const currentText = textInput.value;
        textInput.value = currentText.toUpperCase();
    });
}
// Checkbox Validation to ensure at least one checkbox is selected (This function is called in the HTML submit button using "onclick" event)
function checkboxValidation() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checked = false;
    
    // Checks all checkboxes to see if any of them are checked
    checkboxes.forEach(checkbox => {
        if(checkbox.checked) {
            checked = true;
        }
    });
    if(!checked) {
        alert("Please select at least one available time.")
        console.log("No Time Selected");
    }
}
// Patient ID Validation to restrict incorrect formatting
function patientIDValidation () {
    
    // PATIENT ID VALIDATION
    // Calls submit button into submitButton const
    const pidInput = document.getElementById("pid");

    if (!validate(pidInput.value)) {
        alert("Please enter a valid Patient ID.");
    }
    // Validation Function
    function validate(patientID) {
        // Define the regex pattern
        const formatPattern = /^[A-Z]{2}\d+[A-Z]$/;

        // Compare input with regex pattern
        if (!formatPattern.test(patientID)) {
            console.log("Regex Comparison Failed")
            return false;
        }
        // Use checksum rule to determine remainder
        const digits = patientID.match(/\d/g).map(Number);
        const sumOfDigits = digits.reduce((acc, digit) => acc + digit, 0);
        const checksumRuleResult = sumOfDigits % 26;
        
        // Initialise expectedChecksumValue variable
        var expectedChecksumValue ="";

        // Switch statement to define what character each remainder count maps to:
        switch(checksumRuleResult) {
            case 0:
                expectedChecksumValue = 'Z';
                break;
            case 1:
                expectedChecksumValue = 'A';
                break;
            case 2:
                expectedChecksumValue = 'B';
                break;
            case 3:
                expectedChecksumValue = 'C';
                break;
            case 4:
                expectedChecksumValue = 'D';
                break;
            case 5:
                expectedChecksumValue = 'E';
                break;
            case 6:
                expectedChecksumValue = 'F';
                break;
            case 7:
                expectedChecksumValue = 'G';
                break;
            case 8:
                expectedChecksumValue = 'H';
                break;
            case 9:
                expectedChecksumValue = 'I';
                break;
            case 10:
                expectedChecksumValue = 'J';
                break;
            case 11:
                expectedChecksumValue = 'K';
                break;
            case 12:
                expectedChecksumValue = 'L';
                break;
            case 13:
                expectedChecksumValue = 'M';
                break;
            case 14:
                expectedChecksumValue = 'N';
                break;
            case 15:
                expectedChecksumValue = 'O';
                break;
            case 16:
                expectedChecksumValue = 'P';
                break;
            case 17:
                expectedChecksumValue = 'Q';
                break;
            case 18:
                expectedChecksumValue = 'R';
                break;
            case 19:
                expectedChecksumValue = 'S';
                break;
            case 20:
                expectedChecksumValue = 'T';
                break;
            case 21:
                expectedChecksumValue = 'U';
                break;
            case 22:
                expectedChecksumValue = 'V';
                break;
            case 23:
                expectedChecksumValue = 'W';
                break;
            case 24:
                expectedChecksumValue = 'X';
                break;
            case 25:
                expectedChecksumValue = 'Y';
                break;
            case 26:
                expectedChecksumValue = 'Z';
                break;
        }
        
        // Compare last character with expected checksum result
        var finalChecksumValue = patientID.slice(-1) === expectedChecksumValue;
        console.log("Checksum validated to: " + finalChecksumValue);
        return finalChecksumValue;
    }
}