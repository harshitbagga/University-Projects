<div id="core_padding">

	    
     
    
        
    <div id="core_padding_inner">

	<div class=" container widecontainer core_section_top_container">
    
     

		<div class="row core_section_top_row wlt_main_2colsright">
 

 <div id="core_inner_wrap" class="clearfix">   

	 
 		
	
		 
	<article class="col-md-12" id="core_middle_column"><div class="core_middle_wrap"><div id="core_ajax_callback"></div>	
	 
       
		
 

<div class="row">



<div class="col-md-4 col-md-offset-4">

	<!--<div class="bs-callout bs-callout-info">
				<button type="button" class="close" data-dismiss="alert">x</button>
				<h4 class="alert-heading">Demo Account Logins</h4>
				<p>You can login with the details below to test our the members and admin areas.</p>
				<p>
				  Username: <b>demo</b> / Password: <b>demo</b>
				</p>
				<p>Username: <b>admindemo</b> / Password: <b>admindemo</b> </p>
	</div>-->
	
<div class="panel panel-default" id="login_box">

<div class="panel-heading">Change Password</div>

	<div class="panel-body"> 
    
    
    
    
    
	<?php echo '<p class="error">'.$this->session->flashdata('error').'</p>'; ?>
<?php echo '<p class="success">'.$this->session->flashdata('success').'</p>'; ?>
     <script type="text/javascript"> function ValidateCoreFields(){
																var old_pass 	= document.getElementById("old_pass");
																var new_pass 	= document.getElementById("new_pass");

																var ret_pass 	= document.getElementById("ret_pass");
													
																
																var flag=0;
													
																			
													
																if(old_pass.value == '')
													
																{
													
																	old_pass.focus();
													
																	old_pass.style.border = 'thin solid red';
													
																	flag=1;
													
																}
																if(new_pass.value == '')
													
																{
													
																	new_pass.focus();
													
																	new_pass.style.border = 'thin solid red';
													
																	flag=1;
													
																}
																
																if(ret_pass.value == '')
													
																{
													
																	ret_pass.focus();
													
																	ret_pass.style.border = 'thin solid red';
													
																	flag=1;
													
																}
																
																	if(ret_pass.value == new_pass.value)
													
																{
													
																	ret_pass.focus();
													
																	ret_pass.style.border = 'thin solid red';
													
																	flag=1;
													
																}
													
															if(flag==1)
															{
																alert('Please complete all fields.');
																return false;
															}
															else
																return true;

														
														}</script>
    <form class="loginform" id="changepwdform" name="changepwdform" action="<?php echo base_url('index.php/myaccount/change_password'); ?>" onsubmit="return ValidateCoreFields();" method="post" > 
    
    
        
                
    
                  <div class="form-group clearfix">
                  <label for="old_pass">Old Password</label>
                  <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                    <input type="password" name="old_pass" id="old_pass" class="form-control">                  
                  </div>
                </div>
                <div class="form-group clearfix">
                  <label for="new_pass">New Password</label>
                  <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                    <input type="password" name="new_pass" id="new_pass" class="form-control">                  
                  </div>
                </div>
																<div class="form-group clearfix">
                  <label for="ret_pass">Re-type Password</label>
                  <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                    <input type="password" name="ret_pass" id="ret_pass" class="form-control">                  
                  </div>
                </div>
                                 
                
                <div class="text-center">
                 <input type="submit" name="wp-submit" id="wp-submit" class="btn btn-primary btn-lg" style="width:100%;" value="Change Password">  
                
                </div>
                
  </form>
                
               
                <hr />
                
                                
               
                
               
   
          
	</div>
     
</div>    


</div> 
</div>



	
 	
                
                
       </div></article>
        
 
               
        
          
    
        
    </div>
    
    </div>
    
	</div>

	</div>
				