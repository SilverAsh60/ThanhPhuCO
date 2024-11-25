document.getElementById("payment-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Get input values
    const name = document.getElementById("name").value.trim();
    const amount = document.getElementById("amount").value.trim();

    if (!name || !amount || amount <= 0) {
        alert("Vui lòng nhập đầy đủ thông tin và số tiền hợp lệ!");
        return;
    }

    // Vietcombank account details
    const bankAccount = {
        bankName: "VCB",
        accountNumber: "1024517650", // Replace with your actual account number
        accountName: "LAM NHAT HUY" // Replace with your actual account name
    };

    // Construct QR data string
    const qrData = encodeURIComponent(`VCB|${bankAccount.accountNumber}|${bankAccount.accountName}|${amount}|Nap tien ${name}`);
    console.log("QR Data:", qrData);

    // Show the QR container
    const qrContainer = document.getElementById("qr-container");
    qrContainer.style.display = "block";

    // Clear existing QR code
    const qrCodeDiv = document.getElementById("qrcode");
    qrCodeDiv.innerHTML = ""; // Clear previous QR code if any

    // Generate QR code
    QRCode.toCanvas(qrCodeDiv, qrData, function (error) {
        if (error) {
            console.error("Error generating QR code:", error);
            alert("Không thể tạo mã QR. Vui lòng thử lại!");
        } else {
            console.log("QR code successfully generated!");
        }
    });
});
