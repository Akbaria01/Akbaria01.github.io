document.addEventListener("DOMContentLoaded", function () {
    // Handle form submission
    document.getElementById("introForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const requiredFields = [
            "name", "mascot", "image", "imageCaption",
            "personalBackground", "professionalBackground",
            "academicBackground", "webDevBackground",
            "computerPlatform"
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
        const imageCaption = document.getElementById("imageCaption").value;
        const personalBackground = document.getElementById("personalBackground").value;
        const professionalBackground = document.getElementById("professionalBackground").value;
        const academicBackground = document.getElementById("academicBackground").value;
        const webDevBackground = document.getElementById("webDevBackground").value;
        const computerPlatform = document.getElementById("computerPlatform").value;
        const funnyThing = document.getElementById("funnyThing").value;
        const anythingElse = document.getElementById("anythingElse").value;

        
        const resultDiv = document.getElementById("result");
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `
            <h2>${name}'s Introduction</h2>
            <p><strong>Mascot:</strong> ${mascot}</p>
            <img src="${URL.createObjectURL(image)}" alt="${imageCaption}" />
            <p><strong>Image Caption:</strong> ${imageCaption}</p>
            <p><strong>Personal Background:</strong> ${personalBackground}</p>
            <p><strong>Professional Background:</strong> ${professionalBackground}</p>
            <p><strong>Academic Background:</strong> ${academicBackground}</p>
            <p><strong>Background in Web Development:</strong> ${webDevBackground}</p>
            <p><strong>Primary Computer Platform:</strong> ${computerPlatform}</p>
            <p><strong>Courses Currently Taking:</strong> ${Array.from(document.getElementsByClassName("course")).map(course => course.value).join(', ')}</p>
            <p><strong>Funny Thing:</strong> ${funnyThing}</p>
            <p><strong>Anything Else:</strong> ${anythingElse}</p>
            <button onclick="resetForm()">Reset</button>`;

    
        this.reset();
    });

   
    document.getElementById("addCourseButton").addEventListener("click", addCourse);

    function addCourse() {
        const courseContainer = document.getElementById("courseContainer");
        const newCourseInput = document.createElement("input");
        newCourseInput.type = "text";
        newCourseInput.className = "course";
        newCourseInput.placeholder = "Enter a course";

       
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function () {
            courseContainer.removeChild(newCourseInput);
            courseContainer.removeChild(deleteButton);
        };

    
        courseContainer.appendChild(newCourseInput);
        courseContainer.appendChild(deleteButton);
    }

    
    function resetForm() {
        document.getElementById("result").style.display = "none";
        document.getElementById("introForm").reset();
    }
});

