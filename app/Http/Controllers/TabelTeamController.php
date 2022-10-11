<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TabelTeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('Admin.TabelTeam');
    }
}