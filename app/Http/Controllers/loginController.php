<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class loginController extends Controller
{
    function logar(Request $request){
        dd($request->email);
    }
}
