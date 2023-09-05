document.addEventListener('DOMContentLoaded', function () {
    // Reference to the device list
    const deviceList = document.getElementById('device-list');

    // Function to list connected USB devices
    function listUSBDevices() {
        // Clear the existing list
        deviceList.innerHTML = ''; 
        navigator.usb.getDevices()
            .then(devices => {
                if (devices.length === 0) {
                    deviceList.innerHTML = '<li class="collection-item">No USB devices connected.</li>';
                } else {
                    devices.forEach(device => {
                        const listItem = document.createElement('li');
                        listItem.classList.add('collection-item');
                        listItem.innerText = `Device Name: ${device.productName}, Vendor ID: ${device.vendorId}, Product ID: ${device.productId}`;
                        deviceList.appendChild(listItem);
                    });
                }
            })
            .catch(error => {
                console.error('Error listing USB devices:', error);
            });
    }

    // Add a click event listener to a button to trigger the USB device list
    const requestButton = document.getElementById('request-button');
    requestButton.addEventListener('click', listUSBDevices);

    // Initial list when the page loads
    listUSBDevices();
});
