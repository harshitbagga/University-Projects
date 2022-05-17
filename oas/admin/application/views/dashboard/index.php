<div class="content-section">
                <div class="container-liquid">
                    <div class="row">
                        <div class="col-xs-2">
                            <div class="stat-box colorone">
                                <i class="author">&nbsp;</i>
                                <h4>Users</h4>
                                <h1><?php echo count($countuser); ?></h1>
                            </div>
	            
                        </div>
	        <div class="col-xs-2">
                            
	            <div class="stat-box colorone">
                                <i class="chart">&nbsp;</i>
                                <h4>Product</h4>
                                <h1><?php echo count($countproduct); ?></h1>
                            </div>
	            
                        </div>
	        <div class="col-xs-2">
                            
	            <div class="stat-box colorone">
                                <i class="chart">&nbsp;</i>
                                <h4>Package</h4>
                                <h1><?php echo count($countpackage); ?></h1>
                            </div>
	            
                        </div>
	        <div class="col-xs-2">
                            
	            <div class="stat-box colorone">
                                <i class="comments">&nbsp;</i>
                                <h4>Inquiries</h4>
                                <h1><?php echo count($countinquiry); ?></h1>
                            </div>
                        </div>
                        
                        <!--<div class="col-xs-6">
                            <div class="sec-box">
                                <a class="closethis">Close</a>
                                <header>
                                    <h2 class="heading">Daily Visitors</h2>
                                </header>
                                <div class="contents">
                                    <a class="togglethis">Toggle</a>
                                    <div class="charts-box boxpadding">
                                    	<script type="text/javascript" src="<?php //echo base_url('assets/js/raphael-2.1.0.min.js'); ?>"></script>
										<script type="text/javascript" src="<?php //echo base_url('assets/js/morris-0.4.1.min.js'); ?>"></script>
                                        <div id="displaydigonalbar" class="chartdark"></div>
                                        <script>
                                            /* data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type */
                                            var day_data = [
                                              {"period": "2012-10-01", "licensed": 3407, "sorned": 660},
                                              {"period": "2012-09-30", "licensed": 3351, "sorned": 629},
                                              {"period": "2012-09-29", "licensed": 3269, "sorned": 618},
                                              {"period": "2012-09-20", "licensed": 3246, "sorned": 661}
                                            ];
                                            Morris.Bar({
                                              element: 'displaydigonalbar',
                                              data: day_data,
                                              xkey: 'period',
                                              ykeys: ['licensed', 'sorned'],
                                              labels: ['Licensed', 'SORN'],
                                              xLabelAngle: 60,
											  
                                            });
                                        </script>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <div class="sec-box">
                                <a class="closethis">Close</a>
                                <header>
                                    <h2 class="heading">Updating data</h2>
                                </header>
                                <div class="contents boxpadding">
                                    <a class="togglethis">Toggle</a>
                                    <div class="charts-box">
                                        <div id="updatingdata"></div>
                                        <script>
                                            var nReloads = 0;
                                            function data(offset) {
                                              var ret = [];
                                              for (var x = 0; x <= 360; x += 10) {
                                                var v = (offset + x) % 360;
                                                ret.push({
                                                  x: x,
                                                  y: Math.sin(Math.PI * v / 180).toFixed(4),
                                                  z: Math.cos(Math.PI * v / 180).toFixed(4)
                                                });
                                              }
                                              return ret;
                                            }
                                            var graph = Morris.Line({
                                                element: 'updatingdata',
                                                data: data(0),
                                                xkey: 'x',
                                                ykeys: ['y', 'z'],
                                                labels: ['sin()', 'cos()'],
                                                parseTime: false,
                                                ymin: -1.0,
                                                ymax: 1.0,
                                                hideHover: true
                                            });
                                            function update() {
                                              nReloads++;
                                              graph.setData(data(5 * nReloads));
                                              $('#reloadStatus').text(nReloads + ' reloads');
                                            }
                                            setInterval(update, 100);
                                        </script>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-8">
                            <div class="sec-box">
                                <a class="closethis">Close</a>
                                <header>
                                    <h2 class="heading">USA Map</h2>
                                </header>
                                <div class="contents">
                                    <a class="togglethis">Toggle</a>
                                    <section class="map-box">
                                    	<script type="text/javascript" src="<?php echo base_url('assets/js/jqvmap/jquery.vmap.min.js'); ?>"></script>
										<script type="text/javascript" src="<?php echo base_url('assets/js/jqvmap/jquery.vmap.sampledata.js'); ?>"></script>
										<script type="text/javascript" src="<?php echo base_url('assets/js/jqvmap/maps/jquery.vmap.usa.js'); ?>"></script>
                                    	<script>
                                        	jQuery(document).ready(function() {
												jQuery('#usamap').vectorMap({
													map: 'usa_en',
													backgroundColor: '#33363f',
													color: '#ffffff',
													hoverOpacity: 0.7,
													selectedColor: '#999999',
													enableZoom: true,
													showTooltip: true,
													values: sample_data,
													scaleColors: ['#54acc0', '#e9535e'],
													normalizeFunction: 'polynomial'
												});
											});
                                        </script>
                                        <div id="usamap" class="mapsections"></div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="sec-box">
                                <a class="closethis">Close</a>
                                <header>
                                    <h2 class="heading">Some List</h2>
                                </header>
                                <div class="contents boxpadding">
                                    <a class="togglethis">Toggle</a>
                                    <div class="linkslist">
                                        <ul>
                                            <li class="success-list"><a href="#">Feed the cat</a><span class="captions">23 minutes ago</span></li>
                                            <li class="error-list"><a href="#">Meeting with Mark</a><span class="captions">23 minutes ago</span></li>
                                            <li><a href="#">Visit John</a><span class="captions">23 minutes ago</span></li>
                                            <li><a href="#">Urna adipiscing dictumst</a><span></span></li>
                                            <li><a href="#">Scelerisque magna adipiscing</a><span></span></li>
                                            <li><a href="#">Porttitor integer odio enim</a><span></span></li>
                                            <li><a href="#">Platea! Dis sociis a purus</a><span></span></li>
                                            <li class="error-list"><a href="#">Meeting with Mark</a><span class="captions">23 minutes ago</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <div class="sec-box">
                                <a href="#" class="closethis">Close</a>
                                <header>
                                    <h2 class="heading">Top Users</h2>
                                </header>
                                <div class="contents boxpadding">
                                    <a href="#" class="togglethis">Toggle</a>
                                    <div class="users-section scrolable scroller">
                                        <ul>
                                            <li>
                                                <figure>
                                                    <a href="#"><img src="<?php //echo base_url('assets/images/avatar1.jpg'); ?>" alt="Adminise" /></a>
                                                </figure>
                                                <div class="welcome">
                                                    <p>Welcome</p>
                                                    <h5><a href="#">Edmund E. Lindley</a></h5>
                                                </div>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a href="#"><img src="<?php //echo base_url('assets/images/avatar5.jpg'); ?>" alt="Adminise" /></a>
                                                </figure>
                                                <div class="welcome">
                                                    <p>Welcome</p>
                                                    <h5><a href="#">Robert S. Lara</a></h5>
                                                </div>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a href="#"><img src="<?php //echo base_url('assets/images/avatar6.jpg'); ?>" alt="Adminise" /></a>
                                                </figure>
                                                <div class="welcome">
                                                    <p>Welcome</p>
                                                    <h5><a href="#">Stephen N. Arellano</a></h5>
                                                </div>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a href="#"><img src="<?php //echo base_url('assets/images/avatar7.jpg'); ?>" alt="Adminise" /></a>
                                                </figure>
                                                <div class="welcome">
                                                    <p>Welcome</p>
                                                    <h5><a href="#">Randall A. Smoot</a></h5>
                                                </div>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a href="#"><img src="<?php //echo base_url('assets/images/avatar8.jpg'); ?>" alt="Adminise" /></a>
                                                </figure>
                                                <div class="welcome">
                                                    <p>Welcome</p>
                                                    <h5><a href="#">Olin C. Phillips</a></h5>
                                                </div>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a href="#"><img src="<?php //echo base_url('assets/images/avatar9.jpg'); ?>" alt="Adminise" /></a>
                                                </figure>
                                                <div class="welcome">
                                                    <p>Welcome</p>
                                                    <h5><a href="#">David R. Webb</a></h5>
                                                </div>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a href="#"><img src="<?php //echo base_url('assets/images/avatar1.jpg'); ?>" alt="Adminise" /></a>
                                                </figure>
                                                <div class="welcome">
                                                    <p>Welcome</p>
                                                    <h5><a href="#">Vincent P. Stjohn</a></h5>
                                                </div>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a href="#"><img src="<?php //echo base_url('assets/images/avatar5.jpg'); ?>" alt="Adminise" /></a>
                                                </figure>
                                                <div class="welcome">
                                                    <p>Welcome</p>
                                                    <h5><a href="#">David J. Kitchens</a></h5>
                                                </div>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a href="#"><img src="<?php //echo base_url('assets/images/avatar6.jpg'); ?>" alt="Adminise" /></a>
                                                </figure>
                                                <div class="welcome">
                                                    <p>Welcome</p>
                                                    <h5><a href="#">Stephen N. Arellano</a></h5>
                                                </div>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a href="#"><img src="<?php //echo base_url('assets/images/avatar7.jpg'); ?>" alt="Adminise" /></a>
                                                </figure>
                                                <div class="welcome">
                                                    <p>Welcome</p>
                                                    <h5><a href="#">David J. Dill</a></h5>
                                                </div>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a href="#"><img src="<?php //echo base_url('assets/images/avatar8.jpg'); ?>" alt="Adminise" /></a>
                                                </figure>
                                                <div class="welcome">
                                                    <p>Welcome</p>
                                                    <h5><a href="#">Ronald B. Albert</a></h5>
                                                </div>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a href="#"><img src="<?php //echo base_url('assets/images/avatar9.jpg'); ?>" alt="Adminise" /></a>
                                                </figure>
                                                <div class="welcome">
                                                    <p>Welcome</p>
                                                    <h5><a href="#">James D. Baker</a></h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <div class="tabs-section">
                                <ul class="nav nav-tabs" id="myTab">
                                    <li class="active"><a href="#home" data-toggle="tab">Home</a></li>
                                    <li><a href="#profile" data-toggle="tab">Profile</a></li>
                                    <li><a href="#messages" data-toggle="tab">Messages</a></li>
                                </ul>
                                
                                <div class="tab-content">
                                    <div class="tab-pane active" id="home">
                                    	<section class="boxpadding">
                                        	<p>
                                            <strong>Rhoncus duis enim in purus? Ac augue mid est mus augue lundium purus, turpis? Ut quis lundium pid, ridiculus ac aliquam dolor, scelerisque aliquet, sit porta cras ultricies ridiculus tempor vel sit, scelerisque! Rhoncus urna. Integer nec porttitor urna turpis, pellentesque nascetur, dictumst nunc? Enim!</strong>
                                            </p>
                                            <p>
                                            Placerat vel ac amet porta, ac. Quis est ut ac penatibus. Augue in scelerisque dictumst? Turpis dapibus porta est? Tristique, proin, cursus nec! Tincidunt, natoque tristique velit mus nisi etiam elementum placerat, arcu sed sit, in vel? Turpis scelerisque scelerisque et nisi egestas massa? Sed, auctor integer amet pulvinar, lectus pulvinar, quis mattis sit ut et diam amet platea, enim ac platea augue sagittis parturient montes porttitor, in cursus a aenean? Non, aenean adipiscing turpis.
											</p>
                                            <p>
 Magna dictumst massa? Mauris phasellus et mus, adipiscing augue ac nisi, turpis integer sed? Pulvinar platea sagittis adipiscing diam arcu platea, duis pulvinar proin pid ac phasellus vel magna, risus vut enim scelerisque? Rhoncus lundium? Proin nunc integer cum et rhoncus, risus natoque et. Quis vel sed? Rhoncus nec. Ac phasellus. Mattis quis, tincidunt aliquet? 
											</p>
                                        </section>
                                    </div>
                                    <div class="tab-pane" id="profile">
                                    	<section class="boxpadding">
                                            <p>
                                            Placerat vel ac amet porta, ac. Quis est ut ac penatibus. Augue in scelerisque dictumst? Turpis dapibus porta est? Tristique, proin, cursus nec! Tincidunt, natoque tristique velit mus nisi etiam elementum placerat, arcu sed sit, in vel? Turpis scelerisque scelerisque et nisi egestas massa? Sed, auctor integer amet pulvinar, lectus pulvinar, quis mattis sit ut et diam amet platea, enim ac platea augue sagittis parturient montes porttitor, in cursus a aenean? Non, aenean adipiscing turpis.
											</p>
                                            <p>
Magna dictumst massa? Mauris phasellus et mus, adipiscing augue ac nisi, turpis integer sed? Pulvinar platea sagittis adipiscing diam arcu platea, duis pulvinar proin pid ac phasellus vel magna, risus vut enim scelerisque? Rhoncus lundium? Proin nunc integer cum et rhoncus, risus natoque et. Quis vel sed? Rhoncus nec. Ac phasellus. Mattis quis, tincidunt aliquet? 
											</p>
                                            <p>
                                            <strong>Rhoncus duis enim in purus? Ac augue mid est mus augue lundium purus, turpis? Ut quis lundium pid, ridiculus ac aliquam dolor, scelerisque aliquet, sit porta cras ultricies ridiculus tempor vel sit, scelerisque! Rhoncus urna. Integer nec porttitor urna turpis, pellentesque nascetur, dictumst nunc? Enim!</strong>
                                            </p>
                                        </section>
                                    </div>
                                    <div class="tab-pane" id="messages">
                                    	<section class="boxpadding">
                                        	<p>
                                            <strong>Rhoncus duis enim in purus? Ac augue mid est mus augue lundium purus, turpis? Ut quis lundium pid, ridiculus ac aliquam dolor, scelerisque aliquet, sit porta cras ultricies ridiculus tempor vel sit, scelerisque! Rhoncus urna. Integer nec porttitor urna turpis, pellentesque nascetur, dictumst nunc? Enim!</strong>
                                            </p>
                                            <p>
Magna dictumst massa? Mauris phasellus et mus, adipiscing augue ac nisi, turpis integer sed? Pulvinar platea sagittis adipiscing diam arcu platea, duis pulvinar proin pid ac phasellus vel magna, risus vut enim scelerisque? Rhoncus lundium? Proin nunc integer cum et rhoncus, risus natoque et. Quis vel sed? Rhoncus nec. Ac phasellus. Mattis quis, tincidunt aliquet? Elementum turpis porttitor dignissim, nisi elementum, tincidunt risus, amet lectus nisi nisi facilisis, amet lacus integer porttitor pulvinar diam eu velit enim aliquam scelerisque lacus sit phasellus tincidunt augue eros ac phasellus scelerisque a, mauris. Quis et dapibus tortor vel scelerisque! Cum ultrices nisi, adipiscing velit diam purus! Proin scelerisque quis ac purus et? Ridiculus, vel! Rhoncus etiam, aliquet scelerisque nisi lundium dolor est. Ridiculus, vel! Rhoncus etiam, aliquet scelerisque nisi lundium dolor est.
											</p>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>-->
                    </div>
                    <!-- Row End -->
                </div>
            </div>