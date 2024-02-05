// Selectors for input elements
const usernameInput = document.querySelector('#username');
const matriculeInput = document.querySelector('#matricule');
const levelInput = document.querySelector('#level');
const sexInput = document.querySelector('#sex');
const departmentInput = document.querySelector('#department');

// Selectors for displaying student information
const stdNameElements = document.querySelectorAll('.std-name');
const stdMatriculeElement = document.querySelector('#std-mat');
const stdLevelElements = document.querySelectorAll('.std-lvl');
const stdTitElements = document.querySelectorAll('.std-tit');
const stdPronElement = document.querySelector('#std-pron');
const stdPronsElements = document.querySelectorAll('.std-prons');
const studentDeptElement = document.querySelector('#std-dept');

// Buttons for preview and download
const previewButton = document.querySelector('#preview');
const downloadButton = document.querySelector('#download');

// Array for student titles
const stdTitles = ['Mr.', 'He', 'his', 'Mme.', 'She', 'her'];

// Function to generate letter content
const letterGenerator = () => {
    if (!usernameInput.value || !matriculeInput.value ) {
        alert('Please fill in all required fields before generating the letter.');
        return;
    } else {
        const formatDate = () => {
            const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
            const currentDate = new Date();
            const formattedDate = `${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
            return formattedDate;
        };

        const dateElement = document.querySelector('.date');
        dateElement.textContent = formatDate();


        const titleIndex = sexInput.value === 'M' ? 0 : 3;
        const pronounIndex = sexInput.value === 'M' ? 1 : 4;
        const pronounsIndex = sexInput.value === 'M' ? 2 : 5;
        console.log(pronounsIndex)
        stdPronElement.textContent = stdTitles[pronounIndex];
        stdMatriculeElement.textContent = matriculeInput.value;
        studentDeptElement.textContent = departmentInput.value;

        stdPronsElements.forEach(std => {
            std.textContent = stdTitles[pronounsIndex];
        });
        
        stdTitElements.forEach(std => {
            std.textContent = stdTitles[titleIndex];
        });

        stdNameElements.forEach(std => {
            std.textContent = usernameInput.value;
        });

        stdLevelElements.forEach(std => {
            std.textContent = levelInput.value;
        });
    }
}

// Function to download letter as PDF
const letterDownload = () => {
    if (!usernameInput.value || !matriculeInput.value ) {
        alert('Please fill in all required fields before downloading the letter.');
        return;
    } else {
        const letter = document.querySelector('.template');
        const options = {
            filename: `${matriculeInput.value}`,
            margin: 10,
            html2canvas: { scale: 2 },
            image: { type: 'png', quality: 0.99, compression: 'best' },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            output: 'blob'
        };
        html2pdf().from(letter).set(options).save();
        usernameInput.value = '';
        matriculeInput.value = '';
    }
}

// Event listeners for preview and download buttons
previewButton.addEventListener('click', letterGenerator);
downloadButton.addEventListener('click', letterDownload);
