<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class listGridController extends Controller
{
    public function index(){
        return view('listGrid');
    }
}
