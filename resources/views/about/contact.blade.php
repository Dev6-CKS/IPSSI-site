<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style/main.css">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <title>IPSSI</title>
    </head>
    <body>
      <h1>Contact Form</h1>

      <ul>
          @foreach($errors->all() as $error)
              <li>{{ $error }}</li>
          @endforeach
      </ul>

      @if(Session::has('message'))
          <div class="alert alert-info">
            {{Session::get('message')}}
          </div>
      @endif

      {!! Form::open(array('route' => 'contact_store', 'class' => 'form')) !!}

      <div class="form-group">
          {!! Form::label('Your Name') !!}
          {!! Form::text('name', null, 
              array('required', 
                    'class'=>'form-control', 
                    'placeholder'=>'Your name')) !!}
      </div>

      <div class="form-group">
          {!! Form::label('Your E-mail Address') !!}
          {!! Form::text('email', null, 
              array('required', 
                    'class'=>'form-control', 
                    'placeholder'=>'Your e-mail address')) !!}
      </div>

      <div class="form-group">
          {!! Form::label('Your Message') !!}
          {!! Form::textarea('message', null, 
              array('required', 
                    'class'=>'form-control', 
                    'placeholder'=>'Your message')) !!}
      </div>
      <div class="form-group">
          {!! Form::label('Recaptcha') !!}
          {!! Recaptcha::render() !!}
      </div>

      <div class="form-group">
          {!! Form::submit('Contact Us!', 
            array('class'=>'btn btn-primary')) !!}
      </div>
      {!! Form::close() !!}

        <script src="js/main.js"></script>
    </body>
</html>