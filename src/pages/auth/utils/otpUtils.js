export const handleInputChange = (index, inputRefs, event) => {
  const otp = event.target.value;
  if (isNaN(otp)) {
    return;
  }

  inputRefs.current.forEach((input, i) => {
    if (i === index) {
      input.value = otp;
    } else if (i > index) {
      input.value = "";
    }
  });

  if (index < inputRefs.current.length - 1 && otp) {
    inputRefs.current[index + 1].focus();
  }
};

export const handlePaste = (inputRefs, event) => {
  event.preventDefault();
  const pastedText = event.clipboardData.getData("text/plain");
  const otpCode = pastedText.slice(0, 6);

  inputRefs.current.forEach((input, i) => {
    if (i < otpCode.length) {
      input.value = otpCode[i];
    } else {
      input.value = "";
    }
  });

  if (otpCode.length > 0) {
    inputRefs.current[otpCode.length - 1].focus();
  }
};
