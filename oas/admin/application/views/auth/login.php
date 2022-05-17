<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Login Vintage Wars</title>
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
        	<a href="javascript:void(0)"><!--<img src="<?php echo base_url('assets/images/logo2.png'); ?>" alt="vintage wars" />--><h1>Vintage Wars</h1></a>
            <p>Enter your credentials to login to your account</p>
        </header>
        <form action="<?php echo base_url('index.php/auth'); ?>" method="post" name="login_form" id="login_form">
			<?php echo '<p class="error">'.$this->session->flashdata('error').'</p>'; ?>
            <?php echo '<p class="success">'.$this->session->flashdata('success').'</p>'; ?>
        	<div class="username">
        		<input type="text" class="form-control" placeholder="Enter your username" value="<?php echo set_value('username'); ?>" name="username" id="username"/>
                <i class="glyphicon glyphicon-user"></i>
				<?php echo form_error('username','<p class="error">'); ?>
            </div>
            <div class="password">
            	<input type="password" class="form-control" placeholder="Enter your password" value="<?php echo set_value('password'); ?>" name="password" id="password"/>
                <i class="glyphicon glyphicon-lock"></i>
				<?php echo form_error('password','<p class="error">'); ?>
            </div>
            
            <input type="submit" class="btn btn-primary style2" value="Sign In" />
        </form>
        <footer>
        	<a href="<?php echo base_url('index.php/auth/forgot_pwd'); ?>" class="forgot pull-left">I forgot my password</a>
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
