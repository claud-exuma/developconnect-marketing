function showPackage(packageId) {
    // Hide all packages
    document.querySelectorAll('.package').forEach(pkg => pkg.classList.remove('active'));

    // Show the selected package
    document.getElementById(packageId).classList.add('active');

    // Update button styles
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="showPackage('${packageId}')"]`).classList.add('active');
}
