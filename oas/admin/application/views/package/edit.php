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
								<a class="closethis" href="<?php echo base_url('index.php/package/index'); ?>">Back</a>
                                <header>
                                    <h2 class="heading"><?php echo $page_title; ?></h2>
                                </header>
                                <div class="contents">
                                    <div class="table-box">
				<form class="form-horizontal" action="<?php echo base_url('index.php/package/edit_package'); ?>" id="package_form" name="package_form" method="post" enctype="multipart/form-data">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="col-md-4">Description</th>
                                                    <th class="col-md-8">Form Elements</th>
                                                </tr>
                                            </thead>
                                            <tbody>
												<tr>
                                                    <td class="col-md-4">Package</td>
                                                    <td class="col-md-8"><input type="text" placeholder="Package Name" name="packagename" id="packagename" class="form-control" value="<?php echo set_value('packagename',(isset($packagedata[0]->pname) && !empty($packagedata[0]->pname)) ? $packagedata[0]->pname : ""); ?>" ><?php echo form_error('packagename','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Price</td>
                                                    <td class="col-md-8"><input type="text" placeholder="Package Price" name="packageprice" id="packageprice" class="form-control" value="<?php echo set_value('packageprice',(isset($packagedata[0]->pprice) && !empty($packagedata[0]->pprice)) ? $packagedata[0]->pprice : ""); ?>"><?php echo form_error('packageprice','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">No. of Bid</td>
                                                    <td class="col-md-8"><input type="text" placeholder="No. of Bid" name="nbid" id="nbid" class="form-control" value="<?php echo set_value('nbid',(isset($packagedata[0]->bid) && !empty($packagedata[0]->bid)) ? $packagedata[0]->bid : ""); ?>"><?php echo form_error('nbid','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Description</td>
                                                    <td class="col-md-8"><textarea placeholder="Package Description" name="pdescr" id="pdescr" class="form-control"><?php echo set_value('pdescr',(isset($packagedata[0]->package_descr) && !empty($packagedata[0]->package_descr)) ? $packagedata[0]->package_descr : ""); ?></textarea><?php echo form_error('pdescr','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Photo</td>
                                                    <td class="col-md-8"><input type="file" name="packagefile" id="packagefile" class="form-control" onchange="changeEventHandler(event);"><?php echo form_error('packagefile','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">Existing Photo</td>
                                                    <td class="col-md-8"><img src="<?php echo base_url("assets/uploads/".$packagedata[0]->photo); ?>" alt="<?php echo $packagedata[0]->pname; ?>" border="0" width="100" height="100"/></td>
                                                </tr>
                                                <tr>
                                                    <td class="col-md-12" colspan="2" style="text-align:center;">
				   <button type="submit" name="btnsubmit" id="btnsubmit" class="btn btn-primary">Save</button>
				   <input type="hidden" name="photo_name" id="photo_name" value="<?php echo set_value('photo_name',(isset($packagedata[0]->photo) && !empty($packagedata[0]->photo)) ? $packagedata[0]->photo : ""); ?>"/>
				   <input type="hidden" name="packageid" id="packageid" value="<?php echo set_value('packageid',(isset($packagedata[0]->package_id) && !empty($packagedata[0]->package_id)) ? $packagedata[0]->package_id : ""); ?>"/>
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