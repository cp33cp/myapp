// 这个脚本会帮助保存上传的图片
document.addEventListener('DOMContentLoaded', function() {
  // 创建一个文件输入元素
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.style.display = 'none';
  
  // 添加到body
  document.body.appendChild(fileInput);
  
  // 点击AR图片时触发文件上传
  const arImage = document.querySelector('.ar-image');
  arImage.style.cursor = 'pointer';
  arImage.title = '点击更换图片';
  
  arImage.addEventListener('click', function() {
    fileInput.click();
  });
  
  // 处理文件上传
  fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        arImage.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}); 