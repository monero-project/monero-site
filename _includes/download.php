<?php
// try figure out the OS from the useragent so we can serve the right default download
function detect_os($useragent){
  $uas_os = array();
  if (preg_match('#(Windows|Win) ([a-zA-Z0-9.\ ]+)#i', $useragent, $regmatch)){
    $uas_os['name'] = "Windows";
    $uas_os['code'] = "win";
    if(preg_match('/x86_64/i', $useragent) || preg_match('/x86-64/i', $useragent) || preg_match('/Win64/i', $useragent) || preg_match('/x64;/i', $useragent) || preg_match('/amd64/i', $useragent) || preg_match('/WOW64/i', $useragent) || preg_match('/x64_64/i', $useragent)){
      $uas_os['bits'] = "64";
    }
    else
    {
      $uas_os['bits'] = "32";
    }
    $uas_os['ext'] = "zip";
  }elseif (preg_match('/Mac/i', $useragent)){
    $uas_os['name'] = "OS X";
    $uas_os['code'] = "mac";
    $uas_os['bits'] = "64";
  }elseif (preg_match('/Linux/i', $useragent)){
    $uas_os['name'] = "Linux";
    $uas_os['code'] = "linux";
    $uas_os['bits'] = "64";
  }elseif (preg_match('/FreeBSD/i', $useragent)){
    $uas_os['name'] = "FreeBSD";
    $uas_os['code'] = "freebsd";
    $uas_os['bits'] = "64";
/*  }elseif (preg_match('/CrOS/', $useragent)){
    $uas_os['name'] = "Chrome OS";
    $uas_os['code'] = "chrome";
  }elseif (preg_match('/FreeBSD/i', $useragent)){
    $uas_os['name'] = "FreeBSD";
    $uas_os['code'] = "freebsd";
  }elseif (preg_match('/OpenBSD/i', $useragent)){
    $uas_os['name'] = "OpenBSD";
    $uas_os['code'] = "openbsd";
  }elseif (preg_match('/Solaris/i', $useragent)){
    $uas_os['name'] = "Solaris";
    $uas_os['code'] = "solaris";
  }elseif (preg_match('/Nintendo Wii/i', $useragent)){
    $uas_os['name'] = "Nintendo Wii";
    $uas_os['code'] = "wii";
  }elseif(preg_match('/Nintendo DSi/i', $useragent)){
    $uas_os['namee'] = "Nintendo DSi";
    $uas_os['code'] = "ndsi";
  }elseif (preg_match('#SymbianOS/([.0-9a-zA-Z]+)#i', $useragent, $regmatch)){
    $uas_os['name'] = "SymbianOS";
    $uas_os['code'] = "symbian";*/
  }else{
    $uas_os['name'] = "Windows";
    $uas_os['code'] = "win";
    $uas_os['bits'] = "32";
  }

  return $uas_os;
}

$os_array = detect_os($_SERVER['HTTP_USER_AGENT']);

?>
            <p class="download-links">
              {% t index.monero_for %} <?php echo $os_array['name']; ?> 
              <span>
                <a href="/downloads/<?php echo $os_array['code']; ?><?php echo $os_array['bits']; ?>" class="btn btn-grey pull-right">
                  <i class="fa fa-plus-circle icon_download" style="color: white; font-size: 20px;"></i> {% t index.c_download %}
                </a>
              </span>
            </p>
            
            <p class="download-links">
              {% t index.latest_blockchain %}
              <span>
                <a href="/downloads/blockchain/<?php echo $os_array['code']; ?>/blockchain.bin" class="btn btn-grey pull-right">
                  <i class="fa fa-plus-circle icon_download" style="color: white; font-size: 20px;"></i> {% t index.c_download %}
                </a>
              </span>
            </p>