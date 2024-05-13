const path = require("path");

class FileService {
  saveFile(file) {
    try {
      const fileName = `${Date.now()}.jpg`;
      const filePath = path.resolve("./static", fileName);
      file?.image?.mv(filePath);
      return fileName;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new FileService();
