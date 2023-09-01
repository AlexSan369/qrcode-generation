const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");
// Eventos
function generateQrCode() {
    const qrcodeValue = qrCodeInput.value;
    if (!qrcodeValue) return;
    
    qrCodeBtn.innerText = "Gerando Qr Code ... ";
    qrCodeImg.src = `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${qrCodeInput.value}`;

    //Atrasa a exibição do qr-code
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "QrCode gerado com sucesso!"
    })
    

}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter")
    generateQrCode();
});

qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value)
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QrCode";
})