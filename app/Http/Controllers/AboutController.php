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

    public function store(Request $request)
    {

	    \Mail::send('emails.contact',
	        array(
	            'name' => $request->get('name'),
	            'email' => $request->get('email'),
	            'user_message' => $request->get('message')
	        ), function($message)
	    {
	        $message->from('ipssi.lyon@gmail.com');
	        $message->to('ipssi.lyon@gmail.com', 'Admin')->subject('IPSSI Feedback');
	    });

	  return \Redirect::route('contact')->with('message', 'Thanks for contacting us!');
    }
}
