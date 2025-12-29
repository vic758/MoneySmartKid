function checkAnswer(button, correct) {
  const feedback = document.getElementById('quiz-feedback');

  let userAnswer;
  if (typeof correct === 'number') {
    userAnswer = parseInt(button.innerText.replace('$',''));
    if (userAnswer === correct) {
      feedback.innerText = '✅ Correct!';
      feedback.style.color = 'green';
    } else {
      feedback.innerText = '❌ Try again!';
      feedback.style.color = 'red';
    }
  } else {
    if (button.innerText.toLowerCase().includes(correct)) {
      feedback.innerText = '✅ Correct!';
      feedback.style.color = 'green';
    } else {
      feedback.innerText = '❌ Try again!';
      feedback.style.color = 'red';
    }
  }
}
function askAI() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const userText = input.value.trim();
  
  if (userText === "") return;

  // Show user message
  const userMessage = document.createElement('p');
  userMessage.innerHTML = "<b>You:</b> " + userText;
  chatBox.appendChild(userMessage);

  // Clear input
  input.value = "";

  // Simple AI responses (you can expand these)
  let aiResponse = "Hmm, I don't know that yet! Try asking about saving, budgeting, or investing.";

  const text = userText.toLowerCase();
  if (text.includes("save")) aiResponse = "Saving money is great! Try to save at least 10% of your allowance.";
  else if (text.includes("budget")) aiResponse = "Budgeting helps you plan. Divide money into spending, saving, and fun.";
  else if (text.includes("invest")) aiResponse = "Investing can help your money grow over time, even with small amounts!";
  else if (text.includes("quiz")) aiResponse = "Check the quiz section to practice what you've learned!";

  // Show AI response
  const aiMessage = document.createElement('p');
  aiMessage.innerHTML = "<b>AI Navigator:</b> " + aiResponse;
  aiMessage.style.color = "#ff9800";
  chatBox.appendChild(aiMessage);

  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;
}
