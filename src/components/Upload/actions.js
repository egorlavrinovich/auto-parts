const convertToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export const sendFile = async (options) => {
  const { onSuccess, onError, file } = options;
  try {
    const response = await convertToBase64(file);
    onSuccess(response);
  } catch (err) {
    onError(err?.response);
  }
};
