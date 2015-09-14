document.addEventListener('DOMContentLoaded', function(event){
  console.log('document is ready');

  var uploader = document.getElementById('uploader');
  uploader.addEventListener('change', readSingleFile, false);

  function readSingleFile(e) {
    // console.log('i was called');

    //Retrieve the first (and only!) File from the FileList object (console.log(e.target.files))
    var file = this.files[0]; //eql: var file = e.target.files[0];
    // console.log("file:", file);

    if (file) {
      var reader = new FileReader();

      reader.onload = function(e) {
        var contents = this.result; // eql: var contents = e.target.result;
        console.log('file complete content (as string): ', contents);
        alert('uploaded the file: ' + file.name + '. The type of this file: ' + file.type);

        var target = document.getElementById("file_input");
        var text = document.createTextNode('Your file content: '.toUpperCase() + contents);
        target.appendChild(text);
      }
      reader.readAsText(file);
    } else {
      alert('Failed to load file');
    }
  }
 });
