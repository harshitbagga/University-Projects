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
                                <header>
                                    <h2 class="heading"><?php echo $page_title; ?></h2>
                                </header>
                                <div class="contents">
                                    <div class="table-box">
									<form class="form-horizontal" action="<?php echo base_url('index.php/settings/add_city'); ?>" id="city_form" name="city_form" method="post">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="col-md-4">Description</th>
                                                    <th class="col-md-8">Form Elements</th>
                                                </tr>
                                            </thead>
                                            <tbody>
												<tr>
                                                    <td class="col-md-4">Country</td>
                                                    <td class="col-md-8"><input type="text" placeholder="Select Country" name="countryid" id="countryid" class="form-control itemSearch" onchange="change_state(this.value);"><?php echo form_error('countryid','<p class="error">'); ?></td>
                                                </tr>
												<tr>
                                                    <td class="col-md-4">State</td>
                                                    <td class="col-md-8"><input type="text" placeholder="Select State" name="stateid" id="stateid" class="form-control itemSearch"><?php echo form_error('stateid','<p class="error">'); ?></td>
                                                </tr>
                                                <tr>
                                                    <td class="col-md-4">City</td>
                                                    <td class="col-md-8"><input type="text" placeholder="City Name" name="cityname" id="cityname" class="form-control"><?php echo form_error('cityname','<p class="error">'); ?></td>
                                                </tr>
                                                <tr>
                                                    <td class="col-md-12" colspan="2" style="text-align:center;">
													<input type="hidden" placeholder="City Id" name="cityid" id="cityid" class="form-control">
													<button type="submit" name="btnsubmit" id="btnsubmit" class="btn btn-primary">Save</button>
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
                    <div class="row">
                        <div class="col-xs-12">
							<div id="alert_msg">
						    <?php if ($this->session->flashdata('success') != "") { ?>
							<div class="alert alert-success">
                                        <strong>Well done!</strong>
                                        <?php echo $this->session->flashdata('success'); ?>
                            </div>
							<?php } ?>
							</div>
                            <div class="sec-box">
                                <header>
                                    <h2 class="heading"><?php echo $title; ?></h2>
                                </header>
                                <div class="contents">
                                    <div class="table-box">
                                    	<table class="display table" id="example">
                                            <thead>
                                                <tr>
													<th>Country</th>
                                                    <th>State</th>
													<th>City</th>
													<th class="center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
											<?php
											if (isset($citylist) && !empty($citylist)) {
												$i=1;
												foreach ($citylist as $row) {
													if(($i%2)==0){
											?>
												<tr class="gradeC">
													<td><?php echo $row->country_name; ?></td>
													<td><?php echo $row->state_name; ?></td>
													<td><a href="javascript:void(0)" onClick="edit_city(<?php echo $row->city_id;  ?>,<?php echo $row->state_id;  ?>,<?php echo $row->country_id;  ?>)"><?php echo $row->city_name; ?></a></td>
                                                    <td class="center"><a href="javascript:void(0)" onClick="edit_city(<?php echo $row->city_id;  ?>,<?php echo $row->state_id;  ?>,<?php echo $row->country_id;  ?>)"><span class="glyphicon glyphicon-edit"></span></a>
															&nbsp;|&nbsp;<a href="<?php echo base_url('index.php/settings/delete_city/'.$row->city_id); ?>" onclick="return confirm('Are you sure you want to delete this city : <?php echo $row->city_name; ?> ?')"><span class="glyphicon glyphicon-remove"></span></a>
													</td>
                                                </tr>
											<?php
													}
												    else
													{
											?>
												<tr class="gradeX">
													<td><?php echo $row->country_name; ?></td>
													<td><?php echo $row->state_name; ?></td>
													<td><a href="javascript:void(0)" onClick="edit_city(<?php echo $row->city_id;  ?>,<?php echo $row->state_id;  ?>,<?php echo $row->country_id;  ?>)"><?php echo $row->city_name; ?></a></td>
                                                    <td class="center"><a href="javascript:void(0)" onClick="edit_city(<?php echo $row->city_id;  ?>,<?php echo $row->state_id;  ?>,<?php echo $row->country_id;  ?>)"><span class="glyphicon glyphicon-edit"></span></a>
															&nbsp;|&nbsp;<a href="<?php echo base_url('index.php/settings/delete_city/'.$row->city_id); ?>" onclick="return confirm('Are you sure you want to delete this city : <?php echo $row->city_name; ?> ?')"><span class="glyphicon glyphicon-remove"></span></a>
													</td>
                                                </tr>
											<?php
													}
													$i++;
												}
											}
											?>
                                            </tbody>
                                            <tfoot>
                                                <tr>
													<th><input type="text" name="search_title" value="Search Country" class="search_init" /></th>
                                                    <th><input type="text" name="search_title1" value="Search State" class="search_init" /></th>
													<th><input type="text" name="search_title2" value="Search City" class="search_init" /></th>
													<th>&nbsp;</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <script>
                                        	var asInitVals = new Array();			
											$(document).ready(function() {
												var oTable = $('#example').dataTable( {
													"oLanguage": {
														"sSearch": "Search all columns:"
													}
												} );
												
												$("tfoot input").keyup( function () {
													/* Filter on the column (the index) of this element */
													oTable.fnFilter( this.value, $("tfoot input").index(this) );
												} );
												
												
												
												/*
												 * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
												 * the footer
												 */
												$("tfoot input").each( function (i) {
													asInitVals[i] = this.value;
												} );
												
												$("tfoot input").focus( function () {
													if ( this.className == "search_init" )
													{
														this.className = "";
														this.value = "";
													}
												} );
												
												$("tfoot input").blur( function (i) {
													if ( this.value == "" )
													{
														this.className = "search_init";
														this.value = asInitVals[$("tfoot input").index(this)];
													}
												} );
											} );

                                        </script>
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
<?php echo $validation_script; ?>
</script>