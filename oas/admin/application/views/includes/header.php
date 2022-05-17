<?php
$method = $this->router->fetch_method();
$class = strtolower($this->router->fetch_class());
?>

<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $page_title; ?> - Vintage Wars</title>
<!--// Stylesheets //-->
<link rel="shortcut icon" href="<?php echo base_url('assets/images/favicon.ico'); ?>">
<?php
	if (isset($css)) {
		echo $css;
	}
?>
        
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<!--// Javascript //-->
<?php
	if (isset($js)) {
		echo $js;
	}
?>
<script>
	var BASE_URL = "<?php echo base_url(); ?>";
	<?php if(($class=="services" && ($method=="add_services" || $method=="edit_services")) || ($class=="training" && ($method=="add_training" || $method=="edit_training")) || ($class=="portfolio" && ($method=="add_portfolio" || $method=="edit_portfolio"))){ ?>
	CKEDITOR.on( 'instanceReady', function( ev ) {
	});
	function InsertHTML() {
		var editor = CKEDITOR.instances.editor1;
		var value = document.getElementById( 'htmlArea' ).value;
		if ( editor.mode == 'wysiwyg' )
		{
			editor.insertHtml( value );
		}
		else
			alert( 'You must be in WYSIWYG mode!' );
	}
	function InsertText() {
		var editor = CKEDITOR.instances.editor1;
		var value = document.getElementById( 'txtArea' ).value;
		if ( editor.mode == 'wysiwyg' )
		{
			editor.insertText( value );
		}
		else
			alert( 'You must be in WYSIWYG mode!' );
	}
	function SetContents() {
		var editor = CKEDITOR.instances.editor1;
		var value = document.getElementById( 'htmlArea' ).value;
		editor.setData( value );
	}
	function GetContents() {
		var editor = CKEDITOR.instances.editor1;
		alert( editor.getData() );
	}
	function ExecuteCommand( commandName ) {
		var editor = CKEDITOR.instances.editor1;
		if ( editor.mode == 'wysiwyg' )
		{
			editor.execCommand( commandName );
		}
		else
			alert( 'You must be in WYSIWYG mode!' );
	}
	function CheckDirty() {
		var editor = CKEDITOR.instances.editor1;
		alert( editor.checkDirty() );
	}
	function ResetDirty() {
		var editor = CKEDITOR.instances.editor1;
		editor.resetDirty();
		alert( 'The "IsDirty" status has been reset' );
	}
	function Focus() {
		CKEDITOR.instances.editor1.focus();
	}
	function onFocus() {
		//document.getElementById( 'eMessage' ).innerHTML = '<b>' + this.name + ' is focused </b>';
	}
	function onBlur() {
		//document.getElementById( 'eMessage' ).innerHTML = this.name + ' lost focus';
	}
	<?php } ?>
</script>
<!--[if lt IE 9]>
	<script src="<?php echo asset_url('js/html5shiv.js'); ?>"></script>
	<script src="<?php echo asset_url('js/respond.min.js'); ?>"></script>
<![endif]-->
</head>

<body>
<!-- Wrapper Start -->
<div class="wrapper">
	<div class="structure-row">
        <!-- Sidebar Start -->
        <?php include 'sidebar.php'; ?>
        <!-- Sidebar End -->
        <!-- Right Section Start -->
        <div class="right-sec">
            <!-- Right Section Header Start -->
            <header>
                <!-- User Section Start -->
                <div class="user">
                    <figure>
                        <a href="#"><img src="<?php echo base_url('assets/images/avatar1.png'); ?>" alt="Adminise" /></a>
                    </figure>
                    <div class="welcome">
                        <p>Welcome</p>
                        <h5><a href="#"><?php echo $this->session->userdata('Firstname'); ?></a></h5>
                    </div>
                </div>
                <!-- User Section End -->
                <!-- Search Section Start -->
                <!--<div class="search-box">
                    <input type="text" placeholder="Search Anything" />
                    <input type="submit" value="go" />
                </div>-->
                <!-- Search Section End -->
                <!-- Header Top Navigation Start -->
                <nav class="topnav">
                    <ul id="nav1">
                        <!--<li class="tasks">
                        	<a href="#"><i class="glyphicon glyphicon-check"></i>Tasks<span>(04)</span></a>
                            <div class="popdown">
                            	<div class="taskslist">
                                	<ul>
                                    	<li>
                                        	<h6><a href="#">Vel lundium natoque</a><span class="pull-right">25%</span></h6>
                                            <div class="progress">
                                                <div style="width: 15%" class="progress-bar progress-bar-success">
                                                    <span class="sr-only">35% Complete (success)</span>
                                                </div>
                                                <div style="width: 5%" class="progress-bar progress-bar-warning">
                                                    <span class="sr-only">20% Complete (warning)</span>
                                                </div>
                                                <div style="width: 5%" class="progress-bar progress-bar-danger">
                                                    <span class="sr-only">10% Complete (danger)</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                        	<h6><a href="#">Vel lundium natoque</a><span class="pull-right">75%</span></h6>
                                            <div class="progress">
                                                <div style="width: 30%" class="progress-bar progress-bar-success">
                                                    <span class="sr-only">35% Complete (success)</span>
                                                </div>
                                                <div style="width: 30%" class="progress-bar progress-bar-warning">
                                                    <span class="sr-only">20% Complete (warning)</span>
                                                </div>
                                                <div style="width: 15%" class="progress-bar progress-bar-danger">
                                                    <span class="sr-only">10% Complete (danger)</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                        	<h6><a href="#">Vel lundium natoque</a><span class="pull-right">52%</span></h6>
                                            <div class="progress">
                                                <div style="width: 30%" class="progress-bar progress-bar-success">
                                                    <span class="sr-only">35% Complete (success)</span>
                                                </div>
                                                <div style="width: 15%" class="progress-bar progress-bar-warning">
                                                    <span class="sr-only">20% Complete (warning)</span>
                                                </div>
                                                <div style="width: 7%" class="progress-bar progress-bar-danger">
                                                    <span class="sr-only">10% Complete (danger)</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                        	<h6><a href="#">Vel lundium natoque</a><span class="pull-right">90%</span></h6>
                                            <div class="progress">
                                                <div style="width: 30%" class="progress-bar progress-bar-success">
                                                    <span class="sr-only">35% Complete (success)</span>
                                                </div>
                                                <div style="width: 30%" class="progress-bar progress-bar-warning">
                                                    <span class="sr-only">20% Complete (warning)</span>
                                                </div>
                                                <div style="width: 30%" class="progress-bar progress-bar-danger">
                                                    <span class="sr-only">10% Complete (danger)</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#" class="viewall">View All Tasks</a>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </li>
                        <li class="notifi">
                        	<a href="#"><i class="glyphicon glyphicon-bell"></i>Notifications</a>
                            <div class="popdown">
                            	<div class="notificationlist">
                                	<ul>
                                    	<li>
                                        	<h6><a href="#">Vel lundium natoque</a></h6>
                                            <p>In parturient! Vel lundium natoque</p>
                                            <span><i class="glyphicon glyphicon-time"></i>2hrs ago</span>
                                        </li>
                                        <li>
                                        	<h6><a href="#">Vel lundium natoque</a></h6>
                                            <p>In parturient! Vel lundium natoque</p>
                                            <span><i class="glyphicon glyphicon-time"></i>2hrs ago</span>
                                        </li>
                                        <li>
                                        	<h6><a href="#">Vel lundium natoque</a></h6>
                                            <p>In parturient! Vel lundium natoque</p>
                                            <span><i class="glyphicon glyphicon-time"></i>2hrs ago</span>
                                        </li>
                                        <li>
                                        	<h6><a href="#">Vel lundium natoque</a></h6>
                                            <p>In parturient! Vel lundium natoque</p>
                                            <span><i class="glyphicon glyphicon-time"></i>2hrs ago</span>
                                        </li>
                                    </ul>
                                    <a href="#" class="viewall">View All Notifications</a>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </li>
                        <li class="inbox">
                        	<a href="inbox.html"><i class="glyphicon glyphicon-envelope"></i>Inbox<span>(03)</span></a>
                        </li>-->
                        <li class="settings">
                        	<a href="#"><i class="glyphicon glyphicon-wrench"></i>Settings</a>
                            <div class="popdown popdown-right settings">
                            	<nav>
                                	<a href="<?php echo base_url('index.php/dashboard/change_password'); ?>"><i class="glyphicon glyphicon-pencil"></i>Change Password</a>
                                    <a href="<?php echo base_url('index.php/auth/logout'); ?>"><i class="glyphicon glyphicon-log-out"></i>Log out</a>
                                </nav>
                            </div>
                        </li>
                    </ul>
                </nav>
                <!-- Header Top Navigation End -->
                <div class="clearfix"></div>
            </header>
            <!-- Right Section Header End -->
            <!-- Content Section Start -->
            
            <!-- Content Section End -->
        


        
		