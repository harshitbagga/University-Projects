<?php
$class1 = strtolower($this->router->fetch_class());
?>
<aside class="sidebar">
        	<div class="sidebar-in">
                <!-- Sidebar Header Start -->
                <header>
                    <!-- Logo Start -->
                    <div class="logo">
                        <a href="<?php echo base_url('index.php/dashboard'); ?>"><!--<img src="<?php echo base_url('assets/images/logo2.png'); ?>" alt="Adminise" /></a>--><h1>Vintage Wars</h1>
                    </div>
                    <!-- Logo End -->
                    <!-- Toggle Button Start -->
                    <a href="javascript:void(0)" class="togglemenu">&nbsp;</a>
                    <!-- Toggle Button End -->
                    <div class="clearfix"></div>
                </header>
                <!-- Sidebar Header End -->
                <!-- Sidebar Navigation Start -->
                <nav class="navigation">
                    <ul class="navi-acc" id="nav2">
                        <li class="<?php echo $active_tab == "dashboard" ? "active" : ""; ?>">
							<a href="<?php echo base_url('index.php/dashboard'); ?>" class="dashboard">Dashboard</a>
						</li>
						<li class="<?php echo $active_tab == "user" ? "active" : ""; ?>">
							<a href="<?php echo base_url('index.php/User'); ?>" class="layouts">User</a>
						</li>
						<li class="<?php echo $active_tab == "product" ? "active" : ""; ?>">
							<a href="<?php echo base_url('index.php/product/index'); ?>" class="layouts">Product</a>
						</li>
						<li class="<?php echo $active_tab == "package" ? "active" : ""; ?>">
							<a href="<?php echo base_url('index.php/package/index'); ?>" class="layouts">Package</a>
						</li>
                        <li class="<?php echo ($active_tab == "settings") ? "active" : ''; ?>">
                            <a href="javascript:void(0)" class="layouts">Master</a>
							<ul>
                                <li><a href="<?php echo base_url('index.php/settings/country'); ?>">Country</a></li>
								<li><a href="<?php echo base_url('index.php/settings/state'); ?>">State</a></li>
							    <li><a href="<?php echo base_url('index.php/settings/city'); ?>">City</a></li>
								<li><a href="<?php echo base_url('index.php/settings/category'); ?>">Category</a></li>
                            </ul>
                        </li>
						<li class="<?php echo $active_tab == "inquiry" ? "active" : ""; ?>">
							<a href="<?php echo base_url('index.php/settings/inquiry'); ?>" class="layouts">Inquiry</a>
						</li>
						<li>
							<a href="<?php echo base_url('index.php/auth/logout'); ?>" class="layouts">Logout</a>
						</li>
                    </ul>
                    <div class="clearfix"></div>
                </nav>
                <!-- Sidebar Navigation End -->
                <!-- Shadow Start -->
                <span class="shadows"></span>
                <!-- Shadow End -->
            </div>
        </aside>