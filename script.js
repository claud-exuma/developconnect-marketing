function showPackage(packageId) {
    // Hide all packages
    document.querySelectorAll('.package').forEach(pkg => pkg.classList.remove('active'));

    // Show the selected package
    document.getElementById(packageId).classList.add('active');

    // Update button states
    document.querySelectorAll('.toggle-buttons button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="showPackage('${packageId}')"]`).classList.add('active');
}
