/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll("[data-scroll]").forEach(button => {

    button.addEventListener("click", () => {

        const target =
            document.getElementById(
                button.dataset.scroll
            );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================================================
   HERO PENGUIN EYES
========================================================= */

const penguin =
    document.getElementById("penguin");

const pupils =
    document.querySelectorAll(".pupil");


document.addEventListener("mousemove", event => {

    if (!penguin) return;

    const rect =
        penguin.getBoundingClientRect();

    const centerX =
        rect.left + rect.width / 2;

    const centerY =
        rect.top + rect.height / 2;

    let dx =
        event.clientX - centerX;

    let dy =
        event.clientY - centerY;

    const distance =
        Math.sqrt(
            dx * dx +
            dy * dy
        ) || 1;

    const maxMovement = 7;

    dx =
        (dx / distance) *
        Math.min(
            maxMovement,
            distance / 30
        );

    dy =
        (dy / distance) *
        Math.min(
            maxMovement,
            distance / 30
        );

    pupils.forEach(pupil => {

        pupil.style.transform =
            `translate(${dx}px, ${dy}px)`;

    });

});


/* =========================================================
   LETTERS
========================================================= */

const letters = {

    sad: {

        title: "When you're sad",

        text: `Hey… come here for a second.
I know you probably don’t feel like talking right now, and that’s okay. You don’t have to explain everything. You don’t have to pretend you’re fine either.

لو إنتِ زعلانة، فمن حقك تزعلي.
مش لازم كل مرة تبقي strong، ومش لازم تدوري على lesson في كل حاجة وحشة بتحصل. Sometimes things just hurt. And sometimes all you need is to let yourself feel it.

So cry if you need to. Sleep. Stay quiet. Write everything down. Listen to the same song 20 times. Do whatever makes the moment a little easier. You’re allowed to have bad days without feeling guilty about them.

بس promise me one thing: don’t make permanent conclusions about your life based on a temporary feeling.
ما تقرريش إنك مش كفاية لمجرد إن حد خلاكي تحسي كده.
ما تقرريش إنك لوحدك لمجرد إن النهارده كان وحش.
وما تقرريش إن مفيش حاجة حلوة جاية لمجرد إنك مش شايفاها دلوقتي.

I know it hurts now. And maybe hearing “it’ll get better” feels so cliché, but I really hope you remember that feelings change. The thing that feels impossible tonight might be something you look back at one day and think, *“I actually made it through that.”*

And until that day comes, take it one little step at a time.

Eat something. Drink some water. Put your phone down for a while. Take a shower. Get some sleep. Let tomorrow be tomorrow.

And if you need to hear this right now:
You are loved. You matter. You are not a burden. You are not too much. And you don't have to earn your right to be cared for.

This sadness is a chapter, not the whole story.

So take a deep breath, okay?
I promise, this feeling will not last forever. 🤍`

    },


    happy: {

        title: "When you're happy",

        text: `WAIT—YOU’RE HAPPY?? 😭🤍
Okay first of all, STOP and actually enjoy it.

I know you might be tempted to think about what’s next, what could go wrong, or whether this happiness is going to last. Don’t. Not right now. You deserve to have a moment where you’re simply happy without questioning it.

So whatever happened today, whether it’s something huge or something ridiculously small… I hope you let yourself celebrate it.

اتبسطي. اضحكي  . ابعتي لحد بتحبيه "انا يعني هنستهبل". خدي screenshots. Take pictures. Put your favorite song on and romanticize the hell out of this moment. 

Because sometimes we spend so much time worrying about the future that we forget to actually live in the moments we once wished for.

Maybe this is something you’ve been waiting for.
Maybe it’s something completely unexpected.
Maybe you just woke up feeling good for no reason.

Whatever it is, I’m happy that you’re happy.

And I hope you know that you deserve these moments. مش لازم تكوني تعبانة عشان تستحقي الراحة، ومش لازم تعدي بكل حاجة صعبة عشان تستحقي الفرح. You’re allowed to have good things happen to you simply because… they happened.

Please remember this version of yourself.
The one smiling without forcing it.
The one who feels light.
The one who isn’t overthinking every little thing.

Take a mental picture of her.

Because on the days when life feels heavy again, I want you to remember that this girl is still there. Happiness didn’t disappear forever just because one day became difficult.

And hey, if you’re reading this while smiling, then smile a little bigger.

You made it here.
You have something worth being happy about.

So enjoy it. No overthinking. No “what ifs.” Just be happy. You deserve this. 🫶🏻🤍`

    },


    reminder: {

        title: "When you need a reminder",

        text: `Hey you,
لو إنتِ بتقري الرسالة دي دلوقتي، فغالبًا you need to remember a few things that you might forget when life gets too loud.

First of all, you are doing better than you think. مش لازم كل حاجة تكون figured out، ومش لازم تكوني productive كل يوم عشان تبقي proud of yourself. Sometimes surviving a hard day is enough. Sometimes getting out of bed, trying again, or simply choosing not to give up is already an achievement.

افتكري إنك مش لازم تقارني الـtimeline بتاعك بحد تاني. Their life is not your life, and their chapter 10 has nothing to do with your chapter 3. You’re allowed to take your time. You’re allowed to change your mind. You’re allowed to outgrow things, people, dreams, and even old versions of yourself.

And please, don’t forget how many times you thought *“I can’t do this”*… and somehow you did.
كم مرة افتكرتي إن الموضوع أكبر منك، وبعدها عديتي منه؟ كتير. So why would this time be any different?

Be gentle with yourself. مش كل mistake معناها إنك فشلتي، ومش كل bad day معناها إن حياتك وحشة. One bad moment is just one moment.

And if nobody told you today: I’m proud of you.
Proud of you for trying. Proud of you for continuing. Proud of the person you’re becoming, even if you can’t see her clearly yet.

So breathe. Take your time.
You don’t have to have everything figured out right now.

You’re gonna be okay. Maybe not immediately, maybe not exactly the way you imagined, but eventually. And I hope you never forget that. 🤍`

    }

};


/* =========================================================
   OPEN LETTER
========================================================= */

const overlay =
    document.getElementById("letterOverlay");

const letterContent =
    document.getElementById("letterContent");

const closeLetter =
    document.getElementById("closeLetter");


document.querySelectorAll(".envelope").forEach(envelope => {

    envelope.addEventListener("click", () => {

        const letterName =
            envelope.dataset.letter;

        const letter =
            letters[letterName];

        letterContent.innerHTML = `

            <h2>${letter.title}</h2>

            <div class="gold-line"></div>

            <p>${letter.text}</p>

        `;

        overlay.classList.add("open");

        document.body.style.overflow = "hidden";

    });

});


/* =========================================================
   CLOSE LETTER
========================================================= */

function closeLetterModal() {

    overlay.classList.remove("open");

    document.body.style.overflow = "";

}


closeLetter.addEventListener(
    "click",
    closeLetterModal
);


overlay.addEventListener(
    "click",
    event => {

        if (
            event.target === overlay
        ) {
            closeLetterModal();
        }

    }
);


/* =========================================================
   QUIZ
========================================================= */

const questions = [

    {
        question: "When did we first talk?",

        answers: [
            "14/4/2020",
            "17/5/2020",
            "4/4/2021",
            "21/6/2020"
        ],

        correct: [0]
    },


    {
        question: "What is the name of our duo?",

        answers: [
            "Yushino",
            "Shiyuu",
            "Shinora",
            "Yushika"
        ],

        correct: [0]
    },


    {
        question: "Who's my fav TWST character?",

        answers: [
            "Yuu",
            "Skully",
            "Crowley",
            "Riddle"
        ],

        correct: [0, 1, 2, 3]
    },


    {
        question: "Who is my favorite author?",

        answers: [
            "Franz Kafka",
            "orrrr you idiot",
            "Haruki Murakami",
            "Fyodor Dostoevsky"
        ],

        correct: [1],

        dodgeWrong: true
    },


    {
        question: "What is my favorite animal?",

        answers: [
            "fox",
            "cat",
            "rabbit",
            "penguin"
        ],

        correct: [0]
    },


    {
        question: "What's my fav OC?",

        answers: [
            "Shino",
            "Luna",
            "Mira",
            "Yuna"
        ],

        correct: [0]
    }

];


const secretSentence = [
    "you're",
    "the",
    "Sol",
    "to",
    "my",
    "Luna"
];


let currentQuestion = 0;


/* DOM */

const questionCount =
    document.getElementById("questionCount");

const questionText =
    document.getElementById("questionText");

const answersContainer =
    document.getElementById("answers");

const secretWords =
    document.getElementById("secretWords");


/* render */

function renderQuestion() {

    const question =
        questions[currentQuestion];


    questionCount.textContent =
        `QUESTION ${currentQuestion + 1} / ${questions.length}`;


    questionText.textContent =
        question.question;


    answersContainer.innerHTML = "";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer";

            button.textContent =
                answer;


            /*
             * Q4:
             * Wrong choices run away
             * when the mouse gets over them.
             */

            if (
                question.dodgeWrong &&
                !question.correct.includes(index)
            ) {

                button.addEventListener(
                    "mouseenter",
                    dodgeButton
                );

            }


            button.addEventListener(
                "click",
                () => {

                    if (
                        question.correct.includes(index)
                    ) {

                        handleCorrect(button);

                    } else {

                        handleWrong(button);

                    }

                }
            );


            answersContainer.appendChild(button);

        }
    );

}


/* =========================
   WRONG
========================= */

function handleWrong(button) {

    button.classList.remove("wrong");

    void button.offsetWidth;

    button.classList.add("wrong");

}


/* =========================
   Q4 DODGE
========================= */

function dodgeButton(event) {

    const button =
        event.currentTarget;


    const x =
        (Math.random() * 2 - 1) * 180;

    const y =
        (Math.random() * 2 - 1) * 80;


    button.style.transform =
        `translate(${x}px, ${y}px)`;

}


/* =========================
   CORRECT
========================= */

function handleCorrect(button) {

    button.classList.add("correct");

    revealNextWord();


    setTimeout(() => {

        if (
            currentQuestion <
            questions.length - 1
        ) {

            currentQuestion++;

            renderQuestion();

        } else {

            questionCount.textContent =
                "MESSAGE COMPLETE";

            questionText.textContent =
                "You got all of them.";

            answersContainer.innerHTML = "";

        }

    }, 900);

}


/* =========================
   REVEAL ONE WORD
========================= */

function revealNextWord() {

    const wordIndex =
        currentQuestion;


    if (
        wordIndex >=
        secretSentence.length
    ) {
        return;
    }


    const word =
        document.createElement("span");


    word.className =
        "secret-word";


    word.textContent =
        secretSentence[wordIndex];


    secretWords.appendChild(word);

}


renderQuestion();


/* =========================================================
   FINAL STARS
========================================================= */

const finalButton =
    document.getElementById("finalButton");

const ending =
    document.getElementById("ending");

const stars =
    document.getElementById("stars");


finalButton.addEventListener(
    "click",
    () => {

        ending.classList.add("show");

        createStars();

    }
);


function createStars() {

    if (
        stars.children.length > 0
    ) {
        return;
    }


    for (
        let i = 0;
        i < 180;
        i++
    ) {

        const star =
            document.createElement("span");


        star.className =
            "star";


        const size =
            Math.random() * 4 + 2;


        star.style.width =
            `${size}px`;

        star.style.height =
            `${size}px`;


        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;


        star.style.animationDelay =
            `${Math.random() * 2}s`;


        stars.appendChild(star);

    }

}