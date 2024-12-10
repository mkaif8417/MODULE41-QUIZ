function validateURL() {
           
    const url = document.getElementById("urlInput").value;

   
    const regex = /^(https?:\/\/)[a-zA-Z0-9-._]+(\.[a-zA-Z]{2,})+$/;


    const resultMessage = regex.test(url) ? "Valid URL!" : "Invalid URL! Please enter a valid URL starting with http:// or https://.";

   
    document.getElementById("result").innerText = resultMessage;
}