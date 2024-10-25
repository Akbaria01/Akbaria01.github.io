document.addEventListener("DOMContentLoaded", function () {

    function addCourse() {
        const courseContainer = document.getElementById("coursecontainer");
        const courseEntry = document.createElement("div");
        courseEntry.className = "course-entry";

        const newCourseInput = document.createElement("input");
        newCourseInput.type = "text";
        newCourseInput.className = "course";
        newCourseInput.placeholder = "Enter a course";

        const newReasonInput = document.createElement("input");
        newReasonInput.type = "text";
        newReasonInput.className = "course-reason";
        newReasonInput.placeholder = "Why taking this course";

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function () {
            courseContainer.removeChild(courseEntry);
        };

        courseEntry.appendChild(newCourseInput);
        courseEntry.appendChild(newReasonInput);
        courseEntry.appendChild(deleteButton);
        courseContainer.appendChild(courseEntry);
    }

    document.getElementById("addcoursebutton").addEventListener("click", addCourse);

    document.getElementById("introform").addEventListener("submit", function (event) {
        event.preventDefault();

        const requiredFields = [
            "name", "mascot", "image", "imagecaption",
            "personalbackground", "professionalbackground",
            "academicbackground", "webdevbackground",
            "computerplatform"
        ];

        for (const field of requiredFields) {
            const input = document.getElementById(field);
            if (!input.value) {
                alert(`${input.previousElementSibling.innerText} is required.`);
                return;
            }
        }

        const name = document.getElementById("name").value;
        const mascot = document.getElementById("mascot").value;
        const image = document.getElementById("image").files[0];
        const imageCaption = document.getElementById("imagecaption").value;
        const personalBackground = document.getElementById("personalbackground").value;
        const professionalBackground = document.getElementById("professionalbackground").value;
        const academicBackground = document.getElementById("academicbackground").value;
        const webDevBackground = document.getElementById("webdevbackground").value;
        const computerPlatform = document.getElementById("computerplatform").value;
        const funnyThing = document.getElementById("funnything").value;
        const anythingElse = document.getElementById("anythingelse").value;

        const courses = Array.from(document.getElementsByClassName("course")).map((course) => course.value);
        const courseReasons = Array.from(document.getElementsByClassName("course-reason")).map((reason) => reason.value);

        const coursesOutput = courses.map((course, index) => {
            return `<li><strong>${course}</strong>: ${courseReasons[index]}</li>`;
        }).join('');

        const resultDiv = document.getElementById("result");
        resultDiv.style.display = "block";
        resultDiv.innerHTML = 
            `<h2>${name} || ${mascot}</h2>
            <div class="image-section">
                <img src="${URL.createObjectURL(image)}" alt="${imageCaption}" class="centered-image" />
                <p class="centered-caption">${imageCaption}</p>
            </div>
            <ul>
                <li><strong>Personal Background:</strong> ${personalBackground}</li>
                <li><strong>Professional Background:</strong> ${professionalBackground}</li>
                <li><strong>Academic Background:</strong> ${academicBackground}</li>
                <li><strong>Background in Web Development:</strong> ${webDevBackground}</li>
                <li><strong>Primary Computer Platform:</strong> ${computerPlatform}</li>
                <li><strong>Courses I'm Taking & Why:</strong>
                    <ul>${coursesOutput}</ul>
                </li>
            </ul>
            <p><strong>Funny/Interesting Item to Remember Me By:</strong> ${funnyThing}</p>
            <p><strong>I'd Also Like to Share:</strong> ${anythingElse}</p>
            <button onclick="resetForm()">Reset</button>
        `;

        this.reset(); 
    });

    function resetForm() {
        const resultDiv = document.getElementById("result");
        resultDiv.style.display = "none"; 
        resultDiv.innerHTML = ""; 
        document.getElementById("introform").reset(); 

        const courseContainer = document.getElementById("coursecontainer");
        const courses = document.getElementsByClassName("course");
        while (courses.length > 0) {
            courseContainer.removeChild(courses[0].parentNode); 
        }
    }
});



