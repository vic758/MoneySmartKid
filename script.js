// Quiz function
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

// AI Chatbot
function askAI() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const userText = input.value.trim();
  if (!userText) return;

  // Show user message
  const userMessage = document.createElement('p');
  userMessage.classList.add('user-message'); // add class for styling
  userMessage.innerHTML = "<b>You:</b> " + userText;
  chatBox.appendChild(userMessage);
  input.value = "";

  const text = userText.toLowerCase();
  let aiResponse = "Hmm, I don't know that yet! Try asking about saving, budgeting, or investing.";

  // Your AI responses
  if (text.includes("save")) {
    aiResponse = "Saving money is great! Try to save at least 10% of your allowance.";
  } 
  else if (text.includes("budget")) {
    aiResponse = "Budgeting helps you plan. Divide money into spending, saving, and fun.";
  } 
  else if (text.includes("invest") || text.includes("how to invest") || text.includes("investment")) {
    aiResponse = `Investing is a way to grow your money over time, but since you’re a teen, there are a few important things to keep in mind first: you usually can’t open investment accounts on your own until you’re 18, but you can learn, save, and even invest with a parent or guardian as a custodian. Here’s a clear breakdown:

1. Learn the Basics First
- Stocks – owning a small part of a company. They can go up or down in value.
- Bonds – lending money to a company or government; usually safer but slower growth.
- Mutual Funds / ETFs – a mix of stocks and bonds in one package; good for beginners.
- Savings Accounts / CDs – very safe, low returns, good for short-term savings.

2. Set Goals
Decide why you want to invest:
- Short-term (1–3 years): better to save in safe accounts.
- Long-term (5+ years): you can handle more risk, like stocks.

3. Start Small
You don’t need thousands. Even $10–$50 a week can grow over time.
Use apps that let teens invest with parental approval (like Greenlight, Stockpile, or custodial accounts at big brokers).

4. Diversify
Don’t put all your money in one stock. Spread it across companies, industries, or even funds.

5. Think Long-Term
Avoid “get rich quick” schemes.
The stock market has ups and downs, but historically grows over time.

6. Stay Informed
Read financial news in simple terms.
Watch videos or podcasts for beginners.
Learn about compound interest—it’s how your money grows faster over time.

💡 Tip: Even before you can invest, you can start a “practice portfolio” using fake money to track investments. Apps like Investopedia Simulator are perfect for that.

If you want, I can make a step-by-step plan for a teen to start investing safely with examples of where to put small amounts of money. Do you want me to do that?`;
  } 
  else if (text.includes("make a step-by-step plan") || text.includes("yes") || text.includes("sure") || text.includes("okay")) {
    aiResponse = `Absolutely! Here’s a safe, practical, step-by-step plan for a teen to start investing, even with small amounts of money:

Step 1: Learn and Track Your Money
Goal: Understand where your money is going and how to save it.
How:
- Keep a simple budget: track allowance, gifts, or part-time job money.
- Use a notebook, spreadsheet, or free apps like Mint or Goodbudget.
💡 Tip: Even saving $5–$10 a week is a good start.

Step 2: Open a Custodial Account
Goal: Legally invest as a minor with a parent/guardian.
Options:
- Fidelity Youth Account – stocks, ETFs, mutual funds, no fees.
- Charles Schwab Custodial Account – same features, easy to start.
- Stockpile – buy fractional shares (less than 1 full share) and gift cards.
How: Parent opens the account, you can manage investments together.

Step 3: Start With Safe, Small Investments
Step 3a: High-Interest Savings – for emergency money and short-term goals.
Example: $100–$500 in an online savings account (Ally, Marcus, or your bank).
Step 3b: Low-Risk Funds – ETFs or index funds for long-term growth.
Example:
- S&P 500 ETF (Vanguard VOO, SPY) – tracks 500 big U.S. companies.
- Total Stock Market ETF (VTI) – spreads risk across many companies.
Step 3c: Fractional Stocks – buy a small piece of a stock if you like a company.
Example: Buy $10 of Apple, Tesla, or Disney.

Step 4: Use Dollar-Cost Averaging
Goal: Reduce risk of market ups and downs.
How: Invest a fixed amount regularly, e.g., $10 every week or $50 every month.

Step 5: Learn While Practicing
Simulators: Practice with fake money first.
Investopedia Simulator – create a portfolio, track growth, learn strategy.
Education: Read beginner-friendly books like:
- “The Teen Investor” by Emmanuel Modu
- “I Want More Pizza” by Steve Burkholder

Step 6: Stay Consistent
Keep adding small amounts.
Reinvest profits instead of spending them.
Review your portfolio every 3–6 months.

Example Monthly Plan for a Teen With $50/Month
Month	Action	Amount	Type
1	High-interest savings	$20	Emergency fund
	ETF (S&P 500)	$20	Long-term growth
	Fractional stock	$10	Fun/learning
2	Repeat monthly contributions in same split	$50	…
…	Continue over months	…	…

💡 After 12 months, you could have $600 invested + some growth—an awesome start at your age!

If you want, I can also make a visual roadmap showing exactly where your money goes each month and how it grows over 5–10 years. It’s super motivating to see it visually. Do you want me to make that roadmap?`;
  } 
  else if (text.includes("roadmap")) {
    aiResponse = `If you want, I can make a visual roadmap showing exactly where your money goes each month and how it grows over 5–10 years. It’s super motivating to see it visually!

Here’s an example for $50/month over 5 years:

Monthly investment: $50
- $20 → high-interest savings (1.5% APY)
- $20 → S&P 500 ETF (avg 7% annual return)
- $10 → fractional stocks (avg 10% annual return, higher risk)

Investment duration: 5 years (60 months)
Returns compounded monthly

Simplified Table:
Year	Savings	ETF	Fractional Stocks	Total
1	$242	$243	$122	$607
2	$487	$504	$253	$1,244
3	$734	$780	$393	$1,907
4	$983	$1,072	$544	$2,599
5	$1,235	$1,381	$706	$3,322

💡 Explanation:
- Savings grow slowly but safely
- ETFs provide steady growth
- Fractional stocks add more risk but can grow faster
- After 5 years, your $3,000 contribution becomes ~$3,322+ thanks to compound interest

Step-by-Step Roadmap:
1. Start small and consistent: $50 per month.
2. Split investments wisely: safety + growth + learning/fun.
3. Track your portfolio every 3–6 months.
4. Reinvest earnings.
5. Increase contributions over time.
6. Stay long-term.

If you want, I can also make a colorful visual chart showing monthly growth for 5–10 years—like a graph where you can actually “see your money climb.” It’s super motivating. Do you want me to make that graph next?`;
  }

  // Show AI response in ChatGPT style
  const aiMessage = document.createElement('p');
  aiMessage.classList.add('ai-message');
  aiMessage.innerHTML = "<b>AI Navigator:</b> " + aiResponse;
  chatBox.appendChild(aiMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Press Enter to send
document.getElementById('user-input').addEventListener('keypress', function(e){
  if (e.key === 'Enter') askAI();
});
