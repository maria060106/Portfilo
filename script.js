function afficherDetails(projectId) {
    // Extract project number from the ID
    const projectNum = projectId.match(/\d+/)[0];
    
    // Format the number with leading zero if needed
    const formattedNum = projectNum.padStart(2, '0');
    
    // Navigate to the project page
    window.location.href = `./Project/${formattedNum}/index.html`;
}
