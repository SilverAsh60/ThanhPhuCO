document.getElementById("payment-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById("name").value.trim();
    const amount = document.getElementById("amount").value.trim();

    if (!name || !amount || amount <= 0) {
        alert("Vui lòng nhập đầy đủ thông tin và số tiền hợp lệ!");
        return;
    }

    // Vietcombank account details
    const bankAccount = {
        bankName: "VCB", // Vietcombank
        accountNumber: "0123456789", // Replace with your account number
        accountName: "NGUYEN VAN A" // Replace with your account name
    };

    // Format QR data as a string (e.g., in JSON format or other bank-required structure)
    const qrData = `
      {"bankName": "${bankAccount.bankName}",
      "accountNumber": "${bankAccount.accountNumber}",
      "accountName": "${bankAccount.accountName}",
      "amount": "${amount}",
      "note": "Nap tien ${name}"}
    `;

    // Show the QR container
    const qrContainer = document.getElementById("qr-container");
    qrContainer.style.display = "block";

    // Clear previous QR code (if any)
    const qrCodeDiv = document.getElementById("qrcode");
    qrCodeDiv.innerHTML = "";

    // Generate QR code
    QRCode.toCanvas(qrCodeDiv, qrData, function (error) {
        if (error) {
            console.error("Error generating QR code:", error);
            alert("Không thể tạo mã QR. Vui lòng thử lại!");
        }
    });
});
