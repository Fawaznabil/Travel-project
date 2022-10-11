<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Getform.io HTML Form Example with File Upload</title>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'><link rel="stylesheet" href="style-Admin.css">

</head>
<body>
<!-- partial:index.partial.html -->
<div class="col-md-6 offset-md-3 mt-5">
           <!-- Image and text -->
<nav class="navbar fixed-top navbar-dark bg-primary">
  <a class="navbar-brand" href="Home">
  <img src="aset/logo_salwaKecil.png" width="200" height="20" class="d-inline-block align-top" alt="">
    
  </a>
</nav>

<nav class="navbar fixed-bottom navbar-dark bg-primary">
  <a class="navbar-brand" href="#">
    
  </a>
</nav>
        </a>
    <br>
<br>
       
<div class="jumbotron">
  <div class="container">
    <h1 class="display-4">


        <h1>DESTINASI</h1>
        <form accept-charset="UTF-8" action="https://getform.io/f/{your-form-endpoint-goes-here}" method="POST" enctype="multipart/form-data" target="_blank">
          <div class="form-group">
            <label for="exampleInputName">Nama Destinasi</label>
            <input type="text" name="fullname" class="form-control" id="exampleInputName" placeholder="Enter Your Name" required="required">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" required="required">Harga</label>
            <input type="price" name="price" class="form-control" id="exampleInputPrice" aria-describedby="Price" placeholder="Enter Price">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Keterangan</label>
			<input type="description" name="Keterangan" class="form-control" id="exampleInputKeterangan"  placeholder="Enter Description">
             
          </div>
          <hr>
          <div class="form-group mt-3">
            <input type="file" name="file">
          </div>
          <hr>
          <button type="submit" class="btn btn-dark">Back</button>
		  <button type="submit" class="btn btn-primary">Save Changes</button>
        </form>
		</div>
	</div>
    </div>
<!-- partial -->
  
</body>
</html>
