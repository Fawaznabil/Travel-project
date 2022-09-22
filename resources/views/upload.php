<!DOCTYPE html>
<html>
<head>
  <style>
    html {
      font-family: sans-serif;
    }
    
    div#drop_zone {
      height: 400px;
      width: 400px;
      border: 2px dotted black;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <h2>DIY HTML5 File Uploader</h2>
  <input type="file" name="file_to_upload" id="file_to_upload" accept=".jpg,.png">
  
  <h3>Drag & Drop a File</h3>
  <div id="drop_zone">DROP HERE</div>
  
  <hr>
  
  <p id="file_name"></p>
  <progress id="progress_bar" value="0" max="100" style="width:400px;"></progress>
  <p id="progress_status"></p>
  
  <input type="button" value="Upload To Server" id="upload_file_button">
  
  <script>
    document.getElementById('file_to_upload').addEventListener('change', (event) => {
      window.selectedFile = event.target.files[0];
      document.getElementById('file_name').innerHTML = window.selectedFile.name;
    });
  
    document.getElementById('upload_file_button').addEventListener('click', () => {
      uploadFile(window.selectedFile);
    });

    // Getting our drop zone by ID
    const dropZone = document.getElementById('drop_zone'); 
    if (window.FileList && window.File) {
      dropZone.addEventListener('dragover', event => {
        event.stopPropagation();
        event.preventDefault();

        // Adding a visual hint that the file is being copied to the window
        event.dataTransfer.dropEffect = 'copy';
      });

      dropZone.addEventListener('drop', event => {
        event.stopPropagation();
        event.preventDefault();

        // Accessing the files that are being dropped to the window
        const files = event.dataTransfer.files;

        // Getting the file from uploaded files list (only one file in our case)
        window.selectedFile = files[0];

        // Assigning the name of file to our "file_name" element
        document.getElementById('file_name').innerHTML = window.selectedFile.name;
      });
    }
  
    function uploadFile(file) {
      var formData = new FormData();
      formData.append('file_to_upload', file);
      
      var ajax = new XMLHttpRequest();
      ajax.upload.addEventListener("progress", progressHandler, false);
      ajax.open('POST', 'uploader.php');
      ajax.send(formData);
    }
  
    function progressHandler(event) {
      var percent = (event.loaded / event.total) * 100;
      document.getElementById('progress_bar').value = Math.round(percent);
      document.getElementById('progress_status').innerHTML = Math.round(percent) + '% uploaded';
    }
  </script>

<script>
  UPLOADCARE_PUBLIC_KEY = 'demopublickey';
</script>

<script src="https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js" charset="utf-8"></script>
</body>
</html>