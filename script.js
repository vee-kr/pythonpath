                                            /* Home page */
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

if (progressBar && progressText) {
    const totalLessons = 8;
    let completedLessons = 0;

    const lessonsIds = ["gettingStarted",
                                "variables",
                                "inputOutput",
                                "conditions",
                                "loops",
                                "strings",
                                "lists",
                                "functions"];

    lessonsIds.forEach(function(lessonId){
        if (localStorage.getItem(lessonId) === "completed") {
            completedLessons++;
        }

    });

    progressText.textContent = `${completedLessons} of ${totalLessons} lessons completed`;
    progressBar.setAttribute("aria-valuenow", completedLessons);

    const progress = (completedLessons / totalLessons) * 100;
    progressBar.querySelector("span").style.width = `${progress}%`;
}






                                        /* Getting Started page */

const lesson = document.querySelector(".lesson");


if (lesson) {
    const completeButton = document.querySelector(".lessonComplete");
    const lessonId = lesson.dataset.lesson;

    const isCompleted = localStorage.getItem(lessonId);
    if (isCompleted === "completed") {
        completeButton.textContent = "Lesson completed";
    }
    completeButton.addEventListener("click", function() {
        localStorage.setItem(lessonId, "completed");

        completeButton.textContent = "Lesson completed";
    });

}