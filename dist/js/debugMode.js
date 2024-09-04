function gtag(){dataLayer.push(arguments);}
window.dataLayer = window.dataLayer || [];

function areGoogleTagsLoaded() {
// Replace with the specific conditions for your Google Tag scripts
return (typeof window.ga !== 'undefined' && typeof window.dataLayer !== 'undefined');
}

// Function to check if the default command has been executed
function isDefaultCommandExecuted() {
// Replace with the specific condition for your default command
return true;
}
// Monitor the page for changes and check the conditions

var observer = new MutationObserver(function(mutations) {
if (areGoogleTagsLoaded() && isDefaultCommandExecuted()) {
    console.log("Google Tags fired before the default command.");
}
});
// Observe changes to the document body
observer.observe(document.body, { childList: true, subtree: true });