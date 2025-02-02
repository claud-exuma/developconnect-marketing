function showPackage(packageId) {
    document.querySelectorAll('.package').forEach(pkg => pkg.classList.remove('active'));
    document.getElementById(packageId).classList.add('active');

    document.querySelectorAll('.toggle-buttons button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.toggle-buttons button:nth-child(${packageId.replace('package', '')})`).classList.add('active');
}

window.onload = function() {
    document.body.style.overflow = "hidden";  // Prevents scrollbars
};
