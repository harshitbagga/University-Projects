<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Vintage Wars</title>
<!--// Stylesheets //-->
<link href="<?php echo asset_url('css/style.css'); ?>" rel="stylesheet" media="screen" />
<link href="<?php echo asset_url('css/bootstrap.css'); ?>" rel="stylesheet" media="screen" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<link rel="shortcut icon" href="<?php echo base_url('assets/images/favicon.ico'); ?>">
<script type="text/javascript" src="<?php echo asset_url('js/jquery.js'); ?>"></script>
<script type="text/javascript" src="<?php echo asset_url('js/bootstrap.min.js'); ?>"></script>
<script type="text/javascript" src="<?php echo asset_url('js/icheck.min.js'); ?>"></script>
<!--[if lt IE 9]>
	<script src="<?php echo asset_url('js/html5shiv.js'); ?>"></script>
	<script src="<?php echo asset_url('js/respond.min.js'); ?>"></script>
<![endif]-->
</head>

<body>
<!-- Wrapper Start -->
<div class="loginwrapper">
	<span class="circle"></span>
	<div class="loginone">
    	<header>
        	<a href="javascript:void(0)"><!--<img src="<?php echo base_url('assets/images/logo2.png'); ?>" alt="RM Software Solution" /></a>--><h1>Vintage Wars</h1>
            <p>Enter your email id to forgot your account</p>
        </header>
        <form action="<?php echo base_url('index.php/auth/forgot_pwd'); ?>" method="post" name="login_form" id="login_form">
			<?php echo '<p class="error">'.$this->session->flashdata('error').'</p>'; ?>
			<?php echo '<p class="success">'.$this->session->flashdata('email_sentsucsess').'</p>'; ?>
        	<div class="username">
        		<input type="text" class="form-control" placeholder="Enter your Email" value="<?php echo set_value('email'); ?>" name="email" id="email"/>
                <i class="glyphicon glyphicon-user"></i>
				<?php echo form_error('email','<p class="error">'); ?>
            </div>
            <input type="submit" class="btn btn-primary style2" value="Send" />
        </form>
        <footer>
        	<a href="<?php echo base_url('index.php/auth'); ?>" class="forgot pull-left">Back To Login</a>
            <!--<a href="#" class="register pull-right">Create account</a>-->
            <div class="clear"></div>
        </footer>
    </div>
</div>
<!-- Wrapper End -->
<?php
if(isset($js)){
	echo $js;
}
?>
<script>
<?php echo $validation_script; ?>
</script>


</body>
</html>
