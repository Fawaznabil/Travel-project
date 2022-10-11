<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RiviewController extends Controller
{
    public function index(){
        return view('Riviews');
    }
}
