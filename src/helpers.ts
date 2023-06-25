export const reader = (file: File) =>
  new Promise((resolve, reject) => {
    try {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.readAsDataURL(file);
    } catch (e) {
      reject(e);
    }
  });

export const getColors = () => ["#FFB84C", "#E8A9A9", "#FFBDF7", "#2CD3E1"];
