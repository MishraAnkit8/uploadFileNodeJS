
    const handleFileUpload = async (url, formId, messageDivId) => {
        const form = document.getElementById(formId);
        const messageDiv = document.getElementById(messageDivId);

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            fetch(url , {
                method: 'POST',
                body: formData,
            })
            .then((result) => {
                return result.json()
            })
            .then((data) =>{
                console.log('data', data)
               if(data){
                messageDiv.innerHTML = '<div class="alert alert-success" role="alert">File uploaded successfully</div>';
               }
                else {
                    messageDiv.innerHTML = '<div class="alert alert-danger" role="alert">Failed to upload file</div>';
                }
            })
            .catch((error) => {
                console.error('Error :', error);
                messageDiv.innerHTML = '<div class="alert alert-danger" role="alert">Error occurred</div>';
            })

        });
    };

    // Call the function for file upload
    handleFileUpload('/fileupload', 'fileUploadForm', 'fileMessage');
    handleFileUpload('/convert', 'docUploadForm', 'docMessage');

