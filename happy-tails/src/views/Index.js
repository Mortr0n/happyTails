
const Index = () => {



    return(
        <>

        <div class="container">
            <h1>Image Upload using Multer</h1>
            <div class="form">
                <form action="/uploadPhoto" enctype="multipart/form-data" method="post">
                    <input class="choose-file-btn" type="file" name="myImage" />
                    <input class="upload-btn" type="submit" value="Upload Photo" />
                </form>
            </div>

            <h1>Uploaded Images</h1>

            <div class="uploaded-images">
                {/* {
                images.forEach(function(image) { %>
                <img class="image" src="data:image/<%=image.image.contentType%>;base64,
                <%=image.image.data.toString('base64')%>">
                <% }); %>
                } */}
            </div>
        </div>

        </>
    )
}

export default Index;

