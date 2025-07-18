document.getElementById("verify-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("cert-id").value.trim();
  const result = document.getElementById("verify-result");

  const validIDs = ["VOC-123456", "VOC-FS2025", "VOC-AIML001"];

  if (validIDs.includes(input)) {
    result.textContent = "Certificate is valid!";
    result.style.color = "green";
  } else {
    result.textContent = "Invalid Certificate ID. Please check again.";
    result.style.color = "red";
  }
});
