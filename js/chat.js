// Function to display the chatbox once the user provides their API key
function startChat() {
    const apiKey = document.getElementById('apiKey').value;
    if (apiKey) {
        const chatbox = document.getElementById('chatbox');
        chatbox.style.display = 'block';
    } else {
        alert('Please enter your OpenAI API Key to proceed.');
    }
}

// Function to send the user's message and get a response from ChatGPT
async function sendMessage() {
    const apiKey = document.getElementById('apiKey').value;
    const userInput = document.getElementById('userInput').value;

    // Check if the user input is not empty
    if (userInput.trim() === '') {
        alert('Please enter a message.');
        return;
    }

    // Generate a random prompt for the blind date personality
    const prompts = [
        "You are a passionate musician who loves to talk about music.",
        "You are a world traveler with countless stories from different countries.",
        "You are a bookworm who can discuss literature for hours.",
        // ... add more personalities
    ];
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: `${randomPrompt}\nUser: ${userInput}\nBot:`,
                max_tokens: 150
            })
        });

        const data = await response.json();
        const botResponse = data.choices[0].text.trim();

        // Display the user's message and the bot's response in the chatbox
        const messagesDiv = document.getElementById('messages');
        messagesDiv.innerHTML += `<p>User: ${userInput}</p>`;
        messagesDiv.innerHTML += `<p>Bot: ${botResponse}</p>`;

        // Clear the user input field
        document.getElementById('userInput').value = '';
    } catch (error) {
        alert('Error communicating with OpenAI. Please check your API key and try again.');
    }
}
