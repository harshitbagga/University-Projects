<div class="content-section">
                <div class="container-liquid">
					<div class="row">
                        <div class="col-xs-12">
							<div class="sec-box">
								<a class="closethis" href="<?php echo base_url('index.php/product/index'); ?>">Back</a>
                                <header>
                                    <h2 class="heading"><?php echo $page_title; ?></h2>
                                </header>
                                <div class="contents">
                                    <div class="table-box">
				
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="col-md-4">Description</th>
                                                    <th class="col-md-8">Form Elements</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="col-md-4">Product</td>
                                                    <td class="col-md-8"><?php echo (isset($productdata[0]->productname) && !empty($productdata[0]->productname) ? $productdata[0]->productname : ""); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Category</td>
                                                    <td class="col-md-8"><?php echo (isset($productdata[0]->cat_name) && !empty($productdata[0]->cat_name) ? $productdata[0]->cat_name : ""); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Description</td>
                                                    <td class="col-md-8"><?php echo (isset($productdata[0]->description) && !empty($productdata[0]->description) ? $productdata[0]->description : ""); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Start Date</td>
                                                    <td class="col-md-8"><?php echo (isset($productdata[0]->startdate) && !empty($productdata[0]->startdate) ? date('d-m-Y H:i:s',strtotime($productdata[0]->startdate)) : ""); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">End Date</td>
                                                    <td class="col-md-8"><?php echo (isset($productdata[0]->enddate) && !empty($productdata[0]->enddate) ? date('d-m-Y H:i:s',strtotime($productdata[0]->enddate)) : ""); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Starting Bidding Price</td>
                                                    <td class="col-md-8"><span><b>Rs. </b></span><?php echo (isset($productdata[0]->min_bid_price) && !empty($productdata[0]->min_bid_price) ? number_format($productdata[0]->min_bid_price,2) : ""); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Reserved Price</td>
                                                    <td class="col-md-8"><span><b>Rs. </b></span><?php echo (isset($productdata[0]->resprice) && !empty($productdata[0]->resprice) ? number_format($productdata[0]->resprice,2) : ""); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Existing Photo</td>
                                                    <td class="col-md-8"><img src="<?php echo base_url("assets/uploads/".$productdata[0]->photo); ?>" alt="<?php echo $productdata[0]->productname; ?>" border="0" width="100" height="100"/></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Condition</td>
                                                    <td class="col-md-8"><?php echo ($productdata[0]->product_condition==1?'Used':'New'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Posting Date</td>
                                                    <td class="col-md-8"><?php echo $productdata[0]->posting_date; ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Status</td>
                                                    <td class="col-md-8"><?php echo ($productdata[0]->status==1?'Open':'Close'); ?></td>
                                                </tr>
                                            </tbody>
                                        </table>
									</div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Row End -->
                </div>
            </div>
<script>
function changeEventHandler(event){
	var fullPath = event.target.value;
    var filename = fullPath.replace(/^.*[\\\/]/, '');
	$("#photo_name").val(filename);
}

<?php echo $validation_script; ?>
</script>