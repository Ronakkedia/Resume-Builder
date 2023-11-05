document.getElementById('generate-resume').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eduInstitution = document.getElementById('edu-institution').value;
    const eduDegree = document.getElementById('edu-degree').value;
    const workCompany = document.getElementById('work-company').value;
    const workTitle = document.getElementById('work-title').value;

    const previewContent = document.getElementById('preview-content');
    previewContent.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Education:</strong> ${eduDegree} at ${eduInstitution}</p>
        <p><strong>Work Experience:</strong> ${workTitle} at ${workCompany}</p>
    `;

    document.getElementById('resume-preview').style.display = 'block';
});
