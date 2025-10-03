const quizData = [
      {
        question: "Quero criar uma barra de navegação semântica. Vou precisar da tag...?",
        options: ["<header>", "<menu>", "<ul>", "<nav>"],
        answer: "<nav>"
      },
      {
        question: "Preciso deixar os elementos coladinhos à esquerda, no início da linha...",
        options: [
          "justify-content: flex-start;",
          "align-items: flex-start;",
          "text-align: left;",
          "margin-left: auto;"
        ],
        answer: "justify-content: flex-start;"
      },
      {
        question: "Como fazer com que eles fiquem coladinhos à direita, no final da linha?",
        options: [
          "justify-content: flex-end;",
          "padding-right: 20px;",
          "position: absolute; right: 0;",
          "text-align: right;"
        ],
        answer: "justify-content: flex-end;"
      },
      {
        question: "Preciso fazer com que eles fiquem um de cada lado, com espaço entre eles...",
        options: [
          "align-items: space-between;",
          "margin: auto;",
          "justify-content: space-between;",
          "justify-content: center;"
        ],
        answer: "justify-content: space-between;"
      },
      {
        question: "Quero jogar os elementos para baixo, no fundo da tela, e agora?",
        options: [
          "justify-content: flex-end;",
          "position: absolute; bottom: 0;",
          "align-items: flex-end;",
          "margin-bottom: 50px;"
        ],
        answer: "align-items: flex-end;"
      },
      {
        question: "Quero estruturar o conteúdo principal da página de forma semântica...",
        options: ["<body>", "<div class='main'>", "<section>", "<main>"],
        answer: "<main>"
      },
      {
        question: "Quero separar um artigo de blog do restante do conteúdo...",
        options: ["<div>", "<section>", "<article>", "<aside>"],
        answer: "<article>"
      },
      {
        question: "Quero adicionar espaço interno (entre o conteúdo e a borda do elemento)...",
        options: ["padding", "margin", "border-spacing", "gap"],
        answer: "padding"
      },
      {
        question: "Quero afastar um elemento dos outros elementos ao redor...",
        options: ["border", "padding", "margin", "gap"],
        answer: "margin"
      },
      {
        question: "E pra fechar com chave de ouro... Qual o ano em que o Vai na Web foi fundado?",
        options: ["2016", "2017", "2018", "2019"],
        answer: "2017"
      }
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const feedbackEl = document.getElementById("feedback");
    const finalScoreEl = document.getElementById("final-score");

    function loadQuestion() {
      let q = quizData[currentQuestion];
      questionEl.textContent = q.question;
      optionsEl.innerHTML = "";
      feedbackEl.textContent = "";
      finalScoreEl.textContent = "";

      q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option");
        btn.onclick = () => checkAnswer(option);
        optionsEl.appendChild(btn);
      });
    }

    function checkAnswer(selected) {
      let correct = quizData[currentQuestion].answer;
      if (selected === correct) {
        feedbackEl.textContent = "✅ Resposta correta!";
        score++;
      } else {
        feedbackEl.textContent = "❌ Resposta incorreta!";
      }

      setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
          loadQuestion();
        } else {
          endQuiz();
        }
      }, 1000);
    }

    function endQuiz() {
      questionEl.textContent = "Fim do jogo!";
      optionsEl.innerHTML = "";
      feedbackEl.textContent = "";
      finalScoreEl.textContent = `Você acertou ${score} de ${quizData.length} perguntas 🎉`;
    }

    loadQuestion();