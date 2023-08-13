const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    // 
    // TODO: Implement a click event handler on the `butInstall` element
    butInstall.addEventListener('click', () => {
        // trigger prompt to confirm install
        event.prompt();
        // disable button after use
        butInstall.setAttribute('disabled', true);
        // change button text to indicate status
        butInstall.textContent = 'Installed';
    });
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Installation complete', event);
});
