<div class="content-section">
                <div class="container-liquid">
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
													<th>Name</th>
													<th>Mobile</th>
													<th>Email</th>
													<th>User Type</th>
													<th>Gender</th>
													
                                                </tr>
                                            </thead>
                                            <tbody>
											<?php
											if (isset($userlist) && !empty($userlist)) {
												$i=1;
												foreach ($userlist as $row) {
													if(($i%2)==0){
											?>
												<tr class="gradeC">
													<td><?php echo $row->FirstName." ".$row->LastName; ?><br />
													<span><b>Address : </b><?php echo $row->Address.", ".$row->city_name.",<br />".$row->state_name." - ".$row->zipcode.", ".$row->country_name; ?></span><br />
													<span><b>Available Bid : </b><?php echo $row->balance_bid; ?></span>
													</td>
													<td><?php echo $row->Contact; ?></td>
													<td><?php echo $row->Email; ?></td>
													<td><?php echo $row->Type; ?></td>
													<td><?php echo $row->Gender; ?></td>
													
                                                </tr>
											<?php
													}
												    else
													{
											?>
												<tr class="gradeX">
													<td><?php echo $row->FirstName." ".$row->LastName; ?><br />
													<span><b>Address : </b><?php echo $row->Address.", ".$row->city_name.",<br />".$row->state_name." - ".$row->zipcode.", ".$row->country_name; ?></span><br />
													<span><b>Available Bid : </b><?php echo $row->balance_bid; ?></span>
													</td>
													<td><?php echo $row->Contact; ?></td>
													<td><?php echo $row->Email; ?></td>
													<td><?php echo $row->Type; ?></td>
													<td><?php echo $row->Gender; ?></td>
													
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
													<th><input type="text" name="search_title" value="Search Name" class="search_init" /></th>
													<th><input type="text" name="search_title1" value="Search Contact" class="search_init" /></th>
													<th><input type="text" name="search_title2" value="Search Email" class="search_init" /></th>
													<th><input type="text" name="search_title3" value="Search Type" class="search_init" /></th>
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