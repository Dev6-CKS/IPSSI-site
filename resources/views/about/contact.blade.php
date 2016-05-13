<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style/main.css">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet">


        <title>IPSSI</title>
    </head>
    <body>
      <div class="container">
      <div class="row">
      <h1>Formulaire de contact</h1>

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
          {!! Form::label('Votre nom') !!}
          {!! Form::text('name', null, 
              array('required', 
                    'class'=>'form-control', 
                    'placeholder'=>'Nom')) !!}
      </div>

      <div class="form-group">
          {!! Form::label('Votre adresse E-mail') !!}
          {!! Form::text('email', null, 
              array('required', 
                    'class'=>'form-control', 
                    'placeholder'=>'Adresse e-mail')) !!}
      </div>

      <div class="form-group">
          {!! Form::label('Votre Message') !!}
          {!! Form::textarea('message', null, 
              array('required', 
                    'class'=>'form-control', 
                    'placeholder'=>'Message')) !!}
      </div>
      <div class="form-group">
          {!! Form::label('Recaptcha') !!}
          {!! Recaptcha::render() !!}
      </div>

      <div class="form-group">
          {!! Form::submit('Contactez Nous!', 
            array('class'=>'btn btn-primary')) !!}
      </div>
      {!! Form::close() !!}
        </div>
        </div>
        <script src="js/main.js"></script>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
    </body>
</html>