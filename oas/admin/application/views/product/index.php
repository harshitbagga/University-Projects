<style>
/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}

/* The Close Button */
.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
</style>
<script type="text/javascript">
function show_popup(pid)
{
    var modal = document.getElementById('myModal');
    $.ajax({
	method: "POST",
	url: "<?php echo base_url('index.php/product/view_product_bidding') ?>",
	data: { productid: pid }
   })
   .done(function( data ) {
	modal.style.display = "block";
	var obj = JSON.parse(data);
	console.log(obj);
	htmlContent='';
	if(obj.length>0)
	{
		for(var i=0;i<obj.length;i++)
		{
		      htmlContent+='<tr>';
		      htmlContent+='<td>'+obj[i]["bid_date"].toString()+'</td>';
		      htmlContent+='<td>'+obj[i]["username"].toString()+'</td>';
		      htmlContent+='<td>'+obj[i]["bid_price"].toString()+'</td>';
		      htmlContent+='<td>'+obj[i]["bid_count"].toString()+'</td>';
		      var pBid=JSON.parse(obj[i]["previous_bid"]);
		      htmlContent+='<td>';
		      htmlContent+='<table width="100%" border="1">';
		      htmlContent+='<tr>';
		      htmlContent+='<td>Bid Date</td>';
		      htmlContent+='<td>Amount</td>';
		      htmlContent+='</tr>';
		      for(var j=0;j<pBid.length;j++)
		      {
			htmlContent+='<tr>';
			htmlContent+='<td>'+pBid[j]["bidDate"].toString()+'</td>';
			htmlContent+='<td>'+pBid[j]["Amount"].toString()+'</td>';
			htmlContent+='</tr>';
		      }
		      htmlContent+='</table></td>';
		      htmlContent+='<td>&nbsp;</td>';
		      htmlContent+='<td>&nbsp;</td>';
		      htmlContent+='</tr>';
		}
	}
	else
	{
		      htmlContent+='<tr>';
		      htmlContent+='<td colspan="7" style="text-align:center;">Empty History</td>';
		      htmlContent+='</tr>';	
	}
	$("#TContent").html(htmlContent);
	
    });
    
}
function hide_popup()
{
    var modal = document.getElementById('myModal');
    $("#TContent").html('');
    modal.style.display = "none";
}
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        $("#TContent").html('');
        modal.style.display = "none";
    }
}
</script>
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
			<a class="closethis" href="<?php echo base_url('index.php/product/add_product'); ?>">Add Product</a>
                                <header>
                                    <h2 class="heading"><?php echo $title; ?><span></span></h2>
                                </header>
                                <div class="contents">
                                    <div class="table-box">
                                    	<table class="display table" id="example">
                                            <thead>
                                                <tr>
					<th>Product</th>
					<th>Bid Price</th>
					<th>Date</th>
					<th>Photo</th>
                                                    <th class="center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
				<?php
				if (isset($productlist) && !empty($productlist)) {
					$i=1;
					foreach ($productlist as $row) {
						if(($i%2)==0){
				?>
					<tr class="gradeC">
						<td><a href="<?php echo base_url("index.php/product/edit_product/".$row->product_id); ?>" >
								<?php echo $row->productname; ?>
							</a><br />
						<span><b>Category : </b></span><?php echo $row->cat_name; ?><br />
						<span><b>Condition : </b></span><?php echo ($row->product_condition==1?'Used':'New'); ?><br />
						<span><b>Status : </b></span><?php echo ($row->status==1?'Open':'Close'); ?>
						</td>
						<td><span><b>Start Price : Rs. </b></span><?php echo number_format($row->min_bid_price,2); ?><br />
						<span><b>Reserved Price : Rs. </b></span><?php echo number_format($row->resprice,2); ?>
						</td>
						<td><span><b>Start Date : </b></span><?php echo date('d-m-Y H:i:s',strtotime($row->startdate)); ?><br />
						<span><b>End Date : </b></span><?php echo date('d-m-Y H:i:s',strtotime($row->enddate)); ?><br />
						<span><b>Posting Date : </b></span><?php echo $row->posting_date; ?>
						</td>
						<td><img src="<?php echo base_url("assets/uploads/".$row->photo); ?>" alt="<?php echo $row->productname; ?>" border="0" width="100" height="100"/></td>
                                                    <td class="center">
					<a href="javascript:void(0)" onclick="show_popup('<?php echo $row->product_id; ?>')"><span class="glyphicon glyphicon-list"></span></a>
					&nbsp;|&nbsp;
					<a href="<?php echo base_url("index.php/product/view_product/".$row->product_id); ?>" ><span class="glyphicon glyphicon-search"></span></a>
											&nbsp;|&nbsp;<a href="<?php echo base_url("index.php/product/edit_product/".$row->product_id); ?>" ><span class="glyphicon glyphicon-edit"></span></a>
											&nbsp;|&nbsp;<a href="<?php echo base_url('index.php/product/delete_product/'.$row->product_id); ?>" onclick="return confirm('Are you sure you want to delete this product : <?php echo $row->productname; ?> ?');"><span class="glyphicon glyphicon-remove"></span></a>
													</td>
                                                </tr>
				<?php
						}
					    else
						{
				?>
					<tr class="gradeX">
						<td><a href="<?php echo base_url("index.php/product/edit_product/".$row->product_id); ?>" >
								<?php echo $row->productname; ?>
							</a><br />
						<span><b>Category : </b></span><?php echo $row->cat_name; ?><br />
						<span><b>Condition : </b></span><?php echo ($row->product_condition==1?'Used':'New'); ?><br />
						<span><b>Status : </b></span><?php echo ($row->status==1?'Open':'Close'); ?>
						</td>
						<td><span><b>Start Price : Rs. </b></span><?php echo number_format($row->min_bid_price,2); ?><br />
						<span><b>Reserved Price : Rs. </b></span><?php echo number_format($row->resprice,2); ?>
						</td>
						<td><span><b>Start Date : </b></span><?php echo date('d-m-Y H:i:s',strtotime($row->startdate)); ?><br />
						<span><b>End Date : </b></span><?php echo date('d-m-Y H:i:s',strtotime($row->enddate)); ?><br />
						<span><b>Posting Date : </b></span><?php echo $row->posting_date; ?>
						</td>
						<td><img src="<?php echo base_url("assets/uploads/".$row->photo); ?>" alt="<?php echo $row->productname; ?>" border="0" width="100" height="100"/></td>
                                                    <td class="center">
					<a href="javascript:void(0)" onclick="show_popup('<?php echo $row->product_id; ?>')"><span class="glyphicon glyphicon-list"></span></a>
					&nbsp;|&nbsp;
					<a href="<?php echo base_url("index.php/product/view_product/".$row->product_id); ?>" ><span class="glyphicon glyphicon-search"></span></a>
											&nbsp;|&nbsp;<a href="<?php echo base_url("index.php/product/edit_product/".$row->product_id); ?>" ><span class="glyphicon glyphicon-edit"></span></a>
											&nbsp;|&nbsp;<a href="<?php echo base_url('index.php/product/delete_product/'.$row->product_id); ?>" onclick="return confirm('Are you sure you want to delete this product : <?php echo $row->productname; ?> ?');"><span class="glyphicon glyphicon-remove"></span></a>
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
				<th><input type="text" name="search_title" value="Search Product" class="search_init" /></th>
				<th><input type="text" name="search_title" value="Search Product Bid Price" class="search_init" /></th>
				<th>&nbsp;</th>
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
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close" onclick="hide_popup();">&times;</span>
    <table class="display table" id="example">
                                            <thead>
                                                <tr>
					<th>Date</th>
					<th>User</th>
					<th>Price</th>
					<th>No. of Bid</th>
					<th>Previous Bid</th>
					<th>Declare Result</th>
                                                    <th class="center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody id="TContent">
				
                                            </tbody>
                                            
                                        </table>
  </div>

</div>