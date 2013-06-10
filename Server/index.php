<?php session_start(); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1"> 
<link rel="stylesheet" href="css/style.css" />
<title>RCP</title>
</head>

<body>
<div id="login_form">
<form method='POST' action='index.php'>
<input name='login'>
<br />
<input name='pass' type="password">
<br />
<input type='submit' value='Send'>
</form>
</div>

<?php
if (isset($_GET[logout])) {
unset($_SESSION['auth']);
echo("<script language='javascript'>document.location.href = 'http://rcp.my/index.php';</script>");
}
?>
<?php
if ($_POST['login'] == 'admin' && $_POST['pass'] == 'pass') {
$_SESSION['auth'] = '1';
}

if ($_SESSION['auth'] && $_GET[logout]=='') {
include("include/menu.php");
include("include/control.php");
	
}

?>




</body>
</html>
