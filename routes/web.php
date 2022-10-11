<?php

use App\Models\Category;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Halaman1Controller;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DetailPageController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\GridController;
use App\Http\Controllers\Halaman2Controller;
use App\Http\Controllers\listGridController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegistrasiController;
use App\Http\Controllers\RiviewController;

use App\Http\Controllers\FormDestinasiController;
use App\Http\Controllers\FormGalleryController;
use App\Http\Controllers\FormPopupController;
use App\Http\Controllers\FormTeamController;
use App\Http\Controllers\FormTestimoniController;
use App\Http\Controllers\indexAdminController;
use App\Http\Controllers\TabelDestinasiController;
use App\Http\Controllers\TabelGalleryController;
use App\Http\Controllers\TabelPopupController;
use App\Http\Controllers\TabelTeamController;
use App\Http\Controllers\tabelTestimoniController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*
Route::get('/indexA', function () {
    return view('Admin.indexA');
});

Route::get('/GridA', function () {
    return view('Admin.GridA');
});

Route::get('/listGridA', function () {
    return view('Admin.listGridA');
});

Route::get('/AboutUsA', function () {
    return view('Admin.AboutUsA');
});

Route::get('/GalleryA', function () {
    return view('Admin.GalleryA');
});

Route::get('/contactA', function () {
    return view('Admin.contactA');
});

Route::get('/profileA', function () {
    return view('Admin.profileA');
});

Route::get('/FormDestinasi', function () {
    return view('Admin.FormDestinasi');
});

Route::get('/FormGallery', function () {
    return view('Admin.FormGallery');
});

Route::get('/FormPopup', function () {
    return view('Admin.FormPopup');
});

Route::get('/FormTestimoni', function () {
    return view('Admin.FormTestimoni');
});

Route::get('/FormProfile', function () {
    return view('Admin.FormProfile');
});

Route::get('/Admin', function () {
    return view('Admin.indexA');
});*/

Route::get('/indexA', function () {
    return view('Admin.indexA');
});

Route::get('/FormDestinasi', function () {
    return view('Admin.FormDestinasi');
});

Route::get('/FormGallery', function () {
    return view('Admin.FormGallery');
});

Route::get('/FormPopup', function () {
    return view('Admin.FormPopup');
});

Route::get('/FormTeam', function () {
    return view('Admin.FormTeam');
});

Route::get('/FormTestimoni', function () {
    return view('Admin.FormTestimoni');
});

Route::get('/TabelDestinasi', function () {
    return view('Admin.TabelDestinasi');
});

Route::get('/TabelGallery', function () {
    return view('Admin.TabelGallery');
});

Route::get('/TabelPopup', function () {
    return view('Admin.TabelPopup');
});

Route::get('/TabelTeam', function () {
    return view('Admin.TabelTeam');
});

Route::get('/TabelTestimoni', function () {
    return view('Admin.TabelTestimoni');
});

/*Pengguna*/

Route::get('/', [Halaman1Controller::class, 'index']);

Route::get('/Login', [LoginController::class, 'index']);

Route::get('/AboutUs', [AboutUsController::class, 'index']);

Route::get('/contacts', [ContactController::class, 'index']);

Route::get('/detail-page', [DetailPageController::class, 'index']);

Route::get('/Gallery', [GalleryController::class, 'index']);

Route::get('/Grid', [GridController::class, 'index']);

Route::get('/Homekedua', [Halaman2Controller::class, 'index']);

Route::get('/listGrid', [listGridController::class, 'index']);

Route::get('/profile', [ProfileController::class, 'index']);

Route::get('/Register', [RegistrasiController::class, 'index']);

Route::get('/Riviews', [RiviewController::class, 'index']);

/*Admin*/

Route::get('/Admin', [indexAdminController::class, 'index']);

Route::get('/FDestinasi', [FormDestinasiController::class, 'index']);

Route::get('/FGallery', [FormGalleryController::class, 'index']);

Route::get('/FPopup', [FormPopupController::class, 'index']);

Route::get('/FTeam', [FormTeamController::class, 'index']);

Route::get('/FTestimoni', [FormTestimoniController::class, 'index']);

Route::get('/TDestinasi', [TabelDestinasiController::class, 'index']);

Route::get('/TGallery', [TabelGalleryController::class, 'index']);

Route::get('/TPopup', [TabelPopupController::class, 'index']);

Route::get('/TTeam', [TabelTeamController::class, 'index']);

Route::get('/TTestimoni', [TabelTestimoniController::class, 'index']);


/*Route::resouce('/', [ProductController::class]);
Route::resouce('/Login', [LoginController::class]);

Route::get('/indexA', [ProductController::class, 'indexA']);
Route::post('/store', [ProductController::class, 'store']);*/