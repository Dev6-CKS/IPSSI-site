<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class AboutController extends Controller
{
    
    public function create()
    {
        return view('about.contact');
    }

    public function store()
    {
    	return \Redirect::route('contact')
      ->with('message', 'Thanks for contacting us!');
    }
}
