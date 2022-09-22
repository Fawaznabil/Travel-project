UPLOADCARE_LOCALE_TRANSLATIONS = {
    // messages for widget
    errors: {
        fileType: 'This type of file is not allowed.'
    },
    // messages for dialog’s error page
    dialog: {
      tabs: {
        preview: {
          error: {
            fileType: {
              title: 'Invalid file type.',
              text: 'This type of file is not allowed.',
              back: 'Back',
            },
          },
        },
      },
    },
  }

  <script>
  // Getting the widget
  var widget = uploadcare.Widget('[role="uploadcare-uploader"]');

  // Assigning a new validator
  widget.validators.push(function (fileInfo) {
    // Defining allowed file types
    var types = ['JPEG', 'JPG', 'PNG', 'GIF'] 
    if (fileInfo.name === null) {
      return;
    }

    // Getting file extension
    var extension = fileInfo.name.split('.').pop().toUpperCase(); 
    if (types.indexOf(extension) === -1) {
      // If the extension is not found in a pre-defined list, 
      // throwing a new error with text that we defined in the <head> section
      throw new Error('fileType') 
    }
  });
</script>