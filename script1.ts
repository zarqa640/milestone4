// Get form and resume display elements
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

// Function to handle form submission and generate resume
const generateResume = (event: Event) => {
  event.preventDefault(); // Prevent form submission and page reload

  // Get input values
  const nameInput = (document.getElementById('name') as HTMLInputElement).value;
  const emailInput = (document.getElementById('email') as HTMLInputElement).value;
  const numberInput = (document.getElementById('number') as HTMLInputElement).value;
  const educationInput = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experienceInput = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skillsInput = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Create resume content
  const resumeContent = `
    <h2>Resume</h2>
    <h3>Personal Information</h3>
    <p><strong>Name:</strong> <span contenteditable="true">${nameInput}</span></p>
    <p><strong>Email:</strong><span contenteditable="true"> ${emailInput}</span></p>
    <p><strong>Number:</strong><span contenteditable="true"> ${numberInput}</span></p>
    <h3>Education</h3>
    <p contenteditable="true">${educationInput}</p>
    <h3>Experience</h3>
    <p contenteditable="true">${experienceInput}</p>
    <h3>Skills</h3>
    <p contenteditable="true">${skillsInput}</p>
  `;

  // Display the generated resume in the resumeDisplay div
  resumeDisplay.innerHTML = resumeContent;
};

// Add event listener to the form to handle submission
resumeForm.addEventListener('submit', generateResume);
