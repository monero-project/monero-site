<?php
date_default_timezone_set('Africa/Johannesburg');
if (isset($_COOKIE["MONERO_LANG"]))
{
	if ($_COOKIE["MONERO_LANG"] == "en")
	{
		header('Location: /home');
		die();
	}
	else
	{
		header('Location: /'.$_COOKIE["MONERO_LANG"]);
		die();
	}
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Monero - private, secure, untraceable</title>

    <link href="//static.monero.cc/css/bootstrap.min.css" rel="stylesheet">
    <link href="//static.monero.cc/css/main.css" rel="stylesheet">

    <!--[if lt IE 9]>
      <script src="//static.monero.cc/js/html5shiv.js"></script>
      <script src="//static.monero.cc/js/respond.min.js"></script>
    <![endif]-->
  </head>

  <body class="body-language">
    <!-- Static navbar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="/"><img class="logo" src="//static.monero.cc/images/logo.svg"></a>
        </div>
      </div>
    </div>

    <div class="container main-content">
      <div class="row">
        <div class="col-md-4 col-md-offset-2">
          <ul class="nav nav-pills nav-stacked flag-select">
            <li><a href="/home"><h3><img class="flag" src="//static.monero.cc/images/flags/english_combined.png"> English</h3></a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="nav nav-pills nav-stacked flag-select">
            <li><h3><img class="flag" src="//static.monero.cc/images/flags/allflags.png"> More coming...</h3></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="container">
        <p>
          Copyright &copy; <strong>The Monero Project, <?php echo date("Y"); ?></strong>
        </p>
      </div>
    </div>


    <!-- JS -->
    <script src="//static.monero.cc/js/jquery.min.js"></script>
    <script src="//static.monero.cc/js/bootstrap.min.js"></script>
  </body>
</html>
