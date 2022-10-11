<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormGalleryController extends Controller
{
    public function index(){
        return view('Admin.FormGallery');
    }
}
