<?php

use App\Models\Category;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\LoginController;
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
Route::get('/', function () {
    return view('Home');
});

Route::get('/Home', function () {
    return view('Home');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/blog', function () {
    return view('blog');
});

Route::get('/contact', function () {
    return view('contact');
});

Route::get('/services', function () {
    return view('services');
});

Route::get('/single', function () {
    return view('single');
});

Route::get('/Login', function () {
    return view('Login');
});

Route::get('/Chat2', function () {
    return view('Chat2');
});

Route::get('/Register', function () {
    return view('Register');
});


Route::get('/upload', function () {
    return view('upload');
});

// Route::get('/Register', [LoginController::class, 'Register']{  
// }); 