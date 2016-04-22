<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;

class AboutController extends Controller
{
    
    public function create()
    {
        return view('about.contact');
    }

    public function store(Request $request)
    {

    	// process the form here

	    // create the validation rules ------------------------
	    $rules = array(
	        'name'             => 'required',                     // just a normal required validation
	        'email'            => 'required|email',
	        'g-recaptcha-response' => 'required|recaptcha'
	    );

	    // do the validation ----------------------------------
	    // validate against the inputs from our form
	    $validator = Validator::make(Input::all(), $rules);

	    // check if the validator failed -----------------------
	    if ($validator->fails()) {

	        // get the error messages from the validator
	        $messages = $validator->messages();

	        // redirect our user back to the form with the errors from the validator
	        return Redirect::to('contact')->withErrors($validator);

	    } else {
	        // validation successful ---------------------------

	        // our duck has passed all tests!
	        // let him enter the database

	        // create the data for our duck

		    \Mail::send('emails.contact',
		        array(
		            'name' => $request->get('name'),
		            'email' => $request->get('email'),
		            'user_message' => $request->get('message')
		        ), function($message)
		    {
		        $message->from('feyza.kozan04@gmail.com');
		        $message->to('feyza.kozan04@gmail.com', 'Admin')->subject('IPSSI Feedback');
		    });
		}

	  return \Redirect::route('contact')->with('message', 'Thanks for contacting us!');
    }
}
