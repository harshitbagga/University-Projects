<?php
$method = $this->router->fetch_method();
$class = strtolower($this->router->fetch_class());

?>
<style>
   i.glyphicon.glyphicon-user,i.glyphicon.glyphicon-dashboard,i.glyphicon.glyphicon-pencil,i.glyphicon.glyphicon-search,i.glyphicon.glyphicon-envelope,i.glyphicon.glyphicon-comment,i.glyphicon.glyphicon-book,i.glyphicon.glyphicon-star,i.glyphicon.glyphicon-bookmark,i.glyphicon.glyphicon-briefcase {
   float: left;
   }
</style>
<div id="core_padding">
   <div id="core_padding_inner">
      <div class=" container widecontainer core_section_top_container">
         <div class="row core_section_top_row wlt_main_2colsright">
            <div id="core_inner_wrap" class="clearfix">
               <article class="col-md-12" id="core_middle_column">
                  <div class="core_middle_wrap">
                     <div id="core_ajax_callback"></div>
                     <div class="row">
                        <aside class="core_sidebar col-md-3 col-sm-3 " id="core_left_column">
                           <div class="core_widgets_categories_list normallayout">
                              <div class="panel panel-default">
                                 <div class="panel-heading">Account Options</div>
                                 <ul class="list-group clearfix">
                                    <li class="list-group-item">
                                       <i class="glyphicon glyphicon-dashboard"></i>       
                                       <a href="javascript:void(0)" onclick="jQuery('#MyDetailsBlock').hide(); jQuery('#MyDashboardBlock').show();jQuery('#MyUserBlock').hide();jQuery('#MyProductBlock').hide();jQuery('#MyProductListingBlock').hide();jQuery('#MyPaymentHistory').hide();"> Dashboard</a>
                                    </li>
                                    <li class="list-group-item">
                                       <i class="glyphicon glyphicon-user"></i>       
                                       <a href="javascript:void(0)" onclick="jQuery('#MyDetailsBlock').show(); jQuery('#MyDashboardBlock').hide();jQuery('#MyUserBlock').hide();jQuery('#MyProductBlock').hide();jQuery('#MyProductListingBlock').hide();jQuery('#MyPaymentHistory').hide(); "> My Account</a>
                                    </li>
                                    <li class="list-group-item">
                                       <i class="glyphicon glyphicon-pencil"></i>       
                                       <a href="javascript:void(0)" onclick="jQuery('#MyDetailsBlock').hide(); jQuery('#MyDashboardBlock').hide();jQuery('#MyUserBlock').hide();jQuery('#MyProductBlock').show();jQuery('#MyProductListingBlock').hide();jQuery('#MyPaymentHistory').hide();"> Create Listing</a>
                                    </li>
                                    <li class="list-group-item">
                                       <i class="glyphicon glyphicon-search"></i>       
                                       <a href="javascript:void(0)" onclick="jQuery('#MyDetailsBlock').hide(); jQuery('#MyDashboardBlock').hide();jQuery('#MyUserBlock').hide();jQuery('#MyProductBlock').hide();jQuery('#MyProductListingBlock').show();jQuery('#MyPaymentHistory').hide();"> My Listings</a>
                                    </li>
                                    <!--<li class="list-group-item">
                                       <i class="glyphicon glyphicon-envelope"></i>       
                                       <a href="#top" onclick="jQuery('#MyDetailsBlock').hide();jQuery('#MyMsgBlock').show(); jQuery('#MyFeedback').hide(); jQuery('#MyDashboardBlock').hide(); jQuery('#MySubscriptionBlock').hide();"> My Messages</a>
                                       
                                       
                                       </li>
                                       
                                       
                                       <li class="list-group-item">
                                       
                                       <i class="glyphicon glyphicon-comment"></i>       
                                       <a href="#top" onclick="jQuery('#MyDetailsBlock').hide();jQuery('#MyFeedback').show(); jQuery('#MyMsgBlock').hide(); jQuery('#MyDashboardBlock').hide(); jQuery('#MySubscriptionBlock').hide();"> Feedback</a>
                                       
                                       
                                       </li>
                                       
                                       
                                       <li class="list-group-item">
                                       
                                       <i class="glyphicon glyphicon-book"></i>       
                                       <a href="#top" onclick="jQuery('#MyDetailsBlock').hide();jQuery('#MySubscriptionBlock').show(); jQuery('#MyFeedback').hide(); jQuery('#MyMsgBlock').hide(); jQuery('#MyDashboardBlock').hide();"> My Subscriptions</a>
                                       
                                       
                                       </li>
                                       
                                       
                                       <li class="list-group-item">
                                       
                                       <i class="glyphicon glyphicon-star"></i>       
                                       <a href="#" onclick=""> My Favorites</a>
                                       
                                       
                                       </li>-->
                                    <li class="list-group-item">
                                       <i class="glyphicon glyphicon-user"></i>
                                       <a href="javascript:void(0)" onclick="jQuery('#MyDetailsBlock').hide(); jQuery('#MyDashboardBlock').hide();jQuery('#MyUserBlock').show();jQuery('#MyProductBlock').hide();jQuery('#MyProductListingBlock').hide();jQuery('#MyPaymentHistory').hide();">
                                       View Profile 
                                       </a>
                                    </li>
												<li class="list-group-item">
                                       <i class="glyphicon glyphicon-briefcase"></i>
                                       <a href="javascript:void(0)" onclick="jQuery('#MyDetailsBlock').hide(); jQuery('#MyDashboardBlock').hide();jQuery('#MyUserBlock').hide();jQuery('#MyProductBlock').hide();jQuery('#MyProductListingBlock').hide();jQuery('#MyPaymentHistory').show();">
                                       Payment History 
                                       </a>
                                    </li>
                                    <li class="list-group-item">
                                       <div class="text-center">
                                          <a class="btn btn-warning" style="float:none;display:block;" href="<?php echo base_url('index.php/auth/logout'); ?>">
                                          Logout    </a> 
                                       </div>
                                    </li>
                                 </ul>
                                 <div class="clearfix"></div>
                              </div>
                           </div>
                        </aside>
                        <article class="col-md-820 col-sm-820" id="core_middle_column">
                           <div class="core_middle_wrap">
                              <div id="core_ajax_callback"></div>
                              <div id="MyDashboardBlock" style="display: none;">
                                 <div class="account_header">
                                    <div class="account_header_wrapper">
                                       <ul class="list-group list-inline clearfix">
                                          <li class="col-md-4 hidden-xs ">
                                             <small>Welcome back        
                                             , <?php echo $this->session->userdata('UserFirstname'); ?> !
                                             </small>
                                             <h1>Dashboard</h1>
                                          </li>
                                          <!--<li class="list-group-item col-md-3 col-sm-12 col-xs-12 text-center">
                                             <a href="javascript:void(0);" onclick="jQuery('#MyDetailsBlock').hide();jQuery('#MyMsgBlock').show(); jQuery('#MyFeedback').hide(); jQuery('#MyDashboardBlock').hide();">
                                             <span>0</span> new messages</a>
                                             </li>-->
														<li class="list-group-item col-md-3 col-sm-12 col-xs-12" style="text-align:center;">
                                             <a href="javascript:void(0)"><span><?php echo $userinfo[0]->balance_bid; ?></span> Available Bids</a>
                                          </li>
                                          <li class="list-group-item col-md-3 col-sm-12 col-xs-12" style="text-align:center;">
                                             <a href="javascript:void(0)"><span>9</span> Bids</a>
                                          </li>
                                          <li class="list-group-item col-md-2 col-sm-12 col-xs-12" style="text-align:center;">
                                             <a href="javascript:void(0)">
                                             <span>3</span> Won</a>
                                          </li>
                                       </ul>
                                       <!-- START CUSTOM TEXT DISPLAY -->            
                                    </div>
                                 </div>
                                 <div class="clearfix"></div>
                                 <!-- ------------- -->
                                 <!-- ------------- -->
											<table class="table table-bordered">
                                    <thead>
                                       <tr>
                                          <th>Bidding History </th>
                                          <th style="width:100px; text-align:center;">Max Bid</th>
                                          <th style="text-align:center;">Actions</th>
                                       </tr>
                                    </thead>
                                    <tbody>
													<?php
															 if (isset($userbidinfo) && !empty($userbidinfo)) {
                                             	   foreach ($userbidinfo as $key=>$row) {
													?>
                                       <tr>
                                          <td>
                                             <b><a href="<?php echo base_url('index.php/product/productdetail/'.$row->product_id); ?>"><?php echo $row->productname; ?></a></b><br>
                                             <span style="font-size:11px;"><?php echo date('F d, Y H:i a',strtotime($row->bid_date)); ?> | Auction Status: active</span>
                                             <div id="countdown_id<?php echo $row->product_id; ?>" class="hasCountdown"></div>
                                             <script>
                                                
                                                var countDownDate = new Date("<?php echo $row->enddate; ?>").getTime();

																// Update the count down every 1 second
																var x = setInterval(function() {
																
																  // Get todays date and time
																  var now = new Date().getTime();
																
																  // Find the distance between now an the count down date
																  var distance = countDownDate - now;
																
																  // Time calculations for days, hours, minutes and seconds
																  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
																  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
																  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
																  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
																
																  // Display the result in the element with id="demo"
																  document.getElementById("countdown_id<?php echo $row->product_id; ?>").innerHTML = "<b>"+seconds + " Seconds " + minutes + " Minutes "
																  + hours + " Hours and " + days + " Days </b> left!";
																
																  // If the count down is finished, write some text 
																  if (distance < 0) {
																	 clearInterval(x);
																	 document.getElementById("countdown_id<?php echo $row->product_id; ?>").innerHTML = "<b>0 Seconds, 0 Minutes, 0 Hours, and 0 Days</b> left!";
																  }
																}, 1000);
                                                
                                              
                                             </script>
                                          </td>
                                          <td style="text-align:center;"><?php echo (isset($productbidinfo[$key])?"Rs. ".number_format($productbidinfo[$key][$row->product_id]["bid_price"],2)."<br />":""); ?> <small>now Rs. <?php echo number_format($row->bid_price,2);  ?></small></td>
                                          <td style="text-align:center;">
                                             <a href="<?php echo base_url('index.php/product/productdetail/'.$row->product_id); ?>" class="btn btn-primary">View Auction</a>
                                          </td>
                                       </tr>
													<?php
																	}
															 }
															 else
															 {
													?>
													<tr>
                                          <td colspan="3" style="text-align: center;">Empty History</td>
													</tr>
													<?php
															 }
													?>
                                    </tbody>
                                 </table>
                                 <!--<div class="row">
                                    <div class="col-md-6">
                                    
                                        
                                     <div class="panel panel-default">
                                        <div class="panel-body">
                                       
                                        
                                        
                                        <ul class="nav nav-tabs" id="Tabs">
                                        
                                        <li class="active"><a href="#t1" data-toggle="tab">Recently Viewed</a></li>
                                        
                                        <li><a href="#t2" data-toggle="tab">My Favorite Listings</a></li>
                                     
                                    </ul>
                                    
                                    <div class="tab-content">
                                        
                                        <div class="tab-pane active" id="t1">
                                        
                                         <ul class="listboxes">
                                        		<li><a href="http://at1.wlthemes.com/listing/example-item-11/">Example Item 11</a></li>
                                    <li><a href="http://at1.wlthemes.com/?post_type=listing_type&amp;p=5913">Mobile xyz</a></li>
                                    <li><a href="http://at1.wlthemes.com/screenshot/">screenshot</a></li>
                                    <li><a href="http://at1.wlthemes.com/screenshot/">screenshot</a></li>
                                    <li><a href="http://at1.wlthemes.com/screenshot/">screenshot</a></li>
                                    <li><a href="http://at1.wlthemes.com/listing/test-monkey/">Test Monkey</a></li>
                                    <li><a href="http://at1.wlthemes.com/?post_type=listing_type&amp;p=5936">sofa for you</a></li>
                                    <li><a href="http://at1.wlthemes.com/?post_type=listing_type&amp;p=5936">sofa for you</a></li>
                                    <li><a href="http://at1.wlthemes.com/listing/example-item-11/">Example Item 11</a></li>
                                    <li><a href="http://at1.wlthemes.com/listing/mobilni/">mobilni</a></li>
                                            		
                                    </ul>
                                        
                                         </div>
                                        
                                        <div class="tab-pane" id="t2">
                                        
                                         <ul class="listboxes">
                                                
                                                
                                               
                                              </ul>
                                        
                                        </div>
                                        
                                    
                                       
                                    </div>
                                       
                                       
                                        </div>
                                        </div>
                                    
                                    </div>    
                                    
                                    <div class="col-md-6">
                                    
                                        
                                        <div class="panel panel-default" style="min-height:400px;">
                                        
                                        <div class="panel-heading">Latest News</div>
                                        
                                        <div class="panel-body">
                                         
                                    
                                        <div class="activity-feed">
                                        
                                        	             
                                      <div class="feed-item">
                                            <div class="date">April 27, 2017 5:02 am</div>
                                            <div class="text"><a href="http://at1.wlthemes.com/hello-world/">Hello world!</a></div>
                                          </div>
                                    
                                                
                                      <div class="feed-item">
                                            <div class="date">July 31, 2015 4:26 pm</div>
                                            <div class="text"><a href="http://at1.wlthemes.com/another-test-blog-post/">Another Test Blog Post</a></div>
                                          </div>
                                    
                                           
                                       
                                         
                                        </div>
                                       
                                       
                                        </div>
                                        </div>
                                        
                                            
                                    </div> 
                                            
                                    </div> -->
                                 <div class="membershipblock_account">
                                    <div class="clearfix"></div>
                                    <hr>
                                    <h3 class="text-center">Membership Packages</h3>
                                    <p class="text-center">Our membership packages let you submit multiple packages.</p>
                                    <hr>
                                    <div class="packagesblock">
                                       <ul class="packagelistitems clearfix">
                                          <?php
															 if (isset($packagelist) && !empty($packagelist)) {
                                             	   foreach ($packagelist as $row) {
																		
																		$priceconvet=$row->pprice*0.0153;
																		$returnUrl=base_url('index.php/payment/sucess/'.$row->package_id.'/'.round($row->pprice).'/'.$row->bid);
                                             ?>
                                          <div class="col-md-3 col-sm-6">
                                             <div class="panel panel-default text-center">
                                                <div class="panel-heading">
                                                   <h5><?php echo $row->pname; ?> </h5>
                                                </div>
                                                <div class="panel-body">
																																																			<p><span class="panel-title"><b>No. of Bid : </b><?php echo $row->bid; ?></span></p>
                                                   <span class="panel-title price"><b>Rs. </b> <?php echo number_format($row->pprice,2); ?></span><!--<span class="days">for a 30 day membership.</span>-->
                                                </div>
																<!--<p>30 Day Membership</p>-->
                                                <ul class="list-group">
                                                   <li class="list-group-item panel-footer" style="text-align: center;">
                                                      <a class="btn btn-lg btn-primary" href="javascript:void(0);" onclick="document.getElementById('return').value='<?php echo $returnUrl; ?>';document.getElementById('amount').value='<?php echo $priceconvet; ?>';document.getElementById('item_name').value='<?php echo $row->pname; ?>';document.getElementById('item_number').value='<?php echo $row->package_id; ?>';document.MEMBERSHIPFORM.submit();">Pay Now</a>
                                                      <div class="clearfix"></div>
                                                      <div class="moreinfo">
                                                         <a href="#myModal<?php echo $row->package_id; ?>" role="button" data-toggle="modal">More Info</a>
                                                      </div>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                          <!----------------------- PACKAGE DESCRIPTION ------------------------->
                                          <div id="myModal<?php echo $row->package_id; ?>" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                             <div class="modal-dialog">
                                                <div class="modal-content">
                                                   <div class="modal-header">
                                                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
                                                      <h4 class="modal-title"><?php echo $row->pname; ?></h4>
                                                   </div>
                                                   <div class="modal-body">
                                                      <p><img src="<?php echo base_url("admin/assets/uploads/".$row->photo); ?>" alt="<?php echo $row->pname; ?>" border="0" width="100" height="100"/></p>
                                                      <p><?php echo $row->package_descr; ?></p>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <!----------------------- end PACKAGE DESCRIPTION ------------------------->
                                          <?php
                                             }
                                             }
                                             ?>
                                       </ul>
                                    </div>
                                    <div class="clearfix"></div>
                                 </div>
                              </div>
                              <div class="panel panel-default" id="MyProductBlock" style="display:none;">
											<script type="application/javascript">

												function colAll(){
												jQuery('#step1').removeClass("in");
												jQuery('#step2').removeClass("in");
												jQuery('#step3').removeClass("in");
												jQuery('#step4').removeClass("in");
												jQuery('#step5').removeClass("in");
												jQuery('#step6').removeClass("in");
												}
												function VALIDATE_FORM_DATA(){
												 
												 
												// USER REGISTRATION VALIDATION
												
													var de422 	= document.getElementById("user_paypalemail");
													 if( de422 != null && de422.value == ''){
														  alert('Please complete all fields.');
														  de422.style.border = 'thin solid red';
														  de422.focus();
														  colAll();  
														  return false;
													 }
													 
												
												 
												
												// IMAGE UPLOADS
												
												// LISTING DESCRIPTION VALIDATION
												var de1 	= document.getElementById("form_post_title");
												if(de1.value == ''){
													alert('Please complete all fields.');
													de1.style.border = 'thin solid red';
													de1.focus();
													colAll(); jQuery('.stepblock2').collapse('show');
													return false;
												}
												
												// MIN CHARACTERS FOR LISTING LENGHT
												var de3 = document.getElementById("form_post_content");
												
												if(jQuery("#form_post_content").val().length < 200){
													alert('Please add more content to your listing description.');
													de3.style.border = 'thin solid red';
													de3.focus();
													colAll(); jQuery('.stepblock2').collapse('show');
													return false;
												}
												if(de3.value == ''){
													alert('Please complete all fields.');
													de3.style.border = 'thin solid red';
													de3.focus();
													colAll(); jQuery('.stepblock2').collapse('show');
													return false;
												}
												
												
												
												// GET THE ENHANCEMENT FORM DATA
												var newform2 = jQuery('#enhancementsblock .checkbox').clone(); //Clone form 1
												jQuery('#enhancementscopy div').replaceWith(newform2);
												
												jQuery('html,body').scrollTop(0);
												
												// VALIDATE CUSTOM FIELDS
												var formresult = ValidateCoreRegFields();  
												if(formresult == false){
												return false;
												}
												
												// LOAD IN DISPLAY UNIT
												jQuery('#wlt_stepswizard').hide();
												jQuery('#mediauploadblock').hide();
												jQuery('#core_saving_wrapper').show();
												 
												}
												
 
													function listingenhancement(id,price){
														
														// DISABLE CHECK
														jQuery("#"+id).attr("disabled", true);
														
														// ADD CHECK CLASS
														jQuery("."+id+'_b').toggleClass("sel");
														
														// CURRENT PRICE
														var current_amount_total = jQuery("#listingprice").text();	
														 
														var current_amount_total = current_amount_total.replace(".00", "");
														//var current_amount_total = current_amount_total.replace(".", "");
														var current_amount_total = current_amount_total.replace(",", "");
														
														// WORK OUT PRICES
														if(document.getElementById(id).checked == true){
															newtotal = parseFloat(current_amount_total)+price;
														}else{
															newtotal = parseFloat(current_amount_total)-price;
														}
														newtotal = Math.round(newtotal*100)/100;
														newtotal = newtotal.toFixed(2);	
														jQuery("#listingprice").text(newtotal);
														
															 
														if(id == 'exh3'){	 	
															toggleHTML();
														}
														
														// REMOVE DISABLE
														setTimeout(function(){ jQuery("#"+id).removeAttr("disabled");   }, 1000);	 
														 
													
													}
													 var area1, htmlenabled;
													 function toggleHTML() {
													
															  if(!area1) {
															
																area1 = new nicEditor({ buttonList : ['bold','italic',
													'underline',
													'left',
													'center',
													'right',
													'justify',
													'ol',
													'ul',
													'strikethrough',
													'removeformat',
													'indent',
													'outdent',
													'hr',
													'image',
													'forecolor',
													'bgcolor',
													'link' ,
													'unlink' ,
													'fontSize', 
													'fontFamily', 
													'fontFormat']}).panelInstance('form_post_content',{hasPanel : true});
													
													htmlenabled = true;
														
													
													 
															  } else {
																	// REMOVE
																area1.removeInstance('form_post_content');
																	area1 = null;
																			
																// STRIP HTML TAGS
																var html = jQuery("#form_post_content").text();
																var div = document.createElement("div");
																jQuery("#form_post_content").innerHTML = div;
																			
															  }
														}  
														
													
													
	
													
												</script>
											<script type="text/javascript" src="<?php echo base_url('assets/js/nicEdit.js'); ?>"></script>
											<form action="#" method="post" enctype="multipart/form-data" onsubmit="return VALIDATE_FORM_DATA();" id="SUBMISSION_FORM">
												<div id="wlt_stepswizard" class="panel-group ">
													<!--- STEP 2 --->
													<div class="panel panel-default" id="panel_section2">
														<div class="panel-heading">
															<span class="step-number">1</span>
															<div class="pull-right"><span class="label label-default" style="text-shadow:none">Example Package 1</span></div>
															<a href="#step1" class="astep1 " data-parent="#wlt_stepswizard" data-toggle="collapse">Listing Description</a>
														</div>
														<div id="step1" class="stepblock2 panel-collapse collapse in">
															<div class="panel-body">
																<h1>Add Auction</h1>
																Once you have completed the options below your new listing will be created but <b>will not go live</b> until payment has been received. This gives you time to check, modify and preview the listing before payment.
																<hr>
																<div class="form-group clearfix" id="form-row-rapper-post_title">
																	<label class="control-label col-md-12">Title <span class="required">*</span></label>
																	<div class="field_wrapper col-md-12"><input type="text" name="form[post_title]" placeholder="" maxlength="255" id="form_post_title" class="form-control" tabindex="10" value=""></div>
																</div>
																<div class="form-group clearfix col-md-12" id="form-row-rapper-post_content">
																	<label class="control-label">Description <span class="required">*</span></label>
																	<div class="field_wrapper">
																		<textarea class="form-control" rows="10" name="form[post_content]" id="form_post_content" tabindex="11"></textarea>
																		<script>
																			jQuery(document).ready(function() {
																				toggleHTML();
																				textarealimit();
																			});
																			function textarealimit(){
																			
																			  text_max = 200;
																			  var text_length = jQuery('#form_post_content').val().length;
																			  var text_remaining = text_max - text_length;
																			  if(text_remaining < 0){
																			  jQuery('#textarea_feedback').hide();
																			  }
																			
																			  jQuery('#textarea_feedback span').html( '<b>' + text_remaining + '</b> characters remaining.');
																			
																				jQuery('#form_post_content').keyup(function() {
																				
																					  var text_length = jQuery('#form_post_content').val().length;
																					  var text_remaining = text_max - text_length; 
																			
																					  jQuery('#textarea_feedback span').html( '<b>' + text_remaining + '</b> characters remaining.');
																					
																					if(text_remaining < 0){
																						jQuery('#textarea_feedback').hide();
																					}else{
																						jQuery('#textarea_feedback').show();
																					}
																					
																				});
																				
																			};
																			
																		</script>
																		<div id="textarea_feedback" style="font-size: 12px;  color: #999;  padding-top: 5px;"> <i class="glyphicon glyphicon-tasks"></i> Minimum of 200 characters.   <span><b>200</b> characters remaining.</span> </div>
																	</div>
																</div>
																<style>
																	.field_wrapper > div {
																			width: 100% !important;
																	}
																	.nicEdit-main
																	{
																		width: 100% !important;
																		height: 200px !important;
																	}
																</style>
															</div>
														</div>
													</div>
													<!--- STEP 2 --->
													<!--- STEP 5 --->
													<div class="panel panel-default" id="panel_section5">
														<div class="panel-heading">
															<span class="step-number">2</span>
															<a href="#step2" class="astep2 " data-parent="#wlt_stepswizard" data-toggle="collapse">Listing Details</a>
														</div>
														<div id="step2" class="stepblock5 panel-collapse collapse ">
															<div class="panel-body">
																<input type="hidden" name="custom[auction_type]" id="form_auction_type" value="1">
																<div class="form-group clearfix" id="form-row-rapper-price_current">
																	<label class="control-label col-md-4">Starting Price <span class="required">*</span></label>
																	<div class="field_wrapper col-md-8">
																		<div class="input-group col-md-4">
																			<input type="text" name="custom[price_current]" maxlength="255" id="form_price_current" class="form-control" tabindex="14" value="0">
																			<span class="input-group-addon">$</span>
																		</div>
																		<p class="description">This is the price the bidding will start at.</p>
																	</div>
																</div>
																<div class="form-group clearfix" id="form-row-rapper-price_reserve">
																	<label class="control-label col-md-4">Reserve Price <span class="required">*</span></label>
																	<div class="field_wrapper col-md-8">
																		<div class="input-group col-md-4">
																			<input type="text" name="custom[price_reserve]" maxlength="255" id="form_price_reserve" class="form-control" tabindex="15" value="0">
																			<span class="input-group-addon">$</span>
																		</div>
																		<p class="description">Here you can set the lowest price your willing to sell this item for.</p>
																	</div>
																</div>
																<div class="form-group clearfix" id="form-row-rapper-condition">
																	<label class="control-label col-md-4">Condition</label>
																	<div class="field_wrapper col-md-8">
																		<select name="custom[condition]" tabindex="16" id="form_condition" class="form-control">
																			<option value="1">New</option>
																			<option value="2">Used</option>
																		</select>
																	</div>
																</div>
																<script type="text/javascript"> function ValidateCoreRegFields(){  var cus14 = document.getElementById("form_price_current");
																	if(cus14.value == '-------'){
																	alert('Please complete all fields.');
																	cus14.style.border = 'thin solid green';
																	cus14.focus();
																	colAll(); jQuery('.stepblock5').collapse('show');
																	return false;
																	}
																	if(cus14.value == ''){
																	alert('Please complete all fields.');
																	cus14.style.border = 'thin solid green';
																	cus14.focus();
																	colAll(); jQuery('.stepblock5').collapse('show');
																	return false;
																	} var cus15 = document.getElementById("form_price_reserve");
																	if(cus15.value == '-------'){
																	alert('Please complete all fields.');
																	cus15.style.border = 'thin solid green';
																	cus15.focus();
																	colAll(); jQuery('.stepblock5').collapse('show');
																	return false;
																	}
																	if(cus15.value == ''){
																	alert('Please complete all fields.');
																	cus15.style.border = 'thin solid green';
																	cus15.focus();
																	colAll(); jQuery('.stepblock5').collapse('show');
																	return false;
																	} }
																</script> 
															</div>
														</div>
													</div>
													<!--- STEP 5 --->
													<!--- STEP 3 --->
													<div class="panel panel-default" id="panel_section3">
														<div class="panel-heading">
															<span class="step-number">3</span>
															<a href="#step3" class="astep3 " data-parent="#wlt_stepswizard" data-toggle="collapse">Listing Category</a>
														</div>
														<div id="step3" class="stepblock3 panel-collapse collapse ">
															<div class="panel-body">
																<div class="">
																	<input type="hidden" id="check_multi" value="1" name="check_multi"><script type="text/javascript"> 
																		function HasTooMany(div){  
																		
																		var countCats = 0;	
																		countCats = jQuery('.stepblock3 input[type="checkbox"]').filter(function() {		return !this.disabled && this.checked;		}).length;
																		
																		jQuery('#SelCatCount').html(countCats);
																		
																		if(countCats == 30){ 
																		
																		
																		}else if(countCats > 30){
																		
																		//
																		//alert('You have selected too many categories. Only the first 30 will be saved.');
																		 
																		jQuery('#SelCountPre').css( "background", "red" );
																		jQuery('#SelCountPre').css( "color", "white" );
																		 
																		// jQuery('.tcheckbox').attr('disabled', true);
																		
																		if(countCats > 60){
																			jQuery('.tcheckbox').prop( "checked", false );
																		}
																		 
																		jQuery(div).prop( "checked", false );
																		 
																		} else {
																		 jQuery('#SelCountPre').css( "background", "#fafafa" );
																		 jQuery('#SelCountPre').css( "color", "#444" );
																		}
																		 
																		} 
																		
																		jQuery(document).ready(function() {
																		
																		// SET CURRENT COUNT
																		HasTooMany();
																		
																		// COUNT SELECTED ON CHANGE
																		jQuery('.stepblock3 :checkbox').on('change', function (e) { HasTooMany(this); });	
																		
																		});
																		 
																	</script>
																	<!--<pre id="SelCountPre" style="background: rgb(250, 250, 250); color: rgb(68, 68, 68);">30 maximum categories. <span id="SelCatCount">0</span> selected.</pre>-->
																	<?php
																	if (isset($categorylist) && !empty($categorylist)) {
																		foreach ($categorylist as $row) {
																	?>
																	<li class="list-group-item">
																		<a href="<?php echo base_url('index.php/product/productlist/'.$row->cat_id); ?>" class="pull-right hidden-xs" target="_blank"><small> (<?php echo $row->Count_Product;  ?>) View All Listings</small> </a> 
																		<div class="tcbox"><input type="radio" class="tcheckbox" name="cat_id" value="<?php echo $row->cat_id; ?>"></div>
																		<span class="twrap"> <i class="fa fa-archive"></i> <strong><?php echo $row->cat_name; ?></strong>  </span>
																	</li>
																	<?php
																		}
																	}
																	?>
																</div>
															</div>
														</div>
													
													<!--- STEP 3 --->
													<!--- STEP 4 --->
													<div class="panel panel-default" id="panel_section4">
														<div class="panel-heading">
															<span class="step-number">4</span>
															<a href="#step4" class="astep4 " data-parent="#wlt_stepswizard" data-toggle="collapse">Listing Attachments</a>
														</div>
														<div id="step4" class="stepblock4 panel-collapse collapse ">
															<div class="panel-body">
																<div class="form-group clearfix" id="form-row-rapper-image">
																	<label class="control-label col-md-12"></label>
																	<div class="field_wrapper col-md-12">
																		<div class="row uploadiconbox">
																			<div class="col-md-3"><a href="javascript:void(0);" onclick="enableUploadForm('.jpg/.gif/.png/.jpeg');" class="c1">
																				<span><i class="fa fa-file-image-o"></i></span> add images</a> 
																			</div>
																		</div>
																		<hr>
																		You can select up to 1 media files.            
																		<script>			 
																			function enableUploadForm(vv){
																				jQuery('.allowed').html(vv);
																				jQuery('.uploadiconboxform').show();						
																			}
																			
																		</script>            
																		<div class="uploadiconboxform well">
																			<div class="allowed"></div>
																			<input type="file" name="fileupload" class="fileinput" id="fileupload" tabindex="38">
																			
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													</div>
													<!--- STEP 4 --->
													<div class="savebuttonarea">
														<hr>
														<div id="enhancementscopy" style="display:none;">
															<div></div>
														</div>
														<a class="btn btn-default pull-right hidden-xs" href="#">Cancel</a>
														<button class="btn btn-primary" type="submit" id="MainSaveBtn">Save listing</button>
														<div class="clearfix"></div>
														<hr>
													</div>
													<!-- END STEPS FORM DATA -->
												</div>
											</form>
										</div>
										<div class="panel panel-default" id="MyProductListingBlock" style="display:none;">
										</div>
										<div class="panel panel-default" id="MyPaymentHistory" style="display:none;">
											<table class="table table-bordered">
                                    <thead>
                                       <tr>
                                          <th>Payment Date </th>
                                          <th style="text-align:center;">Package</th>
														<th style="text-align:center;">Amount</th>
                                          <th style="text-align:center;">Status</th>
                                       </tr>
                                    </thead>
                                    <tbody>
													<?php
															 if (isset($userpaymentinfo) && !empty($userpaymentinfo)) {
                                             	   foreach ($userpaymentinfo as $row) {
													?>
                                       <tr>
                                          <td><?php echo date('d-m-Y h:i:s',strtotime($row->payment_date)); ?></td>
                                          <td style="text-align:center;"><?php echo $row->pname; ?></td>
														<td style="text-align:center;">Rs. <?php echo number_format($row->amount,2); ?></td>
                                          <td style="text-align:center;"><?php echo ($row->status==1?'Success':'Fail'); ?></td>
                                       </tr>
													<?php
																	}
															 }
															 else
															 {
													?>
													<tr>
                                          <td style="text-align:center;" colspan="4">
                                             Empty History
                                          </td>
                                       </tr>
													<?php
															 }
													?>
                                    </tbody>
                                 </table>
										</div>
                              <div class="panel panel-default" id="MyDetailsBlock" style="display:none;">
                                 <div class="panel-heading">My Account</div>
                                 <div class="panel-body">
												<script type="text/javascript"> function ValidateCoreRegFields(){
																var fname 	= document.getElementById("fname");
																var lname 	= document.getElementById("lname");

																var email1 	= document.getElementById("email");
													
																var phone = document.getElementById("phone");
													
																var country = document.getElementById("country");
																var state = document.getElementById("state");
																var city = document.getElementById("city");
																var paypalemail = document.getElementById("paypalemail");
																var flag=0;
													
																			
													
																if(fname.value == '')
													
																{
													
																	fname.focus();
													
																	fname.style.border = 'thin solid red';
													
																	flag=1;
													
																}
																if(lname.value == '')
													
																{
													
																	lname.focus();
													
																	lname.style.border = 'thin solid red';
													
																	flag=1;
													
																}
													
																if(email1.value == '')
													
																{
													
																	email1.focus();
													
																	email1.style.border = 'thin solid red';
													
																	flag=1;
													
																}
													
															
													
													
													
																if(phone.value == '')
													
																{
													
																	phone.focus();
													
																	phone.style.border = 'thin solid red';
													
																	flag=1;
													
																} 
													
																
													
																if(country.value == '0')
													
																{
													
																	country.focus();
													
																	country.style.border = 'thin solid red';
													
																	flag=1;
													
																}
																
																if(state.value == '0')
													
																{
													
																	state.focus();
													
																	state.style.border = 'thin solid red';
													
																	flag=1;
													
																}
																
																if(city.value == '0')
													
																{
													
																	city.focus();
													
																	city.style.border = 'thin solid red';
													
																	flag=1;
													
																}
																
																if(paypalemail.value == '')
													
																{
													
																	paypalemail.focus();
													
																	paypalemail.style.border = 'thin solid red';
													
																	flag=1;
													
																}
													
																
													      if(flag==1)
															{
																alert('Please complete all fields.');
																return false;
															}
															else
																return true;

														
														}
														function changeEventHandler(event){
															var fullPath = event.target.value;
															var filename = fullPath.replace(/^.*[\\\/]/, '');
															jQuery("#img_name").val(filename);
														}
														</script>
                                    <form action="<?php echo base_url('index.php/myaccount/update_profile'); ?>" method="post" onsubmit="return ValidateCoreRegFields();" id="myaccountdataform" name="myaccountdataform" enctype="multipart/form-data">
                                       <h4>My Account</h4>
                                       <hr>
                                       <div class="col-md-6">
                                          <div class="form-group">
                                             <label class="control-label"><i class="icon-user"></i> First Name</label>
                                             <div class="controls">
                                                <input type="text" name="fname" id="fname" class="form-control" value="<?php echo $userinfo[0]->FirstName; ?>">                         
                                             </div>
                                          </div>
														<div class="form-group">
                                             <label class="control-label"> Last Name</label>
                                             <div class="controls">
                                                <input type="text" name="lname" id="lname" class="form-control" value="<?php echo $userinfo[0]->LastName; ?>">                         
                                             </div>
                                          </div>
                                          <div class="form-group">
                                             <label class="control-label"><i class="icon-envelope"></i> Email</label>
                                             <div class="controls">
                                                <input type="text" name="email" id="email" class="form-control" value="<?php echo $userinfo[0]->Email; ?>">                         
                                             </div>
                                          </div>
                                         
                                          <div class="form-group">
                                             <label class="control-label"><i class="icon-bell"></i> Phone</label>
                                             <div class="controls">
                                                <input type="text" name="phone" id="phone" class="form-control" value="<?php echo $userinfo[0]->Contact; ?>">                        
                                             </div>
                                          </div>
                                          <div class="form-group">
                                             <label class="control-label"><i class="icon-user"></i> Zip Code</label>
                                             <div class="controls">
                                                <input type="text" name="zipcode" id="zipcode" class="form-control" value="<?php echo $userinfo[0]->zipcode; ?>">                         
                                             </div>
                                          </div>
                                       </div>
                                       <div class="col-md-6">
                                          <div class="form-group">
                                             <label class="control-label">Country</label>
                                             <div class="controls">
                                                <select name="country" id="country" class="form-control">
																	<option value="0" <?php if($userinfo[0]->country_id==0){ echo 'selected'; } ?>>--Select Country--</option>
                                                   <?php
																		if (isset($countrylist) && !empty($countrylist)) {
																				foreach ($countrylist as $row) {
																	?>
                                                   <option value="<?php echo $row->country_id; ?>" <?php if($row->country_id==$userinfo[0]->country_id){ echo 'selected'; } ?>><?php echo $row->country_name; ?></option>
																	<?php
																				}
																		}
																	?>
                                                </select>
                                             </div>
                                          </div>
                                          <div class="form-group">
                                             <label class="control-label">State</label>
                                             <div class="controls">
                                                <select name="state" id="state" class="form-control">
																	<option value="0" <?php if($userinfo[0]->state_id==0){ echo 'selected'; } ?>>--Select State--</option>
                                                   <?php
																		if (isset($statelist) && !empty($statelist)) {
																				foreach ($statelist as $row) {
																	?>
                                                   <option value="<?php echo $row->state_id; ?>" <?php if($row->state_id==$userinfo[0]->state_id){ echo 'selected'; } ?>><?php echo $row->state_name; ?></option>
																	<?php
																				}
																		}
																	?>
                                                </select>
                                             </div>
                                          </div>
														<div class="form-group">
                                             <label class="control-label">City</label>
                                             <div class="controls">
                                                <select name="city" id="city" class="form-control">
																	<option value="0" <?php if($userinfo[0]->city_id==0){ echo 'selected'; } ?>>--Select City--</option>
                                                   <?php
																		if (isset($citylist) && !empty($citylist)) {
																				foreach ($citylist as $row) {
																	?>
                                                   <option value="<?php echo $row->city_id; ?>" <?php if($row->city_id==$userinfo[0]->city_id){ echo 'selected'; } ?>><?php echo $row->city_name; ?></option>
																	<?php
																				}
																		}
																	?>
                                                </select>
                                             </div>
                                          </div>
														<div class="form-group">
                                             <label class="control-label"><i class="icon-user"></i> Gender</label>
                                             <div class="controls">
                                                <input type="radio" name="gender" value="M" <?php if($userinfo[0]->Gender=='M'){ echo 'checked'; } ?>> Male  <input type="radio" name="gender" value="F" <?php if($userinfo[0]->Gender=='F'){ echo 'checked'; } ?>> Female                       
                                             </div>
                                          </div>
														<div class="form-group">
                                             <label class="control-label"><i class="icon-user"></i> PayPal Email Id</label>
                                             <div class="controls">
                                                <input type="text" name="paypalemail" id="paypalemail" class="form-control" value="<?php echo $userinfo[0]->paypal_email; ?>">                         
                                             </div>
                                          </div>
                                       </div>
                                       <div class="col-md-12">
                                          <label class="control-label"><i class="icon-comment"></i> Address</label>
                                          <textarea style="height:60px;" class="form-control" name="address" id="address"><?php echo $userinfo[0]->Address; ?></textarea>                     
                                       </div>
                                       <div class="clearfix"></div>
                                       <hr>
                                       <!--<h4>Social Media</h4>
                                       <hr>
                                       <div class="col-md-3">
                                          <label class="control-label"><i class="icon-comment"></i> Facebook</label>
                                          <input type="text" name="facebook" class="form-control" value="">                   
                                       </div>
                                       <div class="col-md-3">
                                          <label class="control-label"><i class="icon-comment"></i> Twitter</label>
                                          <input type="text" name="twitter" class="form-control" value="">                   
                                       </div>
                                       <div class="col-md-3">
                                          <label class="control-label"><i class="icon-comment"></i> LinkedIn</label>
                                          <input type="text" name="linkedin" class="form-control" value="">                   
                                       </div>
                                       <div class="col-md-3">
                                          <label class="control-label"><i class="icon-comment"></i> Skype</label>
                                          <input type="text" name="skype" class="form-control" value="">                   
                                       </div>
                                       <div class="clearfix"></div>
                                       <hr>
                                       <h4>Profile Background</h4>
                                       <hr>
                                       <div id="bgp">
                                          <div class="col-md-3">
                                             <div class="thumbnail" onclick="jQuery('#pbg').val('1'); ChangeB(); jQuery(this).css('border-color','rgb(165, 194, 165)').css('background','rgb(246, 255, 246)'); " style="cursor:pointer; ">
                                                <img src="http://at1.wlthemes.com/wp-content/themes/AT/framework//img/profile/1.jpg" class="img-responsive">
                                             </div>
                                          </div>
                                          <div class="col-md-3">
                                             <div class="thumbnail" onclick="jQuery('#pbg').val('2'); ChangeB(); jQuery(this).css('border-color','rgb(165, 194, 165)').css('background','rgb(246, 255, 246)'); " style="cursor:pointer; border:1px solid red">
                                                <img src="http://at1.wlthemes.com/wp-content/themes/AT/framework//img/profile/2.jpg" class="img-responsive">
                                             </div>
                                          </div>
                                          <div class="col-md-3">
                                             <div class="thumbnail" onclick="jQuery('#pbg').val('3'); ChangeB(); jQuery(this).css('border-color','rgb(165, 194, 165)').css('background','rgb(246, 255, 246)'); " style="cursor:pointer; ">
                                                <img src="http://at1.wlthemes.com/wp-content/themes/AT/framework//img/profile/3.jpg" class="img-responsive">
                                             </div>
                                          </div>
                                          <div class="col-md-3">
                                             <div class="thumbnail" onclick="jQuery('#pbg').val('4'); ChangeB(); jQuery(this).css('border-color','rgb(165, 194, 165)').css('background','rgb(246, 255, 246)'); " style="cursor:pointer; ">
                                                <img src="http://at1.wlthemes.com/wp-content/themes/AT/framework//img/profile/4.jpg" class="img-responsive">
                                             </div>
                                          </div>
                                          <div class="col-md-3">
                                             <div class="thumbnail" onclick="jQuery('#pbg').val('5'); ChangeB(); jQuery(this).css('border-color','rgb(165, 194, 165)').css('background','rgb(246, 255, 246)'); " style="cursor:pointer; ">
                                                <img src="http://at1.wlthemes.com/wp-content/themes/AT/framework//img/profile/5.jpg" class="img-responsive">
                                             </div>
                                          </div>
                                          <div class="col-md-3">
                                             <div class="thumbnail" onclick="jQuery('#pbg').val('6'); ChangeB(); jQuery(this).css('border-color','rgb(165, 194, 165)').css('background','rgb(246, 255, 246)'); " style="cursor:pointer; ">
                                                <img src="http://at1.wlthemes.com/wp-content/themes/AT/framework//img/profile/6.jpg" class="img-responsive">
                                             </div>
                                          </div>
                                          <div class="col-md-3">
                                             <div class="thumbnail" onclick="jQuery('#pbg').val('7'); ChangeB(); jQuery(this).css('border-color','rgb(165, 194, 165)').css('background','rgb(246, 255, 246)'); " style="cursor:pointer; ">
                                                <img src="http://at1.wlthemes.com/wp-content/themes/AT/framework//img/profile/7.jpg" class="img-responsive">
                                             </div>
                                          </div>
                                          <div class="col-md-3">
                                             <div class="thumbnail" onclick="jQuery('#pbg').val('8'); ChangeB(); jQuery(this).css('border-color','rgb(165, 194, 165)').css('background','rgb(246, 255, 246)'); " style="cursor:pointer; ">
                                                <img src="http://at1.wlthemes.com/wp-content/themes/AT/framework//img/profile/8.jpg" class="img-responsive">
                                             </div>
                                          </div>
                                       </div>
                                       <input type="hidden" id="pbg" name="pbg" value="2">
                                       <script>		
                                          function ChangeB(){		
                                          	jQuery( "#bgp .thumbnail" ).each(function() {
                                          		jQuery(this).css('border-color','#ddd').css('background','#fff').css('border-width','5px');
                                          		
                                          	});
                                          	
                                          }
                                       </script>
                                       <div class="clearfix"></div>
                                       <hr>-->
													<h4>Display Photo</h4>
                                       <hr>
                                       <div class="col-md-2">
                                          <div class="well text-center" style="width: 100px;height: 100px;">       
                                             <img src="<?php echo base_url('assets/uploads/'.($userinfo[0]->Photo==''?'question-mark.png':$userinfo[0]->Photo)); ?>" class="avatar img-responsive" alt="image" width="100" height="100">        
                                          </div>
                                       </div>
                                       <div class="col-md-10">
                                          <input type="file" name="userphoto" id="wlt_userphoto" >
														<input type="hidden" name="photoname" id="photoname" value="<?php echo $userinfo[0]->Photo; ?>" >
													</div>
                                       <div class="clearfix"></div>
                                       <div class="clearfix"></div>
                                       <hr>
                                       <div class="text-center">
                                          <input class="btn btn-primary btn-lg" type="submit" value="Save Changes" />
                                       </div>
                                    </form>
                                 </div>
                              </div>
										<div class="panel panel-default" id="MyUserBlock" style="display:none;">
                                 <div class="panel-heading">My Account</div>
                                 <div class="panel-body">
												
                                    
                                       <h4>My Account</h4>
                                       <hr>
                                       <div class="col-md-6">
                                          <div class="form-group">
                                             <label class="control-label"><i class="icon-user"></i> First Name : </label> <?php echo $userinfo[0]->FirstName; ?> 
                                          </div>
														<div class="form-group">
                                             <label class="control-label"> Last Name : </label> <?php echo $userinfo[0]->LastName; ?> 
                                          </div>
                                          <div class="form-group">
                                             <label class="control-label"><i class="icon-envelope"></i> Email : </label> <?php echo $userinfo[0]->Email; ?> 
                                          </div>
                                         
                                          <div class="form-group">
                                             <label class="control-label"><i class="icon-bell"></i> Phone : </label> <?php echo $userinfo[0]->Contact; ?>
                                           </div>
                                          <div class="form-group">
                                             <label class="control-label"><i class="icon-bell"></i> Zip Code : </label> <?php echo $userinfo[0]->zipcode; ?>
                                           </div>
                                       </div>
                                       <div class="col-md-6">
                                          <div class="form-group">
                                             <label class="control-label">Country : </label> <?php if($userinfo[0]->country_id==0){ echo ''; } 
																		if (isset($countrylist) && !empty($countrylist)) {
																				foreach ($countrylist as $row) {
																	 if($row->country_id==$userinfo[0]->country_id){ echo $row->country_name; } 
																				}
																		}
																	?>
                                             
                                          </div>
                                          <div class="form-group">
                                             <label class="control-label">State : </label> <?php if($userinfo[0]->state_id==0){ echo ''; } 
																		if (isset($statelist) && !empty($statelist)) {
																				foreach ($statelist as $row) {
																	 if($row->state_id==$userinfo[0]->state_id){ echo $row->state_name; } 
																				}
																		}
																	?>
                                            
                                          </div>
														<div class="form-group">
                                             <label class="control-label">City : </label> <?php if($userinfo[0]->city_id==0){ echo ''; } 
																		if (isset($citylist) && !empty($citylist)) {
																				foreach ($citylist as $row) {
																	 if($row->city_id==$userinfo[0]->city_id){ echo $row->city_name; } 
																				}
																		}
																	?>
                                            
                                          </div>
														<div class="form-group">
                                             <label class="control-label"><i class="icon-user"></i> Gender : </label> <?php if($userinfo[0]->Gender=='M'){ echo 'Male'; }else{ echo 'Female'; } ?> 
                                             
                                          </div>
														<div class="form-group">
                                             <label class="control-label"><i class="icon-envelope"></i> PayPal Email Id : </label> <?php echo $userinfo[0]->paypal_email; ?>
                                           </div>
                                       </div>
                                       <div class="col-md-12">
                                          <label class="control-label"><i class="icon-comment"></i> Address : </label> <?php echo $userinfo[0]->Address; ?>
                                                               
                                       </div>
                                       <div class="clearfix"></div>
                                       <hr>
                                       
													<h4>Display Photo</h4>
                                       <hr>
                                       <div class="col-md-2">
                                          <div class="well text-center">       
                                             <img src="<?php echo base_url('assets/uploads/'.($userinfo[0]->Photo==''?'question-mark.png':$userinfo[0]->Photo)); ?>" class="avatar img-responsive" alt="image">        
                                          </div>
                                       </div>
                                       
                                       <div class="clearfix"></div>
                                       <div class="clearfix"></div>
                                       <hr>
                                       
                                 </div>
                              </div>
                              <!--
																														<div id="MyAccountBlock">
                                 <div class="clearfix"></div>
                              </div>
                              <div class="panel panel-default" id="MySubscriptionBlock" style="display:none;">
                                 <div class="panel-heading">My Subscriptions</div>
                                 <div class="panel-body">
                                    <form method="post">
                                       <input type="hidden" name="action" value="subscrption"> 
                                       <p>Select categories which you would like to subscribe to below. Whenever a new listing is created within one of your selected categories we will send you an email.</p>
                                       <select class="form-control" name="selsubs[]" multiple="multiple" style="height:200px;">
                                          <option value="2560">Example Category 1</option>
                                          <option value="2561"> -- Sub Cat 1</option>
                                          <option value="2562"> -- Sub Cat 2</option>
                                          <option value="2563"> -- Sub Cat 3</option>
                                          <option value="2596">Example Category 10</option>
                                          <option value="2597"> -- Sub Cat 1</option>
                                          <option value="2598"> -- Sub Cat 2</option>
                                          <option value="2599"> -- Sub Cat 3</option>
                                          <option value="2600">Example Category 11</option>
                                          <option value="2601"> -- Sub Cat 1</option>
                                          <option value="2602"> -- Sub Cat 2</option>
                                          <option value="2603"> -- Sub Cat 3</option>
                                          <option value="2604">Example Category 12</option>
                                          <option value="2605"> -- Sub Cat 1</option>
                                          <option value="2606"> -- Sub Cat 2</option>
                                          <option value="2607"> -- Sub Cat 3</option>
                                          <option value="2564">Example Category 2</option>
                                          <option value="2565"> -- Sub Cat 1</option>
                                          <option value="2566"> -- Sub Cat 2</option>
                                          <option value="2567"> -- Sub Cat 3</option>
                                          <option value="2568">Example Category 3</option>
                                          <option value="2569"> -- Sub Cat 1</option>
                                          <option value="2570"> -- Sub Cat 2</option>
                                          <option value="2571"> -- Sub Cat 3</option>
                                          <option value="2572">Example Category 4</option>
                                          <option value="2573"> -- Sub Cat 1</option>
                                          <option value="2574"> -- Sub Cat 2</option>
                                          <option value="2575"> -- Sub Cat 3</option>
                                          <option value="2576">Example Category 5</option>
                                          <option value="2577"> -- Sub Cat 1</option>
                                          <option value="2578"> -- Sub Cat 2</option>
                                          <option value="2579"> -- Sub Cat 3</option>
                                          <option value="2580">Example Category 6</option>
                                          <option value="2581"> -- Sub Cat 1</option>
                                          <option value="2582"> -- Sub Cat 2</option>
                                          <option value="2583"> -- Sub Cat 3</option>
                                          <option value="2584">Example Category 7</option>
                                          <option value="2585"> -- Sub Cat 1</option>
                                          <option value="2586"> -- Sub Cat 2</option>
                                          <option value="2587"> -- Sub Cat 3</option>
                                          <option value="2588">Example Category 8</option>
                                          <option value="2589"> -- Sub Cat 1</option>
                                          <option value="2590"> -- Sub Cat 2</option>
                                          <option value="2591"> -- Sub Cat 3</option>
                                          <option value="2592">Example Category 9</option>
                                          <option value="2593"> -- Sub Cat 1</option>
                                          <option value="2594"> -- Sub Cat 2</option>
                                          <option value="2595"> -- Sub Cat 3</option>
                                       </select>
                                       <hr>
                                       <div class="text-center">
                                          <button class="btn btn-primary btn-lg" type="submit">Save Changes</button>
                                       </div>
                                    </form>
                                 </div>
                              </div>
																														<div class="panel panel-default" id="MyMsgBlock" style="">
                                 <div class="panel-heading">My Messages</div>
                                 	 
                                            <div class="panel-body"> 
                                             
                                              <div id="msgAjax"></div> 
                                              <form id="sendmsgform" name="sendmsgform" method="post" action="" class="alert" style="display:none;">
                                              <input type="hidden" name="action" value="sendmsg">
                                              
                                              <a href="#top" class="label label-warning" style="float:right;margin-top:30px;" onclick="jQuery('#sendmsgform').hide();">Hide Form</a>
                                             
                                              <h3>Send Message</h3>
                                             
                                              <p>Fill out the fields below to send a private message to one of our members.</p>
                                              
                                              <hr>
                                              
                                        	 <div class="input-group">
                                                  <span class="input-group-addon" id="ajaxMsgUser">@</span>
                                                  <input class="form-control" name="username" id="usernamefield" type="text" placeholder="Member Username" value="">
                                              </div>
                                              <script type="application/javascript"> 
                                 				jQuery('#usernamefield').change(function() { WLTValidateUsername('at1.wlthemes.com', this.value, 'ajaxMsgUser')  } );					
                                 		  </script>
                                 		  <hr>
                                              
                                              <div class="form-group">
                                 		  <label>Subject</label>
                                              <input type="text" name="subject" id="subjectfield" value="" class="form-control">
                                              </div>
                                              
                                              <div class="form-group">
                                              <label>Message</label>
                                              <textarea id="sendMsgContent" rows="3" class="form-control" style="height:280px;" name="message"></textarea>               
                                              </div>
                                              
                                              <button class="btn btn-warning">Send Message</button>
                                              </form>
                                                
                                                
                                              <form method="post" action="" id="messageDel" name="messageDel">
                                              <input type="hidden" name="action" value="deletemsg">
                                              <input type="hidden" name="messageID" id="messageID" value="">
                                              </form>
                                              
                                              <form method="post" action="">
                                              <input type="hidden" name="action" value="deletemsgs">
                                                <table class="table table-bordered table-striped">
                                         
                                                <thead>
                                                  <tr>
                                                  <th></th>
                                                    <th style="width:80px;">Status</th>
                                                    <th style="min-width:380px;">Subject</th>
                                                    <th class="text-center">Date</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                 	<td><input class="checkbox1" type="checkbox" name="check[]" value="5892"></td>
                                 	
                                                    <td style="text-align:center"><span class="label label-default">Read</span></td>
                                                    <td>
                                 				<a onclick="WLTChangeMsgStatus('at1.wlthemes.com', '5892', 'msgAjax');" href="#my5892" id="#my5892_link" data-toggle="modal" style="text-decoration:underline;">RE:ddfsfsaf</a> 
                                 				<a href="javascript:void(0);" onclick="document.getElementById('messageID').value=5892;messageDel.submit();" style="font-size:11px; float:right;"><i class="glyphicon glyphicon-trash"></i> Delete</a><div id="my5892" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                 		<div class="modal-dialog"><div class="modal-content">
                                 			  <div class="modal-header">
                                 				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                 				<h3><b>RE:ddfsfsaf</b></h3>
                                 			  </div>
                                 			  <div class="modal-body">
                                 			  <p style="font-size:11px;">demo says;</p>
                                 			  <p></p><p>------------- December 14, 2017 12:31 pm ------------------<br>
                                 sdfasdfasdfasf</p>
                                 <p></p>
                                 			  <textarea id="msg_content_5892" style="display:none;">
                                 ------------- December 14, 2017 12:31 pm ------------------
                                 
                                 ------------- December 14, 2017 12:31 pm ------------------
                                 sdfasdfasdfasf</textarea>
                                 			  </div>
                                 			  <div class="modal-footer"><a class="btn btn-primary" data-dismiss="modal" aria-hidden="true" style="float:left;" onclick="jQuery('#sendmsgform').show();jQuery('#usernamefield').val('demo');jQuery('#sendMsgContent').val(jQuery('#msg_content_5892').text());jQuery('#subjectfield').val('RE:RE:ddfsfsaf');">Reply</a><a class="btn btn-default" data-dismiss="modal" aria-hidden="true">Back</a>
                                 			  </div>
                                 			</div>	</div></div>				
                                 			</td>
                                                    <td style="text-align:center"><small>December 14, 2017 12:31 pm</small></td>
                                                  </tr><tr>
                                 	<td><input class="checkbox1" type="checkbox" name="check[]" value="5891"></td>
                                 	
                                                    <td style="text-align:center"><span class="label label-default">Read</span></td>
                                                    <td>
                                 				<a onclick="WLTChangeMsgStatus('at1.wlthemes.com', '5891', 'msgAjax');" href="#my5891" id="#my5891_link" data-toggle="modal" style="text-decoration:underline;">ddfsfsaf</a> 
                                 				<a href="javascript:void(0);" onclick="document.getElementById('messageID').value=5891;messageDel.submit();" style="font-size:11px; float:right;"><i class="glyphicon glyphicon-trash"></i> Delete</a><div id="my5891" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                 		<div class="modal-dialog"><div class="modal-content">
                                 			  <div class="modal-header">
                                 				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                 				<h3><b>ddfsfsaf</b></h3>
                                 			  </div>
                                 			  <div class="modal-body">
                                 			  <p style="font-size:11px;">demo says;</p>
                                 			  <p></p><p>sdfasdfasdfasf</p>
                                 <p></p>
                                 			  <textarea id="msg_content_5891" style="display:none;">
                                 ------------- December 14, 2017 12:31 pm ------------------
                                 sdfasdfasdfasf</textarea>
                                 			  </div>
                                 			  <div class="modal-footer"><a class="btn btn-primary" data-dismiss="modal" aria-hidden="true" style="float:left;" onclick="jQuery('#sendmsgform').show();jQuery('#usernamefield').val('demo');jQuery('#sendMsgContent').val(jQuery('#msg_content_5891').text());jQuery('#subjectfield').val('RE:ddfsfsaf');">Reply</a><a class="btn btn-default" data-dismiss="modal" aria-hidden="true">Back</a>
                                 			  </div>
                                 			</div>	</div></div>				
                                 			</td>
                                                    <td style="text-align:center"><small>December 14, 2017 12:31 pm</small></td>
                                                  </tr>                  
                                                </tbody>
                                              </table>
                                              <div class="selectionbox">
                                            
                                              <button type="submit" class="pull-right">Delete Selected</button>
                                              <input type="checkbox" id="selecctall">  Select All              
                                              </div>
                                              
                                              </form>
                                              
                                              <script>
                                 		  jQuery(document).ready(function() {
                                 				jQuery('#selecctall').click(function(event) {  //on click 
                                 					if(this.checked) { // check select status
                                 						jQuery('.checkbox1').each(function() { //loop through each checkbox
                                 							this.checked = true;  //select all checkboxes with class "checkbox1"               
                                 						});
                                 					}else{
                                 						jQuery('.checkbox1').each(function() { //loop through each checkbox
                                 							this.checked = false; //deselect all checkboxes with class "checkbox1"                       
                                 						});         
                                 					}
                                 				});
                                 				
                                 			});
                                 		  </script>
                                              
                                            <hr>              
                                              
                                                       
                                            	 
                                 	<div class="text-center">
                                        	 <a href="#top" class="btn btn-primary btn-lg" onclick="jQuery('#sendmsgform').show();">Compose Message</a> 
                                        </div>
                                            
                                 </div> 
                                        
                                 </div> --> 		
                              <div class="panel panel-default" id="MyFeedback" style="display:none;">
                                 <div class="panel-heading">Feedback</div>
                                 <div class="panel-body" id="AuthorSingleFeedback">
                                    <ul class="nav nav-tabs feedbacktabs" role="tablist">
                                       <li class="active"><a href="#fb3" role="tab" data-toggle="tab">How it works.</a></li>
                                       <li>
                                          <a href="#fb0" role="tab" data-toggle="tab">User Feedback (0)</a>
                                       </li>
                                       <li><a href="#fb1" role="tab" data-toggle="tab">My Feedback (5)</a></li>
                                    </ul>
                                    <div class="tab-content">
                                       <div role="tabpanel" class="tab-pane active" id="fb3">
                                          <div class="text-center">
                                             <i class="glyphicon glyphicon-star" style="font-size:200px;margin-top:40px; margin-bottom:20px;"></i>
                                             <div class="clearfix">
                                                <p>Leave feedback on your experience with a user and their listing and help us build a smarter community.</p>
                                                <p>The feedback you leave will help us create a trust factor and overall rating for a user.</p>
                                                <p>Please try to resolve issues with the user before leaving feedback and avoid using rude and abusive comments.</p>
                                             </div>
                                          </div>
                                       </div>
                                       <div role="tabpanel" class="tab-pane " id="fb0">
                                          <h4 class="text-center">No Feedback Received</h4>
                                       </div>
                                       <div role="tabpanel" class="tab-pane " id="fb1">
                                          <ul class="list-group">
                                             <li class="list-group-item">
                                                <div class="row">
                                                   <div class="col-xs-3 col-md-3">
                                                      <small><a href="http://at1.wlthemes.com/listing/test-monkey/">Item 5639</a></small>
                                                      <script type="text/javascript">jQuery(document).ready(function(){ 
                                                         jQuery('#wlt_feedbackstar_5900').raty({
                                                         readOnly:  true,
                                                         path: 'http://at1.wlthemes.com/wp-content/themes/AT/framework/img/rating/',
                                                         score: 5,
                                                         size: 24,
                                                         
                                                          
                                                         }); });
                                                                 
                                                      </script>
                                                      <div id="wlt_feedbackstar_5900" class="wlt_starrating" style="margin-top:10px;" title="very good"><span class="fa fa-star size24 readonlytrue" data-score="1" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="2" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="3" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="4" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="5" title="very good"></span><input type="hidden" name="score" value="5" readonly="readonly"></div>
                                                   </div>
                                                   <div class="col-xs-9 col-md-9">
                                                      <a href="http://at1.wlthemes.com/author/demo/" class="hidden-xs pull-right"><img src="http://at1.wlthemes.com/wp-content/uploads/sites/37/2017/12/1.jpg" class="avatar img-circle img-responsive" alt="image"></a>             
                                                      <h4>Feedback testing</h4>
                                                      <div class="article5900">Feedback testing comment</div>
                                                   </div>
                                                </div>
                                             </li>
                                             <li class="list-group-item">
                                                <div class="row">
                                                   <div class="col-xs-3 col-md-3">
                                                      <small><a href="http://at1.wlthemes.com/listing/example-item-9/">Item 5518</a></small>
                                                      <script type="text/javascript">jQuery(document).ready(function(){ 
                                                         jQuery('#wlt_feedbackstar_5889').raty({
                                                         readOnly:  true,
                                                         path: 'http://at1.wlthemes.com/wp-content/themes/AT/framework/img/rating/',
                                                         score: 5,
                                                         size: 24,
                                                         
                                                          
                                                         }); });
                                                                 
                                                      </script>
                                                      <div id="wlt_feedbackstar_5889" class="wlt_starrating" style="margin-top:10px;" title="very good"><span class="fa fa-star size24 readonlytrue" data-score="1" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="2" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="3" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="4" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="5" title="very good"></span><input type="hidden" name="score" value="5" readonly="readonly"></div>
                                                   </div>
                                                   <div class="col-xs-9 col-md-9">
                                                      <a href="http://at1.wlthemes.com/author/demo/" class="hidden-xs pull-right"><img src="http://at1.wlthemes.com/wp-content/uploads/sites/37/2017/12/1.jpg" class="avatar img-circle img-responsive" alt="image"></a>             
                                                      <h4>test</h4>
                                                      <div class="article5889">hello this is test mail</div>
                                                   </div>
                                                </div>
                                             </li>
                                             <li class="list-group-item">
                                                <div class="row">
                                                   <div class="col-xs-3 col-md-3">
                                                      <small><a href="http://at1.wlthemes.com/listing/example-item-11/">Item 5520</a></small>
                                                      <script type="text/javascript">jQuery(document).ready(function(){ 
                                                         jQuery('#wlt_feedbackstar_5712').raty({
                                                         readOnly:  true,
                                                         path: 'http://at1.wlthemes.com/wp-content/themes/AT/framework/img/rating/',
                                                         score: 5,
                                                         size: 24,
                                                         
                                                          
                                                         }); });
                                                                 
                                                      </script>
                                                      <div id="wlt_feedbackstar_5712" class="wlt_starrating" style="margin-top:10px;" title="very good"><span class="fa fa-star size24 readonlytrue" data-score="1" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="2" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="3" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="4" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="5" title="very good"></span><input type="hidden" name="score" value="5" readonly="readonly"></div>
                                                   </div>
                                                   <div class="col-xs-9 col-md-9">
                                                      <a href="http://at1.wlthemes.com/author/demo/" class="hidden-xs pull-right"><img src="http://at1.wlthemes.com/wp-content/uploads/sites/37/2017/12/1.jpg" class="avatar img-circle img-responsive" alt="image"></a>             
                                                      <h4>Feedback Test</h4>
                                                      <div class="article5712">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue. Pellentesque nec lacus elit.</div>
                                                      <script>
                                                         jQuery(document).ready(function(){
                                                             jQuery('.article5712').shorten({
                                                                 moreText: 'read more',
                                                                 lessText: 'read less',
                                                                 showChars: '280',
                                                             });
                                                         });
                                                      </script>
                                                   </div>
                                                </div>
                                             </li>
                                             <li class="list-group-item">
                                                <div class="row">
                                                   <div class="col-xs-3 col-md-3">
                                                      <small><a href="http://at1.wlthemes.com/listing/mobilni/">Item 5532</a></small>
                                                      <script type="text/javascript">jQuery(document).ready(function(){ 
                                                         jQuery('#wlt_feedbackstar_5637').raty({
                                                         readOnly:  true,
                                                         path: 'http://at1.wlthemes.com/wp-content/themes/AT/framework/img/rating/',
                                                         score: 5,
                                                         size: 24,
                                                         
                                                          
                                                         }); });
                                                                 
                                                      </script>
                                                      <div id="wlt_feedbackstar_5637" class="wlt_starrating" style="margin-top:10px;" title="very good"><span class="fa fa-star size24 readonlytrue" data-score="1" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="2" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="3" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="4" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="5" title="very good"></span><input type="hidden" name="score" value="5" readonly="readonly"></div>
                                                   </div>
                                                   <div class="col-xs-9 col-md-9">
                                                      <a href="http://at1.wlthemes.com/author/demo/" class="hidden-xs pull-right"><img src="http://at1.wlthemes.com/wp-content/uploads/sites/37/2017/12/1.jpg" class="avatar img-circle img-responsive" alt="image"></a>             
                                                      <h4>commentaires test</h4>
                                                      <div class="article5637">commentaires test  commentaires test  commentaires test  commentaires test  commentaires test  </div>
                                                   </div>
                                                </div>
                                             </li>
                                             <li class="list-group-item">
                                                <div class="row">
                                                   <div class="col-xs-3 col-md-3">
                                                      <small><a href="">Item 5335</a></small>
                                                      <script type="text/javascript">jQuery(document).ready(function(){ 
                                                         jQuery('#wlt_feedbackstar_5452').raty({
                                                         readOnly:  true,
                                                         path: 'http://at1.wlthemes.com/wp-content/themes/AT/framework/img/rating/',
                                                         score: 5,
                                                         size: 24,
                                                         
                                                          
                                                         }); });
                                                                 
                                                      </script>
                                                      <div id="wlt_feedbackstar_5452" class="wlt_starrating" style="margin-top:10px;" title="very good"><span class="fa fa-star size24 readonlytrue" data-score="1" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="2" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="3" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="4" title="very good"></span><span class="fa fa-star size24 readonlytrue" data-score="5" title="very good"></span><input type="hidden" name="score" value="5" readonly="readonly"></div>
                                                   </div>
                                                   <div class="col-xs-9 col-md-9">
                                                      <a href="http://at1.wlthemes.com/author/demo/" class="hidden-xs pull-right"><img src="http://at1.wlthemes.com/wp-content/uploads/sites/37/2017/12/1.jpg" class="avatar img-circle img-responsive" alt="image"></a>             
                                                      <h4>bamba</h4>
                                                      <div class="article5452">hello</div>
                                                   </div>
                                                </div>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </article>
                     </div>
                     <div class="clearfix"></div>
                     <!-- memberships form -->
                     <!--<form method="post" name="MEMBERSHIPFORM" action="#" id="MEMBERSHIPFORM" style="margin:0px;padding:0px;">
                        <input type="hidden" name="membershipID" id="membershipID" value="-1">
                        <input type="hidden" name="showpaymentform" value="1">
                     </form>-->
							<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" name="MEMBERSHIPFORM" id="MEMBERSHIPFORM">
								<input type="hidden" name="cmd" id="cmd" value="_xclick">
								<input type="hidden" name="business" id="business" value="minesh138-facilitator@hotmail.com">
								<input type="hidden" name="item_name" id="item_name" value="">
								<input type="hidden" name="item_number" id="item_number" value="">
								<input type="hidden" name="amount" id="amount" value="">
								<input type="hidden" name="tax" id="tax" value="0">
								<input type="hidden" name="quantity" id="quantity" value="1">
								<input type="hidden" name="no_note" id="no_note" value="1">
								<input type="hidden" name="currency_code" id="currency_code" value="USD">
								<input type='hidden' name='cancel_return' id='cancel_return' value='<?php echo base_url('index.php/payment/cancel'); ?>'>
								<input type='hidden' name='return' id='return' value=''>
							 
								<!-- Enable override of buyers's address stored with PayPal . -->
								<input type="hidden" name="address_override" id="address_override" value="1">
								<!-- Set variables that override the address stored with PayPal. -->
								<input type="hidden" name="first_name" id="first_name" value="<?php echo $userinfo[0]->FirstName; ?>">
								<input type="hidden" name="last_name" id="last_name" value="<?php echo $userinfo[0]->LastName; ?>">
								<input type="hidden" name="address1" id="address1" value="<?php echo $userinfo[0]->Address; ?>">
								<input type="hidden" name="city" id="city" value="<?php echo $userinfo[0]->city_name; ?>">
								<input type="hidden" name="state" id="state" value="<?php echo $userinfo[0]->state_code; ?>">
								<input type="hidden" name="zip" id="zip" value="<?php echo $userinfo[0]->zipcode; ?>">
								<input type="hidden" name="country" id="country" value="<?php echo $userinfo[0]->country_code;  ?>">
								<!--<input type="image" name="submit"
								  src="<?php //echo base_url('assets/images/btn_buynow_LG.gif'); ?>"
								  alt="PayPal - The safer, easier way to pay online">-->
							</form>
                     <!--jQuery('#MyMsgBlock').show(); jQuery('#MyFeedback').hide(); -->
                     <script>jQuery(document).ready(function(){ jQuery('#MyDetailsBlock').hide(); jQuery('#MyDashboardBlock').show();jQuery('#MyUserBlock').hide();jQuery('#MyProductBlock').hide();jQuery('#MyProductListingBlock').hide();jQuery('#MyPaymentHistory').hide();  });</script>
                  </div>
               </article>
            </div>
         </div>
      </div>
   </div>
</div>