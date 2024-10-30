
        function calculateScore() {
            const form = document.getElementById('quizForm');
            let score = 0;

            // Loop through existing questions
            const totalQuestions = 8; // Update this to the number of questions you have
            for (let i = 1; i <= totalQuestions; i++) {
                const answer = parseInt(form['q' + i].value); // Get numeric value from select
                score += answer; // Accumulate the score
            }

            // Determine the result based on the score
            let resultMessage = '';
            if (score >= 24) {
                resultMessage = "You may be experiencing signs of anxiety.";
            } else if (score >= 12) {
                resultMessage = "Your feelings may be normal variations in mood.";
            } else {
                resultMessage = "Your results are inconclusive. Consider consulting a mental health professional.";
            }

            // Display the result message
            document.getElementById('result').textContent = resultMessage;
        }
    