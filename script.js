document.getElementById("payment-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn không reload trang

    // Lấy thông tin từ form
    const name = document.getElementById("name").value.trim();
    const amount = document.getElementById("amount").value.trim();

    if (!name || !amount || amount <= 0) {
        alert("Vui lòng nhập đầy đủ thông tin và số tiền hợp lệ!");
        return;
    }

    // Thông tin tài khoản ngân hàng của chủ website
    const bankAccount = {
        bankName: "VCB", // Ví dụ: Vietcombank (VCB)
        accountNumber: "1024517650", // Số tài khoản ngân hàng
        accountName: "LAM NHAT HUY", // Tên chủ tài khoản
    };

    // Dữ liệu chuẩn tạo QR ngân hàng theo chuẩn Napas
    const qrData = `
      {"bankName": "${bankAccount.bankName}",
      "accountNumber": "${bankAccount.accountNumber}",
      "accountName": "${bankAccount.accountName}",
      "amount": "${amount}",
      "note": "Nap tien ${name}"}
    `;

    // Hiển thị mã QR
    const qrContainer = document.getElementById("qr-container");
    qrContainer.style.display = "block";

    const qrCodeDiv = document.getElementById("qrcode");
    qrCodeDiv.innerHTML = ""; // Xóa mã QR cũ nếu có

    QRCode.toCanvas(qrCodeDiv, qrData, function (error) {
        if (error) {
            console.error("Không thể tạo mã QR:", error);
        }
    });
});
