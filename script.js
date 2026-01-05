const lessons = {
    math: {
        title: "Mathematics: Basic Addition",
        content: "<p>Addition is bringing two or more numbers together to make a new total.</p><p>Example: <strong>2 + 2 = 4</strong></p>",
        quiz: {
            question: "What is 5 + 3?",
            options: ["7", "8", "9"],
            answer: "8"
        }
    },
    english: {
        title: "English: Greetings",
        content: "<p>Common greetings include 'Hello', 'Good Morning', and 'As-salamu alaykum'.</p>",
        quiz: {
            question: "Which represents 'Peace be upon you'?",
            options: ["Hello", "Goodbye", "As-salamu alaykum"],
            answer: "As-salamu alaykum"
        }
    },
    cyber: {
        title: "Cyber Safety: Passwords",
        content: "<p>Always use a strong password with letters, numbers, and symbols.</p>",
        quiz: {
            question: "Which is a strong password?",
            options: ["123456", "password", "Tr0ngP@ss!"],
            answer: "Tr0ngP@ss!"
        }
    }
};

function openLesson(subject) {
    document.getElementById('subjects').style.display = 'none';
    document.getElementById('lesson-viewer').style.display = 'block';
    
    const lesson = lessons[subject];
    document.getElementById('lesson-title').innerText = lesson.title;
    document.getElementById('lesson-content').innerHTML = lesson.content;
    
    // Setup Quiz
    document.getElementById('quiz-question').innerText = lesson.quiz.question;
    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = ''; // Clear old buttons
    document.getElementById('quiz-result').innerText = ''; // Clear old result

    lesson.quiz.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, lesson.quiz.answer);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    const result = document.getElementById('quiz-result');
    if (selected === correct) {
        result.style.color = 'green';
        result.innerText = "Correct! Well done.";
    } else {
        result.style.color = 'red';
        result.innerText = "Try again!";
    }
}

function goBack() {
    document.getElementById('lesson-viewer').style.display = 'none';
    document.getElementById('subjects').style.display = 'block';
}
