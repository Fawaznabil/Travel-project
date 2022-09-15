<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>salwaTravel.com</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="javascript.js"></script>
</head>

<body>
    <nav>
        <div class="layar-dalam">
            <div class="logo">
                <a href=""><img src ="aset/logo_lengkap_salwa_travel-removebg-preview.png"class="putih"></a>
                </div>

            <div class="menu">
                <a href ="#"class ="Tombol-Menu">
                    <span class="garis"></span>
                    <span class="garis"></span>
                    <span class="garis"></span>
                </a>
                <ul>
                
                    <li><a href ="#Home">Home</a></li>
                    <li><a href ="#Visi-Misi">Visi Misi</a></li>
                    
                    <li><a class="dropdown-toggle" href ="#">Destinasi</a></li>
                   
                    <li><a href ="#Gallery">Gallery</a></li>
                    <li><a href ="#Team">Team</a></li>
                    <li><a href ="/Chat2">Chat</a></li>
                    <li><a href ="/page2"class="tbl-biru">Sign Up</a></li>

                </ul>
            </div>
        </div>
    </nav>


<!--Home-->
    <div class="layar-penuh">
        <header id="Home">
            <div class="overlay"></div>
            <video autoplay muted loop>
                <source src="aset/video-indonesia.mp4"type="video/mp4"/>
            </video>
            <div class="intro">
                <h3>Salwa Tour & Travel</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, facilis!</p>
                <p><a href=" "class="Tombol">Baca Selengkapnya </a>
                </p>
            </div>
        </header>

<!--Visi Misi-->
        <main>
            <section id ="Visi-Misi">
                <div class ="Visi">
                    <h3>Visi Misi</h3>
                    <h2>VISI</h2>
                    <p class ="ringkasan">                       
                        Menjadi perusahaan tour & travel
                        yang unggul dengan selalu
                        memberikan kepuasan dan
                        kenyamanan kepada pelanggan
                        melalui produk dan layanan yang
                        berkualitas dan berstandar tinggi
                    </p>
                    <div class="Misi">
                        <h2>MISI</h2>
                        <P class="Deskripsi">
                            Menjalankan kegiatan usaha tour & travel yang
                            memberikan layanan berkualitas dan berstandar
                            tinggi berupa kemudahan, kenyamanan dan
                            kecepatan pelayanan tour & travel kepada
                            konsumennya.<br>
                            <br>
                            1. Membangun hubungan jangka panjang dengan
                            pelanggan<br>
                            2. Menjalin kerjasama dalam bidang pariwisata
                            dengan berbagai pihak terkait.<br>
                            3. Membangun jaringan di seluruh komunitas,
                            perusahaan, serta lembaga pemerintah<br>
                            4. Mengenalkan dunia pariwisata indonesia kepada
                            masyarakat dalam negeri.<br>
                        </P>
                    </div>
                </div>
            </section>
<!--Destinasi-->
<!--<section id="Destinasi">
<div class="container">
    <h3 class="tittle">Destinasi Pilihan</h3>

    <div class="product-container">

    <div class="product" data-name="p-1">
        <img src="aset/foto1.jpg">
        <h3>Bromo</h3>
        <div class="price">$2.00</div>
    </div>

    <div class="product" data-name="p-2">
        <img src="aset/foto2.jpg">
        <h3>Bromo</h3>
        <div class="price">$2.00</div>
    </div>

    <div class="product" data-name="p-3">
        <img src="aset/foto4.jpg">
        <h3>Bromo</h3>
        <div class="price">$2.00</div>
    </div>

    <div class="product" data-name="p-4">
        <img src="aset/foto5.jpg"a>
        <h3>Bromo</h3>
        <div class="price">$2.00</div>
    </div>

    <div class="product" data-name="p-5">
        <img src="aset/foto6.jpg">
        <h3>Bromo</h3>
        <div class="price">$2.00</div>
    </div>

    <div class="product" data-name="p-6">
        <img src="aset/foto7.jpg">
        <h3>Bromo</h3>
        <div class="price">$2.00</div>
    </div>

</div>
</div>
</section>-->
          
<!--Destinasi-->
<section id="Destinasi">
<div id="services" class="container-fluid fb-parallax centering">
    <div class="container m-5">
        <p class="fs-1 fw-bolder centering" style="color: white;"></p>
        <div class="row m-5 centering">

            <div class="col-sm-3 centering mt-2">
                <div class="card shadow" style="width: 18rem;">
                    <img src="aset/foto5.jpg" class="card-img-top" alt="grooming">
                    <div class="card-body">
                      <h5 class="card-title" style="color: #323D51">Healtch Check </h5>
                      <p class="card-text" style="color: #323D51">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptatum.</p>
                      {{-- <a href="#" class="btn btn-success">See details</a> --}}
                    </div>
                    <a href="#" class="btn btn-success">See details</a>
                  </div>
            </div>

            <div class="col-sm-3 centering mt-2">
              <div class="card shadow" style="width: 18rem;">
                  <img src="aset/foto2.jpg" class="card-img-top" alt="grooming">
                  <div class="card-body">
                    <h5 class="card-title" style="color: #323D51">Surgery</h5>
                    <p class="card-text" style="color: #323D51">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptatem!</p>
                    {{-- <a href="#" class="btn btn-success">See details</a> --}}
                  </div>
                  <a href="#" class="btn btn-success">See details</a>
                </div>
          </div>

            <div class="col-sm-3 centering mt-2">
                <div class="card shadow" style="width: 18rem;">
                    <img src="aset/foto5.jpg" class="card-img-top" alt="grooming">
                    <div class="card-body">
                      <h5 class="card-title" style="color: #323D51">Grooming</h5>
                      <p class="card-text" style="color: #323D51">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eligendi.</p>
                      {{-- <a href="#" class="btn btn-success">See details</a> --}}
                    </div>
                    <a href="#" class="btn btn-success">See details</a>
                  </div>
            </div>

            <div class="col-sm-3 centering mt-2">
                <div class="card shadow" style="width: 18rem;">
                    <img src="aset/foto2.jpg" alt="grooming">
                    <div class="card-body">
                      <h5 class="card-title" style="color: #323D51">Consultation</h5>
                      <p class="card-text" style="color: #323D51">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, omnis!</p>
                      {{-- <a href="#" class="btn btn-success">See details</a> --}}
                    </div>
                    <a href="#" class="btn btn-success">See details</a>
                  </div>
            </div>
        </div>
    </div>
  </div>
</section> 

<!--Galerry-->
<div class="blank">
    <h3> <br> </h3>
</div>
<section id="Gallery">
    <h3>Galerry</h3>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="aset/Picsart_22-09-08_12-26-09-088.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="aset/Picsart_22-09-08_12-26-09-088.jpg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="aset/Picsart_22-09-08_12-26-09-088.jpg" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
</section>

<!--Team-->
<section id="Team">
<div id="services" class="container-fluid fb-parateam centering">
    <div class="container m-5">
        <p class="fs-1 fw-bolder centering" style="color: white;"></p>
        <div class="row m-5 centering">

            <div class="col-sm-4 centering mt-5">
              <div class="card shadow" style="width: 25rem;">
                  <img src="aset/tim3.jpg" class="card-img-top" alt="grooming">                  
                  <div class="card-body">
                    <h5 class="card-title" style="color: #323D51">Fawaz Nabil</h5>
                    <p class="card-text" style="color: #323D51">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptatem!</p>
                    {{-- <a href="#" class="btn btn-success">See details</a> --}}
                  </div>
                  <a href="#" class="btn btn-success">See details</a>
                </div>
          </div>

            <div class="col-sm-4 centering mt-5">
                <div class="card shadow" style="width: 25rem;">
                    <img src="aset/Screenshot 2022-08-06 221512.png" class="card-img-top" alt="grooming">
                    <div class="card-body">
                      <h5 class="card-title" style="color: #323D51">Faridah salsabilla</h5>
                      <p class="card-text" style="color: #323D51">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eligendi.</p>
                      {{-- <a href="#" class="btn btn-success">See details</a> --}}
                    </div>
                    <a href="#" class="btn btn-success">See details</a>
                  </div>
            </div>

            <div class="col-sm-4 centering mt-5">
                <div class="card shadow" style="width: 25rem;">
                    <img src="aset/tim3.jpg" class="card-img-top" alt="grooming">
                    <div class="card-body">
                      <h5 class="card-title" style="color: #323D51">Favian Hilmi Putradifa</h5>
                      <p class="card-text" style="color: #323D51">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, omnis!</p>
                      {{-- <a href="#" class="btn btn-success">See details</a> --}}
                    </div>
                    <a href="#" class="btn btn-success">See details</a>
                  </div>
            </div>
        </div>
    </div>
  </div>
</section> 

<!--Team
<section id="Team">
    <div class="blank"><br></div>
    <div class="container">
        <h3>Our Team</h3>
        <div class="card mb-3" style="max-width: 1000px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="aset/Screenshot 2022-08-06 221512.png" class="img-fluid rounded-start" alt="...">
              </div>
            <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Farida Salsabila</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam numquam molestiae quo soluta exercitationem dicta accusamus earum ipsum dolor ducimus quidem inventore, iste sed laudantium eaque atque impedit excepturi non a ullam deserunt consequuntur itaque nesciunt accusantium. Voluptatum, quasi laboriosam eligendi velit, accusamus quibusdam ex veniam facere, nobis at ipsa.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
        </div>
</section> -->

<div class="person">
    <h3>Contact Us</h3>
    <p class ="Notelp"> No Telp/WA : +62821-43731-288</p>
    <p class ="Alamat"> Alamat : JL safire 5 No 14 Graha Bunder Asri Gresik,Jawa Timur</p>
    <p class ="Instagram"> Instagram : @salwaTravel</p>
    <a class="btn text-white";href="#!" role="button">
        <i class="fab fa-instagram"></i> <ln>salwaTravel
    </a>
    <a class="btn text-white" style="background-color: #25d366;" href="#!" role="button">
        <i class="fab fa-whatsapp"></i><ln>+62821-43731-288
    </a>
</div>

    <div class="layar-contact">
        <div class="copyright">
            created by : Muhammad Fawaz Nabil Ridwan Putra
        </div>
    </div>
</section>


    <!--<div class="layan-dalam">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        <h3>Our Team</h3>
        <p class="ringkasan">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam illum fuga laudantium minus, illo nesciunt reiciendis id suscipit explicabo tempora ipsum eveniet repellendus veniam quo consequuntur expedita sint? Molestias, ex!
        </p>
        <div class="tim">
            <img src="aset/foto2.jpg" align="left"/>
            <h6>John cena</h6>
            <span>indonesia</span>
        </div>
        <center>
            <img src="aset/foto2.jpg" />
            <h6>John anjir</h6>
            <span>indonesia</span>
        </center>
            <img src="aset/foto2.jpg" align="right"/>
            <h6>John blokk</h6>
            <span>indonesia</span>
    </div>
</section>
<!--Galerry-->
<!--<section class="Gallery" id=""Gallery>-->
    <!--<h1>Gallery My Team</h1>-->
    <!--<div class="container-gallery">
        <div class="content-slide">
            <div class="imgslide fade">
            <div class="numberslide">1 / 3</div>
            <img src ="aset/foto1.jpg"alt="">
            <div class="text">Pemandangan</div>
        </div>

        <div class="imgslide fade">
            <div class="numberslide">2 / 3</div>
            <img src ="aset/foto1.jpg"alt="">
            <div class="text">Pemandangan</div>
        </div>

        <div class="imgslide fade">
            <div class="numberslide">3 / 3</div>
            <img src ="aset/foto1.jpg"alt="">
            <div class="text">Pemandangan</div>
        </div>

        <a class="prev" onClick="nextslide (-1)">&#10094;</a>
        <a class="prev" onClick="nextslide (1)">&#10095;</a>
            </div>

            <div class="page">
                <span clas="dot"onClick="dotslide(1)"></span>
                <span clas="dot"onClick="dotslide(2)"></span>
                <span clas="dot"onClick="dotslide(3)"></span>
            </div>
        </div>
</section>
<!--<script>
    var slideindex = 1{
        showslide(slideindex);

        function nextslide(n){
            showslide(slideindex);

         function showslide(n){
            var i;
            var slides = document.getElementsByClassName("imgslide");

            if(n>slides.length){
                slideindex = 1
            }

            if(n<1){
                slideindex = slides.length;
            }

            for(i=0; i<slides.length; i++){
                slides[i].style.display = "none";
            }

            slides[slideindex - 1].style.display ="block";
         }   
        }
    }
</script>
<!--<section class ="Gallery" id="Gallery">
    <div class="Video-container">
        <div class="foto">
            <img src="aset/foto1.jpg">
            </div>
        <div class="controls">
            <span class="control-btn" data-src="aset/foto1.jpg"></span>
            <span class="control-btn" data-src="aset/foto2.jpg"></span>
            <span class="control-btn" data-src="aaset/foto4.jpg"></span>
        </div>
    </div>

    <div class="content">
        <h3>Gallery Salwa Travel</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam laboriosam nesciunt voluptatum ea. Commodi at laboriosam pariatur maxime recusandae reprehenderit? Ullam dolor praesentium corrupti illum atque sed reprehenderit aperiam!</p>
        <a href="#"class="btn">read more</a>
    </div>
                        </div>
                    </div>
                </div>
                </div>                
            </section>
        </main>
    </div> -->
    <script src="https://kit.fontawesome.com/1a60c45adc.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
 <!--   <script>
        $('dropdown-menu').click(function (e)){
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass('expan');
            $("#" + $.target).attr('for').prop('checked', ture);
        })
        </script>
        
    <script 
     src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous">
    </script>  
    <script src="https://kit.fontawesome.com/1a60c45adc.js" crossorigin="anonymous"></script>
    <!-- Option 2: Separate Popper and Bootstrap JS -->
    
</body>
</html>