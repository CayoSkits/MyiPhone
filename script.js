document.querySelectorAll('.app-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        openApp(icon.id);
    });
});

function openApp(appId) {
    // Logic to open the specific app
    console.log(`${appId} opened`);
}
function openPhoneApp() {
    document.getElementById('home-screen').style.display = 'none';
    const phoneApp = document.createElement('div');
    phoneApp.id = 'phone-app-screen';
    phoneApp.innerHTML = `<h1>Phone App</h1>`;
    document.getElementById('iphone').appendChild(phoneApp);
}
