<?php
$method = $this->router->fetch_method();
$class = strtolower($this->router->fetch_class());
$userName=$this->session->userdata('loginname');
?>

<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $page_title; ?> - Vintage Wars</title>
<!--// Stylesheets //-->
<link rel="shortcut icon" href="<?php //echo base_url('assets/images/favicon.ico'); ?>">
<?php
	if (isset($css)) {
		echo $css;
	}
?>
<style>
	.error
	{
		color:red;
	}
	.success
	{
		color: green;
	}
</style>        
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<!--// Javascript //-->
<?php
	if (isset($js)) {
		echo $js;
	}
?>
<script>
	var BASE_URL = "<?php echo base_url(); ?>";
</script>
<!--[if lt IE 9]>
	<script src="<?php echo asset_url('js/html5shiv.js'); ?>"></script>
	<script src="<?php echo asset_url('js/respond.min.js'); ?>"></script>
<![endif]-->
</head>
<body class="home blog wlt_auction_theme core_auction_theme wlt_fullwidth" >
            <div class="page-wrapper  demomode" id="listing_styles">
               <div class="header_wrapper">
                  <header id="header">
                     <div class="overlay">
                        <div id="core_header_navigation" class="hidden-xs">
                           <div class="container">
                              <div class="row">
                                 <ul class="nav nav-pills pull-right accountdetails">
									<?php
										if($userName=="")
										{
										?>
                                    <li class="hidden-sm hidden-xs"><a href="<?php echo base_url('index.php/auth/login'); ?>" class="ua5 ">Login</a></li>
                                    <li class="hidden-sm hidden-xs"><a href="<?php echo base_url('index.php/auth/register'); ?>" class="ua6 ">Register</a></li>
									<?php
										}
										else
										{
										?>
										<li class=""><a href="<?php echo base_url('index.php/myaccount/index'); ?>" class="ua1 ">Dashboard</a></li>
										<li class="hidden-sm hidden-xs"><a href="<?php echo base_url('index.php/myaccount/changepwd'); ?>" class="ua5 ">Change Password</a></li>
										<li class="hidden-sm hidden-xs"><a href="<?php echo base_url('index.php/auth/logout'); ?>" class="ua4 ">Logout</a></li>
										<?php
										}
										?>
                                 </ul>
                                <div class="navbar-inner">
                                    <!--<ul class='nav nav-pills'>
                                       <li class="MyLocationLi">
                                          <a href="#" onclick="GMApMyLocation();" data-toggle="modal" data-target="#MyLocationModal">
                                             <div class="flag flag- wlt_locationflag"></div>
                                             Change Location
                                          </a>
                                       </li>
                                    </ul>-->
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="core_header_wrapper">
                           <div class="container header_style4" id="core_header">
                              <div class="row">
                                 <div class="col-md-6 col-sm-6 col-xs-12" id="core_logo">
                                    <a href="index.php" title="AT1">
                                       <div class="iconwrap hidden-sm hidden-xs"><!--<img src="#logo" alt="Vintage Wars" id="logoicon" />--><h1>Vintage Wars</h1></div>
                                       <div class='logowrapper'><span class='main'></span> <span class='submain'></span></div>
                                    </a>
                                 </div>
                                 <div class="col-md-6 col-sm-6 col-xs-12" id="core_header_searchbox">
                                    <div class="row clearfix hidden-xs" id="auctionsearchblock">
                                       <div class="col-md-4">
                                          
                                             <div class="wlt_searchbox clearfix">
                                                <div class="inner">
                                                   <div class="wlt_button_search"><i class="glyphicon glyphicon-search"></i></div>
                                                   <input type="text" name="txtsearch" id="txtsearch" placeholder="Search" value="">               
                                                </div>
                                             </div>
                                          
                                       </div>
                                       <div class="col-md-8">
                                          <ul class="nav nav-pills" role="tablist">
											<?php
										if($userName=="")
										{
										?>
											 <li><a href="<?php echo base_url('index.php/auth/login'); ?>">Available Bids <span class="badge ">0</span></a></li>
                                             <li><a href="<?php echo base_url('index.php/auth/login'); ?>">Bids <span class="badge ">0</span></a></li>
                                             <li><a href="<?php echo base_url('index.php/auth/login'); ?>">Won <span class="badge ">0</span></a></li>
									    <?php
										}
										else
										{
										?>
										    <li><a href="<?php echo base_url('index.php/myaccount/index'); ?>">Available Bids <span class="badge "><?php echo $this->session->userdata('UserBid'); ?></span></a></li>
										    <li><a href="<?php echo base_url('index.php/myaccount/index'); ?>">Bids <span class="badge ">0</span></a></li>
                                            <li><a href="<?php echo base_url('index.php/myaccount/index'); ?>">Won <span class="badge ">0</span></a></li>
										<?php
										}
										?>
                                          </ul>
										
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="container-fluid" id="core_smallmenu">
                           <div class="row">
                              <div id="wlt_smalldevicemenubar">
                                 <a href="javascript:void(0);" class="b1" data-toggle="collapse" data-target=".wlt_smalldevicemenu">Website Navigation <span class="glyphicon glyphicon-align-justify"></span></a>
                                 <div class="wlt_smalldevicemenu collapse">
                                    <ul id="menu-aaa-1" class="">
                                       <li  class="menu-item menu-item-type-custom menu-item-object-custom <?php echo $active_tab == "home" ? "current-menu-item current_page_item menu-item-home" : ""; ?>"><a href="<?php echo base_url(); ?>"><span>Home</span></a></li>
                                       <li  class="menu-item menu-item-type-post_type menu-item-object-page <?php echo $active_tab == "about" ? "current-menu-item current_page_item menu-item-about" : ""; ?>"><a href="<?php echo base_url('index.php/home/aboutus'); ?>"><span>About Us</span></a></li>
                                       <!--<li  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown">
                                          <a href="sample.php"><span>Sample Page</span></a>
                                          <ul class="smalldevice_dropmenu">
                                             <li  class="menu-item menu-item-type-post_type menu-item-object-page"><a href="sample.php"><span>Sample Page</span></a></li>
                                             <li  class="menu-item menu-item-type-post_type menu-item-object-page"><a href="sample.php"><span>Example CSS</span></a></li>
                                             
                                          </ul>
                                       </li>-->
									   <?php
										if($userName!="")
										{
										?>
                                       <li  class="menu-item menu-item-type-post_type menu-item-object-page <?php echo $active_tab == "myaccount" ? "current-menu-item current_page_item menu-item-about" : ""; ?>"><a href="<?php echo base_url('index.php/myaccount/index'); ?>"><span>My Account</span></a></li>
									   <?php
										}
										?>
                                       <!--<li  class="menu-item menu-item-type-post_type menu-item-object-page"><a href="blog.php"><span>Blog</span></a></li>-->
                                       <li  class="menu-item menu-item-type-post_type menu-item-object-page <?php echo $active_tab == "contact" ? "current-menu-item current_page_item menu-item-about" : ""; ?>"><a href="<?php echo base_url('index.php/home/contactus'); ?>"><span>Contact</span></a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="core_menu_wrapper" class="menu_style4">
                           <div class="container">
                              <div class="row">
                                 <nav class="navbar">
                                    <div class='pull-right visible-lg'>
										<?php
										if($userName=="")
										{
										?>
                                       <a href='<?php echo base_url('index.php/auth/login'); ?>'>
                                          <div class='button clearfix'>
                                             <div class='title'>Add Auction</div>
                                          </div>
                                       </a>
									   <?php
										}
										else
										{
											if($class=="myaccount" && $method=="index")
											{
										?>
										<a href='javascript:void(0)' onclick="jQuery('#MyDetailsBlock').hide(); jQuery('#MyDashboardBlock').hide();jQuery('#MyUserBlock').hide();jQuery('#MyProductBlock').show();jQuery('#MyProductListingBlock').hide();jQuery('#MyPaymentHistory').hide();">
                                          <div class='button clearfix'>
                                             <div class='title'>Add Auction</div>
                                          </div>
                                       </a>
										<?php
											}
											else
											{
										?>
										<a href='<?php echo base_url('index.php/myaccount/index'); ?>'>
                                          <div class='button clearfix'>
                                             <div class='title'>Add Auction</div>
                                          </div>
                                       </a>
										<?php
											}
										}
										?>
                                    </div>
                                    <div class="navbar-collapse">
                                       <ul id="menu-aaa" class="nav navbar-nav">
                                          <li  class="menu-item menu-item-type-custom menu-item-object-custom <?php echo $active_tab == "home" ? "current-menu-item current_page_item menu-item-home" : ""; ?>"><a href="<?php echo base_url(); ?>"><span>Home</span></a></li>
                                          <li  class="menu-item menu-item-type-post_type menu-item-object-page <?php echo $active_tab == "about" ? "current-menu-item current_page_item menu-item-about" : ""; ?>"><a href="<?php echo base_url('index.php/home/aboutus'); ?>"><span>About Us</span></a></li>
                                          <!--<li  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown">
                                             <a  href="sample.php" class="dropdown-toggle" data-hover="dropdown" data-delay="500" data-close-others="false"><span>Sample Page</span></a>
                                             <ul class="dropdown-menu">
                                                <li  class="menu-item menu-item-type-post_type menu-item-object-page"><a href="sample.php"><span>Sample Page</span></a></li>
                                                <li  class="menu-item menu-item-type-post_type menu-item-object-page"><a href="sample.php"><span>Example CSS</span></a></li>
                                                
                                             </ul>
                                          </li>-->
										  <?php
										if($userName!="")
										{
										?>
                                          <li  class="menu-item menu-item-type-post_type menu-item-object-page <?php echo $active_tab == "myaccount" ? "current-menu-item current_page_item menu-item-about" : ""; ?>"><a href="<?php echo base_url('index.php/myaccount/index'); ?>"><span>My Account</span></a></li>
										  <?php
										}
										?>
                                          <!--<li  class="menu-item menu-item-type-post_type menu-item-object-page"><a href="blog.php"><span>Blog</span></a></li>-->
                                          <li  class="menu-item menu-item-type-post_type menu-item-object-page <?php echo $active_tab == "contact" ? "current-menu-item current_page_item menu-item-about" : ""; ?>"><a href="<?php echo base_url('index.php/home/contactus'); ?>"><span>Contact</span></a></li>
                                       </ul>
                                    </div>
                                 </nav>
                              </div>
                           </div>
                        </div>
                     </div>
                  </header>
               </div>