<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormPopupController extends Controller
{
    public function index(){
        return view('Admin.FormPopup');
    }
}
