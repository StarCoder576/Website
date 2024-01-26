function checkInput() {
    // Get user input
    let userInput = document.getElementById('userInput').value.toLowerCase(); // Convert to lowercase for case-insensitivity

    // Get elements for displaying messages
    

    // Check if the input phrase matches the expected phrase
    console.log('userInput')
    if (userInput === 'answer') {
        // Show accepted message and hide rejected message
        acceptedMessage.style.display = 'block';
        rewardImages.style.display = 'flex'
        rejectedMessage.style.display = 'none';
        secretMessage.style.display = 'none';
        secretImages.style.display= 'none';
    } else if (userInput === 'secret') {
        secretMessage.style.display = 'block'
        secretImages.style.display= 'flex'
        acceptedMessage.style.display = 'none';
        rewardImages.style.display = 'none'
        rejectedMessage.style.display = 'none';
    } else {
        // Show rejected message and hide accepted message
        rejectedMessage.style.display = 'block';
        acceptedMessage.style.display = 'none';
        rewardImages.style.display = 'none'
        secretMessage.style.display = 'none';
        secretImages.style.display= 'none';
    }
}
