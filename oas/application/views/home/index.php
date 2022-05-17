<?php
$sessuser=$this->session->userdata('loginname');
?>
<div id="core_padding">
                  <div id="core_padding_inner">
                     <div class=" container widecontainer core_section_top_container">
                        <div class="row core_section_top_row wlt_main_2colsright">
                           <div id="core_inner_wrap" class="clearfix">
                              <article class="col-md-12" id="core_middle_column">
                                 <div class="core_middle_wrap">
                                    <div id="core_ajax_callback"></div>
                                    <div class="row" style="margin-top:15px;">
                                       <div class="col-md-3">
                                          <div class="custom-collapse clearfix">
                                             <button class="collapse-toggle visible-xs showcollapse btn" type="button" data-toggle="collapse" data-parent="custom-collapse" data-target="#wlt_shortcode_dcats">
                                             <span>View All Categories</span>
                                             </button>
                                             <div class=" collapse" id="wlt_shortcode_dcats">
                                                <ul class="list-group" >
		            <?php
			
		            if (isset($categorylist) && !empty($categorylist)) {
			foreach ($categorylist as $row) {
		            ?>
                                                   <li class="list-group-item dropdown-toggle"><i class='fa fa-archive'></i>  <a href="<?php echo base_url('index.php/product/productlist/'.$row->cat_id); ?>"><?php echo $row->cat_name; ?></a>  </li>
		            <?php
			}
		            }
		            ?>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="col-md-9 hidden-sm">
                                          <div class="jumbostyle1 cols3" >
                                             <div class="jumbotron">
                                                <div class="inner">
                                                   <h1>Auction Theme</h1>
                                                   <h2>HTML5 Responsive Auction Theme</h2>
                                                   <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
				   <?php
				   if($sessuser=="")
				   {
				   ?>
				   <p><a href="<?php echo base_url('index.php/auth/login') ?>" class="btn btn-lg btn-primary">Members Area</a></p>
				   <?php
				   }
				   else
				   {
				   ?>
                                                   <p><a href="<?php echo base_url('index.php/myaccount/index') ?>" class="btn btn-lg btn-primary">Members Area</a></p>
				   <?php
				   }
				   ?>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="clearfix"></div>
                                 <!--<div class="row boxes1" style="margin-top:15px;">
                                    <div class="col-md-3 col-sm-6 col-xs-12">
                                       <div class="imgwrap box1" style="background-image:url(<?php //echo base_url('assets/images/c1.jpg'); ?>);">
                                          <div class="wrap" >
                                             <a href="#">Cars</a>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-xs-12">
                                       <div class="imgwrap box2" style="background-image:url(<?php //echo base_url('assets/images/c2.jpg'); ?>);">
                                          <div class="wrap" >
                                             <a href="#">Coins</a>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-xs-12">
                                       <div class="imgwrap box3" style="background-image:url(<?php //echo base_url('assets/images/c3.jpg'); ?>);">
                                          <div class="wrap" >
                                             <a href="#">Clock</a>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-xs-12">
                                       <div class="imgwrap box4" style="background-image:url(<?php //echo base_url('assets/images/c4.jpg'); ?>);">
                                          <div class="wrap" >
                                             <a href="#">Books</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>-->
                                 <div id="car1" class="owl-carousel wlt_search_results grid_style style1">
			<?php
			
		            if (isset($productlist) && !empty($productlist)) {
				foreach ($productlist as $row1) {
		            ?>
                                    <div class="itemdata icons itemid<?php echo $row1->product_id; ?>  item-<?php echo $row1->product_id; ?> col-xs-12" >
                                       <div class="thumbnail clearfix">
                                          <div class='galleryframe frame'>
                                             <div class='overlay-gallery'>
                                                <div class='lbox'>
                                                   <a href='<?php echo base_url('admin/assets/uploads/'.$row1->photo); ?>' data-gal='prettyPhoto[ppt_gal_<?php echo $row1->product_id; ?>]'><span class='fa fa-camera'></span></a>
				   <a href='<?php echo base_url('index.php/product/productdetail/'.$row1->product_id); ?>'><span class='fa fa-search'></span></a>
                                                </div>
                                             </div>
                                             <img  src="<?php echo base_url('admin/assets/uploads/'.$row1->photo); ?>" alt="fallback-no-image-<?php echo $row1->product_id; ?>" class="wlt_thumbnail img-responsive" />
                                          </div>
                                          <!--<a href='<?php //echo base_url('admin/assets/uploads/'.$row1->photo); ?>' data-gal='prettyPhoto[ppt_gal_<?php //echo $row1->product_id; ?>]'></a> -->
                                          <div class="content">
                                             <h3>
                                                <a href="<?php echo base_url('index.php/product/productdetail/'.$row1->product_id); ?>" ><span><?php echo $row1->productname; ?></span></a> 
                                             </h3>
                                             <div class="row">
                                                <div class="col-md-6 col-sm-6 col-xs-6"> <b>Rs. <?php echo number_format($row1->bid_price); ?></b>  </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6 text-right"> <span class='wlt_shortcode_category'><a href="<?php echo base_url('index.php/product/list/'.$row1->cat_id); ?>" rel="tag"><?php echo $row1->cat_name; ?></a></span> <span class="bids"><?php echo $row1->total_bid; ?> bids</span>    </div>
                                             </div>
                                             <div class="line1"></div>
                                             <span class='wlt_shortcode_excerpt' ><?php echo $row1->description; ?></span>
                                             <span id='timeleft_<?php echo $row1->product_id; ?>1504439436381128_wrap'>
			         <?php
			         if($row1->status==0)
			         {
			         ?>
			         <div class="ea_finished"><span class="aetxt">Auction Finished</span></div>
			         <?php
			         }
			         else
			         {
			         ?>
			         <span id='timeleft_<?php echo $row1->product_id; ?>1504439436381128'></span>
			         <?php
			         }
			         ?>
			         </span>
			         <script>
                                                jQuery(document).ready(function() {		
                                                var dateStr ='<?php echo $row1->enddate; ?>'
                                                var a=dateStr.split(' ');
                                                var d=a[0].split('-');
                                                var t=a[1].split(':');
                                                var date1 = new Date(d[0],(d[1]-1),d[2],t[0],t[1],t[2]);			 
                                                jQuery('#timeleft_<?php echo $row1->product_id; ?>1504439436381128').countdown(
				{
				      timezone: +5.3,
				      until: date1,
				      onExpiry: WLTvalidateexpiry<?php echo $row1->product_id; ?> });
                                                });
                                                
                                                function WLTvalidateexpiry<?php echo $row1->product_id; ?>(){  setTimeout(function(){
					CoreDo('<?php echo base_url('index.php/Home/validateexpiry/'.$row1->product_id); ?>', 'timeleft_<?php echo $row1->product_id; ?>1504439436381128');
					jQuery('#timeleft_<?php echo $row1->product_id; ?>1504439436381128_wrap').html('<div class="ea_finished"><span class="aetxt">Auction Finished</span></div>'); }, 1000);
				};
                                                
                                             </script>
                                          </div>
                                       </div>
                                    </div>
			<?php
				}
			}
			?>
                                 </div>
                                 <script>
                                    jQuery(document).ready(function() { 
                                      jQuery("#car1").owlCarousel({ items : 4, autoPlay : true, rtl: true  }); 
                                    });
                                 </script>
                           </div>
                           </article>
                        </div>
                     </div>
                  </div>
               </div>