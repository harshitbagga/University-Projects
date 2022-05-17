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
			<a class="closethis" href="<?php echo base_url('index.php/package/add_package'); ?>">Add Package</a>
                                <header>
                                    <h2 class="heading"><?php echo $title; ?><span></span></h2>
                                </header>
                                <div class="contents">
                                    <div class="table-box">
                                    	<table class="display table" id="example">
                                            <thead>
                                                <tr>
					<th>Package</th>
					<th>Price</th>
					<th>Photo</th>
                                                    <th class="center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
				<?php
				if (isset($packagelist) && !empty($packagelist)) {
					$i=1;
					foreach ($packagelist as $row) {
						if(($i%2)==0){
				?>
					<tr class="gradeC">
						<td><a href="<?php echo base_url("index.php/package/edit_package/".$row->package_id); ?>" >
								<?php echo $row->pname; ?>
							</a><br/><span><b>Description : </b><br/><?php echo $row->package_descr; ?>
						</td>
						<td><?php echo $row->pprice; ?><br/><span><b>Bid : </b><?php echo $row->bid; ?></span></td>
						<td><img src="<?php echo base_url("assets/uploads/".$row->photo); ?>" alt="<?php echo $row->pname; ?>" border="0" width="100" height="100"/></td>
                                                    <td class="center"><a href="<?php echo base_url("index.php/package/edit_package/".$row->package_id); ?>" ><span class="glyphicon glyphicon-edit"></span></a>
											&nbsp;|&nbsp;<a href="<?php echo base_url('index.php/package/delete_package/'.$row->package_id); ?>" onclick="return confirm('Are you sure you want to delete this package : <?php echo $row->pname; ?> ?');"><span class="glyphicon glyphicon-remove"></span></a>
													</td>
                                                </tr>
				<?php
						}
					    else
						{
				?>
					<tr class="gradeX">
						<td><a href="<?php echo base_url("index.php/package/edit_package/".$row->package_id); ?>">
								<?php echo $row->pname; ?>
							</a><br/><span><b>Description : </b><br/><?php echo $row->package_descr; ?>
						</td>
						<td><?php echo $row->pprice; ?><br/><span><b>Bid : </b><?php echo $row->bid; ?></td>
						<td><img src="<?php echo base_url("assets/uploads/".$row->photo); ?>" alt="<?php echo $row->pname; ?>" border="0" width="100" height="100"/></td>
                                                    <td class="center"><a href="<?php echo base_url("index.php/package/edit_package/".$row->package_id); ?>"><span class="glyphicon glyphicon-edit"></span></a>
											&nbsp;|&nbsp;<a href="<?php echo base_url('index.php/package/delete_package/'.$row->package_id); ?>" onclick="return confirm('Are you sure you want to delete this package : <?php echo $row->pname; ?> ?');"><span class="glyphicon glyphicon-remove"></span></a>
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
				<th><input type="text" name="search_title" value="Search Package" class="search_init" /></th>
				<th><input type="text" name="search_title" value="Search Package Price" class="search_init" /></th>
                                                    <th>&nbsp;</th>
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
