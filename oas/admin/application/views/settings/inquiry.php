<div class="content-section">
                <div class="container-liquid">
	        <div class="row">
                        <div class="col-xs-12">
							
                            <div class="sec-box">
                                <header>
                                    <h2 class="heading"><?php echo $title; ?></h2>
                                </header>
                                <div class="contents">
                                    <div class="table-box">
                                    	<table class="display table" id="example">
                                            <thead>
                                                <tr>
				    <th>Date</th>
				    <th>Name</th>
				    <th>Email</th>
				    <th>Phone No.</th>
				    <th>Message</th>
                                                </tr>
                                            </thead>
                                            <tbody>
				<?php
				if (isset($inquirylist) && !empty($inquirylist)) {
					$i=1;
					foreach ($inquirylist as $row) {
						if(($i%2)==0){
				?>
					<tr class="gradeC">
					<td><?php echo date('d-m-Y h:i:s',strtotime($row->posting_date)); ?></td>
					<td><?php echo $row->feed_fname; ?></td>
					<td><?php echo $row->feed_email; ?></td>
					<td><?php echo $row->feed_contact; ?></td>
					<td><?php echo $row->feed_msg; ?></td>
					</tr>
				<?php
						}
					    else
						{
				?>
					<tr class="gradeX">
					<td><?php echo date('d-m-Y h:i:s',strtotime($row->posting_date)); ?></td>
					<td><?php echo $row->feed_fname; ?></td>
					<td><?php echo $row->feed_email; ?></td>
					<td><?php echo $row->feed_contact; ?></td>
					<td><?php echo $row->feed_msg; ?></td>
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
				   <th><input type="text" name="search_date" value="Search Date" class="search_init" /></th>
				   <th><input type="text" name="search_name" value="Search Name" class="search_init" /></th>
                                                    <th><input type="text" name="search_email" value="Search Email" class="search_init" /></th>
				    <th><input type="text" name="search_mob" value="Search Contact" class="search_init" /></th>
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