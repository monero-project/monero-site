<?php
// set the language cookie, all languages must use the appropriate ISO 639-1 code
$lang = "en"; // fallback to English
// we expect the path of this file to be /XX (two letter language code), if its not then the most likely event is that we are in the
// English language part of the site. If we are in, say, /de then we can just grab that ISO code and run with it. The nginx rules won't
// match on a language we don't know about anyway.
if (substr(realpath(dirname(__FILE__)), -3, 1) == "/")
	$lang = substr(realpath(dirname(__FILE__)), -2);
// apply to all Monero subdomains, expire in a month
//setcookie("MONERO_LANG", $lang, time()+2592000, "/", ".getmonero.org");
setcookie("MONERO_LANG", $lang, time()+2592000, "/");
?>