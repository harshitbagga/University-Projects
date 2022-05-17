<div class="content-section">
                <div class="container-liquid">
					<div class="row">
                        <div class="col-xs-12">
							<?php if ($this->session->flashdata('error') != "") { ?>
							<div class="alert alert-warning">
                                        <strong>Oops!</strong>
                                        <?php echo $this->session->flashdata('error'); ?>
                            </div>
							<?php } ?>
							<div class="sec-box">
								<a class="closethis" href="<?php echo base_url('index.php/product/index'); ?>">Back</a>
                                <header>
                                    <h2 class="heading"><?php echo $page_title; ?></h2>
                                </header>
                                <div class="contents">
                                    <div class="table-box">
				<form class="form-horizontal" action="<?php echo base_url('index.php/product/edit_product'); ?>" id="product_form" name="product_form" method="post" enctype="multipart/form-data">
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
                                                    <td class="col-md-8"><input type="text" placeholder="Product Name" name="productname" id="productname" class="form-control" value="<?php echo set_value('productname',(isset($productdata[0]->productname) && !empty($productdata[0]->productname)) ? $productdata[0]->productname : ""); ?>"><?php echo form_error('productname','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Category</td>
                                                    <td class="col-md-8"><input type="text" placeholder="Select Category" name="catid" id="catid" class="form-control itemSearch"><?php echo form_error('catid','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Description</td>
                                                    <td class="col-md-8"><textarea placeholder="Product Description" name="pdescr" id="pdescr" class="form-control"><?php echo set_value('pdescr',(isset($productdata[0]->description) && !empty($productdata[0]->description)) ? $productdata[0]->description : ""); ?></textarea><?php echo form_error('pdescr','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Start Date</td>
                                                    <td class="col-md-8"><input type="text" placeholder="dd-mm-yy" name="startdate" id="startdate" class="form-control" value="<?php echo set_value('startdate',(isset($productdata[0]->startdate) && !empty($productdata[0]->startdate)) ? date('d-m-Y',strtotime($productdata[0]->startdate)) : ""); ?>"><?php echo form_error('startdate','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">End Date</td>
                                                    <td class="col-md-8"><input type="text" placeholder="dd-mm-yy" name="enddate" id="enddate" class="form-control" value="<?php echo set_value('enddate',(isset($productdata[0]->enddate) && !empty($productdata[0]->enddate)) ? date('d-m-Y',strtotime($productdata[0]->enddate)) : ""); ?>"><?php echo form_error('enddate','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Starting Bidding Price</td>
                                                    <td class="col-md-8"><span style="float:left;margin-top:8px;margin-right:5px;"><b>Rs. </b></span><input type="text" placeholder="Starting Bidding Price" name="bidprice" id="bidprice" class="form-control_1" value="<?php echo set_value('bidprice',(isset($productdata[0]->min_bid_price) && !empty($productdata[0]->min_bid_price)) ? $productdata[0]->min_bid_price : ""); ?>"><?php echo form_error('bidprice','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Reserved Price</td>
                                                    <td class="col-md-8"><span style="float:left;margin-top:8px;margin-right:5px;"><b>Rs. </b></span><input type="text" placeholder="Reserved Price" name="resprice" id="resprice" class="form-control_1" value="<?php echo set_value('resprice',(isset($productdata[0]->resprice) && !empty($productdata[0]->resprice)) ? $productdata[0]->resprice : ""); ?>"><?php echo form_error('resprice','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Photo</td>
                                                    <td class="col-md-8"><input type="file" name="productfile" id="productfile" class="form-control" onchange="changeEventHandler(event);"><?php echo form_error('productfile','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Existing Photo</td>
                                                    <td class="col-md-8"><img src="<?php echo base_url("assets/uploads/".$productdata[0]->photo); ?>" alt="<?php echo $productdata[0]->productname; ?>" border="0" width="100" height="100"/></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Condition</td>
                                                    <td class="col-md-8"><input type="radio" name="pcondition" id="pcondition" value="0" <?php echo ($productdata[0]->product_condition==0?'checked="checked"':''); ?>>New <input type="radio" name="pcondition" id="pcondition" value="1" <?php echo ($productdata[0]->product_condition==1?'checked="checked"':''); ?>>Used<?php echo form_error('pcondition','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Status</td>
                                                    <td class="col-md-8"><input type="radio" name="astatus" id="astatus" value="1" <?php echo ($productdata[0]->status==1?'checked="checked"':''); ?>>Open <input type="radio" name="astatus" id="astatus" value="0" <?php echo ($productdata[0]->status==0?'checked="checked"':''); ?>>Close<?php echo form_error('astatus','<p class="error">'); ?></td>
                                                </tr>
                                                <tr>
                                                    <td class="col-md-12" colspan="2" style="text-align:center;">
				   <button type="submit" name="btnsubmit" id="btnsubmit" class="btn btn-primary">Save</button>
				   <input type="hidden" name="photo_name" id="photo_name" value="<?php echo set_value('photo_name',(isset($productdata[0]->photo) && !empty($productdata[0]->photo)) ? $productdata[0]->photo : ""); ?>"/>
				   <input type="hidden" name="productid" id="productid" value="<?php echo set_value('productid',(isset($productdata[0]->product_id) && !empty($productdata[0]->product_id)) ? $productdata[0]->product_id : ""); ?>"/>
					</td>
                                                </tr>
                                            </tbody>
                                        </table>
				</form>
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