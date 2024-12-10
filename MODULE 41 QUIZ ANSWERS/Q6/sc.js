function validateLinkedInURL() {
    // Get the user input from the text field
    const url = document.getElementById("urlInput").value;

    // Define the regex pattern for valid LinkedIn profile URLs
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;

    // Test the URL against the regex
    const resultMessage = regex.test(url)
        ? "Valid LinkedIn Profile URL!"
        : "Invalid LinkedIn Profile URL! Please enter a URL starting with 'https://www.linkedin.com/in/' and containing only valid characters (letters, digits, underscores, hyphens). The profile ID must be between 5 and 30 characters long.";

    // Display the result
    document.getElementById("result").innerText = resultMessage;
}